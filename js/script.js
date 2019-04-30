var anchor = document.querySelector('a');
console.log(anchor);

var allAnchors = document.querySelectorAll('a');
console.log(allAnchors);

allAnchors[0].textContent = 'text changed in js';
allAnchors[0].href = 'https://www.youtube.com';
allAnchors[0].target = '_blank';
allAnchors[1].textContent = 'this text is set from js file using dom manipulation';
allAnchors[1].href = 'https://www.google.com';
allAnchors[1].target = '_blank';

var para1 = document.getElementById('para-1');
console.log(para1);
var para1UsingSelector = document.querySelector('#para-1');
console.log(para1UsingSelector);
para1.style.color = 'tomato';

// var btn = document.getElementsByClassName('button');
// console.log(btn[0];
// btn[0].style.padding = '10px';