
class ListBinding {
  constructor(element) {
    // create a selector for the Form
    // then add a event listener to that form onsubmit
    // console.log the form input
    this.element = element; // an odered or under list
    this.textList = [];

  }
  /* delete all element from list*/
  deleteAll() {
    while (this.element.firstChild)
      this.element.removeChild(this.element.firstChild);

  }

  /*  update the GUI*/
  update() {
    this.deleteAll();
    for (let text of this.textList) {
      let item = document.createElement('li');
      item.setAttribute('id', 'task');

      // let checkbox = document.createElement('input');
      // checkbox.type = "checkbox";
      // checkbox.value = 1;
      // checkbox.setAttribute('class', 'box');

      item.innerHTML += `<input class="box" type="checkbox" /> ${text}`;

      //item.textContent = text;
      //item.appendChild(checkbox);


      this.element.appendChild(item);
    }
  }

  /*add elemte into list */
  add(x) {
    /*let item = document.getElementById('todo').value;
    this.textList.push(item);
    this.update();
    document.getElementById('todo').value ='';*/
    this.textList.push(x);
    this.update();
    document.getElementById('todo').value = '';


  }
  /* delete first elemte of the list  */
  deleteFirst() {
    this.textList.shift();
    this.update();

  }


  move() {
    let item = document.createElement('li')
    let text = document.getElementById('task').textContent
    item.textContent = text;
    this.element.appendChild(item);
  }


  deleteEl() {
    this.element.removeChild(this.element.firstChild);
  }
}

function addItem(event) {
  event.preventDefault();
  var x = document.getElementById('todo').value;
  if (x == "")
    alert("Task must be filled out");
  else
    listBinding.add(x);
}

function doneList() {
  //doneLi.move();
  //listBinding.deleteFirst();


}



function deleteChecked() {
  let test = "";
  var list = document.getElementById('toList')
  items = Array.prototype.slice.call(list.childNodes);
  while (item = items.pop()) {
    if (item.firstChild && item.firstChild.checked) {
      test = item.textContent
      list.removeChild(item);
    }

  }



  test = test.trim();
  let final = [];
  for (i = 0; i < listBinding.textList.length; i++) {
    if (listBinding.textList[i] !== test) {
      final.push(listBinding.textList[i])
    }

  }

  listBinding.textList = final;

  console.log(listBinding.textList);

  let doneli = document.createElement('li')
  doneli.textContent = test;
  document.getElementById('doneList').appendChild(doneli);
}

function del() {
  let test = "";
  var list = document.getElementById('toList')
  items = Array.prototype.slice.call(list.childNodes);
  while (item = items.pop()) {
    if (item.firstChild && item.firstChild.checked) {
      test = item.textContent
      list.removeChild(item);
    }

  }



  test = test.trim();
  let final = [];
  for (i = 0; i < listBinding.textList.length; i++) {
    if (listBinding.textList[i] !== test) {
      final.push(listBinding.textList[i])
    }

  }

  listBinding.textList = final;

  console.log(listBinding.textList);
}




const myList = document.getElementById('toList');
const done = document.getElementById('doneList');
let listBinding = new ListBinding(myList);
let doneLi = new ListBinding(done);
