const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const searchInput = document.getElementById('searchInput');
const searchArr = [];
const arrayOfLI = Array.from(todos.children);

arrayOfLI.forEach((element) => {
  if (element.tagName === 'LI') {
    const textContent = element.querySelector('span').textContent;
    searchArr.push(textContent);
  }
});

const generateTemplate = (todoItem) => {
  // Create the necessary elements
  const li = document.createElement('li');
  li.setAttribute(
    'class',
    'list-group-item d-flex justify-content-between align-items-center'
  );

  const span = document.createElement('span');
  span.textContent = todoItem;

  const i = document.createElement('i');
  i.setAttribute('class', 'far fa-trash-alt delete');
  i.setAttribute('onclick', 'deleteBtn(this)');

  // Append the elements as children
  li.appendChild(span);
  li.appendChild(i);

  // Append the new list item to a parent element (e.g., ul with class "list-group")
  searchArr.push(todoItem);
  arrayOfLI.push(li);

  console.log('test for push myTempeltate' + arrayOfLI);
  return li;
};

function searchInputArrF() {
  const searchedItem = searchInput.value.trim();
}

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  todos.appendChild(generateTemplate(todo));
  addForm.reset();
});

function deleteBtn(thisElm) {
  searchArr.forEach((element, index) => {
    if (thisElm.previousElementSibling.textContent === element) {
      searchArr.splice(index, 1);
    }
  });
  console.log('after deletion ' + searchArr);
  thisElm.parentElement.remove();
}

function search1(elm) {
  const results = [];
  let myValue = elm.value.trim().toLowerCase();

  arrayOfLI.forEach((liElement) => {
    let spanText = liElement.querySelector('span').textContent.trim().toLowerCase();

    if (spanText.includes(myValue)) {
      results.push(spanText);
      liElement.classList.remove('filtered');
    } else {
      liElement.classList.add('filtered');
    }
  });

  return results;
}

