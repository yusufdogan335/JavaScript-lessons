function yasHesapla(dogumYili) {
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


