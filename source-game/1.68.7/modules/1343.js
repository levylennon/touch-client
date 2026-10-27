function(e, t, i) {
    function n(e) {
        var t = {};
        a.shallowCopyProperties(o, t, a.getOwnProperties(o));
        var i = t.articles[0];
        return i && i.media && i.media[0] ? (i.name = s("ui.albueraTutorial.bonusPack.name"), i.description = s("ui.albueraTutorial.bonusPack.description"), void r.preloadImageUrl(c, function(n) {
            return i.media[0].url = n, e(null, t)
        })) : e(new Error("fakeShop.getFakeShopData: main article is missing information"))
    }
    var o = i(1344),
        a = i(32),
        r = i(12),
        s = i(17)
        .getText,
        c = "ui/shop/BPAlbuera_medal.png";
    t.getFakeShopData = n
}
