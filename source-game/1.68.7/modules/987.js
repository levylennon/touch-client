function(e, t, i) {
    function n(e, t, i, n) {
        this.id = e, this.name = t, this["do"] = i, this.args = n
    }

    function o() {
        l.call(this), this.activeFilters = {}, this.singleColorMap = {}, this.filterMap = {};
        for (var e = this._getFilterDefinitions(), t = 0; t < e.length; t++) {
            var i = e[t];
            this.filterMap[i.id] = i
        }
        this.isReady = !1;
        var n = this;
        this._setupTypes(function() {
            n.isReady = !0, n.emit("mountFiltersReady")
        })
    }

    function a(e, t) {
        var i = this.behaviors.indexOf(e) !== -1;
        return i && t || !i && !t
    }

    function r(e) {
        var t = v[this.model] || this.model,
            i = A[t];
        if (i.singleColorName) return t === e;
        var n = -1;
        return y.hasOwnProperty(t) ? n = y[t].indexOf(e) : console.error(new Error("composedColorMap[mountColorId] is undefined for mountColorId: " + t)), n !== -1
    }

    function s() {
        var e = A[this.model];
        return h.isSingleColor(e.colors)
    }

    function c(e) {
        var t = d("tablet.mount.dragoturkey")
            .toLowerCase(),
            i = e.toLowerCase()
            .replace(t, "")
            .trim(),
            n = i.length - 1;
        return "-" === i[n] && (i = i.substr(0, n - 1)), i[0].toUpperCase() + i.substr(1)
    }
    var l = i(59)
        .EventEmitter,
        d = i(17)
        .getText,
        u = i(56)
        .inherits,
        p = i(32)
        .isEmptyObject,
        h = i(488),
        f = i(130),
        b = 7500,
        m = h.ARMOURED_MOUNT_ID,
        M = h.FEATHERY_MOUNT_ID,
        g = h.ROYAL_MOUNT_ID,
        _ = h.BARBARIAN_MOUNT_ID,
        A = {},
        O = [3, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23, m, M, g, _],
        v = {
            1: 20,
            6: 10,
            74: 18
        },
        y = {
            9: [3, 16],
            11: [16, 10],
            12: [3, 10],
            33: [20, 18],
            34: [20, 3],
            35: [20, 21],
            36: [20, 17],
            37: [20, 16],
            38: [20, 10],
            39: [20, 15],
            40: [20, 22],
            41: [20, 19],
            42: [18, 3],
            43: [18, 21],
            44: [18, 17],
            45: [18, 16],
            46: [18, 10],
            47: [18, 15],
            48: [18, 22],
            49: [18, 19],
            50: [3, 21],
            51: [3, 17],
            52: [3, 15],
            53: [3, 22],
            54: [3, 19],
            55: [21, 17],
            56: [21, 16],
            57: [21, 10],
            58: [21, 15],
            59: [21, 22],
            60: [21, 19],
            61: [17, 16],
            62: [17, 10],
            63: [17, 15],
            64: [17, 22],
            65: [17, 19],
            66: [16, 15],
            67: [16, 22],
            68: [16, 19],
            69: [15, 10],
            70: [22, 10],
            71: [19, 10],
            72: [15, 22],
            73: [15, 19],
            76: [22, 19],
            77: [23, 20],
            78: [23, 18],
            79: [23, 3],
            80: [23, 21],
            82: [23, 17],
            83: [23, 16],
            84: [23, 10],
            85: [23, 15],
            86: [23, 22],
            87: [23, 19]
        };
    u(o, l), e.exports = o, o.MountFilter = n, o.prototype._getFilterDefinitions = function() {
        return [{
            id: "name",
            "do": function(e) {
                return this.name.toLowerCase()
                    .indexOf(e) > -1
            }
        }, {
            id: "sex",
            name: d("ui.common.animalFemale"),
            antiName: d("ui.common.animalMale"),
            "do": function(e) {
                return this.sex === e
            }
        }, {
            id: "baby",
            name: d("tablet.mount.filterNewborn"),
            "do": function(e) {
                var t = Boolean(this.isNewborn);
                return t === e
            }
        }, {
            id: "fruitful",
            name: d("tablet.mount.filterFertile"),
            "do": function(e) {
                var t = Boolean(this.isFecondationReady),
                    i = this.reproductionCount < 0 || this.reproductionCount >= this.reproductionCountMax;
                return t && e || !t && !i && !e
            }
        }, {
            id: "pregnant",
            name: d("tablet.mount.filterPregnant"),
            "do": function(e) {
                return this.fecondationTime > 0 === e && void 0 !== this.fecondationTime
            }
        }, {
            id: "mountable",
            name: d("tablet.mount.filterMountable"),
            "do": function(e) {
                return this.isRideable === e
            }
        }, {
            id: "sterilized",
            name: d("tablet.mount.filterSterilized"),
            "do": function(e) {
                var t = this.reproductionCount < 0 || this.reproductionCount >= this.reproductionCountMax;
                return t === e
            }
        }, {
            id: "love",
            name: d("tablet.mount.filterNeedLove"),
            "do": function(e) {
                return this.love >= b === e
            }
        }, {
            id: "stamina",
            name: d("tablet.mount.filterNeedStamina"),
            "do": function(e) {
                return this.stamina >= b === e
            }
        }, {
            id: "maturity",
            name: d("tablet.mount.filterNeedMaturity"),
            "do": function(e) {
                return this.maturity >= this.maturityForAdult === e
            }
        }, {
            id: "energy",
            name: d("tablet.mount.filterNeedEnergy"),
            "do": function(e) {
                return this.energy >= this.energyMax === e
            }
        }, {
            id: "serenity",
            name: d("ui.common.serenity"),
            "do": function(e, t) {
                return this.serenity >= e && this.serenity <= t
            }
        }, {
            id: "fatigue",
            name: d("ui.common.tire"),
            "do": function(e, t) {
                var i = this.boostLimiter / this.boostMax * 100;
                return i >= e && i <= t
            }
        }]
    }, o.prototype.isEmpty = function() {
        return p(this.activeFilters)
    }, o.prototype.isMatch = function(e) {
        var t = this.activeFilters;
        for (var i in t) {
            var n = t[i];
            if (!n["do"].apply(e, n.args)) return !1
        }
        return !0
    }, o.prototype.setFilter = function(e, t) {
        var i = this.filterMap[e];
        return i.args = Array.isArray(t) ? t : [t], this.activeFilters[e] = i, i
    }, o.prototype.removeFilter = function(e) {
        delete this.activeFilters[e]
    }, o.prototype.addBehaviorFilter = function(e, t, i) {
        var o = window.gui.databases.MountBehaviors[t];
        this.activeFilters[e] = new n("behavior" + t, o.nameId, a, [t, i])
    }, o.prototype.addColorFilter = function(e, t) {
        var i = this.singleColorMap[t];
        this.activeFilters[e] = new n("color" + t, i.singleColorName, r, [t])
    }, o.prototype.addPureColorFilter = function(e) {
        this.activeFilters[e] = new n("colorPure", "", s)
    }, o.prototype.getSingleColorMap = function() {
        return this.singleColorMap
    }, o.prototype.isRealColor = function(e) {
        return e !== m && e !== M
    }, o.prototype._setupTypes = function(e) {
        var t = this.singleColorMap;
        f.getAllDataTable("Mounts", function(i, n) {
            if (i) return console.error(i);
            for (var o = 0; o < n.length; o++) {
                var a = n[o];
                A[a.id] = a, a.colors = h.parseColorsFromLook(a.id, a.look), O.indexOf(a.id) !== -1 && (a.singleColorName = c(a.nameId), t[a.id] = a)
            }
            return e && e()
        })
    }
}
