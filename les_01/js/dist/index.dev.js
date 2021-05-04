"use strict";

function alertFirstNameValues() {
  console.log(firstNameEl.value);
  console.log(firstNameEl.className);
}

;

function alertLastNameValues() {
  console.log(lastNameEl.value);
  console.log(lastNameEl.className);
}

;

function alertAddressValues() {
  console.log(addressEl.value);
  console.log(addressEl.className);
}

;

function alertHobbiesValues() {
  console.log(hobbiesEl.value);
  console.log(hobbiesEl.className);
}

;

function alertValues(EP) {
  console.log(EP.value);
  console.log(EP.className);
}

;
var firstNameId = 'first-name';
var lastNameId = 'last-name';
var addressId = 'address';
var citiesId = 'cities';
var hobbiesId = 'hobbies';
var avatarWrapperId = 'avatar-wrapper';
var avatarId = 'avatar';
var firstNameEl = document.getElementById(firstNameId);
var lastNameEl = document.getElementById(lastNameId);
var addressEl = document.getElementById(addressId);
var citiesEl = document.getElementById(citiesId);
var hobbiesEl = document.getElementById(hobbiesId);
var avatarWrapperEl = document.getElementById(avatarWrapperId);
var avatarEl = document.getElementById(avatarId); // function alertValue() {
//     console.log('1');
//     console.log('2');
//     console.log('3');
// };
// alertValue();
// console.log(firstNameEl.value);
// console.log(lastNameEl.value);
// console.log(addressEl.value);
// console.log(citiesEl.value);
// console.log(hobbiesEl.value);