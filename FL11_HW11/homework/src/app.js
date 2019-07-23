let rootNode = document.getElementById('root');
let plusButton = document.getElementById('plus-button');
let inputVal = document.getElementById('myInput').value;

function input() {
    let inputVal = document.getElementById('myInput').value;
    if (!!inputVal === true) {
        plusButton.style.display = 'block';
    } else {
        plusButton.style.display = 'none';
    }
}

function buttonClick() {
    let ul = document.getElementById('myList');
    let li = document.createElement('li');
    let inputVal = document.getElementById('myInput').value;

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'leftCheckbox';
    li.appendChild = checkbox;

    let editButton = document.createElement('i');
    editButton.classList.add('material-icons');
    editButton.innerHTML = 'create';
    editButton.id = 'editButton';
    li.appendChild = editButton;

    let deleteButton = document.createElement('i');
    deleteButton.classList.add('material-icons');
    deleteButton.innerHTML = 'delete';
    deleteButton.id = 'deleteButton';
    li.appendChild = deleteButton;

    li.innerHTML += checkbox.outerHTML + inputVal + editButton.outerHTML + deleteButton.outerHTML;

    ul.appendChild(li);

}
