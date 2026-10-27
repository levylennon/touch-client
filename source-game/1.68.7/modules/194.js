function(e, t, i) {
    ! function(e, t) {
        t(i(173))
    }(this, function(e) {
        "use strict";

        function t(e) {
            return e > 1 && e < 5 && 1 !== ~~(e / 10)
        }

        function i(e, i, n, o) {
            var a = e + " ";
            switch (n) {
                case "s":
                    return i || o ? "pár sekund" : "pár sekundami";
                case "ss":
                    return i || o ? a + (t(e) ? "sekundy" : "sekund") : a + "sekundami";
                case "m":
                    return i ? "minuta" : o ? "minutu" : "minutou";
                case "mm":
                    return i || o ? a + (t(e) ? "minuty" : "minut") : a + "minutami";
                case "h":
                    return i ? "hodina" : o ? "hodinu" : "hodinou";
                case "hh":
                    return i || o ? a + (t(e) ? "hodiny" : "hodin") : a + "hodinami";
                case "d":
                    return i || o ? "den" : "dnem";
                case "dd":
                    return i || o ? a + (t(e) ? "dny" : "dní") : a + "dny";
                case "M":
                    return i || o ? "měsíc" : "měsícem";
                case "MM":
                    return i || o ? a + (t(e) ? "měsíce" : "měsíců") : a + "měsíci";
                case "y":
                    return i || o ? "rok" : "rokem";
                case "yy":
                    return i || o ? a + (t(e) ? "roky" : "let") : a + "lety"
            }
        }
        //! moment.js locale configuration
        var n = {
                standalone: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                format: "ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince".split("_"),
                isFormat: /DD?[o.]?(\[[^\[\]]*\]|\s)+MMMM/
            },
            o = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
            a = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
            r = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
            s = e.defineLocale("cs", {
                months: n,
                monthsShort: o,
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
                monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm",
                    l: "D. M. YYYY"
                },
                calendar: {
                    sameDay: "[dnes v] LT",
                    nextDay: "[zítra v] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v neděli v] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [v] LT";
                            case 3:
                                return "[ve středu v] LT";
                            case 4:
                                return "[ve čtvrtek v] LT";
                            case 5:
                                return "[v pátek v] LT";
                            case 6:
                                return "[v sobotu v] LT"
                        }
                    },
                    lastDay: "[včera v] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[minulou neděli v] LT";
                            case 1:
                            case 2:
                                return "[minulé] dddd [v] LT";
                            case 3:
                                return "[minulou středu v] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [v] LT";
                            case 6:
                                return "[minulou sobotu v] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "před %s",
                    s: i,
                    ss: i,
                    m: i,
                    mm: i,
                    h: i,
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
        return s
    })
}
