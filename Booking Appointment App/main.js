// function onsignup(event){
//     event.preventDefault();
//     localStorage.setItem('name',document.querySelector('#name').value);
//     localStorage.setItem('email',document.querySelector('#email').value);
// }

// Sharpener Task //
// Trying to use objects to store in local storage
function onsignup(event){
    event.preventDefault();
    var myObj = {
        // userName: document.getElementById('name').value,
        // emailId: document.getElementById('email').value
        userName: document.querySelector('#name').value,
        emailId: document.querySelector('#email').value
    };
    // if not serialized it will display object:objext
    var myObj_serialized = JSON.stringify(myObj);
    localStorage.setItem('myObj',myObj_serialized);


    // removing JS elements for better display, if we have more data this will be useful
    var myObj_deserialized = JSON.parse(localStorage.getItem('myObj'));

    console.log(myObj_deserialized);
}