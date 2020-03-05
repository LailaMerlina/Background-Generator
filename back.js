var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body= document.getElementById("gradient");
var button= document.getElementById("Randomize");




function setGradient(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", "
    + color2.value
    +")";

    css.textContent= body.style.background + ";";
}


color1.addEventListener("input", setGradient);


color2.addEventListener("input", setGradient);

console.log(color1.value)
console.log(color2.value)

function generateColor() {
var randomValue1= Math.floor(Math.random()*256) ;
var randomValue2= Math.floor(Math.random()*256) ;
var randomValue3= Math.floor(Math.random()*256) ;
return "rgb("+randomValue1+","+randomValue2+","+ randomValue3+ ")"
}

function randomGradient(){ 
   body.style.background =
   "linear-gradient(to right,"+ generateColor() +","+ generateColor()+")"

   css.textContent= body.style.background + ";";

}

button.addEventListener("click", randomGradient)



