
/////////////////////////////////////////// header/footer include //////////////////////////////////////

async function includeHTML() {
  let includeElements = document.querySelectorAll('[w3-include-html]');
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = 'Page not found';
    }
  }
}

/////////////////////////////////////////// setTimeout Image  //////////////////////////////////////

let images = ['img/wok.jpg', 'img/wok1.jpg', 'img/pfanne.jpg', 'img/pfanne1.jpg']
let currentImage = 0;

function start() {
  showImage(currentImage);
  currentImage++;

  if (currentImage == 4) {
    currentImage = 0;
  }
  setTimeout(start, 3000);
}

function showImage(i) {
  document.getElementById('wok-img').src = images[i];
}


/////////////////////////////////////////// Overlay Menu  //////////////////////////////////////

function showBarMenu(){
 document.getElementById('overlay').classList.remove('d-none');
 }








