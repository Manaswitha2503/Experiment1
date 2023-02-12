var car = null;
var timer = null;

function init(){
    car = document.getElementById('car')
    car.style.position = "relative";
    car.style.left ="4px";
}

function move(){
    car.style.left= parseInt(car.style.left) + 30 + "px";
    timer = setTimeout(move,200)
    x=parseInt(car.style.left)
    if(x >= 1055){
        document.getElementById("dangermsg").innerHTML="DANGER";
        dangermsg.style.display = "block";
        clearTimeout(timer);
    }
}
function stop(){
    clearTimeout(timer);
}

function reset(){
    init();
}