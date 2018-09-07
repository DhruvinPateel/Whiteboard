// setup colors
const BLACK = "#000000";
const PINK = "#F50057";
const BLUE = "#2979FF";
const YELLOW = "#FFD600";
const WHITE = "#FFFFFF";

// setup variables for logging
var log = document.getElementById("log");

// set up the canvas
var context = document.getElementById("main").getContext("2d");

// setup default pen style
context.strokeStyle="#0000ff";
context.lineJoin = "round";
context.lineWidth = 7;

// UI BOBAGEM - update slider UI to match default linewidth
document.getElementById("slider").value = context.lineWidth;
brushSize.innerHTML = context.lineWidth;

// change brush size
document.getElementById("slider").addEventListener("change", function() {
  var sliderValue = this.value;
  context.lineWidth = sliderValue;
  brushSize.innerHTML = sliderValue;
})


// setup colors;
document.getElementById("black").addEventListener("click", function(){
  context.strokeStyle = BLACK;
  context.fillStyle=BLACK;  
});

document.getElementById("pink").addEventListener("click", function(){
  context.strokeStyle = PINK;
  context.fillStyle=PINK;  
});

document.getElementById("blue").addEventListener("click", function(){
  context.strokeStyle = BLUE;
  context.fillStyle=BLUE;
});

document.getElementById("yellow").addEventListener("click", function(){
  context.strokeStyle = YELLOW;
  context.fillStyle=YELLOW;
});


// setup Eraser
document.getElementById("erase").addEventListener("click", function() {
  context.strokeStyle = WHITE;
  context.fillStyle=WHITE;
});

// setup New startDrawing
document.getElementById("new").addEventListener("click", function() {
  context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
})


// set up watch variables
var startDrawing = false;
var mainCanvas = document.getElementById("main")


var dragging = false;

mainCanvas.addEventListener("mouseleave", function(){
  console.log("leaving the canvas!");
  startDrawing = false;
});


var flag = 0;

mainCanvas.addEventListener("mousedown", function(){
    flag = 0;
    startDrawing = true;
    
}, false);

mainCanvas.addEventListener("mousemove", function(){
    flag = 1;

    if (startDrawing == true) {
      console.log("dragging!");
      dragging = true;
      var x = event.pageX - mainCanvas.offsetLeft;
      var y = event.pageY - mainCanvas.offsetTop;
      context.lineTo(x, y);
      context.closePath();
      context.stroke();

      context.moveTo(x,y);
    }
}, false);

mainCanvas.addEventListener("mouseup", function(){

    startDrawing = false;
    
    if(flag === 0){
        console.log("click");

        // draw a rectangle
        var brushSize = context.lineWidth;

        var x = event.pageX - mainCanvas.offsetLeft;
        var y = event.pageY - mainCanvas.offsetTop;

       
        context.fillRect(x,y,brushSize,brushSize);
    }
    else if(flag === 1){
        console.log("drag");
        context.beginPath();
    }
}, false);