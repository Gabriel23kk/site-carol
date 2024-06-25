
const img = document.querySelectorAll(".image-1");
const img2 = document.querySelector("#image-s")
let blur = document.getElementById('blur');
let box = document.getElementById("aparecer");
let imgalter = document.querySelector("#imgalter");
function toggle(){
    
    blur.classList.add('active');
    box.classList.add('ativo');
    for (let index = 0; index < imggg.length; index++) {
        imgalter.src = imggg[index];
        break
    }
}

let imggg = ["./assets/1.png",
             "./assets/2.png",
             "./assets/3.png" , 
             "./assets/4.png"]

const close = document.querySelector('.close')

function fechar(){
    blur.classList.remove('active');
    box.classList.remove('ativo');
    box.classList.add('close');

}