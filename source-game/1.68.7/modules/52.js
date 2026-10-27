function(e, t, i) {
    function n(e, t) {
        delete e.closingTweener, e.hide(), e.emit("closed", t), g.emit("closed", {
            id: e.id
        }), e.id.indexOf("#") !== -1 && (_[e.id].destroy(), delete _[e.id])
    }

    function o(e, t, i) {
        i || (e.emit("opened", t), g.emit("opened", {
            id: e.id,
            extraParams: t
        })), delete e.openingTweener
    }

    function a(e, t) {
        var i = _[e];
        if (!i) return console.error("Invalid window: " + e);
        if (i.openState) {
            i.openingTweener && (i.openingTweener.cancel(), o(i, null, !0));
            var a = y.indexOf(e);
            y.splice(a, 1), i === O && (O = null), i.openState = !1, v = e, i.emit("close", t), g.emit("close", {
                id: e
            });
            var r = i.position;
            i.closingTweener = l.tween(i, {
                opacity: 0,
                webkitTransform: "translate3d(" + r.x + "px," + r.y + "px,0) scale(0.8)"
            }, {
                time: 150,
                delay: 0,
                easing: "ease-out"
            }, function() {
                n(i, t)
            })
        }
    }

    function r() {
        if (A) {
            for (var e = 0, t = A.length; e < t; e += 1) a(A[e]);
            A = null, window.foreground.unlock("windowsManagerDialog")
        }
    }
    i(53);
    var s = i(54)
        .dimensions,
        c = i(36)
        .EventEmitter,
        l = i(22),
        d = i(63),
        u = i(69),
        p = i(17)
        .getText,
        h = i(70),
        f = i(128),
        b = i(66),
        m = i(129),
        M = 40,
        g = new c,
        _ = {},
        A = null,
        O = null,
        v = null,
        y = [];
    g.makeMovable = function(e, t) {
        function i() {
            e.position.x = n, e.position.y = o, e.emit("positioned")
        }
        t = t || e.windowHeadWrapper, u(t);
        var n, o, a, r, c, l;
        t.on("slideStart", function(i, s) {
            if (!e.openState) return t.cancelSlide();
            var d = b(e.rootElement),
                u = s.left - d.left,
                p = s.top - d.top;
            c = d.width, l = s.height + p, a = i.x - s.left + u, r = i.y - s.top + p, n = e.position.x, o = e.position.y
        }), t.on("slideEnd", i), t.on("slideCancel", i), t.on("slide", function(t) {
            n = t.x - a, o = t.y - r, n < 0 ? n = 0 : n + c > s.windowFullScreenWidth && (n = s.windowFullScreenWidth - c), o < 0 ? o = 0 : o + l > s.windowFullScreenHeight && (o = s.windowFullScreenHeight - l), e.setStyle("webkitTransform", "translate3d(" + n + "px, " + o + "px, 0)")
        })
    }, g.initialize = function(e) {
        e.on("disconnect", function() {
            A = null, v = null
        }), e.on("ExchangeLeaveMessage", r), e.on("LeaveDialogMessage", r)
    }, g.addWindow = function(e, t, i) {
        function n() {
            g.focusWindow(e)
        }
        i = i || {}, _[e] = t, t.windowManager = g, t.id = e, i.group && (t.group = i.group), t.hide(), t.openState = !1;
        var o = i.container || window.gui.windowsContainer;
        o.appendChild(t), t.allowDomEvents(), t.on("dom.touchstart", n), d(t.header), t.header.on("doubletap", function() {
            g.positionWindow(e)
        }), i.fixed || g.makeMovable(t)
    }, g.open = function(e, t) {
        if (t = t || {}, t.forceToOpen || !window.gui.uiLocker || !window.gui.uiLocker.isFeatureLockedByWindow(e, t.tabId)) {
            if (("market" === e || "DailyQuestRerollWindow" === e) && window.gui.playerData.isShopDisabled() && !window.gui.scenarioManager.isBehaviourEnabled(m.ENABLE_FAKE_SHOP)) return void window.gui.openPopup({
                title: p("tablet.window.shop.title"),
                message: p("ui.popup.accessDenied.serviceUnavailable")
            });
            var i = _[e];
            if (!i) return console.error("Invalid window: " + e);
            if (i.params) {
                for (var a in t) i.params.hasOwnProperty(a) || (i.params[a] = t[a]);
                t = i.params
            }
            i.closingTweener && (i.closingTweener.cancel(), n(i));
            var r = i.group;
            if (r)
                for (var c in _) {
                    var d = _[c];
                    r === d.group && d.openState && e !== c && this.close(c)
                }
            var u = i.positionInfo,
                h = i.position;
            if (u && !h && (i.position = h = f.buildWindowStyleFromInfo(u), i.setStyles({
                    webkitTransform: "translate3d(" + h.x + "px," + h.y + "px,0) scale(0.8)",
                    width: h.width + "px",
                    height: h.height + "px",
                    opacity: 0
                })), u && u.isModal || t.isModal) {
                var b = u.modalZIndex;
                i.addClassNames("modal");
                var A = window.gui.windowsContainer.createChild("div", {
                    className: "modalWindowOverlay"
                });
                b && A.setStyle("z-index", b), i.once("close", function() {
                    A.destroy()
                })
            }
            if (i.changeDefaultOpenAction && !t.bypassDefaultAction) return void i.defaultOpenAction();
            i.openState = !0, i.show(), this.emit("open", {
                id: e,
                extraParams: t
            }), i.emit("open", t), g.focusWindow(e), h = i.position;
            var O = u && u.isDefault;
            return O || i.initialPosition || (i.initialPosition = {
                x: h.x,
                y: h.y,
                width: h.width,
                height: h.height
            }), h.x = Math.min(s.windowFullScreenWidth - h.width, Math.max(0, h.x)), h.y = Math.max(0, Math.min(s.windowFullScreenHeight - M, h.y)), i.openingTweener = l.tween(i, {
                opacity: 1,
                webkitTransform: "translate3d(" + h.x + "px," + h.y + "px,0) scale(1)"
            }, {
                time: 150,
                delay: 0,
                easing: "ease-out"
            }, function() {
                o(i, t)
            }), window.gui.splashScreen.hide(), i
        }
    }, g.focusWindow = function(e) {
        var t = _[e];
        if (t.openState && O !== t) {
            var i = y.indexOf(e);
            i !== -1 && y.splice(i, 1), y.unshift(e), O = t, t.getParent()
                .appendChild(t), t.emit("focus")
        }
    }, g.positionWindow = function(e, t) {
        var i, n = _[e];
        if (t) i = f.buildWindowStyleFromInfo(t);
        else if (n.initialPosition) {
            var o = n.initialPosition;
            i = {
                x: o.x,
                y: o.y,
                width: o.width,
                height: o.height
            }
        } else i = f.buildWindowStyleFromInfo(n.positionInfo);
        n.position = i, n.setStyles({
            width: i.width + "px",
            height: i.height + "px",
            webkitTransform: "translate3d(" + i.x + "px," + i.y + "px,0) scale(1)"
        }), t ? n.emit("positioned") : n.emit("repositioned")
    }, g.openDialog = function(e, t) {
        if (!A) {
            Array.isArray(e) || (e = [e]), A = e;
            for (var i = 0, n = e.length; i < n; i += 1) g.open(e[i], t);
            window.foreground.lock("windowsManagerDialog")
        }
    }, g.continueDialog = function(e, t) {
        A = null, this.openDialog(e, t)
    }, g.isDialogActive = function() {
        return Boolean(A)
    }, g.getLastFocusedWindowId = function() {
        return y.length > 0 ? y[0] : null
    }, g.isModalWindow = function(e) {
        var t = _[e];
        return t ? t.hasClassName("modal") : null
    }, g.close = function(e, t) {
        var i = t && t.keepDialog;
        return !i && A && A.indexOf(e) !== -1 ? (window.dofus.sendMessage("LeaveDialogRequestMessage", null), r()) : void a(e, t)
    }, g._forceClose = function(e) {
        return A && A.indexOf(e) !== -1 ? (window.gui.isConnected && window.dofus.sendMessage("LeaveDialogRequestMessage", null), r()) : void a(e)
    }, g.closeAll = function() {
        for (var e in _) "popup" !== e && _[e].openState && this._forceClose(e)
    }, g["switch"] = function(e, t) {
        var i = _[e];
        i.openState ? i === O ? this.close(e) : g.focusWindow(e) : this.open(e, t)
    }, g.getWindow = function(e) {
        return _[e]
    }, g.moveAndResizeWindow = function(e, t, i, n, o) {
        var a = g.getWindow(e);
        if (a && a.openState) {
            var r = a.position.x,
                s = a.position.y,
                c = a.position.width,
                d = a.position.height;
            null !== t && void 0 !== t || (t = r), null !== i && void 0 !== i || (i = s), null !== n && void 0 !== n || (n = c), null !== o && void 0 !== o || (o = d);
            var u = "translate3d(" + t + "px, " + i + "px,0)";
            l.tween(a, {
                opacity: 1,
                webkitTransform: u,
                width: n + "px",
                height: o + "px"
            }, {
                time: 150,
                delay: 0,
                easing: "ease-out"
            }, function() {
                g.positionWindow(e, {
                    left: t,
                    top: i,
                    width: n,
                    height: o
                })
            })
        }
    }, g.arrangeOpeningWindow = function(e, t) {
        var i = t.leftOf || t.rightOf,
            n = g.getWindow(e),
            o = g.getWindow(i);
        if (n && o.openState) {
            var a, r, c, l = n.position.width,
                d = o.position.width,
                u = o.position.x,
                p = u;
            t.leftOf ? (a = u - l, a < 0 && (a = 0, p = Math.min(l, s.screenWidth - d))) : t.rightOf && (a = u + d, a + l > s.screenWidth && (a = s.screenWidth - l, p = Math.max(0, a - d))), t.sameHeight && (r = n.position.height, c = n.position.y), n.position.x = a, t.height && (n.position.height = t.height), g.positionWindow(e, n.position), (p !== u || r) && g.moveAndResizeWindow(i, p, c, null, r)
        }
    }, g.arrangeOpeningWindowVertically = function(e, t) {
        var i = t.below,
            n = g.getWindow(e),
            o = g.getWindow(i);
        if (n && o.openState) {
            var a;
            t.below && (a = o.position.y + o.position.height, t.fullHeight && (n.position.height = s.windowFullScreenHeight - a)), n.position.x = o.position.x, n.position.y = a, t.height && (n.position.height = t.height), g.positionWindow(e, n.position)
        }
    }, g.getOpenWindows = function() {
        var e = [];
        for (var t in _) "popup" !== t && _[t].openState && ("function" == typeof _[t].getOpenedTabId ? e.push(t + " > " + _[t].getOpenedTabId()) : e.push(t));
        return e
    }, g.getLastClosedWindow = function() {
        return v
    }, g.isWindowOpen = function(e) {
        if (this.getWindow(e)) return this.getWindow(e)
            .openState
    }, g.createPanel = function(e, t, i) {
        i = i || {};
        for (var n, o = 1; n = e + "#" + o, _[n]; o++);
        var a;
        return t instanceof h ? a = t : (a = new h({
            className: e,
            title: i.title,
            positionInfo: {
                left: i.left || "c",
                top: i.top || "c",
                width: i.width || 250,
                height: i.height || 200
            },
            isModal: i.isModal,
            noCloseButton: i.noCloseButton
        }), a.windowBody.appendChild(t)), g.addWindow(n, a), g.open(n, i), a
    }, g.getPanel = function(e, t) {
        return _[e + "#" + t]
    }, g.getWindowsReferences = function() {
        return _
    }, e.exports = g
}
