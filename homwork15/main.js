const text = document.getElementById("input");
const area = document.getElementById("platform");


text.onkeydown = function(e){
    if(e.keyCode === 13){
    e.preventDefault();
    if(text.value !== ""){
    const newdiv = document.createElement("div");
    newdiv.style.color = "white";
    newdiv.style.backgroundColor = "gray";
    newdiv.style.marginTop = "10px"
    newdiv.innerHTML = text.value;
    area.appendChild(newdiv);
    text.value = "";  
        }
    else{
        alert("Enter something");
    }
    }
};

