function(e, t, i) {
    function n(e) {
        this.texture = null, this.iconDimensions = null, this.iconBatch = null, this.worldMap = e, this.reset()
    }
    var o = i(18),
        a = i(1184)
        .clusterOrdering,
        r = i(1186),
        s = i(1182),
        c = i(1181)
        .ICONS_ANCHOR_POINT;
    e.exports = n, n.prototype.getClusterIcons = function(e) {
        var t = this.iconClusters[e];
        if (t) return t.icons
    }, n.prototype.reset = function() {
        this.icons = {}, this.iconClusters = {}, this.iconsPerCategory = {}, this.categoryVisbility = {}, this.zIndexedIconClusters = []
    }, n.prototype.addCluster = function(e) {
        this.iconClusters[e.id] = e, this.zIndexedIconClusters.push(e), this.zIndexedIconClusters.sort(a)
    }, n.prototype.removeCluster = function(e) {
        var t = this.zIndexedIconClusters.indexOf(e);
        return t === -1 ? void console.error(new Error("[IconBatchData.removeCluster] Trying to remove inexistent cluster")) : (delete this.iconClusters[e.id], void this.zIndexedIconClusters.splice(t, 1))
    }, n.prototype.createIconModels = function(e, t, i) {
        var n = {},
            o = Object.keys(e);
        i = i || 1;
        for (var a = 0; a < o.length; a += 1) {
            var r = e[o[a]];
            r.w *= i, r.h *= i;
            var s = c[r.className] || c.DEFAULT;
            s && (r.x = r.w * s.x, r.y = r.h * s.y), n[r.className] = r
        }
        this.texture = t, this.iconDimensions = n
    }, n.prototype.clearIconBatch = function() {
        null !== this.iconBatch && (this.iconBatch.clear(), this.iconBatch = null)
    }, n.prototype.addIcon = function(e) {
        var t = e.id;
        if (void 0 !== this.icons[t]) return void console.error("addIcon: An icon of id", t, "already exists.");
        this.icons[t] = e;
        var i = e.categoryId;
        void 0 === this.iconsPerCategory[i] ? this.iconsPerCategory[i] = [e] : this.iconsPerCategory[i].push(e), null !== this.iconBatch && this.iconBatch.addIcon(e)
    }, n.prototype.removeIcon = function(e) {
        var t = this.icons[e];
        if (void 0 !== t) {
            delete this.icons[e];
            var i = t.cluster;
            i.remove(t), 0 === i.icons.length && this.removeCluster(i);
            var n = this.iconsPerCategory[t.categoryId],
                o = n.indexOf(t.id);
            n.splice(o, 1), null !== this.iconBatch && this.iconBatch.removeIcon(t)
        }
    }, n.prototype._addIconToZoneCluster = function(e, t, i) {
        var n = this.worldMap.convertGridCoordinateToZoneId(t, i),
            o = this.iconClusters[n];
        if (void 0 === o) {
            var a = this.worldMap._convertGridToSceneCoordinate(t, i);
            o = new r(n, a.x, a.y), this.addCluster(o)
        }
        o.add(e), e.cluster = o
    }, n.prototype.createIcon = function(e, t) {
        if (!this.iconDimensions[t]) return console.error("WorldMap (IconBatchData): unknown icon " + t);
        var i = e.x,
            n = e.y,
            o = e.categoryId,
            a = new s(e.id, o, e, this.iconDimensions[t]);
        return void 0 === this.icons[e.id] ? (this._addIconToZoneCluster(a, i, n), this.addIcon(a)) : console.warn("createIcon: An icon of id", e.id, "already exists."), a
    }, n.prototype.checkIconsCriterions = function() {
        var e = this,
            t = [],
            i = [];
        return o.each(this.icons, function(n, o) {
            return void 0 === e.categoryVisbility[n.categoryId] && (e.categoryVisbility[n.categoryId] = !0), window.gui.criterionManager.evaluateCriterion(n.infoData.criterion, null, function(a) {
                if (n.infoData.criterion && "null" !== n.infoData.criterion && e.categoryVisbility[n.categoryId]) {
                    var r = n.setVisibility(a);
                    r && a ? i.push(n) : r && t.push(n)
                }
                return o()
            })
        }, function(n) {
            n && console.error(n), null !== e.iconBatch && (e.iconBatch.setVisibility(i, !0), e.iconBatch.setVisibility(t, !1))
        })
    }, n.prototype.createIconsFromInfo = function(e, t) {
        for (var i = Object.keys(e), n = 0; n < i.length; n += 1) {
            var o = e[i[n]];
            o.isHintFromDB = !0, o.worldMapId === t && this.createIcon(o, "icon_" + o.gfx)
        }
        this.checkIconsCriterions()
    }, n.prototype.hasIcon = function(e) {
        return this.icons.hasOwnProperty(e)
    }, n.prototype.getIcon = function(e) {
        return this.icons[e]
    }, n.prototype.setVisibilityOfIconType = function(e, t) {
        var i = this,
            n = this.iconsPerCategory[e];
        if (this.categoryVisbility[e] = t, void 0 !== n) {
            var a = [];
            return o.each(n, function(e, i) {
                return window.gui.criterionManager.evaluateCriterion(e.infoData.criterion, null, function(n) {
                    if (n || !n && !t) {
                        var o = e.setVisibility(t);
                        o && a.push(e)
                    }
                    return i()
                })
            }, function(e) {
                e && console.error(e), null !== i.iconBatch && i.iconBatch.setVisibility(a, t)
            })
        }
    }, n.prototype.setIconPosition = function(e, t, i) {
        var n = this.icons[e];
        if (void 0 !== n) {
            var o = n.cluster;
            if ("userPosition" === e) {
                var r = this.worldMap._convertGridToSceneCoordinate(t, i);
                o.position.x = r.x, o.position.y = r.y, this.zIndexedIconClusters.sort(a)
            } else o.remove(n), this._addIconToZoneCluster(n, t, i);
            null !== this.iconBatch && this.iconBatch.updateIconPosition(n)
        }
    }
}
