function(e, t, i) {
    function n() {
        o.call(this), this.setClassNames("ReadingBook"), this.btnClose = this.appendChild(new s({
            className: "btnClose"
        })), this.btnHome = this.appendChild(new s({
            className: "btnHome"
        })), this.pageLeft = this.createChild("div", {
            className: ["page", "pageLeft"]
        }), this.pageRight = this.createChild("div", {
            className: ["page", "pageRight"]
        }), this.pageTitle = this.createChild("div", {
            className: ["pageTitle", "page", "pageRight"]
        }), this.lblTitle = this.pageTitle.createChild("div", {
            className: "lblTitle"
        }), this.lblSubtitle = this.pageTitle.createChild("div", {
            className: "lblSubtitle"
        }), this.pageTitle.createChild("div", {
            className: "bookOrnament"
        }), this.lblAuthor = this.pageTitle.createChild("div", {
            className: "lblAuthor"
        }), this.txDeco = {}, this.lblPageNumberLeft = this.appendChild(new s({
            className: ["pageNumber", "left"]
        })), this.lblPageNumberRight = this.appendChild(new s({
            className: ["pageNumber", "right"]
        })), this.btnPrevious = this.appendChild(new s({
            className: ["btnNav", "previous"]
        })), this.btnNext = this.appendChild(new s({
            className: ["btnNav", "next"]
        })), this._lastIndex = null, this._currentIndex = null, this._nbPages = null, this._styleSheet = new a;
        var e = this,
            t = this.appendChild(new c);
        this.btnClose.on("tap", function() {
            e.close()
        }), this.btnHome.on("tap", function() {
            e._currentIndex = -1, e._updateButtons(), e._updateBook(), d("BACK_TO_BEGINNING_DOCUMENT")
        }), this.btnPrevious.on("tap", function() {
            e._currentIndex -= 2, e._updateButtons(), e._updateBook(), d("TURN_PAGE_DOCUMENT_1")
        }), this.btnNext.on("tap", function() {
            e._currentIndex += 2, e._updateButtons(), e._updateBook(), d("TURN_PAGE_DOCUMENT_2")
        }), this.lblPageNumberLeft.on("tap", function() {
            t.setStyles({
                left: "15%",
                right: "initial"
            }), t.open({
                min: 1,
                max: e._nbPages + 1,
                placeholder: e._currentIndex + 1
            })
        }), this.lblPageNumberRight.on("tap", function() {
            t.setStyles({
                right: "15%",
                left: "initial"
            }), t.open({
                min: 1,
                max: e._nbPages + 1,
                placeholder: e._currentIndex + 2
            })
        }), t.on("confirm", function(t) {
            e._selectPage(parseInt(t, 10) - 2), d("TURN_PAGE_DOCUMENT_3")
        })
    }
    var o = i(1022),
        a = i(1023),
        r = i(56)
        .inherits,
        s = i(86),
        c = i(421),
        l = i(12),
        d = i(91)
        .playUiSound,
        u = "linkpage",
        p = 840;
    r(n, o), e.exports = new n, n.prototype.open = function(e) {
        this._title = e.titleId || "", this._author = e.authorId || "", this._subTitle = e.subTitleId || "", e.contentCSS && this._styleSheet.create(this._formatText(e.contentCSS), ".ReadingBook");
        var t = e.contentId || "";
        this._pages = t.split("<pagefeed/>"), this._lastIndex = -1, this._currentIndex = -1, this._nbPages = this._pages.length, this._initBook();
        var i = this._getAllImagesData(e.contentId);
        this.imageMap = {};
        var n = i.map(function(e) {
            return e.imageId
        });
        this.show();
        var o = this;
        l.preloadImages(n, function(e) {
            for (var t = 0; t < i.length; t++) o.imageMap[i[t].imageId] = e[t];
            o._selectPage(o._currentIndex)
        })
    }, n.prototype.close = function() {
        this._clearPages(), this.hide(), this._styleSheet.destroy(), o.prototype.close.call(this)
    }, n.prototype._clearPages = function(e) {
        e && "left" !== e || this.pageLeft.clearContent(), e && "right" !== e || this.pageRight.clearContent()
    }, n.prototype._initBook = function() {
        this.lblTitle.setHtml(this._title), this.lblSubtitle.setHtml(this._subTitle), this.lblAuthor.setHtml(this._author || "")
    }, n.prototype._updateBook = function() {
        var e = this._currentIndex === -1;
        this.pageTitle.toggleDisplay(e), this.pageRight.toggleDisplay(!e), this.lblPageNumberLeft.toggleDisplay(!e), this.lblPageNumberRight.show(), this._clearPages(), e ? (this._updatePageLeft(), this.lblPageNumberRight.setText(this._currentIndex + 2)) : (this._updatePageLeft(), this._updatePageRight()), this._lastIndex = this._currentIndex
    }, n.prototype._updatePageLeft = function() {
        var e = "";
        e = this._styleSheet && this._currentIndex !== -1 ? this._formatText(this._pages[this._currentIndex - 1]) : this._pages[this._currentIndex - 1] || "", this._insertContent(this.pageLeft, e), this.lblPageNumberLeft.setText(this._currentIndex + 1)
    }, n.prototype._updatePageRight = function() {
        if (this._currentIndex < this._nbPages) {
            this.pageRight.isVisible() || this.pageRight.show();
            var e = "";
            e = this._styleSheet && this._currentIndex !== -1 ? this._formatText(this._pages[this._currentIndex]) : this._pages[this._currentIndex], this._insertContent(this.pageRight, e), this.lblPageNumberRight.setText(this._currentIndex + 2)
        } else this.pageRight.hide(), this.lblPageNumberRight.setText("")
    }, n.prototype._updateButtons = function() {
        var e = this._currentIndex === -1,
            t = this._currentIndex + 1 >= this._nbPages;
        this.btnHome.toggleDisplay(!e), this.btnPrevious.toggleDisplay(!e), this.btnNext.toggleDisplay(!t)
    }, n.prototype._selectPage = function(e) {
        this._currentIndex = e % 2 ? e : e + 1, this._updateButtons(), this._updateBook()
    }, n.prototype._linkHandler = function(e) {
        if (e.indexOf(u) !== -1) {
            var t = parseInt(e.substr(u.length), 10);
            return this._selectPage(t)
        }
        o.prototype._linkHandler.call(this, e)
    }, n.prototype._insertContent = function(e, t) {
        var i = this._getAllImagesData(t);
        if (i.length) {
            for (var n = 0; n < i.length; n++) {
                var o = i[n];
                o.before && e.appendChild(this._formatLinks(o.before)), this._addTextureOnPage(e, o), t = t.replace(o.regExpResult, "")
            }
            t && e.appendChild(this._formatLinks(t))
        } else e.appendChild(this._formatLinks(t))
    }, n.prototype._addTextureOnPage = function(e, t) {
        var i = e.createChild("div", {
                className: "image"
            }),
            n = parseInt(this.getComputedStyle("height"), 10),
            o = t.height / p * n,
            a = {
                height: o + "px",
                width: "100%",
                backgroundImage: this.imageMap[t.imageId]
            };
        "center" === t.align && (a.backgroundPosition = t.align), i.setStyles(a)
    }
}
