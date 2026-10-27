function(e, t, i) {
    function n(e) {
        o.call(this, e)
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(56)
        .inherits;
    r(n, o), n.prototype._getText = function() {
        var e;
        switch (this.operatorToken) {
            case "!":
            case "=":
                e = this.operatorToken + " " + this.rawValue;
                break;
            case "~":
                e = "= " + this.rawValue;
                break;
            case "S":
            case "s":
                e = a("ui.criterion.startWith", [this.rawValue]);
                break;
            case "E":
            case "e":
                e = a("ui.criterion.endWith", [this.rawValue]);
                break;
            case "v":
                e = a("ui.criterion.valid");
                break;
            case "i":
                e = a("ui.criterion.invalid");
                break;
            default:
                e = ""
        }
        return a("ui.common.name") + " " + e
    }, n.prototype._isRespected = function(e, t) {
        var i = window.gui.playerData.characterBaseInformations.name,
            n = !1;
        switch (this.operatorToken) {
            case "=":
                n = i === this.rawValue;
                break;
            case "!":
                n = i !== this.rawValue;
                break;
            case "~":
                n = i.toLowerCase() === this.rawValue.toLowerCase();
                break;
            case "S":
                n = 0 === i.toLowerCase()
                    .indexOf(this.rawValue.toLowerCase());
                break;
            case "s":
                n = 0 === i.indexOf(this.rawValue);
                break;
            case "E":
                n = i.toLowerCase()
                    .indexOf(this.rawValue.toLowerCase()) === i.length - this.rawValue.length;
                break;
            case "e":
                n = i.indexOf(this.rawValue) === i.length - this.rawValue.length
        }
        return t(n)
    }, e.exports = n
}
