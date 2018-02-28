var counter = document.querySelector('p');
var firstSection = document.querySelector('div.circle:first-child');
var secondSection = document.querySelector('div.circle:nth-of-type(2)');
var thirdSection = document.querySelector('div.circle:nth-of-type(3)');
var fourthSection = document.querySelector('div.circle:nth-of-type(4)');
var fifthSection = document.querySelector('div.circle:nth-of-type(5)');
var sixthSection = document.querySelector('div.circle:nth-of-type(6)');

function countHeight(){
  counter.innerHTML="height = " + window.pageYOffset;
}

window.addEventListener('scroll', countHeight);

function changeColor(){
  var height = window.pageYOffset;
  if(height < 600){
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
