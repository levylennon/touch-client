function(e, t, i) {
    function n(e) {
        return e ? h : f
    }

    function o() {
        r.call(this, {
            className: "DailyQuestWindow",
            title: s("ui.dailyQuest.dailyQuest"),
            positionInfo: {
                left: "c",
                top: "c",
                width: 700,
                height: 590,
                mustAvoidToolbar: !0
            },
            helpTab: {
                part: 2,
                subPart: 22
            }
        });
        var e = new l,
            t = new d;
        this.once("open", function() {
            this.body = this.windowBody.createChild("div", {
                className: "DQBody"
            }), this.createTabs(this.body, [{
                title: s("ui.dailyQuest.dailyQuest"),
                content: e,
                name: h
            }, {
                title: s("ui.almanax.almanax"),
                content: t,
                name: f
            }])
        }), this.on("open", function(e) {
            this.setupTabs();
            var t = window.gui.playerData.quests.dailyQuests.mainQuest,
                i = e.tabId ? e.tabId : n(!u(t));
            this.body.tabs.openTab(i, {}, {
                forceOpen: !0
            })
        })
    }
    i(1379);
    var a = i(56)
        .inherits,
        r = i(70),
        s = i(17)
        .getText,
        c = i(962),
        l = i(1380),
        d = i(1384),
        u = i(32)
        .isEmptyObject,
        p = !1,
        h = "dailyQuest",
        f = "almanax";
    a(o, r), e.exports = o, o.prototype.createTabs = function(e, t) {
        e.tabs = new c, e.appendChild(e.tabs), e.panels = e.createChild("div", {
            className: "panels"
        }), e.panelCollection = {};
        for (var i = 0, n = t.length; i < n; i += 1) {
            var o = t[i].name;
            e.panelCollection[o] = e.panels.appendChild(t[i].content), e.tabs.addTab(t[i].title, e.panelCollection[o], o)
        }
    }, o.prototype.setupTabs = function() {
        function e(e) {
            return e !== f && u(t)
        }
        var t = window.gui.playerData.quests.dailyQuests.mainQuest,
            i = this.body.tabs,
            n = i.getTabsMap(),
            o = this;
        for (var a in n) {
            var r = n[a],
                s = r.target.getWuiName();
            e(s) ? r.tab.disable() : r.tab.enable()
        }
        if (u(t) && !p) {
            var c = window.gui.playerData.quests;
            c.on("mainDQStarted", function() {
                o.setupTabs()
            }), c.on("listUpdated", function() {
                o.setupTabs()
            }), p = !0
        }
    }
}
