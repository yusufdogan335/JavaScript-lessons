//Creating Elements
const li = document.createElement('li');

//add class

li.className = 'list-group-item list-group-item-secondary';

li.setAttribute('title', 'new item');
li.setAttribute('data-id', '5');

//text node

const text = document.createTextNode('Eklenen Text Yazısı'); //text oluşturmak için

li.appendChild(text); //li etiketinin içine gndermek için appendChild kullanıyoruz.

const a = document.createElement('a');  // a etiketi ekliyorum.
a.setAttribute('href', '#');            // attribute ekledim.
a.className = 'delete-item-float-right';//class ını ekledim.
a.innerHTML = '<i class="fas fa-times"></i>'; //ikon etiketini ekledim.


//appent a to li
li.appendChild(a);  // a etiketini de li etiketinin içine ekledim.

//appent li tu ul

document.querySelector('#task-list').appendChild(li);




console.log(li);