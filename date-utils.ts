export class DateUtils {
    static dateToText(date: Date): string {
        var sayilar = ['', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz',
            'on', 'on bir', 'on iki', 'on üç', 'on dört', 'on beş', 'on altı', 'on yedi', 'on sekiz', 'on dokuz',
            'yirmi', 'yirmi bir', 'yirmi iki', 'yirmi üç', 'yirmi dört', 'yirmi beş', 'yirmi altı', 'yirmi yedi', 'yirmi sekiz', 'yirmi dokuz',
            'otuz', 'otuz bir'];
        var aylar = ['ocak', 'şubat', 'mart', 'nisan', 'mayıs', 'haziran', 'temmuz', 'ağustos', 'eylül', 'ekim', 'kasım', 'aralık'];
        var onluklar = ['', 'on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan'];

        var gunNo = parseInt(date.getUTCDate().toString());
        var ayNo = parseInt(date.getUTCMonth().toString());
        var yilNo = date.getUTCFullYear().toString();

        var xxx = yilNo.charAt(2);
        var xxxx = yilNo.charAt(3);

        var gun = sayilar[gunNo];
        var ay = aylar[ayNo];
        var yil = '';
        if (yilNo.charAt(0) != '1') {
            yil += sayilar[parseInt(yilNo.charAt(0))] + " bin ";
        }
        else {
            yil += " bin ";
        }
        if (yilNo.charAt(1) != '0') {
            if (yilNo.charAt(1) != '1') {
                yil += sayilar[parseInt(yilNo.charAt(1))] + " ";
            }
            yil += "yüz ";
        }
        yil += onluklar[parseInt(xxx)];
        yil += " " + sayilar[parseInt(xxxx)];

        return gun + " " + ay + " " + yil;
    }
}

