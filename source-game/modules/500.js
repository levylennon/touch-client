function(e, t, i) {
    function n(e, t) {
        c.call(this, "div", {
            className: "WorldMapIcon"
        }), this.iconData = e;
        var i = e.dimensions,
            n = Math.min(i.h, 30),
            o = Math.floor(i.w * n / i.h),
            a = this.createChild("canvas", {
                className: "icon"
            });
        a.rootElement.width = o, a.rootElement.height = n, a.setStyle("minWidth", o + "px");
        var r = a.rootElement.getContext("2d");
        if (r.drawImage(t, i.sx, i.sy, i.sw, i.sh, 0, 0, o, n), e.infoData.nameIdOverRideFunc) this.createChild("div", {
            className: "description",
            text: e.infoData.nameIdOverRideFunc()
        });
        else {
            var s = this.createChild("div", {
                    className: "description"
                }),
                l = d.process(e.infoData.nameId.replace("\\n ", "\n"));
            s.appendChild(l)
        }
    }

    function o() {
        c.call(this, "div", {
            className: "WorldMapTooltip"
        }), this.coordinates = this.createChild("div"), this.subAreaName = this.createChild("div"), this.uniqueDrops = this.createChild("div"), this.subArea = this.createChild("div", {
            className: "subArea"
        }), this.level = this.subArea.createChild("div"), this.alliance = this.subArea.createChild("div", {
            className: "alliance"
        }), this.allianceEmblem = this.alliance.appendChild(new a({
            width: 28,
            height: 28
        })), this.allianceName = this.alliance.createChild("div"), this.icons = this.createChild("div", {
            className: "icons"
        })
    }
    var a = i(437),
        r = i(17)
        .getText,
        s = i(56)
        .inherits,
        c = i(72),
        l = i(501),
        d = i(502);
    s(n, c), s(o, c), e.exports = o, o.prototype.setCoordinates = function(e, t) {
        this.coordinates.setText(r("ui.common.coordinatesSmall") + " " + e + "," + t)
    }, o.prototype.displayIcons = function() {
        for (var e = this.icons.getChildren(), t = !0, i = 0; i < e.length; i++) {
            var n = e[i],
                o = !n.iconData.infoData.criterion || "null" === n.iconData.infoData.criterion || n.iconData.visible;
            n.toggleDisplay(o), o && (t = !1)
        }
        this.icons.toggleDisplay(!t), this.subArea.toggleDisplay(t)
    }, o.prototype.setIcons = function(e, t) {
        this._icons = e, this.icons.clearContent();
        for (var i = 0, o = e.length; i < o; i += 1) this.icons.appendChild(new n(e[i], t))
    }, o.prototype.unsetAlliance = function() {
        this.alliance.hide()
    }, o.prototype.setAlliance = function(e) {
        this.allianceName.setText(e.allianceName + " [" + e.allianceTag + "]"), this.allianceEmblem.setValue(e.allianceEmblem, !0), this.alliance.show()
    }, o.prototype.unsetSubArea = function() {
        this.subAreaName.hide()
    }, o.prototype.displayCoordinates = function() {
        this.subAreaName.hide(), this.icons.hide(), this.subArea.hide()
    }, o.prototype.setSubArea = function(e) {
        var t = this;
        this.subAreaName.setText(e.nameId), this.level.setText(r("ui.common.averageLevel") + " " + e.level), this.subAreaName.show(), this.uniqueDrops.hide(), l.getLWUniqueDropsTextBySubArea(e.id, function(e, i) {
            return e ? console.error(e) : void("" !== i && (t.uniqueDrops.setText(r("ui.legendaryWeapon.possibleDrop", i)), t.uniqueDrops.show()))
        })
    }, o.prototype.displaySubArea = function() {
        this.icons.hide(), this.subArea.show()
    }
}
