function(e, t, i) {
    function n() {
        O.call(this, "div", {
            className: "MountDetails"
        }), this.mountData = {}, this.boostMap = {
            1: {
                property: "energy",
                update: this._setEnergy
            },
            2: {
                property: "serenity",
                update: this._setSerenity
            },
            3: {
                property: "stamina",
                update: this._setStamina
            },
            4: {
                property: "love",
                update: this._setLove
            },
            5: {
                property: "maturity",
                update: this._setMaturity
            },
            6: {
                property: "boostLimiter",
                update: this._setTiredness
            }
        }, this._givenXP = 0, this._name = "", this.shouldResetTab = !0, this.hasDomAndListeners = !1, this.on("destroy", function() {
            this.hasDomAndListeners && (this._setEventListeners(!1), this.hasDomAndListeners = !1)
        })
    }

    function o() {
        return this.tooltipText
    }
    i(482);
    var a = i(12),
        r = i(86),
        s = i(474),
        c = i(483),
        l = i(484),
        d = i(17)
        .getText,
        u = i(56)
        .inherits,
        p = i(421),
        h = i(487),
        f = i(488),
        b = i(490),
        m = i(492),
        M = i(494),
        g = i(496),
        _ = i(88),
        A = i(52),
        O = i(72),
        v = 33,
        y = 0,
        z = 1,
        w = 2;
    u(n, O), e.exports = n, n.EFFECT_MOUNT = 995, n.EFFECT_INVALID_CERTIF = 994, n.isItemInstanceWithMountInfo = function(e) {
        return Boolean(e.effectsMap[n.EFFECT_MOUNT])
    }, n.getMountInfoFromCertificate = function(e) {
        return e.effectsMap[n.EFFECT_MOUNT]
    }, n.prototype.getIllustrationElement = function() {
        return this.hasDomAndListeners || this._setupDomAndListeners(), this._mountIllus
    }, n.prototype._createProgressBar = function(e, t, i, n) {
        var o = d("ui.common.colon"),
            a = e.createChild("div", {
                className: t
            });
        return a.createChild("div", {
            className: "label",
            text: i + o
        }), a.appendChild(new b({
            className: ["mountBar", n],
            tooltip: !0,
            longTapExplanation: !0,
            tooltipText: i
        }))
    }, n.prototype._getActionOnMount = function(e) {
        var t = this.mountData.mountLocation;
        return t ? c[this.mountData.mountLocation][e] : null
    }, n.prototype._exchangeAction = function(e) {
        var t = this._getActionOnMount(e);
        if (!t) return console.error(new Error("Invalid action " + e));
        var i = this;
        window.dofus.sendMessage("ExchangeHandleMountStableMessage", {
            actionType: t,
            rideId: i.mountData.id
        })
    }, n.prototype._setSex = function(e) {
        e ? this._sexIcon.replaceClassNames(["male"], ["female"]) : this._sexIcon.replaceClassNames(["female"], ["male"])
    }, n.prototype._setupDomAndListeners = function() {
        this.mustResize = !0, this._createMinMaxBox(), this._createMainInformation(), this._createPanels(), this._createButtons(), this._setEventListeners(!0), this.hasDomAndListeners = !0
    }, n.prototype._createMainInformation = function() {
        var e = this,
            t = this.createChild("div", {
                className: "mainContainer"
            }),
            i = t.createChild("div", {
                className: "mainInfosTop"
            }),
            n = i.createChild("div", {
                className: "leftColumn"
            });
        this._mountIllus = n.createChild("div", {
            className: "mountIllus"
        }), this._sexIcon = this._mountIllus.createChild("div", {
            className: "sexIcon"
        }), _.addTooltip(this._mountIllus, o, {
            longTapExplanation: !0
        });
        var a = i.createChild("div", {
            className: "rightColumn"
        });
        this._mountName = a.createChild("div", {
            className: "mountName"
        }), this._renameButton = a.appendChild(new r({
            className: ["simpleButton", "tinyBtn", "renameBtn"],
            tooltip: d("ui.mount.renameTooltip")
        }, function() {
            A.open("mountRename", {
                name: e.mountData.name,
                mountId: e.mountData.id,
                inputBox: e._mountName
            })
        }));
        var s = a.createChild("div", {
            className: "typeAndLevel"
        });
        this._mountType = s.appendChild(new f), this._level = s.createChild("div", {
            className: "level"
        });
        var c = t.createChild("div", {
                className: "mainInfosBottom"
            }),
            l = this.abilityDiv = c.createChild("div", {
                className: "abilityDiv"
            });
        this.abilities = [];
        for (var u = 0; u < w; u++) {
            var p = this.abilities[u] = l.createChild("div", {
                className: "ability"
            });
            _.addTooltip(p, o, {
                longTapExplanation: !0
            })
        }
        var h = c.createChild("div", {
            className: "statusIcons"
        });
        this.fertileIcon = h.appendChild(new M("fertile", {
            tooltip: ""
        })), this.domesticIcon = h.appendChild(new M("domestic", {
            tooltip: d("tablet.mount.domestic")
        })), this.mountableIcon = h.appendChild(new M("mountable", {
            tooltip: d("ui.common.mountable")
        })), this._rideButtonDiv = h.createChild("div", {
            className: "rideBtnDiv"
        }), this._rideButton = this._rideButtonDiv.appendChild(new r({
            className: ["greenButton", "rideButton"],
            addIcon: !0,
            tooltip: d("ui.mount.rideTooltip")
        }, function() {
            window.dofus.sendMessage("MountToggleRidingRequestMessage")
        }))
    }, n.prototype._createPanels = function() {
        var e = this._tabs = this.appendChild(new g({
            className: "tabs"
        }));
        e.addTab(d("tablet.mount.breeding"), this._createBreedingPanel()), e.addTab(d("ui.common.short.caracteristic"), this._createStatPanel())
    }, n.prototype._createBreedingPanel = function() {
        var e = new O("div", {
                className: "panel"
            }),
            t = e.createChild("div", {
                className: "breedingPanel"
            }),
            i = d("ui.common.colon");
        this._tirednessValue = this._createProgressBar(t, ["progressBar2col", "tired"], d("ui.common.tire"), "orange");
        var n = t.createChild("div", {
            className: "iconGaugeBar"
        });
        this._staminaGauge = n.appendChild(new l("stamina", d("ui.common.stamina"))), this._maturityGauge = n.appendChild(new l("maturity", d("ui.common.maturity"))), this._loveGauge = n.appendChild(new l("love", d("ui.common.love"))), this._serenityGauge = t.appendChild(new m);
        var o = this._fertilityDiv = t.createChild("div", {
            className: ["textInfo", "mating"]
        });
        return o.createChild("div", {
            className: "label",
            text: d("ui.common.reproductions") + i
        }), this._fertilityValue = o.createChild("div", {
            className: "value"
        }), this._fecondationState = t.createChild("div", {
            className: "fecondationState"
        }), e
    }, n.prototype._createStatPanel = function() {
        var e = new O("div", {
                className: "panel"
            }),
            t = e.createChild("div", {
                className: "statPanel"
            });
        return this._energyGauge = t.appendChild(new l("energy", d("ui.common.energy"), {
            size: v
        })), this._experienceValue = this._createProgressBar(t, ["progressBar2col", "xp"], d("ui.common.experiment"), "blue"), this._createGivenXp(t), t.createChild("div", {
            className: "effectLabel",
            text: d("ui.effects")
        }), this._effectsContent = t.createChild("div", {
            className: "effectsContent"
        }), e
    }, n.prototype._createGivenXp = function(e) {
        var t = this,
            i = this._givenXpDiv = e.createChild("div", {
                className: "givenXp"
            }),
            n = d("ui.common.giveXP") + d("ui.common.colon");
        i.createChild("div", {
            className: "label",
            text: n
        });
        var o = i.createChild("div", {
            className: "valueAndButton"
        });
        this._xpValue = o.createChild("div", {
            className: "value"
        }), o.appendChild(new r({
            className: ["simpleButton", "tinyBtn", "xpButton"],
            tooltip: d("ui.mount.xpPercentTooltip")
        }, function() {
            t.minMaxSelector.open({
                min: 0,
                max: 90,
                defaultValue: t._givenXP
            })
        }))
    }, n.prototype._feedMount = function() {
        var e = A.getWindow("feed");
        if (!e.feedingBox.possessFeedItemForMount()) return window.gui.openSimplePopup(d("ui.item.errorNoFoodMount"));
        var t;
        t = "shed" === this.mountData.mountLocation ? h.LOCATION_STABLED : h.LOCATION_EQUIPED, A.open("feed", {
            mode: "mount",
            mountUid: this.mountData.id,
            mountLocation: t
        })
    }, n.prototype._neuterMount = function() {
        var e = this;
        window.gui.openConfirmPopup({
            title: d("ui.popup.warning"),
            message: d("ui.mount.doUCastrateYourMount"),
            cb: function(t) {
                t && (e.inBreeding ? e._exchangeAction("sterilize") : window.dofus.sendMessage("MountSterilizeRequestMessage"))
            }
        })
    }, n.prototype._releaseMount = function() {
        var e = this;
        window.gui.openConfirmPopup({
            title: d("ui.popup.warning"),
            message: d("ui.mount.doUKillYourMount"),
            cb: function(t) {
                t && (e.inBreeding ? e._exchangeAction("free") : window.dofus.sendMessage("MountReleaseRequestMessage"))
            }
        })
    }, n.prototype._createButtons = function() {
        var e = this,
            t = this.createChild("div", {
                className: "buttons"
            });
        this._feedButton = t.appendChild(new r({
            className: ["simpleButton", "mountButton", "feedButton"],
            tooltip: d("ui.mount.feed")
        }, this._feedMount.bind(this))), this._feedButton.disable(), this._inventoryButton = t.appendChild(new r({
            className: ["simpleButton", "mountButton", "inventoryButton"],
            tooltip: d("ui.mount.inventoryAccess")
        }, function() {
            window.dofus.sendMessage("ExchangeRequestOnMountStockMessage")
        })), this._genealogyButton = t.appendChild(new r({
            className: ["simpleButton", "mountButton", "genealogyButton"],
            tooltip: d("ui.mount.ancestorTooltip")
        }, function() {
            A.open("familyTree", e.mountData)
        })), this._cutButton = t.appendChild(new r({
            className: ["simpleButton", "mountButton", "cutButton"],
            tooltip: d("ui.mount.castrateTooltip")
        }, this._neuterMount.bind(this))), this._releaseButton = t.appendChild(new r({
            className: ["simpleButton", "mountButton", "releaseButton"],
            tooltip: d("ui.mount.killTooltip")
        }, this._releaseMount.bind(this)))
    }, n.prototype._createMinMaxBox = function() {
        var e = this.minMaxSelector = this.appendChild(new p);
        e.setStyles({
            left: "-12px",
            top: "249px"
        });
        var t = this;
        e.on("confirm", function(e) {
            e !== t._givenXP && window.dofus.sendMessage("MountSetXpRatioRequestMessage", {
                xpRatio: e
            })
        })
    }, n.prototype._processMountRenamed = function(e) {
        e.mountId === this.mountData.id && (this._setName(e.name), this.emit("renameMount", this._name))
    }, n.prototype._processMountSterilized = function(e) {
        e.mountId === this.mountData.id && (this.mountData.reproductionCount = -1, this._setFertilityState())
    }, n.prototype._processMountRiding = function(e) {
        var t = window.gui.playerData;
        t.equippedMount.id === this.mountData.id && this._setRideButton(e)
    }, n.prototype._processMountReleased = function(e) {
        e.mountId === this.mountData.id && this.emit("freeMount", e.mountId)
    }, n.prototype._processUpdateMountBoost = function(e) {
        e.rideId === this.mountData.id && this._updateBoost(e.boostToUpdateList)
    }, n.prototype._setEventListeners = function(e) {
        var t = window.gui.playerData,
            i = window.dofus.connectionManager;
        e ? (this.mountRenamedHandler || (this.mountRenamedHandler = this._processMountRenamed.bind(this), this.mountSterilizedHandler = this._processMountSterilized.bind(this), this.mountReleasedHandler = this._processMountReleased.bind(this), this.updateMountBoostHandler = this._processUpdateMountBoost.bind(this), this.setRatioHandler = this._setXpRatio.bind(this), this.mountRidingHandler = this._processMountRiding.bind(this)), i.on("MountRenamedMessage", this.mountRenamedHandler), i.on("MountSterilizedMessage", this.mountSterilizedHandler), i.on("MountReleasedMessage", this.mountReleasedHandler), i.on("UpdateMountBoostMessage", this.updateMountBoostHandler), t.on("setMountRatio", this.setRatioHandler), t.on("mountRiding", this.mountRidingHandler)) : (i.removeListener("MountRenamedMessage", this.mountRenamedHandler), i.removeListener("MountSterilizedMessage", this.mountSterilizedHandler), i.removeListener("MountReleasedMessage", this.mountReleasedHandler), i.removeListener("UpdateMountBoostMessage", this.updateMountBoostHandler), t.removeListener("setMountRatio", this.setRatioHandler), t.removeListener("mountRiding", this.mountRidingHandler))
    }, n.prototype._updateBoost = function(e) {
        for (var t = this.mountData, i = 0; i < e.length; i += 1) {
            var n = e[i],
                o = this.boostMap[n.type].property;
            t[o] = n.value, this.boostMap[n.type].update.call(this, n.value)
        }
    }, n.prototype._setSpecificBehaviors = function(e) {
        if (this.abilityDiv.toggleClassName("withoutAbilities", 0 === e.length), e.length)
            for (var t = window.gui.databases.MountBehaviors, i = 0; i < this.abilities.length; i++) {
                var n = this.abilities[i],
                    o = e[i];
                o && (n.setText(t[o].nameId), n.tooltipText = t[o].descriptionId), n.toggleDisplay(Boolean(o))
            }
    }, n.prototype._setName = function(e) {
        this._name = this.mountData.name = e, this._name || (this._name = d("ui.common.noName")), this._mountName.setText(this._name);
        var t = d(this.mountData.sex ? "ui.common.animalFemale" : "ui.common.animalMale");
        this._mountIllus.tooltipText = this._name + " (" + t + ")"
    }, n.prototype.getName = function() {
        return this._name
    }, n.prototype._setXpRatio = function(e) {
        this._givenXP = e, this._xpValue.setText(e + "%")
    }, n.prototype._setRideButton = function(e) {
        this._rideButton.toggleClassName("isRiding", Boolean(e))
    }, n.prototype._setLove = function(e) {
        this._loveGauge.setValue(e, this.mountData.loveMax)
    }, n.prototype._setTiredness = function(e) {
        this._tirednessValue.setValue(e, this.mountData.boostMax)
    }, n.prototype._setEnergy = function(e) {
        this._energyGauge.setValue(e, this.mountData.energyMax)
    }, n.prototype._setStamina = function(e) {
        this._staminaGauge.setValue(e, this.mountData.staminaMax)
    }, n.prototype._setMaturity = function(e) {
        this._maturityGauge.setValue(e, this.mountData.maturityForAdult)
    }, n.prototype._setSerenity = function(e) {
        this._serenityGauge.setValue(e)
    }, n.getFertilityState = function(e) {
        var t = e.reproductionCount,
            i = e.reproductionCountMax,
            n = t >= 0 && t < i,
            o = t < 0,
            a = {
                canReproduce: n,
                isNeutered: o,
                isFecondationReady: e.isFecondationReady,
                fecondationTime: e.fecondationTime
            };
        return n && (a.reproCount = t, a.reproMax = i), e.isNewborn && (a.isNewborn = !0), a
    }, n.prototype._setFertilityState = function() {
        var e = n.getFertilityState(this.mountData),
            t = Boolean(e.canReproduce);
        t && this._fertilityValue.setText(e.reproCount + "/" + e.reproMax), this._fertilityDiv.toggleDisplay(t), this._cutButton.setEnable(t && Boolean(this._getActionOnMount("sterilize"))), this.fertileIcon.setFertileIcon(e, !0)
    }, n.prototype._setFecondationState = function() {
        var e = this.mountData.isFecondationReady,
            t = this.mountData.fecondationTime,
            i = !e && t > -1;
        this._fecondationState.toggleDisplay(i), i && this._fecondationState.setText(d("ui.mount.pregnantSince", t))
    }, n.prototype._setExperience = function(e, t, i) {
        i === -1 && (i = e);
        var n = (e - t) / (i - t);
        this._experienceValue.setValue(e, i, n)
    }, n.prototype._resize = function() {
        return this.isVisible() && this.rootElement.clientWidth ? (this.mustResize = !1, void this._serenityGauge.resize()) : this.once("show", this._resize.bind(this))
    }, n.prototype.setMount = function(e, t) {
        var i = this,
            n = window.gui.playerData;
        e = e || {}, t = t || {};
        var o = this.inBreeding = "breeding" === t.context;
        this.hasDomAndListeners || this._setupDomAndListeners(), this.shouldResetTab && (this.shouldResetTab = !1, this._tabs.openTab(o ? y : z)), this.mustResize && this._resize(), this.mountData = e;
        var r = e.mountLocation;
        r || console.error("Mount", e.id, "does not have a location."), this._givenXpDiv.toggleDisplay("equip" === r), this._setXpRatio(e.xpRatio), this.domesticIcon.setEnabled(!e.isWild);
        var c = "equipped" === t.context;
        this._rideButtonDiv.toggleDisplay(c), this.mountableIcon.toggleDisplay(!c), c ? (this._rideButton.setEnable(e.isRideable), this._setRideButton(n.isRiding)) : this.mountableIcon.setEnabled(e.isRideable), this._setName(e.name), this._setSpecificBehaviors(e.behaviors || []), this._releaseButton.setEnable(Boolean(this._getActionOnMount("free"))), this._renameButton.setEnable("equip" === e.mountLocation || "shed" === e.mountLocation), this._feedButton.setEnable(e.maturity === e.maturityForAdult && ("shed" === this.mountData.mountLocation || "equip" === this.mountData.mountLocation) && "fight" !== window.foreground.tapOptions.mode), this._inventoryButton.setEnable(e.maxPods > 0 && "equip" === e.mountLocation && !o), this._level.setText(d("ui.common.short.level") + " " + e.level), this._setExperience(e.experience, e.experienceForLevel, e.experienceForNextLevel), this._setFecondationState(), this._setFertilityState(), this._setSex(e.sex), this._setEnergy(e.energy), this._setLove(e.love), this._setTiredness(e.boostLimiter), this._setStamina(e.stamina), this._setMaturity(e.maturity), this._setSerenity(e.serenity), this._mountType.setModel(e.model), a.preloadImage("gfx/mounts/" + e.model + ".png", function(e) {
            i._mountIllus.setStyle("backgroundImage", e)
        });
        for (var l = 0, u = e.effectList.length; l < u; l += 1) {
            var p = e.effectList[l];
            p.effectCaller || (p.effectCaller = "mount " + e.model + " from location " + e.mountLocation)
        }
        s.createEffectInstances(e.effectList, function(e, t) {
            var n = "<ul>",
                o = "<li>" + d("ui.common.lowerNone", 0) + "</li>";
            if (e) return n += o + "</ul>", i._effectsContent.setHtml(o), console.error(e);
            if (t.length <= 0) return n += o + "</ul>", i._effectsContent.setHtml(o);
            for (var a = 0, r = t.length; a < r; a += 1) {
                var s = t[a];
                n += "<li>" + s.description + "</li>"
            }
            n += "</ul>", i._effectsContent.setHtml(n)
        })
    }
}
