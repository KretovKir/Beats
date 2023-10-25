const body = document.body;
const cross = document.querySelector('#modal__cross');
const burger = document.querySelector('.hamburger');
const modal = document.querySelector('.modal');

burger.addEventListener('click', function(event){
    event.preventDefault();
    modal.style.display = 'block';
    body.style.overflow = "hidden";
});

cross.addEventListener('click', function(event){
    event.preventDefault();
    modal.style.display = 'none';
    body.style.overflow = "scroll";
})

