var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit' , addItem); //(submit,funtion_name)

// Delete event
itemList.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup',filterItems);

//add item
function addItem(e){
    e.preventDefault();
    
    //Get input value
    var newItem = document.getElementById('item').value;
    //sharpener  task to add description
    var newDesc =document.getElementById('description').value;

    //create new li element
    var li = document.createElement('li');

    // add class 
    li.className = 'list-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //sharpener task to add description
    li.appendChild(document.createTextNode(newDesc));

    //create delete button
    var deleteBtn = document.createElement('button');

    //create class for delete button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append delete button to li
    li.appendChild(deleteBtn);

    //create edit button
    var editBtn = document.createElement('button');

    //create class for edit button
    editBtn.className='btn btn-sm float-right edit';

    //append text node
    editBtn.appendChild(document.createTextNode('Edit'));

    //append edit button to li
    li.appendChild(editBtn);

    //append li to list
    itemList.appendChild(li);
}

//delete item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter item
function filterItems(e){
    //convert text to lowercase as sometimes the user may give uppercase letters too
    var text = e.target.value.toLowerCase();

    //Get list
    var items = itemList.getElementsByTagName('li');
    

    //Convert to array as items is in HTML collection
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var description = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display='block';
        } else{
            item.style.display='none';
        }
    });

}