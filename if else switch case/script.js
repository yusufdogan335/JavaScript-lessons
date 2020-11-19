//Switch Case

//Koşullara göre komut akışını yönlendirmek için kullanılır.
//Birden fazla değeri karşılaştırmak için switch case yapısı kullanılabilir. Ör:;

// var tarih = new Date();
// var gun = tarih.getDay();
// switch (gun) {
//     case 0:
//         alert("Pazar");
//         break;
//     case 1:
//         alert("Pazartesi");
//         break;
//     case 2:
//         alert("Salı");
//         break;
//     case 3:
//         alert("çarşamba");
//         break;
//     case 4:
//         alert("Perşembe");
//         break;
//     case 5:
//         alert("Cuma");
//         break;
//     case 6:
//         alert("Cumartesi");
//         break;
// }

// Çalışma Uygulamaları-1

//20.04.2018 tarihinde trafiğe çıkan bir aracın servis bakım süreleri verilmiştir. Bu bilgilere göre servis uyarısını veriniz.

/** 1. Bakım: 1 yıl
    2. Bakım: 2 yıl
    3. Bakım: 3 yıl*/

// Çözüm:

// var trafigeCikis = new Date('04/20/2018');
// trafigeCikis.setHours(0, 0, 0, 0,); //saat, dakika,saniye,ms sıfırlamak için. Sadece günlerle çalışacağız.
// var trafiktekiMs = Date.now() - trafigeCikis.getTime();

// var trafiktekiGun = Math.floor(trafiktekiMs /    //Milisaniyeyi saniyeye,ordak dakikaya,ordan saate ve son olarak da güne çeviriyoruz.Küsurat için floor kullandık.
//     (1000 * 60 * 60 * 24));  //=1674 Gün

// console.log(trafiktekiGun);

// if (trafiktekiGun <= 365) {
//     console.log('1. servis bakım süreniz geldi.');
// } else if (trafiktekiGun > 365 && trafiktekiGun <= 365 * 2) {
//     console.log('2. servis bakım süreniz geldi.');
// } else if (trafiktekiGun > 365 * 2 && trafiktekiGun <= 365 * 3) {
//     console.log('3. servis bakım süreniz geldi.')
// } else {
//     console.log('Bilinmeyen bir süre');
// }



// Çalışma Uygulamaları-2
//Admin ve şifre girişi yapmak;


var result = prompt("who is there?");

if (result == 'cancel') {
    console.log('cancelled');
} else if (result == 'Admin') {
    console.log('Welcome Admin');

    var password = prompt('Enter your password:');
    
    if (password == 'cancel') {
        console.log('cancelled');
    } else if (password == '1234') {
        console.log('Welcome Admin');
    } else {
        console.log('wrong password');
    }

} else {
    console.log('I dont know you');
}