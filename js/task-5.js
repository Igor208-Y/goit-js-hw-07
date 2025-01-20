function getRandomHexColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

button.addEventListener('click', () => {
  const randomColor = getRandomHexColor(); 
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor; 
});