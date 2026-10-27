function(e, t, i) {
    function n() {
        a.call(this, {
            title: s("ui.mount.renameTooltip"),
            className: "MountRenameWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: "400px",
                height: "200px"
            }
        });
        var e = this.windowBody.createChild("div", {
            className: "mainContainer"
        });
        e.createChild("div", {
            className: "text",
            text: s("ui.mount.popupRename")
        });
        var t = this._validate.bind(this);
        this._inputName = e.appendChild(new d({
            className: "inputName",
            attr: {
                type: "text",
                maxlength: h
            }
        }, t)), this._inputName.on("change", function(e) {
            this.setValue(e.replace(/[^a-zA-Z]+/g, ""))
        }), e.appendChild(new r(s("ui.common.ok"), {
            className: "okBtn"
        }, t)), this.on("open", function(e) {
            this._previousName = e.name, this._mountId = e.mountId, this._inputName.setValue(e.name), e.inputBox && this._positionNextTo(e.inputBox)
        }), this.on("opened", function() {
            this._inputName.focus()
        })
    }
    i(1246);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(86)
        .DofusButton,
        s = i(17)
        .getText,
        c = i(112),
        l = i(52),
        d = i(581),
        u = i(66),
        p = c.MIN_RIDE_NAME_LEN,
        h = c.MAX_RIDE_NAME_LEN,
        f = 153,
        b = 108;
    o(n, a), e.exports = n, n.prototype._validate = function() {
        var e = this._inputName.getValue() || "";
        e = e.replace(/[^a-zA-Z]+/g, ""), this._inputName.setValue(e), e && this._previousName !== e && e.length >= p && e.length <= h && window.dofus.sendMessage("MountRenameRequestMessage", {
            name: e,
            mountId: this._mountId
        }), l.close(this.id)
    }, n.prototype._positionNextTo = function(e) {
        var t = u(e.rootElement);
        this.position.x = t.left - f, this.position.y = t.top - b
    }
}
