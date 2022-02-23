import * as handTrack from 'handtrackjs';
import data from '../../data'
let { paddle } = data;
export default function Handtrack() {
  const canvas = document.querySelector("canvas")
  const ctx = canvas.getContext("2d");
  const video = document.getElementById("myvideo");
  const handimg = document.getElementById("handimage");
  let trackButton = document.getElementById("trackbutton");
  let updateNote = document.getElementById("updatenote");
  let videoInterval = 100
  let webcamWidth = 140;
  let webcamMiddleX = webcamWidth / 2;
  let webcamLeftX = webcamWidth / 2;
  let playerDetection = 1;

  //it's a component deadmount
  let isVideo = false;
  let model = null;
  const modelParams = {
    flipHorizontal: true, // flip e.g for video
    maxNumBoxes: 1, // maximum number of boxes to detect
    iouThreshold: 0.5, // ioU threshold for non-max suppression
    scoreThreshold: 0.6, // confidence threshold for predictions.
  };


  function startVideo() {
    handTrack.startVideo(video).then(function (status) {
      console.log("video started", status);
      if (status) {
        updateNote.innerText = "Video started. Now tracking";
        isVideo = true;
        runDetection();
      } else {
        updateNote.innerText = "Please enable video";
      }
    });
  }

  function toggleVideo() {
    if (!isVideo) {
      updateNote.innerText = "Starting video";
      startVideo();
    } else {
      updateNote.innerText = "Stopping video";
      handTrack.stopVideo(video);
      isVideo = false;
      updateNote.innerText = "Video stopped";
    }
  }



  trackButton.addEventListener("click", function () {
    toggleVideo();
  });





  function runDetection() {
    model.detect(video)
      .then(predictions => {
        model.renderPredictions(predictions, canvas, ctx, video);
        if (isVideo) {
          setTimeout(() => {
            runDetection(video)
          }, videoInterval);
        }
        if (predictions.length > 0) {
          webcamMiddleX = predictions[0].bbox[0] + (predictions[0].bbox[2] / 2);
          webcamLeftX = predictions[0].bbox[0];
          if (playerDetection === 1) {
            if (webcamMiddleX > (webcamWidth / 3)) {
              paddle.x = (webcamLeftX + (webcamMiddleX - webcamLeftX)) * canvas.width / webcamWidth;
            } else if (webcamMiddleX > ((webcamWidth * 2) / 3) && ((webcamLeftX + (predictions[0].bbox[2])) * canvas.width / webcamWidth) < canvas.width) {
              paddle.x = (webcamLeftX + (predictions[0].bbox[2])) * canvas.width / webcamWidth;
            } else {
              paddle.x = webcamLeftX * canvas.width / webcamWidth;
              // console.log(paddle.x)
            }
          } else if (playerDetection === 2) {
            if (webcamMiddleX > (webcamWidth / 3)) {
              paddle.x = (webcamLeftX + (webcamMiddleX - webcamLeftX)) * canvas.width / webcamWidth;
              // console.log(paddle.x)
            } else if (webcamMiddleX > ((webcamWidth * 2) / 3) && ((webcamLeftX + (predictions[0].bbox[2])) * canvas.width / webcamWidth)) {
              paddle.x = (webcamLeftX + (predictions[0].bbox[2])) * canvas.width / webcamWidth;
              // console.log(paddle.x)
            } else {
              paddle.x = webcamLeftX * canvas.width / webcamWidth;
              // console.log(paddle.x)
            }
          }
        }
      });
  }

  function runDetectionImage(img) {
    model.detect(img).then((predictions) => {
      console.log("Predictions: ", predictions);
      model.renderPredictions(predictions, canvas, ctx, img);
    });
  }

  // Load the model.
  handTrack.load(modelParams).then((lmodel) => {
    // detect objects in the image.
    model = lmodel;
    console.log(model);
    updateNote.innerText = "Loaded Model!";
    runDetectionImage(handimg);
    trackButton.disabled = false;
  });
}