const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');
const slider = document.querySelector('.slider');
const list = document.querySelector('.slider__items');
var currentPosition = 0;

leftArrow.addEventListener('click', function(event){
    event.preventDefault();
    if(currentPosition>0){
        currentPosition-=940;
        list.style.right = `rem(${currentPosition}px)`;
    }
})

rightArrow.addEventListener('click', function(event){
    event.preventDefault();
    if(currentPosition<1880){
        currentPosition+=940;
        list.style.right = `rem(${currentPosition}px)`;
    }
})