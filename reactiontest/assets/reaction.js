
var shape = document.getElementById("dot1");
var start = Date.now();

function appearAgain (){
    setTimeout(makeShapeAppear, Math.random()*2000);
}
    
function makeShapeAppear(){
    start = Date.now();
    shape.style.display = "block";
    shape.style.marginTop = Math.random()*400 + "px";
    shape.style.marginLeft = Math.random()*400 + "px";
    shape.style.height = shape.style.width = Math.random()*150 + 50 + "px";
    shape.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    if (Math.random() < 0.5){
        shape.style.borderRadius = "0%";
    } else{
        shape.style.borderRadius = "50%";
    }
}

    appearAgain();
shape.onclick = function(){     
    shape.style.display = "none";  
    var end = Date.now();
    var timeTaken = end - start;  
    document.getElementById("timed").innerHTML = timeTaken / 1000 + "s";   
    appearAgain();
}

   

