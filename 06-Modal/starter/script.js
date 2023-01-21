'use strict';
let btnsOpenModal=document.querySelectorAll('.show-modal')
let btnCloseModal=document.querySelector('.close-modal')
let overlay=document.querySelector('.overlay')
let Modal=document.querySelector('.modal')
console.log(btnsOpenModal);

const openModal=function(){
    Modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for(let i=0;i<btnsOpenModal.length;i++){
    (btnsOpenModal[i].addEventListener('click',openModal))
}

const closeModal=function(){
    Modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)

