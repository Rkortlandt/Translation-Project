interface IPointElement {
    pointCords: { 
      X: number, 
      Y: number
    },
    pointScreenPoint: { 
      X: number, 
      Y: number
    },
    type: string, 
    id: number
  }
  
  export default function renderPoints(ptx: any, canvas: any) {
    for (let i = 1; i < sessionStorage.length + 1; i++) {
      const pointElement: IPointElement = JSON.parse(sessionStorage.getItem(`${i.toString()}${'Point'}`) || "null");
        ptx.clearRect(0, 0, canvas.width, canvas.height);
        ptx.beginPath();
        ptx.strokeStyle = "#14425a";
        ptx.fillStyle = "#14425a";
        ptx.arc(pointElement.pointScreenPoint.X, pointElement.pointScreenPoint.Y, 6, 0, 2 * Math.PI);
        ptx.fill(); 
    }
  }
  
