//Event Bubbling ( İçten dışa doğru olay tetiklemesi)

const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');


/* form.addEventListener('click', function (e) {
    console.log('form');
    e.stopPropagation();  //====>  İçten Dışa tetiklenmeyi engellemek için kullanılır. Böylece sadece tıklanan elemanın olayı gerçekleşir.
});

cardBody.addEventListener('click', function (e) {
    console.log('card-body');
    e.stopPropagation();
});

card.addEventListener('click', function (e) {
    console.log('card');
    e.stopPropagation();
});

container.addEventListener('click', function (e) {
    console.log('container');
    e.stopPropagation();
}); */


// EVENT CAPTURING ( Dıştan içe doğru tetikleme)

/* form.addEventListener('click', function (e) {
    console.log('form');
    e.stopPropagation(); // Yine burda da kullanılabilir. Ama dıştan içe tetiklediğinden en dış elementte kalır(ör. container)
},true); // 3. parametre olarak true kullanılırsa bu sefer dıştan içe doğru bir olay tetiklemesi olur.

cardBody.addEventListener('click', function (e) {
    console.log('card-body');
    e.stopPropagation();
},true);

card.addEventListener('click', function (e) {
    console.log('card');
    e.stopPropagation();
},true);

container.addEventListener('click', function (e) {
    console.log('container');
    e.stopPropagation();
},true); */


//Örnekte kullanımı(İkonlara olay ekleme);

/* const deleteItems = document.querySelectorAll('.fa-times'); //Birden fazla olduğu için All dedik.

deleteItems.forEach(function (item) {
    item.addEventListener('click', function(e){
        console.log(e.target);
    })
})
 */

// Üst elemandan Alt elemana geçişi de yapalım;

const ul = document.querySelector('ul');

ul.addEventListener('click', function (e) {

    if (e.target.className === 'fas fa-times'){
        (e.target.parentElement.parentElement.remove()); // çarpıya tıkladıkça eleman silinir.

    e.preventDefault();
    }
});

