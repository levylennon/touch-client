function(e, t, i) {
    ! function(e, t) {
        t(i(173))
    }(this, function(e) {
        "use strict";

        function t(e, t, n, o) {
            var a = "";
            switch (n) {
                case "s":
                    return o ? "muutaman sekunnin" : "muutama sekunti";
                case "ss":
                    a = o ? "sekunnin" : "sekuntia";
                    break;
                case "m":
                    return o ? "minuutin" : "minuutti";
                case "mm":
                    a = o ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return o ? "tunnin" : "tunti";
                case "hh":
                    a = o ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return o ? "päivän" : "päivä";
                case "dd":
                    a = o ? "päivän" : "päivää";
                    break;
                case "M":
                    return o ? "kuukauden" : "kuukausi";
                case "MM":
                    a = o ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return o ? "vuoden" : "vuosi";
                case "yy":
                    a = o ? "vuoden" : "vuotta"
            }
            return a = i(e, o) + " " + a
        }

        function i(e, t) {
            return e < 10 ? t ? o[e] : n[e] : e
        }
        //! moment.js locale configuration
        var n = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            o = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", n[7], n[8], n[9]],
            a = e.defineLocale("fi", {
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM[ta] YYYY",
                    LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                    l: "D.M.YYYY",
                    ll: "Do MMM YYYY",
                    lll: "Do MMM YYYY, [klo] HH.mm",
                    llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                },
                calendar: {
                    sameDay: "[tänään] [klo] LT",
                    nextDay: "[huomenna] [klo] LT",
                    nextWeek: "dddd [klo] LT",
                    lastDay: "[eilen] [klo] LT",
                    lastWeek: "[viime] dddd[na] [klo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s päästä",
                    past: "%s sitten",
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
        return a
    })
}
