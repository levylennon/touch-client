function(e, t, i) {
    (function(t, n) {
        ! function() {
            var o = ("undefined" == typeof window ? t : window) || {};
            _crypto = o.crypto || o.msCrypto || i(150), e.exports = function(e) {
                if (_crypto.getRandomValues) {
                    var t = new n(e);
                    return _crypto.getRandomValues(t), t
                }
                if (_crypto.randomBytes) return _crypto.randomBytes(e);
                throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
            }
        }()
    })
    .call(t, function() {
            return this
        }(), i(145)
        .Buffer)
}
