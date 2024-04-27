function Square(x, y, size, color) {
  this.x = x;
  this.y = y;
  this.dx = 5; // this.dx is what we will now add to this.x every frame
  this.dy = 5; // this.dx is what we will now add to this.x every frame
  this.size = size;
  this.color = color;
  this.draw = (ctx) => {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  };
  this.animate = (canvas) => {
    this.x += this.dx;
    this.y += this.dy;
    // this.y += this.dx;
    if (this.x + this.size >= canvas.width || this.x <= 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.size >= canvas.height || this.y <= 0) {
      this.dy = -this.dy;
    }
  };
  // const bounceOffWalls = square => {
  //   if (square.x + square.size >= canvas.width || square.x <= 0) {
  //     square.dx = -square.dx;
  //   }
  // };
}

const redSquare = new Square(25, 12, 13, "red");

export const bounce = (ctx, canvas) => {
  redSquare.animate(canvas);
  redSquare.draw(ctx);
  // ctx.beginPath();
  // ctx.arc(Math.random() * 72, Math.random() * 72, 10, 0, 2 * Math.PI);
  // ctx.stroke();
  // ctx.fillStyle = "red";
  // ctx.fill();
  // ctx.lineWidth = 4;
  // ctx.strokeStyle = "yellow";
  // ctx.stroke();
};
