function(e, t, i) {
    function n() {
        return h
    }

    function o() {
        a = window.gui, s.call(this), this.lockStatus = {};
        for (var e in m) this.lockStatus[e] = {
            base: null,
            customLockedReasons: null,
            windowId: m[e].windowId,
            tabId: m[e].tabId
        };
        this._setupEvents(), this.updateAll()
    }
    var a, r = i(56)
        .inherits,
        s = i(36)
        .EventEmitter,
        c = i(17)
        .getText,
        l = i(105),
        d = i(509),
        u = i(13),
        p = !0,
        h = !1,
        f = 1256,
        b = 4644,
        m = {
            carac: {
                windowId: "characteristics",
                menuButtonId: "Carac",
                evaluateCurrent: n
            },
            spells: {
                windowId: "grimoire",
                tabId: "spells",
                menuButtonId: "Spell",
                evaluateCurrent: n
            },
            inventory: {
                windowId: "equipment",
                menuButtonId: "Bag",
                evaluateCurrent: n
            },
            bidHouse: {
                windowId: "bidHouseShop",
                menuButtonId: "BidHouse",
                evaluateCurrent: n
            },
            worldMap: {
                windowId: "worldMap",
                menuButtonId: "Map",
                evaluateCurrent: n
            },
            friends: {
                windowId: "social",
                tabId: "friends",
                menuButtonId: "Friend",
                evaluateCurrent: n
            },
            quests: {
                windowId: "grimoire",
                tabId: "quests",
                menuButtonId: "Book",
                evaluateCurrent: n
            },
            guild: {
                windowId: "social",
                tabId: "guild",
                menuButtonId: "Guild",
                evaluateCurrent: function() {
                    return a.playerData.guild.hasGuild() ? h : p
                },
                lockedReasonDescription: "tablet.guild.uiLocker.default"
            },
            koliseum: {
                windowId: "arena",
                menuButtonId: "Conquest",
                evaluateCurrent: function() {
                    return window.gui.playerData.characterBaseInformations.level >= 50 ? h : p
                }
            },
            market: {
                windowId: "market",
                tabId: "shop",
                menuButtonId: "Goultine",
                evaluateCurrent: n
            },
            job: {
                windowId: "grimoire",
                tabId: "jobs",
                menuButtonId: "Job",
                evaluateCurrent: function() {
                    return a.playerData.hasJob() ? h : p
                },
                lockedReasonDescription: "tablet.job.uiLocker.default"
            },
            alliance: {
                windowId: "social",
                tabId: "alliance",
                menuButtonId: "Alliance",
                evaluateCurrent: function() {
                    return a.playerData.alliance.hasAlliance() ? h : p
                },
                lockedReasonDescription: "tablet.alliance.uiLocker.default"
            },
            mount: {
                windowId: "mount",
                menuButtonId: "Mount",
                evaluateCurrent: function() {
                    return a.playerData.equippedMount ? h : p
                },
                lockedReasonDescription: "tablet.mount.uiLocker.default"
            },
            directory: {
                windowId: "social",
                tabId: "directory",
                menuButtonId: "Directory",
                evaluateCurrent: function() {
                    return window.gui.playerData.achievements.hasFinished(f) ? h : p
                }
            },
            alignment: {
                windowId: "grimoire",
                tabId: "alignment",
                menuButtonId: "Alignment",
                evaluateCurrent: function() {
                    return window.gui.playerData.quests.hasFinished(b) ? h : p
                }
            },
            bestiary: {
                windowId: "grimoire",
                tabId: "bestiary",
                menuButtonId: "Bestiary",
                evaluateCurrent: n
            },
            ornaments: {
                windowId: "grimoire",
                tabId: "ornaments",
                menuButtonId: "Title",
                evaluateCurrent: n
            },
            achievements: {
                windowId: "grimoire",
                tabId: "achievements",
                menuButtonId: "Achievement",
                evaluateCurrent: n
            },
            dailyQuest: {
                windowId: "dailyQuest",
                tabId: "dailyQuest",
                menuButtonId: "DailyQuest",
                evaluateCurrent: n
            },
            spouse: {
                windowId: "social",
                tabId: "spouse",
                menuButtonId: "Spouse",
                evaluateCurrent: function() {
                    return a.playerData.socialData.spouse ? h : p
                },
                lockedReasonDescription: "tablet.spouse.uiLocker.default"
            },
            TOA: {
                windowId: "TOA",
                tabId: "general",
                menuButtonId: "TOA",
                evaluateCurrent: n
            },
            Help: {
                windowId: "help",
                menuButtonId: "Help",
                evaluateCurrent: n
            },
            Zaap: {
                menuButtonId: "Zaap",
                evaluateCurrent: function() {
                    var e = window.gui.playerData,
                        t = e.isSubscriberAtMinLevel(d.ELITE),
                        i = e.achievements.hasFinished(u.ASTRUB_EXPLORED_ACHIEVEMENT);
                    return t && i ? h : p
                },
                lockedReasonDescription: "ui.zaap.locked"
            },
            GroupSeeker: {
                windowId: "groupSeeker",
                menuButtonId: "GroupSeeker",
                evaluateCurrent: function() {
                    return window.gui.playerData.achievements.hasFinished(u.ASTRUB_EXPLORED_ACHIEVEMENT) ? h : p
                }
            }
        };
    r(o, s), e.exports = o, o.prototype._getCustomReasonIndex = function(e, t) {
        if (!this.lockStatus[e] || !this.lockStatus[e].customLockedReasons) return -1;
        for (var i = 0; i < this.lockStatus[e].customLockedReasons.length; i++)
            if (this.lockStatus[e].customLockedReasons[i].id === t) return i;
        return -1
    }, o.prototype.updateAll = function() {
        for (var e in m) this.updateFeatureId(e)
    }, o.prototype.updateFeatureId = function(e) {
        var t = m[e],
            i = this.lockStatus[e].base,
            n = t.evaluateCurrent();
        n !== i && this._setStatus(e, n)
    }, o.prototype.isFeatureLockedByWindow = function(e, t) {
        var i = this;
        for (var n in this.lockStatus)
            if (i.lockStatus.hasOwnProperty(n)) {
                var o = i.lockStatus[n];
                if (o.windowId === e && (!t || t && o.tabId === t)) return i.isFeatureLocked(n)
            } return !1
    }, o.prototype.isFeatureLocked = function(e) {
        return void 0 === this.lockStatus[e] ? (console.error(new Error("UiLocker.isFeatureLocked: featureId `" + e + "` unknown")), !0) : Boolean(this.lockStatus[e].base === p || this.lockStatus[e].customLockedReasons)
    }, o.prototype.isFeatureAvailable = function(e) {
        return !this.isFeatureLocked(e)
    }, o.prototype._getFeatureIdfromMenuButtonId = function(e) {
        for (var t in m) {
            var i = m[t];
            if (i.menuButtonId === e) return t
        }
        return console.error(new Error("UiLocker.isMenuButtonAvailable: no feature is matching the menuButtonId " + e)), null
    }, o.prototype.isMenuButtonAvailable = function(e) {
        var t = this._getFeatureIdfromMenuButtonId(e);
        return !!t && this.isFeatureAvailable(t)
    }, o.prototype.getMenuButtonLockedReasons = function(e) {
        var t = [],
            i = this._getFeatureIdfromMenuButtonId(e);
        if (i) {
            if (this.lockStatus[i].base && m[i].lockedReasonDescription && !this.lockStatus[i].customLockedReasons)
                if ("Spouse" === e) {
                    var n = window.gui.playerData.characterBaseInformations.sex;
                    t.push(c(m[i].lockedReasonDescription, n))
                } else t.push(c(m[i].lockedReasonDescription));
            if (this.lockStatus[i].customLockedReasons)
                for (var o = this.lockStatus[i].customLockedReasons, a = 0; a < o.length; a++) t.push(o[a].description)
        } else console.error(new Error("UiLocker.getMenuButtonLockedReason: no feature is matching the menuButtonId" + e));
        return 0 === t.length && t.push(c("tablet.uiLocker.default")), t
    }, o.prototype.isTabAvailable = function(e, t) {
        for (var i in m) {
            var n = m[i];
            if (n.windowId === e && n.tabId === t) return this.isFeatureAvailable(i)
        }
        return console.error(new Error("UiLocker.isTabAvailable: no feature matching window " + e + " w/ tabId " + t)), !1
    }, o.prototype._setStatus = function(e, t, i, n) {
        var o = m[e];
        if (!o) return console.error(new Error("UiLocker._setStatus: featureId " + e + " unknown"));
        var a = this.isFeatureLocked(e),
            r = this.lockStatus[e],
            s = r.base;
        if (i) {
            var c = -1;
            if (r.customLockedReasons && (c = this._getCustomReasonIndex(e, i)), t) {
                if (c === -1) {
                    r.customLockedReasons || (r.customLockedReasons = []);
                    var l = {
                        id: i,
                        description: n
                    };
                    r.customLockedReasons.push(l)
                }
            } else c !== -1 && (r.customLockedReasons.splice(c, 1), 0 === r.customLockedReasons.length && (r.customLockedReasons = null)), r.base = o.evaluateCurrent()
        } else r.base = t;
        var d = this.isFeatureLocked(e),
            u = r.base;
        d === a && u === s || this.emit("updated", {
            featureId: e,
            locked: d,
            baseLocked: u,
            menuButtonId: o.menuButtonId,
            windowId: o.windowId,
            tabId: o.tabId
        })
    }, o.prototype._setupEvents = function() {
        var e = this;
        a.playerData.jobs.on("jobListUpdated", function() {
            e.updateFeatureId("job")
        }), a.playerData.alliance.on("allianceUpdated", function() {
            e.updateFeatureId("alliance")
        }), a.playerData.alliance.on("allianceJoined", function() {
            e.updateFeatureId("alliance")
        }), a.playerData.alliance.on("allianceLeft", function() {
            e.updateFeatureId("alliance")
        }), a.playerData.guild.on("GuildGeneralInformationUpdate", function() {
            e.updateFeatureId("guild")
        }), a.playerData.guild.on("guildLeft", function() {
            e.updateFeatureId("guild")
        }), a.playerData.on("setMount", function() {
            e.updateFeatureId("mount")
        }), a.playerData.on("unsetMount", function() {
            e.updateFeatureId("mount")
        }), l.on("MapComplementaryInformationsDataMessage", function() {
            e.updateFeatureId("koliseum")
        }), l.on("MapComplementaryInformationsDataInHouseMessage", function() {
            e.updateFeatureId("koliseum")
        }), a.playerData.on("characterInfosUpdated", function() {
            e.updateFeatureId("koliseum")
        }), a.playerData.socialData.on("spouseUpdate", function() {
            e.updateFeatureId("spouse")
        }), a.playerData.socialData.on("spouseLeft", function() {
            e.updateFeatureId("spouse")
        }), a.playerData.achievements.on("achievementListUpdated", function() {
            e.updateFeatureId("directory"), e.updateFeatureId("alignment"), e.updateFeatureId("Zaap"), e.updateFeatureId("GroupSeeker")
        }), a.playerData.achievements.on("achievementFinished", function() {
            e.updateFeatureId("directory"), e.updateFeatureId("Zaap"), e.updateFeatureId("GroupSeeker")
        }), l.on("SubscriptionStatusMessage", function() {
            e.updateFeatureId("Zaap")
        }), a.playerData.quests.on("listUpdated", function() {
            e.updateFeatureId("alignment")
        }), a.playerData.quests.on("questFinished", function() {
            e.updateFeatureId("alignment")
        })
    }, o.prototype.lockFeature = function(e, t, i) {
        return t && i ? void this._setStatus(e, !0, t, i) : console.error(new Error("UiLocker.lockFeature: featureId: " + e + " reasonKey: " + t + " reasonDescription: " + i + " - a reasonKey and a reasonDescription are required to lock a feature"))
    }, o.prototype.unlockFeature = function(e, t) {
        return t ? void this._setStatus(e, !1, t) : console.error(new Error("UiLocker.unlockFeature: a reasonKey is required to unlock a feature"))
    }, o.prototype.lockAllFeatures = function(e, t) {
        for (var i in this.lockStatus) this.lockStatus.hasOwnProperty(i) && this.lockFeature(i, e, t)
    }, o.prototype.lockAllFeaturesExcept = function(e, t, i) {
        for (var n in this.lockStatus) this.lockStatus.hasOwnProperty(n) && (e.indexOf(n) < 0 ? this.lockFeature(n, t, i) : this.unlockFeature(n, t))
    }, o.prototype.unlockAllFeatures = function(e) {
        if (!e) return console.error(new Error("UiLocker.unlockAllFeatures: a reasonKey is required to unlock features"));
        for (var t in this.lockStatus) this.lockStatus.hasOwnProperty(t) && this.unlockFeature(t, e)
    }
}
