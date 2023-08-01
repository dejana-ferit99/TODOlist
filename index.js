var newListElement = document.createElement('li');
var btnAdd=document.getElementById('add-item');
var list = document.getElementById('todo-list');
var task= document.getElementById('task');
var addItem= document.getElementById('add-item');
var btnUpdate = document.getElementById('update-item');
var btnRemove = document.getElementById('remove-item');
var Xbutton = document.getElementById('remove');
var elementID;

function createNewNode() {
    var newListElement = document.createElement('li');
    var textNode = document.createTextNode(document.getElementById("task").value);
    newListElement.appendChild(textNode);
  
    var Xbutton = document.createElement('button');
    Xbutton.innerHTML = 'X';
    Xbutton.addEventListener('click', function() {
      newListElement.remove();
    });
  
    newListElement.appendChild(Xbutton);
  
    newListElement.id = "item" + (list.childElementCount + 1);
    return newListElement;
  }
  
  function addItem() {
    if(task.value.length != 0){
        var list = document.getElementById("list");
        var newNode = createNewNode();
        list.appendChild(newNode);
        task.value='';
    }else{
        alert("Please enter task");
    }
  }

btnAdd.addEventListener('click', function(){
    if(task.value.length != 0){
        var newListElement=createNewNode();
        list.appendChild(newListElement);
        task.value='';
    }else{
        alert("Please enter task");
    }
  
});

btnUpdate.addEventListener('click', function(){
    var firstElement = list.firstElementChild;
    var newListElement = createNewNode();

    list.replaceChild(newListElement, firstElement);
});

btnRemove.addEventListener('click', function(){
    var firstElement = list.firstElementChild;
    list.removeChild(firstElement);
});

Xbutton.addEventListener('click', function(){
    var deleteItemID = Xbutton.parentElement.id;
    const itemToDelete = document.getElementById(deleteItemID);
    if (itemToDelete) {
      itemToDelete.remove();
    }
});

