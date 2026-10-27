function(e, t, i) {
    function n(e) {
        return d.apply([], e)
            .filter(Boolean)
    }

    function o(e, t) {
        var i, n = document.createElement(e);
        if (t && t.attr)
            for (i in t.attr) n.setAttribute(i, t.attr[i]);
        return n
    }

    // (DOM) UI Engine
    function a(e, t) {
        s.call(this),
        this._elementIsVisible = !0,
        this._currentTextContent = null,
        this.rootElement = null,
        this._text = null,
        this._name = null,
        this._childrenList = [],
        this._childrenMap = {},
        this._contentType = l.EMPTY,
        this._parent = null,
        e && this._assign(e, t)
    }
    var r = i(73).inherits,
        s = i(76).EventEmitter,
        c = i(77);
    i(78);
    var l = {
            EMPTY: null,
            WUI: "wui",
            TEXT: "text",
            HTML: "html"
        },
        d = Array.prototype.concat;
    r(a, s), e.exports = a, a.prototype._assign = function(e, t) {
        if (this.rootElement) throw new Error("WuiDom has already an element assigned");
        if ("string" == typeof e) this.rootElement = o(e, t), t && t.hasOwnProperty("text") && this.setText(t.text);
        else {
            if (!(e instanceof window.Element)) throw new Error("WuiDom.assign requires the given argument to be a DOM Element or tagName.");
            this.rootElement = e
        }
        t = t || {}, t.hidden && this.hide(), "name" in t && (this._name = String(t.name)), "className" in t && this.addClassNames(t.className), "style" in t && this.setStyles(t.style || {})
    },
    a.prototype.assign = function(e, t) {
        this._assign(e, t)
    },
    a.prototype.getWuiName = function() {
        return this._name
    },
    a.prototype.removeChild = function(e) {
        var t = e instanceof a;
        if (!t && (e = this._childrenMap[e], !e)) throw new Error("WuiDom: Given name is not a current child");
        var i = this._childrenList.indexOf(e);
        if (i === -1) throw new Error("WuiDom: Not a current child");
        return this.rootElement.removeChild(e.rootElement), this._childrenList.splice(i, 1), this._childrenMap.hasOwnProperty(e._name) && delete this._childrenMap[e._name], e._parent = null, e
    },
    a.prototype._unsetParent = function() {
        this._parent && this._parent.removeChild(this)
    },
    a.prototype._setParent = function(e) {
        if (e !== this._parent) {
            if (this._name) {
                if (e._childrenMap[this._name]) throw new Error("WuiDom: Parent already has a child with this name");
                e._childrenMap[this._name] = this
            }
            this._parent = e
        }
    },
    a.prototype.getParent = function() {
        return this._parent
    },
    a.prototype.appendChild = function(e) {
        if (this._contentType && this._contentType !== l.WUI && this._clearLinearContent(), this === e._parent) {
            var t = this._childrenList.indexOf(e);
            t !== -1 && this._childrenList.splice(t, 1)
        } else e._unsetParent(), e._setParent(this);
        return this._childrenList.push(e), this.rootElement.appendChild(e.rootElement), e.rebindTouchListeners(), this._contentType = l.WUI, e
    },
    a.prototype.createChild = function(e, t) {
        return this.appendChild(new a(e, t))
    },
    a.prototype.appendTo = function(e) {
        e.appendChild(this)
    },
    a.prototype.insertChildBefore = function(e, t) {
        this._contentType && this._contentType !== l.WUI && this._clearLinearContent();
        var i;
        if (this === e._parent) {
            var n = this._childrenList.indexOf(e);
            n !== -1 && this._childrenList.splice(n, 1)
        } else e._unsetParent();
        if (t) {
            if (i = this._childrenList.indexOf(t), i === -1) throw new Error("WuiDom: Wanted sibling is not a child")
        } else i = this._childrenList.length;
        return e._setParent(this), this.rootElement.insertBefore(e.rootElement, t && t.rootElement), e.rebindTouchListeners(), this._childrenList.splice(i, 0, e), this._contentType = l.WUI, e
    },
    a.prototype.insertBefore = function(e) {
        if (!e._parent) throw new Error("WuiDom: sibling has no parent");
        return e._parent.insertChildBefore(this, e), e
    },
    a.prototype.insertAsFirstChild = function(e) {
        var t = this._childrenList[0];
        return t ? this.insertChildBefore(e, t) : this.appendChild(e)
    },
    a.prototype.getChildren = function() {
        return this._childrenList.concat()
    },
    a.prototype.getChildCount = function() {
        return this._childrenList.length
    },
    a.prototype.getChild = function(e) {
        return this._childrenMap[e]
    },
    a.prototype._clearLinearContent = function() {
        this._text = null, this._currentTextContent = null, this.rootElement.innerHTML = ""
    },
    a.prototype.setHtml = function(e) {
        this._contentType === l.WUI && this._destroyChildren(), this._contentType === l.TEXT && this._clearLinearContent(), this.rootElement.innerHTML = e, this._contentType = l.HTML
    },
    a.prototype.setText = function(e) {
        this._contentType === l.WUI && this._destroyChildren(), this._contentType === l.HTML && this._clearLinearContent(), null !== e && void 0 !== e && (e = e.valueOf(), this._text || (this._text = document.createTextNode(""), this.rootElement.appendChild(this._text)), e !== this._currentTextContent && (this._currentTextContent = e, this._text.nodeValue = e), this._contentType = l.TEXT)
    },
    a.prototype.getText = function() {
        return this._currentTextContent
    },
    a.prototype.setStyle = function(e, t) {
        this.rootElement.style[e] = t
    },
    a.prototype.setStyles = function(e) {
        var t = this.rootElement.style;
        for (var i in e) t[i] = e[i]
    },
    a.prototype.unsetStyle = function(e) {
        this.rootElement.style[e] = ""
    },
    a.prototype.getStyle = function(e) {
        return this.rootElement.style[e]
    },
    a.prototype.getComputedStyle = function(e) {
        var t = window.getComputedStyle(this.rootElement);
        return t ? t.getPropertyValue(e) : null
    }, 
    a.prototype.getComputedStyles = function() {
        var e = window.getComputedStyle(this.rootElement);
        if (!e) return {};
        for (var t = {}, i = 0, n = arguments.length; i < n; i += 1) {
            var o = arguments[i];
            t[o] = e.getPropertyValue(o)
        }
        return t
    }, 
    a.prototype.getClassNames = function() {
        return n(this.rootElement.classList)
    }, 
    a.prototype.hasClassName = function(e) {
        return this.rootElement.classList.contains(e)
    }, 
    a.prototype.setClassNames = function() {
        this.rootElement.className = "";
        var e = this.rootElement.classList;
        e.add.apply(e, n(arguments))
    }, a.prototype.addClassNames = function() {
        var e = this.rootElement.classList;
        e.add.apply(e, n(arguments))
    }, a.prototype.replaceClassNames = function(e, t) {
        var i = this.rootElement.classList;
        i.remove.apply(i, n(e)), i.add.apply(i, n(t))
    }, a.prototype.delClassNames = function() {
        var e = this.rootElement.classList;
        e.remove.apply(e, n(arguments))
    }, a.prototype.toggleClassNames = function(e, t) {
        for (var i = 0; i < e.length; i += 1) this.toggleClassName(e[i], t)
    }, a.prototype.toggleClassName = function(e, t) {
        return t === !0 || t === !1 ? this.rootElement.classList.toggle(e, t) : this.rootElement.classList.toggle(e)
    }, a.prototype._removeDom = function() {
        var e = this.rootElement;
        e && (e.remove(), this.rootElement = null)
    }, a.prototype._destroyChildren = function() {
        var e = this._childrenList.concat();
        this._childrenList = [], this._childrenMap = {};
        for (var t = 0, i = e.length; t < i; t += 1) {
            var n = e[t];
            n.emit("destroy"), n._parent = null, n._destroyChildren(), n._removeDom(), n.removeAllListeners()
        }
    }, a.prototype.clearContent = function() {
        switch (this._contentType) {
            case l.HTML:
            case l.TEXT:
                this._clearLinearContent();
                break;
            case l.WUI:
                this._destroyChildren()
        }
        this._contentType = l.EMPTY, this.emit("cleared")
    }, 
    a.prototype.destroy = function() {
        this.emit("destroy"), this._unsetParent(), this._destroyChildren(), this._removeDom(), this.removeAllListeners()
    }, 
    a.prototype.showMethod = function() {
        this.rootElement.style.display = ""
    }, 
    a.prototype.hideMethod = function() {
        this.rootElement.style.display = "none"
    }, 
    a.prototype.show = function() {
        this._elementIsVisible || (this._elementIsVisible = !0, this.showMethod(), this.emit("show"))
    }, 
    a.prototype.hide = function() {
        this._elementIsVisible && (this._elementIsVisible = !1, this.hideMethod(), this.emit("hide"))
    }, 
    a.prototype.toggleDisplay = function(e) {
        return void 0 === e && (e = !this._elementIsVisible), e ? this.show() : this.hide(), !!e
    }, 
    a.prototype.isVisible = function(e) {
        return !!this._elementIsVisible && (!e || !this._parent || this._parent.isVisible(!0))
    }, 
    a.prototype.rebindTouchListeners = function() {
        if (this.domListeners) {
            var e = this.rootElement;
            for (var t in this.domListeners)
                if (t.match(/^touch/)) {
                    var i = this.domListeners[t];
                    for (var n in i) {
                        var o = i[n];
                        e.removeEventListener(n, o), e.addEventListener(n, o)
                    }
                }
        }
    }, a.prototype.bindToTome = function(e, t) {
        function i(e) {
            t(this.valueOf(), e)
        }
        var n = this;
        t || (t = function(e) {
            n.setText(e)
        }), e.on("readable", i), t(e.valueOf()), this.on("destroy", function() {
            e.removeListener("readable", i)
        })
    }, a.prototype.allowDomEvents = function() {
        this.domListeners || (this.domListeners = {}, this.on("newListener", c["new"]), this.on("removeListener", c.remove), this.on("destroy", c.destroy))
    }
}
