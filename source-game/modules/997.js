function(e, t, i) {
    function n() {
        function e() {
            B._strokes = {}, B._strokes.schema = [], P = 0, U = []
        }

        function t(e, t, i, n, o) {
            e.latestPos = {
                x: e.x,
                y: e.y
            }, e.x += t, e.y += i;
            var a = n ? O / n : 0;
            a > 1 ? a = 1 : a < 0 && (a = 0), D.save(), D.strokeStyle = o ? o : "black", D.globalAlpha = 1, D.lineWidth = 2, D.beginPath(), D.moveTo(e.latestPos.x, e.latestPos.y), D.lineTo(e.x, e.y), D.stroke(), D.restore()
        }

        function i(e, i, n, o) {
            var a, r;
            a = e - n.x, r = i - n.y;
            for (var s = Math.sqrt(a * a + r * r), c = 0; c < U.length; c++) t(U[c], a, r, s, o)
        }

        function n(e) {
            Y = e.x - B.boundings.x - 10, X = e.y - B.boundings.y - 10
        }

        function o(e) {
            D.clearRect(0, 0, q.width, q.height), D.drawImage(e, 0, 0)
        }

        function z(e, t, n, o, a) {
            setTimeout(function() {
                i(e, t, n, a)
            }, o)
        }

        function w(e, t) {
            U = [];
            var i, n, o, a, r, s, c, l, d, u = 28,
                p = .5 * u;
            s = 2 * Math.PI * Math.random(), d = p * p * Math.PI / O | 0, d < 1 && (d = 1);
            for (var h = 0; h < d; h++) i = p * Math.random(), n = .5 * i, o = 2 * Math.PI * Math.random(), a = i * Math.sin(o), r = n * Math.cos(o), c = Math.cos(s), l = Math.sin(s), U.push({
                x: e + a * c - r * l,
                y: t + a * l + r * c
            })
        }

        function T(t) {
            var i = u.adaptToCanvasSize(t, q);
            B._strokesModele = t, e(), D.clearRect(0, 0, q.width, q.height), H = !0;
            var n = 0,
                o = 0;
            i.schema.forEach(function(e) {
                var t = v.length > o ? v[o] : y;
                setTimeout(function() {
                    w(e.points[0].x, e.points[0].y);
                    for (var i = 1; i < e.points.length; i++) z(e.points[i].x, e.points[i].y, e.points[i - 1], 60 * i, t)
                }, n), n += 100 + 60 * e.points.length, o++
            }), setTimeout(function() {
                I(!0)
            }, n)
        }

        function C(e) {
            H || k || (H = !0, q.toggleClassName("success", e), q.toggleClassName("fail", !e), setTimeout(function() {
                q.delClassNames(["success", "fail"]), H = !1, e && setTimeout(function() {
                    r.close(B.id)
                }, 500)
            }, 1200))
        }

        function I(e) {
            var t = q.rootElement.toDataURL("image/png"),
                i = new Image(q.width, q.height);
            i.src = t, H = !0, i.onload = function() {
                S(i, e)
            }
        }

        function S(e, t) {
            var i = 0;
            for (D.globalAlpha = 1; i < 300;) setTimeout(function() {
                D.globalAlpha -= .01, o(e)
            }, i), i += 15;
            for (; i < 600;) setTimeout(function() {
                D.globalAlpha -= .01, o(e)
            }, i), i += 10;
            if (t) return setTimeout(function() {
                H = !1
            }, i), void(B._partialPicture = e);
            for (; i < 800;) setTimeout(function() {
                D.globalAlpha -= .015, o(e)
            }, i), i += 20;
            for (; i < 900;) setTimeout(function() {
                D.globalAlpha -= .02, o(e)
            }, i), i += 10;
            setTimeout(function() {
                D.clearRect(0, 0, q.width, q.height), D.globalAlpha = 1, H = !1, C(F)
            }, i)
        }

        function E(t, i) {
            k = !0;
            var n = 0,
                o = window.isoEngine.mapRenderer;
            H = !0, I(!1);
            var a = u.sensorModification(t);
            if (i && i.length > 0)
                for (var r = 0; r < i.length; r++) {
                    n = i[r].model;
                    var s = p[n],
                        c = f(s),
                        l = !1;
                    if (c || (l = !(t.schema.length !== s.schema.length || 0 === s.schema.length)), !c && l) {
                        var d = u.rescale(a, s);
                        if (F = u.compareStrokes(d, s)) {
                            var h = {
                                elemId: i[r].element,
                                skillInstanceUid: o.calligraphyElements[i[r].element].enabledSkills[0].skillInstanceUid
                            };
                            break
                        }
                    }
                }
            k = !1, C(F), F ? window.dofus.sendMessage("InteractiveUseRequestMessage", h) : f(s) || window.gui.chat.logMsg(A("ui.chat.calligraphyWronglyDrawn")), M.log("User_Life_Cycle.calligraphy_try", {
                start_time_tentative: t.startTimestamp,
                end_time_tentative: new m.DofusDate(m.now())
                    .getServerDate()
                    .timestamp,
                step_cond_1_panji_context_ok: !f(s),
                step_cond_2_panji_nb_line_ok: l,
                step_cond_3_panji_model_ok: F,
                time_spent_in_interface: m.now() - W,
                panji_id: n
            }), e()
        }

        function L(e, t, i, n) {
            n.min.x = e < n.min.x ? e : n.min.x, n.min.y = t < n.min.y ? t : n.min.y, n.max.x = e > n.max.x ? e : n.max.x, n.max.y = t > n.max.y ? t : n.max.y, i.min.x = e < i.min.x ? e : i.min.x, i.min.y = t < i.min.y ? t : i.min.y, i.max.x = e > i.max.x ? e : i.max.x, i.max.y = t > i.max.y ? t : i.max.y
        }
        a.call(this, {
            className: "calligraphyWindow",
            noTitle: !0,
            noCloseButton: !0,
            positionInfo: {
                left: "c",
                top: "c",
                width: "95%",
                height: "95%"
            }
        });
        var N = this.windowBody.createChild("div", {
                className: "scroll"
            }),
            R = N.createChild("div", {
                className: "header"
            }),
            q = N.appendChild(new d),
            x = N.createChild("div", {
                className: "footer"
            });
        this.btnEncyclo = R.appendChild(new c({
            className: "btnEncyclo"
        })), this.btnClose = R.appendChild(new c({
            className: "btnClose"
        })), this.btnClear = x.appendChild(new c({
            className: "btnClear"
        })), this.btnValidate = x.appendChild(new c({
            className: "btnValidate"
        }));
        var B = this;
        q.replaceClassNames(["Canvas"], ["canvas"]);
        var D = q.getContext("2d");
        this._strokes = {};
        var W, P = 0,
            k = !1,
            F = !1,
            H = !1,
            U = [];
        D.strokeStyle = "black", D.lineJoin = "round";
        var G = window.dofus.connectionManager;
        D.imageSmoothingQuality = "medium";
        var j = !1;
        this._partialPicture = null, G.on("ClientUIOpenedByObjectMessage", function(e) {
            e.type === b.CLIENT_UI_CALLIGRAPHY && r.open(B.id)
        }), this.once("open", function() {
            var e = _(N.rootElement),
                t = Math.min(.8 * e.width, .6 * this.position.width),
                i = Math.min(.67 * e.height, .5 * this.position.height);
            q.width = t, q.height = i, q.setStyles({
                width: t + "px",
                height: i + "px"
            }), l(q)
        }), this.on("open", function() {
            r.getOpenWindows()
                .forEach(function(e) {
                    if (e !== B.id) {
                        var t = e.split(" > ", 1);
                        r.close(t[0])
                    }
                }), W = m.now(), D.clearRect(0, 0, q.width, q.height), q.delClassNames(["success", "fail"]), e(), k = !1, F = !1, H = !1
        }), this.on("close", function() {
            e(), this._partialPicture = null, this._strokesModele = null, k = !1, F = !1, H = !1
        });
        var Y = 0,
            X = 0,
            V = {
                x: Y,
                y: X
            };
        q.on("tapstart", function(e) {
            if (!H) {
                D.lineWidth = 12;
                var t = _(q.rootElement);
                B.boundings = g.getCoordinatesFromNotch(t.x, t.y), n(e), j = !0, w(Y, X), B._strokes.startTimestamp = new m.DofusDate(m.now())
                    .getServerDate()
                    .timestamp, B._strokes.schema[P] = {}, B._strokes.schema[P].points = [], B._strokes.schema[P].points.push({
                        x: Y,
                        y: X
                    }), B._strokes.schema[P].min = {
                        x: Y,
                        y: X
                    }, B._strokes.schema[P].max = {
                        x: Y,
                        y: X
                    }, 0 === P ? (q.delClassNames(["success", "fail"]), B._strokes.min = {
                        x: Y,
                        y: X
                    }, B._strokes.max = {
                        x: Y,
                        y: X
                    }) : (B._strokes.min.x = Y < B._strokes.min.x ? Y : B._strokes.min.x, B._strokes.min.y = X < B._strokes.min.y ? X : B._strokes.min.y, B._strokes.max.x = Y > B._strokes.max.x ? Y : B._strokes.max.x, B._strokes.max.y = X > B._strokes.max.y ? X : B._strokes.max.y)
            }
        }), q.on("tapmove", function(e) {
            if (j) {
                V.x = Y, V.y = X, n(e);
                var t = v.length > P ? v[P] : y;
                i(Y, X, V, t);
                var o = B._strokes.schema[P],
                    a = o.points.length,
                    r = {
                        x: a > 1 ? o.points[a - 2].x : 0,
                        y: a > 1 ? o.points[a - 2].y : 0
                    },
                    s = {
                        x: o.points[a - 1].x,
                        y: o.points[a - 1].y
                    },
                    c = 20,
                    l = (r.x - Y) * (s.y - r.y) / (s.x - r.x) + r.y - X === 0,
                    d = Math.sqrt(Math.pow(Y - s.x, 2) + Math.pow(X - s.y, 2));
                1 === o.points.length ? (o.points.push({
                    x: Y,
                    y: X
                }), L(Y, X, B._strokes, o)) : !l && d > c && (o.points.push({
                    x: Y,
                    y: X
                }), L(Y, X, B._strokes, o))
            }
        }), q.on("tapend", function(e) {
            if (j) {
                n(e);
                var t = B._strokes.schema[P];
                t.points.push({
                    x: Y,
                    y: X
                }), L(Y, X, B._strokes, t), j = !1, P++
            }
        }), this.btnClear.on("tap", function() {
            H || (q.delClassNames(["success", "fail"]), e(), D.clearRect(0, 0, q.width, q.height), B._partialPicture && (D.globalAlpha = .5, o(B._partialPicture), D.globalAlpha = 1))
        }), this.btnValidate.on("tap", function() {
            var e = window.isoEngine.mapRenderer;
            if (!H && 0 !== P) {
                if (f(e.calligraphyElements) || !h[e.mapId]) return window.gui.chat.logMsg(A("ui.chat.calligraphyNothingToDo")), E(B._strokes);
                for (var t = h[e.mapId], i = !1, n = 0; n < t.length; n++)
                    if (e.calligraphyElements[t[n].element].enabledSkills.length > 0) {
                        i = !0;
                        break
                    } return i ? void E(B._strokes, t) : (window.gui.chat.logMsg(A("ui.chat.calligraphyBadContext")), E(B._strokes))
            }
        }), this.btnEncyclo.on("tap", function() {
            H || r.open("panjidexWindow", {
                drawModeleFunction: T
            })
        }), this.btnClose.on("tap", function() {
            function e(e) {
                return "panjidexWindow" === e
            }
            H || (r.getOpenWindows()
                .some(e) && r.close("panjidexWindow"), D.clearRect(0, 0, q.width, q.height), r.close(B.id), s("CLOSE_DOCUMENT"))
        })
    }
    i(998);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(52),
        s = i(91)
        .playUiSound,
        c = i(86),
        l = i(63),
        d = i(435),
        u = i(999),
        p = i(1e3),
        h = i(1001),
        f = i(32)
        .isEmptyObject,
        b = i(549),
        m = i(21),
        M = i(116),
        g = i(67),
        _ = i(66),
        A = i(17)
        .getText,
        O = 7,
        v = ["rgb(39, 77, 255)", "rgb(50, 136, 255)", "rgb(101, 191, 255)", "rgb(154, 230, 255)", "rgb(204, 250, 255)"],
        y = "rgb(255, 38, 0)";
    o(n, a), e.exports = n, n.prototype._getStrokes = function() {
        var e = u.sensorModification(this._strokes);
        return u.rescale(e, p[1])
    }
}
