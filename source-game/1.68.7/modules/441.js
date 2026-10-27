function(e, t, i) {
    function n(e) {
        r.call(this, "div", e), this.addClassNames("PropertyInfo"), this._guild = null, this._guildEmblem = new o({
            width: 40,
            height: 40
        }), this._emblemContainer = this.createChild("div", {
            className: "emblemContainer"
        }), this._emblemContainer.appendChild(this._guildEmblem), this._infoContainer = this.createChild("div", {
            className: "infoContainer"
        })
    }
    i(442);
    var o = i(437),
        a = i(56)
        .inherits,
        r = i(72);
    a(n, r), e.exports = n,
    n.prototype._preload = function(e) {
        return this._guild && this._guild[0] ? this._guildEmblem.setValue(this._guild[0].guildEmblem, !0, e) : e(null, null)
    },
    n.prototype.display = function(e) {
        var t = this;
        e = e || {}, this._guild = e.hasOwnProperty("guild") ? e.guild : null, this._emblemContainer.hide(), this._infoContainer.clearContent(), this._preload(function(i) {
            return i ? console.error("PropertyInfo preload", i) : (t._display(e.guild, e.line1, e.line2), void t.emit("rendered"))
        })
    },
    n.prototype._display = function(e, t, i) {
        e && 1 === e.length && "?" !== e[0].guildName && e[0].guildEmblem && this._emblemContainer.show();
        for (var n = this, o = 0; o < t.length; o++) e[o] && "?" !== e[o].guildName && n._infoContainer.createChild("div", {
            text: e[o].guildName,
            className: "guildName"
        }), n._infoContainer.createChild("div", {
            text: t[o],
            className: "line1"
        }), n._infoContainer.createChild("div", {
            text: i[o],
            className: "line2"
        })
    }
}
