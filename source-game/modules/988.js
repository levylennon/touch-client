function(e, t, i) {
    function n(e, t, i, n) {
        this.breedingWindow = e, this.id = t, this.name = i || "", this.capacity = n || Number.POSITIVE_INFINITY, this.box = null, this.reset()
    }

    function o() {
        var e = this.room;
        e.scrollStartTime = Date.now(), e.isScrolling = !0, e.refreshInterval || (e.refreshInterval = window.setInterval(s, b, e))
    }

    function a() {
        this.room.isScrolling = !1
    }

    function r() {
        var e = this.room;
        e.isScrolling = !1, e._stopTicker()
    }

    function s(e) {
        Date.now() - e.scrollStartTime < m || (e._refreshView(), e.isRefreshComplete && !e.isScrolling && e._stopTicker())
    }

    function c(e, t, i, n, o, a) {
        if (n <= i) return 0;
        var r, s, c;
        o ? (c = -1, r = n - 1, s = i - 1) : (c = 1, r = i, s = n);
        for (var l = 0, d = r; d !== s; d += c) {
            var u = t[d];
            if (u) {
                if (u.prepareToShow(d, e) && (l++, a && l === a)) break
            } else {
                var p = "Cannot find the title at position " + d + " inside range " + r + " to " + s;
                p += " and max length of " + t.length, console.error(new Error(p))
            }
        }
        return l
    }
    i(989);
    var l = i(981),
        d = i(453),
        u = 4,
        p = 37,
        h = 14,
        f = 1.5,
        b = 90,
        m = 100,
        M = 2;
    e.exports = n, n.prototype.reset = function() {
        this.delayedSetup = 0, this._stopTicker(), this.refreshInterval = null, this.lastRenderedScrollY = -1, this.scrollStartTime = 0, this.isScrolling = !1, this.isRefreshComplete = !0, this.numMounts = 0, this.mountMap = {}, this.selectedTiles = {}, this.numSelected = 0, this.isLocked = !1, this.needsScrollerRefresh = !1, this.needRefilter = !1, this.hasNoFilter = !0, this.hasNoSorter = !0, this.tilesPerPage = 0, this.allTiles = [], this.allVisibleTiles = [], this.box && (this.box.clearContent(), this.scroller.goToTop())
    }, n.prototype.createBox = function(e) {
        var t = this.scroller = e.appendChild(new d(null, {
            maxSpeed: f,
            bounce: !0
        }));
        t.room = this, t.setStyle("maxHeight", e.rootElement.clientHeight + "px"), t.on("scrollStart", o), t.on("scrollEnd", a), t.on("scrollCancel", r);
        var i = t.content.createChild("div", {
            className: ["roomBox", this.id]
        });
        return this.box = i.createChild("div", {
            className: "tileRoom"
        }), this.scrollGrip = i.createChild("div", {
            className: "scrollGrip"
        }), t
    }, n.prototype.getTile = function(e) {
        return this.box.getChild(e)
    }, n.prototype.setMountSelected = function(e, t) {
        var i = this.getTile(e);
        return i ? (t ? i.selected || (this.selectedTiles[e] = i, this.numSelected++) : i.selected && (delete this.selectedTiles[e], this.numSelected--), i.setTileSelected(t), i) : console.error("Invalid tileId:", e)
    }, n.prototype.setHightlightedMount = function(e) {
        var t = this.setMountSelected(e, !0);
        t.highlightTile()
    }, n.prototype.selectAll = function() {
        for (var e = this.allVisibleTiles, t = 0; t < e.length; t++) {
            var i = e[t];
            i.selected || (this.selectedTiles[i.id] = i, i.setTileSelected(!0))
        }
        this.numSelected = e.length
    }, n.prototype.unselectAll = function() {
        for (var e in this.selectedTiles) {
            var t = this.selectedTiles[e];
            t.setTileSelected(!1)
        }
        this.selectedTiles = {}, this.numSelected = 0
    }, n.prototype.getSelection = function() {
        return Object.keys(this.selectedTiles)
    }, n.prototype.getNumSelected = function() {
        return this.numSelected
    }, n.prototype.getNumHiddenMounts = function() {
        return this.allTiles.length - this.allVisibleTiles.length
    }, n.prototype.addMount = function(e) {
        this.mountMap[e.id] = e, this.numMounts++;
        var t = new l(e, this);
        this.box.appendChild(t), this.allTiles.push(t), this.hasNoSorter && this.allVisibleTiles.push(t), this.needsScrollerRefresh = !0
    }, n.prototype.removeMount = function(e) {
        var t = this.mountMap[e];
        if (!t) return console.warn("removeMount: invalid ID:", e);
        var i = this.box.getChild(e);
        delete this.mountMap[e], this.numMounts--, i.selected && (delete this.selectedTiles[e], this.numSelected--);
        var n = this.allTiles.indexOf(i);
        this.allTiles.splice(n, 1);
        var o = this.allVisibleTiles;
        n = o.indexOf(i), o.splice(n, 1);
        for (var a = o.length - 1; a >= n; a--) {
            var r = o[a];
            if (r) r.markForReorder();
            else {
                var s = "rm: Cannot find the title at position " + a + " inside range " + o.length - 1 + " to " + n;
                s += " and max length of " + o.length, console.error(new Error(s))
            }
        }
        i.hideTile(), this.box.removeChild(e), this.needsScrollerRefresh = !0
    }, n.prototype._sortByProperty = function(e, t) {
        function i(t, i) {
            var o = t.mountData,
                a = i.mountData,
                r = o[e],
                s = a[e];
            return o.receivedData && void 0 !== o.receivedData[e] && null !== o.receivedData[e] && (r = o.receivedData[e]), a.receivedData && void 0 !== a.receivedData[e] && null !== a.receivedData[e] && (s = a.receivedData[e]), r > s ? n : r < s ? -n : o.id > a.id ? n : o.id < a.id ? -n : 0
        }
        this.hasNoSorter = !1;
        var n = t ? -1 : 1;
        this._hideAllTiles(), this.needRefilter = !0, this.allTiles.sort(i);
        for (var o = this.allTiles, a = 0; a < o.length; a++) this.box.appendChild(o[a])
    }, n.prototype._filter = function(e) {
        var t = e.isEmpty();
        if (!t || !this.hasNoFilter || this.needRefilter) {
            this.needsScrollerRefresh = !0, this.hasNoFilter = t, this.needRefilter = !1, this._hideAllTiles(), this.allVisibleTiles = [];
            for (var i = this.allTiles, n = 0; n < i.length; n++) {
                var o = i[n],
                    a = o.mountData;
                a.receivedData && (a = a.receivedData), e.isMatch(a) && (this.allVisibleTiles.push(o), o.showTile())
            }
        }
    }, n.prototype.toggleDisplay = function(e) {
        this.scroller.toggleDisplay(e)
    }, n.prototype.lockRoom = function() {
        this.isLocked = !0, this.scroller.hide(), this._hideAllTiles()
    }, n.prototype.refreshDisplay = function(e, t, i) {
        return this.isLocked && (this.isLocked = !1, this._showAllTiles()), this.scroller.show(), t && this._sortByProperty(t, i), this._filter(e), this.tilesPerPage ? (this.needsScrollerRefresh && (this.scroller.refresh(), this.needsScrollerRefresh = !1), void this._refreshView(!0)) : this._setupLayout()
    }, n.prototype._setupLayout = function() {
        if (this.allVisibleTiles.length) {
            var e = this.scroller.getParent()
                .rootElement,
                t = e.clientWidth,
                i = e.clientHeight,
                n = this.allVisibleTiles[0];
            n.setStyle("opacity", 0);
            var o = n.rootElement.clientWidth,
                a = this.columnWidth = o + 2 * u;
            this.rowHeight = n.rootElement.clientHeight + 2 * u, n.setStyle("opacity", null);
            var r = Math.floor(t / a),
                s = t - r * a - h;
            s < p && r > 1 && (r--, s += a), this.numColumns = r;
            var c = Math.ceil(i / this.rowHeight) + 1;
            this.tilesPerPage = c * this.numColumns,
                this.extraTilesTopOrBottom = this.tilesPerPage, l.prepareTilePool(this, Math.min(this.numMounts, this.tilesPerPage + 2 * this.extraTilesTopOrBottom)), this.scrollGrip.setStyle("width", s + "px"), this.scroller.refresh(), this._refreshView(!0)
        }
    }, n.prototype._stopTicker = function() {
        window.clearInterval(this.refreshInterval), this.refreshInterval = null
    }, n.prototype._refreshView = function(e) {
        var t = Math.min(0, this.scroller.iScroll.y);
        if (!(this.isRefreshComplete && !e && Math.abs(t - this.lastRenderedScrollY) < this.rowHeight)) {
            var i = t - this.lastRenderedScrollY > 0;
            this.isRefreshComplete = !1;
            for (var n = this.allVisibleTiles, o = n.length, a = Math.floor(-t / this.rowHeight) * this.numColumns, r = a, s = Math.min(a + this.tilesPerPage, o), l = this.extraTilesTopOrBottom, d = Math.max(0, a - l), u = Math.min(a + this.tilesPerPage + l, o), p = 0; p < o; p++) p >= d && p < u || n[p].prepareToGoOffScreen();
            var h = e ? 1 / 0 : this.numColumns * M,
                f = c(1, n, r, s, i, h);
            h -= f, f && !e || (f = c(2, n, r, s, i, h)), e && (f += c(1, n, d, u)), 0 === f && (this.isRefreshComplete = !0, this.lastRenderedScrollY = t)
        }
    }, n.prototype._hideAllTiles = function() {
        for (var e = this.allVisibleTiles, t = 0; t < e.length; t++) e[t].hideTile();
        l.hidePoolTiles(this)
    }, n.prototype._showAllTiles = function() {
        for (var e = this.allVisibleTiles, t = 0; t < e.length; t++) e[t].showTile()
    }
}
