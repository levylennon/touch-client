function(e, t, i) {
    function n() {
        b = !1, y = null, z = null, g = null, _ = null, O = null
    }

    function o() {
        d.tween(g, {
            webkitTransform: "translate3d(0,0,0) scale(1)"
        }, {
            time: 100,
            easing: "ease-out"
        }, function() {
            O.onDragClassName && g.delClassNames(O.onDragClassName), f.isLostDrop = !0, g === A ? (A.hide(), y.emit("dragEnd", I.x, I.y)) : (_.appendChild(g), g.delClassNames("customDragElement"), g.setStyles(T), g.emit("dragEnd", I.x, I.y)), f.emit("dragEnd", y, y._dragManager.source, z), A.hide(), n()
        })
    }

    function a(e, t) {
        var i = 1.5,
            n = 0,
            o = 0,
            a = 0;
        void 0 !== g.customScale && null !== g.customScale && (i = g.customScale), void 0 !== g.customXOffset && null !== g.customXOffset && (n = g.customXOffset), void 0 !== g.customYOffset && null !== g.customYOffset && (o = g.customYOffset), void 0 !== g.customRotation && null !== g.customRotation && (a = g.customRotation);
        var r = p.getCoordinatesRelativeToBody(e, t);
        e = r.x, t = r.y;
        var s = e - C.x - m + n,
            c = t - C.y - M + o;
        g.setStyle("webkitTransform", "translate3d(" + s + "px, " + c + "px, 0) scale(" + i + ") rotateZ(" + a + "deg)")
    }

    function r(e, t) {
        s.removeListener("dragMove", a), f.isDragging = !1, v && (v.delClassNames("dragOver", "notAllowed"), v = null), I.x = e, I.y = t;
        var i = document.elementFromPoint(e, t);
        if (i) {
            var r;
            Event ? r = new Event("drop", {
                bubbles: !0,
                cancelable: !0
            }) : (console.error(new Error("Still using deprecated event.initEvent")), r = document.createEvent("Event"), r.initEvent("drop", !0, !0));
            var c = i.tagName || "";
            "html" === c.toLowerCase() ? o() : i.dispatchEvent(r)
        } else d.tween(g, {
            webkitTransform: "translate3d(0,0,0) scale(1)"
        }, {
            time: 100,
            easing: "ease-out"
        }, function() {
            O.onDragClassName && g.delClassNames(O.onDragClassName), f.isLostDrop = !0, g === A ? (A.hide(), y.emit("dragEnd", I.x, I.y)) : (_.appendChild(g), g.delClassNames("customDragElement"), g.setStyles(T), g.emit("dragEnd", I.x, I.y)), f.emit("dragEnd", y, y._dragManager.source, z), A.hide(), n()
        });
        l.stop()
    }
    i(419);
    var s = i(420),
        c = i(36)
        .EventEmitter,
        l = i(90),
        d = i(22),
        u = i(72),
        p = i(67),
        h = i(66),
        f = new c,
        b = !1;
    f.isDragging = !1;
    var m, M, g, _, A, O, v = null,
        y = null,
        z = null,
        w = {
            x: 0,
            y: 0
        },
        T = {
            left: 0,
            top: 0
        },
        C = {
            x: 0,
            y: 0
        },
        I = {
            x: 0,
            y: 0
        };
    f.init = function(e) {
        A = new u("div", {
            className: "dragElement"
        }), A.icon = A.createChild("div", {
            className: "icon"
        }), e.appendChild(A), A.hide(), window.gui.wBody.on("dom.drop", o)
    }, f.setElementSource = function(e, t) {
        e._dragManager && (e._dragManager.source = t)
    }, f.isDraggable = function(e) {
        return e._dragManager && e._dragManager.draggable
    }, f.setDraggable = function(e, t, i, n, o) {
        e._dragManager = e._dragManager || {}, e._dragManager.draggable || (e._dragManager.draggable = !0, e._dragManager.source = i, o = o || {}, t = t || {}, s.initializeListeners(e, o), e.on("_dragStart", function(i, c) {
            if (g = o.dragElement ? e : A, !b && (!t.prepareForDrag || t.prepareForDrag(n, g, e))) {
                var u = p.getCoordinatesRelativeToBody(i, c);
                i = u.x, c = u.y, b = !0, f.isDragging = !0, y = e, z = n, O = t;
                var v = h(e.rootElement),
                    I = {
                        left: v.x,
                        top: v.y,
                        width: o.containerWidth || v.width,
                        height: o.containerHeight || v.height
                    };
                if (w.x = I.left, w.y = I.top, o.dragElement) _ = e.getParent(), window.gui.gameGuiContainer.appendChild(e), T.left = e.getStyle("left"), T.top = e.getStyle("top"), g.setStyles({
                    left: I.left + "px",
                    top: I.top + "px",
                    webkitTransform: "translate3d(0,0,0)"
                }), g.addClassNames("customDragElement");
                else {
                    T.left = 0, T.top = 0, g.setStyles({
                        left: I.left + "px",
                        top: I.top + "px",
                        width: I.width + "px",
                        height: I.height + "px",
                        webkitTransform: "translate3d(0,0,0)"
                    });
                    var S = O.styles || {};
                    S.backgroundImage = O.backgroundImage || S.backgroundImage || "none", g.icon.setStyles(S)
                }
                O.onDragClassName && g.addClassNames(O.onDragClassName), g.show(), m = I.left + Math.floor(I.width / 2) - i, M = I.top + Math.floor(I.height / 2) - c, C.x = i, C.y = c, d.tween(g, {
                    webkitTransform: "translate3d(" + -m + "px," + -M + "px,0) scale(1.5)"
                }, {
                    time: 100,
                    easing: "ease-out"
                }, function() {
                    s.on("dragMove", a), o.noHover || l.start(), e.emit("dragStart"), f.emit("dragStart", y, y._dragManager.source, z)
                }), s.once("dragEnd", r)
            }
        }))
    }, f.setDragEnable = function(e, t) {
        e._dragManager && (e._dragManager.enable = t)
    }, f.enableDrag = function(e) {
        f.setDragEnable(e, !0)
    }, f.disableDrag = function(e) {
        f.setDragEnable(e, !1)
    }, f.cancelDragFromSource = function(e) {
        y && e === y._dragManager.source && f.cancelDrag()
    }, f.cancelDrag = function() {
        O && O.onDragClassName && g.delClassNames(O.onDragClassName), s.cancel()
    }, f.setDroppable = function(e, t, i) {
        function o() {
            var n = y._dragManager.source;
            return !(i.isDropAllowed && !i.isDropAllowed.call(e, z, g, n)) && t.indexOf(n) !== -1
        }
        e._dragManager = e._dragManager || {}, e._dragManager.droppable || (e._dragManager.droppable = !0, i = i || {}, l(e), e.on("touchenter", function() {
            f.isDragging && o() && (v = e, e.addClassNames("dragOver"), e.emit("dragEnter", y, y._dragManager.source, z))
        }), e.on("touchleave", function() {
            f.isDragging && o() && (v = null, e.delClassNames("dragOver"), e.emit("dragLeave"))
        }), e.on("dom.drop", function(t) {
            if (o()) {
                t.stopPropagation();
                var a, r;
                if (i.matchPositionOnDrop) {
                    var s = h(e.rootElement);
                    a = s.x - C.x + Math.floor(s.width / 2) - m, r = s.y - C.y + Math.floor(s.height / 2) - M
                } else a = I.x - C.x, r = I.y - C.y;
                e.emit("beforeDragEnd"), d.tween(g, {
                    webkitTransform: "translate3d(" + a + "px," + r + "px,0) scale(1)"
                }, {
                    time: 100,
                    easing: "ease-out"
                }, function() {
                    z = z || {}, z.x = I.x, z.y = I.y, O.onDragClassName && g.delClassNames(O.onDragClassName), g === A ? y.emit("dragEnd", a, r) : (_.appendChild(g), g.delClassNames("customDragElement"), g.setStyles({
                        left: T.left,
                        top: T.top,
                        webkitTransform: "translate3d(0px,0px, 0)"
                    }), g.emit("dragEnd", a, r)), f.isLostDrop = !1, f.emit("dragEnd", y, y._dragManager.source, z), e.delClassNames("dragOver"), e.emit("drop", y, y._dragManager.source, z), A.hide(), n()
                })
            }
        }))
    }, f.getDraggedElement = function() {
        return g
    }, e.exports = f
}
