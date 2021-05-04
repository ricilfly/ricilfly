"use strict";

var imagesUrls = [];
var currentImageIndex = 0; // work with car

window.console.log(car_01.name);
window.console.log(car_01.isTurnOn);
car_01.start();
window.console.log(car_01.isTurnOn); // finds elements

var showPrevButton = document.getElementById("show-prev-btn");
var showNextButton = document.getElementById("show-next-btn");
var slideImage = document.getElementById("slide-img"); // subscribe to events

showPrevButton.addEventListener("click", onShowPrevButtonClick);
showNextButton.addEventListener("click", onShowNextButtonClick); // images array

imagesUrls.push("https://www.megaev.com/wp-content/uploads/2015/04/Mega-Sport-blk3.jpg");
imagesUrls.push("https://www.gran-turismo.com/images/c/i1aK6SAWBSUO6.jpg");
imagesUrls.push("https://www.thesupercarblog.com/wp-content/uploads/2020/02/Bugatti-W16-GT-Rembrandt-Concept-1.jpg");
imagesUrls.push("https://cdn.hiconsumption.com/wp-content/uploads/2013/01/Bugatti-Gangloff-Supercar-Concept-1.jpg");
slideImage.src = imagesUrls[currentImageIndex];
showPrevButton.disabled = true; // functions

function onShowPrevButtonClick(event) {
  currentImageIndex--;
  slideImage.src = imagesUrls[currentImageIndex];
  showNextButton.disabled = false; // disable prev button

  if (currentImageIndex === 0) {
    showPrevButton.disabled = true;
  }
}

;

function onShowNextButtonClick(event) {
  currentImageIndex++;
  slideImage.src = imagesUrls[currentImageIndex];
  showPrevButton.disabled = false; // disable next button

  if (currentImageIndex === imagesUrls.length - 1) {
    showNextButton.disabled = true;
  }
}

; // function Dog() {
//     this.myname = "Laika";
//     this.voice = function () {
//         console.log("Hey");
//     }
// }
// new Dog();
// function onShowPrevButtonClick() {
//     currentImageIndex--;
//     if (currentImageIndex <= (imagesUrls.length - imagesUrls.length - 1)) {
//         currentImageIndex = 0;
//     }
//     slideImage.src = imagesUrls[currentImageIndex];
// };
// function onShowNextButtonClick() {
//     currentImageIndex++;
//     if (currentImageIndex >= (imagesUrls.length - 1)) {
//         currentImageIndex = (imagesUrls.length - 1);
//     }
//     slideImage.src = imagesUrls[currentImageIndex];
// };