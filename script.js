//Switch Case

//Koşullara göre komut akışını yönlendirmek için kullanılır.
//Birden fazla değeri karşılaştırmak için switch case yapısı kullanılabilir. Ör:;

var tarih = new Date();
var gun = tarih.getDay();
switch (gun) {
    case 0:
        alert("Pazar");
        break;
    case 1:
        alert("Pazartesi");
        break;
    case 2:
        alert("Salı");
        break;
    case 3:
        alert("çarşamba");
        break;
    case 4:
        alert("Perşembe");
        break;
    case 5:
        alert("Cuma");
        break;
    case 6:
        alert("Cumartesi");
        break;
}


