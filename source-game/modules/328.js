function(e, t) {
    function i(e, t) {
        if (!e) throw new Error("Need the logger!");
        var i = t && t.haapi || {},
            n = t && t.analytics || {};
        this._mediatorUrl = n.mediatorUrl || "", this._gameId = i.id, this._hostname = i.hostname, this._forumIds = i.forum, this._gameId && this._hostname && this._forumIds || (e.error(new Error("Config malformed")), this._gameId || (this._gameId = 0), this._hostname || (this._hostname = ""), this._forumIds || (this._forumIds = {
            fr: {
                forumNewsThreadId: 0
            },
            en: {
                forumNewsThreadId: 0
            },
            es: {
                forumNewsThreadId: 0
            },
            defaultLanguage: "en"
        }))
    }
    var n = window.developmentMode ? "http" : "http"; //"https";
    e.exports = i, i.prototype.getGameId = function() {
        return this._gameId
    }, i.prototype.getEventServiceUrl = function() {
        return this._mediatorUrl
    }, i.prototype.getForumId = function(e) {
        return this._forumIds[e] || (e = this._forumIds.defaultLanguage), this._forumIds[e].forumNewsThreadId
    }, i.prototype.getForumLang = function(e) {
        return this._forumIds[e] ? e : this._forumIds.defaultLanguage
    }, i.prototype.getHostname = function() {
        return this._hostname
    }, i.prototype.getBaseUrl = function() {
        return n + "://" + this._hostname + "/json"
        // return n + "://haapi." + this._hostname + "/json"
    }
}
