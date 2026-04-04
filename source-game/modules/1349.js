function(e, t, i) {
    function n() {
        a.call(this, {
            className: "ToaWindow",
            title: r("ui.toa.interfaceTitle"),
            positionInfo: {
                left: "c",
                top: "c",
                width: "75%",
                height: "90%",
                minWidth: 700,
                maxHeight: 650,
                mustAvoidToolbar: !0
            }
        }), this.once("open", function() {
            var e = window.gui.playerData.ToaData;
            e.initRanksData(), this.body = this.windowBody.createChild("div", {
                className: "ToaBody"
            });
            var t = new c,
                i = new l,
                n = new d;
            this.createTabs(this.body, [{
                title: r("ui.toa.maintabGeneral"),
                content: t,
                name: e.GENERAL_TAB_NAME
            }, {
                title: r("ui.toa.maintabComposition"),
                content: i,
                name: e.COMPOSITION_TAB_NAME
            }, {
                title: r("ui.toa.maintabLadder"),
                content: n,
                name: e.LADDER_TAB_NAME
            }])
        }), this.on("open", function() {
            this.setupTabs(), this.body.tabs.emitOnCurrentTab("open")
        })
    }
    i(1350);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(17)
        .getText,
        s = i(962),
        c = i(1351),
        l = i(1355),
        d = i(1357),
        u = i(13),
        p = !1;
    o(n, a), e.exports = n, n.prototype.createTabs = function(e, t) {
        e.tabs = new s, e.appendChild(e.tabs), e.panels = e.createChild("div", {
            className: "panels"
        }), e.panelCollection = {};
        for (var i = 0, n = t.length; i < n; i += 1) {
            var o = t[i].name;
            e.panelCollection[o] = e.panels.appendChild(t[i].content), e.tabs.addTab(t[i].title, e.panelCollection[o], i)
        }
        var a = this.body.tabs;
        a.openFirstTab(), this.setupTabs()
    }, n.prototype.setupTabs = function() {
        var e = window.gui.playerData.ToaData,
            t = this.body.tabs,
            i = t.getTabsMap(),
            n = this,
            o = t.getCurrentTab()
            .tab.isEnable();
        for (var a in i) {
            var r = i[a],
                s = r.target.getWuiName();
            e.canTabBeDisable(s) ? r.tab.disable() : r.tab.enable()
        }
        e.isQuestAccomplished() || p || (window.gui.playerData.quests.on("questFinished", function(e) {
            e.questId === u.TOA_QUEST_ID && n.setupTabs()
        }), p = !0), o || t.openFirstTab()
    }
}
