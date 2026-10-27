function(e, t, i) {
    function n(e) {
        for (var t = ["&", "%", "?", "#", "§", "!"], i = t.length, n = "", o = 0; o < e; o++) {
            var a = Math.floor(Math.random() * i);
            n += t[a]
        }
        return n
    }

    function o() {
        var e = this;
        this.censoredMap = {}, a.getAllDataMap("CensoredWords", function(t, i) {
            t && console.error("Censor getAllDataMap:", t);
            var n = window.Config.language;
            for (var o in i) i[o].language === n && (e.censoredMap[i[o].word] = !0)
        })
    }
    var a = i(130),
        r = i(60);
    e.exports = o, o.prototype.filterCensoredWords = function(e) {
        if (!r.getValue("option-censorship", !0)) return e;
        for (var t = e.split(" "), i = 0; i < t.length; i++) this.censoredMap[t[i].toLowerCase()] && (t[i] = n(t[i].length));
        return t.join(" ")
    }
}
