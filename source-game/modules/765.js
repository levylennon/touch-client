function(e, t, i) {
    function n(e, t) {
        return e && e.localeCompare ? e.localeCompare(t) : e > t ? 1 : t > e ? -1 : 0
    }

    function o(e) {
        return e[this.id]
    }

    function a(e) {
        return e
    }

    function r(e, t, i) {
        if (f.call(this, "div", {
                className: "TableV2"
            }), i = i || {}, t) "function" == typeof t ? this.getIdFn = t : this.getIdFn = function(e) {
            return e[t]
        };
        else {
            var r = 0;
            this.getIdFn = function() {
                return r++
            }
        }
        this.cols = e, this._selectedRow = null, this.colIndex = {};
        for (var s = 0, c = e.length; s < c; s += 1) {
            var l = e[s];
            this.colIndex[l.id] = s, l.format = l.format || l.getContent || o, l.sort && ("function" == typeof l.sort ? l.getContent = l.getContent || a : (l.sort = n, l.getContent = l.getContent || o), l.order = l.order || "ascending", l.defaultSorter && (this.defaultSorter = l, this.defaultOrder = l.order, this.sortBy = l))
        }
        this._clickable = i.clickable !== !1, i.noHeader || this._addHeader(), i.sorter && this.setSorter(i.sorter), this.toggleClassName("scaleOnPress", Boolean(i.scaleOnPress)), this._onRowCreation = i.onRowCreation, this._onRowTap = i.onRowTap, this.scroller = this.appendChild(new g({
            className: "tableScroller"
        }, {
            newUI: Boolean(i.newScroller)
        })), this.rows = this.scroller.content, this.rows.addClassNames("tableContent"), this._slidable = i.slidable, this._slidable && this._createSlideBackElement(), this.filters = [], this.placeholder = null, this.spinner = new _(this), this.isSorting = !1
    }

    function s() {
        this.myTable._tapOnSortBtn(this)
    }

    function c() {
        return this.content && "function" == typeof this.content.getText ? this.content.getText() : null
    }

    function l(e) {
        this.toggleClassName("disabled", !e)
    }

    function d(e, t) {
        var i = e[t.id];
        i.clearContent();
        var n = t.format(e.rowContent, e);
        i.content = n, n instanceof f ? i.appendChild(n) : i.setText(n)
    }
    i(766);
    var u = i(88)
        .addTooltip,
        p = i(86),
        h = i(767),
        f = i(72),
        b = i(63),
        m = i(69),
        M = i(56)
        .inherits,
        g = i(453),
        _ = i(769),
        A = i(22),
        O = 26,
        v = 40,
        y = 100;
    M(r, f), e.exports = r, r.prototype._createSlideBackElement = function() {
        var e = this._slideBack = new f("div", {
            className: "slideBackElement"
        });
        e.setStyle("opacity", 0), e.appendChild(this._slidable), e.rowId = null, e.side = "left", this.scroller.appendChild(e)
    }, r.prototype.setColumnHeader = function(e, t) {
        var i = this.header.row.getChild(e);
        return i ? ("string" == typeof t ? i.content.setText(t) : (i.content.clearContent(), i.content.appendChild(t)), void i.sorter.toggleClassName("noText", !t)) : console.error("setColumnHeader: invalid colId:", e)
    }, r.prototype.getColumnHeader = function(e) {
        var t = this.header.row[e];
        return t ? t : (console.error("getColumnHeader: invalid colId:", e), null)
    }, r.prototype.setSortingHintVisible = function(e, t) {
        var i = this.header.row.getChild(e);
        return i ? void i.sorter.toggleClassName("noTriangle", Boolean(t)) : console.error("setSortingHintVisible: invalid colId:", e)
    }, r.prototype._addHeader = function() {
        this.header = this.createChild("div", {
            className: "tableHeader"
        });
        for (var e = this.header.row = this.header.createChild("div", {
                className: "row"
            }), t = 0, i = this.cols.length; t < i; t += 1) {
            var n, o = this.cols[t];
            o.sort ? (n = e.appendChild(new p({
                className: ["col", o.id],
                name: o.id
            }, s)), n.myTable = this) : n = e.createChild("div", {
                className: ["col", o.id]
            }), u(n, o.tooltip ? o.tooltip : c), e[o.id] = n, (o.header || o.sort) && (n.content = n.createChild("div", {
                className: "headerContent"
            }), o.header instanceof f ? n.content.appendChild(o.header) : n.content.setText(o.header || ""), o.sort && (n.addClassNames(o.order), n.sorter = n.createChild("div", {
                className: "sortBtn"
            }), this._toggleTriangle(n, Boolean(o.defaultSorter)), n.sortBy = o, o.header || n.sorter.addClassNames("noText")))
        }
    }, r.prototype.setContentLoading = function(e) {
        e ? this.spinner.addSpinner("content") : this.spinner.removeSpinner("content")
    }, r.prototype.setPlaceholderText = function(e) {
        if (!this.placeholder) {
            if (!e) return;
            this.placeholder = new h(this, {
                headerElement: this.header
            })
        }
        this.placeholder.setText(e)
    }, r.prototype._toggleTriangle = function(e, t) {
        e.toggleClassName("showingTriangle", t)
    }, r.prototype._hideCurrentTriangle = function() {
        var e = this.sortBy;
        e && e.id && this._toggleTriangle(this.header.row[e.id], !1)
    }, r.prototype.setSorter = function(e, t) {
        this._hideCurrentTriangle(), this.sortBy = {
            order: t || "ascending",
            sort: e,
            getContent: a
        }
    }, r.prototype._updateSortButton = function(e, t) {
        this._hideCurrentTriangle(), this._toggleTriangle(e, !0), e.sortBy.order = t, e.toggleClassName("descending", "descending" === t)
    }, r.prototype._tapOnSortBtn = function(e) {
        if (!this.isSorting) {
            this.isSorting = !0;
            var t;
            t = e.sortBy === this.sortBy ? "ascending" === e.sortBy.order ? "descending" : "ascending" : e.sortBy.order, this.spinner.addSpinner("sorting"), this._updateSortButton(e, t), window.setTimeout(this._sortByColumn.bind(this, e, t))
        }
    }, r.prototype.sortByColumnId = function(e, t) {
        var i = this.header.row[e];
        this._updateSortButton(i, t), this._sortByColumn(i, t)
    }, r.prototype.sortAgain = function() {
        this.scroller.removeChild(this.rows), this.sort(), this.scroller.appendChild(this.rows)
    }, r.prototype._sortByColumn = function(e, t) {
        this.sortBy = e.sortBy, e.sortBy.order = t, this.scroller.removeChild(this.rows), this.sort(), this.scroller.appendChild(this.rows), this.spinner.removeSpinner("sorting"), this.isSorting = !1
    }, r.prototype.resetSort = function() {
        if (this.defaultSorter) {
            var e = this.header.row[this.defaultSorter.id];
            this._updateSortButton(e, this.defaultOrder), this._sortByColumn(e, this.defaultOrder)
        }
    }, r.prototype.sort = function(e, t) {
        if (e && this.setSorter(e, t), this.sortBy) {
            var i = this.sortBy,
                n = "ascending" === i.order ? 1 : -1;
            e = function(e, t) {
                return i.sort(i.getContent(e.rowContent), i.getContent(t.rowContent)) * n
            }
        }
        var o = this.rows.getChildren();
        e && o.sort(e);
        for (var a = !0, r = 0, s = o.length; r < s; r += 1) {
            var c = o[r];
            e && this.rows.appendChild(c), c.isVisible() && (c.toggleClassName("odd", a), a = !a)
        }
    }, r.prototype._insertRowInRightPosition = function(e, t) {
        var i = this.sortBy;
        t = t || {};
        var n, o, a;
        i && !t.dontSort && (n = i.sort, o = "ascending" === i.order ? 1 : -1, a = i.getContent(e.rowContent));
        for (var r = !1, s = !1, c = !0, l = this.rows.getChildren(), d = 0, u = l.length; d < u; d += 1) {
            var p = l[d];
            if (p === e) {
                if (n) continue;
                r = !0
            }!s && n && n(a, i.getContent(p.rowContent)) * o < 0 && (e.insertBefore(p), s = !0, e.isVisible() && (e.toggleClassName("odd", c), c = !c)), p.isVisible() && (p.toggleClassName("odd", c), c = !c)
        }
        s || r || (this.rows.appendChild(e), e.toggleClassName("odd", c))
    }, r.prototype.findRow = function(e, t) {
        for (var i = this.rows.getChildren(), n = 0, o = i.length; n < o; n += 1) {
            var a = i[n];
            if (e.call(this, a.rowContent, t)) return a.rowId
        }
        return null
    }, r.prototype.filter = function(e) {
        var t = this.rows.getChildren(),
            i = !0;
        e = e || this._shouldDisplayRow;
        for (var n = 0, o = t.length; n < o; n += 1) {
            var a = t[n],
                r = e.call(this, a.rowContent);
            a.toggleDisplay(r), r && (A.cancelTween(a) && a.setStyle("webkitTransform", null), a.toggleClassName("odd", i), i = !i)
        }
        this.scroller.refresh()
    }, r.prototype.addFilter = function(e) {
        this.filters.push(e)
    }, r.prototype.removeFilter = function(e) {
        var t = this.filters.indexOf(e);
        t !== -1 && this.filters.splice(t, 1)
    }, r.prototype._shouldDisplayRow = function(e) {
        if (e.hideRow) return !1;
        for (var t = 0, i = this.filters.length; t < i; t += 1)
            if (!this.filters[t].call(this, e)) return !1;
        return !0
    }, r.prototype.hasRow = function(e) {
        return Boolean(this.rows.getChild(e))
    }, r.prototype.unSelectRow = function() {
        this._selectedRow && this._selectedRow.delClassNames("selected"), this._selectedRow = null
    }, r.prototype.selectRow = function(e, t) {
        var i = this.rows.getChild(e);
        return i ? (this._selectedRow !== i && (this.unSelectRow(), i.addClassNames("selected"), this._selectedRow = i), this._onRowTap && this._onRowTap(i, i.rowContent), t || this.emit("rowTap", i, i.rowContent), i) : void console.error(new Error("Cannot select row for: " + e))
    }, r.prototype.scrollToSelectedRow = function() {
        this._selectedRow && this.scroller.scrollToElement(this._selectedRow)
    }, r.prototype.scrollToRow = function(e) {
        e && this.scroller.scrollToElement(e)
    }, r.prototype.selectFirstRow = function(e) {
        var t = this.rows.getChildren()[0];
        t && this.selectRow(t.rowId, e)
    }, r.prototype.getFirstDisplayedRow = function() {
        for (var e = this.rows.getChildren(), t = 0; t < e.length; t++) {
            var i = e[t];
            if (i && i.isVisible()) return i
        }
        return null
    }, r.prototype.selectFirstDisplayedRow = function(e) {
        for (var t = this.rows.getChildren(), i = 0; i < t.length; i++) {
            var n = t[i];
            if (n && n.isVisible()) {
                this.selectRow(n.rowId, e);
                break
            }
        }
    }, r.prototype.endSlide = function(e) {
        this._slideBack.rowId === e && (this._slideBack.setStyle("opacity", 0), this._slideBack.row.slideBack())
    }, r.prototype.setSlideEnable = function(e) {
        this._slideLock = !e
    }, r.prototype._addSlideBehavior = function(e) {
        m(e, "x");
        var t, i, n, o = this,
            a = this._slideBack,
            r = e.rootElement;
        e.on("slideStart", function(i, s) {
            o._slideLock || (null !== a.rowId && o.endSlide(a.rowId), a.rowId = e.rowId, a.row = e, a.setStyles({
                height: s.height + "px",
                webkitTransform: "translate3d(0," + (r.offsetTop + o.scroller.iScroll.y) + "px,0)"
            }), t = i.x, n = s.width / 2, e.setSwipeMinimum(n))
        }), e.on("slide", function(e) {
            o._slideLock || (i = e.x - t, i > n ? i = n : i < -n && (i = -n), a.setStyle("opacity", Math.abs(i) / n), this.setStyle("webkitTransform", "translate3d(" + i + "px,0,0)"))
        }), e.slideBack = function(t) {
            a.rowId = null, A.tween(e, {
                webkitTransform: "translate3d(0,0,0)"
            }, {
                time: 100,
                easing: "ease-out"
            }, function() {
                if (a.setStyle("opacity", 0), a.delClassNames("spinner", a.side), t) return t()
            })
        }, e.on("slideEnd", function(t, i) {
            o._slideLock || (t ? i > 0 ? (a.side = "left", a.addClassNames("spinner", "left"), o.emit("rowSlidedLeft", e, e.rowContent)) : (a.side = "right", a.addClassNames("spinner", "right"), o.emit("rowSlidedRight", e, e.rowContent)) : e.slideBack())
        })
    }, r.prototype._createRow = function(e, t, i) {
        t = void 0 === t ? this.getIdFn(e) : t;
        var n = this;
        if (this.rows.getChild(t)) throw new Error('THROW createRow: Already have a child named "' + t + '"');
        var o = this.rows.appendChild(new f("div", {
            className: "row",
            name: t
        }));
        this._slidable && this._addSlideBehavior(o), i && o.setStyle("webkitTransform", "translate3d(100%,0,0)"), o.rowId = t, o.rowContent = e, o.myTable = this;
        for (var a = 0, r = this.cols.length; a < r; a += 1) {
            var s = this.cols[a];
            o[s.id] = o.createChild("div", {
                className: ["col", s.id]
            }), d(o, s)
        }
        return this._clickable && (b(o), o.on("enable", l), o.on("tapstart", function() {
            o.addClassNames("pressed")
        }), o.on("tapend", function() {
            o.delClassNames("pressed")
        }), o.on("tap", function() {
            n.selectRow(t)
        })), this._onRowCreation && this._onRowCreation(o, e), o.toggleDisplay(this._shouldDisplayRow(e)), this.emit("rowAdded", t, e, o), o
    }, r.prototype.addRow = function(e, t, i) {
        i = i || {};
        var n = this._createRow(e, t, i.animated);
        return this._insertRowInRightPosition(n, i), this.scroller.refresh(), i.animated ? (this.scroller.scrollToElement(n), A.tween(n, {
            webkitTransform: "translate3d(0,0,0)"
        }, {
            time: y,
            easing: "ease-out"
        })) : n.setStyle("webkitTransform", null), n
    }, r.prototype._playAnimationForNewRows = function(e) {
        for (var t, i = this.rows.getChildren(), n = 0, o = O / 2, a = 0; a < i.length; a++) {
            var r = i[a];
            if (e[r.rowId])
                if (n >= O || !r.isVisible()) r.setStyle("webkitTransform", null);
                else {
                    0 === n && (t = r);
                    var s = (o - Math.abs(n - o)) * v;
                    n++, A.tween(r, {
                        webkitTransform: "translate3d(0,0,0)"
                    }, {
                        time: y,
                        easing: "ease-out",
                        delay: s
                    })
                }
        }
        t && this.scroller.scrollToElement(t)
    }, r.prototype.addList = function(e, t, i) {
        if (this.scroller.removeChild(this.rows), e.length && this.setPlaceholderText(""), i)
            for (var n = 0; n < e.length; n++) {
                var o = this.getIdFn(e[n]);
                this.hasRow(o) && this.delRow(o, !1)
            }
        var a, r, s, c = {};
        for (r = 0, s = e.length; r < s; r += 1) a = this._createRow(e[r], void 0, t), t && (c[a.rowId] = a);
        this.sort(), this.scroller.appendChild(this.rows), this.scroller.refresh(), t && this._playAnimationForNewRows(c)
    }, r.prototype.addMap = function(e, t) {
        this.scroller.removeChild(this.rows);
        var i = {};
        for (var n in e) {
            var o = this._createRow(e[n], n, t);
            i[o.rowId] = o
        }
        this.sort(), this.scroller.appendChild(this.rows), this.scroller.refresh(), t && this._playAnimationForNewRows(i)
    }, r.prototype._updateRow = function(e, t) {
        t = void 0 !== t ? t : this.getIdFn(e);
        var i = this.rows.getChild(t);
        if (!i) return this.addRow(e, t);
        i.rowContent = e;
        for (var n = 0, o = this.cols.length; n < o; n += 1) d(i, this.cols[n]);
        return i.toggleDisplay(this._shouldDisplayRow(e)), i
    }, r.prototype.refreshRows = function() {
        for (var e = this.rows.getChildren(), t = 0; t < e.length; t++) {
            var i = e[t];
            this._updateRow(i.rowContent, i.rowId)
        }
    }, r.prototype.updateRows = function(e) {
        for (var t = 0, i = e.length; t < i; t += 1) this._updateRow(e[t]);
        this.sort()
    }, r.prototype.updateRow = function(e, t) {
        var i = this._updateRow(e, t);
        return this._insertRowInRightPosition(i), i
    }, r.prototype.getRow = function(e) {
        return this.rows.getChild(e)
    }, r.prototype.updateCell = function(e, t, i) {
        var n = this.rows.getChild(e);
        if (!n) return console.error(new Error("Row id unknown: " + e));
        var o = n[t];
        if (!o) return console.error(new Error("Column id unknown: " + t));
        var a = this.cols[this.colIndex[t]];
        return n.rowContent = i, d(n, a), n.toggleDisplay(this._shouldDisplayRow(i)), this.sortBy === a && this._insertRowInRightPosition(n), n
    }, r.prototype.getCell = function(e, t) {
        var i = this.rows.getChild(e);
        if (!i) return console.error(new Error("Row id unknown " + e));
        var n = i[t];
        return n ? n.content : console.error(new Error("Column id unknown " + t))
    }, r.prototype._delRow = function(e) {
        var t = this.rows.getChild(e);
        t && (this._selectedRow === t && (this._selectedRow = null), this.emit("rowDeleted", e, t.rowContent, t), t.destroy())
    }, r.prototype.delRow = function(e, t) {
        function i() {
            o._delRow(e), o._updateRowColor(), o.scroller.refresh()
        }
        var n = this.rows.getChild(e);
        if (n) {
            var o = this;
            return t ? void A.tween(n, {
                webkitTransform: "translate3d(-100%,0,0)"
            }, {
                time: y,
                easing: "ease-out"
            }, i) : i()
        }
    }, r.prototype.delRows = function(e, t, i) {
        function n() {
            for (var t = 0, n = e.length; t < n; t += 1) o._delRow(e[t]);
            o._updateRowColor(), o.scroller.refresh(), i && i.call(o)
        }
        var o = this;
        if (!e.length || !t) return n();
        for (var a = 0, r = e.length; a < r; a += 1) {
            var s = this.rows.getChild(e[a]);
            if (s) {
                var c = a === r - 1 ? n : null;
                A.tween(s, {
                    webkitTransform: "translate3d(-100%,0,0)"
                }, {
                    time: y,
                    easing: "ease-out",
                    delay: a * v
                }, c)
            }
        }
    }, r.prototype.clearContent = function() {
        this.rows.clearContent(), this._selectedRow = null, this.scroller.refresh()
    }, r.prototype.getRowCount = function() {
        return this.rows.getChildCount()
    }, r.prototype._updateRowColor = function() {
        for (var e = !0, t = this.rows.getChildren(), i = 0, n = t.length; i < n; i += 1) {
            var o = t[i];
            o.isVisible() && (o.toggleClassName("odd", e), e = !e)
        }
    }, r.prototype.toggleDisplayColumn = function(e, t) {
        var i = this.getColumnHeader(e);
        if (i) {
            i.toggleDisplay(t);
            for (var n = this.rows.getChildren(), o = 0, a = n.length; o < a; o += 1) {
                var r = n[o];
                r[e].toggleDisplay(t)
            }
        }
    }
}
