const modalBuyClose = document.getElementById('modal-buy__close');
const modalBuyBody = document.getElementById('modal-buy__body');
const modalBuyBtn = document.getElementById('modal-buy__butn');

modalBuyClose.addEventListener('click', function(){
  favoriteBuyModal.classList.remove('modal-buy__active');
})

document.addEventListener('mouseup', function(e){
  if(!modalBuyBody.contains(e.target)){
    favoriteBuyModal.classList.remove('modal-buy__active');
  }
})

modalBuyBtn.addEventListener('click', buyBtn);

function buyBtn() {
  const BuyNumberCard = document.getElementById('input__buy_numberCard').value;
  const BuyCodeFirst = document.getElementById('input__buy_codeFirst').value;
  const BuyCodeTwo = document.getElementById('input__buy_codeTwo').value;
  const BuyCVC =  document.getElementById('input__buy_CVC').value;
  const BuyName =  document.getElementById('input__buy_name').value;
  const BuyCode =  document.getElementById('input__buy_code').value;
  const BuyCity =  document.getElementById('input__buy_city').value;

  e.preventDefault();

  if(BuyNumberCard !== '' && BuyCodeFirst !== '' && BuyCodeTwo !== '' && BuyCVC !== '' && BuyName !== '' && BuyCode !== '' && BuyCity !== '') {
    favoriteBuyModal.classList.remove('modal-buy__active');
  }
  
}

/*<form>
                <label class="modal-register_first-name">
                  First name
                  <input type="text" class="input-register_name" id="input-register_name" required>
                </label>
                <label class="modal-register_last-name">
                  Last name
                  <input type="text" class="input-register_name" id="input-register_nameLast" required>
                </label>
                <label class="modal-register__email" for="fname">
                  E-mail 
                  <input type="email" class="input-register_email" id="input-register_email" required>
                </label>
                <label class="modal-register__password">
                  Password
                  <input type="password" class="input-register-password" minlength="8" required id="input-register-password">
                  <a href="#" class="input-register-password-control" onclick="return showPassword(this)" id="input-register-password-control"></a>
                </label>
                <button class="modal-register__btn" id="modal-register__btn" value=Ok>Sign Up</button>
                <div class="modal-register__notValid" id="modal-register__notValid">Please fill in all fields</div>
</form>*/