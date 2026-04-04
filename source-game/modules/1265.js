function(e, t, i) {
    function n() {
        s.call(this, {
            title: o("ui.orientCharacter"),
            className: "CharacterOrientationWindow",
            freeContentDelay: 5e3,
            positionInfo: {
                left: "c",
                top: "c",
                width: 400,
                height: 340
            }
        }), this.hasDom = !1, this.isListening = !1, this.currentLook = null, this.hasConfirmButton = !1;
        var e = this;
        this.on("open", function(t) {
            e._onOpen(t), e.hasConfirmButton || (e.windowBody.appendChild(new r({
                text: o("ui.common.validation"),
                className: ["button"]
            }, function() {
                e.changeRequested(), e.close()
            })), e.hasConfirmButton = !0)
        }), this.on("close", function() {
            e.windowBody.clearContent(), e.hasDom = !1, e.hasConfirmButton = !1
        })
    }
    i(1266);
    var o = i(17)
        .getText,
        a = i(56)
        .inherits,
        r = i(86),
        s = i(1267);
    a(n, s), e.exports = n, n.prototype.changeRequested = function() {
        window.dofus.sendMessage("GameMapChangeOrientationRequestMessage", {
            direction: this.character.entity.direction
        })
    }
}
