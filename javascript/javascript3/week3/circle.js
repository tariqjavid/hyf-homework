

function canvas()
{
const x=document.getElementById('myCanvas')
const ctx=x.getContext("2d")

// create N by lines
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(100, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200,100);
ctx.lineTo(200, 200);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(200, 200);
ctx.stroke();
 
// cirles with diffrent sizes
for(let x=5 ,color=0,radius=10;x<10;x++)
{

    for(let y=5;y<10;y++)
    {
    ctx.beginPath();
    ctx.arc(60*x, 60*y, radius, 0,2*Math.PI)
    ctx.closePath();
    ctx.strokeStyle= 'hsl('+color+',100%,50%)'
    ctx.stroke();
    radius+=1;
    color+=17;
 
    }
}
}

canvas();

//fillRect and fill Style method
/*

for(let col=0,color=0;col<40;col++)
{

    for(let row=0;row<40;row++)
    {

        ctx.fillRect(col*25,row*25,24,24)
        ctx.fillStyle= 'hsl('+color+',100%,50%)'
        color+=17;
    }
}
*/


//ClearRect
/*
for(let col=0,color=0;col<10;col++)
{

    for(let row=0;row<10;row++)
    {

        ctx.fillRect(col*25,row*25,50,50)
        ctx.fillStyle= 'hsl('+color+',100%,50%)'
        ctx.clearRect(col*25,row*25,10,10);
        color+=17;
    }
}*/


/*
for(let i=1,color=0;i<30;i++)
{
    for(let j=1;j<10;j++)
    {
        ctx.beginPath();
        
        ctx.arc(50*i, 50*j, 18, 0,Math.PI);
        ctx.strokeStyle= 'hsl('+color+',100%,50%)'
        ctx.lineWidth=43;
        ctx.lineCap = "round";//squar
        color+=10;
        ctx.stroke();
        
        
    }
    
}
*/
