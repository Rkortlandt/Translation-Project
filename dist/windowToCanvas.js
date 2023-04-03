export default function windowToCanvas(canvas, x, y) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const X = (x - rect.left) * scaleX;
    const Y = (y - rect.top) * scaleY;
    return { x: X, y: Y };
}
//# sourceMappingURL=windowToCanvas.js.map