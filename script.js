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