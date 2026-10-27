function(e, t, i) {
    function n(e, t) {
        a.call(this, e, t), this.state = -1, this.animated = !1
    }
    var o = i(56)
        .inherits,
        a = i(692),
        r = {
            2: !0
        };
    o(n, a), e.exports = n, n.prototype.changeState = function(e, t) {
        function i() {
            o.assignSymbol(c, l), n.animated = l
        }
        if (this.state !== e) {
            var n = this,
                o = this.animManager,
                a = this.state;
            if (this.state = e, !o.isVoidAnimManager) {
                var s = {
                        id: "AnimState" + a + "_to_AnimState" + e + "_0",
                        base: "AnimState" + a + "_to_AnimState" + e,
                        direction: 0
                    },
                    c = {
                        id: "AnimState" + e + "_0",
                        base: "AnimState" + e,
                        direction: 0
                    },
                    l = r[e] || !1;
                !t && o.template && o.template.exposedSymbols[s.id] ? (this.animated = !0, o.assignSymbol(s, !1, i)) : i()
            }
        }
    }
}
