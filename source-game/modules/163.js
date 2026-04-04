function(e, t, i) {
    function n(e, t, i, n, p) {
        this.cmsItems = new o(e, i, n), this.account = new a(e, i, n), this.almanax = new r(e, i, n), this.game = new c(e, i, n, p), this.shop = new s(e, n, t), this.api = new d(e, i, n), this.forum = new l(e, i, n), this.shield = new u(e, i, n)
    }
    var o = i(164),
        a = i(169),
        r = i(170),
        s = i(313),
        c = i(314),
        l = i(315),
        d = i(316),
        u = i(317);
    e.exports = n, n.prototype.describe = function() {
        var e = "";
        return e += this.cmsItems.describe() + "\n", e += this.account.describe() + "\n", e += this.almanax.describe() + "\n", e += this.shop.describe() + "\n", e += this.game.describe() + "\n", e += this.forum.describe() + "\n", e += this.api.describe() + "\n", e += this.shield.describe() + "\n"
    }
}
