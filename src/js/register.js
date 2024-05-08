const registration = document.getElementById('register');
const registerlibraryCard = document.getElementById('register_libraryCard');


const modalRegistr = document.getElementById('modal-register');
const modalBody = document.getElementById('modal-register__body');
const modalRegistrClose = document.getElementById('modal-register_closed');

const btnEye = document.getElementById('input-register-password');
const eye = document.getElementById('input-register-password-control');

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