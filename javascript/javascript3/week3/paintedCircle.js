
// create circles with diffrent sizes.

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
const c1 = new Circle(100, 100, 50, 0, 2*Math.PI, '#FF0000');
const c2 = new Circle(300, 300, 60, 0, 2*Math.PI, '#008000');
const c3 = new Circle(500, 100, 70, 0, 2*Math.PI, '#FFD700');
c1.draw();
c2.draw();
c3.draw();







