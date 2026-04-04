function(e, t, i) {
    ! function(e, t) {
        t(i(173))
    }(this, function(e) {
        "use strict";

        function t(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 !== 1
        }

        function i(e, i, n) {
            var o = e + " ";
            switch (n) {
                case "ss":
                    return o + (t(e) ? "sekundy" : "sekund");
                case "m":
                    return i ? "minuta" : "minutę";
                case "mm":
                    return o + (t(e) ? "minuty" : "minut");
                case "h":
                    return i ? "godzina" : "godzinę";
                case "hh":
                    return o + (t(e) ? "godziny" : "godzin");
                case "ww":
                    return o + (t(e) ? "tygodnie" : "tygodni");
                case "MM":
                    return o + (t(e) ? "miesiące" : "miesięcy");
                case "yy":
                    return o + (t(e) ? "lata" : "lat")
            }
        }
        //! moment.js locale configuration
        var n = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            o = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),
            a = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^paź/i, /^lis/i, /^gru/i],
            r = e.defineLocale("pl", {
                months: function(e, t) {
                    return e ? /D MMMM/.test(t) ? o[e.month()] : n[e.month()] : n
                },
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
                weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Dziś o] LT",
                    nextDay: "[Jutro o] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[W niedzielę o] LT";
                            case 2:
                                return "[We wtorek o] LT";
                            case 3:
                                return "[W środę o] LT";
                            case 6:
                                return "[W sobotę o] LT";
                            default:
                                return "[W] dddd [o] LT"
                        }
                    },
                    lastDay: "[Wczoraj o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[W zeszłą niedzielę o] LT";
                            case 3:
                                return "[W zeszłą środę o] LT";
                            case 6:
                                return "[W zeszłą sobotę o] LT";
                            default:
                                return "[W zeszły] dddd [o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "%s temu",
                    s: "kilka sekund",
                    ss: i,
                    m: i,
                    mm: i,
                    h: i,
                    hh: i,
                    d: "1 dzień",
                    dd: "%d dni",
                    w: "tydzień",
                    ww: i,
                    M: "miesiąc",
                    MM: i,
                    y: "rok",
                    yy: i
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return r
    })
}
