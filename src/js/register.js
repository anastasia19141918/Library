
//icon start

const Loginicon = document.getElementById('log_register');

//icon end

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

//modal Profale start

const modalProfIcon = document.getElementById('modal-profile__icon');
const modalProfName = document.getElementById('modal-profile__names');
const modalProflastName = document.getElementById('modal-profile__lastName');
const modalProfVisit = document.getElementById('profile__visits');
let countBtn = 0;
//modal Profale end
 const linkLogin = document.getElementById('modal__text_link');


registration.addEventListener('click', function(){
  modalRegistr.classList.add('modal-register__active');
})

registerlibraryCard.addEventListener('click', function(){
  modalRegistr.classList.add('modal-register__active');
  if(headerRegistr.classList.contains('header__icon__Prof')) {
    modalRegistr.classList.remove('modal-register__active');
  }
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
      iconProfile.setAttribute('title', firstName);

      const informLogin = [firstName, lastName, email, password, iconProfile.innerHTML, modalProfVisit.innerHTML];
      localStorage.setItem('regist', JSON.stringify(informLogin));

      modalProfIcon.innerHTML = namelast;
      modalProfName.innerHTML = firstName;
      modalProflastName.innerHTML = lastName;
      
      let countVizit = Number(modalProfVisit.innerHTML);
      let btns = countBtn+1;
      modalProfVisit.innerHTML = countVizit + btns;

      modalRegistr.classList.remove('modal-register__active'); //закрытие окна
    }
  }
  
  else {
    notValid.classList.add('modal-register__notValid__active');
  }

}

linkLogin.addEventListener('click', function(){
  loginModal.classList.remove('modal__active');
  modalRegistr.classList.add('modal-register__active');
})

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
    icon.setAttribute('title', arrow[0]);

    modalProfIcon.innerHTML = arrow[4];
    modalProfName.innerHTML = arrow[0];
    modalProflastName.innerHTML = arrow[1];
    
    modalProfVisit.innerHTML = arrow[5];
    
    modalProfVisit.innerHTML = Number(modalProfVisit.innerHTML) + countBtn+1;

    headerRegistr.classList.add('header__icon__Prof');
  }
}

window.addEventListener('load', getLocalStorage);

