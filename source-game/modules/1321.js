function(e, t, i) {
    function n() {
        r.call(this, {
            className: "HardcoreDeathWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 500,
                height: 365
            }
        });
        var e = this;
        this.once("open", function() {
            e._createDom()
        })
    }
    i(1322);
    var o = i(56)
        .inherits,
        a = i(141),
        r = i(70),
        s = i(72),
        c = i(52),
        l = i(86)
        .DofusButton,
        d = i(17)
        .getText,
        u = i(12);
    o(n, r), e.exports = n, n.prototype._createDom = function() {
        var e = this,
            t = this.windowBody.createChild("div", {
                className: "message"
            }),
            i = new s("div", {
                className: "characterIllu"
            });
        this.insertAsFirstChild(i), u.preloadImage("gfx/illusUi/Heroique_tx_GameOver.png", function(e) {
            i.setStyle("backgroundImage", e)
        });
        var n = this.windowBody.createChild("div", {
                className: "buttonContainer"
            }),
            o = n.appendChild(new l(d("ui.common.yes")));
        o.on("tap", function() {
            c.close(e.id), a.goBackToSelectionOf("character")
        }), this.windowTitle.setText(d("ui.common.gameover")), t.setHtml(d("ui.gameuicore.hardcoreDeath"))
    }
}
