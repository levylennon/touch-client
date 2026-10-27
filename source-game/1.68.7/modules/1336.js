function(e, t, i) {
    function n(e) {
        e = e || {}, r.call(this, "div", e), this.addClassNames("Carousel"), this._ratio = e.heightRatio || m, this._bannerTitle = Boolean(e.bannerTitle), this.defaultTapBehaviour = Boolean(e.defaultTapBehaviour), this._onTabTap = e.onTabTap, this._newsLoadedTime = 0, this._currentPage = 0, this._transitioning = !1, this._setTimoutId = null, this._pageCount = 0, this._onTap = e.onTap, this._carouselPages = [], this._banners = [], this._tapParams = [], this._bannerTitles = [], this.bannerInfoWrappers = [], this._date = [], this._dots = [], this._isPaused = !1;
        var t = this;
        this._carouselWrapper = this.createChild("div", {
            className: "carouselWrapper"
        }), s.cssTransition(this._carouselWrapper, b + "ms"), this._dotsWrapper = this.createChild("div", {
            className: "dotsWrapper",
            hidden: !0
        }), this._resetTransform(), this._updateDots(), this._rightArrow = this.appendChild(new c({
            className: "rightArrow",
            hidden: !0
        }, function() {
            t._transitioning || (t._scrollToNextElement(), t.emit("clickOnArrow", {
                toNext: !0
            }))
        })), this._rightArrow.createChild("div", {
            className: "arrow"
        }), this._leftArrow = this.appendChild(new c({
            className: "leftArrow",
            hidden: !0
        }, function() {
            t._transitioning || (t._scrollToPrevElement(), t.emit("clickOnArrow", {
                toNext: !1
            }))
        })), this._leftArrow.createChild("div", {
            className: "arrow"
        }), this._init();
        var i = null;
        this.isTapping = !1, this._carouselWrapper.allowDomEvents(), this._carouselWrapper.on("dom.touchstart", function(e) {
            if (!(t._pageCount <= 1)) {
                var n = h(e);
                i = n.x, t.isTapping = !0
            }
        }), this._carouselWrapper.on("dom.touchmove", function(e) {
            if (!(t._pageCount <= 1) && t.isTapping) {
                var n = h(e),
                    o = n.x - i;
                o > M && (t.isTapping = !1, t._scrollToPrevElement(), t.emit("swiped", {
                    toNext: !1
                })), o < -M && (t.isTapping = !1, t._scrollToNextElement(), t.emit("swiped", {
                    toNext: !0
                }))
            }
        })
    }

    function o(e) {
        var t = new u.DofusDate(u.now())
            .getServerDate(),
            i = e._endDate.timestamp - t.timestamp;
        if (i <= 0) return clearInterval(e._interval);
        var n = Math.floor(i % 864e5 / 36e5),
            o = Math.floor(i % 36e5 / 6e4),
            a = Math.floor(i % 6e4 / 1e3),
            r = new Date(t.year, t.month, t.day + 1, n, o, a),
            s = {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: !1
            };
        e.setText(r.toLocaleString(window.Config.language, s))
    }
    i(1337);
    var a = i(56)
        .inherits,
        r = i(72),
        s = i(16),
        c = i(86),
        l = i(63),
        d = i(32)
        .formatUrlToCssUrl,
        u = i(21),
        p = i(66),
        h = i(23)
        .getPosition,
        f = 5e3,
        b = 600,
        m = 1.811,
        M = 20;
    a(n, r), e.exports = n, n.prototype._init = function() {
        this._carouselPages[0] = this._carouselWrapper.createChild("div", {
            className: ["carouselPage", "page0"]
        }), this._banners[0] = this._carouselPages[0].createChild("div", {
            className: ["banner", "spinner"]
        }), this._resetTransform()
    }, n.prototype.setEndDate = function(e) {
        this._endDate = e
    }, n.prototype.setPages = function(e) {
        var t = p(this.rootElement),
            i = t.width,
            n = this._bannerTitle ? i / this._ratio : t.height;
        this._carouselWrapper.clearContent(), this._dotsWrapper.clearContent(), this._newsLoadedTime = Date.now(), this._pageCount = e.length;
        for (var o = this, a = 0; a < e.length; a++) this._carouselPages[a] = this._carouselWrapper.createChild("div", {
            className: ["carouselPage", "page" + a],
            hidden: !0
        }), this._banners[a] = this._carouselPages[a].createChild("div", {
            className: ["banner", "spinner"]
        }), this._banners[a].setStyles({
            width: i + "px",
            height: n + "px"
        }), l(this._banners[a]), this.bannerInfoWrappers[a] = this._carouselPages[a].createChild("div", {
            className: "bannerInfoWrapper"
        }), l(this.bannerInfoWrappers[a]), this.bannerInfoWrappers[a].on("tap", function() {
            o._onTabTap && !o.defaultTapBehaviour ? o._onTabTap() : o.isTapping && o._onTap(o._tapParams[o._currentPage])
        }), this._date[a] = this.bannerInfoWrappers[a].createChild("div", {
            className: "date"
        }), this._bannerTitle && (this._bannerTitles[a] = this.bannerInfoWrappers[a].createChild("div", {
            className: "bannerTitle"
        })), this._dots[a] = this._dotsWrapper.createChild("div", {
            className: "dot"
        });
        for (a = 0; a < e.length; a++) {
            this._dots[a].show(), this._carouselPages[a].show();
            var r = e[a],
                s = r.imageUrl;
            this._banners[a].delClassNames(["spinner", "noNewsFallback"]), s ? this._banners[a].setStyle("backgroundImage", d(s)) : r.className && this._banners[a].addClassNames(r.className), this._date[a].setText(r.date), this._date[a].show(), this._tapParams[a] = r.tapParam, this._bannerTitle && this._bannerTitles[a].setText(r.name), this._banners[a].on("tap", function() {
                o.isTapping && o._onTap(o._tapParams[o._currentPage])
            })
        }
        var c = this._pageCount > 1;
        this._rightArrow.toggleDisplay(c), this._leftArrow.toggleDisplay(c), this._dotsWrapper.toggleDisplay(c), c && this._registerNextPagesChange(), this._resetTransform(), this._updateDots()
    }, n.prototype.startCarousel = function() {
        if (this._endDate) {
            var e = this;
            this._interval && clearInterval(this._interval), this._interval = setInterval(function() {
                o(e)
            }, 1e3)
        }
    }, n.prototype.update = function() {
        this._loading()
    }, n.prototype._loading = function() {
        var e = p(this.rootElement),
            t = e.width,
            i = this._bannerTitle ? t / this._ratio : e.height;
        this._clearTimeout(), this._rightArrow.hide(), this._leftArrow.hide(), this._dotsWrapper.hide(), this._newsLoadedTime = 0;
        var n = this._banners[this._currentPage];
        n && n.rootElement ? (n.addClassNames("spinner"), n.setStyles({
            width: t + "px",
            height: i + "px"
        })) : console.error(new Error("Cannot find the current banner for page " + this._currentPage)), this._pageCount = 0
    }, n.prototype._scrollToPrevElement = function() {
        this._scrollElement(-1)
    }, n.prototype._scrollToNextElement = function() {
        this._scrollElement(1)
    }, n.prototype._scrollElement = function(e) {
        var t = p(this.rootElement)
            .width;
        if (e === -1 || 1 === e) {
            var i = this;
            if (!this._transitioning) {
                this._clearTimeout(), this._currentPage = (this._currentPage + this._pageCount + e) % this._pageCount;
                var n = e === -1 ? 0 : 2 * t;
                this._carouselPages[this._currentPage].setStyle("left", n + "px"), s.forceReflow(this._carouselWrapper), s.cssTransform(this._carouselWrapper, "translate(" + (1 === e ? 2 * -t : 0) + "px, 0px)"), this._updateDots(), this._transitioning = !0, setTimeout(function() {
                    i._resetTransform(), i._transitioning = !1, i._registerNextPagesChange()
                }, b + 200)
            }
        }
    }, n.prototype._updateDots = function() {
        for (var e = 0; e < this._pageCount; e++) this._dots[e].toggleClassName("selected", this._currentPage === e)
    }, n.prototype._clearTimeout = function() {
        null !== this._setTimoutId && (clearTimeout(this._setTimoutId), this._setTimoutId = null)
    }, n.prototype.clear = function() {
        this._clearTimeout();
        for (var e = 0; e < this._pageCount; e++) this._banners[e].setStyle("backgroundImage", "initial");
        this._newsLoadedTime = 0, this._leftArrow.hide(), this._rightArrow.hide()
    }, n.prototype._registerNextPagesChange = function() {
        var e = this;
        null === this._setTimoutId && (this._transitioning || 0 !== e._newsLoadedTime && (this._isPaused || (this._setTimoutId = setTimeout(function() {
            e._setTimoutId = null, 0 !== e._newsLoadedTime && (e._scrollToNextElement(), e._registerNextPagesChange())
        }, f))))
    }, n.prototype._resetTransform = function() {
        var e = p(this.rootElement)
            .width;
        s.cssTransition(this._carouselWrapper, "0ms"), s.forceReflow(this._carouselWrapper), s.cssTransform(this._carouselWrapper, "translate(-" + e + "px, 0px)"), s.forceReflow(this._carouselWrapper), s.cssTransition(this._carouselWrapper, b + "ms");
        for (var t = 0; t < this._pageCount; t++) {
            var i = t === this._currentPage - 1 || t - this._pageCount === this._currentPage - 1,
                n = t === this._currentPage,
                o = t === this._currentPage + 1 || t + this._pageCount === this._currentPage + 1,
                a = i || n || o;
            if (a) {
                var r = 2 * e;
                n ? r = 0 | e : i && (r = 0), this._carouselPages[t].setStyle("left", r + "px"), this._carouselPages[t].show()
            } else this._carouselPages[t].hide()
        }
    }, n.prototype.pauseAutomatedChange = function() {
        this._isPaused = !0, this._clearTimeout()
    }, n.prototype.resumeAutomatedChange = function() {
        this._isPaused = !1, this._registerNextPagesChange()
    }
}
