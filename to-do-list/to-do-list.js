var inputAddToDo = document.getElementById('input-add-todo');
var toDoList = document.getElementById('todo-list');

var li = document.createElement('li');
var input = document.createElement('input');
input.type = 'checkbox';
var span = document.createElement('span');

itens = document.getElementsByTagName('li');
var listagem = [itens]

function addToDo(event){
    event.preventDefault();
    item = String(inputAddToDo.value);
    span.innerText = item;
    console.log(item);
    li.appendChild(input);
    li.appendChild(span);
    console.log(li)
    toDoList.appendChild(li);
    listagem.push(li)
}

console.log(listagem)