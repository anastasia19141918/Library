const favoriteBtns = document.getElementById('favorites__btn');
const btns = document.querySelectorAll('.input__label');


favoriteBtns.addEventListener('click', menuFavoriteBtn);

function menuFavoriteBtn (e) {
  if (e.target.classList.contains('input__label')) {
    let clickTag = e.target;
    activeBtn(clickTag);
  }
} 

function activeBtn (el) {
  btns.forEach(function(e){
    e.classList.remove('favorites__button__active');
  })
  el.classList.add('favorites__button__active');
}