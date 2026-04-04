function(e, t, i) {
    ! function(e, t) {
        t(i(173))
    }(this, function(e) {
        "use strict";

        function t(e, t, i, n) {
            var o = e;
            switch (i) {
                case "s":
                    return n || t ? "néhány másodperc" : "néhány másodperce";
                case "ss":
                    return o + (n || t) ? " másodperc" : " másodperce";
                case "m":
                    return "egy" + (n || t ? " perc" : " perce");
                case "mm":
                    return o + (n || t ? " perc" : " perce");
                case "h":
                    return "egy" + (n || t ? " óra" : " órája");
                case "hh":
                    return o + (n || t ? " óra" : " órája");
                case "d":
                    return "egy" + (n || t ? " nap" : " napja");
                case "dd":
                    return o + (n || t ? " nap" : " napja");
                case "M":
                    return "egy" + (n || t ? " hónap" : " hónapja");
                case "MM":
                    return o + (n || t ? " hónap" : " hónapja");
                case "y":
                    return "egy" + (n || t ? " év" : " éve");
                case "yy":
                    return o + (n || t ? " év" : " éve")
            }
            return ""
        }

        function i(e) {
            return (e ? "" : "[múlt] ") + "[" + n[this.day()] + "] LT[-kor]"
        }
        //! moment.js locale configuration
        var n = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" "),
            o = e.defineLocale("hu", {
                months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                monthsShort: "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY. MMMM D.",
                    LLL: "YYYY. MMMM D. H:mm",
                    LLLL: "YYYY. MMMM D., dddd H:mm"
                },
                meridiemParse: /de|du/i,
                isPM: function(e) {
                    return "u" === e.charAt(1)
                        .toLowerCase()
                },
                meridiem: function(e, t, i) {
                    return e < 12 ? i === !0 ? "de" : "DE" : i === !0 ? "du" : "DU"
                },
                calendar: {
                    sameDay: "[ma] LT[-kor]",
                    nextDay: "[holnap] LT[-kor]",
                    nextWeek: function() {
                        return i.call(this, !0)
                    },
                    lastDay: "[tegnap] LT[-kor]",
                    lastWeek: function() {
                        return i.call(this, !1)
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s múlva",
                    past: "%s",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return o
    })
}
