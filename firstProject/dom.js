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
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000'
var addItem = document.getElementsByClassName('title');
addItem[0].style.fontWeight = 'bold';
addItem[0].style.backgroundColor = 'green'

