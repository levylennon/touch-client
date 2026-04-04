function(e, t, i) {
    function n() {
        function e(e) {
            n.selectedSpellId = e.rowId, n.selectedSpellName = e.rowContent.spellName
        }

        function t(e, t) {
            var i = new l("div", {
                className: "icon",
                name: "icon"
            });
            i.setStyle("backgroundImage", t), u(i, function() {
                return new p({
                    spell: e
                })
            }), n.table.addRow({
                icon: i,
                name: e.spell.nameId,
                rank: e.level,
                spellName: e.spell.nameId
            }, e.id)
        }

        function i(e) {
            for (var i = [], o = 0; o < e.length; o++) {
                var a = e[o];
                i.push(a.getIconUri())
            }
            h.preloadImages(i, function(i) {
                for (var o = 0; o < e.length; o++) t(e[o], i[o]);
                e.length > 0 ? (n.table.selectFirstRow(), n.validButton.enable()) : n.validButton.disable()
            })
        }
        r.call(this, {
            className: "SpellForgetWindow",
            title: c("ui.spellForget.title"),
            positionInfo: {
                left: "c",
                top: "c",
                width: 400,
                height: 350
            }
        });
        var n = this;
        this.selectedSpellId = null, this.selectedSpellName = null;
        var o = [{
            id: "icon"
        }, {
            id: "name",
            header: c("ui.common.spellName")
        }, {
            id: "rank",
            header: c("ui.social.guildRank")
        }];
        this.table = this.windowBody.appendChild(new d(o)), this.table.on("rowTap", function(t) {
            e(t)
        }), this.validButton = this.windowBody.appendChild(new s(c("ui.common.validation"))), this.validButton.on("tap", function() {
            n.selectedSpellId && window.gui.openConfirmPopup({
                title: c("ui.popup.warning"),
                message: c("ui.popup.spellForgetConfirm", n.selectedSpellName),
                cb: function(e) {
                    e && window.dofus.sendMessage("ValidateSpellForgetMessage", {
                        spellId: n.selectedSpellId
                    })
                }
            })
        }), this.on("open", function() {
            this.table.clearContent();
            var e = window.gui.playerData.characters.mainCharacter.spellData.getSpells(f.USABLE),
                t = [];
            for (var n in e) {
                var o = e[n];
                o.level > 1 && t.push(o)
            }
            i(t)
        }), this.on("close", function() {
            this.selectedSpellId = null, this.selectedSpellName = null
        }), window.gui.on("SpellForgetUIMessage", function(e) {
            e.open ? a.openDialog("spellForget") : a.close("spellForget")
        })
    }
    i(1253);
    var o = i(56)
        .inherits,
        a = i(52),
        r = i(70),
        s = i(86)
        .DofusButton,
        c = i(17)
        .getText,
        l = i(72),
        d = i(765),
        u = i(88)
        .addTooltip,
        p = i(885),
        h = i(12),
        f = i(746)
        .SpellData.SPELL_STATUS;
    o(n, r), e.exports = n
}
