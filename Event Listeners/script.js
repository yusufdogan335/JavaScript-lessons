// DOM nesnelerinde olay atamak için kullanılır.
/* Kullanımı:
element.addEventListener(olay,fonksiyon,kabarcıklanma); */


const btn = document.querySelector('#btnDeleteAll');

/* btn.addEventListener('click', function () {
    console.log('btn clicked');
}) */

btn.addEventListener('click', btnClick);

function btnClick() {
    console.log('btn clicked');
}