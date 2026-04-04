function(e, t, i) {
    function n(e) {
        e = e || {};
        var t = Boolean(e.forumFirst),
            i = Boolean(e.fromLoginScreen);
        r.call(this, "div", {
            className: "socialBox"
        });
        var n, a = this;
        t && (n = this.appendChild(new s({
            className: ["socialNetworkButton", "forumButton"]
        })));
        var c = this.appendChild(new s({
                className: ["socialNetworkButton", "facebookButton"]
            })),
            l = this.appendChild(new s({
                className: ["socialNetworkButton", "twitterButton"]
            })),
            b = this.appendChild(new s({
                className: ["socialNetworkButton", "discordButton"]
            }));
        t || (n = this.appendChild(new s({
            className: ["socialNetworkButton", "forumButton"]
        }))), n.appendChild(new r("div", {
            className: ["forumButtonLeft"]
        })), this.forumButtonCaption = n.appendChild(new r("div", {
            className: ["forumButtonCenter"]
        })), n.appendChild(new r("div", {
            className: ["forumButtonRight"]
        })), p(c), c.on("tap", function() {
            var e = o();
            a._openSocialNetwork({
                schemeiOS: "fb://",
                schemeUrl: "fb://profile/" + h[e].facebookPageNumericId,
                browserUrl: "https://www.facebook.com/" + h[e].facebookPageNumericId
            }), i && f.loginScreenKPI("facebook")
        }), p(l), l.on("tap", function() {
            var e = o();
            a._openSocialNetwork({
                schemeiOS: "twitter://",
                schemeAndroid: "com.twitter.android",
                schemeUrl: "twitter://user?screen_name=" + h[e].twitterAccountId,
                browserUrl: "https://twitter.com/" + h[e].twitterAccountId
            }), i && f.loginScreenKPI("twitter")
        }), p(b), b.on("tap", function() {
            var e = o();
            u.openUrlInDeviceBrowser("https://discordapp.com/invite/" + h[e].discordGroupId), i && f.loginScreenKPI("discord")
        }), p(n), n.on("tap", function() {
            u.openUrlInAppBrowser(d("tablet.forum.link")), i && f.loginScreenKPI("forum")
        }), this.updateContent()
    }

    function o() {
        var e = window.Config.language;
        return h[e] || (e = h.fallbackLanguage), e
    }
    i(1315);
    var a = i(56)
        .inherits,
        r = i(72),
        s = i(86),
        c = i(7),
        l = i(17),
        d = l.getText,
        u = i(16),
        p = i(63),
        h = i(1316),
        f = i(1317);
    a(n, r), n.prototype._openSocialNetwork = function(e) {
        if (!window.appAvailability) return u.openUrlInDeviceBrowser(e.browserUrl);
        var t = "";
        c.isIOSApp ? t = e.schemeiOS : c.isAndroidApp && (t = e.schemeAndroid), window.appAvailability.check(t, function() {
            window.open(e.schemeUrl, "_system", "location=no")
        }, function() {
            u.openUrlInDeviceBrowser(e.browserUrl)
        })
    }, n.prototype.updateContent = function() {
        this.forumButtonCaption.setText(d("tablet.login.forum"))
    }, e.exports = n
}
