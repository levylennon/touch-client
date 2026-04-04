function(e, t, i) {
    function n() {
        if (!navigator.connection) return !1;
        var e = window.Connection ? window.Connection.WIFI : "wifi",
            t = navigator.connection.type;
        return t === e
    }

    function o(e) {
        var t = this;
        e = e || {
            className: "loginSettingsWindow",
            customClose: !0,
            isFullScreen: !0
        }, w.call(this, e), this._clearState();
        var i = this._mapPreloader = new A;
        i.on("step", function(e) {
            t._updateState({
                progress: e.percent,
                downloadEstimate: {
                    count: e.count,
                    nbTotalMaps: e.nbTotalMaps,
                    secondLeft: e.secondLeft
                }
            })
        }), i.on("error", function(e) {
            console.error(e), t._updateState({
                currentScreen: S.ERROR
            })
        }), i.on("end", function() {
            t._updateState({
                currentScreen: S.DOWNLOAD_DONE
            })
        }), i.on("stop", function() {
            var e = t._state.currentScreen;
            e === S.DOWNLOAD_STOP && t._tryClose()
        }), this.on("open", function() {
            O.start();
            var e = Boolean(t.windowBody.getChildCount());
            e || t._createDom(), this._connectionOptions.refresh(), t._clearState(), t._updateState({
                isWiFiActivated: n(),
                currentScreen: S.DISCLAIMER
            }), t.startWifiCheckTimeout()
        }), this.on("close", function() {
            O.stop(), t.stopWifiCheckTimeout()
        });
        var o = window.gui;
        o.on("appGoBackground", function() {
            var e = t._state.currentScreen;
            e === S.DOWNLOAD_ACTIVE && i.stop()
        }), o.on("appLeaveBackground", function() {
            var e = t._state.currentScreen;
            e === S.DOWNLOAD_ACTIVE && i.restart()
        })
    }

    function a(e) {
        e = !0, this._state.isWiFiActivated = e, this._wifiState.toggleClassName("on", Boolean(e)), this._updateWifiStateText(e)
    }

    function r(e) {
        switch (this._updateState({
                previousScreen: this._state.currentScreen
            }), this._state.currentScreen = e, this._hideAll(), this.closeButton.enable(), e) {
            case S.DISCLAIMER:
                this._advice.show(), this._wifiState.show(), this._disclaimerText.show(), this._downloadButton.show(), this._downloadButton.enable(), this._leftDiv.show(), this._disclaimer.show();
                break;
            case S.DOWNLOAD_PREPARE:
                this._downloading.show(), this._checkingAssetsText.show(), this._downloadWifiState.show(), this._progressBar.show(), this._stopButton.show(), this._stopButton.enable(), this._preloadBarBlock.show(), this._checkAssetsVersion(), this._colorProgressBar("green");
                break;
            case S.DOWNLOAD_STOP:
                this.closeButton.disable(), this._downloading.show(), this._stoppingDownload.show(), this._downloadWifiState.show(), this._progressBar.show(), this._preloadBarBlock.show(), this._resumeButton.show(), this._resumeButton.enable(), this._colorProgressBar("orange");
                break;
            case S.DOWNLOAD_PAUSE:
                this.closeButton.disable(), this._downloading.show(), this._downloadEstimate.show(), this._downloadWifiState.show(), this._progressBar.show(), this._preloadBarBlock.show(), this._resumeButton.show(), this._resumeButton.enable(), this._colorProgressBar("orange");
                break;
            case S.DOWNLOAD_ACTIVE:
                this._downloading.show(), this._downloadEstimate.show(), this._downloadWifiState.show(), this._progressBar.show(), this._stopButton.show(), this._stopButton.enable(), this._preloadBarBlock.show(), this._state.hasStartedDownloading ? this._retryDownloading() : this._startDownloading(), this._colorProgressBar("green");
                break;
            case S.DOWNLOAD_DONE:
                this._downloaded.show(), this._downloadEstimate.show(), this._downloadWifiState.show(), this._progressBar.show(), this._continueButton.show(), this._preloadBarBlock.show(), this._colorProgressBar("green");
                break;
            case S.ERROR:
                this._downloading.show(), this._downloadError.show(), this._retryButton.show(), this._retryButton.enable(), this._progressBar.show(), this._preloadBarBlock.show(), this._colorProgressBar("red")
        }
    }

    function s(e) {
        this._state.previousScreen = e
    }

    function c(e) {
        this._state.progress = e, this._progressBar.setValue(e)
    }

    function l(e) {
        if (!e && 0 !== e) return g("tablet.common.computingTimeLeft");
        var t = [],
            i = Math.floor(e / L) % N;
        i && t.push(i + " " + g("ui.time.minutes", i));
        var n = Math.floor(e / R);
        if (n) t.unshift(n + " " + g("ui.time.hours", n));
        else {
            var o = (e < 0 ? 0 : e) % L;
            t.push(o + " " + g("ui.time.seconds", o))
        }
        return g("tablet.common.endsIn", t.join(" "))
    }

    function d(e, t) {
        return t || (t = "?"), g("tablet.common.mapsPlural", e + "/" + t)
    }

    function u(e) {
        this._state.downloadEstimate = e;
        var t, i = e.count,
            n = e.nbTotalMaps;
        t = i === n ? g("tablet.common.done") : l(e.secondLeft);
        var o = d(i, n);
        this._downloadEstimate && this._downloadEstimate.setText(g("tablet.common.hyphenSeparation", t, o))
    }

    function p(e) {
        this._state.hasStartedDownloading = e
    }

    function h(e) {
        this._state.wifiCheckTimeout && (this._state.wifiCheckTimeout = window.clearTimeout(this._state.wifiCheckTimeout)), this._state.wifiCheckTimeout = e
    }

    function f(e) {
        return e.json()
    }

    function b(e, t) {
        var i = window.Config.dataUrl + "/assetsVersions.json?" + y.stringify(e);
        window.fetch(i)
            .then(f)
            .then(function(e) {
                t(null, e)
            })["catch"](t)
    }
    i(1465);
    var m = i(1466),
        M = i(86),
        g = i(17)
        .getText,
        _ = i(56)
        .inherits,
        A = i(955),
        O = i(412),
        v = i(490),
        y = i(135),
        z = i(130),
        w = i(70),
        T = i(1467),
        C = i(13)
        .TOTAL_MAP_ASSETS_SIZE_IN_GB,
        I = 1e4,
        S = {
            DISCLAIMER: 0,
            DOWNLOAD_PREPARE: 1,
            DOWNLOAD_ACTIVE: 2,
            DOWNLOAD_STOP: 3,
            DOWNLOAD_DONE: 4,
            ERROR: 5,
            DOWNLOAD_PAUSE: 6
        };
    _(o, w), e.exports = o, o.prototype._clearState = function() {
        this._state = {
            currentScreen: null,
            downloadEstimate: null,
            hasStartedDownloading: !1,
            isWiFiActivated: !1,
            previousScreen: null,
            progress: 0,
            wifiCheckTimeout: null
        }
    }, o.prototype.freeContent = function() {
        this._advice = null, this._wifiState = null, this._disclaimerText = null, this._downloading = null, this._downloadingFirstLine = null, this._downloadingSecondLine = null, this._downloaded = null, this._downloadError = null, this._checkingAssetsText = null, this._stoppingDownload = null, this._downloadEstimate = null, this._downloadWifiState = null, this._progressBar = null, this._downloadButton = null, this._stopButton = null, this._continueButton = null, this._retryButton = null, this.windowBody.clearContent()
    }, o.prototype._createDom = function() {
        var e = this,
            t = this.windowBody,
            i = t.appendChild(new M({
                className: ["closeBtn"]
            }));
        i.on("tap", function() {
            e._tryClose()
        }), this._connectionOptions = t.appendChild(new T(window.gui.loginScreen, this)), t.createChild("div", {
            className: "separator"
        });
        var n = t.createChild("div", {
                className: "downloadMaps"
            }),
            o = n.createChild("div", {
                className: "title"
            });
        o.setText(g("tablet.preload.title"));
        var a = n.createChild("div", {
                className: "infosDownload"
            }),
            r = a.createChild("div", {
                className: "rightDiv"
            });
        this._leftDiv = a.createChild("div", {
            className: "leftDiv"
        }), this._leftDiv.createChild("div", {
            className: "screenshot"
        }), this._advice = r.createChild("div", {
            className: "advice"
        }), this._disclaimer = r.createChild("div", {
            className: "disclaimer"
        }), this._wifiState = this._disclaimer.createChild("div", {
            className: "wifiState"
        }), this._wifiStateText = this._wifiState.createChild("div", {
            className: "wifiStateText"
        }), this._disclaimerText = this._disclaimer.createChild("div", {
            className: "disclaimerText"
        }), this._downloading = r.createChild("div", {
            className: "downloading"
        }), this._downloadingFirstLine = this._downloading.createChild("div", {
            className: "caption"
        }), this._downloadingSecondLine = this._downloading.createChild("div", {
            className: "warning"
        }), this._downloaded = r.createChild("div", {
            className: "downloaded"
        }), this._preloadBarBlock = r.createChild("div", {
            className: "preloadBarBlock"
        }), this._downloadError = this._preloadBarBlock.createChild("div", {
            className: "downloadError"
        }), this._checkingAssetsText = this._preloadBarBlock.createChild("div"), this._stoppingDownload = this._preloadBarBlock.createChild("div"), this._downloadEstimate = this._preloadBarBlock.createChild("div", {
            className: "downloadEstimate"
        }), this._downloadWifiState = this._preloadBarBlock.createChild("div", {
            className: "downloadWifiState"
        }), this._progressBar = this._preloadBarBlock.appendChild(new v({
            className: ["green"],
            epsilon: 0
        }));
        var s = t.createChild("div", {
            className: "buttonContainer"
        });
        this._downloadButton = s.appendChild(new M({
            className: ["whiteButton"]
        }, function() {
            e._downloadButton.disable(), e._updateState({
                currentScreen: S.DOWNLOAD_PREPARE
            })
        })), this._resumeButton = s.appendChild(new M({
            className: ["emptyButton"]
        }, function() {
            e._resumeButton.disable(), e._updateState({
                currentScreen: S.DOWNLOAD_ACTIVE
            })
        })), this._retryButton = s.appendChild(new M({
            className: ["whiteButton"]
        }, function() {
            e._retryButton.disable(), e._updateState({
                currentScreen: e._state.previousScreen
            })
        })), this._stopButton = s.appendChild(new M({
            className: ["emptyButton"]
        }, function() {
            e._stopButton.disable(), e._updateState({
                currentScreen: S.DOWNLOAD_PAUSE
            }), e._mapPreloader.stop()
        })), this._continueButton = s.appendChild(new M({
            className: ["whiteClassicButton"]
        }, function() {
            e._tryClose()
        }));
        var c = this.windowBody.createChild("div", {
            className: "corners"
        });
        c.createChild("div", {
            className: "corner"
        }), c.createChild("div", {
            className: "corner"
        }), c.createChild("div", {
            className: "corner"
        }), this._updateText(this._state.isWiFiActivated)
    }, o.prototype._hideAll = function() {
        this._advice.hide(), this._wifiState.hide(), this._disclaimerText.hide(), this._downloading.hide(), this._downloaded.hide(), this._downloadError.hide(), this._checkingAssetsText.hide(), this._stoppingDownload.hide(), this._downloadEstimate.hide(), this._downloadWifiState.hide(), this._progressBar.hide(), this._downloadButton.hide(), this._stopButton.hide(), this._continueButton.hide(), this._retryButton.hide(), this._resumeButton.hide(), this._leftDiv.hide(), this._disclaimer.hide(), this._preloadBarBlock.hide()
    };
    var E = {
        currentScreen: r,
        downloadEstimate: u,
        hasStartedDownloading: p,
        isWiFiActivated: a,
        previousScreen: s,
        progress: c,
        wifiCheckTimeout: h
    };
    o.prototype._updateState = function(e) {
        for (var t in e) {
            var i = E[t];
            i && this._state[t] !== e[t] && i.call(this, e[t])
        }
    };
    var L = 60,
        N = 60,
        R = N * L;
    o.prototype.startWifiCheckTimeout = function() {
        var e = this,
            t = window.setTimeout(function() {
                e._updateState({
                    isWiFiActivated: n()
                }), e.startWifiCheckTimeout()
            }, I);
        this._updateState({
            wifiCheckTimeout: t
        })
    }, o.prototype.stopWifiCheckTimeout = function() {
        this._updateState({
            wifiCheckTimeout: null
        })
    }, o.prototype._updateText = function(e) {
        var t = g("tablet.common.acronymGigabytes", C);
        this._advice.setText(g("tablet.preload.advice", t)), this._disclaimerText.setText(g("tablet.preload.disclaimer")), this._downloadingFirstLine.setText(g("tablet.preload.downloading")), this._downloadingSecondLine.setText(g("tablet.preload.downloadingWarning")), this._downloaded.setText(g("tablet.preload.done")), this._downloadError.setText(g("tablet.preload.error")), this._checkingAssetsText.setText(g("tablet.preload.checkingAssets")), this._stoppingDownload.setText(g("tablet.common.stopping")), this._downloadButton.setText(g("tablet.common.downloadSize", t)), this._stopButton.setText(g("tablet.common.stop")), this._continueButton.setText(g("tablet.common.continue")), this._retryButton.setText(g("tablet.common.retry")), this._resumeButton.setText(g("ui.common.resume")), this._updateWifiStateText(e)
    }, o.prototype._updateWifiStateText = function(e) {
        var t = g(e ? "tablet.common.activated" : "tablet.common.deactivated");
        this._wifiStateText.setText(t);
        var i = e ? '<span class="on">' + t + "</span>" : '<span class="off">' + t + "</span>";
        this._downloadWifiState.setHtml(g("tablet.common.wifiState", i))
    }, o.prototype._tryClose = function() {
        var e = this._state.currentScreen;
        return e === S.DOWNLOAD_PREPARE ? this._updateState({
            currentScreen: S.DOWNLOAD_STOP
        }) : e === S.DOWNLOAD_ACTIVE ? (this._updateState({
            currentScreen: S.DOWNLOAD_STOP
        }), this._mapPreloader.stop()) : void this.close()
    }, o.prototype._hasStopped = function() {
        return this._state.currentScreen === S.DOWNLOAD_STOP
    }, o.prototype._checkAssetsVersion = function() {
        function e(e) {
            console.error(e), t._updateState({
                currentScreen: S.ERROR
            })
        }
        var t = this;
        this._updateState({
            progress: 0
        }), m.getVersions(function(i, n) {
            return i ? e(i) : t._hasStopped() ? t._tryClose() : (t._updateState({
                progress: .33
            }), void b(n, function(i, n) {
                return i ? e(i) : t._hasStopped() ? t._tryClose() : (t._updateState({
                    progress: .67
                }), void m.upgradeAssets(n, function(i) {
                    return i ? e(i) : t._hasStopped() ? t._tryClose() : void t._updateState({
                        progress: 1,
                        currentScreen: S.DOWNLOAD_ACTIVE
                    })
                }))
            }))
        })
    }, o.prototype._startDownloading = function() {
        var e = this;
        e._updateState({
            hasStartedDownloading: !0,
            progress: 0,
            downloadEstimate: {
                count: 0
            }
        }), z.getAllDataMap("Areas", function(t, i) {
            if (t) return console.error(t);
            if (e._hasStopped()) return e._tryClose();
            var n = [];
            for (var o in i) n.push(i[o].id);
            e._mapPreloader.preloadAreas(n)
        })
    }, o.prototype._retryDownloading = function() {
        this._mapPreloader.restart()
    }, o.prototype._colorProgressBar = function(e) {
        this._progressBar.toggleClassName("orange", "orange" === e), this._progressBar.toggleClassName("green", "green" === e), this._progressBar.toggleClassName("red", "red" === e)
    }
}
