function(e, t, i) {
    ! function(e, t) {
        t(i(173))
    }(this, function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
            i = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"],
            n = e.defineLocale("sd", {
                months: t,
                monthsShort: t,
                weekdays: i,
                weekdaysShort: i,
                weekdaysMin: i,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd، D MMMM YYYY HH:mm"
                },
                meridiemParse: /صبح|شام/,
                isPM: function(e) {
                    return "شام" === e
                },
                meridiem: function(e, t, i) {
                    return e < 12 ? "صبح" : "شام"
                },
                calendar: {
                    sameDay: "[اڄ] LT",
                    nextDay: "[سڀاڻي] LT",
                    nextWeek: "dddd [اڳين هفتي تي] LT",
                    lastDay: "[ڪالهه] LT",
                    lastWeek: "[گزريل هفتي] dddd [تي] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s پوء",
                    past: "%s اڳ",
                    s: "چند سيڪنڊ",
                    ss: "%d سيڪنڊ",
                    m: "هڪ منٽ",
                    mm: "%d منٽ",
                    h: "هڪ ڪلاڪ",
                    hh: "%d ڪلاڪ",
                    d: "هڪ ڏينهن",
                    dd: "%d ڏينهن",
                    M: "هڪ مهينو",
                    MM: "%d مهينا",
                    y: "هڪ سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return n
    })
}
