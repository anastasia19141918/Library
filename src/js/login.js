const login = document.getElementById('login');
const loginModal = document.getElementById('modal');
const loginModalClose = document.getElementById('modal_closed');
const loginBody = document.getElementById('modal__body');

const favoriteBtn = document.querySelectorAll('.book__btn');
const favoriteBuyModal = document.getElementById('modal-buy');

const loginlibraryCard = document.getElementById('login_libraryCard');


//profile modal start

const myProfileBtn = document.getElementById('myProfile');
const modalProfile = document.getElementById('modal-profile');
const modalProfClose = document.getElementById('modal-profile__close');
const modalProfBody = document.getElementById('modal-profile__body');

//profile modal end

const loginBtnForm = document.getElementById('modal__btn_login');



login.addEventListener('click', function(){
  loginModal.classList.add('modal__active');
});

loginModalClose.addEventListener('click', function(){
  loginModal.classList.remove('modal__active');
});

document.addEventListener('mouseup',function(e){
  if(!loginBody.contains(e.target)){
    loginModal.classList.remove('modal__active');
  }
});

//modal prof open start
myProfileBtn.addEventListener('click', function(){
  modalProfile.classList.add('modal-profile__active');
});


modalProfClose.addEventListener('click', function(){
  modalProfile.classList.remove('modal-profile__active');
});

document.addEventListener('mouseup', function(e){
  if(!modalProfBody.contains(e.target)){
    modalProfile.classList.remove('modal-profile__active');
  }
})

loginlibraryCard.addEventListener('click', function(){
  loginModal.classList.add('modal__active');
  if(headerRegistr.classList.contains('header__icon__Prof')) {
    loginModal.classList.remove('modal__active');
  }
})



//modal prof open  end

loginBtnForm.addEventListener('click', loginBtn);

function loginBtn() {
  const emailLogin = document.getElementById('input-email_login');
  const inputLlogin = document.getElementById('input-password_login');

  let arrow = JSON.parse(localStorage.getItem("regist"));
  
  if(emailLogin.value === arrow[2] && inputLlogin.value === arrow[3]){
    loginModal.classList.remove('modal__active');
    headerRegistr.classList.add('header__icon__Prof');
  }
}

favoriteBtn.forEach(function(el){
  el.addEventListener('click', function(){
    loginModal.classList.add('modal__active');
    if(headerRegistr.classList.contains('header__icon__Prof')) {
      loginModal.classList.remove('modal__active');
      favoriteBuyModal.classList.add('modal-buy__active');
    }
  })
})









