// EXAMINE THE DOCUMENT //
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // We are not going to use the below method to select the node in DOM  
// //document.all[10].textContent = 'Hello'
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// textContent will change the content but will does not change in console whereas //
// innerText will change the content along with the style , to understand this go to //
// span tag near h1 line no.13 //
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText)
// console.log(headerTitle.textContent)

//This will just place the h3 tag inside h1 tag // 
// headerTitle.innerHTML = '<h3>Hello</h3>'

// STYLING PART //
// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000'
// var addItem = document.getElementsByClassName('title');
// addItem[0].style.fontWeight = 'bold';
// addItem[0].style.backgroundColor = 'green'

// GETELEMENTBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].textContent = 'Hello 2';
// // items[1].style.fontWeight = 'bold';
// // items[1].style.backgroundColor = 'yellow';

// // this will not work and give error as items is a collection of array so we need to use //
// // looping statement to change the color //
// //items.style.backgroundColor = 'grey'; // dom.js:51 Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')
// // at dom.js:51:29 

// // for(var i=0; i<items.length;i++)
// // {
// //     items[i].style.backgroundColor = 'grey';
// // }

// items[2].style.backgroundColor = 'green';
// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight = 'bold';
// }

//var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// this will not work and give error as items is a collection of array so we need to use //
// looping statement to change the color //
// li.style.backgroundColor = 'grey'; // dom.js:51 Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')
// at dom.js:51:29 

// for(var i=0; i<li.length;i++)
// {
//     li[i].style.backgroundColor = 'grey';
// }

// Sharpener Task : added new li tag and made changes //
// li[4].style.backgroundColor = 'green';

// var item = document.getElementsByClassName('list-group-item1');
// console.log(item)
// item[0].style.fontWeight = 'bold';
//-----------------//

// QUERYSELECTOR //
// using ID name //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc'

// using tag name //
// var input = document.querySelector('input');
// input.value = 'Hello World';

// please note that submit is also input tag but hello world reflects only in text box

//we can also change submit value 
// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// using classname //
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'; // changes to red only for first item

// changing color of lastchild 
// var lastChild = document.querySelector('.list-group-item:last-child');
// lastChild.style.color = 'blue';

// changing color of nth child
// var secondChild = document.querySelector('.list-group-item:nth-child(2)');
// secondChild.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// using queryselectorall we can change colors alteratively to the list elements
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// Sharpener Task //
// Make the 2nd item have green background color //
var secondList = document.querySelector('.list-group-item:nth-child(2)');
secondList.style.backgroundColor = 'green';

// Make the 3rd item invisible //
var thirdList = document.querySelector('.list-group-item:nth-child(3)');
thirdList.style.display = 'none'; 

// Using QuerySelectorALL change the font color to green for 2nd item in the item list //

var lists = document.querySelectorAll('.list-group-item');
lists[1].style.color = 'green';

// Choose all the odd elements and make their background green using QuerySelectorALL﻿ //
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i =0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green';
}

