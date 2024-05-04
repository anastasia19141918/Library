import winter from "./winter.js";
import autumn from "./autumn.js";
import spring from "./spring.js";
import summer from "./summer.js";


const favoriteBtns = document.getElementById('favorites__btn');
const btns = document.querySelectorAll('.input__label');
//books
const favoriteBooks = document.getElementById('favorites__books');


favoriteBtns.addEventListener('click', menuFavoriteBtn);

function menuFavoriteBtn (e) {
  if (e.target.classList.contains('input__label')) {
    let clickTag = e.target;
    activeBtn(clickTag);

    btnWinter(e);
    btnSpring(e);
    btnSummer(e);
    btnAutumn(e);
  }
} 

function activeBtn (el) {
  btns.forEach(function(e){
    e.classList.remove('favorites__button__active');
  })
  el.classList.add('favorites__button__active');
}



//favorute books start

function btnWinter(e) {
  if(e.target.innerText === "Winter") {
    favoriteBooks.innerHTML = '';
    creatBlock(winter);
  }
}

function btnSpring(e) {
  if(e.target.innerText === "Spring") {
    favoriteBooks.innerHTML = '';
    creatBlock(spring);
  }
}

function btnSummer(e) {
  if(e.target.innerText === "Summer") {
    favoriteBooks.innerHTML = '';
    creatBlock(summer);
  }
}

function btnAutumn(e) {
  if(e.target.innerText === "Autumn") {
    favoriteBooks.innerHTML = '';
    creatBlock(autumn);
  }
}


//favorute books end

function creatBlock(e) {
  
    
  e.forEach(function(el){
    
    let div = document.createElement('div');
      div.classList.add('book');

      let title = document.createElement('h3');
      title.classList.add('book__title');
      title.innerText = 'Staff Picks';

      let divLine = document.createElement('div');
      divLine.classList.add('book__line');

      let nameBook = document.createElement('div');
      nameBook.classList.add('book__name');
      nameBook.innerText = el.name;

      let authorBook = document.createElement('div');
      authorBook.classList.add('book__author');
      authorBook.innerText = el.author;

      let textBook = document.createElement('p');
      textBook.classList.add('book__desk');
      textBook.innerText = el.description

      let imgBook = document.createElement('img');
      imgBook.classList.add('book__img');
      imgBook.src = el.img;
      imgBook.alt = el.name;

      let btnDiv = document.createElement('div');
      btnDiv.classList.add('book__button');

      let button = document.createElement('button');
      button.classList.add('book__btn');
      button.innerText = 'Buy';


      favoriteBooks.appendChild(div);
      div.appendChild(title);
      div.appendChild(divLine);
      div.appendChild(nameBook);
      div.appendChild(authorBook);
      div.appendChild(textBook);
      div.appendChild(imgBook);
      div.appendChild(btnDiv);
      btnDiv.appendChild(button);
    })
  
}

