function(e, t, i) {
    function n(e) {
        return "object" != typeof e ? e : Array.isArray(e) ? e.map(n) : Object.keys(e)
            .reduce(function(t, i) {
                var o = e[i],
                    a = o;
                return "object" == typeof o && null !== o && (a = n(o)), t[i.toLowerCase()] = a, t
            }, {})
    }

    function o() {
        this.resetValues()
    }

    function a() {
        this.isPaused = !1, this.wholeSessionRoleplayFPS = new o, this._lastTimeRoleplayFPS = 0, this._lastSecondsRoleplayFPS = new o, this.lastSecondsAverageRoleplayFPS = new o, this.wholeSessionFightFPS = new o, this._lastTimeFightFPS = 0, this._lastSecondsFightFPS = new o, this.lastSecondsAverageFightFPS = new o, this._lastRequestMapChange = 0, this.mapChangeLatency = new o, this.mapLoadingLatency = new o, this._setupListeners()
    }
    var r = i(719),
        s = i(7),
        c = i(91),
        l = i(52),
        d = i(105),
        u = i(30),
        p = i(94),
        h = 3e4,
        f = 3e5,
        b = 12e5;
    o.prototype.setMin = function(e) {
        this.min = this.firstEntry ? e : Math.min(e, this.min), this.firstEntry = !1
    }, o.prototype.setMax = function(e) {
        this.max = Math.max(e, this.max), this.firstEntry = !1
    }, o.prototype.addEntry = function(e) {
        this.setMin(e), this.setMax(e), this.entries += e, this.entriesNumber++
    }, o.prototype.resetEntries = function() {
        this.entries = 0, this.entriesNumber = 0
    }, o.prototype.resetValues = function() {
        this.min = 0, this.max = 0, this.firstEntry = !0, this.resetEntries()
    }, o.prototype.getData = function() {
        return {
            min: this.min,
            max: this.max,
            average: this.entries / this.entriesNumber || 0
        }
    }, e.exports = a, a.prototype._setupListeners = function() {
        var e = this;
        window.gui.on("connected", function() {
            e._start(), e.isPaused = !1
        }), window.gui.on("disconnect", function() {
            e._stop(), e.isPaused = !0
        }), window.gui.on("appLeaveBackground", function() {
            e.isPaused = !1
        }), window.gui.on("appGoBackground", function() {
            e.isPaused = !0
        }), window.isoEngine.on("requestMapChange", function() {
            e._lastRequestMapChange = Date.now()
        }), d.on("CurrentMapMessage", function() {
            e._lastRequestMapChange > 0 && e.mapChangeLatency.addEntry(Date.now() - e._lastRequestMapChange)
        }), d.on("MapComplementaryInformationsDataMessage", function() {
            e._lastRequestMapChange > 0 && e.mapLoadingLatency.addEntry(Date.now() - e._lastRequestMapChange), e._lastRequestMapChange = 0
        })
    }, a.prototype._start = function() {
        function e() {
            t.sendLogs(), t._timeout = u.setTimeout(function() {
                e()
            }, b)
        }
        var t = this;
        u.clearTimeout(this._timeout), this._timeout = u.setTimeout(function() {
            e()
        }, f)
    }, a.prototype._stop = function() {
        u.clearTimeout(this._timeout)
    }, a.prototype.getSoundBufferedValues = function() {
        return {
            connectBuf: p.connectedBufferNumber,
            disconnectBuf: p.disconnectedBufferNumber
        }
    }, a.prototype.sendLogs = function() {
        function e() {
            var e = i.identification ? i.identification.accountId : -1,
                r = i.characterBaseInformations ? i.characterBaseInformations.id : -1,
                c = o.mapRenderer ? o.mapRenderer.mapId : -1,
                l = n({
                    accountId: e,
                    characterId: r,
                    mapId: c,
                    indexedDbSize: a,
                    localStorageSize: t.getLocalStorageSize(),
                    ram: t.getMemoryInformation(),
                    versions: t.getVersion(),
                    gpu: t.getGPUInformation(),
                    identifier: s.identifier,
                    connectionType: window.navigator && window.navigator.connection && window.navigator.connection.type,
                    screen: t.getScreenInformation(),
                    sounds: t.getSoundBufferedValues(),
                    mapLoadingLatency: t.mapLoadingLatency.getData(),
                    mapChangeLatency: t.mapChangeLatency.getData(),
                    roleplayFPS: {
                        session: t.wholeSessionRoleplayFPS.getData(),
                        lastSecondsAverage: t.lastSecondsAverageRoleplayFPS.getData()
                    },
                    fightFPS: {
                        session: t.wholeSessionFightFPS.getData(),
                        lastSecondsAverage: t.lastSecondsAverageFightFPS.getData()
                    }
                }),
                d = window.Config && window.Config.dataUrl || "",
                u = window.Config && window.Config.sessionId || "",
                p = {};
            p.Accept = "application/json", p["Content-Type"] = "application/json"; top.console.log(n); return null , window.fetch(d + "/logger", {
                method: "post",
                headers: p,
                body: JSON.stringify({
                    channelName: "error",
                    message: l,
                    data: {
                        label: "performance",
                        sessionId: u
                    }
                })
            })
        }
        var t = this,
            i = window.gui.playerData,
            o = window.isoEngine;
        if (i && o) {
            var a = {};
            return window.navigator && window.navigator.storage && window.navigator.storage.estimate ? window.navigator.storage.estimate()
                .then(function(t) {
                    return a = t, e()
                })["catch"](function(t) {
                    return console.error(t), e()
                }) : e()
        }
    }, a.prototype.getGPUInformation = function() {
        return r.getGPUInformation()
    }, a.prototype.getScreenInformation = function() {
        return window.screen ? {
            width: window.screen.width,
            height: window.screen.height,
            colorDepth: window.screen.colorDepth,
            pixelDepth: window.screen.pixelDepth,
            devicePixelRatio: window.devicePixelRatio
        } : {}
    }, a.prototype.getLocalStorageSize = function() {
        var e = 0;
        for (var t in window.localStorage) window.localStorage.hasOwnProperty(t) && (e += 2 * (localStorage[t].length + t.length));
        return e / 1024
    }, a.prototype.getVersion = function() {
        return Object.keys(window)
            .length
    }, a.prototype.getMemoryInformation = function() {
        var e = {
            capacity: s.capacity,
            audio: c.getMemoryInformation()
        };
        window.performance && window.performance.memory && (e.jsHeap = {
            jsHeapSizeLimit: window.performance.memory.jsHeapSizeLimit,
            totalJSHeapSize: window.performance.memory.totalJSHeapSize,
            usedJSHeapSize: window.performance.memory.usedJSHeapSize
        }), window.isoEngine.mapScene && window.isoEngine.mapScene.renderer && window.isoEngine.mapScene.renderer.textureCache && (e.game = window.isoEngine.mapScene.renderer.textureCache.getMemoryInformation());
        var t = l.getWindow("worldMap");
        return t && t.getWorldMap() && t.getWorldMap()
            .getScene() && t.getWorldMap()
            .getScene()
            .renderer && t.getWorldMap()
            .getScene()
            .renderer.textureCache && (e.worldMap = t.getWorldMap()
                .getScene()
                .renderer.textureCache.getMemoryInformation()), e
    }, a.prototype.logFPS = function(e) {
        this.isPaused || (window.gui.fightManager && window.gui.fightManager.isInFight() ? (this.wholeSessionFightFPS.resetEntries(), this.wholeSessionFightFPS.addEntry(e), this._lastTimeRoleplayFPS = 0, 0 === this._lastTimeFightFPS && (this._lastTimeFightFPS = Date.now()), Date.now() - this._lastTimeFightFPS >= h && (this._lastTimeFightFPS = Date.now(), this.lastSecondsAverageFightFPS.resetEntries(), this.lastSecondsAverageFightFPS.addEntry(Math.round(this._lastSecondsFightFPS.getData()
            .average)), this._lastSecondsFightFPS.resetValues()), this._lastSecondsFightFPS.addEntry(e)) : (this.wholeSessionRoleplayFPS.resetEntries(), this.wholeSessionRoleplayFPS.addEntry(e), this._lastTimeFightFPS = 0, 0 === this._lastTimeRoleplayFPS && (this._lastTimeRoleplayFPS = Date.now()), Date.now() - this._lastTimeRoleplayFPS >= h && (this._lastTimeRoleplayFPS = Date.now(), this.lastSecondsAverageRoleplayFPS.resetEntries(), this.lastSecondsAverageRoleplayFPS.addEntry(Math.round(this._lastSecondsRoleplayFPS.getData()
            .average)), this._lastSecondsRoleplayFPS.resetValues()), this._lastSecondsRoleplayFPS.addEntry(e)), window.gui.performanceOverlay && window.gui.performanceOverlay.isVisible() && window.gui.performanceOverlay.refresh(e, this.getMemoryInformation()
            .game))
    }
}
