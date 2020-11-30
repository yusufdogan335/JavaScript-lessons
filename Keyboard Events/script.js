const input = document.querySelector('#txtTaskName');
const form = document.querySelector('form');
const select = document.querySelector('#select');

//input.addEventListener('keydown', eventHandler); //tuşa basılı iken event gerçekleşir.
//input.addEventListener('keyup', eventHandler); //tuştan elini kaldırdığında event gerçekleşir.
//input.addEventListener('keypress', eventHandler);
//input.addEventListener('focus', eventHandler); // mouse ile input a focus olduğumuz anda değer çalışır.
//input.addEventListener('blur', eventHandler); //focustan çıkınca gerçekleşir.
//input.addEventListener('cut', eventHandler); // değeri kestiğimizde olay gerçekleşir (ctrl+x)
//input.addEventListener('paste', eventHandler); // yapıştırma işlemi olduğunda olay gerçekleşir(ctrl + v)
//input.addEventListener('select', eventHandler); // girilen değerin herhangi bir kısmı seçildiğinde bu event gerçekleşir.


//form.addEventListener('submit', eventHandler);// formdaki submit olayına tıklandığında event gerçekleşir.

select.addEventListener('change', eventHandler); // select kutusundan bir değer seçildiğinde change olayı gerçekleşir.


function eventHandler(e) {
    console.log('event type' + e.type); 
//     console.log('key code:' + e.keyCode); // hangi tuşa basıldığının key code u consola yazdırılır.
//     console.log('value :' + e.target.value); // kullanıcının girdiği değeri almak için kullanılır.(key up ile alıyoruz.)
//    e.target.style.backgroundColor = 'yellow';
    
    e.preventDefault(); // submit e tıklandığında sayfanın refresh olmasını engeller.(gerekli).
}