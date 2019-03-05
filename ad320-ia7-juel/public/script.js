

function changeFirst(){
    var background = document.getElementById("first").style.backgroundColor;
    if(background == "red"){
        document.getElementById("first").style.backgroundColor = "blue";
    }else {
        document.getElementById("first").style.backgroundColor = "red";
    }   
}


document.getElementById("first").addEventListener("click", changeFirst);





