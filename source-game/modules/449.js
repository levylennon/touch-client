function(e, t, i) {
    function n(e) {
        if (e.status < 400 || e.status > 599) return e;
        var t = new Error(e.statusText);
        throw t.response = e, t
    }

    function o(e) {
        return e.json()
            .then(function(t) {
                if (t._statusCode || e.status > 599) throw t;
                return t
            })
    }

    function a() {
        s.call(this, {
            className: "ContextualMenuAdmin"
        });
        var e = this;
        e.targetPlayer = null, e.curItems = null, e.prevItems = [], this.once("open", function() {
            e.container = e.entryList.appendChild(new u("div")), e._addCancel()
        }), this.on("open", function(t, i) {
            e.targetPlayer = t, e.updateContent(i)
        }), this.on("close", function() {
            e.container.clearContent(), e.targetPlayer = null, e.curItems = null, e.prevItems = []
        })
    }
    var r = i(56)
        .inherits,
        s = i(450),
        c = i(456),
        l = i(18),
        d = i(17)
        .getText,
        u = i(72),
        p = i(86),
        h = i(52);
    r(a, s), e.exports = a, a.prototype.replaceSymbols = function(e) {
        var t = window.gui.playerData.characterBaseInformations.name,
            i = this.targetPlayer.name,
            n = window.gui.playerData.identification.uniqueNickname.getForDisplay(),
            o = e.replace(/%nn/gi, n);
        return o = o.replace(/%n/gi, t), o = o.replace(/%p/gi, i)
    }, a.prototype._addStartup = function(e) {
        console.debug(e)
    }, a.prototype._addStatic = function(e) {
        var t = this.replaceSymbols(e.label);
        this.container.appendChild(new u("div", {
            text: t,
            className: "contextHeader"
        }))
    }, a.prototype._addMenu = function(e) {
        function t() {
            e.label && i.prevItems.push(i.curItems), i._addItems(e.item)
        }
        var i = this,
            n = this.replaceSymbols(e.label || "");
        n += " >", this.container.appendChild(new p({
            text: n,
            className: "cmButton"
        }, t))
    }, a.prototype._addSendChat = function(e) {
        function t() {
            var e = window.gui.chat.chatInput;
            e.sendChatCommand(o), i.close()
        }
        var i = this,
            n = this.replaceSymbols(e.label),
            o = this.replaceSymbols(e.command);
        this.container.appendChild(new p({
            text: n,
            className: "cmButton"
        }, t))
    }, a.prototype._addSendCommand = function(e) {
        function t() {
            var e = h.getWindow("adminConsole");
            h.open("adminConsole"), e.runCommand(o), i.close()
        }
        var i = this,
            n = this.replaceSymbols(e.label),
            o = this.replaceSymbols(e.command);
        this.container.appendChild(new p({
            text: n,
            className: "cmButton"
        }, t))
    }, a.prototype._addPrepareCommand = function(e) {
        function t() {
            var e = h.getWindow("adminConsole");
            h.open("adminConsole"), e.cmdInput.setValue(o), i.close()
        }
        var i = this,
            n = this.replaceSymbols(e.label),
            o = this.replaceSymbols(e.command);
        this.targetPlayer.houseId && (o = o.replace("IDHOUSE", this.targetPlayer.houseId)), this.container.appendChild(new p({
            text: n,
            className: "cmButton"
        }, t))
    }, a.prototype._addBatch = function(e) {
        function t() {
            var t, n = h.getWindow("adminConsole"),
                o = window.gui.chat.chatInput,
                a = e.item;
            h.open("adminConsole");
            for (var r = 0; r < a.length; r += 1) switch (t = i.replaceSymbols(a[r].command), a[r].type) {
                case "sendChat":
                    o.sendChatCommand(t);
                    break;
                default:
                    n.runCommand(t)
            }
            i.close()
        }
        var i = this,
            n = e.label;
        this.container.appendChild(new p({
            text: n,
            className: "cmButton"
        }, t))
    }, a.prototype._addItem = function(e) {
        var t = e.type;
        switch (t) {
            case "startup":
                this._addStartup(e);
                break;
            case "static":
                this._addStatic(e);
                break;
            case "menu":
                this._addMenu(e);
                break;
            case "sendCommand":
                this._addSendCommand(e);
                break;
            case "sendChat":
                this._addSendChat(e);
                break;
            case "prepareCommand":
                this._addPrepareCommand(e);
                break;
            case "batch":
                this._addBatch(e)
        }
    }, a.prototype._addItems = function(e) {
        var t = this;
        e && !Array.isArray(e) && (e = [e]), t.curItems = e, this.container.clearContent();
        for (var i, n = 0; n < e.length; n += 1) i = e[n], this._addItem(i);
        this.prevItems.length && this.container.appendChild(new p({
            text: "< " + d("ui.common.back"),
            className: "cmButton"
        }, function() {
            var e = t.prevItems.pop();
            t._addItems(e)
        })), this.scroller.refresh()
    }, a.prototype.updateContent = function(e) {
        var t = this,
            i = window.gui.playerData.adminMenu.getURL(),
            a = window.gui.playerData.adminMenu.getAdminMenuId();
        if (!i || null === a) return this.close(), e();
        var r = "",
            s = i + a + ".json",
            d = c.MODERATOR_RANK_CUSTOM_EVENT_ONLY[0];
        if (a === d) {
            var u = c.G2_MODERATOR[c.G2_MODERATOR.length - 1];
            r = i + d + ".json", s = i + u + ".json"
        }
        var p = [],
            h = null;
        l.series([function(e) {
            window.fetch(s)
                .then(n)
                .then(o)
                .then(function(t) {
                    return p = t.menu.item, p && !Array.isArray(p) && (p = [p]), e()
                })["catch"](function(t) {
                    return e(t)
                })
        }, function(e) {
            return r ? void window.fetch(r)
                .then(n)
                .then(o)
                .then(function(t) {
                    return h = t.item, e()
                })["catch"](function(t) {
                    return e(t)
                }) : e()
        }], function(i) {
            return i ? (console.error(i + " when fetching menuUrl: " + s), t.close(), e()) : (r ? t._addItems(p.concat(h)) : t._addItems(p), e())
        })
    }
}
