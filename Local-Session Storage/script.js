// Uygulamaların bilgilerini tarayıcı hafızasında saklamak;

//LOCAL STORAGE
let val;


//Set Item

const firstName = localStorage.setItem
    ('firstName', 'Yusuf');   //ilki key ismi , ikincisi buraya gelecek olan değer(value).

const lastName = localStorage.setItem
    ('lastName', 'Doğan');    

let hobies = ['sinema', 'araba', 'gezmek'];

//get item

val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');

//remove item

/* localStorage.removeItem('firstName');
localStorage.removeItem('lastName');
 */

// clear

//localStorage.clear();

// Set Array To Storage

localStorage.setItem('hobies', JSON.stringify(hobies)); //diziyi obje olarak yazdırmak için JSON.stringify() kullandık.

val = JSON.parse(localStorage.getItem('hobbies'));


console.log(val);
console.log(localStorage);


//SESSION STORAGE

const city = sessionStorage.setItem
    ('city', 'Kocaeli');

const country = sessionStorage.setItem
    ('country', 'Türkiye');


console.log(sessionStorage);


/* NOT: Aralarındaki fark;

localStorage; belli url ile ilişkilendirilmiş olan yapıları tarayıcı kapansa bile saklıyor.
sessionStorage; tarayıcı kapandığı anda ilişkilendirilmiş bilgiler gider.
 */


//local storage ile 5 MB a kadar veri depolanabiliyor.

//HTML 5 ile gelen bir özellik.






