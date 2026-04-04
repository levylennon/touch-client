function(e, t, i) {
    var n = i(17)
        .getText,
        o = i(112);
    t.sendMessage = function(e, t, i, a) {
        var r = e.length - o.USER_MAX_CHAT_LEN;
        if (r > 0) return n("tablet.chat.messageTooLong", r);
        var s, c = {
            content: e
        };
        return a && a.length > 0 ? (s = i ? "ChatClientPrivateWithObjectMessage" : "ChatClientMultiWithObjectMessage", c.objects = a) : s = i ? "ChatClientPrivateMessage" : "ChatClientMultiMessage", i ? c.receiver = i : c.channel = t, window.dofus.sendMessage(s, c), ""
    }
}
