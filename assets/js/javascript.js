var counter = document.querySelector('p');
var firstSection = document.querySelector('div.circle:first-of-type');
var secondSection = document.querySelector('ul li:nth-of-type(2) a div.circle');
var thirdSection = document.querySelector('ul li:nth-of-type(3) a div.circle');
var fourthSection = document.querySelector('ul li:nth-of-type(4) a div.circle');
var fifthSection = document.querySelector('ul li:nth-of-type(5) a div.circle');
var sixthSection = document.querySelector('ul li:nth-of-type(6) a div.circle');

function countHeight(){
  counter.innerHTML="scrollpos = " + window.pageYOffset + " en heightWindow = " + window.outerHeight;
}

window.addEventListener('scroll', countHeight);

function changeColor(){
  var height = window.pageYOffset;
  if(height < 600 ){
    firstSection.classList.add('white');
    secondSection.classList.remove('white');

  }if(height > 600){
    firstSection.classList.remove('white');
    secondSection.classList.add('white');
    thirdSection.classList.remove('white');
  }
  if(height > 1200){
    secondSection.classList.remove('white');
    thirdSection.classList.add('white');
    fourthSection.classList.remove('white');
  }
  if(height > 1850){
    thirdSection.classList.remove('white');
    fourthSection.classList.add('white');
    fifthSection.classList.remove('white');
  }
  if(height > 2500){
    fourthSection.classList.remove('white');
    fifthSection.classList.add('white');
    sixthSection.classList.remove('white');
  }
  if(height > 3100){
    fifthSection.classList.remove('white');
    sixthSection.classList.add('white');
  }

}

window.addEventListener('scroll', changeColor);

console.log(window.scrollY);
