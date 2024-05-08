const slaideImg = document.getElementById('about__slaid');

const slaiders = document.getElementById('slaiders');
const slaider = Array.from(slaiders.querySelectorAll('.about__slaid'));
const slaiderCount = slaider.length;

const btnPrev = document.getElementById('prev-button');
const btnnext = document.getElementById('nex-button');

let slaiderIndex = 0;

//btn
const dots = document.querySelectorAll('.about__btn');
const dot = document.getElementById('about__paginations');

const btnOne = document.getElementById('about__btn_one'),
      btnTwo = document.getElementById('about__btn_two'),
      btnThree = document.getElementById('about__btn_three'),
      btnFour = document.getElementById('about__btn_four'),//btn media
      btnFive = document.getElementById('about__btn_five');//btn media

///dot.addEventListener('click', menuDots);

//function menuDots(el) {
  //let click = el.target;

  //if(click.classList.contains('about__btn')) {
    //dotsActive (click);
  //}
//}

function dotsActive (el) {
  dots.forEach(function(e){
  e.classList.remove('about__activ');
});
  dots[el].classList.add('about__activ');
} 

// slaider start

function slaid () {
  const imgWidth = '480';
  const slideOffset = -slaiderIndex * imgWidth;
  slaiders.style.transform = `translateX(${slideOffset}px)`;
}

// slaider end

/// DOITS start

btnOne.addEventListener('click', function(e){
  const imgWidth = '480';
  const slideOffset = -slaiderIndex * imgWidth;
  
  if(slideOffset === -0 || slideOffset === -960 || slideOffset === -480 || slideOffset === -1440 || slideOffset === -1920) {
      slaiders.style.transform = `translateX(0px)`;
    }

    if(e.target.classList.contains('about__activ')) {
    return;
  }
})

btnTwo.addEventListener('click', function(e){
  const imgWidth = '480';
  const slideOffset = -slaiderIndex * imgWidth;
  if(slideOffset === 0 || slideOffset === -480 || slideOffset === -960) {
    slaiders.style.transform = `translateX(-480px)`;
  }

  if(slideOffset === 0) {
    slaiders.style.transform = `translateX(-480px)`;
  }

  if(e.target.classList.contains('about__activ')) {
    return;
  }
})

btnThree.addEventListener('click', function(e){
  const imgWidth = '480';
  const slideOffset = -slaiderIndex * imgWidth;
  if(slideOffset === -0 || slideOffset === -960 || slideOffset === -480 || slideOffset === -1440 || slideOffset === -1920) {
      slaiders.style.transform = `translateX(-960px)`;
    }
  
    if(e.target.classList.contains('about__activ')) {
    return;
  }
})

//media slaiders

btnFour.addEventListener('click', function(e){
  const imgWidth = '480';
  const slideOffset = -slaiderIndex * imgWidth;

  if(slideOffset === -0) {
      slaiders.style.transform = `translateX(-1440px)`;
    }
   
  if(e.target.classList.contains('about__activ')) {
    return;
  }
})

btnFive.addEventListener('click', function(e){
  const imgWidth = '480';
  const slideOffset = -slaiderIndex * imgWidth;
  
  slaid ();
  if(slideOffset === -0) {
    slaiders.style.transform = `translateX(-1920px)`;
  }
 
 if(e.target.classList.contains('about__activ')) {
  return;
}
})

/// DOITS end

btnPrev.addEventListener('click', function(el){
  if (slaiderIndex === 0) {
    slaiderIndex = slaider.length -1;
    slaid(slaiderIndex);
    dotsActive (slaiderIndex);
    
  } else {
    slaiderIndex--;
    slaid(slaiderIndex);
    dotsActive (slaiderIndex);
  }
})

btnnext.addEventListener('click', function(el){
  if (slaiderIndex === slaider.length -1) {
    slaiderIndex = 0;
    slaid(slaiderIndex);
    dotsActive (slaiderIndex)
    
  } else {
    slaiderIndex++;
    slaid(slaiderIndex);
    dotsActive (slaiderIndex);
  }
});

dots.forEach(function(element, indexDot){
  element.addEventListener('click', function(){
    slaiderIndex = indexDot;
    dotsActive (slaiderIndex);
    slaid(slaiderIndex);
  })
})

window.addEventListener('load', () => {
  slaid();
});















