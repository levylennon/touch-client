function(e, t, i) {
    function n(e, t, i) {
        s.length > 50 && (console.error("The stackEvent exceed 50 events, the stack is trash"), s = []), i.override && s.forEach(function(t, i) {
            e === t.name && s.splice(i, 1)
        }), s.push({
            name: e,
            data: t,
            options: i
        })
    }

    function o() {
        for (; s.length;) {
            var e = s.shift();
            t.log(e.name, e.data, e.options)
        }
    }
    var a = i(118),
        r = i(122),
        s = [],
        c = !1;
    t.init = function(e, t) {
        e = e || {}, a.init(e, t), i(123)
    }, t.register = function(e) {
        a.register(e), c = !0, o()
    }, t.unregister = function() {
        c = !1, a.unregister()
    }, t.log = function(e, t, i) {
        return t = t || {}, i = i || {}, c ? (i.withPlayerInfo !== !1 && r.addCharacterInfo(t), i.withEquipment && r.addEquippedItem(t, window.gui.playerData), void a.send(e, t)) : void n(e, t, i)
    }
}
