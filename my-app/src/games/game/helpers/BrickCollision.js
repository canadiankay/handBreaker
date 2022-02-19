// takes in the ball (circle) and brick
export default function BrickCollision(circle, rectangle) {

  // takes in the math absolute value of both shape values 
  let distX = Math.abs(circle.x - rectangle.x - rectangle.width / 2);
  let distY = Math.abs(circle.y - rectangle.y - rectangle.height / 2);

  //takes care of edge cases
  if (distX > rectangle.width / 2 + circle.rad) return {hit: false}; // return false

  if (distY > rectangle.height / 2 + circle.rad) return {hit: false}; // returns false

  // need to know what axis it is diverting to so we take care of X and Y axises
  if (distX <= rectangle.width / 2) {
    // return true;
    return {
      hit: true,
      axis: "Y",
    };
  }

  if (distY <= rectangle.height / 2) {
    // return true;
    return {
      hit: true,
      axis: "X",
    };
  }

  // EDGE CASES-- takes care of corner/edge collisions-- 
  let dx = distX - rectangle.width / 2;
  let dy = distY - rectangle.height / 2;

  return {
    hit: dx * dx + dy * dy <= circle.rad * circle.rad,
    axis: "X",
  };
} 