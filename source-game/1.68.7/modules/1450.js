function(e, t, i) {
    function n(e) {
        d.call(this, "div", {
            className: "ForumBlock",
            hidden: !1
        }), this._newsLoaded = !1, this.contentWrapper = this.appendChild(new _({
            className: ["forumNewsMargin"]
        }, {
            newUI: !0
        })), this.content = this.contentWrapper.content, this.content.addClassNames("forumNews"), this.contentWrapper.createChild("div", {
            className: ["topMask"]
        }), this.contentWrapper.createChild("div", {
            className: ["bottomMask"]
        });
        var t = this.createChild("div", {
            className: ["tabWrapper"]
        });
        if (this.tab = t.createChild("div", {
                className: ["forumTab"]
            }), t.createChild("div", {
                className: ["newsPlaceholder"]
            }), this.majDate = this.tab.createChild("div", {
                className: ["date"]
            }), this.tab.createChild("div", {
                className: ["title"]
            })
            .setText(A), this.trumpet = this.tab.createChild("div", {
                className: ["trumpet"]
            }), e.onTabTap) {
            var i = this;
            b(this.tab), this.tab.on("tap", function() {
                e.onTabTap(), g.loginScreenKPI("openChangelog"), i.contentWrapper.updateShadows(), i.contentWrapper.refresh()
            })
        }
        a()
    }

    function o(e) {
        return e = e.filter(function(e) {
            return !e.pinned
        }), e.sort(function(e, t) {
            return Date.parse(t.added_date) - Date.parse(e.added_date)
        }), e[0]
    }

    function a() {
        var e = {
            openTag: function() {
                return "<center>" + p("tablet.login.forumUnsupportedTag") + "</center><br />"
            },
            closeTag: function() {
                return ""
            },
            displayContent: !1
        };
        u.addTags({
            h2: {
                openTag: function() {
                    return "<h2>"
                },
                closeTag: function() {
                    return "</h2>"
                }
            },
            h3: {
                openTag: function() {
                    return "<h3>"
                },
                closeTag: function() {
                    return "</h3>"
                }
            },
            hr: {
                openTag: function() {
                    return '<br /><hr class="postSeparator"><br />'
                },
                closeTag: function() {
                    return ""
                }
            },
            embed: e,
            spoiler: e
        })
    }

    function r(e) {
        return e = e.replace(/\[hr\]/g, "[hr][/hr]"), e = e.replace(/\[list=1\]/g, "[list type=decimal]")
    }

    function s(e) {
        return e = e.replace(/(?:\r\n|\r|\n)/g, "")
    }
    i(1451);
    var c = i(121),
        l = i(56)
        .inherits,
        d = i(72),
        u = i(1452),
        p = i(17)
        .getText,
        h = i(142),
        f = i(16),
        b = i(63),
        m = i(60),
        M = i(34)
        .logger,
        g = i(1317),
        _ = i(453),
        A = "Changelog",
        O = "changelogRead",
        v = "changelogLast";
    l(n, d), e.exports = n, n.prototype.refresh = function() {
        this.contentWrapper.toggleClassName("open", !1), this.tab.toggleClassName("open", !1), this._update()
    }, n.prototype._update = function() {
        var e = this;
        this.content.clearContent(), this.content.addClassNames("spinner"), h.getForumTopicsList(function(t, i) {
            if (t) return window.developmentMode && console.error(t), e.content.delClassNames("spinner"), e.content.setHtml(p("tablet.login.forumUnreachable")), void f.allLinksOnTargetBlank(e.content);
            var n = o(i);
            h.getForumPostsList(n.id, function(t, i) {
                if (e.content.delClassNames("spinner"), t) return e.content.setHtml(p("tablet.login.forumUnreachable")), void f.allLinksOnTargetBlank(e.content);
                var o, a = [n].concat(i),
                    l = "",
                    d = null;
                try {
                    l = c(n.added_date, "dd/mm/yyyy")
                } catch (t) {
                    d = t
                }
                d && M.error("dateFormat error, topic date: " + n.added_date + " error: " + d);
                var h = "";
                for (o = 0; o < a.length; o++) {
                    h += 0 === o ? "<h1>" + a[o].title + '<span class="date">' + l + "</span></h1><br/>" : "<br /><br /><center>* * *</center><br />";
                    var b = a[o].content;
                    b = r(b), b = u.process({
                            text: b
                        })
                        .html, b = s(b), h += b
                }
                h += '<div class="endOfForum"></div>', e.content.setHtml(h), f.allLinksOnTargetBlank(e.content), e.majDate.setText(p("ui.login.majDate", l));
                var g = Date.parse(n.added_date) || 0,
                    _ = m.getValue(O, 0);
                m.setValue(v, g), e.trumpet.toggleClassName("new", g > _)
            })
        })
    }
}
