function(e, t, i) {
    function n() {
        function e() {
            s.close(o.id), c("CLOSE_DOCUMENT")
        }

        function t(e) {
            r.getDataMap("Documents", [e.documentId], null, function(t, i) {
                if (t) return s.close(o.id), console.warn("Documents error", t);
                var a = i[e.documentId];
                if (a.typeId === u) n.open(a);
                else if (a.typeId === p) d.open(a);
                else if (a.typeId === h) {
                    var r = "ui/document/" + a.titleId;
                    return l.preloadImage(r, function(e) {
                        s.openDialog("previewWindow", {
                            url: e
                        })
                    })
                }
                s.openDialog(o.id), c("OPEN_DOCUMENT")
            })
        }
        a.call(this, {
            className: "documentWindow",
            noTitle: !0,
            noCloseButton: !0,
            positionInfo: {
                left: "c",
                top: "c",
                width: "90%",
                height: "90%"
            }
        });
        var n, o = this;
        window.gui.once("DocumentReadingBeginMessage", function(a) {
            n = i(1024), o.windowBody.appendChild(d), o.windowBody.appendChild(n), d.on("close", e), n.on("close", e), window.gui.on("DocumentReadingBeginMessage", t), t(a)
        })
    }
    i(1020);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(130),
        s = i(52),
        c = i(91)
        .playUiSound,
        l = i(12),
        d = i(1021),
        u = 1,
        p = 2,
        h = 6;
    o(n, a), e.exports = n
}
