function(e, t, i) {
    ! function(e, t) {
        t(i(173))
    }(this, function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, i, n) {
            var o = {
                s: ["thoddea sekondamni", "thodde sekond"],
                ss: [e + " sekondamni", e + " sekond"],
                m: ["eka mintan", "ek minut"],
                mm: [e + " mintamni", e + " mintam"],
                h: ["eka voran", "ek vor"],
                hh: [e + " voramni", e + " voram"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disamni", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineamni", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsamni", e + " vorsam"]
            };
            return n ? o[i][0] : o[i][1]
        }
        var i = e.defineLocale("gom-latn", {
            months: {
                standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
                isFormat: /MMMM(\s)+D[oD]?/
            },
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Fuddlo] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fattlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
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
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + "er";
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                    case "w":
                    case "W":
                        return e
                }
            },
            week: {
                dow: 0,
                doy: 3
            },
            meridiemParse: /rati|sokallim|donparam|sanje/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokallim" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, i) {
                return e < 4 ? "rati" : e < 12 ? "sokallim" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
            }
        });
        return i
    })
}
