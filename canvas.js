let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
initialize()
function initialize(){
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
}
function redraw() {
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight);
}
function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    redraw();
}
function drawRectangle(){
    ctx.fillRect(200, 200, rectangle2.width, rectangle1.height);
    ctx.fillRect(500, 400, rectangle2.width, rectangle2.height);
    ctx.fillRect(800, 400, rectangle3.width, rectangle3.height);
}
drawRectangle()
function printAreaAndCir(){
    ctx.font = "30px Arial";
    ctx.fillText("Rectangle Area and Cir",10,50);
    ctx.fillText(`Area rec1 : ${rectangle1.calArea()}px------rec2 : ${rectangle2.calArea()}px------- rec3 : ${rectangle3.calArea()}px `,10,100);
    ctx.fillText(`Circumference rec1 : ${rectangle1.calCircum()}px------rec2 : ${rectangle2.calCircum()}px------rec3 : ${rectangle3.calCircum()}px`, 10, 150)
}
printAreaAndCir()