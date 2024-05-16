const burger = document.getElementById('burger');
const burgerNavigation = document.getElementById('header__navigation');
const burherLinks = document.getElementById('header__itemns');

burger.addEventListener('click', function(){
  burger.classList.toggle('burger_active');
  burgerNavigation.classList.toggle('header__navigation_active');
})

burherLinks.addEventListener('click', function(){
  burger.classList.remove('burger_active');
  burgerNavigation.classList.remove('header__navigation_active');
})

document.addEventListener('click', function(e){
  const click = e.composedPath().includes(burger);
  if(!click) {
    burger.classList.remove('burger_active');
    burgerNavigation.classList.remove('header__navigation_active');
  }
})



