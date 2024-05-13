
const registration = document.getElementById('register');
const registerlibraryCard = document.getElementById('register_libraryCard');


const modalRegistr = document.getElementById('modal-register');
const modalBody = document.getElementById('modal-register__body');
const modalRegistrClose = document.getElementById('modal-register_closed');

const btnEye = document.getElementById('input-register-password');
const eye = document.getElementById('input-register-password-control');

const btnRegistr = document.getElementById('modal-register__btn');
const notValid = document.getElementById('modal-register__notValid');
const iconProfile = document.getElementById('header__icon');

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
    if (isvalidmail(email)) {
      
      let name = firstName;
      let splitname = name.split('');
      let newArrow = splitname.slice(0, 2);
      let namelast = newArrow.join('');
      
      iconProfile.classList.add('header__icon__activeProf');
      iconProfile.innerHTML = namelast;


      const informLogin = [firstName, lastName, email, password, iconProfile.innerHTML];
      localStorage.setItem('regist', JSON.stringify(informLogin));
      
      
      //let iconLocal = iconProfile.innerHTML;
      //localStorage.setItem('iconImg', iconLocal); local
      
    }
  }
  
  else {
    notValid.classList.add('modal-register__notValid__active');
  }

}

function isvalidmail(email){
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return EMAIL_REGEXP.test(email);
}

function getLocalStorage() {
  const icon = document.getElementById('header__icon');

  if(localStorage.getItem('regist')) {
    let arrow = JSON.parse(localStorage.getItem("regist"));
    
    const firstName = document.getElementById('input-register_name');
    const lastName = document.getElementById('input-register_nameLast');
    const email = document.getElementById('input-register_email');
    const password = document.getElementById('input-register-password');

    firstName.value = arrow[0];
    lastName.value = arrow[1];
    email.value = arrow[2];
    password.value = arrow[3];

    icon.classList.add('header__icon__activeProf');
    icon.innerHTML = arrow[4];
  }
}

window.addEventListener('load', getLocalStorage);

