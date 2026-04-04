function(e, t, i) {
    function n() {
        u.call(this, {
            className: "CleanAssetsWindow",
            noCloseButton: !0,
            positionInfo: {
                left: "c",
                top: "c",
                width: 500,
                height: 200,
                isModal: !0
            },
            openingSound: null,
            closingSound: null
        }), this._createdDom = !1, this._progressBar = null;
        var e = this;
        this.on("open", function(t) {
            return e._createDom(), e._checkAssetsVersion(function(i) {
                return e.close(), i ? (console.error(new Error("cleanAssets " + i)), window.gui.openSimplePopup(s("ui.popup.accessDenied.unknown"), s("ui.popup.accessDenied")), t(i)) : t()
            })
        })
    }

    function o(e) {
        return e.json()
    }

    function a(e, t) {
        var i = window.Config.dataUrl + "/assetsVersions.json?" + d.stringify(e);
        window.fetch(i)
            .then(o)
            .then(function(e) {
                t(null, e)
            })["catch"](t)
    }
    i(1470);
    var r = i(1466),
        s = i(17)
        .getText,
        c = i(56)
        .inherits,
        l = i(490),
        d = i(135),
        u = i(70);
    c(n, u), e.exports = n, n.prototype.freeContent = function() {
        this._progressBar = null, this._createdDom = !1, this.windowBody.clearContent()
    }, n.prototype._createDom = function() {
        if (!this._createdDom) {
            this.setTitle(s("ui.cleanAssets.title"));
            var e = this.windowBody,
                t = e.createChild("div", {
                    className: "descriptionBlock"
                });
            t.createChild("div", {
                text: s("ui.cleanAssets.description")
            });
            var i = e.createChild("div", {
                className: "preloadBarBlock"
            });
            this._progressBar = i.appendChild(new l({
                className: ["green"],
                epsilon: 0
            })), this._createdDom = !0
        }
    }, n.prototype._checkAssetsVersion = function(e) {
        var t = this;
        this._updateTheProgressBar(0), r.getVersions(function(i, n) {
            return i ? e(i) : (t._updateTheProgressBar(.33), void a(n, function(i, n) {
                return i ? e(i) : (t._updateTheProgressBar(.67), void r.upgradeAssets(n, function(i) {
                    return i ? e(i) : (t._updateTheProgressBar(1), e())
                }))
            }))
        })
    }, n.prototype._updateTheProgressBar = function(e) {
        this._progressBar && this._progressBar.setValue(e)
    }
}
