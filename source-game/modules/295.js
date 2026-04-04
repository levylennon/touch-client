function(e, t, i) {
    ! function(e, t) {
        t(i(173))
    }(this, function(e) {
        "use strict";

        function t(e) {
            var t = e;
            return t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "leS" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "waQ" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "nem" : t + " pIq"
        }

        function i(e) {
            var t = e;
            return t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "Hu’" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "wen" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "ben" : t + " ret"
        }

        function n(e, t, i, n) {
            var a = o(e);
            switch (i) {
                case "ss":
                    return a + " lup";
                case "mm":
                    return a + " tup";
                case "hh":
                    return a + " rep";
                case "dd":
                    return a + " jaj";
                case "MM":
                    return a + " jar";
                case "yy":
                    return a + " DIS"
            }
        }

        function o(e) {
            var t = Math.floor(e % 1e3 / 100),
                i = Math.floor(e % 100 / 10),
                n = e % 10,
                o = "";
            return t > 0 && (o += a[t] + "vatlh"), i > 0 && (o += ("" !== o ? " " : "") + a[i] + "maH"), n > 0 && (o += ("" !== o ? " " : "") + a[n]), "" === o ? "pagh" : o
        }
        //! moment.js locale configuration
        var a = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_"),
            r = e.defineLocale("tlh", {
                months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
                monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
                monthsParseExact: !0,
                weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[DaHjaj] LT",
                    nextDay: "[wa’leS] LT",
                    nextWeek: "LLL",
                    lastDay: "[wa’Hu’] LT",
                    lastWeek: "LLL",
                    sameElse: "L"
                },
                relativeTime: {
                    future: t,
                    past: i,
                    s: "puS lup",
                    ss: n,
                    m: "wa’ tup",
                    mm: n,
                    h: "wa’ rep",
                    hh: n,
                    d: "wa’ jaj",
                    dd: n,
                    M: "wa’ jar",
                    MM: n,
                    y: "wa’ DIS",
                    yy: n
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
