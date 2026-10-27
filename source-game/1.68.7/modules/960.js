function(e, t, i) {
    function n() {
        a.call(this, {
            className: "ArenaWindow",
            title: r("ui.common.koliseum"),
            positionInfo: {
                left: "c",
                top: "c",
                width: "75%",
                height: "90%",
                minWidth: 700,
                maxHeight: 650,
                mustAvoidToolbar: !0
            },
            helpTab: {
                part: 2,
                subPart: 14
            }
        });
        var e = new c,
            t = new l,
            i = new d,
            n = this;
        this.once("open", function() {
            this.createTabs(this.windowBody, [{
                title: r("ui.koliseum.maintabGeneral"),
                content: e,
                name: "maintabGeneral"
            }, {
                title: r("ui.koliseum.maintabLadder1v1"),
                content: t,
                name: "maintabLadder1v1"
            }, {
                title: r("ui.koliseum.maintabLadder3v3"),
                content: i,
                name: "maintabLadder3v3"
            }])
        }), this.on("open", function() {
            this.setupTabs(), this.windowBody.tabs.emitOnCurrentTab("open")
        }), this.on("close", function() {
            t.onClose(), i.onClose()
        }), window.gui.playerData.MatchmakingData.on("Kolosseum1v1StatusUpdate", function() {
            n.openState && u.isCompleted1v1() && n.close()
        }), window.gui.playerData.MatchmakingData.on("Kolosseum3v3StatusUpdate", function() {
            n.openState && u.isCompleted3v3() && n.close()
        })
    }
    i(961);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(17)
        .getText,
        s = i(962),
        c = i(964),
        l = i(967),
        d = i(971),
        u = i(966);
    o(n, a), e.exports = n, n.prototype.createTabs = function(e, t) {
        e.tabs = new s, e.appendChild(e.tabs), e.panels = e.createChild("div", {
            className: "panels"
        }), e.panelCollection = {};
        for (var i = 0, n = t.length; i < n; i += 1) {
            var o = t[i].name;
            e.panelCollection[o] = e.panels.appendChild(t[i].content), e.tabs.addTab(t[i].title, e.panelCollection[o], i)
        }
        var a = this.windowBody.tabs;
        a.openFirstTab(), this.setupTabs()
    }, n.prototype.setupTabs = function() {
        var e = this.windowBody.tabs,
            t = e.getTabsMap(),
            i = e.getCurrentTab()
            .tab.isEnable();
        for (var n in t) {
            var o = t[n];
            0 === n ? o.tab.enable() : o.tab.disable()
        }
        i || e.openFirstTab()
    }
}
