function(e, t) {
    var i = function() {
        "use strict";

        function e() {
            c = [];
            var e, t, i;
            for (e in s)
                if (s.hasOwnProperty(e)) {
                    for ("*" === e ? c.push("\\" + e) : (c.push(e), s[e].noParse && z.push(e)), s[e].validChildLookup = {}, s[e].validParentLookup = {}, s[e].restrictParentsTo = s[e].restrictParentsTo || [], s[e].restrictChildrenTo = s[e].restrictChildrenTo || [], i = s[e].restrictChildrenTo.length, t = 0; t < i; t++) s[e].validChildLookup[s[e].restrictChildrenTo[t]] = !0;
                    for (i = s[e].restrictParentsTo.length, t = 0; t < i; t++) s[e].validParentLookup[s[e].restrictParentsTo[t]] = !0
                } l = new RegExp("<bbcl=([0-9]+) (" + c.join("|") + ")([ =][^>]*?)?>((?:.|[\\r\\n])*?)<bbcl=\\1 /\\2>", "gi"), d = new RegExp("\\[(" + c.join("|") + ")([ =][^\\]]*?)?\\]([^\\[]*?)\\[/\\1\\]", "gi"), u = new RegExp("\\[(" + z.join("|") + ")([ =][^\\]]*?)?\\]([\\s\\S]*?)\\[/\\1\\]", "gi"),
                function() {
                    for (var e = [], t = 0; t < c.length; t++) "\\*" !== c[t] && e.push("/" + c[t]);
                    p = new RegExp("(\\[)((?:" + c.join("|") + ")(?:[ =][^\\]]*?)?)(\\])", "gi"), h = new RegExp("(\\[)(" + e.join("|") + ")(\\])", "gi")
                }()
        }

        function t(e, i, n, o, a, r, d) {
            d = d || [], n++;
            var u, p, h, f, b = new RegExp("(<bbcl=" + n + " )(" + c.join("|") + ")([ =>])", "gi"),
                m = new RegExp("(<bbcl=" + n + " )(" + c.join("|") + ")([ =>])", "i"),
                M = r.match(b) || [],
                g = s[e] || {};
            for (b.lastIndex = 0, M || (r = ""), h = 0; h < M.length; h++) m.lastIndex = 0, f = M[h].match(m)[2].toLowerCase(), g && g.restrictChildrenTo && g.restrictChildrenTo.length > 0 && (g.validChildLookup[f] || (p = 'The tag "' + f + '" is not allowed as a child of the tag "' + e + '".', d.push(p))), u = s[f] || {}, u.restrictParentsTo.length > 0 && (u.validParentLookup[e] || (p = 'The tag "' + e + '" is not allowed as a parent of the tag "' + f + '".', d.push(p)));
            return r = r.replace(l, function(e, i, n, o, a) {
                return d = t(n, e, i, n, o, a, d), e
            }), d
        }

        function i(e) {
            return e = e.replace(/\<([^\>][^\>]*?)\>/gi, function(e, t) {
                var i = t.match(/^bbcl=([0-9]+) /);
                return null === i ? "<bbcl=0 " + t + ">" : "<" + t.replace(/^(bbcl=)([0-9]+)/, function(e, t, i) {
                    return t + (parseInt(i, 10) + 1)
                }) + ">"
            })
        }

        function n(e) {
            return e.replace(/<bbcl=[0-9]+ \/\*>/gi, "")
                .replace(/<bbcl=[0-9]+ /gi, "&#91;")
                .replace(/>/gi, "&#93;")
        }

        function o(e) {
            var t = e.text;
            return t = t.replace(l, w)
        }

        function a(e) {
            for (e = e.replace(/\[(?!\*[ =\]]|list([ =][^\]]*)?\]|\/list[\]])/gi, "<"), e = e.replace(/\[(?=list([ =][^\]]*)?\]|\/list[\]])/gi, ">"); e !== (e = e.replace(/>list([ =][^\]]*)?\]([^>]*?)(>\/list])/gi, function(e, t, i) {
                    for (var n = e; n !== (n = n.replace(/\[\*\]([^\[]*?)(\[\*\]|>\/list])/i, function(e, t, i) {
                            i = ">/list]" === i ? "</*]</list]" : "</*][*]";
                            var n = "<*]" + t + i;
                            return n
                        })););
                    return n = n.replace(/>/g, "<")
                })););
            return e = e.replace(/</g, "[")
        }

        function r(e) {
            for (var t = function(e, t, n, o) {
                    return e = e.replace(/\[/g, "<"), e = e.replace(/\]/g, ">"), i(e)
                }; e !== (e = e.replace(d, t)););
            return e
        }
        var s, c, l, d, u, p, h, f = {},
            b = /^(?:https?|file|c):(?:\/{1,3}|\\{1})[-a-zA-Z0-9:;@#%&()~_?\+=\/\\\.]*$/,
            m = /^(?:ftps?|c):(?:\/{1,3}|\\{1})[-a-zA-Z0-9:;@#%&()~_?\+=\/\\\.]*$/,
            M = /^(?:red|green|blue|orange|yellow|pink|black|white|beige|brown|grey|gray|silver|purple|maroon|lime|limegreen|olive|navy|teal|aqua)$/,
            g = /^#?[a-fA-F0-9]{6}$/,
            _ = /[^\s@]+@[^\s@]+\.[^\s@]+/,
            A = /([1-9][\d]?p[xt]|(?:x-)?small(?:er)?|(?:x-)?large[r]?)/,
            O = /[#]?([A-Za-z][A-Za-z0-9_-]*)/,
            v = /(?:board=\d+;)?((?:topic|threadid)=[\dmsg#\.\/]{1,40}(?:;start=[\dmsg#\.\/]{1,40})?|action=profile;u=\d+)/,
            y = /^\/threads\/[a-z0-9\-]*\/posts[a-z0-9?\=\-#\&]*/i,
            z = [];
        s = {
            anchor: {
                openTag: function(e, t) {
                    var i = e || "";
                    return i = i.substr(1) || "", O.test(i) || (i = ""), '<span id="post_' + i + '">'
                },
                closeTag: function(e, t) {
                    return "</span>"
                }
            },
            abbr: {
                openTag: function(e, t) {
                    var i = e || "";
                    return i = i.substr(1) || "", i = i.replace(/<.*?>/g, ""), '<abbr title="' + i + '">'
                },
                closeTag: function(e, t) {
                    return "</abbr>"
                }
            },
            acronym: {
                openTag: function(e, t) {
                    var i = e || "";
                    return i = i.substr(1) || "", i = i.replace(/<.*?>/g, ""), '<acronym title="' + i + '">'
                },
                closeTag: function(e, t) {
                    return "</acronym>"
                }
            },
            b: {
                openTag: function(e, t) {
                    return "<b>"
                },
                closeTag: function(e, t) {
                    return "</b>"
                }
            },
            bbcode: {
                openTag: function(e, t) {
                    return ""
                },
                closeTag: function(e, t) {
                    return ""
                }
            },
            black: {
                openTag: function(e, t) {
                    return '<span class="bbcode-color-black" style="color: black;">'
                },
                closeTag: function(e, t) {
                    return "</span>"
                }
            },
            blue: {
                openTag: function(e, t) {
                    return '<span class="bbcode-color-blue" style="color: blue;">'
                },
                closeTag: function(e, t) {
                    return "</span>"
                }
            },
            br: {
                openTag: function(e, t) {
                    return "<br />"
                },
                closeTag: function(e, t) {
                    return ""
                }
            },
            btc: {
                openTag: function(e, t) {
                    return '<span class="BTC">BTC</span>'
                },
                closeTag: function(e, t) {
                    return ""
                }
            },
            center: {
                openTag: function(e, t) {
                    return '<div align="center">'
                },
                closeTag: function(e, t) {
                    return "</div>"
                }
            },
            code: {
                openTag: function(e, t) {
                    return "<code>"
                },
                closeTag: function(e, t) {
                    return "</code>"
                },
                noParse: !0
            },
            color: {
                openTag: function(e, t) {
                    var i = "",
                        n = e || "=black";
                    return n = n.substr(1) || "black", n = n.toLowerCase(), n = n.trim(), M.lastIndex = 0, g.lastIndex = 0, M.test(n) ? i = n : g.test(n) ? "#" !== n.substr(0, 1) ? (i = "_" + n, n = "#" + n) : i = "_" + n.substr(1) : (n = "black", i = "black"), '<span class="bbcode-color-' + i + '" style="color:' + n + '">'
                },
                closeTag: function(e, t) {
                    return "</span>"
                }
            },
            email: {
                openTag: function(e, t) {
                    var i;
                    return i = e ? e.substr(1) : t.replace(/<.*?>/g, ""), i = i.trim(), _.lastIndex = 0, _.test(i) ? '<a href="mailto:' + i + '" target="_blank">' : "<a>"
                },
                closeTag: function(e, t) {
                    return "</a>"
                }
            },
            ftp: {
                openTag: function(e, t) {
                    var i = "";
                    return i = e ? e.substr(1) : t.replace(/<.*?>/g, ""), i = i.trim(), m.lastIndex = 0, m.test(i) ? '<a href="' + i + '" target="_blank">' : '<a target="_blank">'
                },
                closeTag: function(e, t) {
                    return "</a>"
                }
            },
            glow: {
                openTag: function(e, t) {
                    var i = e || "";
                    i = e.substr(1) || "", i = i.replace(/<.*?>/g, "");
                    var n = "",
                        o = i.split(",")[0];
                    return o = o.trim(), o = o.toLowerCase(), M.lastIndex = 0, g.lastIndex = 0, M.test(o) ? n = o : g.test(o) ? "#" !== o.substr(0, 1) ? (n = "_" + o, o = "#" + o) : n = "_" + o.substr(1) : (o = "inherit", n = "inherit"), '<span class="bbcode-bgcolor-' + n + '" style="background-color: ' + o + '">';
                },
                closeTag: function(e, t) {
                    return "</span>"
                }
            },
            green: {
                openTag: function(e, t) {
                    return '<span class="bbcode-color-green" style="color: green;">'
                },
                closeTag: function(e, t) {
                    return "</span>"
                }
            },
            hr: {
                openTag: function(e, t) {
                    return "<hr />"
                },
                closeTag: function(e, t) {
                    return ""
                }
            },
            html: {
                openTag: function(e, t) {
                    return ""
                },
                closeTag: function(e, t) {
                    return ""
                }
            },
            i: {
                openTag: function(e, t) {
                    return "<i>"
                },
                closeTag: function(e, t) {
                    return "</i>"
                }
            },
            img: {
                openTag: function(e, t) {
                    var i = t;
                    if (i = i.trim(), b.lastIndex = 0, b.test(i) || (i = ""), !e) return '<img src="' + i + '" />';
                    var n = e;
                    n = n.trim(), n = n.replace(/<.*?>/g, "");
                    var o, a, r;
                    if ((n.match(/alt=/gi) || [])
                        .length > 1) return '<img src="' + i + '" />';
                    if ((n.match(/width=/gi) || [])
                        .length > 1) return '<img src="' + i + '" />';
                    if ((n.match(/height=/gi) || [])
                        .length > 1) return '<img src="' + i + '" />';
                    var s = /^(alt=.+?|width=[0-9]+?|height=[0-9]+?)?\s*(alt=.+?|width=[0-9]+?|height=[0-9]+?)?\s*(alt=.+?|width=[0-9]+?|height=[0-9]+?)$/i.exec(n);
                    if (s)
                        for (var c = 1; c < s.length; c++) {
                            var l = s[c] || "";
                            l = l.trim(), /alt=/i.test(l) ? o = l.substr(4) : /width=/i.test(l) ? a = l.substr(6) : /height=/i.test(l) && (r = l.substr(7))
                        }
                    var d = '<img src="' + i + '" ';
                    return o && (d += 'alt="' + o + '" '), a && (d += 'width="' + a + '" '), r && (d += 'height="' + r + '" '), d += "/>"
                },
                closeTag: function(e, t) {
                    return ""
                },
                displayContent: !1
            },
            iurl: {
                openTag: function(e, t) {
                    var i;
                    return i = e ? e.substr(1) : t.replace(/<.*?>/g, ""), i = i.trim(), b.lastIndex = 0, b.test(i) || (i = "#"), '<a href="' + i + '" />'
                },
                closeTag: function(e, t) {
                    return ""
                }
            },
            left: {
                openTag: function(e, t) {
                    return '<div class="bbcode-text-left" style="text-align: left;">'
                },
                closeTag: function(e, t) {
                    return "</div>"
                }
            },
            li: {
                openTag: function(e, t) {
                    return "<li>"
                },
                closeTag: function(e, t) {
                    return "</li>"
                },
                restrictParentsTo: ["list", "ul", "ol"]
            },
            list: {
                openTag: function(e, t) {
                    var i = "<ul>",
                        n = e || "";
                    return n = n.trim(), n = n.replace(/<.*?>/g, ""), 0 === n.indexOf("type=") && (n = n.replace("type=", ""), n = n.trim(), /(none|disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman|lower-alpha|upper-alpha|lower-greek|lower-latin|upper-latin|hebrew|armenian|georgian|cjk-ideographic|hiragana|katakana|hiragana-iroha|katakana-iroha)/i.test(n) && (i = '<ul class="bbcode-list-' + n + '" style="list-style-type: ' + n + '">')), i
                },
                closeTag: function(e, t) {
                    return "</ul>"
                },
                restrictChildrenTo: ["*", "li"]
            },
            ltr: {
                openTag: function(e, t) {
                    return '<div dir="ltr">'
                },
                closeTag: function(e, t) {
                    return "</div>"
                }
            },
            me: {
                openTag: function(e, t) {
                    var i = e || "";
                    return i = i.substr(1), i = i.replace(/<.*?>/g, ""), i = i.trim(), t && (i += " "), '<div class="bbcode-color-red" style="color: red;">* ' + i + " "
                },
                closeTag: function(e, t) {
                    return "</div>"
                }
            },
            move: {
                openTag: function(e, t) {
                    return "<div>"
                },
                closeTag: function(e, t) {
                    return "</div>"
                }
            },
            noparse: {
                openTag: function(e, t) {
                    return ""
                },
                closeTag: function(e, t) {
                    return ""
                },
                noParse: !0
            },
            nobbc: {
                openTag: function(e, t) {
                    return ""
                },
                closeTag: function(e, t) {
                    return ""
                },
                noParse: !0
            },
            ol: {
                openTag: function(e, t) {
                    return "<ol>"
                },
                closeTag: function(e, t) {
                    return "</ol>"
                },
                restrictChildrenTo: ["*", "li"]
            },
            pre: {
                openTag: function(e, t) {
                    return "<pre>"
                },
                closeTag: function(e, t) {
                    return "</pre>"
                }
            },
            php: {
                openTag: function(e, t) {
                    return "<pre>"
                },
                closeTag: function(e, t) {
                    return "</pre>"
                },
                noParse: !0
            },
            quote: {
                openTag: function(e, t) {
                    var i = '<div class="quoteHeader">Quote</div>',
                        n = '<div class="quote">',
                        o = e || "";
                    if (o = o.trim(), o = o.replace(/<.*?>/g, ""), "" === o) return i + n;
                    if (0 === o.indexOf("=")) {
                        var a = o.substr(1);
                        return i = '<div class="quoteHeader">', i += "Quote From: " + a, i += "</div>", i + n
                    }
                    if (/author="/i.test(o)) {
                        var r = o.toLowerCase(),
                            s = o.substr(r.indexOf('author="') + 7);
                        return s = s.replace(/"/g, ""), i = '<div class="quoteHeader">', i += "Quote From: " + s, i += "</div>", i + n
                    }
                    var c, l, d, u = o.match(/author=/gi) || [];
                    if (u.length > 1 || 0 === u.length) return i + n;
                    if ((o.match(/link=/gi) || [])
                        .length > 1) return i + n;
                    if ((o.match(/date=/gi) || [])
                        .length > 1) return i + n;
                    var p = /^(author=.+?|link=.+?|date=[0-9]+?)?\s*(author=.+?|link=.+?|date=[0-9]+?)?\s*(author=.+?|link=.+?|date=[0-9]+?)$/i.exec(o);
                    if (p)
                        for (var h = 1; h < p.length; h++) {
                            var f = p[h] || "";
                            f = f.trim(), /author=/i.test(f) ? c = f.substr(7) : /link=/i.test(f) ? (l = f.substr(5), v.test(l) || y.test(l) || (l = void 0)) : /date=/i.test(f) && (d = Number(f.substr(5)))
                        }
                    return c && (i = '<div class="quoteHeader">', i += "Quote From: " + c, i += "</div>"), c && l && d && (i = '<div class="quoteHeader">', i += '<a href="' + l + '">', i += "Quote from: " + c + " on ept-date=" + d, i += "</a>", i += "</div>"), i + n
                },
                closeTag: function(e, t) {
                    return "</div>"
                }
            },
            right: {
                openTag: function(e, t) {
                    return '<div class="bbcode-text-right" style="text-align: right;">'
                },
                closeTag: function(e, t) {
                    return "</div>"
                }
            },
            red: {
                openTag: function(e, t) {
                    return '<span class="bbcode-color-red" style="color: red;">'
                },
                closeTag: function(e, t) {
                    return "</span>"
                }
            },
            rtl: {
                openTag: function(e, t) {
                    return '<div dir="rtl">'
                },
                closeTag: function(e, t) {
                    return "</div>"
                }
            },
            s: {
                openTag: function(e, t) {
                    return "<del>"
                },
                closeTag: function(e, t) {
                    return "</del>"
                }
            },
            shadow: {
                openTag: function(e, t) {
                    var i = "",
                        n = "",
                        o = "",
                        a = "",
                        r = /^(?:left|right|top|bottom)$/,
                        s = /^[0-9]\d{0,2}$/,
                        c = e || "";
                    if (c = e.substr(1) || "", c = c.replace(/<.*?>/g, ""), c.indexOf(",") < 0) return "<span>";
                    if (n = c.split(",")[0], n = n.trim(), n = n.toLowerCase(), M.lastIndex = 0, g.lastIndex = 0, M.test(n) || (g.test(n) ? "#" !== n.substr(0, 1) && (n = "#" + n) : n = "black"), o = c.split(",")[1] || "", o = o.trim())
                        if (r.test(o)) o = "left" === o ? " -2px 2px" : "right" === o ? " 2px 2px" : "top" === o ? " 0 -2px" : "bottom" === o ? " 0 2px" : " 0 0";
                        else if (s.test(o)) {
                        var l = o,
                            d = .0174532925 * l;
                        o = " " + Math.round(4 * Math.cos(d)) + "px", o += " " + Math.round(-4 * Math.sin(d)) + "px"
                    } else o = " 0 0";
                    else o = " 0 0";
                    a = c.split(",")[2] || "", a = a.trim(), a = a && s.test(a) ? " " + a + "px" : " 0", i = n + o + a;
                    var u = i.replace(/\s/gi, "_");
                    return u = u.replace(/#/gi, "_"), '<span class="bbcode-shadow-' + u + '" style="text-shadow: ' + i + '">'
                },
                closeTag: function(e, t) {
                    return "</span>"
                }
            },
            size: {
                openTag: function(e, t) {
                    var i = e || "";
                    return i = i.substr(1) || "inherit", i = i.trim(), A.lastIndex = 0, A.test(i) || (i = "inherit"), '<span class="bbcode-size-' + i + '" style="font-size: ' + i + ' !important; line-height: 1.3em;">'
                },
                closeTag: function(e, t) {
                    return "</span>"
                }
            },
            spoiler: {
                openTag: function(e, t) {
                    return '<span class="spoiler">'
                },
                closeTag: function(e, t) {
                    return "</span>"
                }
            },
            sub: {
                openTag: function(e, t) {
                    return "<sub>"
                },
                closeTag: function(e, t) {
                    return "</sub>"
                }
            },
            sup: {
                openTag: function(e, t) {
                    return "<sup>"
                },
                closeTag: function(e, t) {
                    return "</sup>"
                }
            },
            tt: {
                openTag: function(e, t) {
                    return "<tt>"
                },
                closeTag: function(e, t) {
                    return "</tt>"
                }
            },
            time: {
                openTag: function(e, t) {
                    var i = t || "";
                    return Number(i) ? i = "ept-date=" + i : (i = new Date(i)
                        .getTime(), i = "ept-date=" + i), i
                },
                closeTag: function(e, t) {
                    return ""
                },
                displayContent: !1
            },
            table: {
                openTag: function(e, t) {
                    return "<table>"
                },
                closeTag: function(e, t) {
                    return "</table>"
                },
                restrictChildrenTo: ["tbody", "thead", "tfoot", "tr"]
            },
            tbody: {
                openTag: function(e, t) {
                    return "<tbody>"
                },
                closeTag: function(e, t) {
                    return "</tbody>"
                },
                restrictChildrenTo: ["tr"],
                restrictParentsTo: ["table"]
            },
            tfoot: {
                openTag: function(e, t) {
                    return "<tfoot>"
                },
                closeTag: function(e, t) {
                    return "</tfoot>"
                },
                restrictChildrenTo: ["tr"],
                restrictParentsTo: ["table"]
            },
            thead: {
                openTag: function(e, t) {
                    return "<thead>"
                },
                closeTag: function(e, t) {
                    return "</thead>"
                },
                restrictChildrenTo: ["tr"],
                restrictParentsTo: ["table"]
            },
            td: {
                openTag: function(e, t) {
                    return '<td valign="top">'
                },
                closeTag: function(e, t) {
                    return "</td>"
                },
                restrictParentsTo: ["tr"]
            },
            th: {
                openTag: function(e, t) {
                    return "<th>"
                },
                closeTag: function(e, t) {
                    return "</th>"
                },
                restrictParentsTo: ["tr"]
            },
            tr: {
                openTag: function(e, t) {
                    return "<tr>"
                },
                closeTag: function(e, t) {
                    return "</tr>"
                },
                restrictChildrenTo: ["td", "th"],
                restrictParentsTo: ["table", "tbody", "tfoot", "thead"]
            },
            u: {
                openTag: function(e, t) {
                    return "<u>"
                },
                closeTag: function(e, t) {
                    return "</u>"
                }
            },
            ul: {
                openTag: function(e, t) {
                    return "<ul>"
                },
                closeTag: function(e, t) {
                    return "</ul>"
                },
                restrictChildrenTo: ["*", "li"]
            },
            url: {
                openTag: function(e, t) {
                    var i;
                    return i = e ? e.substr(1) : t.replace(/<.*?>/g, ""), i = i.trim(), b.lastIndex = 0, b.test(i) || (i = "#"), '<a href="' + i + '" target="_blank">'
                },
                closeTag: function(e, t) {
                    return "</a>"
                }
            },
            white: {
                openTag: function(e, t) {
                    return '<span class="bbcode-color-white" style="color: white;">'
                },
                closeTag: function(e, t) {
                    return "</span>"
                }
            },
            "*": {
                openTag: function(e, t) {
                    return "<li>"
                },
                closeTag: function(e, t) {
                    return "</li>"
                },
                restrictParentsTo: ["list", "ul", "ol"]
            }
        }, e();
        var w = function(e, t, i, o, a) {
            i = i.toLowerCase();
            var r = s[i].noParse ? n(a) : a.replace(l, w),
                c = s[i].openTag(o, r),
                d = s[i].closeTag(o, r);
            return s[i].displayContent === !1 && (r = ""), c + r + d
        };
        return f.tags = function() {
            return s
        }, f.addTags = function(t) {
            var i;
            for (i in t) s[i] = t[i];
            e()
        }, f.process = function(e) {
            var i = {
                    html: "",
                    error: !1
                },
                n = [];
            for (e.text = e.text.replace(/</g, "&lt;"), e.text = e.text.replace(/>/g, "&gt;"), e.text = e.text.replace(p, function(e, t, i, n) {
                    return "<" + i + ">"
                }), e.text = e.text.replace(h, function(e, t, i, n) {
                    return "<" + i + ">"
                }), e.text = e.text.replace(/\[/g, "&#91;"), e.text = e.text.replace(/\]/g, "&#93;"), e.text = e.text.replace(/</g, "["), e.text = e.text.replace(/>/g, "]"); e.text !== (e.text = e.text.replace(u, function(e, t, i, n) {
                    return n = n.replace(/\[/g, "&#91;"), n = n.replace(/\]/g, "&#93;"), i = i || "", n = n || "", "[" + t + i + "]" + n + "[/" + t + "]"
                })););
            return e.text = a(e.text), e.text = r(e.text), n = t("bbcode", e.text, -1, "", "", e.text), i.html = o(e), i.html.indexOf("[") === -1 && i.html.indexOf("]") === -1 || n.push("Some tags appear to be misaligned."), e.removeMisalignedTags && (i.html = i.html.replace(/\[.*?\]/g, "")), e.addInLineBreaks && (i.html = '<div style="white-space:pre;">' + i.html + "</div>"), i.html = i.html.replace("&#91;", "["), i.html = i.html.replace("&#93;", "]"), i.html = i.html.replace(/&lt;/g, "<"), i.html = i.html.replace(/&gt;/g, ">"), i.error = 0 !== n.length, i.errorQueue = n, i
        }, f
    }();
    e.exports = i
}
