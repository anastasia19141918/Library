const modalBuyClose = document.getElementById('modal-buy__close');
const modalBuyBody = document.getElementById('modal-buy__body');
const modalBuyBtn = document.getElementById('modal-buy__butn');
const modalBuyNotValid = document.getElementById('modal-buy__notValid');

modalBuyClose.addEventListener('click', function(){
  favoriteBuyModal.classList.remove('modal-buy__active');
})

document.addEventListener('mouseup', function(e){
  if(!modalBuyBody.contains(e.target)){
    favoriteBuyModal.classList.remove('modal-buy__active');
  }
  if(!modalBuyNotValid.contains(e.target)){
    modalBuyNotValid.classList.remove('modal-buy__notValid__active');
  }
})

modalBuyBtn.addEventListener('click', buyBtn);

function buyBtn(e) {
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
  else {
    modalBuyNotValid.classList.add('modal-buy__notValid__active');
  }

}

