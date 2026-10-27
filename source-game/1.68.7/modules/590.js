function(e, t, i) {
    function n() {}

    function o(e, t, i, n, o, a) {
        u.call(this, e, t, f);
        var r = i;
        r || (e.error(new Error("The message is missing.")), r = {}), this._id = r.id || -1, this._content = r.content || "", this._channel = r.channel, this._channel || 0 === this._channel || (this._channel = -1), this._receiverId = r.receiverId, this._senderId = r.senderId, this._tag = r.tag, this._timestamp = r.timestamp, this._senderAccountId = r.senderAccountId, this._messageType = r._messageType, this._content = r.content || "", this._receiverName = r.receiverName, this._senderName = r.senderName, this._isCopy = n || !1, this._canDecodeAllPages = o || !1, this._hideTimestamp = a || !1, this._channelMap = t || {}, this._guildInfo = r.guildInfo, this._objects = r.objects, this._isServerNewbie = r.isServerNewbie
    }
    var a = i(504),
        r = i(591),
        s = i(21),
        c = i(17)
        .getText,
        l = i(56)
        .inherits,
        d = i(502),
        u = i(592),
        p = i(14),
        h = s.DofusDate,
        f = i(72),
        b = a.CHANNEL_GLOBAL,
        m = a.PSEUDO_CHANNEL_PRIVATE;
    l(o, u), e.exports = o, o.prototype._createPlayerText = function() {
        var e = this._isCopy ? this._receiverName : this._senderName,
            t = this._isCopy ? this._receiverId : this._senderId;
        return e ? t ? "{player," + e + "," + t + ",channel:" + this._channel.toString() + "}" : e : "unknownPlayer"
    }, o.prototype._createMessageContent = function(e) {
        e = e || n;
        var t = this,
            i = p(),
            o = new this._wuidom("div", {
                className: "message"
            }),
            a = "ChatAdminServerMessage" === this._messageType,
            s = this._isRemoved;
        o.addClassNames("channel" + this._channel.toString()), a && o.addClassNames("mod");
        var l = this._createPlayerText(),
            u = this._content.match(/\/([a-zA-Z]+),[b|m]essage:([^\\}]*)/),
            f = !0,
            M = this._content;
        if (u && (M = u[2], "me" === u[1] ? (f = !1, o.addClassNames("meText")) : "think" === u[1] && (o.addClassNames("thinkText"), l = c("ui.chat.console.think", l))), this._channel !== b && this._channel !== m) {
            var g = this._channelMap[this._channel] || {},
                _ = g.nameId || "channel" + this._channel;
            o.createChild("span", {
                text: "(" + _ + ") "
            })
        }
        if (this._tag === r.CHAT_TAG_COMMUNITY_HELPER && o.createChild("span", {
                text: "(Helper) ",
                className: "link"
            }), this._channel === m) {
            var A = c(this._isCopy ? "ui.chat.to" : "ui.chat.from");
            o.createChild("span", {
                text: A + " "
            })
        }
        if (s && o.createChild("span", {
                text: "[REMOVED] "
            }), !this._hideTimestamp) {
            var O = new h(1e3 * this._timestamp)
                .getServerDate(),
                v = O.minute,
                y = v < 10 ? "0" + v : v;
            o.createChild("span", {
                className: "chatTimestamp",
                text: "[" + O.hour + ":" + y + "] "
            })
        }
        var z = f ? c("ui.common.colon") + " " : " ",
            w = o.createChild("div", {
                className: "icon"
            }),
            T = !1;
        return i.gui.playerData.id !== this._senderId && (i.gui.playerData.socialData.isSpouse(this._senderId) ? (w.addClassNames("spouse"), T = !0) : Boolean(this._senderAccountId) && i.gui.playerData.socialData.isFriend(this._senderId) ? (w.addClassNames("friend"), T = !0) : Boolean(this._guildInfo) && i.gui.playerData.guildData.isOnSameGuild(this._guildInfo.guildId) ? (w.addClassNames("guildMember"), T = !0) : Boolean(this._guildInfo) && i.gui.playerData.alliance.isGuildOnSameAlliance(this._guildInfo.guildId) && (w.addClassNames("allianceMember"), T = !0)), this._isServerNewbie && !T && w.addClassNames("newbie"), d.process(l + z, {}, function(i) {
            o.appendChild(i), d.process(M, {
                objectItems: t._objects,
                channel: t._channel,
                decodeAllPages: t._canDecodeAllPages,
                senderId: t._senderId,
                senderName: t._senderName
            }, function(t) {
                return o.appendChild(t), e(o)
            })
        })
    }
}
