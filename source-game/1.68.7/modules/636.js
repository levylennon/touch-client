function(e, t, i) {
    function n(e) {
        o.call(this, e);
        var t = this.rawValue.split(",");
        t.length > 1 ? (this.value = parseInt(t[0], 10), this._jobLevel = parseInt(t[1], 10)) : (this.value = parseInt(this.value, 10), this._jobLevel = -1), this.currentJobLevel = 0
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(130),
        s = i(56)
        .inherits,
        c = i(611);
    s(n, o), n.prototype._getText = function() {
        if (!this._jobName) return "";
        var e = "",
            t = this._jobName,
            i = "";
        switch (this._jobLevel >= 0 && (i = " " + a("ui.common.short.level") + " " + this._jobLevel), this.operatorToken) {
            case c.equal:
                e = t + i;
                break;
            case c.different:
                e = a("ui.common.dontBe") + " " + t + i;
                break;
            case c.superior:
                e = t + " >" + i;
                break;
            case c.inferior:
                e = t + " <" + i
        }
        return e
    }, n.prototype.getCriterion = function() {
        return this.currentJobLevel
    }, n.prototype._isRespected = function(e, t) {
        function i() {
            var i = a[n.value];
            return i && i.experience ? (n.currentJobLevel = i.experience.jobLevel, o.prototype._isRespected(e, t)) : t(!1)
        }
        var n = this,
            a = window.gui.playerData.jobs.list;
        return r.getDataMap("Jobs", [this.value], null, function(e, t) {
            if (e) return console.error(e), i();
            var o = t[n.value];
            return n._jobName = o && o.nameId, i()
        })
    }, e.exports = n
}
