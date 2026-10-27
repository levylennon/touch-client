function(e, t, i) {
    function n(e) {
        var t = {
            1: {
                title: d("ui.classHighlight.class1.title")
            },
            2: {
                title: d("ui.classHighlight.class2.title")
            },
            4: {
                title: d("ui.classHighlight.class4.title")
            },
            6: {
                title: d("ui.classHighlight.class6.title")
            },
            7: {
                title: d("ui.classHighlight.class7.title")
            },
            8: {
                title: d("ui.classHighlight.class8.title")
            },
            9: {
                title: d("ui.classHighlight.class9.title")
            },
            11: {
                title: d("ui.classHighlight.class11.title")
            }
        };
        return t[e] ? t[e].title : null
    }

    function o(e) {
        return h[e] ? h[e].godClass : ""
    }

    function a(e) {
        return h[e] ? h[e].bgClass : ""
    }

    function r(e) {
        return window.gui.databases.Breeds[e] ? window.gui.databases.Breeds[e] : {}
    }

    function s(e, t) {
        var i = window.gui.databases.Breeds[e];
        if (!i) return [];
        for (var n, o = t === p ? i.femaleColors : i.maleColors, a = [], r = 0; r < o.length; r++) n = u.parseIndexedColor(o[r])
            .color, a.push(u.getIndexedColor(r + 1, n.r, n.g, n.b));
        return a
    }

    function c(e) {
        return h[e] ? h[e].roles : ""
    }

    function l(e) {
        var t = {
            1: {
                text: d("ui.role.tank")
            },
            2: {
                text: d("ui.role.buff")
            },
            3: {
                text: d("ui.role.damage")
            },
            4: {
                text: d("ui.role.restraint")
            },
            5: {
                text: d("ui.role.summon")
            },
            6: {
                text: d("ui.role.placement")
            },
            7: {
                text: d("ui.role.protection")
            },
            8: {
                text: d("ui.role.heal")
            }
        };
        return t[e] ? t[e].text : null
    }
    var d = i(17)
        .getText,
        u = i(475),
        p = 1,
        h = {
            1: {
                bgClass: "bg3",
                godClass: "god1",
                roles: [1, 4, 7]
            },
            2: {
                bgClass: "bg2",
                godClass: "god2",
                roles: [2, 4, 5]
            },
            4: {
                bgClass: "bg1",
                godClass: "god4",
                roles: [3, 4, 6]
            },
            6: {
                bgClass: "bg2",
                godClass: "god6",
                roles: [2, 3, 6]
            },
            7: {
                bgClass: "bg4",
                godClass: "god7",
                roles: [2, 4, 8]
            },
            8: {
                bgClass: "bg4",
                godClass: "god8",
                roles: [2, 3, 6]
            },
            9: {
                bgClass: "bg5",
                godClass: "god9",
                roles: [3, 4, 6]
            },
            11: {
                bgClass: "bg5",
                godClass: "god11",
                roles: [1, 3, 6]
            }
        };
    t.getTitle = n, t.getGodClass = o, t.getBgClass = a, t.getBreedData = r, t.getBreedColors = s, t.getRoles = c, t.getRoleText = l
}
