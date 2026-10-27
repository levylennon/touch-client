function(e, t, i) {
    ! function(e, t) {
        t(i(173))
    }(this, function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"],
            i = ["Ean", "Feabh", "Márt", "Aib", "Beal", "Meith", "Iúil", "Lún", "M.F.", "D.F.", "Samh", "Noll"],
            n = ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"],
            o = ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"],
            a = ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"],
            r = e.defineLocale("ga", {
                months: t,
                monthsShort: i,
                monthsParseExact: !0,
                weekdays: n,
                weekdaysShort: o,
                weekdaysMin: a,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Inniu ag] LT",
                    nextDay: "[Amárach ag] LT",
                    nextWeek: "dddd [ag] LT",
                    lastDay: "[Inné ag] LT",
                    lastWeek: "dddd [seo caite] [ag] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i %s",
                    past: "%s ó shin",
                    s: "cúpla soicind",
                    ss: "%d soicind",
                    m: "nóiméad",
                    mm: "%d nóiméad",
                    h: "uair an chloig",
                    hh: "%d uair an chloig",
                    d: "lá",
                    dd: "%d lá",
                    M: "mí",
                    MM: "%d míonna",
                    y: "bliain",
                    yy: "%d bliain"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function(e) {
                    var t = 1 === e ? "d" : e % 10 === 2 ? "na" : "mh";
                    return e + t
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return r
    })
}
