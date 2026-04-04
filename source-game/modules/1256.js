function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "rolesWrapper"
        }), this._icons = []
    }
    i(1257);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(88);
    o(n, a), e.exports = n, n.prototype.init = function() {
        var e = this,
            t = [],
            i = window.gui.databases.Roles;
        Object.keys(i)
            .forEach(function(e) {
                t.indexOf(i[e].assetId < 0) && t.push(i[e].assetId)
            }), t.forEach(function(t) {
                function i() {
                    return n.text
                }
                var n = e.createChild("div", {
                    className: ["icon", "role" + t]
                });
                n.text = "", n.tooltip = r.addTooltip(n, i, {
                    longTapExplanation: !0
                }), n.id = t, n.hide(), e._icons.push(n)
            })
    }, n.prototype.updateRoles = function(e) {
        var t = window.gui.databases.Breeds[e],
            i = window.gui.databases.Roles,
            n = [];
        t.roles.forEach(function(e) {
            i[e] && n.push(i[e].assetId)
        }), this._icons.forEach(function(e) {
            var o = n.indexOf(e.id),
                a = o > -1;
            a && i[t.roles[o]] && (e.setStyle("order", o), e.text = i[t.roles[o]].description), e.toggleDisplay(a)
        })
    }
}
