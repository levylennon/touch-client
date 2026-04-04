function(e, t, i) {
    function n(e) {
        e = e || {}, r.call(this, {
            className: "EmblemLogo"
        }), this.addClassNames(e.className);
        var t = this;
        this.width = e.width || 100, this.height = e.height || 100, this.images = {
            crownImage: null,
            backgroundShape: null,
            symbolShape: null
        }, this._isAnkamaSymbol = !1, this.symbolWidth = Math.round(this.width * h), this.symbolHeight = Math.round(this.height * h), this.symbolPosX = Math.round((this.width - this.symbolWidth) / 2), this.symbolPosY = Math.round((this.height - this.symbolHeight) / 2), this.crownWidth = Math.round(this.width * f), this.crownHeight = Math.round(this.height * f), this.crownPosX = 0, this.crownPosY = 0;
        var i = new r;
        i.width = this.width, i.height = this.height, this.tempCtx = i.getContext(), o(this, function() {
            if (t.isLeader) return s("ui.guild.right.leader")
        })
    }
    i(438);
    var o = i(88)
        .addTooltip,
        a = i(12),
        r = i(435),
        s = i(17)
        .getText,
        c = i(16),
        l = i(56)
        .inherits,
        d = 227,
        u = 223,
        p = 189,
        h = .5,
        f = .35,
        b = 324;
    l(n, r), e.exports = n, n.prototype._generateEmblem = function() {
        var e = this.images;
        if (e.backgroundShape && e.symbolShape) {
            var t = this.getContext(),
                i = this.tempCtx;
            t.clearRect(0, 0, this.width, this.height), t.drawImage(e.backgroundShape, 0, 0, this.width, this.height);
            var n, o = this.backgroundColor;
            if (o) {
                var a = t.getImageData(0, 0, this.width, this.height),
                    r = a.data,
                    s = o[0] / d,
                    c = o[1] / u,
                    l = o[2] / p;
                for (n = 0; n < r.length; n += 4) r[n] *= s, r[n + 1] *= c, r[n + 2] *= l;
                t.putImageData(a, 0, 0)
            }
            i.clearRect(0, 0, this.width, this.height), i.drawImage(e.symbolShape, this.symbolPosX, this.symbolPosY, this.symbolWidth, this.symbolHeight);
            var h = this.symbolColor;
            if (h && !this._isAnkamaSymbol) {
                var f = i.getImageData(0, 0, this.width, this.height),
                    b = f.data;
                for (n = 0; n < b.length; n += 4) 0 !== b[n + 3] && (b[n] = h[0], b[n + 1] = h[1], b[n + 2] = h[2]);
                i.putImageData(f, 0, 0)
            }
            t.drawImage(i.canvas, 0, 0, this.width, this.height), this.isLeader && t.drawImage(e.crownImage, this.crownPosX, this.crownPosY, this.crownWidth, this.crownHeight)
        }
    }, n.prototype.setValue = function(e, t, i) {
        var n = this,
            o = [],
            r = [];
        if (t = t || e.dec2rgb, e.hasOwnProperty("guild") && (t = !0, this.isLeader = e.guild.allianceLeader, e = e.guild.guildEmblem), e.hasOwnProperty("backgroundColor") && (t ? this.backgroundColor = c.hexToRgb(Number(e.backgroundColor)
                .toString(16)) : this.backgroundColor = e.backgroundColor), e.hasOwnProperty("backgroundShape")) {
            var s = "gfx/emblems/icons/" + (e.isAlliance ? "backalliance" : "back") + "/" + e.backgroundShape + ".png";
            o.push(s), r.push("backgroundShape")
        }
        if (e.hasOwnProperty("symbolShape")) {
            this._isAnkamaSymbol = e.symbolShape === b;
            var l = "gfx/emblems/icons/up/" + e.symbolShape + ".png";
            o.push(l), r.push("symbolShape")
        }
        e.hasOwnProperty("symbolColor") && (this.symbolColor = t ? c.hexToRgb(Number(e.symbolColor)
            .toString(16)) : e.symbolColor), this.isLeader && !this.images.crownImage && (o.push("ui/tx_crown.png"), r.push("crownImage")), a.loadImages(o, null, function(e) {
            if (n && n.rootElement) {
                for (var t = 0; t < r.length; t += 1) n.images[r[t]] = e[t];
                if (n._generateEmblem(), "function" == typeof i) return i()
            } else if ("function" == typeof i) return i()
        })
    }
}
