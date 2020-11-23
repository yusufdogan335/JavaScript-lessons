/* Uygulama;

1-10 arası rastgele sayı üreten bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın

** puanlama yapın.
** kullanıcı kaç kerede bileceğini belirtebilirsin. */


let hak = 5,can;
let tahmin,sayac=0;
let sayi = Math.floor((Math.random() * 10) + 1);
can = Number(prompt('kaç kerede bileceksiniz?'));
hak = can;
console.log(sayi);

while (hak > 0) {
    hak--;
    sayac++;
    tahmin = Number(prompt('bir sayı giriniz'));

    if (sayi == tahmin) {
        console.log(`Tebrikler ${sayac} defada bildiniz.`);
        console.log(`puan: ${100 - (100/can) * (sayac - 1)}`);
        break;
    }else if (sayi > tahmin) {
        console.log('yukarı');
    } else {
        console.log('aşağı');
    }
    if (hak == 0) {
        console.log('Hakkınız Bitti.sayı :' +sayi);
    }

}
