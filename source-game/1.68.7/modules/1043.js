function(e, t, i) {
    function n() {
        var e = this;
        a.call(this, {
            window: {
                className: "GrimoireWindow",
                positionInfo: {
                    top: "c",
                    left: "c+20px",
                    width: "90%",
                    height: "97%",
                    maxWidth: 905,
                    maxHeight: 620,
                    mustAvoidToolbar: !0
                }
            }
        }), this.addTab("spells", new h, r("ui.grimoire.mySpell"), {
            part: 1,
            subPart: 2
        }), this.addTab("quests", new p, r("ui.common.quests"), {
            part: 2,
            subPart: 4
        }), this.addTab("alignment", new c, r("ui.common.alignment")), this.addTab("jobs", new f, r("ui.common.myJobs"), {
            part: 2,
            subPart: 5
        }), this.addTab("achievements", new l, r("ui.achievement.achievement"), {
            part: 2,
            subPart: 19
        }), this.addTab("ornaments", new u, r("ui.common.titles")), this.addTab("bestiary", new d, r("ui.common.bestiary"), {
            part: 2,
            subPart: 18
        }), this.on("open", function(e) {
            this.openTab(e.tabId, e.tabParams, {
                delayOpenedEvent: !0,
                forceOpen: !0
            })
        }), window.gui.scenarioManager.on("stepChanged", function() {
            var t = window.gui.scenarioManager.isBehaviourEnabled(s.DISABLE_CLOSE_BTN);
            e.toggleClassName("disableCloseBtn", t)
        })
    }
    i(1044);
    var o = i(56)
        .inherits,
        a = i(1045),
        r = i(17)
        .getText,
        s = i(129),
        c = i(1048),
        l = i(1050),
        d = i(1057),
        u = i(1065),
        p = i(1067),
        h = i(1069),
        f = i(1072);
    o(n, a), e.exports = n
}
