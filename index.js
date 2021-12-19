let div=document.getElementById("div");
var interval;
var both=0;
function moveleft(){
    var left=
    parseInt(window.getComputedStyle(div).getPropertyValue("left"));
    div.style.left=left - 2 +"px";
}
function moveright(){
    var left=
    parseInt(window.getComputedStyle(div).getPropertyValue("left"));
    div.style.left=left + 2 +"px";
}
function movedown(){
    var top=
    parseInt(window.getComputedStyle(div).getPropertyValue("top"));
    div.style.top=top + 2 +"px";
}
function moveup(){
    var top=
    parseInt(window.getComputedStyle(div).getPropertyValue("top"));
    div.style.top=top - 2 +"px";
}
document.addEventListener("keydown" , event => {
    if(both==0){
        both++;
        if(event.key==="ArrowLeft"){
            interval=setInterval(moveleft, 1);
        }
        if(event.key==="ArrowRight"){
            interval=setInterval(moveright, 1);
        }
        if(event.key==="ArrowDown"){
            interval=setInterval(movedown , 1);
        }
        if(event.key==="ArrowUp"){
            interval=setInterval(moveup , 1);
        }
    }
});
document.addEventListener("keyup" ,event =>{
    clearInterval(interval);
    both=0;
})