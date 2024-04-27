export const bounce = (ctx, canvas) => {
  ctx.beginPath();
  ctx.arc(Math.random() * 72, Math.random() * 72, 10, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "yellow";
  ctx.stroke();
};
