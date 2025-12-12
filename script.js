let minShow = document.getElementById("min");
let secShow = document.getElementById("sec");

let btn = document.getElementById("btn");

let btnStop = document.getElementById("btnStop");

let dancingImg = document.getElementById("dancing");

let waitingCj = document.getElementById("waiting");

dancingImg.classList.add("hide");
waitingCj.classList.add("hide");

 
let min = 0;
let sec = 0; 
let sisa = null;
 

btn.addEventListener("click",runChrono )
          
          


function runChrono () {
  

   if (sisa === null){
waitingCj.classList.add("hide");
dancingImg.classList.remove("hide");
sisa = setInterval(()=>{

started = false
sec++;

if (sec === 60){
          sec= 0;
          min++;
}

minShow.textContent= `Minutes→ ${min}`;
secShow.textContent= `Seconds→ ${sec}`;
 
}, 1000) 

return sisa

   }
 
}


       
   function stopChrono () {
dancingImg.classList.add("hide");
waitingCj.classList.remove("hide");
return clearInterval( sisa);

  
   }

  
btnStop.addEventListener("click",stopChrono);
 

 
 