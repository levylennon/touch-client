function(e, t, i) {
    function n(e, t, i) {
        this.mountData = null, this.box = e.createChild("div", {
            className: "equipBox"
        }), this._createTile(t, i), this.placeholder = new s(this.box), this.placeholder.setText(r("tablet.mount.noEquipped"))
    }
    i(980);
    var o = i(12),
        a = i(977),
        r = i(17)
        .getText,
        s = i(767),
        c = i(63);
    e.exports = n, n.prototype._createTile = function(e, t) {
        var i = this.tile = this.box.createChild("div", {
            className: ["mount", "neutralTile"]
        });
        e.getTile = function(e) {
            return i.id === e ? i : null
        }, i.createChild("div", {
            className: "title",
            text: r("tablet.mount.equipped")
        }), this.mountImg = i.createChild("div", {
            className: "mountImg"
        });
        var n = i.createChild("div", {
            className: "nameAndLevel"
        });
        this.mountName = n.createChild("div", {
            className: "mountName"
        }), this.mountLevel = n.createChild("div", {
            className: "level"
        }), c(i), i.on("tap", t), i.setTileSelected = this._setTileSelected.bind(this), i.refreshDisplay = this._refreshTile.bind(this), i.highlightTile = function() {}, i.id = null, i.mountData = null, i.selected = !1, i.room = e, i.equipBox = this, this.dragInfo = new a(e.breedingWindow, i)
    }, n.prototype.updateMount = function(e) {
        var t = this.mountData,
            i = Boolean(e);
        return this.tile.toggleDisplay(i), this.placeholder.toggleDisplay(!i), e ? (this.mountData = e, this._refreshTile(), this.dragInfo.setMount(e, this.mountImg)) : (this.mountData = null, this.tile.addClassNames("neutralTile"), this.tile.delClassNames("focusedTile")), t
    }, n.prototype._setTileSelected = function(e) {
        e = void 0 === e || e, this.tile.toggleClassName("focusedTile", e), this.tile.toggleClassName("neutralTile", !e), this.tile.selected = e
    }, n.prototype._refreshTile = function() {
        var e = this.mountData;
        this.tile.mountData = e, this.tile.id = e.id, this.mountName.setText(e.name || r("ui.common.noName")), this.mountLevel.setText(r("ui.common.short.level") + " " + e.level);
        var t = this;
        o.preloadImage("gfx/mounts/" + e.model + ".png", function(e) {
            t.mountImg && t.mountImg.rootElement && t.mountImg.setStyle("backgroundImage", e)
        })
    }
}
