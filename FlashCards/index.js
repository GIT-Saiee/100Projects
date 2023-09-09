const cardE1 = document.getElementById("card");
cardE1.addEventListener("click",flipCard);
function flipCard(){
    cardE1.classList.toggle("flipCard");
}
const nextE1 = document.querySelector(".next")
const mainE1 = document.querySelector(".main-container");
const cardcontainerE1 = document.querySelectorAll(".card");
const prevE1 = document.querySelector(".prev");
let currentImg = 1;
let timeout;
nextE1.addEventListener("click",()=>{
    currentImg++;
    clearTimeout(timeout);
    updateImage();
})
prevE1.addEventListener("click",()=>{
    currentImg--;
    clearTimeout(timeout);
    updateImage();
})
function updateImage(){
    if(currentImg > cardcontainerE1.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = cardcontainerE1.length;
    }
    mainE1.style.transform = `translateX(-${(currentImg-1) *500}px)`
    timeout =setTimeout(()=>{
        currentImg++
        updateImage();
    },3000)
}