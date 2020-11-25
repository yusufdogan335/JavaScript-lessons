/* function yasHesapla(dogumYili) {
    return 2020 - dogumYili;
}

let ageYusuf = yasHesapla(1993);
console.log(ageYusuf);

function EmekliligeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if (emeklilik > 0) {
        console.log(`Emekli olmanıza ${emeklilik} yıl kaldı.`);
    } else {
        console.log(`zaten emekli oldunuz`);
    }
}

EmekliligeKacYilKaldi(1993);


 */

//Function Declarations

/* function sum(a, b) {
    var c = a + b;
    return c;
}

console.log(sum(10, 20)); */

//ES6 DEFAULT PARAMETERS-Function Expressions (değişkenin içine fonksiyon tanımlama)

/* const sum = function (a, b) {
    var c = a + b;
    return c;
} */

//console.log(sum(10, 30)); 2 değerden fazla girilince diğer değerler göz ardı edilir.

//Örnek Uygulama

// Bankamatik Uygulaması;

var hesapA = {
    ad: 'Yusuf DOĞAN',
    hesapNo: '12345678',
    bakiye: 2000,
    ekHesap:1000
}

var hesapB = {
    ad: 'Merve DOĞAN',
    hesapNo: '15485414',
    bakiye: 3000,
    ekHesap:2000
}

function paraCek(hesap, miktar) {
    console.log(`Merhaba ${hesap.ad}`);

    if (hesap.bakiye >= miktar) {
        console.log('Paranızı alabilirisiniz.');
    } else {
        var toplam = hesap.bakiye + hesap.ekHesap;

        if (toplam >= miktar) {
            if (confirm('Ek hesabınızı kullanmak ister misiniz')); {
                console.log('Paranızı alabilirsiniz');
            }else {
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} bulunmamaktadır`);
            }
        } else {
            console.log('Üzgünüz bakiye yetersiz.')
        }
    }
}
    paraCek(hesapB, 2000);
