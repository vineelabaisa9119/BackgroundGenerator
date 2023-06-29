var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.querySelector('#gradient');
function setGradient() {
  body.style.backgroundImage =
    'linear-gradient(to bottom right,' + color1.value + ',' + color2.value + ')';

  css.textContent = body.style.backgroundImage + ';';
}
