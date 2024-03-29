
//'Most of the global vars'--------------------------------------------
var l = document.getElementById("lines"),
    ltx = l.getContext("2d");
var canvas = document.getElementById('dynamic'),
    ptx = canvas.getContext('2d');
var s = document.getElementById("static"),
    stx = s.getContext("2d");
var t = document.getElementById("preview"),
    ttx = t.getContext("2d");
var totalPoints = 0,
    saveNumber = 0, 
    popUpSeen = false;
var cords = document.getElementById('cords');
var reflectX = false, 
    reflectY = false;
//Console.log (on initalize)

console.log(`Total Points ${totalPoints}`);

    /** @type {HTMLCanvasElement} */
 
//Main Lines
    stx.translate(484/2, 484/2);
    stx.beginPath()
//line to right 
    stx.moveTo(0,0);
    stx.lineTo(242-22, 0);
    stx.stroke();
//line to left  
    stx.moveTo(0,0);
    stx.lineTo(-242+22, 0);
    stx.stroke();
//line down    
    stx.moveTo(0,0);
    stx.lineTo(0, 242-22);
    stx.stroke();
//line up    
    stx.moveTo(0,0);
    stx.lineTo(0, -242+22);
    stx.stroke();

//Black line markers----------------------------------------------------    
for (let i = -10; i <= 10; i++) {
  let y = -22 * i
  let x = -10 
  let x2 = 10
  stx.moveTo(x,y);
    stx.lineTo(x2,y);
    stx.stroke();
}
for (let i = -10; i <= 10; i++) {
  let x = -22 * i
  let y = -10 
  let y2 = 10
 
  stx.moveTo(x,y);
    stx.lineTo(x,y2);
    stx.stroke();
}
  
stx.resetTransform()
//All the little gray things-------------------------------------------
for (let i = 0; i <= 20; i++) {
    if (i !== 10) {
        var ydash = 22 + i*22 ;
        for (let i = 0; i <= 20; i++) {
            if (i !== 10){
                x = 20 + i * 22
                x2 = 24 + i * 22
                stx.beginPath();
                stx.strokeStyle = "#bdbdbd"
                stx.moveTo(x, ydash);
                stx.lineTo(x2, ydash);
                stx.stroke();
            }
            else {
                console.log("X skipped")
            }
        }
    }
    else {
        console.log("Y skipped")
    }
}


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------BARIER-------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




//Get cords for cnavas------------------------------------------------- 
function windowToCanvas(canvas, x, y) {
   var bbox = canvas.getBoundingClientRect();
   return { x: x - bbox.left * (canvas.width  / bbox.width),
            y: y - bbox.top  * (canvas.height / bbox.height)
          };
}


// Event handlers.....................................................

