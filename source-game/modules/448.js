function(e, t, i) {
    function n() {
        r = !0
    }

    function o(e) {
        e === b.TOO_FAST && (h = null), d = e === b.CLICK_AWAY || e === b.FIGHT_END
    }

    function a(e, t) {
        e = e || "generic";
        var i = p[e];
        return i ? t && d ? (s = null, c = l = -1, !1) : (h = i, !0) : (console.error('Contextual menu "' + e + '" does not exist.'), !1)
    }
    var r, s, c, l, d, u = i(23)
        .getPosition,
        p = {
            admin: i(449),
            emote: i(457),
            fightSwap: i(458),
            fightTeam: i(460),
            generic: i(462),
            interactive: i(463),
            item: i(468),
            map: i(498),
            monster: i(510),
            npc: i(512),
            offlinePlayer: i(513),
            paddockObject: i(514),
            partyOptions: i(515),
            player: i(518),
            preset: i(535),
            prism: i(536),
            smiley: i(539),
            spell: i(540),
            storage: i(541),
            taxCollector: i(542),
            userStatus: i(543),
            playersList: i(546),
            houseInstances: i(547),
            collab: i(548)
        },
        h = null,
        f = {
            x: 0,
            y: 0
        },
        b = {
            TOO_FAST: "tooFast",
            CLICK_AWAY: "clickAway",
            FIGHT_END: "mapChange"
        };
    t.getContextMenu = function(e) {
        return p[e]
    }, t.initialize = function(e, t) {
        t.on("dom.touchstart", function(e) {
            return f = u(e, {
                useScrollValue: !0
            }), h ? void(r ? r = !1 : h.close(b.CLICK_AWAY)) : void(d = !1)
        }), window.gui.on("GameFightEndMessage", function() {
            h && h.close(b.FIGHT_END)
        });
        for (var i in p) {
            var a = p[i],
                s = p[i] = e.appendChild(new a);
            s.allowDomEvents(), s.on("dom.touchstart", n), s.on("close", o)
        }
    }, t.openAt = function(e, t, i, n) {
        h && h.close(b.TOO_FAST), a(e, Math.abs(c - t) < 5 && Math.abs(l - i) < 5) && (c = t, l = i, t = void 0 === t ? f.x : t, i = void 0 === i ? f.y : i, h.openAt(t, i, n))
    }, t.openAround = function(e, t, i) {
        a(e, t === s) && (s = t, h.openAround(t, i))
    }, t.isOpen = function() {
        return h && h.isOpen
    }, t.close = function(e) {
        h && h.close(e)
    }
}
