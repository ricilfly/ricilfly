function alertFirstNameValues() {
    console.log(firstNameEl.value);
    console.log(firstNameEl.className);
};

function alertLastNameValues() {
    console.log(lastNameEl.value);
    console.log(lastNameEl.className);
};

function alertAddressValues() {
    console.log(addressEl.value);
    console.log(addressEl.className);
};

function alertHobbiesValues() {
    console.log(hobbiesEl.value);
    console.log(hobbiesEl.className);
};

function alertValues(EP) {
    console.log(EP.value);
    console.log(EP.className);
};

let firstNameId = 'first-name';
let lastNameId = 'last-name';
let addressId = 'address';
let citiesId = 'cities';
let hobbiesId = 'hobbies';
let avatarWrapperId = 'avatar-wrapper';
let avatarId = 'avatar';

let firstNameEl = document.getElementById(firstNameId);
let lastNameEl = document.getElementById(lastNameId);
let addressEl = document.getElementById(addressId);
let citiesEl = document.getElementById(citiesId);
let hobbiesEl = document.getElementById(hobbiesId);
let avatarWrapperEl = document.getElementById(avatarWrapperId);
let avatarEl = document.getElementById(avatarId);



// function alertValue() {
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