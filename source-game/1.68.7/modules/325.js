function(e, t) {
    var i = {
        utf8: {
            stringToBytes: function(e) {
                return i.bin.stringToBytes(unescape(encodeURIComponent(e)))
            },
            bytesToString: function(e) {
                return decodeURIComponent(escape(i.bin.bytesToString(e)))
            }
        },
        bin: {
            stringToBytes: function(e) {
                for (var t = [], i = 0; i < e.length; i++) t.push(255 & e.charCodeAt(i));
                return t
            },
            bytesToString: function(e) {
                for (var t = [], i = 0; i < e.length; i++) t.push(String.fromCharCode(e[i]));
                return t.join("")
            }
        }
    };
    e.exports = i
}
