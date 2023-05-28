function onsignup(event){
    event.preventDefault();
    localStorage.setItem('name',document.querySelector('#name').value);
    localStorage.setItem('email',document.querySelector('#email').value);
}