var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit' , addItem); //(submit,funtion_name)

itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();
    
    //Get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');

    // add class 
    li.className = 'list-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button
    var deleteBtn = document.createElement('button');

    //create class for delete button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append delete button to li
    li.appendChild(deleteBtn);

    // //create edit button
    // var editBtn = document.createElement('button');

    // //append text node
    // editBtn.appendChild(document.createTextNode('Edit'));

    // //append edit button to li
    // li.appendChild(editBtn);

    //append li to list
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}