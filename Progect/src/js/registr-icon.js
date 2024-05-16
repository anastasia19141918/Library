const headerRegistr = document.getElementById('header__icon');
const logLogin = document.getElementById('log_login');
const logRegistr = document.getElementById('log_register');

headerRegistr.addEventListener('click', function(){

  if(!headerRegistr.classList.contains('header__icon__Prof')) {
    logLogin.classList.remove('login__active');
    logRegistr.classList.toggle('login_active__register');
  }
  
  if(headerRegistr.classList.contains('header__icon__Prof')) {
    logRegistr.classList.remove('login_active__register');
    logLogin.classList.toggle('login__active');
  }
})

document.addEventListener('click', function(e){
  const click = e.composedPath().includes(headerRegistr);
  if(!click) {
    logRegistr.classList.remove('login_active__register');
    logLogin.classList.remove('login__active');
  }
})


