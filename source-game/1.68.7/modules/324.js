function(e, t) {
    ! function() {
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            i = {
                rotl: function(e, t) {
                    return e << t | e >>> 32 - t
                },
                rotr: function(e, t) {
                    return e << 32 - t | e >>> t
                },
                endian: function(e) {
                    if (e.constructor == Number) return 16711935 & i.rotl(e, 8) | 4278255360 & i.rotl(e, 24);
                    for (var t = 0; t < e.length; t++) e[t] = i.endian(e[t]);
                    return e
                },
                randomBytes: function(e) {
                    for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                    return t
                },
                bytesToWords: function(e) {
                    for (var t = [], i = 0, n = 0; i < e.length; i++, n += 8) t[n >>> 5] |= e[i] << 24 - n % 32;
                    return t
                },
                wordsToBytes: function(e) {
                    for (var t = [], i = 0; i < 32 * e.length; i += 8) t.push(e[i >>> 5] >>> 24 - i % 32 & 255);
                    return t
                },
                bytesToHex: function(e) {
                    for (var t = [], i = 0; i < e.length; i++) t.push((e[i] >>> 4)
                        .toString(16)), t.push((15 & e[i])
                        .toString(16));
                    return t.join("")
                },
                hexToBytes: function(e) {
                    for (var t = [], i = 0; i < e.length; i += 2) t.push(parseInt(e.substr(i, 2), 16));
                    return t
                },
                bytesToBase64: function(e) {
                    for (var i = [], n = 0; n < e.length; n += 3)
                        for (var o = e[n] << 16 | e[n + 1] << 8 | e[n + 2], a = 0; a < 4; a++) 8 * n + 6 * a <= 8 * e.length ? i.push(t.charAt(o >>> 6 * (3 - a) & 63)) : i.push("=");
                    return i.join("")
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var i = [], n = 0, o = 0; n < e.length; o = ++n % 4) 0 != o && i.push((t.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | t.indexOf(e.charAt(n)) >>> 6 - 2 * o);
                    return i
                }
            };
        e.exports = i
    }()
}
