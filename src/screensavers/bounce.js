function Square(x, y, size, color) {
  this.x = x;
  this.y = y;
  this.dx = Math.random() * 2; // this.dx is what we will now add to this.x every frame
  this.dy = Math.random() * 2; // this.dx is what we will now add to this.x every frame
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
}

var colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

const sqrz = [...Array(20).keys()].map(
  () =>
    new Square(
      Math.random() * 72,
      Math.random() * 72,
      8,
      // @ts-ignore
      colorArray[parseInt(Math.random() * 70)]
    )
);

export const bounce = (ctx, canvas) => {
  sqrz.forEach((sqr) => {
    sqr.animate(canvas);
    sqr.draw(ctx);
  });
};
