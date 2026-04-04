function(e, t, i) {
    function n() {
        o.call(this, "div", {
            hidden: !0
        }), this._styleSheet = null, this._title = null, this._author = null, this._subTitle = null, this._pages = null
    }
    var o = i(72),
        a = i(506),
        r = i(56)
        .inherits,
        s = i(23)
        .events,
        c = i(16),
        l = /(.*?)(<img.*?\/?>)/gi,
        d = /#+/g,
        u = /<a\shref=['"](.*?)['"]\s*>(.*?)<\/a>/gi,
        p = /([-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))/g,
        h = "startquest",
        f = "validateobjective",
        b = "map",
        m = "url";
    r(n, o), e.exports = n, n.prototype._linkHandler = function(e) {
        var t = e.split(",");
        t[0] === h ? (window.dofus.sendMessage("QuestStartRequestMessage", {
            questId: t[1]
        }), this.close()) : t[0] === f ? (window.dofus.sendMessage("QuestObjectiveValidationMessage", {
            questId: t[1],
            objectiveId: t[2]
        }), this.close()) : t[0] === b && window.gui.emit("CompassUpdateMessage", {
            type: a.COMPASS_TYPE_SIMPLE,
            worldX: ~~t[1],
            worldY: ~~t[2]
        })
    }, n.prototype.close = function() {
        this.emit("close")
    }, n.prototype._getImageData = function(e) {
        var t = new RegExp(l),
            i = t.exec(e);
        if (!i) return null;
        for (var n, o = i[2], a = new RegExp(p), r = {}; null !== (n = a.exec(o));) n.index === a.lastIndex && a.lastIndex++, r[n[1]] = n[2] || n[3];
        var s = {};
        s.regExpResult = i[0], s.before = i[1];
        var c = r.src.replace(d, ""),
            u = c.split(",");
        return c = "swf" === u[0] ? "gfx/documents/swf/" + u[1] + ".png" : "gfx/documents/" + u[1] + "." + u[0], s.imageId = c, s.width = parseInt(r.width, 10), s.height = parseInt(r.height, 10), s.hspace = parseInt(r.hspace, 10), s.align = r.align || "", s
    }, n.prototype._getAllImagesData = function(e) {
        for (var t, i = [], n = new RegExp(l); null !== (t = n.exec(e));) i.push(this._getImageData(t[0]));
        return i
    }, n.prototype._getAllLinks = function(e) {
        for (var t, i = [], n = new RegExp(u); null !== (t = n.exec(e));) i.push({
            text: t[2],
            href: t[1].replace("event:", ""),
            original: t[0]
        });
        return i
    }, n.prototype._formatText = function(e) {
        var t = e;
        return t = t.replace(/\n/g, " "), t = t.replace(/\r/g, " "), t = t.replace(/\t/g, ""), t = t.replace(/<p><\/p>/g, "<br/>")
    }, n.prototype._formatLinks = function(e) {
        function t(e, t, n) {
            n ? e.addEventListener(s.end, function(e) {
                c.openUrlInAppBrowser(t), e.preventDefault()
            }) : e.addEventListener(s.end, function(e) {
                i._linkHandler(t), e.preventDefault()
            })
        }
        var i = this,
            n = new o("div");
        n.setHtml(e);
        for (var a = n.rootElement.getElementsByTagName("a"), r = 0, l = a.length; r < l; r++) {
            var d = a[r],
                u = d.href.replace("event:", "");
            u.indexOf(m) !== -1 ? t(d, u.split(",")[1], !0) : (t(d, u), d.href = "#")
        }
        return n
    }
}
