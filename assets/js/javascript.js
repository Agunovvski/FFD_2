var counter = document.querySelector('p');
var firstSection = document.querySelector('div.circle:first-of-type');
var secondSection = document.querySelector('ul li:nth-of-type(2) a div.circle');
var thirdSection = document.querySelector('ul li:nth-of-type(3) a div.circle');
var fourthSection = document.querySelector('ul li:nth-of-type(4) a div.circle');
var fifthSection = document.querySelector('ul li:nth-of-type(5) a div.circle');
var sixthSection = document.querySelector('ul li:nth-of-type(6) a div.circle');

// function countHeight(){
//   counter.innerHTML="scrollpos = " + window.pageYOffset + " en heightWindow = " + window.innerHeight;
// }
//
// window.addEventListener('scroll', countHeight);

var w = window.innerWidth;
var h = window.innerHeight;

// var smoothContainer = document.querySelector('.scrolling-box');

var progressMenu = document.querySelector('div.progress-menu');

function changeColor(){
  var height = window.pageYOffset;

  if(height < h/2 ){
    firstSection.classList.add('white');
    secondSection.classList.remove('white');

  }if(height > h/2){
    firstSection.classList.remove('white');
    secondSection.classList.add('white');
    thirdSection.classList.remove('white');
  }
  if(height >= h+(h/2)){
    secondSection.classList.remove('white');
    thirdSection.classList.add('white');
    fourthSection.classList.remove('white');
  }
  if(height >= h*2+(h/2)){
    thirdSection.classList.remove('white');
    fourthSection.classList.add('white');
    fifthSection.classList.remove('white');
  }
  if(height >= h*3+(h/2)){
    fourthSection.classList.remove('white');
    fifthSection.classList.add('white');
    sixthSection.classList.remove('white');
  }
  if(height >= h*4+(h/2)){
    fifthSection.classList.remove('white');
    sixthSection.classList.add('white');
  }


}




var progressMenu = document.querySelector('div.progress-menu');
var pInner = document.querySelector('p.progress-count');
var progressSlash = document.querySelectorAll('.progress-slash');

function progressProject(){

  var height = window.pageYOffset;
  if (height <= h+(h/2)) {
    // progressMenu.classList.remove('pmshow');
    // pInner.innerHTML = "1";
  }
  if(height >= h+(h/2)){
    // progressMenu.classList.add('pmshow');
    progressSlash[0].classList.add('slash-show');
  }
  if(height >= h*2+(h/2)){
    pInner.innerHTML = "2";
    progressSlash[1].classList.add('slash-show');
  }
  if(height >= h*3+(h/2)){
    pInner.innerHTML = "3";
    progressSlash[2].classList.add('slash-show');
  }
  if(height >= h*4+(h/2)){
    pInner.innerHTML = "4";
    progressSlash[3].classList.add('slash-show');
  }
}

var portAbout = document.querySelector('section:nth-of-type(2)');
var portOne = document.querySelector('section:nth-of-type(3)');
var portTwo = document.querySelector('section:nth-of-type(4)');
var portThree = document.querySelector('section:nth-of-type(5)');
var portFour = document.querySelector('section:nth-of-type(6)');

function showSection(){

  var height = window.pageYOffset;
  if (height <= h+(h/2)) {
  }
  if(height >= h+(h/2)){
    portOne.classList.add('section-show');
  }
  if(height >= h*2+(h/2)){
    portTwo.classList.add('section-show');
  }
  if(height >= h*3+(h/2)){
    portThree.classList.add('section-show');
  }
  if(height >= h*4+(h/2)){
    portFour.classList.add('section-show');
  }
}

var toWork = document.querySelector('.to-work');
var toAbout = document.querySelector('.to-about');

function scrollTowork(){
  portOne.scrollIntoView({ behavior: 'smooth' });
}

function scrollToabout(){
  portAbout.scrollIntoView({ behavior: 'smooth' });
}

toAbout.addEventListener('click', scrollToabout);
toWork.addEventListener('click', scrollTowork);
window.addEventListener('scroll', showSection);
window.addEventListener('scroll', changeColor);
window.addEventListener('scroll', progressProject);

// proberen smooth scroll

// var secondLi = document.querySelector('ul li:nth-of-type(2) a');
//
// function smoothScroll(){
//   window.scroll({
//   top: window.innerHeight,
//   left: 0,
//   behavior: 'smooth'
// });
// }
//
// secondLi.addEventListener('click', smoothScroll,false);


// var workButton = document.querySelector('.project .button');
// var body = document.body;
//
// function scrollWork(){
//   body.scrollTop = h+(h/2);
// }
//
// workButton.addEventListener('scroll', scrollWork, false);
