const taskList = document.querySelector('#task-list');

//****Removing element

//taskList.remove();
//taskList.childNodes[1].remove();
//taskList.children[3].remove();
//taskList.removeChild(taskList.children[3]);


// ***Removing attribute

//taskList.children[0].removeAttribute('class');

/* for (let i = 0; i < taskList.children.length; i++){
    taskList.children[i].removeAttribute('class');
}
 */


// ***Replacing Elements(Element değiştirme):

//const cardHeader = document.querySelector('.card-header');

// create element::

/* const h2 = document.createElement('h2');
h2.setAttribute('class', 'card-header');
h2.appendChild(document.createTextNode('My list')); */

//yerlerini değiştirme;

/* const parent = document.querySelector('.card');
parent.replaceChild(h2, cardHeader); */

// div yerine oluşturduğumuz h2 etiketi geldi


/* console.log(cardHeader); */


// ** Classes ( Class değerlerini değiştirme)

let val;

link = taskList.children[0].children[0];

//val = link.className;
//val = link.classList;  //classları dizi içerisinde getirmek

link.classList.add('new');
link.classList.remove('new');

// Attributes

val = link.getAttribute('class');
val = link.getAttribute('href');
val = link.setAttribute('href', 'http//google.com');

val = link.hasAttribute('href')   //Link var mı yok mu kontrol etmek için

console.log(val);



