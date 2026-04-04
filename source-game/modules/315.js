function(e, t, i) {
    function n(e, t, i) {
        a.call(this, e, i), this._haapiConfig = t, this._paths = {
            getForumTopicsList: "/Ankama/v5/Forum/TopicsList",
            getForumPostsList: "/Ankama/v5/Forum/PostsList"
        }
    }
    var o = i(56)
        .inherits,
        a = i(165),
        r = i(14),
        s = r(),
        c = "dofustouch",
        l = {
            forum: c,
            page: 1,
            size: 20,
            account_id: 0
        };
    e.exports = n, o(n, a), n.prototype.describe = function() {
        return this.formatHaapiPaths("Ankama/Forum", this._paths)
    }, n.prototype.getForumTopicsList = function(e) {
        var t = s.Config || {},
            i = JSON.parse(JSON.stringify(l));
        i.lang = this._haapiConfig.getForumLang(t.language), i.thread_id = this._haapiConfig.getForumId(t.language);
        var n = this._haapiConfig.getBaseUrl() + this._paths.getForumTopicsList;
        this.fetchDirectly(n, i, e)
    }, n.prototype.getForumPostsList = function(e, t) {
        var i = s.Config || {},
            n = JSON.parse(JSON.stringify(l));
        n.topic_id = e.topicId, n.lang = this._haapiConfig.getForumLang(i.language);
        var o = this._haapiConfig.getBaseUrl() + this._paths.getForumPostsList;
        this.fetchDirectly(o, n, t)
    }
}
