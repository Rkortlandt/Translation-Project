export default function renderPoints(ptx, canvas) {
    ptx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < sessionStorage.length; i++) {
        console.log(`${i}Point`);
        const pointElement = JSON.parse(sessionStorage.getItem(`${i}Point`));
        // if (pointElement == null) {
        //     continue;
        // }
        console.log(pointElement);
        console.log('this code is running');
        console.log(sessionStorage.length);
        ptx.beginPath();
        ptx.strokeStyle = "#14425a";
        ptx.fillStyle = "#14425a";
        ptx.arc(pointElement.pointScreenPoint.X, pointElement.pointScreenPoint.Y, 6, 0, 2 * Math.PI);
        ptx.fill();
    }
}
//# sourceMappingURL=renderElements.js.map