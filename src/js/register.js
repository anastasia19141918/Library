const registration = document.getElementById('register');
const registerlibraryCard = document.getElementById('register_libraryCard');


const modalRegistr = document.getElementById('modal-register');
const modalBody = document.getElementById('modal-register__body');
const modalRegistrClose = document.getElementById('modal-register_closed');

const btnEye = document.getElementById('input-register-password');
const eye = document.getElementById('input-register-password-control');

const btnRegistr = document.getElementById('modal-register__btn');
const notValid = document.getElementById('modal-register__notValid');

registration.addEventListener('click', function(){
  modalRegistr.classList.add('modal-register__active');
})

registerlibraryCard.addEventListener('click', function(){
  modalRegistr.classList.add('modal-register__active');
})

modalRegistrClose.addEventListener('click', function(){
  modalRegistr.classList.remove('modal-register__active');
})

document.addEventListener('mouseup', function(e){
  
  if(!modalBody.contains(e.target)) {
    modalRegistr.classList.remove('modal-register__active');
  }

  if(!notValid.contains(e.target)) {
    notValid.classList.remove('modal-register__notValid__active');
  }
})

function showPassword() {
  eye.classList.toggle('view');
    
  if(btnEye.getAttribute('type') === 'password') {
    btnEye.setAttribute('type', 'text');
  } else {
    btnEye.setAttribute('type', 'password');
  }
   return false;
}

btnRegistr.addEventListener('click', registrBtn);

function registrBtn(e) {
  const firstName = document.getElementById('input-register_name').value;
  const lastName = document.getElementById('input-register_nameLast').value;
  const email = document.getElementById('input-register_email').value;
  const password = document.getElementById('input-register-password').value;

  e.preventDefault();

  if(firstName !== '' && lastName !== '' && email !== '' && password !== '') {
    console.log('ne пусто');
  }
  else {
    notValid.classList.add('modal-register__notValid__active');
  }
}