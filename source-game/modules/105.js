function(e, t, i) {
    function n(e) {
        if (!l) throw new Error("logger missing");
        var i = c.createMessage(l, e);
        return i._messageType ? void t.emit(i._messageType, i) : void console.error(new Error("emitMessage: missing message type for " + e._messageType))
    }

    function o(e) {
        if (0 !== e.length && !M) {
            var t = e.shift();
            window.setTimeout(function() {
                o(e), n(t)
            }, 0)
        }
    }
    var a = i(36).EventEmitter,
        r = i(38),
        s = i(106).monitor,
        c = i(108),
        l = null;
    t = e.exports = new a, t.setMaxListeners(0);
    var d, u, p, h, f, b, m, M, g, _ = 2e4,
        A = {
            BasicLatencyStatsMessage: !0,
            BasicPingMessage: !0
        },
        O = {
            BasicAckMessage: !0,
            BasicLatencyStatsRequestMessage: !0,
            BasicNoOperationMessage: !0,
            SequenceNumberRequestMessage: !0
        },
        v = [],
        y = 0,
        z = [],
        w = !1;
    t.lockMessages = function() {
        w = !0
    },
    t.lastReceivedMessage = null,
    t.unlockMessages = function() {
        if (w !== !1) {
            w = !1;
            var e = z.slice();
            o(e), z.length = 0
        }
    },
    t.connect = function(e, i) {
        if (l = e, d) return d.destroy(), d = null, void setTimeout(function() {
            t.connect(l, i)
        }, 0);
        var o = window.Primus,
            a = window.Config.maxReconnectionAttempt || 10;
        m = !1, M = !1, g = null, p = !0, u = !1, b = !0, d = new o(i, {
            manual: !0,
            strategy: "disconnect,timeout",
            reconnect: {
                max: 5e3,
                min: 500,
                retries: a
            }
        }), s.startListening(), d.on("open", function() {
            if (d !== this) return console.warn("onOpen - Ignoring event: possible missing call to Primus#destroy");
            if (m = !1, t.emit("open", u), u && h && Date.now() < f) {
                for (var e = {}, i = 0, n = {}, o = 0; o < h.length; o++) {
                    var a = h[o];
                    if ("message" === a.type) {
                        try {
                            var r = JSON.parse(a.data);
                            if ("sendMessage" !== r.call) {
                                n["call-" + r.call] = 1;
                                continue
                            }
                            var s = r.data.type;
                            if (A[s]) continue;
                            i++, e[s] = 1
                        } catch (c) {
                            console.error("Message to be resent is not JSON: " + a.data.toString()
                                .substring(0, 100))
                        }
                        d.socket.write(a.data, a.options)
                    } else n[a.type] = 1
                }
                i && console.error("Resent " + h.length + " previously unsent messages. Types: {" + Object.keys(e)
                    .join(",") + "} Skipped: {" + Object.keys(n)
                    .join(",") + "}")
            }
            h = null, u = !0
        }), d.on("offline", function() {
            b && (b = !1, p && t.emit("offline"))
        }), d.on("online", function() {
            return d !== this ? console.warn("onOnline - Ignoring event: possible missing call to Primus#destroy") : void(b || (b = !0, p && (t.emit("online"), d.readyState !== o.CLOSED || d.recovery.reconnecting() || window.setTimeout(function() {
                d.readyState !== o.CLOSED || d.recovery.reconnecting() || d.open()
            }, 0))))
        }), d.on("end", function() {
            b && (d = null, m ? g && t.connect(l, g) : (p = !1, t.disconnect("SOCKET_LOST")))
        }), d.on("reconnect scheduled", function(e) {
            if (h = null, r.isFeatureOn("decoRecoResend")) {
                var n = p && d.socket && d.socket.writeBuffer;
                n && n.length && (h = n, f = Date.now() + _)
            }
            t.emit("reconnecting", e.attempt, i)
        }), d.on("data", function(e) { window.top.FileLoggerLib && window.top.FileLoggerLib.writeLindoLog(e);
            if (!M)
                if (s.receiving(), "SequenceStartMessage" === e._messageType && (y += 1), y > 0) {
                    if (v.push(e), "SequenceEndMessage" === e._messageType && (y -= 1, y <= 0)) {
                        var i = {
                            _messageType: "messageSequence",
                            sequence: v
                        };
                        w ? z.push(i) : t.emit("messageSequence", i), v = [], y = 0
                    }
                } else t.emit("data", e), O[e._messageType] || (t.lastReceivedMessage = e._messageType), w ? z.push(e) : n(e)
        }), d.on("error", function(e) {
            t.emit("error", e)
        }), d.open()
    }, t.close = function() {
        m = !0, p = !1, h = null, d && (d.destroy(), d = null)
    }, t.switchToGame = function(e) {
        t.disconnect("SWITCHING_TO_GAME"), g = e
    }, t.disconnect = function(e) {
        M || (e = e || "CLIENT_CLOSING", console.info("connectionManager.disconnect: reason=" + e), "SOCKET_LOST" !== e && d && (t.send("disconnecting", e), m = !0), "SWITCHING_TO_GAME" !== e && (M = !0, t.close(), t.emit("disconnect", e)))
    }, t.sendMessage = function(e, i) {
        t.send("sendMessage", {
            type: e,
            data: i
        })
    }, t.send = function(e, i) {
        if (!d) return console.warn("Client trying to send while primus is null for call: " + e);
        s.sending(e, i);
        var n = {
            call: e,
            data: i
        }; window.top.FileLoggerLib && window.top.FileLoggerLib.writeLindoLog(n);
        d.write(n), t.emit("send", {
            call: e,
            data: n
        }), t.emit("send:" + e, n)
    }
}
