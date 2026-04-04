function(e, t, i) {
    (function(e) {
        function n() {
            var e = [].slice.call(arguments)
                .join(" ");
            throw new Error([e, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"))
        }

        function o(e, t) {
            for (var i in e) t(e[i], i)
        }
        var a = i(149);
        t.createHash = i(151), t.createHmac = i(160), t.randomBytes = function(t, i) {
            if (!i || !i.call) return new e(a(t));
            try {
                i.call(this, void 0, new e(a(t)))
            } catch (n) {
                i(n)
            }
        }, t.getHashes = function() {
            return ["sha1", "sha256", "sha512", "md5", "rmd160"]
        };
        var r = i(161)(t);
        t.pbkdf2 = r.pbkdf2, t.pbkdf2Sync = r.pbkdf2Sync, o(["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman"], function(e) {
            t[e] = function() {
                n("sorry,", e, "is not implemented yet")
            }
        })
    })
    .call(t, i(145)
        .Buffer)
}
