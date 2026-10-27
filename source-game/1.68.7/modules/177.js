function(e, t, i) {
    ! function(e, t) {
        t(i(173))
    }(this, function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            i = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            n = function(e) {
                return function(n, o, a, r) {
                    var s = t(n),
                        c = i[e][t(n)];
                    return 2 === s && (c = c[o ? 0 : 1]), c.replace(/%d/i, n)
                }
            },
            o = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            a = e.defineLocale("ar-dz", {
                months: o,
                monthsShort: o,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, i) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: n("s"),
                    ss: n("s"),
                    m: n("m"),
                    mm: n("m"),
                    h: n("h"),
                    hh: n("h"),
                    d: n("d"),
                    dd: n("d"),
                    M: n("M"),
                    MM: n("M"),
                    y: n("y"),
                    yy: n("y")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 0,
                    doy: 4
                }
            });
        return a
    })
}
