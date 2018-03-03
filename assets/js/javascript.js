var counter = document.querySelector('p');
var firstSection = document.querySelector('div.circle:first-of-type');
var secondSection = document.querySelector('ul li:nth-of-type(2) a div.circle');
var thirdSection = document.querySelector('ul li:nth-of-type(3) a div.circle');
var fourthSection = document.querySelector('ul li:nth-of-type(4) a div.circle');
var fifthSection = document.querySelector('ul li:nth-of-type(5) a div.circle');
var sixthSection = document.querySelector('ul li:nth-of-type(6) a div.circle');

function countHeight(){
  counter.innerHTML="scrollpos = " + window.pageYOffset + " en heightWindow = " + window.innerHeight;
}

window.addEventListener('scroll', countHeight);

var w = window.innerWidth;
var h = window.innerHeight;

var smoothContainer = document.querySelector('.scrolling-box');

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

window.addEventListener('scroll', changeColor);

console.log(window.scrollY);

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
