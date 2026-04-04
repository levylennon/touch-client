function(e, t, i) {
    function n() {
        a.call(this), this.currentUniqueCriterions = []
    }

    // ### Criterios Managfer 

    function o(e, t) {
        switch (t) {
            case c.CRITERION_OK:
                return !0;
            case c.CRITERION_FORBIDDEN:
                return console.error(new Error("Criterion " + e + " is forbidden.")), !1;
            case c.CRITERION_MALFORMED:
                return console.error(new Error("Criterion " + e + " is malformed.")), !1
        }
        return !1
    }
    var a = i(59),
        r = i(56)
        .inherits,
        s = i(609),
        c = i(612),
        l = i(611),
        d = 3e5,
        u = {},
        p = 500,
        h = i(613),
        f = i(614),
        b = i(615),
        m = i(616),
        M = i(617),
        g = i(618),
        _ = i(619),
        A = i(621),
        O = i(622),
        v = i(623),
        y = i(624),
        z = i(625),
        w = i(626),
        T = i(627),
        C = i(628),
        I = i(629),
        S = i(630),
        E = i(631),
        L = i(632),
        N = i(633),
        R = i(634),
        q = i(635),
        x = i(636),
        B = i(637),
        D = i(638),
        W = i(639),
        P = i(640),
        k = i(641),
        F = i(642),
        H = i(643),
        U = i(644),
        G = i(645),
        j = i(646),
        Y = i(647),
        X = i(648),
        V = i(650),
        Q = i(651),
        K = i(652),
        J = i(653),
        Z = i(654),
        $ = i(655),
        ee = i(656),
        te = i(657),
        ie = i(658),
        ne = i(659),
        oe = i(660),
        ae = i(661),
        re = i(662),
        se = i(663),
        ce = i(664),
        le = i(665),
        de = i(666),
        ue = i(667),
        pe = {
            Ad: A,
            Ca: G,
            CA: G,
            ca: G,
            Cc: G,
            CC: G,
            cc: G,
            Ce: G,
            CE: G,
            CD: G,
            CH: G,
            Ci: G,
            ci: G,
            CI: G,
            CL: G,
            CM: G,
            CP: G,
            Cs: G,
            CS: G,
            cs: G,
            Cv: G,
            CV: G,
            cv: G,
            Cw: G,
            CW: G,
            cw: G,
            Ct: G,
            CT: G,
            CU: O,
            OA: f,
            PX: h,
            Ps: b,
            Pa: m,
            Oz: M,
            Ow: g,
            Ox: _,
            Po: v,
            PU: y,
            Pk: z,
            PG: w,
            Sy: T,
            Sd: I,
            PE: S,
            Pb: E,
            Pg: L,
            Pw: N,
            Py: R,
            Px: q,
            PJ: x,
            Pj: x,
            PK: B,
            PL: D,
            MK: W,
            PR: P,
            PQ: k,
            SG: F,
            PN: H,
            PO: U,
            Pp: j,
            PP: j,
            Qa: Y,
            Qc: Y,
            Qf: Y,
            Qo: X,
            Qs: V,
            Pq: Q,
            Oq: K,
            Pz: J,
            Pf: Z,
            SI: $,
            PS: ee,
            PA: te,
            Pr: ie,
            PB: oe,
            PT: ne,
            Pt: le,
            Sc: C,
            Sv: C,
            SD: ue,
            Wf: de,
            PZ: ae,
            BI: re,
            PW: se,
            Pn: ce,
            Oo: ce,
            Ms: O
        };
    r(n, a), e.exports = n, n.prototype.initialize = function() {
        var e = this;
        this.batches = [], this.currentBatchId = 0, window.connectionManager.on("CriterionsResultMessage", function(t) {
            e._handleCriterionsResult(t);
        }), window.connectionManager.on("disconnect", function() {
            e._reset()
        })
    }, n.prototype._reset = function() {
        for (var e = 0; e < this.batches.length; e++) {
            var t = this.batches[e];
            t.bufferTimeout && (window.clearTimeout(t.bufferTimeout), t.bufferTimeout = null)
        }
        this.batches = [], this.currentBatchId = 0
    }, n.prototype._handleCriterionsResult = function(e) {
        for (var t = 0; t < this.batches.length; t++) {
            var i = this.batches[t];
            if (e.results.length === i.filteredCriterionString.length) {
                var n, a, r = !0;
                for (n = 0; n < e.results.length; n++)
                    if (a = e.results[n], i.filteredCriterionString.indexOf(a.criterion) === -1) {
                        r = !1;
                        break
                    } if (r) {
                    for (n = 0; n < i.criterionsString.length; n++) {
                        var s = i.criterionsString[n];
                        a = !1;
                        for (var c = 0; c < e.results.length; c++)
                            if (e.results[c].criterion === s) {
                                a = e.results[c].result;
                                break
                            } var l = i.criterions[n];
                        l && (u[i.criterionsString[n]] = {
                            result: a,
                            startTime: Date.now()
                        }, l.finishResult(o(i.criterionsString[n], a)))
                    }
                    return this.currentBatchId--, this.batches.splice(t, 1)
                }
            }
        }
    }, n.prototype.addCriterionCheckToBatch = function(e, t) {
        var i = this,
            n = u[t];
        if (n) {
            if (Date.now() - n.startTime < d) return e.finishResult(o(t, n.result));
            delete u[t]
        }
        this.batches[this.currentBatchId] || (this.batches[this.currentBatchId] = {
            criterions: [],
            criterionsString: [],
            filteredCriterionString: [],
            bufferTimeout: null
        }), this.currentBatch = this.batches[this.currentBatchId], this.currentBatch.criterions.push(e), this.currentBatch.criterionsString.push(t), this.currentBatch.bufferTimeout || (this.currentBatch.bufferTimeout = window.setTimeout(function() {
            i.currentBatchId++, i.currentBatch.filteredCriterionString = i.currentBatch.criterionsString.filter(function(e, t) {
                return i.currentBatch.criterionsString.indexOf(e) === t
            }), window.dofus.sendMessage("CriterionsRequestMessage", {
                criterions: i.currentBatch.filteredCriterionString
            })
        }, p))
    }, n.prototype._createUniqueCriterion = function(e) {
        var t = e.substring(0, 2);
        if (!pe[t]) return console.warn("unknown criterion: " + t), null;
        var i = new pe[t](e);
        return i instanceof C && this.addCriterionCheckToBatch(i, e), i
    }, n.prototype._parseAndCreateCriterion = function(e) {
        if (e = e.replace(/[\s+]/g, ""), "null" === e) return null;
        if (e.indexOf("(") === -1 && e.indexOf("&") === -1 && e.indexOf("|") === -1 && e.indexOf(")") === -1) return this._createUniqueCriterion(e);
        2 === e.split("(")
            .length && 2 === e.split(")")
            .length && "(" === e.charAt(0) && ")" === e.charAt(e.length - 1) && (e = e.slice(1, -1));
        for (var t = "", i = !1, n = -1, o = e.length, a = new s(e), r = 0; r < e.length; r++) {
            var c = e[r];
            r === o - 1 ? (")" !== c && (t += c), a.addSubCriterion(this._parseAndCreateCriterion(t))) : i ? ")" === c ? 0 === n ? i = !1 : (n -= 1, t += c) : ("(" === c && (n += 1), t += c) : "(" === c ? (n += 1, n > 0 && (t += c), i = !0) : "&" === c || "|" === c ? (a.addSubCriterion(this._parseAndCreateCriterion(t)), a.setOperatorToken(c), n = -1, t = "") : t += c
        }
        return a
    }, n.prototype.evaluateCriterion = function(e, t, i) {
        function n(e, t) {
            var i = {
                result: e.getEvaluationValue(),
                text: e.getText(),
                operatorText: e.getOperatorText(),
                textFromCriterion: e.getTextFromCriterion(),
                operatorToken: e.operatorToken,
                otherCriterions: [],
                ignoreSubCriterions: !1
            };
            if (t.push(i), e.subCriterions)
                for (var o = 0; o < e.subCriterions.length; o++) e.subCriterions[o].hasGroupText() && (i.ignoreSubCriterions = !0), n(e.subCriterions[o], i.otherCriterions)
        }
        if ("null" === e || !e) return i(!0, null);
        var o = this._parseAndCreateCriterion(e);
        return o ? o.evaluate(t, function(e) {
            var t = [];
            return n(o, t), i(e, t)
        }) : i(!1, null)
    }, n.prototype.evaluateAndFormatConditions = function(e, t, i, n) {
        var o = [];
        return e && "null" !== e ? (i = i || "", window.gui.criterionManager.evaluateCriterion(e, t, function(e, t) {
            if (!t) return n(e, o);
            var a = t[0];
            if (a.ignoreSubCriterions || 0 === a.otherCriterions.length) return "" !== a.text && o.push({
                text: a.text,
                isMalus: !a.result
            }), n(e, o);
            for (var r = !0, s = a.operatorToken === l.or, c = 0; c < a.otherCriterions.length; c++) {
                var d = a.otherCriterions[c];
                if ("" !== d.text) {
                    var u = "";
                    s && !r && (u += " " + a.operatorText + " "), u += i, r || d.operatorToken !== l.or || (u += d.operatorText + " "), u += d.text;
                    var p = s ? !a.result : !d.result;
                    o.push({
                        text: u,
                        isMalus: p
                    }), r = !1
                }
            }
            return n(e, o)
        })) : n(!1, o)
    }
}
