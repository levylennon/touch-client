function(e, t) {
    "use strict";

    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
            return i
        }
        return Array.from(e)
    }

    function n(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["id", "class", "length"],
            n = e.attributes,
            o = [].concat(i(n));
        return o.reduce(function(e, i) {
            return t.indexOf(i.nodeName) > -1 || e.push("[" + i.nodeName + '="' + i.value + '"]'), e
        }, [])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getAttributes = n
}
