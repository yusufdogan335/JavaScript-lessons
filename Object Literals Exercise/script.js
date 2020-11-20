// Object Literal yapısını kullanarak en az 5 araç bilgisi tutacağız.

var aracBilgileri = {
    id: 'bmw116d_123',
    model: 'bmw 116d',
    yil: 2015,
    renk: 'Beyaz',
    servisKayitlari: [
        {
            id: 'bmw116d_123_1',
            tarih: '20.01.2016',
            km: '13000',
            ucret: 900,
            detay: [
                {id: 'bmw116d_123_1_1', aciklama: 'yağ değişimi', ucret:300},
                {id: 'bmw116d_123_1_2', aciklama: 'filtre değişimi', ucret:300},
                {id: 'bmw116d_123_1_3', aciklama: 'fren hidroliği', ucret:300}
            ]
        },
        {
            id: 'bmw116d_123_2',
            tarih: '10.01.2017',
            km: '28000',
            ucret: 1800,
            detay: [
                {id: 'bmw116d_123_2_1', aciklama: 'yağ değişimi', ucret:350},
                {id: 'bmw116d_123_2_2', aciklama: 'filtre değişimi', ucret: 350}, 
                {id: 'bmw116d_123_2_3', aciklama: 'fren hidroliği', ucret:300},
                {id: 'bmw116d_123_2_3', aciklama: 'balata degisimi', ucret:800}
            ]
        }
    ]
}

