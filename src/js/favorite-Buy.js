const modalBuyClose = document.getElementById('modal-buy__close');
const modalBuyBody = document.getElementById('modal-buy__body');

modalBuyClose.addEventListener('click', function(){
  favoriteBuyModal.classList.remove('modal-buy__active');
})

document.addEventListener('mouseup', function(e){
  if(!modalProfBody.contains(e.target)){
    favoriteBuyModal.classList.remove('modal-buy__active');
  }
})