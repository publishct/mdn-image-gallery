const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i < 6; i++) {
    
    const input = i;
    let name = `images/pic${input}.jpg`;
    var xxx = name;

    const newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    thumbBar.appendChild(newImage);

}

/* Wiring up the Darken/Lighten button */
