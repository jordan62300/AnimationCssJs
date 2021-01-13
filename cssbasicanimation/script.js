// quatrieme anim

let span_4  = document.getElementsByClassName('transition-width');
let inner4 = document.getElementById("inner-quatre");


span_4[0].addEventListener("click", (e) => {
    console.log(inner4.clientWidth)
    if(  inner4.style.width == "0px"){
    inner4.style.width = "100%";
    inner4.style.opacity = "1";
}   else {
    inner4.style.width = "0";
    inner4.style.opacity = "0";
}
})

// Cinquieme animation translate x

const btn = document.getElementById("translate-btn");
const divAnimated = document.getElementsByClassName("container-animated");
let isOpen = false;

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(!isOpen){
        isOpen = !isOpen
        divAnimated[0].classList.add("translatex-animation");
    } else {
        isOpen = !isOpen
        divAnimated[0].classList.remove("translatex-animation");
    }
})