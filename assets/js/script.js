// https://www.youtube.com/watch?v=GpG4cXuoruE&list=PLGWM6mVGOFZ7K80ebnJfk3MoMolVUV7sg&index=2
//Landing Page - Construindo a parte call to action e a parte de parcerias #5 8minute


const open = document.getElementById("open-video")
const close = document.getElementById("close")
const container = document.getElementById("container-popup")

open.addEventListener("click",() => {
    container.classList.add("active");
});

close.addEventListener("click",() => {
    container.classList.remove("active");
})