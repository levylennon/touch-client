function(e, t) {
    function i(e, t) {
        this.element = e, this.isAddingClasses = t, this.locks = {}
    }
    e.exports = i, i.prototype.addSpinner = function(e) {
        var t = this.locks[e];
        return t ? console.warn("Spinner already set for " + e) : (this.locks[e] = !0, this.element.addClassNames("spinner"), void(this.isAddingClasses && this.element.addClassNames(e)))
    }, i.prototype.removeSpinner = function(e) {
        var t = this.locks[e];
        if (t) {
            this.locks[e] = !1, this.isAddingClasses && this.element.delClassNames(e);
            for (var i in this.locks)
                if (this.locks[i]) return;
            this.element.delClassNames("spinner")
        }
    }, i.prototype.clearSpinner = function() {
        for (var e in this.locks) this.locks[e] && this.removeSpinner(e);
        this.locks = {}
    }, i.prototype.isActive = function() {
        for (var e in this.locks)
            if (this.locks[e]) return !0;
        return !1
    }
}
