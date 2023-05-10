var cardiv=document.querySelector("#carani")
var text=document.querySelector("#heading2")

function carmove(){
    cardiv.style.transform="translateX(315px)"
    cardiv.style.transition="transform 3s"
    text.style.transform="translateY(0px)"
    text.style.filter="opacity(1)"
    text.style.transition="transform 3s,filter 8s"
}
