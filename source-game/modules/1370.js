function(e, t, i) {
    function n() {
        r.call(this, {
            className: ["BonusPackElitePopup"],
            positionInfo: {
                left: "c",
                top: "c",
                width: 600,
                height: 200
            }
        }), this._createDom()
    }
    i(1371);
    var o = i(56)
        .inherits,
        a = i(86),
        r = i(951),
        s = i(17)
        .getText,
        c = i(52);
    o(n, r), e.exports = n, n.prototype._createDom = function() {
        var e = this;
        this.setTitle(s("ui.popup.information")), this.box.createChild("div", {
            className: "message",
            text: s("ui.shop.needBonusPackElite")
        });
        var t = this.buttonContainer.appendChild(new a({
            text: s("ui.common.ok"),
            className: ["button"]
        }));
        t.on("tap", function() {
            c.close(e.id), c.open("market", {
                tabId: "shop",
                tabParams: {
                    category: "bonuspack"
                }
            })
        })
    }
}
