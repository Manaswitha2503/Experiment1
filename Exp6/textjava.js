

function bgcolor(){
    var div = document.getElementById("box");
    var bgcolor = document.getElementById("bgcolor").value;
    div.style.backgroundColor = bgcolor;
}

function tcolor(){
    var div = document.getElementById("box");
    var tcolor = document.getElementById("tcolor").value;
    div.style.color = tcolor;
}

function tsize(){
    var div = document.getElementById("box");
    var tsize = document.getElementById("tsize").value;
    div.style.fontSize = tsize + "%";
}

function width(){
    var div = document.getElementById("box");
    var width = document.getElementById("width").value;
    div.style.width = width + "px";
}

function height(){
    var div = document.getElementById("box");
    var height = document.getElementById("height").value;
    div.style.height = height + "px";
} 

function bdradius(){
    var div = document.getElementById("box");
    var bdradius = document.getElementById("bdradius").value;
    div.style.opacity = bdradius + "%";
}