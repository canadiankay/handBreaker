// brick will be an object because each individual brick is an object


export default function CreateBrick(level, bricks,canvas, brick ) {
  brick.width = canvas.width / 5 - 1 ; //we dont want width from brick object because the width is supposed to be dyanmic and based on the canvas width

  let newBricks = [];

  // edge case: if no brick is not present/undefined, we return an empty array
  if (!brick) return [];

  //if all the rows--  decides how many rows/tiers there will be) 
  //if levels are filled, we dont want to display any more bricks
  // we want five items in a row (if not, then go to the next line)
  if (bricks.length >= 5 * level) return; 

  // this creates bricks (6 is how many bricks in a level and row decides how many tiers there will be)
  for (let i = 0; i < 5 * level; i++) { 
    let newBrick = new Brick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors // we only want one color for now
    );
    newBricks.push(newBrick);
    // newBrick.draw();
    brick.x += brick.width + 1;
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5;
      brick.y += brick.height + 1;
    }
  }
  console.log(newBricks);
  return newBricks;
}


// a single brick 
class Brick {
  constructor(x, y, w, h, c) {
    this.x = x - w;
    this.y = y;
    this.width = w;
    this.height = h;
    this.colors = c;
    this.broke = false; //THIS IS IMPORTANT!!!
    //this indicates whether it's broken or not *** if broken then ball doesnt care about it
  }
  //function that draws the bricks on canvas
  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.broke ? "rgba(19, 73, 89, 0)" : this.colors[0];//this is in reference to the array of colors in data

    ctx.lineWidth = 10;
    ctx.strokeStyle = this.broke ? "rgba(19, 73, 89, 0)" : "transparent";
    // ctx.globalCompositeOperation = "destination-atop";
    // ctx.shadowBlur = 0;
    // ctx.shadowColor = "blue";
    ctx.fill();
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}