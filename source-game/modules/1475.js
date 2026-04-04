function(e, t, i) {
    function n() {
        a.call(this, {
            className: ["SimplePopup"],
            title: "Popup",
            customClose: !0,
            positionInfo: u,
            openingSound: "POPUP_INFO"
        }), this.messageStack = [], this.addedClassNames = []
    }
    i(1476);
    var o = i(56)
        .inherits,
        a = i(951),
        r = i(52),
        s = i(86)
        .DofusButton,
        c = i(17)
        .getText,
        l = i(502),
        d = i(54)
        .dimensions,
        u = {
            left: "c",
            bottom: "c",
            width: 600,
            height: 210
        },
        p = {
            left: "0",
            bottom: "0",
            width: d.screenWidth,
            height: d.screenHeight,
            isFullScreen: !0,
            isModal: !0
        };
    o(n, a), e.exports = n, n.prototype._createContent = function() {
        function e() {
            return t.messageStack.shift(), 0 === t.messageStack.length ? void r.close(t.id) : void t._update()
        }
        var t = this;
        this.message = this.box.createChild("div", {
            className: "message"
        });
        var i = this.buttonContainer.appendChild(new s(c("ui.common.ok")));
        i.on("tap", e);
        var n = this.windowBody.createChild("div", {
            className: "corners"
        });
        n.createChild("div", {
            className: "corner"
        }), n.createChild("div", {
            className: "corner"
        }), n.createChild("div", {
            className: "corner"
        }), n.createChild("div", {
            className: "corner"
        }), this.closeButton.on("tap", e)
    }, n.prototype._update = function() {
        this.message || this._createContent(), this.message.clearContent();
        var e = this.messageStack[0],
            t = e.message.split("<br>")
            .length <= 2 ? "center" : "left";
        this.message.setStyle("text-align", t), this.message.setStyle("white-space", e.enablePreWrap ? "pre-wrap" : ""), this.message.appendChild(l.process(e.message, {
            isNonChat: !0
        })), this.windowTitle.setText(e.title)
    }, n.prototype.addContent = function(e) {
        if (!e) return void console.error(new Error("data is missing"));
        this.addedClassNames.length > 0 && (this.delClassNames(this.addedClassNames), this.addedClassNames = []), e.className && (this.addClassNames(e.className), this.addedClassNames = e.className);
        var t = JSON.parse(JSON.stringify(u));
        if (e.fullScreen && (this.addClassNames("fullScreenPopup"), this.addedClassNames.push("fullScreenPopup"), t = JSON.parse(JSON.stringify(p))), r.positionWindow(this.id, t), this.messageStack.length) {
            var i = this.messageStack[this.messageStack.length - 1];
            if (i.message === e.message && i.title === e.title) return
        }
        var n = e.title,
            o = e.message;
        n || (console.error(new Error("title is missing " + o)), n = ""), o || (console.error(new Error("message is missing " + n)), o = ""), this.messageStack.push({
            title: n,
            message: o,
            enablePreWrap: e.enablePreWrap || !1
        }), 1 === this.messageStack.length && this._update()
    }
}
