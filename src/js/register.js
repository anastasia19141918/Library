const registration = document.getElementById('register');
const registerlibraryCard = document.getElementById('register_libraryCard');


const modalRegistr = document.getElementById('modal-register');
const modalBody = document.getElementById('modal-register__body');
const modalRegistrClose = document.getElementById('modal-register_closed');

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