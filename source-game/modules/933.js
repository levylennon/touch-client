function(e, t, i) {
    function n() {
        this.handlerMap = {}, this.handlerMap[d] = this.kamaConvertHandler, this.handlerMap[u] = this.kamaConvertHandler, this.handlerMap[p] = this.kamaLostHandler, this.handlerMap[l] = this.guestLimitHandler, this.handlerMap[h] = this.overweightHandler, this.previousConvertedKamaAmount = null
    }
    var o = i(504),
        a = i(17),
        r = i(16),
        s = i(840),
        c = i(934),
        l = 10418,
        d = 221,
        u = 220,
        p = 46,
        h = 10012,
        f = 45;
    n.prototype.initialize = function() {
        var e = this,
            t = window.dofus.connectionManager,
            i = {};
        i[c.TEXT_INFORMATION_MESSAGE] = o.PSEUDO_CHANNEL_INFO,
        i[c.TEXT_INFORMATION_PVP] = o.CHANNEL_ALLIANCE,
        i[c.TEXT_INFORMATION_FIGHT] = o.PSEUDO_CHANNEL_FIGHT_LOG,
        t.on("TextInformationMessage", function(t) {
            var n = 1e4 * t.msgType + t.msgId;
            if (n === f ? t.text = a.processText.apply(null, [t.text].concat(r.formatStringWithSeparator(t.parameters[0]))) : t.text = a.processText.apply(null, [t.text].concat(t.parameters)), "ADMIN_DEBUG" === t.parameters[0]) return console.warn(t.text);
            var o = e.handlerMap[n];
            o && !o.call(e, t) || (t.msgType === c.TEXT_INFORMATION_ERROR ? window.gui.chat.logError(t.text) : window.gui.chat.logMsg(t.text, i[t.msgType]))
        }),
        t.on("TextInformationMessageWithPriority", function(e) {
            e.msgType === c.TEXT_INFORMATION_ERROR ? window.gui.chat.logError(e.text, e.msgPriority) : window.gui.chat.logMsg(e.text, i[e.msgType], e.msgPriority)
        })
    },
    n.prototype.kamaConvertHandler = function(e) {
        return this.previousConvertedKamaAmount = ~~e.parameters[0], !1
    },
    n.prototype.kamaLostHandler = function(e) {
        var t = ~~e.parameters[0];
        if (t !== this.previousConvertedKamaAmount) return this.previousConvertedKamaAmount = null, !0;
        this.previousConvertedKamaAmount = null;
        var i = s.computeHardPrice(t);
        return i ? (e.text = a.getText("tablet.spent.hard", i), !0) : console.warn("Cannot convert currency")
    },
    n.prototype.guestLimitHandler = function() {
        return window.gui.loginScreen.proposeRegistrationAfterGuestLimit(), !1
    },
    n.prototype.overweightHandler = function(e) {
        return window.gui.openPopup({
            title: a.getText("ui.popup.warning"),
            message: e.text
        }), !0
    }, e.exports = new n
}
