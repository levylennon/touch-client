function(e, t, i) {
    function n() {
        r.call(this, {
            className: "Scroll"
        }), this.setClassNames("Scroll"), this.btnClose = this.appendChild(new s({
            className: "btnClose"
        })), this.lblTitle = this.createChild("div", {
            className: "lblTitle"
        }), this.createChild("div", {
            className: "scrollOrnament"
        }), this._lblContentScroller = this.appendChild(new c({
            className: "lblContent"
        })), this.lblContent = this._lblContentScroller.content, this.txIllu = this.createChild("div", {
            className: "scrollImage"
        }), this._image = null, this._illuUri = null, this._styleSheet = new l, this._hasText = !0;
        var e = this;
        this.btnClose.on("tap", function() {
            e.close()
        })
    }

    function o(e) {
        var t = new RegExp(u)
            .exec(e);
        return null !== t
    }
    var a = i(56)
        .inherits,
        r = i(1022),
        s = i(86),
        c = i(453),
        l = i(1023),
        d = i(12),
        u = /(<[a-zA-Z]+\s*[^>]*>)+([^<].*?)/gi,
        p = 365;
    a(n, r), e.exports = new n, n.prototype.open = function(e) {
        if (this._title = e.titleId, this._page = e.contentId, this._image = this._getImageData(this._page), this.toggleClassName("zombieIsland", e.id === p), !this._page) return console.error("Scroll content is empty for document id", e.id), this.close();
        e.contentCSS && this._styleSheet.create(this._formatText(e.contentCSS), ".Scroll");
        var t = this;
        this._preInitData(function() {
            t.show()
        })
    }, n.prototype._preInitData = function(e) {
        if (this._hasText = o(this._page), !this._image) return this._initScroll(), e();
        var t = this;
        d.preloadImage(this._image.imageId, function(i) {
            return t._image && (t._image.src = i, t._initScroll()), e()
        })
    }, n.prototype.close = function() {
        this.hide(), this.lblTitle.clearContent(), this.lblContent.clearContent(), this._image = null, this.txIllu.setStyle("backgroundImage", ""), this._styleSheet.destroy(), r.prototype.close.call(this)
    }, n.prototype._initScroll = function() {
        var e = this;
        this.lblTitle.setHtml(this._title);
        var t = "";
        t = this._styleSheet ? this._formatText(this._page) : this._page, this.lblContent.clearContent();
        var i = Boolean(this._image);
        !this._hasText && i ? (this._lblContentScroller.hide(), this.txIllu.setStyles({
            backgroundImage: this._image.src,
            backgroundPosition: "center center",
            width: "100%"
        })) : (this._lblContentScroller.show(), this._lblContentScroller.toggleClassName("small", i), this.txIllu.toggleDisplay(i), i && (t = t.replace(this._image.regExpResult, ""), this.txIllu.setStyles({
            backgroundImage: this._image.src,
            backgroundPosition: "center top",
            width: ""
        })), this.lblContent.appendChild(this._formatLinks(t)), window.setTimeout(function() {
            e._lblContentScroller.refresh()
        }, 0))
    }
}
