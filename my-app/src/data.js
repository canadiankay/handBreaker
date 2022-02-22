// eslint-disable-next-line
export default {
  paddle: {
    width: 100,
    height:20,
    // x: canvas.width / 2 - 50,
    // x: 450,
    x: 100,
    // y: canvas.height - 70,///this is constant wont change in the game
    // y: 530,///this is constant wont change in the game
    // dx: 5, //this is amount of pixels paddle will move to the right/left-- wont change
    // color:"green"
  },
  ball:{
    radius: 10,
    // x: canvas_width / 2, 
    x: 500,
    // y: paddle.y - 8,
    y: 520,
    speed: 4,
    dx: 3 * (Math.random() * 2 - 1),  // this allows ball to go into random positions-- will generate random numbers between 3 and -
    dy: -3
  },
  brick: {
    x: 0.5,
    y: 50,
    // width: canvas.width / 5 - 1,
    // width: 50, //we dont want width because the width is supposed to be dyanmic and based on the canvas width
    height: 20,
    density: 2,
    colors: ["blue", "orange"] //the second item changes the color of the bricks and everything-- find out why!
  },
  player: {
    name: "LABBER",
    lives: 3,
    score: 0,
    level: 1
  }

}
