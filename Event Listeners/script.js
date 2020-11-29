// DOM nesnelerinde olay atamak için kullanılır.
/* Kullanımı:
element.addEventListener(olay,fonksiyon,kabarcıklanma); */


const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask')

btn.addEventListener('click', function (e) {
    console.log('btn clicked');

    let val;

    val = e;
    val = e.target;

    console.log(val);

    e.preventDefault();
});

/* btn.addEventListener('click', btnClick2); //tek fonksiyonu 2 butona atayabiliriz
btn2.addEventListener('click', btnClick);  // yada tek buton için iki tane click olayı atanabilir.
btn2.addEventListener('click', btnClick); */


/* function btnClick() {
    console.log('btn clicked');
}
function btnClick2() {
    console.log('btn clicked');
} */