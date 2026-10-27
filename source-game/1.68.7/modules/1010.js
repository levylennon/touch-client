function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "CharactersSpace"
        }), this._tiles = [], this.createChild("div", {
            className: "title",
            text: c("ui.connection.whosGift")
        });
        var e = this.createChild("div", {
            className: "content"
        });
        this._scroll = e.appendChild(new s({
            className: "scroll"
        })), this._scrollContent = this._scroll.content.createChild("div", {
            className: "scrollContent"
        });
        var t = this.createChild("div", {
            className: "characterContainer"
        });
        this._characterDisplayWebGL = t.appendChild(new l({
            scale: "fitin",
            horizontalAlign: "center"
        })), this._loadingOverlay = t.createChild("div", {
            className: "loadingOverlay",
            hidden: !0,
            text: c("ui.connection.assignGift")
        })
    }
    i(1011);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(1012),
        s = i(453),
        c = i(17)
        .getText,
        l = i(689);
    o(n, a), e.exports = n, n.prototype.update = function(e) {
        function t() {
            i._deselecteAll(), this.addClassNames("selected"), i.emit("selectTile", this.id), i._characterDisplayWebGL.release(), i._characterDisplayWebGL.setLook(this.entityLook, {
                boneType: "characters/",
                skinType: "characters/"
            })
        }
        var i = this;
        this._scrollContent.clearContent(), this._tiles = [];
        for (var n = 0, o = e.length; n < o; n += 1) {
            var a = e[n],
                s = this._scrollContent.appendChild(new r(a.id, a.name, a.level, a.entityLook));
            i._tiles.push(s), s.on("select", t)
        }
        this._scroll.refresh(), this._tiles[0] && t.call(this._tiles[0])
    }, n.prototype._deselecteAll = function() {
        for (var e = 0, t = this._tiles.length; e < t; e += 1) {
            var i = this._tiles[e];
            i.delClassNames("selected")
        }
    }, n.prototype.setAssignLoading = function(e) {
        this._loadingOverlay.toggleDisplay(e), this._loadingOverlay.addClassNames("spinner")
    }, n.prototype.reset = function() {
        this._deselecteAll(), this._characterDisplayWebGL.release()
    }
}
