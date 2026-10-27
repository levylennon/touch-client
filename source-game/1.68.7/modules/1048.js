function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "AlignmentWindow",
            name: "alignment"
        });
        var e = this;
        this._setupEvents(), this.once("opened", function() {
            e._createDom(), e._updateDisplay(), e.on("open", function() {
                e._updateDisplay()
            }), e.on("opened", function() {
                e.updateCharacter()
            })
        }), this.on("closed", function() {
            this.characterDisplay.release()
        })
    }
    i(1049);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(765),
        s = i(490),
        c = i(86)
        .DofusButton,
        l = i(17)
        .getText,
        d = i(689),
        u = i(730),
        p = i(88),
        h = i(12),
        f = i(691),
        b = 2,
        m = -25;
    o(n, a), e.exports = n, n.prototype.updateCharacter = function() {
        var e = f.getLookWithoutPet(window.gui.playerData.characterBaseInformations.entityLook);
        this.characterDisplay.setLook(e, {
            riderOnly: !0,
            direction: u.DIRECTION_SOUTH,
            animation: "AnimStatique",
            boneType: "characters/",
            skinType: "characters/"
        })
    }, n.prototype._createDom = function() {
        function e() {
            return window.gui.playerData.isPvpAggressable() ? window.gui.playerData.alignment.alignmentInfos.honor + " / " + window.gui.playerData.alignment.alignmentInfos.honorNextGradeFloor : "0"
        }
        var t = this.createChild("div", {
                className: "leftColumn"
            }),
            i = this.rightColumn = this.createChild("div", {
                className: "rightColumn"
            }),
            n = t.createChild("div", {
                className: "topRow"
            }),
            o = n.createChild("div", {
                className: "thumbnail"
            });
        this.alignmentImage = o.createChild("div", {
            className: "alignmentImage"
        }), this.characterDisplay = n.appendChild(new d({
            scale: 2,
            verticalAlign: "top",
            horizontalAlign: "center"
        })), this.updateCharacter();
        var u = new a("div", {
            className: "alignmentWingsWrapper"
        });
        this.characterDisplay.insertAsFirstChild(u), this.alignmentWingsContainer = u.createChild("div", {
            className: "alignmentWingsContainer"
        });
        var h = t.createChild("div", {
            className: "alignmentInfo"
        });
        this.alignmentName = h.createChild("div", {
            className: "title"
        }), this.alignmentLevel = h.createChild("div", {
            className: "level"
        });
        var f = t.createChild("div", {
            className: "pvpBox"
        });
        f.createChild("div", {
            className: "title",
            text: l("ui.pvp.pvpMode")
        });
        var b = this.pvpContainer = f.createChild("div", {
                className: "pvpContainer"
            }),
            m = b.createChild("div", {
                className: "rankContainer"
            });
        m.createChild("div", {
            className: "rank",
            text: l("ui.pvp.rank")
        }), this.alignmentGrade = m.createChild("div", {
            className: "value"
        });
        var M = b.createChild("div", {
            className: "progress"
        });
        M.createChild("div", {
            className: "text",
            text: l("ui.pvp.honourPoints")
        }), this.honorPoints = M.appendChild(new s({
            className: "yellow"
        })), p.addTooltip(this.honorPoints, e, {
            longTapExplanation: !0
        }), b.createChild("div", {
            className: "text"
        });
        var g = b.appendChild(new r([{
            id: "modifier",
            header: l("ui.pvp.alignedAreaModificators")
        }], null, {
            clickable: !1
        }));
        g.addClassNames("balance"), this.pvpButton = f.appendChild(new c(l("ui.pvp.enabled", {
            className: "pvpButton"
        }))), this.pvpButton.on("tap", function() {
            window.dofus.sendMessage("SetEnablePVPRequestMessage", {
                enable: !window.gui.playerData.isPvpAggressable()
            })
        });
        var _ = i.createChild("div", {
            className: "headerRow"
        });
        this.icon = _.createChild("div", {
            className: ["icon", "image"]
        }), this.title = _.createChild("div", {
            className: "title"
        }), this.specialisations = i.appendChild(new r([{
            id: "spec",
            header: l("ui.pvp.allSpecializations")
        }, {
            id: "minimumAlignment"
        }], null, {
            clickable: !1
        })), this.specialisations.addClassNames("specialisations"), i.createChild("div", {
            className: "arrow"
        });
        var A = i.appendChild(new r([{
            id: "ability",
            header: l("ui.common.feats")
        }], null, {
            clickable: !1
        }));
        A.addClassNames("abilities")
    }, n.prototype._displayPvpInformations = function() {
        var e = this,
            t = window.gui.playerData.alignment,
            i = window.gui.playerData.isPvpAggressable();
        i ? (this.pvpButton.setText(l("ui.pvp.disabled")), this.pvpContainer.delClassNames("disabled"), t.getTopWings(t.alignmentInfos, function(t) {
            h.loadImage(t.imagePath, function(i) {
                e.alignmentWingsContainer.setStyles({
                    left: t.left + b + "px",
                    top: t.top + m + "px",
                    width: t.width + "px",
                    height: t.height + "px",
                    backgroundImage: 'url("' + i.src + '")'
                })
            })
        }), this.alignmentGrade.setText(t.getAlignmentGradeString()), this.honorPoints.setValue(t.getHonor())) : (this.pvpButton.setText(l("ui.pvp.enabled")), this.pvpContainer.addClassNames("disabled"), this.alignmentWingsContainer.setStyle("backgroundImage", "none"), this.alignmentGrade.setText("-"), this.honorPoints.setValue(0))
    }, n.prototype._displaySpecialisations = function(e) {
        var t = window.gui.playerData.alignment,
            i = t.alignmentInfos;
        if (this.specialisations.clearContent(), 0 !== i.alignmentSide)
            for (var n = 0; n < t.alignmentRanks.length; n++) {
                var o = t.alignmentRanks[n];
                o.orderId === e && this.specialisations.addRow({
                    spec: o.nameId,
                    minimumAlignment: o.minimumAlignment
                })
            }
    }, n.prototype._updateDisplay = function() {
        var e = window.gui.playerData.alignment,
            t = e.alignmentInfos;
        if (this.characterDisplay) {
            var i = this;
            0 === t.alignmentSide ? (this.rightColumn.addClassNames("disabled"), this.pvpButton.hide()) : (this.rightColumn.delClassNames("disabled"), this.pvpButton.show()), this._displayPvpInformations();
            var n = e.getNameId();
            i.alignmentName.setText(l("ui.common.alignment") + " " + n), e.getRank(function(n, o) {
                return n ? console.error("Failed to get alignment rank", n) : (i.alignmentLevel.setText(o.nameId + " - " + l("ui.common.level") + " " + t.alignmentValue), i._displaySpecialisations(o.orderId), void e.getOrder(o, function(t, n) {
                    return t ? console.error("Failed to get AlignmentOrder", t) : (i.title.setText(n.nameId), e.getAlignmentImageUrl(function(e) {
                        i.alignmentImage.setStyle("backgroundImage", e)
                    }), void e.getOrderImageUrl(n.id, function(e) {
                        i.icon.setStyle("backgroundImage", e)
                    }))
                }))
            })
        }
    }, n.prototype._setupEvents = function() {
        var e = this,
            t = window.gui,
            i = window.gui.playerData.alignment;
        i.on("alignmentChanged", function() {
            e._updateDisplay()
        }), t.playerData.on("lookUpdate", function() {
            e.characterDisplay && e.updateCharacter()
        })
    }
}
