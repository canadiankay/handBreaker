import React from "react";
import Canvas from "./Canvas.js";
// Breakout

export default function Game({ user }) {
  return (
    <div>
      <h1>handBreaker</h1>

      <Canvas user={user} />
    </div>
  );
}