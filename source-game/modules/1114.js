function(e, t, i) {
    function n() {
        r.call(this, {
            className: "LevelUpWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 535,
                height: 260
            }
        }), this.hasDom = !1, this._setupEvents()
    }

    function o(e) {
        e.sort(function(e, t) {
            var i = e.getProperty("minPlayerLevel"),
                n = t.getProperty("minPlayerLevel");
            return i < n ? -1 : i > n ? 1 : 0
        })
    }
    i(1115);
    var a = i(56)
        .inherits,
        r = i(70),
        s = i(52),
        c = i(17)
        .getText,
        l = i(885),
        d = i(88),
        u = i(689),
        p = i(730),
        h = i(12),
        f = i(430)
        .Delay,
        b = i(129);
    a(n, r), e.exports = n, n.prototype._setupSpellData = function() {
        var e = window.gui.playerData.characters.mainCharacter.spellData.spells,
            t = window.gui.playerData.characterBaseInformations.level;
        this.spells = [];
        for (var i = window.gui.playerData.characterBreed, n = 0; n < i.breedSpellsId.length; n++) {
            var a = i.breedSpellsId[n];
            t <= e[a].getProperty("minPlayerLevel") && this.spells.push(e[a])
        }
        o(this.spells)
    }, n.prototype._createDom = function() {
        this._characterDisplay = this.windowBody.appendChild(new u({
            scale: "fitin",
            horizontalAlign: "center"
        }));
        var e = this.windowBody.createChild("div", {
                className: "info"
            }),
            t = e.createChild("div", {
                className: "spellBlock"
            }),
            i = e.createChild("div", {
                className: "pointBlock"
            }),
            n = t.createChild("div", {
                className: "spellTextBox"
            });
        this.spellText = n.createChild("div", {
            className: "spellText"
        }), this.spellIcon = t.createChild("div", {
            className: "spellIcon"
        }), this.spellDescription = new l, d.addTooltip(this.spellIcon, this.spellDescription, {
            longTapExplanation: !0
        });
        var o = i.createChild("div", {
                className: ["healthPoints", "points"]
            }),
            a = i.createChild("div", {
                className: ["spellPoints", "points"]
            }),
            r = i.createChild("div", {
                className: ["charaPoints", "points"]
            });
        o.createChild("div", {
            className: "icon"
        }), o.createChild("div", {
            className: "text",
            text: c("ui.levelUp.LifePoints")
        }), this.health = o.createChild("div", {
            className: "point"
        }), a.createChild("div", {
            className: "icon"
        }), a.createChild("div", {
            className: "text",
            text: c("ui.levelUp.SpellPoints")
        }), this.spell = a.createChild("div", {
            className: "point"
        }), r.createChild("div", {
            className: "icon"
        }), r.createChild("div", {
            className: "text",
            text: c("ui.levelUp.CaracPoints")
        }), this.charac = r.createChild("div", {
            className: "point"
        }), this.hasDom = !0
    }, n.prototype.freeContent = function() {
        this.windowBody.clearContent(), this._characterDisplay = null, this.spellText = this.spellIcon = this.spellDescription = null, this.health = this.spell = this.charac = null, this.hasDom = !1
    }, n.prototype.updateSpellIcon = function(e) {
        var t = this;
        this.spellDescription.updateUI({
            spell: e
        });
        var i = e.spell.iconId;
        i < 0 && (console.error(new Error("iconId < 0 for spellId " + e.spell.id + ": " + i)), i = "noIcon"), h.preloadImage("gfx/spells/sort_" + i + ".png", function(e) {
            t.hasDom && t.spellIcon.setStyle("backgroundImage", e)
        })
    }, n.prototype._setupEvents = function() {
        var e = this,
            t = window.gui.playerData;
        t.on("characterLevelUp", function(t) {
            window.gui.scenarioManager.isBehaviourEnabled(b.DISABLE_LEVEL_FIGHT_POPUP) || new f(37, function() {
                    e._levelUp(t.newLevel, t.previousLevel)
                })
                .start()
        }), this.on("open", this._onOpen)
    }, n.prototype._onOpen = function() {
        this.hasDom || this._createDom();
        var e = window.gui.playerData.characterBaseInformations.entityLook;
        this._characterDisplay.setLook(e, {
            direction: p.DIRECTION_SOUTH_EAST,
            animation: "AnimStatique",
            boneType: "characters/",
            skinType: "characters/"
        })
    }, n.prototype._levelUp = function(e, t) {
        s.open(this.id), this._setupSpellData(), this.windowTitle.setText(c("ui.levelUp.TitleLevel", e));
        for (var i = this.spells, n = 0; n < i.length; n++) {
            var o = i[n],
                a = o.getProperty("minPlayerLevel");
            if (e === a) {
                this.updateSpellIcon(o), this.spellText.setText(c("ui.levelUp.newSpell"));
                break
            }
            if (e < a) {
                this.updateSpellIcon(o), this.spellText.setText(c("ui.levelUp.nextSpell") + " " + c("ui.levelUp.nextSpellLevel", a));
                break
            }
        }
        var r = e - t;
        this.health.setText("+ " + 5 * r), this.spell.setText("+ " + r), this.charac.setText("+ " + 5 * r)
    }
}
