// function onsignup(event){
//     event.preventDefault();
//     localStorage.setItem('name',document.querySelector('#name').value);
//     localStorage.setItem('email',document.querySelector('#email').value);
// }

// Sharpener Task //
// Trying to use objects to store in local storage
// function onsignup(event){
//     event.preventDefault();
//     var myObj = {
//         // userName: document.getElementById('name').value,
//         // emailId: document.getElementById('email').value
//         userName: document.querySelector('#name').value,
//         emailId: document.querySelector('#email').value
//     };
//     // if not serialized it will display object:objext
//     var myObj_serialized = JSON.stringify(myObj);
//     localStorage.setItem('myObj',myObj_serialized);


//     // removing JS elements for better display, if we have more data this will be useful
//     var myObj_deserialized = JSON.parse(localStorage.getItem('myObj'));

//     console.log(myObj_deserialized);
// }

// Sharpener Task
// as soon as we add another user the existing user is disappeared so we use arrays to resolve
function onsignup(event){
    var myObj_arr=[];
    event.preventDefault();
    var myObj = {
        // userName: document.getElementById('name').value,
        // emailId: document.getElementById('email').value
        userName: document.querySelector('#name').value,
        emailId: document.querySelector('#email').value
    };
    myObj_arr.push(myObj);

    // using email id as unique ID for user if not it will save in same location
    localStorage.setItem(document.querySelector('#email').value,JSON.stringify(myObj_arr));
    showUserOnScreen(myObj);

    // var li = document.getElementsByClassName('.item');
    // for(var i=0;i<myObj_arr.length;i++){
    // li[i].value = "name:"+document.querySelector('#name').value+" "+"email:"+document.querySelector('#email').value;
    // }
}
//display funtion
function showUserOnScreen(myObj)
{
    var parentElement = document.getElementById('listofitems');
    parentElement.innerHTML = parentElement.innerHTML + `<li id='list'>${myObj.userName}-${myObj.emailId} <input type ='button' value='Delete' id='del'></li>`;

    //deleting the elements both in display and localstorage
    document.getElementById("del").onclick = function() {
        document.getElementById("list").remove();
        localStorage.removeItem(document.querySelector('#email').value);
    }
}