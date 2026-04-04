function(e, t, i) {
    var n = i(105),
        o = {
            BasicAckMessage: null,
            BasicLatencyStatsRequestMessage: null,
            BasicNoOperationMessage: null,
            SequenceNumberRequestMessage: null
        },
        a = {
            BasicLatencyStatsMessage: null,
            SequenceNumberMessage: null
        };
    n.on("data", function(e) {
        if (null !== o[e._messageType]) {
            var t = "background-color: #BFA;";
            e._messageType && e._messageType.indexOf("ErrorMessage") === -1 || (t = "background-color: #F00; color: #FFF;"), console.debug("[DOFUS PROXY] received: %c" + e._messageType, t, e);
        }
    }), n.on("messageSequence", function(e) {
        var t = "background-color: #CB98E7;";
        console.debug("[DOFUS PROXY] received: %cmessageSequence", t, e)
    }), n.on("open", function() {
        console.debug("[DOFUS PROXY] %c Connected to remote server ", "background-color: #FF0;")
    }), n.on("reconnecting", function() {
        console.debug("[DOFUS PROXY] %c Reconnecting to remote server... ", "background-color: #FF0;")
    }), n.on("reconnected", function() {
        console.debug("[DOFUS PROXY] %c Reconnected to remote server ", "background-color: #FF0;")
    }), n.on("error", function(e) {
        console.error("[DOFUS PROXY] ", e)
    }), n.on("disconnect", function() {
        console.debug("[DOFUS PROXY] %c disconnecting ", "background-color: #FF0;")
    }), n.on("send", function(e) {
        if ("sendMessage" === e.call) {
            if (a[e.data.data.type]) return;
            return void console.debug("[DOFUS PROXY]     send: %c" + e.data.data.type, "background-color: #6DF;", e.data.data.data)
        }
        console.debug("[DOFUS PROXY]     send: %c" + e.call, "background-color: #6DF;", e.data)
    })
}
