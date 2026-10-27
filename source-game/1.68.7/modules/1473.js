function(e, t, i) {
    function n() {
        l.call(this, {
            className: "connectionQueueWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 600,
                height: 200
            },
            noCloseButton: !0
        }), this.once("open", this._createContent), this._setupEventListeners()
    }

    function o() {
        var e = window.gui.serversData;
        return e ? e.connectedServerData : null
    }
    i(1474);
    var a = i(86)
        .DofusButton,
        r = i(17)
        .getText,
        s = i(56)
        .inherits,
        c = i(141),
        l = i(70),
        d = i(52);
    s(n, l), e.exports = n, n.prototype._setupEventListeners = function() {
        var e = this;
        window.dofus.connectionManager.on("LoginQueueStatusMessage", function(t) {
            e._queueStatusUpdate("login", t.position, t.total)
        }), window.dofus.connectionManager.on("QueueStatusMessage", function(t) {
            e._queueStatusUpdate("game", t.position, t.total)
        })
    }, n.prototype._createContent = function() {
        this.windowTitle.setText(r("ui.queue.wait"));
        var e = this.windowBody.createChild("div", {
            className: "messageBox"
        });
        this.message = e.createChild("div", {
            className: "message"
        });
        var t = this.windowBody.createChild("div", {
                className: "buttonContainer"
            }),
            i = t.appendChild(new a(r("ui.queue.back"))),
            n = this;
        i.on("tap", function() {
            return o() ? (c.goBackToSelectionOf("server"), void d.close(n.id)) : window.dofus.disconnect()
        })
    }, n.prototype._queueStatusUpdate = function(e, t, i) {
        if (0 === t) return d.close(this.id);
        d.open(this.id);
        var n = r("ui.queue.number", t, i),
            a = o();
        a && (n += "\n\n" + r("ui.queue.server", a._name)), this.message.setText(n)
    }
}
