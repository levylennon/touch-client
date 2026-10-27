function(e, t, i) {
    ! function(e, t) {
        t(i(173))
    }(this, function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e) {
            return e % 100 === 11 || e % 10 !== 1
        }

        function i(e, i, n, o) {
            var a = e + " ";
            switch (n) {
                case "s":
                    return i || o ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case "ss":
                    return t(e) ? a + (i || o ? "sekúndur" : "sekúndum") : a + "sekúnda";
                case "m":
                    return i ? "mínúta" : "mínútu";
                case "mm":
                    return t(e) ? a + (i || o ? "mínútur" : "mínútum") : i ? a + "mínúta" : a + "mínútu";
                case "hh":
                    return t(e) ? a + (i || o ? "klukkustundir" : "klukkustundum") : a + "klukkustund";
                case "d":
                    return i ? "dagur" : o ? "dag" : "degi";
                case "dd":
                    return t(e) ? i ? a + "dagar" : a + (o ? "daga" : "dögum") : i ? a + "dagur" : a + (o ? "dag" : "degi");
                case "M":
                    return i ? "mánuður" : o ? "mánuð" : "mánuði";
                case "MM":
                    return t(e) ? i ? a + "mánuðir" : a + (o ? "mánuði" : "mánuðum") : i ? a + "mánuður" : a + (o ? "mánuð" : "mánuði");
                case "y":
                    return i || o ? "ár" : "ári";
                case "yy":
                    return t(e) ? a + (i || o ? "ár" : "árum") : a + (i || o ? "ár" : "ári")
            }
        }
        var n = e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: i,
                ss: i,
                m: i,
                mm: i,
                h: "klukkustund",
                hh: i,
                d: i,
                dd: i,
                M: i,
                MM: i,
                y: i,
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return n
    })
}
