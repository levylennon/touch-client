function(e, t, i) {
    var n;
    /*!
     * UAParser.js v0.7.20
     * Lightweight JavaScript-based User-Agent string parser
     * https://github.com/faisalman/ua-parser-js
     *
     * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
     * Licensed under MIT License
     */
    ! function(o, a) {
        "use strict";
        var r = "0.7.20",
            s = "",
            c = "?",
            l = "function",
            d = "undefined",
            u = "object",
            p = "string",
            h = "major",
            f = "model",
            b = "name",
            m = "type",
            M = "vendor",
            g = "version",
            _ = "architecture",
            A = "console",
            O = "mobile",
            v = "tablet",
            y = "smarttv",
            z = "wearable",
            w = "embedded",
            T = {
                extend: function(e, t) {
                    var i = {};
                    for (var n in e) t[n] && t[n].length % 2 === 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
                    return i
                },
                has: function(e, t) {
                    return "string" == typeof e && t.toLowerCase()
                        .indexOf(e.toLowerCase()) !== -1
                },
                lowerize: function(e) {
                    return e.toLowerCase()
                },
                major: function(e) {
                    return typeof e === p ? e.replace(/[^\d\.]/g, "")
                        .split(".")[0] : a
                },
                trim: function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            },
            C = {
                rgx: function(e, t) {
                    for (var i, n, o, r, s, c, d = 0; d < t.length && !s;) {
                        var p = t[d],
                            h = t[d + 1];
                        for (i = n = 0; i < p.length && !s;)
                            if (s = p[i++].exec(e))
                                for (o = 0; o < h.length; o++) c = s[++n], r = h[o], typeof r === u && r.length > 0 ? 2 == r.length ? typeof r[1] == l ? this[r[0]] = r[1].call(this, c) : this[r[0]] = r[1] : 3 == r.length ? typeof r[1] !== l || r[1].exec && r[1].test ? this[r[0]] = c ? c.replace(r[1], r[2]) : a : this[r[0]] = c ? r[1].call(this, c, r[2]) : a : 4 == r.length && (this[r[0]] = c ? r[3].call(this, c.replace(r[1], r[2])) : a) : this[r] = c ? c : a;
                        d += 2
                    }
                },
                str: function(e, t) {
                    for (var i in t)
                        if (typeof t[i] === u && t[i].length > 0) {
                            for (var n = 0; n < t[i].length; n++)
                                if (T.has(t[i][n], e)) return i === c ? a : i
                        } else if (T.has(t[i], e)) return i === c ? a : i;
                    return e
                }
            },
            I = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2000: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            },
            S = {
                browser: [
                    [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                    [b, g],
                    [/(opios)[\/\s]+([\w\.]+)/i],
                    [
                        [b, "Opera Mini"], g
                    ],
                    [/\s(opr)\/([\w\.]+)/i],
                    [
                        [b, "Opera"], g
                    ],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                    [b, g],
                    [/(konqueror)\/([\w\.]+)/i],
                    [
                        [b, "Konqueror"], g
                    ],
                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                    [
                        [b, "IE"], g
                    ],
                    [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                    [
                        [b, "Edge"], g
                    ],
                    [/(yabrowser)\/([\w\.]+)/i],
                    [
                        [b, "Yandex"], g
                    ],
                    [/(puffin)\/([\w\.]+)/i],
                    [
                        [b, "Puffin"], g
                    ],
                    [/(focus)\/([\w\.]+)/i],
                    [
                        [b, "Firefox Focus"], g
                    ],
                    [/(opt)\/([\w\.]+)/i],
                    [
                        [b, "Opera Touch"], g
                    ],
                    [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                    [
                        [b, "UCBrowser"], g
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [b, /_/g, " "], g
                    ],
                    [/(windowswechat qbcore)\/([\w\.]+)/i],
                    [
                        [b, "WeChat(Win) Desktop"], g
                    ],
                    [/(micromessenger)\/([\w\.]+)/i],
                    [
                        [b, "WeChat"], g
                    ],
                    [/(brave)\/([\w\.]+)/i],
                    [
                        [b, "Brave"], g
                    ],
                    [/(qqbrowserlite)\/([\w\.]+)/i],
                    [b, g],
                    [/(QQ)\/([\d\.]+)/i],
                    [b, g],
                    [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                    [b, g],
                    [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                    [b, g],
                    [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                    [b, g],
                    [/(MetaSr)[\/\s]?([\w\.]+)/i],
                    [b],
                    [/(LBBROWSER)/i],
                    [b],
                    [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                    [g, [b, "MIUI Browser"]],
                    [/;fbav\/([\w\.]+);/i],
                    [g, [b, "Facebook"]],
                    [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                    [b, g],
                    [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                    [g, [b, "Chrome Headless"]],
                    [/\swv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [b, /(.+)/, "$1 WebView"], g
                    ],
                    [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                    [
                        [b, /(.+(?:g|us))(.+)/, "$1 $2"], g
                    ],
                    [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                    [g, [b, "Android Browser"]],
                    [/(sailfishbrowser)\/([\w\.]+)/i],
                    [
                        [b, "Sailfish Browser"], g
                    ],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                    [b, g],
                    [/(dolfin)\/([\w\.]+)/i],
                    [
                        [b, "Dolphin"], g
                    ],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [
                        [b, "Chrome"], g
                    ],
                    [/(coast)\/([\w\.]+)/i],
                    [
                        [b, "Opera Coast"], g
                    ],
                    [/fxios\/([\w\.-]+)/i],
                    [g, [b, "Firefox"]],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [g, [b, "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                    [g, b],
                    [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [
                        [b, "GSA"], g
                    ],
                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [b, [g, C.str, I.browser.oldsafari.version]],
                    [/(webkit|khtml)\/([\w\.]+)/i],
                    [b, g],
                    [/(navigator|netscape)\/([\w\.-]+)/i],
                    [
                        [b, "Netscape"], g
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                    [b, g]
                ],
                cpu: [
                    [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                    [
                        [_, "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        [_, T.lowerize]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        [_, "ia32"]
                    ],
                    [/windows\s(ce|mobile);\sppc;/i],
                    [
                        [_, "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                    [
                        [_, /ower/, "", T.lowerize]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        [_, "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                    [
                        [_, T.lowerize]
                    ]
                ],
                device: [
                    [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                    [f, M, [m, v]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    [f, [M, "Apple"],
                        [m, v]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        [f, "Apple TV"],
                        [M, "Apple"]
                    ],
                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    [M, f, [m, v]],
                    [/(kf[A-z]+)\sbuild\/.+silk\//i],
                    [f, [M, "Amazon"],
                        [m, v]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                    [
                        [f, C.str, I.device.amazon.model],
                        [M, "Amazon"],
                        [m, O]
                    ],
                    [/android.+aft([bms])\sbuild/i],
                    [f, [M, "Amazon"],
                        [m, y]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    [f, M, [m, O]],
                    [/\((ip[honed|\s\w*]+);/i],
                    [f, [M, "Apple"],
                        [m, O]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    [M, f, [m, O]],
                    [/\(bb10;\s(\w+)/i],
                    [f, [M, "BlackBerry"],
                        [m, O]
                    ],
                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                    [f, [M, "Asus"],
                        [m, v]
                    ],
                    [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                    [
                        [M, "Sony"],
                        [f, "Xperia Tablet"],
                        [m, v]
                    ],
                    [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                    [f, [M, "Sony"],
                        [m, O]
                    ],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    [M, f, [m, A]],
                    [/android.+;\s(shield)\sbuild/i],
                    [f, [M, "Nvidia"],
                        [m, A]
                    ],
                    [/(playstation\s[34portablevi]+)/i],
                    [f, [M, "Sony"],
                        [m, A]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        [M, C.str, I.device.sprint.vendor],
                        [f, C.str, I.device.sprint.model],
                        [m, O]
                    ],
                    [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                    [M, [f, /_/g, " "],
                        [m, O]
                    ],
                    [/(nexus\s9)/i],
                    [f, [M, "HTC"],
                        [m, v]
                    ],
                    [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                    [f, [M, "Huawei"],
                        [m, O]
                    ],
                    [/(microsoft);\s(lumia[\s\w]+)/i],
                    [M, f, [m, O]],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    [f, [M, "Microsoft"],
                        [m, A]
                    ],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [f, /\./g, " "],
                        [M, "Microsoft"],
                        [m, O]
                    ],
                    [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                    [f, [M, "Motorola"],
                        [m, O]
                    ],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    [f, [M, "Motorola"],
                        [m, v]
                    ],
                    [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                    [
                        [M, T.trim],
                        [f, T.trim],
                        [m, y]
                    ],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [f, /^/, "SmartTV"],
                        [M, "Samsung"],
                        [m, y]
                    ],
                    [/\(dtv[\);].+(aquos)/i],
                    [f, [M, "Sharp"],
                        [m, y]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        [M, "Samsung"], f, [m, v]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [M, [m, y], f],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                    [
                        [M, "Samsung"], f, [m, O]
                    ],
                    [/sie-(\w*)/i],
                    [f, [M, "Siemens"],
                        [m, O]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                    [
                        [M, "Nokia"], f, [m, O]
                    ],
                    [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                    [f, [M, "Acer"],
                        [m, v]
                    ],
                    [/android.+([vl]k\-?\d{3})\s+build/i],
                    [f, [M, "LG"],
                        [m, v]
                    ],
                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        [M, "LG"], f, [m, v]
                    ],
                    [/(lg) netcast\.tv/i],
                    [M, f, [m, y]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                    [f, [M, "LG"],
                        [m, O]
                    ],
                    [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                    [M, f, [m, v]],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    [f, [M, "Lenovo"],
                        [m, v]
                    ],
                    [/(lenovo)[_\s-]?([\w-]+)/i],
                    [M, f, [m, O]],
                    [/linux;.+((jolla));/i],
                    [M, f, [m, O]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    [M, f, [m, z]],
                    [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                    [M, f, [m, O]],
                    [/crkey/i],
                    [
                        [f, "Chromecast"],
                        [M, "Google"]
                    ],
                    [/android.+;\s(glass)\s\d/i],
                    [f, [M, "Google"],
                        [m, z]
                    ],
                    [/android.+;\s(pixel c)[\s)]/i],
                    [f, [M, "Google"],
                        [m, v]
                    ],
                    [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                    [f, [M, "Google"],
                        [m, O]
                    ],
                    [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                    [
                        [f, /_/g, " "],
                        [M, "Xiaomi"],
                        [m, O]
                    ],
                    [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                    [
                        [f, /_/g, " "],
                        [M, "Xiaomi"],
                        [m, v]
                    ],
                    [/android.+;\s(m[1-5]\snote)\sbuild/i],
                    [f, [M, "Meizu"],
                        [m, O]
                    ],
                    [/(mz)-([\w-]{2,})/i],
                    [
                        [M, "Meizu"], f, [m, O]
                    ],
                    [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                    [f, [M, "OnePlus"],
                        [m, O]
                    ],
                    [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                    [f, [M, "RCA"],
                        [m, v]
                    ],
                    [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                    [f, [M, "Dell"],
                        [m, v]
                    ],
                    [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                    [f, [M, "Verizon"],
                        [m, v]
                    ],
                    [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                    [
                        [M, "Barnes & Noble"], f, [m, v]
                    ],
                    [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                    [f, [M, "NuVision"],
                        [m, v]
                    ],
                    [/android.+;\s(k88)\sbuild/i],
                    [f, [M, "ZTE"],
                        [m, v]
                    ],
                    [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                    [f, [M, "Swiss"],
                        [m, O]
                    ],
                    [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                    [f, [M, "Swiss"],
                        [m, v]
                    ],
                    [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                    [f, [M, "Zeki"],
                        [m, v]
                    ],
                    [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                    [
                        [M, "Dragon Touch"], f, [m, v]
                    ],
                    [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                    [f, [M, "Insignia"],
                        [m, v]
                    ],
                    [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                    [f, [M, "NextBook"],
                        [m, v]
                    ],
                    [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                    [
                        [M, "Voice"], f, [m, O]
                    ],
                    [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                    [
                        [M, "LvTel"], f, [m, O]
                    ],
                    [/android.+;\s(PH-1)\s/i],
                    [f, [M, "Essential"],
                        [m, O]
                    ],
                    [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                    [f, [M, "Envizen"],
                        [m, v]
                    ],
                    [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                    [M, f, [m, v]],
                    [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                    [f, [M, "MachSpeed"],
                        [m, v]
                    ],
                    [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                    [M, f, [m, v]],
                    [/android.+[;\/]\s*TU_(1491)\s+build/i],
                    [f, [M, "Rotor"],
                        [m, v]
                    ],
                    [/android.+(KS(.+))\s+build/i],
                    [f, [M, "Amazon"],
                        [m, v]
                    ],
                    [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                    [M, f, [m, v]],
                    [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                    [
                        [m, T.lowerize], M, f
                    ],
                    [/[\s\/\(](smart-?tv)[;\)]/i],
                    [
                        [m, y]
                    ],
                    [/(android[\w\.\s\-]{0,9});.+build/i],
                    [f, [M, "Generic"]]
                ],
                engine: [
                    [/windows.+\sedge\/([\w\.]+)/i],
                    [g, [b, "EdgeHTML"]],
                    [/webkit\/537\.36.+chrome\/(?!27)/i],
                    [
                        [b, "Blink"]
                    ],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    [b, g],
                    [/rv\:([\w\.]{1,9}).+(gecko)/i],
                    [g, b]
                ],
                os: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    [b, g],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [b, [g, C.str, I.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [b, "Windows"],
                        [g, C.str, I.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [b, "BlackBerry"], g
                    ],
                    [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                    [b, g],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                    [
                        [b, "Symbian"], g
                    ],
                    [/\((series40);/i],
                    [b],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [b, "Firefox OS"], g
                    ],
                    [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                    [b, g],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [b, "Chromium OS"], g
                    ],
                    [/(sunos)\s?([\w\.\d]*)/i],
                    [
                        [b, "Solaris"], g
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                    [b, g],
                    [/(haiku)\s(\w+)/i],
                    [b, g],
                    [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                    [
                        [g, /_/g, "."],
                        [b, "iOS"]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                    [
                        [b, "Mac OS"],
                        [g, /_/g, "."]
                    ],
                    [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                    [b, g]
                ]
            },
            E = function(e, t) {
                if ("object" == typeof e && (t = e, e = a), !(this instanceof E)) return new E(e, t)
                    .getResult();
                var i = e || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : s),
                    n = t ? T.extend(S, t) : S;
                return this.getBrowser = function() {
                    var e = {
                        name: a,
                        version: a
                    };
                    return C.rgx.call(e, i, n.browser), e.major = T.major(e.version), e
                }, this.getCPU = function() {
                    var e = {
                        architecture: a
                    };
                    return C.rgx.call(e, i, n.cpu), e
                }, this.getDevice = function() {
                    var e = {
                        vendor: a,
                        model: a,
                        type: a
                    };
                    return C.rgx.call(e, i, n.device), e
                }, this.getEngine = function() {
                    var e = {
                        name: a,
                        version: a
                    };
                    return C.rgx.call(e, i, n.engine), e
                }, this.getOS = function() {
                    var e = {
                        name: a,
                        version: a
                    };
                    return C.rgx.call(e, i, n.os), e
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function() {
                    return i
                }, this.setUA = function(e) {
                    return i = e, this
                }, this
            };
        E.VERSION = r, E.BROWSER = {
            NAME: b,
            MAJOR: h,
            VERSION: g
        }, E.CPU = {
            ARCHITECTURE: _
        }, E.DEVICE = {
            MODEL: f,
            VENDOR: M,
            TYPE: m,
            CONSOLE: A,
            MOBILE: O,
            SMARTTV: y,
            TABLET: v,
            WEARABLE: z,
            EMBEDDED: w
        }, E.ENGINE = {
            NAME: b,
            VERSION: g
        }, E.OS = {
            NAME: b,
            VERSION: g
        }, typeof t !== d ? (typeof e !== d && e.exports && (t = e.exports = E), t.UAParser = E) : (n = function() {
            return E
        }.call(t, i, t, e), !(n !== a && (e.exports = n)));
        var L = o && (o.jQuery || o.Zepto);
        if (typeof L !== d && !L.ua) {
            var N = new E;
            L.ua = N.getResult(), L.ua.get = function() {
                return N.getUA()
            }, L.ua.set = function(e) {
                N.setUA(e);
                var t = N.getResult();
                for (var i in t) L.ua[i] = t[i]
            }
        }
    }("object" == typeof window ? window : this)
}
