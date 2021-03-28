// DOM Elements

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const colorAButton = document.getElementById('color-a');
const colorBButton = document.getElementById('color-b');
const colorCButton = document.getElementById('color-c');
const body = document.body;


// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const borderColor = localStorage.getItem('borderColor');
const isSolar = localStorage.getItem('isSolar');

if (theme || borderColor) {
  body.classList.add(theme, borderColor);
  isSolar && body.classList.add('solar');
}

// Button Event Handlers

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
};

colorAButton.onclick = () => {
  if (body.classList.contains('color-b')) 
    body.classList.replace('color-b', 'color-a');
  
  if (body.classList.contains('color-c'))
    body.classList.replace('color-c', 'color-a');
  
  localStorage.setItem('borderColor', 'color-a');
};

colorBButton.onclick = () => {
  if (body.classList.contains('color-a')) 
    body.classList.replace('color-a', 'color-b');

  if (body.classList.contains('color-c'))
    body.classList.replace('color-c', 'color-b');
  
  localStorage.setItem('borderColor', 'color-b');
};

colorCButton.onclick = () => {
  if (body.classList.contains('color-a')) 
    body.classList.replace('color-a', 'color-c');

  if (body.classList.contains('color-b'))
    body.classList.replace('color-b', 'color-c');
  
  localStorage.setItem('borderColor', 'color-c');
};

solarButton.onclick = () => {

  if (body.classList.contains('solar')) {
    
    body.classList.remove('solar');
    solarButton.style.cssText = `
      --bg-solar: var(--yellow);
    `

    solarButton.innerText = 'Solarize';

    localStorage.removeItem('isSolar');

  } else {

    solarButton.style.cssText = `
      --bg-solar: white;
    `

    body.classList.add('solar');
    solarButton.innerText = 'Normalize';

    localStorage.setItem('isSolar', true);
  }
};