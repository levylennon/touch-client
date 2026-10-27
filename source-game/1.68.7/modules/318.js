function(e, t, i) {
    function n(e) {
        var t = o.load();
        t.then(function(e) {
                return e.get()
            })
            .then(function(t) {
                return e(null, t.visitorId)
            })["catch"](e)
    }
    var o = i(319),
        a = i(321),
        r = i(323),
        s = i(14),
        c = s();
    t.getIdentifierHashes = function(e, t) {
        var i, o, a = e || n;
        return c.device && c.device.uuid ? (i = r(c.device.uuid), o = i.split("")
            .reverse()
            .join(""), t(null, {
                hm1: i,
                hm2: o
            })) : void a(function(e, n) {
            if (e) return t(e);
            try {
                var a = String(n);
                i = r(a), o = i.split("")
                    .reverse()
                    .join("")
            } catch (s) {
                e = new Error("ankamaCertification.getIdentifierHashes - Unable to get the fingerprint " + s)
            }
            return t(e, {
                hm1: i,
                hm2: o
            })
        })
    }, t.getDecodedCertificate = function(e, i, n) {
        return e ? void t.getIdentifierHashes(i, function(t, i) {
            if (t) return n(t);
            var o;
            try {
                o = a.decrypt(e, i.hm1, i.hm2)
            } catch (r) {
                console.warn("ankamaCertification.getDecodedCertificate - Certificate could not be decoded, it can happen when the fingerprint changed", r), o = ""
            }
            return n(null, o)
        }) : n(new Error("ankamaCertification.getDecodedCertificate - No encoded certificate given"))
    }
}
