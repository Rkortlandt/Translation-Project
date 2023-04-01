interface IPointElement {
    pointScreenPoint: { 
      X: number, 
      Y: number
    },
    pointCords: { 
      X: number, 
      Y: number
    },
    type: string, 
    id: number
  }
  
  export default function renderPoints(ptx: any, canvas: any) {
    ptx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < sessionStorage.length; i++) {
        console.log(`${i}Point`);
        const pointElement: IPointElement | null = JSON.parse(sessionStorage.getItem(`${i}Point`));
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

  
