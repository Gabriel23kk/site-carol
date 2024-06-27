
const img = document.querySelectorAll(".image-1");
const img2 = document.querySelector("#image-s")
const img3 = document.querySelector("#img1")
const img4 = document.querySelector("#img11")
let blur = document.getElementById('blur');
let box = document.getElementById("aparecer");
let imgalter = document.getElementById("imgalter")
function toggle(){
    
    blur.classList.add('active');
    box.classList.add('ativo');
    imgalter.src = "./assets/1.png"
    
}
function imgS(){
    blur.classList.add('active');
    box.classList.add('ativo');
    imgalter.src = "./assets/2.png"
}
function imgL(){
    blur.classList.add('active');
    box.classList.add('ativo');
    imgalter.src = "./assets/3.png"
}
function imgR(){
    blur.classList.add('active');
    box.classList.add('ativo');
    imgalter.src = "./assets/4.jpg"
}
const close = document.querySelector('.close')

function fechar(){
    blur.classList.remove('active');
    box.classList.remove('ativo');
    box.classList.add('close');

}