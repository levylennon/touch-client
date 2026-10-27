function(e, t, i) {
    function n(e) {
        v.call(this, "div", {
            className: "MountFilterBox"
        }), this.isReady = !1, this.buttonBar = null, this.filterButtons = [], this.batchUpdateLevel = 0, this.mountFilters = e, e.isReady ? this._createDom() : e.once("mountFiltersReady", this._createDom.bind(this))
    }

    function o(e, t) {
        e.createChild("div", {
            className: "barTitle",
            text: t.toUpperCase()
        })
    }

    function a() {
        var e = this.mountFilterBox,
            t = !e.serenityFlagMap[this.zoneName];
        e.serenityFlagMap[this.zoneName] = t, e.numSerenityZonesOn += t ? 1 : -1, e._updateSerenityFilter()
    }

    function r(e) {
        var t = e && e.id,
            i = e && e.caption;
        this.mountFilterBox._setColorButtonValue(this, t, i), this.mountFilterBox._updateFilter()
    }

    function s(e, t) {
        t ? (this.selectState(I), window.gui.openContextualMenuAround("generic", this, {
            actions: this.menuActions
        })) : r.call(this, null)
    }

    function c(e) {
        var t = e && e.id,
            i = e && e.caption;
        if (t !== this.abilityId) {
            var n = this.filterName,
                o = this.mountFilterBox;
            this.abilityId && (o._delFilterButton(n), o.mountFilters.removeFilter(n)), this.abilityId = t, t ? (o.mountFilters.addBehaviorFilter(n, t, !0), o._addFilterButton(n, i), this.setLabel(i), this.selectState(S)) : (this.setLabel(this.emptyLabel), this.selectState(I)), o._updateFilter()
        }
    }

    function l(e, t) {
        t ? (this.selectState(I), window.gui.openContextualMenuAround("generic", this, {
            actions: this.menuActions
        })) : c.call(this, null)
    }

    function d() {
        this.mountFilterBox[this.filterName].reset()
    }
    i(984);
    var u, p = i(86),
        h = i(462),
        f = i(941),
        b = i(17)
        .getText,
        m = i(56)
        .inherits,
        M = i(112),
        g = i(943),
        _ = i(492),
        A = i(63),
        O = i(985),
        v = i(72),
        y = [
            ["maleBtn", "femaleBtn"],
            ["newbornBtn", "rideableBtn"],
            ["fertileBtn", "sterilizedBtn"],
            ["pregnantBtn", "fertileBtn"],
            ["pregnantBtn", "sterilizedBtn"]
        ],
        z = {
            maleBtn: {
                filterId: "sex",
                isReversed: !0,
                label: "ui.common.animalMale",
                addIcon: !0
            },
            femaleBtn: {
                filterId: "sex",
                label: "ui.common.animalFemale",
                addIcon: !0
            },
            newbornBtn: {
                filterId: "baby",
                isReversible: !0,
                label: "tablet.mount.filterNewborn"
            },
            pregnantBtn: {
                filterId: "pregnant",
                isReversible: !0,
                label: "tablet.mount.filterPregnant"
            },
            fertileBtn: {
                filterId: "fruitful",
                isReversible: !0,
                label: "tablet.mount.filterFertile"
            },
            sterilizedBtn: {
                filterId: "sterilized",
                isReversible: !0,
                label: "tablet.mount.filterSterilized"
            },
            rideableBtn: {
                filterId: "mountable",
                isReversible: !0,
                label: "tablet.mount.filterMountable"
            },
            loveBtn: {
                filterId: "love",
                isReversible: !0,
                label: "ui.common.love",
                addIcon: !0
            },
            staminaBtn: {
                filterId: "stamina",
                isReversible: !0,
                label: "ui.common.stamina",
                addIcon: !0
            },
            maturityBtn: {
                filterId: "maturity",
                isReversible: !0,
                label: "ui.common.maturity",
                addIcon: !0
            },
            energyBtn: {
                filterId: "energy",
                isReversible: !0,
                label: "ui.common.energy",
                addIcon: !0
            }
        },
        w = [
            ["tired0Btn", "tiredInf50Btn"],
            ["tired0Btn", "tiredSup50Btn"],
            ["tired0Btn", "tiredInf100Btn"],
            ["tired0Btn", "tired100Btn"],
            ["tiredInf50Btn", "tiredSup50Btn"],
            ["tiredInf50Btn", "tiredInf100Btn"],
            ["tiredInf50Btn", "tired100Btn"],
            ["tiredSup50Btn", "tired100Btn"],
            ["tiredInf100Btn", "tired100Btn"]
        ],
        T = {
            tired0Btn: {
                label: "= 0%",
                equal: 0
            },
            tiredInf50Btn: {
                label: "< 50%",
                max: 49.99
            },
            tiredSup50Btn: {
                label: ">= 50%",
                min: 50
            },
            tiredInf100Btn: {
                label: "< 100%",
                max: 99.99
            },
            tired100Btn: {
                label: "= 100%",
                min: 100
            }
        },
        C = -1,
        I = 0,
        S = 1,
        E = 2,
        L = [{
            value: null
        }, {
            value: !0,
            className: "active"
        }, {
            value: !1,
            className: "reversed"
        }],
        N = [{
            value: null
        }, {
            value: !1,
            className: "active"
        }];
    m(n, v), e.exports = n, n.prototype.getFilters = function() {
        return this.mountFilters
    }, n.prototype.setButtonBar = function(e) {
        this.buttonBar = e
    }, n.prototype.resetFilters = function() {
        this.isReady && this._resetFilters(!0)
    }, n.prototype._resetFilters = function(e) {
        this._enterBatchUpdate(), this._clearSearchBox();
        for (var t in z) this[t].reset();
        for (t in T) this[t].reset();
        this._resetSerenityFilter(), this.colorA.reset(), this.colorB.reset(), this.abilityA.reset(), this.abilityB.reset(), this.minFatigue = 0, this.maxFatigue = 100, this._leaveBatchUpdate(e)
    }, n.prototype._enterBatchUpdate = function() {
        this.batchUpdateLevel++
    }, n.prototype._leaveBatchUpdate = function(e) {
        this.batchUpdateLevel--, 0 !== this.batchUpdateLevel || e || this._updateFilter()
    }, n.prototype._updateFilter = function() {
        this.batchUpdateLevel > 0 || (this._updateButtonBar(), this.emit("activeFiltersUpdated", this.mountFilters))
    }, n.prototype._createDom = function() {
        u = b("tablet.mount.pureColor"), this._setupNameBar(), this._setupToggles(), this._setupSerenityBar(), this._setupFatigueBar(), this._setupColorBar(), this._setupAbilityBar(), this.appendChild(new p({
            text: b("ui.common.reset"),
            className: ["button", "resetButton"]
        }, this._resetFilters.bind(this, !1))), this._resetFilters(!0), this.isReady = !0
    }, n.prototype._setupNameBar = function() {
        var e = this.createChild("div", {
                className: "nameBar"
            }),
            t = this.searchBox = e.appendChild(new g({
                isLiveSearch: !0,
                maxLength: M.MAX_RIDE_NAME_LEN
            }));
        t.setPlaceholder(b("ui.common.name")), t.on("search", this._searchBoxChanged.bind(this)), t.reset = this._clearSearchBox.bind(this)
    }, n.prototype._searchBoxChanged = function(e) {
        this._delFilterButton("searchBox"), e ? (this.mountFilters.setFilter("name", e.toLowerCase()), this._addFilterButton("searchBox", '"' + e + '"')) : this.mountFilters.removeFilter("name"), this._updateFilter()
    }, n.prototype._clearSearchBox = function() {
        this.searchBox.setValue(""), this._searchBoxChanged("")
    }, n.prototype._deactivateOppositeToggles = function(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            if (!(n.indexOf(e) < 0))
                for (var o = 0; o < n.length; o++) n[o] !== e && this[n[o]].reset()
        }
    }, n.prototype._toggleBtnHandler = function(e, t, i) {
        this._enterBatchUpdate();
        var n = z[e],
            o = n.filterId;
        switch (i) {
            case I:
                this._delFilterButton(e), this.mountFilters.removeFilter(o);
                break;
            case S:
                this._deactivateOppositeToggles(e, y), this._addFilterButton(e, b(n.label)), this.mountFilters.setFilter(o, t);
                break;
            case E:
                this._delFilterButton(e), this._addFilterButton(e, b(n.label), "reversed"), this.mountFilters.setFilter(o, t);
                break;
            default:
                console.error("invalid valueIndex: " + i)
        }
        this._leaveBatchUpdate()
    }, n.prototype._newToggleButton = function(e, t, i) {
        var n, o = z[t],
            a = b(o.label),
            r = o.addIcon;
        o.isReversible ? n = L : o.isReversed && (n = N), this[t] = e.appendChild(new O(t, i, {
            text: a,
            addIcon: r,
            states: n
        }))
    }, n.prototype._setupToggles = function() {
        var e = this._toggleBtnHandler.bind(this),
            t = this.createChild("div", {
                className: "sexBar"
            });
        this._newToggleButton(t, "maleBtn", e), this._newToggleButton(t, "femaleBtn", e), t = this.createChild("div", {
            className: "sexBar"
        }), this._newToggleButton(t, "newbornBtn", e), this._newToggleButton(t, "rideableBtn", e), t = this.createChild("div", {
            className: "fertileBar"
        }), this._newToggleButton(t, "pregnantBtn", e), this._newToggleButton(t, "fertileBtn", e), this._newToggleButton(t, "sterilizedBtn", e);
        var i = this.createChild("div", {
            className: "hasOrNeedsBar"
        });
        t = i.createChild("div", {
            className: "hasOrNeedsDiv"
        }), this._newToggleButton(t, "staminaBtn", e), this._newToggleButton(t, "loveBtn", e), t = i.createChild("div", {
            className: "hasOrNeedsDiv"
        }), this._newToggleButton(t, "maturityBtn", e), this._newToggleButton(t, "energyBtn", e)
    }, n.prototype._updateSerenityFilter = function() {
        for (var e in this.serenityFlagMap) this.serenity[e].toggleClassName("active", this.serenityFlagMap[e]);
        this.serenity.toggleClassName("allOff", 0 === this.numSerenityZonesOn);
        var t = _.SERENITY_MIN,
            i = _.SERENITY_MAX,
            n = this.numSerenityZonesOn,
            o = this.serenityFlagMap.stamina,
            a = this.serenityFlagMap.love,
            r = this.serenityFlagMap.maturity;
        0 === n || 3 === n || 2 === n && !r ? this.mountFilters.removeFilter("serenity") : (1 === n && o ? i = 0 : (1 === n && r || 2 === n && !a) && (i = _.GOOD_SERENITY_MAX), 1 === n && a ? t = 0 : (1 === n && r || 2 === n && !o) && (t = _.GOOD_SERENITY_MIN), this.mountFilters.setFilter("serenity", [t, i])), this._delFilterButton("serenity"), n && this._addFilterButton("serenity", b("ui.common.serenity")), this._updateFilter()
    }, n.prototype._resetSerenityFilter = function() {
        this.serenityFlagMap = {
            stamina: !1,
            maturity: !1,
            love: !1
        }, this.numSerenityZonesOn = 0, this._updateSerenityFilter()
    }, n.prototype._addSerenityButton = function(e) {
        var t = new v("div", {
            className: e
        });
        return A(t), t.on("tap", a), t.mountFilterBox = this, t.zoneName = e, this.serenity[e] = t, t
    }, n.prototype._setupSerenityBar = function() {
        var e = this.createChild("div", {
            className: "serenityBar"
        });
        this.serenity = e, e.reset = this._resetSerenityFilter.bind(this), e.createChild("div", {
            className: ["bigIcon", "bigIcon_mad"]
        });
        var t = e.createChild("div", {
            className: "bigButton"
        });
        e.createChild("div", {
            className: ["bigIcon", "bigIcon_happy"]
        }), t.appendChild(this._addSerenityButton("stamina")), t.appendChild(this._addSerenityButton("maturity")), t.appendChild(this._addSerenityButton("love")), t.createChild("div", {
            className: "bigButtonShape"
        })
    }, n.prototype._setColorButtonValue = function(e, t, i) {
        var n = e.filterName,
            o = this.mountFilters;
        if (e.colorId && (this._delFilterButton(n), o.removeFilter(n)), e.colorId = t, t) {
            var a = null;
            t !== C ? (a = o.getSingleColorMap()[t].colors[0], o.addColorFilter(n, t)) : (i = u, o.addPureColorFilter(n)), this._addFilterButton(n, i), e.colorTile.setStyle("backgroundColor", a), e.setLabel(i), e.setIcon(t !== C ? e.colorTile : null), e.selectState(S);
            var r = e === this.colorB ? this.colorA : this.colorB;
            t === r.colorId && o.isRealColor(t) && this._setColorButtonValue(r, C, u)
        } else e.setLabel(e.emptyLabel), e.setIcon(null), e.selectState(I)
    }, n.prototype._newColorList = function(e, t, i) {
        var n = b("tablet.common.color") + " " + i,
            o = e.appendChild(new O(t, s, {
                text: n
            }));
        o.addClassNames(t), o.colorTile = new v("div", {
            className: "colorTile"
        }), o.emptyLabel = n, o.mountFilterBox = this, o.filterName = t;
        var a = this.mountFilters.getSingleColorMap(),
            c = r.bind(o),
            l = o.menuActions = [];
        for (var d in a) l.push({
            id: ~~d,
            caption: a[d].singleColorName,
            cb: c
        });
        return h.sortMenuActions(l), l.unshift({
            id: C,
            caption: "(" + u + ")",
            cb: c
        }), o
    }, n.prototype._setupColorBar = function() {
        var e = this.createChild("div", {
                className: "colorBar"
            }),
            t = e.createChild("div", {
                className: "colorDiv"
            });
        this.colorA = this._newColorList(t, "colorA", 1), this.colorB = this._newColorList(t, "colorB", 2)
    }, n.prototype._newAbilityList = function(e, t, i) {
        var n = b("ui.common.capacity", 1) + " " + i,
            o = e.appendChild(new O(t, l, {
                text: n
            }));
        o.addClassNames(t), o.emptyLabel = n, o.mountFilterBox = this, o.filterName = t;
        var a = window.gui.databases.MountBehaviors,
            r = c.bind(o),
            s = o.menuActions = [];
        for (var d in a) s.push({
            id: ~~d,
            caption: a[d].nameId,
            cb: r
        });
        return h.sortMenuActions(s), o
    }, n.prototype._setupAbilityBar = function() {
        var e = this.createChild("div", {
                className: "abilityBar"
            }),
            t = e.createChild("div", {
                className: "abilityDiv"
            });
        this.abilityA = this._newAbilityList(t, "abilityA", 1), this.abilityB = this._newAbilityList(t, "abilityB", 2)
    }, n.prototype._fatigueBtnHandler = function(e, t) {
        this._enterBatchUpdate(), t && this._deactivateOppositeToggles(e, w);
        var i = T[e];
        t ? (this._addFilterButton(e, i.label), void 0 !== i.equal && (this.minFatigue = this.maxFatigue = i.equal), void 0 !== i.min && (this.minFatigue = i.min), void 0 !== i.max && (this.maxFatigue = i.max)) : (this._delFilterButton(e), void 0 === i.min && void 0 === i.equal || (this.minFatigue = 0), void 0 === i.max && void 0 === i.equal || (this.maxFatigue = 100)), 0 !== this.minFatigue || 100 !== this.maxFatigue ? this.mountFilters.setFilter("fatigue", [this.minFatigue, this.maxFatigue]) : this.mountFilters.removeFilter("fatigue"), this._leaveBatchUpdate()
    }, n.prototype._setupFatigueBar = function() {
        var e = this._fatigueBtnHandler.bind(this),
            t = this.createChild("div", {
                className: "fatigueBar"
            });
        o(t, b("ui.common.tire"));
        var i = t.createChild("div", {
            className: "fatigueDiv"
        });
        this.tired0Btn = i.appendChild(new O("tired0Btn", e, {
            text: "0%"
        })), this.tiredInf50Btn = i.appendChild(new O("tiredInf50Btn", e, {
            text: "< 50%"
        })), this.tiredSup50Btn = i.appendChild(new O("tiredSup50Btn", e, {
            text: ">= 50%"
        })), this.tiredInf100Btn = i.appendChild(new O("tiredInf100Btn", e, {
            text: "< 100%"
        })), this.tired100Btn = i.appendChild(new O("tired100Btn", e, {
            text: "100%"
        }))
    }, n.prototype._addFilterButton = function(e, t, i) {
        var n = new f(t, d, e);
        i && n.addClassNames(i), n.mountFilterBox = this, this.filterButtons.push(n)
    }, n.prototype._delFilterButton = function(e) {
        for (var t = 0; t < this.filterButtons.length; t++) {
            var i = this.filterButtons[t];
            if (i.filterName === e) return void this.filterButtons.splice(t, 1)
        }
    }, n.prototype._updateButtonBar = function() {
        if (this.buttonBar) {
            for (var e = new v("div"), t = 0; t < this.filterButtons.length; t++) {
                var i = this.filterButtons[t];
                e.appendChild(i)
            }
            this.buttonBar.clearContent(), this.buttonBar.appendChild(e)
        }
    }
}
