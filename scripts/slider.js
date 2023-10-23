const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');
const slider = document.querySelector('#slider');
const list = document.querySelector('#slider__items');
const sliderItem = document.querySelector('#slider__item');
const computedStyles = getComputedStyle(list);
const computedStylesWidth = getComputedStyle(sliderItem);
const sliderWidth = getComputedStyle(slider);

leftArrow.addEventListener('click', function(event){
    event.preventDefault();
    let currentPosition = parseInt(computedStyles.right);
    let currentWidth = parseInt(computedStylesWidth.width);
    let currentSliderWidth = parseInt(sliderWidth.width);
    if (currentPosition>currentWidth){
        list.style.right = `${currentPosition - currentWidth}px`;
        console.log(currentSliderWidth);
    }else{
        currentPosition = 940;
        list.style.right = `${currentPosition}px`;
    }
});

rightArrow.addEventListener('click', function(event){
    let currentPosition = parseInt(computedStyles.right);
    let currentWidth = parseInt(computedStylesWidth.width);
    event.preventDefault();
    
    if (currentPosition<currentWidth){
        list.style.right = `${currentPosition + currentWidth}px`;
        console.log(currentWidth);
    }else{
        currentPosition = 0;
        list.style.right = `${currentPosition}px`;
        console.log(currentWidth);
    }
})
