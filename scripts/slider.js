const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');
const list = document.querySelector('#slider__items');
const computedStyles = window.getComputedStyle(list);
const items = document.querySelectorAll('#slider__item');



console.log(items);

const step = parseInt(window.getComputedStyle(items[0]).width);
const minRight = 0;
let maxRight = (items.length - 1) * step;
var totalRight = 0;

console.log(step);

list.style.right = totalRight;

leftArrow.addEventListener('click', function(event){
        event.preventDefault();
        if (totalRight>minRight){
            totalRight-=step;
            
        }else{
            totalRight = maxRight;
        }
        list.style.right = `${totalRight}px`;
});

rightArrow.addEventListener('click', function(event){
    event.preventDefault();
    if (totalRight<maxRight){
        totalRight+=step;
       
    }else{
        totalRight = minRight;
    }
    list.style.right = `${totalRight}px`;
});




