function(e, t) {
    "use strict";

    function i(e, t, i) {
        if (!e) throw new Error("Need logger!");
        if (this._logger = e, t || this._logger.error(new Error("Nickname is empty.")), this._rawNickname = t || "nickname" + n + "1234", this._rawToken = i || "", this._nickname = "", this._token = "", !this._rawToken) {
            var o = this._rawNickname.split(n);
            if (1 === o.length) this._nickname = o[0];
            else {
                var r = o.splice(o.length - 1) || [""];
                r[0].length === a || "#guest" === o.join(n) ? (this._nickname = o.join(n), this._token = r[0]) : this._logger.error(new Error("Wrong format on the nickname:" + this._rawNickname))
            }
        }
        var s = this._nickname.length,
            c = "[" === this._nickname.substring(0, 1),
            l = "]" === this._nickname.substring(s - 1, s);
        this._isOffi = c && l
    }
    var n = "#",
        o = "OFFI",
        a = 4;
    e.exports = i, i.prototype.getNickname = function() {
        return this._nickname
    }, i.prototype.getToken = function() {
        return this._token
    }, i.prototype.toString = function() {
        var e = this.getNickname();
        return this.getToken() && (e += n + this.getToken()), e
    }, i.prototype.getForDisplay = function() {
        return this._isOffi ? this.getNickname() + n + o : this.toString()
    }, i.prototype.isGuest = function() {
        return 0 === this.toString()
            .indexOf("#guest")
    }
}
