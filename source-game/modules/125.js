function(e, t) {
    function i() {}

    function n(e, t) {
        if (l) {
            var i = new c(e);
            if (t) {
                var n = t.revenue;
                n && i.setRevenue(n.price, n.currency);
                var o = t.transactionId;
                o && (o = "string" == typeof o ? o : o.toString(), i.setTransactionId(o))
            }
            r.trackEvent(i)
        }
    }

    function o() {
        t.trackIAPBought = function(e, t, i, o) {
            switch (e) {
                case "com.ankama.dofustouch.starterpack":
                case "com.ankama.dofustouchnext.starterpack":
                    n("6re6in", {
                        revenue: {
                            price: t,
                            currency: i
                        },
                        transactionId: o
                    });
                    break;
                default:
                    n("m38gxs", {
                        revenue: {
                            price: t,
                            currency: i
                        },
                        transactionId: o
                    })
            }
        }, t.trackLevelGrowth = function(e, t) {
            for (var i in d) {
                var o = ~~i,
                    a = d[i];
                e < o && t >= o && n(a)
            }
        }, t.trackJoinGuild = function() {
            n("scgd8m")
        }, t.trackJoinGroup = function() {
            n("bg9eww")
        }, t.trackAddFriend = function() {
            n("gaquy8")
        }, t.trackBonusPack = function() {
            n("85vyax")
        }, t.characterCreation = function() {
            n("xidrfp")
        }, t.logIn = function() {
            n("fqg6wn")
        }, t.landedAstrub = function() {
            n("os77oz")
        }, t.appOpen = function() {
            n("83t7fq")
        }
    }

    function a(e, t, i, n, a) {
        if (t && i && n && a) {
            r = i, s = n, c = a;
            var d = s[t.environment] || s.EnvironmentSandbox,
                u = new s(t.appToken, d),
                p = s[t.logLevel] || s.LogLevelSuppress;
            u.setLogLevel(p), r.create(u), o(), l = !0
        }
    }
    var r, s, c, l = !1,
        d = {
            5: "pxgpsk",
            15: "dq85tq",
            20: "88hxio",
            30: "lamwfe",
            40: "wdo7mh",
            60: "lnyhd8",
            80: "83unje",
            90: "6gydap",
            100: "c0spae",
            120: "2pcpyu",
            140: "dyahv0",
            160: "2ri3xe",
            180: "1xfq37",
            190: "8dcq1t",
            200: "l96q3l"
        };
    t.initialize = a, 
    t.trackIAPBought = i,
    t.trackLevelGrowth = i,
    t.trackJoinGuild = i,
    t.trackJoinGroup = i,
    t.trackAddFriend = i,
    t.trackBonusPack = i,
    t.characterCreation = i,
    t.logIn = i,
    t.landedAstrub = i,
    t.appOpen = i
}
