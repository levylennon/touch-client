function(e, t, i) {
    var n = i(135),
        o = i(138);
    e.exports = function(e, t, i, a, r) {
        if (!e) return r(new Error("staticContent is not initialized. Cannot perform request: " + t));
        var s = o.operation({
            retries: 4,
            randomize: !0
        });
        i = i || {};
        var c = new XMLHttpRequest;
        c.onreadystatechange = function() {
            if (4 === ~~c.readyState) {
                var e;
                if (200 !== ~~c.status && (e = "staticContent xhrError: " + c.status + ", responseText: " + c.responseText), s.retry(e)) return console.warn("staticContent.request failed code ", c.status + ", will retry...");
                if (e) return r(s.mainError());
                var t;
                try {
                    t = JSON.parse(c.response)
                } catch (i) {
                    return r(i)
                }
                r(null, t)
            }
        };
        var l = {
                lang: i.lang || a,
                v: window.buildVersion
            },
            d = e + t + "?" + n.stringify(l);
        s.attempt(function() {
            c.open("POST", d, !0), c.setRequestHeader("Content-type", "application/json"), c.send(JSON.stringify(i))
        })
    }
}
