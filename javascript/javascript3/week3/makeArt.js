

//Now lets make art!

class Circle
{
    constructor(x, y, r, startAngle, endAngle, fillColor)
{
    this.x=x;
    this.y=y;
    this.r=r;
    this.startAngle=startAngle;
    this.endAngle=endAngle;
    this.fillColor=fillColor;
}
draw=()=> 
{
    let myCanvas=document.getElementById("myCanvas")
    let ctx=myCanvas.getContext("2d")
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.startAngle,this.endAngle)
    ctx.fillStyle =this.fillColor;
    ctx.fill();
    ctx.stroke();
    
}
}
let  randN=Math.floor(Math.random()*(80-100)+1)+80;// randonm number generator.
let  randomColor = Math.floor(Math.random()*16777215).toString(16);//random color generator
let  xPosition=Math.floor(Math.random()*1200+1); //random x-position generator
let  yPosition=Math.floor(Math.random()*400+1);//random y-position generator
 let c1 = new Circle(xPosition, yPosition, randN, 0, 2*Math.PI,`#${randomColor}`);

 const timeOut=setInterval(c1.draw,1000);

 //clearTimeout(timeOut)
setInterval(()=>{
    location.reload();
},3000)

