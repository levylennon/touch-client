function(e, t, i) {
    function n() {
        o.call(this), this.slaves = {}, this.mainCharacter = new s, this.controlledCharacterId = 0, this.mainCharacterId = 0, this.isSpellLoaded = !1, this.resetPreviousValues()
    }
    var o = i(59)
        .EventEmitter,
        a = i(56)
        .inherits,
        r = i(34)
        .logger,
        s = i(746),
        c = i(746)
        .SpellData.SPELL_STATUS,
        l = i(52),
        d = i(476),
        u = i(105),
        p = i(109),
        h = i(14),
        f = {
            actionPointsCurrent: !0,
            alignmentInfos: !0,
            lifePoints: !0,
            maxLifePoints: !0,
            movementPointsCurrent: !0,
            accountSpellsPoints: !0,
            spellsPoints: !0
        };
    a(n, o), e.exports = n, n.prototype._getSlavesIdDebug = function() {
        return Object.keys(this.slaves)
            .join(",")
    }, n.prototype.connect = function(e) {
        (isNaN(e) || e < 0) && console.error(new Error("connection with impossible character id " + e)), this.controlledCharacterId = e, this.mainCharacterId = e, this.mainCharacter.connect(), this.mainCharacter.setCharacterId(e), this.resetPreviousValues()
    }, n.prototype.disconnect = function() {
        this.clearSlaves(), this.mainCharacter.disconnect(), this.controlledCharacterId = 0, this.mainCharacterId = 0, this.isSpellLoaded = !1, this.stopRegen(), this.resetPreviousValues()
    }, n.prototype.clearSlaves = function() {
        for (var e in this.slaves) this.slaves.hasOwnProperty(e) && (e === this.controlledCharacterId.toString() && (this.controlledCharacterId = 0), this.slaves[e].disconnect());
        this.slaves = {}
    }, n.prototype._removeSlave = function(e) {
        var t = this.slaves[e];
        t && (e === this.controlledCharacterId && (this.controlledCharacterId = 0), t.disconnect(), delete this.slaves[e])
    }, n.prototype.resetPreviousValues = function() {
        this.previousValues = {
            actionPointsCurrent: -1,
            alignmentInfos: -1,
            lifePoints: -1,
            maxLifePoints: -1,
            movementPointsCurrent: -1,
            accountSpellsPoints: -1,
            spellsPoints: -1
        }
    }, n.prototype.switchControlledCharacter = function(e) {
        if (e !== this.controlledCharacterId) {
            if (!e) return void console.error(new Error("Cannot switch for " + e));
            var t = h();
            this.resetPreviousValues(), this.controlledCharacterId = e, t.actorManager.switchUserActor(e), this.emit("switchControlledCharacter");
            var i = this.getControlledCharacter();
            i.characteristics && this.emitCharacteristicsUpdate(i)
        }
    }, n.prototype.canControlCharacterId = function(e) {
        return Boolean(0 !== e && (e === this.mainCharacterId || this.slaves[e]))
    }, n.prototype.getControlledCharacter = function() {
        return this.getCharacterById(this.controlledCharacterId)
    }, n.prototype.isMainCharacterControlled = function() {
        return this.controlledCharacterId === this.mainCharacterId
    }, n.prototype.getCharacterById = function(e) {
        if (e === this.mainCharacterId) return this.mainCharacter ? this.mainCharacter : (console.error(new Error("Cannot find the character for id " + e)), null);
        if (!this.slaves[e]) {
            var t = " curr slave: " + this._getSlavesIdDebug();
            return console.error(new Error("Cannot find the slave for id " + e + t)), null
        }
        return this.slaves[e]
    }, n.prototype.addSummonedCreature = function(e) {
        var t = e ? this.getCharacterById(e) : this.getControlledCharacter();
        t.currentSummonedCreature += 1
    }, n.prototype.removeSummonedCreature = function(e) {
        var t = e ? this.getCharacterById(e) : this.getControlledCharacter();
        t.currentSummonedCreature > 0 && (t.currentSummonedCreature -= 1)
    }, n.prototype.canSummonCreature = function(e) {
        var t = e ? this.getCharacterById(e) : this.getControlledCharacter();
        return t.getMaxSummonedCreature() > t.currentSummonedCreature
    }, n.prototype.addSummonedBomb = function(e) {
        var t = e ? this.getCharacterById(e) : this.getControlledCharacter();
        t.currentSummonedBomb += 1
    }, n.prototype.removeSummonedBomb = function(e) {
        var t = e ? this.getCharacterById(e) : this.getControlledCharacter();
        t.currentSummonedBomb > 0 && (t.currentSummonedBomb -= 1)
    }, n.prototype.canSummonBomb = function(e) {
        var t = e ? this.getCharacterById(e) : this.getControlledCharacter();
        return t.characteristics.summonableMaximumBombs.getTotalStat() > t.currentSummonedBomb
    }, n.prototype.getSpellModifications = function(e, t, i) {
        if (void 0 === e || null === e) return console.error(new Error("The character id is missing for spell: " + t)), null;
        if (!this.canControlCharacterId(e)) return null;
        var n = this.getCharacterById(e);
        if (!n) return null;
        var o = n.characteristics || {},
            a = o.spellModifications;
        if (!a || a.length <= 0) return null;
        for (var r = 0; r < a.length; r++) {
            var s = a[r];
            if (s.spellId === t && s.modificationType === i) return s
        }
        return null
    }, n.prototype.stopRegen = function() {
        var e = h();
        e.clearInterval(this.regenTimer)
    }, n.prototype.startRegen = function() {
        this.regenTimer = window.setInterval(this._autoRegenerateLife.bind(this), this.regenRate)
    }, n.prototype._autoRegenerateLife = function() {
        return this.mainCharacter && this.mainCharacter.characteristics ? void(this.mainCharacter.characteristics.lifePoints >= this.mainCharacter.characteristics.maxLifePoints ? this.stopRegen() : this.setCharacteristic(this.mainCharacter, "lifePoints", this.mainCharacter.characteristics.lifePoints + 1)) : void this.stopRegen()
    }, n.prototype.emitCharacteristicsUpdate = function(e) {
        if (!e) return void console.error(new Error("The character does not exist"));
        if (!e.characteristics) return void console.error(new Error("The character does not have chara"));
        for (var t in f)
            if (void 0 !== e.characteristics[t]) {
                var i = e.characteristics[t];
                this.previousValues[t] !== i && (this.previousValues[t] = i, this.emit("specificCharacteristicsUpdated", t, i))
            } else console.error(new Error("emitCharacteristicsUpdate: No characteristic named: " + t));
        this.emit("characteristicsUpdated", e.characteristics)
    }, n.prototype.setCharacteristics = function(e, t) {
        if (!e) return void console.error(new Error("The character does not exist"));
        e.setCharacteristics(t);
        var i = this.getControlledCharacter() === e;
        i && this.emitCharacteristicsUpdate(e)
    }, n.prototype.setCharacteristic = function(e, t, i) {
        if (!e) return void console.error(new Error("The character does not exist"));
        e.setCharacteristic(t, i);
        var n = this.getControlledCharacter() === e;
        n && f[t] && (this.previousValues[t] = i, this.emit("specificCharacteristicsUpdated", t, i))
    }, n.prototype.initialize = function(e) {
        function t(e) {
            var t = n.mainCharacter.spellData,
                i = {},
                o = 0,
                a = window.gui.playerData.characterBreed,
                r = e.spellPrevisualization ? c.VISIBLE : c.UNAVAILABLE;
            for (o = 0; o < a.breedSpellsId.length; o++) i[a.breedSpellsId[o]] = {
                spellStatus: r
            };
            for (o = 0; o < e.spells.length; o++) {
                var s = e.spells[o].spellLevel;
                i[e.spells[o].spellId] = {
                    spellStatus: c.USABLE,
                    spellLevel: s,
                    position: e.spells[o].position,
                    isDisabled: e.spells[o].isDisabled
                }
            }
            t.resetSpellsStatus(), t.addSpells(i, function() {
                n.emit("spellList")
            }), n.isSpellLoaded = !0
        }

        function i(e) {
            var t = n.mainCharacter.characteristics.alignmentInfos;
            t.aggressable = e, n.setCharacteristic(n.mainCharacter, "alignmentInfos", t)
        }
        var n = this;
        u.on("CharacterStatsListMessage", function(t) {
            if (n.mainCharacter.characteristics) {
                var i = n.mainCharacter.characteristics.energyPoints,
                    o = t.stats.energyPoints;
                i > o && e.playerData.emit("playerIsDead")
            }
            n.setCharacteristics(n.mainCharacter, t.stats)
        }), u.on("SlaveSwitchContextMessage", function(e) {
            var t = e.summonerId;
            if (t === n.mainCharacterId) {
                var i = e.slaveId,
                    o = n.slaves[i];
                o || (n.slaves[i] = new s, o = n.slaves[i], o.connect(), o.setCharacterId(i));
                for (var a = {}, r = 0; r < e.slaveSpells.length; r++) a[e.slaveSpells[r].spellId] = {
                    spellStatus: c.USABLE,
                    spellLevel: e.slaveSpells[r].spellLevel,
                    position: e.slaveSpells[r].position
                };
                o.spellData.addSpells(a, function() {
                    n.emit("spellList")
                }), n.setCharacteristics(o, e.slaveStats), n.switchControlledCharacter(i)
            }
        }), e.on("FighterStatsListMessage", function(e) {
            var t = n.getControlledCharacter(),
                i = new p(r, e.stats, (!1));
            n.setCharacteristics(t, i), l.getWindow("characteristics")
                .updateStats(i)
        }), e.on("LifePointsRegenBeginMessage", function(e) {
            n.regenRate = e.regenRate, n.stopRegen(), n.startRegen()
        }), e.on("LifePointsRegenEndMessage", function(e) {
            n.stopRegen(), n.setCharacteristic(n.mainCharacter, "lifePoints", e.lifePoints), n.setCharacteristic(n.mainCharacter, "maxLifePoints", e.maxLifePoints)
        }), e.on("SpellListMessage", function(e) {
            var i = window.gui.playerData;
            return i.characterBreed ? void t(e) : i.once("setCharacterBreed", function() {
                t(e)
            })
        }), e.on("SpellChangeSuccessMessage", function(e) {
            if (n.isSpellLoaded) {
                var t = n.mainCharacter.spellData;
                e.spells.forEach(function(e) {
                    var i = t.spells[e.spellId],
                        o = !i || 1 === i.level && i.level === e.spellLevel;
                    t.upgradeSpell(e.spellId, e.spellLevel, e.isDisabled, c.USABLE, function() {
                        o && !window.gui.playerData.inventory.isPendingPreset() && n.emit("newSpellLearned", e.spellId, e.spellLevel), n.emit("spellUpgrade", e.spellId, e.spellLevel)
                    })
                })
            }
        }), e.playerData.inventory.on("weaponChanged", function() {
            n.mainCharacter.spellData.weaponChanged(function() {
                n.emit("weaponChanged")
            })
        }), e.on("UpdateSelfAgressableStatusMessage", function(e) {
            var t = e.status;
            i(t), window.actorManager.updateActorsAggressableStatus([n.mainCharacterId], [t])
        }), e.on("UpdateMapPlayersAgressableStatusMessage", function(e) {
            var t = e.playerIds,
                o = t.indexOf(n.mainCharacterId);
            o !== -1 && i(e.enable[o])
        }), e.fightManager.on("BuffRemove", function(e) {
            e.actionId === d.ACTION_CONTROL_ENTITY && n._removeSlave(e.targetId)
        })
    }
}
