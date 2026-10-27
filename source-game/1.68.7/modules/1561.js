function(e, t, i) {
    var n = i(1489),
        o = 14,
        a = 40;
    n.prototype._logMap = function(e) {
        e = e || [];
        for (var t = {}, i = 0; i < e.length; i++) t[e[i]] = !0;
        var n, r, s, c, l = this.mapRenderer.map,
            d = this.actorManager.userActor,
            u = "",
            p = [];
        for (n = 0; n < o; n++) u += "┌───┐   ";
        var h = !0;
        for (r = 0; r < a; r++) {
            for (u += "\n", u += h ? "│" : "├", n = 0; n < o; n++) s = r * o + n, c = s < 100 ? " " : "", c += s, c += s < 10 ? " " : "", u += h ? "%c" + c + "%c├───┤" : "───┤%c" + c + "%c├", t[s] ? p.push("background-color: #FF0") : l && 2 !== (2 & l.cells[s].l) ? p.push("background-color: #00F") : l && 0 === (1 & l.cells[s].l) ? p.push("background-color: #113; color: #779") : d.cellId === s ? p.push("background-color: #CD8; color: #072") : this.actorManager.getActorsOnCell(s)
                .length > 0 ? p.push("background-color: #F88") : p.push("background-color: #FFF"), p.push("background-color: #FFF, color: #000");
            h = !h
        }
        for (u += "\n ", n = 0; n < o; n++) u += "   └───┘";
        p.unshift(u), console.log.apply(window.console, p)
    }
}
