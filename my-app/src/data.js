
//this will handle ball object + its position 

// let canvas_height = 600;
// let canvas_width = 1000;

export default {
  paddle: {
    width: 100,
    height:20,
    // x: canvas.width / 2 - 50,
    x: 450,
    // y: canvas.height - 70,///this is constant wont change in the game
    y: 530,///this is constant wont change in the game
    dx: 5 //this is amount of pixels paddle will move to the right/left-- wont change
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

}
