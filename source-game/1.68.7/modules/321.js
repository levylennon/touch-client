function(e, t, i) {
    (function(e) {
        var n = i(144),
            o = i(322)
            .createDecipheriv;
        t.decrypt = function(t, i, a) {
            try {
                var r = o("aes-256-ecb", a, ""),
                    s = e.from(r.update(t, "base64")),
                    c = e.from(r["final"]()),
                    l = e.concat([s, c]),
                    d = n.createHash("sha256")
                    .update(i + l.toString())
                    .digest("hex");
                return d
            } catch (u) {
                return console.warn("Unable to decrypt the ankama certificate " + u), ""
            }
        }
    })
    .call(t, i(145)
        .Buffer)
}
