function(e, t, i) {
    function n() {}

    function o(e, t, i, n, o, a, r) {
        c.call(this, e, t, s);
        var l = r || {};
        this._text = i, this._channel = n, this._parentClassName = o || "", this._important = a || 0, this._options = l
    }
    var a = i(17)
        .getText,
        r = i(502),
        s = i(72),
        c = i(592),
        l = i(56)
        .inherits,
        d = 1;
    l(o, c), e.exports = o, o.prototype._createMessageContent = function(e) {
        e = e || n;
        var t = new s("div", {
            className: "message"
        });
        if (this._important === d && t.addClassNames("mod"), t.addClassNames("channel" + this._channel), this._options.showChannelName && this._channelMap[this._channel] && this._channelMap[this._channel].nameId && t.createChild("span", {
                text: "(" + this._channelMap[this._channel].nameId + ") "
            }), this._options.npcId) {
            var i = "{npc," + this._options.npcId + "::" + this._options.npcName + "}";
            t.appendChild(r.process(i + a("ui.common.colon") + " "))
        } else if (this._options.playerId) {
            var o = "{player," + this._options.playerName + "," + this._options.playerId + "}";
            t.appendChild(r.process(o + " ")), t.addClassNames("meText")
        }
        return r.process(this._text, {
            isNonChat: !0,
            channel: this._channel,
            parentClassName: this._parentClassName
        }, function(i) {
            return t.appendChild(i), e(t)
        })
    }
}
