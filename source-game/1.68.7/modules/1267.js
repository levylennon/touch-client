function(e, t, i) {
    function n(e) {
        var t = {
            title: o("ui.previewSkin"),
            className: "CharacterPreviewSkinWindow",
            freeContentDelay: 5e3,
            positionInfo: {
                left: "c",
                top: "c",
                width: 400,
                height: 340
            }
        };
        e = e || t, r.call(this, e), this.hasDom = !1, this.isListening = !1, this.currentLook = null;
        var i = this;
        this.on("open", function(e) {
            i._onOpen(e)
        })
    }
    i(1268);
    var o = i(17)
        .getText,
        a = i(56)
        .inherits,
        r = i(70),
        s = i(689),
        c = i(63);
    a(n, r), e.exports = n, n.prototype.freeContent = function() {
        this.character.release(), this.windowBody.clearContent(), this.hasDom = !1
    }, n.prototype._onOpen = function(e) {
        this.hasDom || this._createDom(), this.isListening || this._setupEvents(), this.updateCharacter(e.look)
    }, n.prototype.updateCharacter = function(e) {
        var t = window.gui.playerData.characterBaseInformations;
        e = e || t.entityLook, this.character.setLook(e, {
            riderOnly: !1,
            boneType: "characters/",
            skinType: "characters/",
            keepDirection: !1,
            keepModels: !0
        })
    }, n.prototype._setupEvents = function() {
        this.isListening = !0;
        var e = this,
            t = window.gui.playerData;
        t.on("lookUpdate", function() {
            e.updateCharacter()
        }), t.on("mountRiding", function() {
            e.updateCharacter()
        })
    }, n.prototype._createDom = function() {
        var e = this;
        this.hasDom = !0;
        var t = this.windowBody.createChild("div", {
            className: "characterBox"
        });
        this.character = t.appendChild(new s({
            scale: "fitin",
            horizontalAlign: "center"
        }));
        var i = this.character.createChild("div", {
            className: "leftButton"
        });
        c(i, {
            repeatDelay: 100
        }), i.on("tap", function() {
            e.character.rotateCharacter(!1)
        });
        var n = this.character.createChild("div", {
            className: "rightButton"
        });
        c(n, {
            repeatDelay: 100
        }), n.on("tap", function() {
            e.character.rotateCharacter(!0)
        })
    }
}
