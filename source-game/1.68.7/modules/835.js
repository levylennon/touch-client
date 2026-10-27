function(e, t, i) {
    function n() {
        this._adminMenuId = null,
        this._myRank = null,
        this._lang = null,
        this._url = null,
        this._isModerator = null,
        this._isModeratorOrMore = null
    }
    var o = i(52),
        a = ["lookinvis"],
        r = ["god * true", "adminhide true", "unmutable * true", "adminaway true", "admininvisible true"],
        s = ["god * true", "adminhide true", "adminaway true", "looklion"],
        c = i(602),
        l = ["fr", "en", "es"];
    e.exports = n, n.prototype.initialize = function(e) {
        e = e || {}, this._initTheLang(e.lang)
    },
        n.prototype.connect = function(e) {
        e = e || {}, this._initTheLang(e.lang)
    },
        n.prototype.disconnect = function() {
        this._adminMenuId = null,
        this._myRank = null,
        this._url = null,
        this._lang = null,
        this._isModeratorOrMore = null,
        this._isModerator = null
    },
        n.prototype._initTheLang = function(e) {
        this._lang = e,
        this._lang || (this._lang = "fr", console.error("AdminMenu#initialize: lang is missing, fallback to fr.")), l.indexOf(this._lang) === -1 && (console.warn("AdminMenu#initialize: lang", this._lang, "is not authorized, fallback to en."), this._lang = "en")
    },
    n.prototype.setAccountCapabilities = function(e) {
        // Update Rights Account  
        e._url && (this._url = e._url),
        e._myModeratorRank && Array.isArray(e._myModeratorRank) && (
            this._myRank = e._myModeratorRank,
            this.setAdminMenuId(this._myRank[this._myRank.length - 1])),

        this._isModeratorOrMore = e.status >= c.MODERATOR,
        this._isModerator = e.status === c.MODERATOR,
        this._hasSpecialStartupCmds = e._hasSpecialStartupCmds,
        this._accountRightsMap = e._accountRightsMap
    },
    n.prototype.runStartupCmd = function(e) {
        if (e = e || {}, this._isModerator) {
            var t;
            if (e.isOnCharacterSelection)
                for (t = 0; t < r.length; t += 1) o.getWindow("adminConsole").runCommand(r[t]);
            if (e.isOnRP)
                for (t = 0; t < a.length; t += 1) o.getWindow("adminConsole").runCommand(a[t])
        }
        if (this._hasSpecialStartupCmds && e.isOnRP)
            for (t = 0; t < s.length; t += 1) o.getWindow("adminConsole").runCommand(s[t])
    }, 
    n.prototype.getAdminMenuId = function() {
        var e = null,
            t = this._adminMenuId;
        return this._isModeratorOrMore && t && this.getURL() && (e = t), e
    },
    n.prototype.getURL = function() {
        return this._url ? this._url + this._lang + "/" : null
    },
    n.prototype.setAdminMenuId = function(e) {
        return !!this._canUse(e) && (this._adminMenuId = e, o.getWindow("adminConsole")
            .logMessage('adminMenu "' + e + '" loaded.', "Debug"), !0)
    },
    n.prototype._canUse = function(e) {
        return !(null === this._myRank || !this.getURL()) && this._myRank.indexOf(e) !== -1
    },
    n.prototype.helpToString = function() {
        var e = [];
        if (!Array.isArray(this._myRank)) return e.join("\n");
        for (var t = 0; t < this._myRank.length; t += 1) {
            var i = this._myRank[t];
            this._canUse(i) && e.push(i)
        }
        return e.join("\n")
    }
}
