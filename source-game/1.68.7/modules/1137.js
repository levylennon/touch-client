function(e, t, i) {
    function n(e) {
        a.call(this, "div", {
            className: "ServerBox"
        }), r(this), this._SERVER_STATUS = {
            0: s("ui.server.state.unknown"),
            1: s("ui.server.state.offline"),
            2: s("ui.server.state.starting"),
            3: s("ui.server.state.online"),
            4: s("ui.server.state.nojoin"),
            5: s("ui.server.state.saving"),
            6: s("ui.server.state.stoping"),
            7: s("ui.server.state.full")
        }, this._completions = [], this._title = this.createChild("div", {
            className: "title"
        }), this._content = this.createChild("div", {
            className: "content"
        }), this._placeholder = this.createChild("div", {
            className: "placeholderDiv"
        }), this._content.createChild("div", {
            className: "selection"
        }), this._image = this._content.createChild("div", {
            className: "image"
        });
        for (var t = 0; t < 5; t += 1) this._completions.push(this._content.createChild("div", {
            className: "completion"
        }));
        this._heroicIcon = this._content.createChild("div", {
            className: "heroicIcon"
        });
        var i = this._content.createChild("div", {
            className: "statusBlock"
        });
        this._statusIcon = i.createChild("div", {
            className: "statusIcon"
        }), this._statusText = i.createChild("div", {
            className: "statusText"
        }), this.setServer(e)
    }
    i(1138);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(63),
        s = i(17)
        .getText,
        c = i(760);
    o(n, a), e.exports = n, n.prototype.setServer = function(e) {
        var t = this;
        if (this.delClassNames("placeHolder"), this._placeholder.hide(), !e) return this.addClassNames("placeHolder"), this.disable(), this._content.hide(), this._placeholder.show(), void this._title.setText("");
        this._title.setText(e._name || e.id);
        for (var i = 0, n = this._completions.length; i < n; i += 1) {
            var o = this._completions[i];
            i < e.charactersCount ? o.addClassNames("on") : o.delClassNames("on")
        }
        var a = 1 === e._gameTypeId;
        this._heroicIcon.toggleDisplay(a), this.data = e, e.isSelectable ? this.enable() : this.disable(), this._statusIcon.setClassNames(["statusIcon", "status_" + e.status]), this._statusText.setText(this._SERVER_STATUS[e.status || 0]), this._content.show(), c.getServerImage(e.id, function(e, i) {
            return e ? console.error(e) : void t._image.setStyle("backgroundImage", i)
        })
    }
}
