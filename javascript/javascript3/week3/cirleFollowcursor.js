
         

         function pointerMotion()
         {
             const cursor=document.querySelector('.cursor')
             document.addEventListener('mousemove',e=>{
                 cursor.setAttribute('style','top: '+e.pageY+'px; left: '+e.pageX +'px;')
                 const ctx=cursor.getContext("2d")
                 ctx.beginPath();
                 ctx.arc(100, 75, 20, 0, 2 * Math.PI);
                 console.log(e.screenX,e.screenY)
                 ctx.fillStyle =`#${e.screenX,e.screenX}`
                 ctx.fill();
           })
         }


          pointerMotion()