canvas.onclick = function (e) {
   var loc = windowToCanvas(canvas, e.clientX, e.clientY);
  if (totalPoints < 20) {
   addStorage(loc.x,loc.y)
   updatePoints(loc.x, loc.y);
   //updateReadout(loc.x, loc.y);
   
  }
  else if (totalPoints > 19 && popUpSeen === false) {
      alert('To many Points! (10)')
      popUpSeen = true 
  }
  else {

  }
};
shapify.onclick = function () {
  connectTheDots();
}
translate.onclick = function () {
  moveCords();
  clearGidelines();
}
clearcanvas.onclick = function () {
    clearCanvas();
}
reflect.onclick = function () {
    flipAxis();
}
rotate.onclick = function () {
    rotateAxis();
}
Dilation.onclick = function () {
    doDialation();
}
//Math for SNAP System @TM----------------------------------------------
function closestNumber(n, m)
{
    let q = parseInt(n / m);
    let n1 = m * q;
    let n2 = (n * m) > 0 ?
        (m * (q + 1)) : (m * (q - 1));
    if (Math.abs(n - n1) < Math.abs(n - n2))
        return n1;
    return n2;
}
//Add new data to storage !center = 0!----------------------------------
function addStorage(x,y) {
    const screenPoint = {
        X: closestNumber(x, 22),
        Y: closestNumber(y, 22)
    }  
    const cords = {
        X: screenPoint.X - 484/2,
        Y: -screenPoint.Y + 484/2  
    }
    function Point() {
        saveNumber++
        totalPoints++ 
        console.log(`! update ! Current Save num = ${saveNumber} Total Points = ${totalPoints}`);
         return Point = saveNumber
    }
    sessionStorage.setItem(Point(), JSON.stringify(cords));
 }  
 //Add Points-----------------------------------------------------------
 function updatePoints () {
    ptx.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 1; i < sessionStorage.length + 1; i++) {
        let cords = JSON.parse(sessionStorage.getItem(i));
    const screenPoint = {
        X: cords.X + 484/2,
        Y: -cords.Y + 484/2
    }
    ptx.beginPath();
     ptx.strokeStyle = "#14425a";
     ptx.fillStyle = "#14425a";
     ptx.arc(screenPoint.X, screenPoint.Y, 6, 0, 2 * Math.PI);
     ptx.fill(); 
    }
   document.getElementById('MoveY').value = '0';
   document.getElementById('MoveX').value = '0';
}
//ConvertCords----------------------------------------------------------
function convertCords() {
    for (i = 1; i < sessionStorage.length + 1; i++){
        let cords = JSON.parse(sessionStorage.getItem(i));
        const convertedCords = {
         X: cords.X - 484/2,
         Y: -cords.Y + 484/2  
}
return convertedCords
       }
}
//Make lines------------------------------------------------------------
function connectTheDots () {
    for (i = 1; i < sessionStorage.length + 1; i++) {
      let p
      let point1 = sessionStorage.getItem(i)
       
      if (i < sessionStorage.length){
          p = i + 1;
      }
      else {
          p = 1  
      }
    //Convert JSON to usable points-------------------------
      let point2 = sessionStorage.getItem(p)
      cords1 = JSON.parse(point1);
      cords2 = JSON.parse(point2);
      
      const screenPoint1 = {
          X: cords1.X + 484/2,
          Y: -cords1.Y + 484/2
      }
      const screenPoint2 = {
          X: cords2.X + 484/2,
          Y: -cords2.Y + 484/2
      }
        //Write lines------------------------------------
        ltx.beginPath();
        ltx.lineWidth = 3;
        ltx.strokeStyle = '#000000';
        ltx.moveTo(screenPoint1.X, screenPoint1.Y);
        ltx.lineTo(screenPoint2.X, screenPoint2.Y);
        ltx.stroke();
    }
}    
 //For translations-----------------------------------------------------
 function getMoveCordsX (key) {
    let moveX = document.getElementById('MoveX').value;
    let moveCordsX = moveX * 22
    return moveCordsX   
}
function getMoveCordsY (key) {
    let moveY = document.getElementById('MoveY').value;
    let moveCordsY = moveY * 22
    return moveCordsY  
}
//Draw gide-------------------------------------------------------------
function drawChangeArrow () {
    clearGidelines();
    for (i = 1; i < sessionStorage.length + 1; i++) { 
    moveCordsX = getMoveCordsX(i);
    moveCordsY = getMoveCordsY(i);
    let cords = JSON.parse(sessionStorage.getItem(i));
    const screenPoint = {
        X: cords.X + 484/2,
        Y: -cords.Y + 484/2
    }
    ttx.beginPath(); 
        ttx.setLineDash([4, 2]);
        ttx.strokeStyle = "black"
        ttx.moveTo(screenPoint.X,screenPoint.Y);
        ttx.lineTo(screenPoint.X + moveCordsX,screenPoint.Y)
        ttx.stroke();
    ttx.beginPath();  
        ttx.setLineDash([4, 2]);
        ttx.strokeStyle = "black" 
        ttx.moveTo(screenPoint.X + moveCordsX,screenPoint.Y);
        ttx.lineTo(screenPoint.X + moveCordsX,screenPoint.Y - moveCordsY)
        ttx.stroke();
    ttx.beginPath();
        ttx.fillStyle = "#32CD32";
        ttx.arc(screenPoint.X + moveCordsX,screenPoint.Y - moveCordsY, 6, 0, 2 * Math.PI);
        ttx.fill();
    }
}
//Update cords for translations-----------------------------------------
function moveCords () {
    let moveCordsX = getMoveCordsX();  
    let moveCordsY = getMoveCordsY();
    for (i = 1; i < sessionStorage.length + 1; i++) {  
        let cords = JSON.parse(sessionStorage.getItem(i));
            const updatecords = {
            X: cords.X + moveCordsX,
            Y: cords.Y + moveCordsY
            }      
        sessionStorage.setItem(i, JSON.stringify(updatecords));
    }
    ltx.clearRect(0, 0, canvas.width, canvas.height);
    updatePoints();
    connectTheDots();
}
function updateReflectY () {
if (reflectY === false) {
 reflectY = true;
}
else if (reflectY === true) {
 reflectY = false;
}
}
function updateReflectX () {
    if (reflectX === false) {
        reflectX = true;
       }
       else if (reflectX === true) {
        reflectX = false;
       }  
}
function flipAxis () {

if (reflectX === true && reflectY === false) {
    for (i = 1; i < sessionStorage.length + 1; i++) { 
        let cords = JSON.parse(sessionStorage.getItem(i));
        let flipCord = cords.Y * -1
        const updatecords = {
            X: cords.X,
            Y: flipCord
        }
        sessionStorage.setItem(i, JSON.stringify(updatecords));
    }
    ltx.clearRect(0, 0, canvas.width, canvas.height);
    updatePoints();
    connectTheDots();
}
else if (reflectY === true && reflectX === false) {
    for (i = 1; i < sessionStorage.length + 1; i++) { 
        let cords = JSON.parse(sessionStorage.getItem(i));
        let flipCord = cords.X * -1
        const updatecords = {
            X: flipCord,
            Y: cords.Y
        }
        sessionStorage.setItem(i, JSON.stringify(updatecords));
    }
    ltx.clearRect(0, 0, canvas.width, canvas.height);
    updatePoints();
    connectTheDots();
}
else if (reflectX === true && reflectY === true) {
    alert('You Cannot Reflect both X and Y at the same time');
}
else {
}
}
function rotateAxis () {
    for (i = 1; i < sessionStorage.length + 1; i++) {  
        let cords = JSON.parse(sessionStorage.getItem(i));
        const rotate = {
            X: cords.Y,
            Y: -1 * cords.X
        }
        sessionStorage.setItem(i, JSON.stringify(rotate));   
    }
    ltx.clearRect(0, 0, canvas.width, canvas.height);
        updatePoints();
        connectTheDots();
}
function getDialationCords (i,p) {
    let scalefactor = document.getElementById('scaleFactor').value;
    let cords = JSON.parse(sessionStorage.getItem(i));
    let cords2 = JSON.parse(sessionStorage.getItem(p));
    
    const scale = {
        X: cords.X * scalefactor,
        Y: cords.Y * scalefactor 
    }
    const scale2 = {
        X: cords2.X * scalefactor,
        Y: cords2.Y * scalefactor 
    }      
    const screenPoint = {
        X:  scale.X + 484/2,
        Y: -scale.Y + 484/2,
        X2: scale2.X + 484/2,
        Y2:-scale2.Y + 484/2
        
    }
    return screenPoint;
}
function drawExampleShape () {
    clearGidelines();
    console.log('ok');
    for (i = 1; i < sessionStorage.length + 1; i++) {   
        if (i < sessionStorage.length){
            p = i + 1;
        }
        else {
            p = 1  
        }
        let screenPoint = getDialationCords(i,p);
        ttx.beginPath();
        ttx.fillStyle = "#32CD32";
        ttx.arc(screenPoint.X,screenPoint.Y, 6, 0, 2 * Math.PI);
        ttx.fill();
        
        ttx.beginPath();
        ttx.fillStyle = "#32CD32";
        ttx.arc(screenPoint.X2,screenPoint.Y2, 6, 0, 2 * Math.PI);
        ttx.fill();

        ttx.beginPath(); 
        ttx.setLineDash([4, 2]);
        ttx.strokeStyle = "black"
        ttx.moveTo(screenPoint.X,screenPoint.Y);
        ttx.lineTo(screenPoint.X2,screenPoint.Y2)
        ttx.stroke();
    }
}
function doDialation () {
    for (i = 1; i < sessionStorage.length + 1; i++) {   
        if (i < sessionStorage.length){
            p = i + 1;
        }
        else {
            p = 1  
        }
    let screenPoint = getDialationCords(i,p);
     const cords = {
         X: screenPoint.X - 484/2,
         Y: -screenPoint.Y + 484/2
     }
     console.log(cords.X,cords.Y) 
     sessionStorage.setItem(i, JSON.stringify(cords));      
}
ltx.clearRect(0, 0, canvas.width, canvas.height);
updatePoints();
connectTheDots();
clearGidelines();   
}
// Clear Data-----------------------------------------------------------
function clearCanvas() {
    ptx.clearRect(0, 0, canvas.width, canvas.height);
    ltx.clearRect(0, 0, canvas.width, canvas.height);
    ttx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('scaleFactor').value = '0';
    sessionStorage.clear();
        saveNumber = 0
        totalPoints = 0
}
function clearGidelines() {
    ttx.clearRect(0, 0, canvas.width, canvas.height);
}
