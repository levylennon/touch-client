function(e, t, i) {
    function n() {}

    function o() {
        if (u) return u;
        u = {};
        var e = /^\{[\d]*\|([\d]*)/i,
            t = window.gui.databases.Breeds;
        for (var i in t) {
            var n = t[i],
                o = e.exec(n.maleLook)[1],
                a = e.exec(n.femaleLook)[1];
            u[o] = n.creatureBonesId, u[a] = n.creatureBonesId
        }
        return u[453] = t[12].creatureBonesId, u
    }
    var a = i(1514),
        r = i(691),
        s = i(103),
        c = {
            1: !0,
            113: !0,
            44: !0,
            1575: !0,
            1576: !0
        },
        l = [1097, 1111, 1112, 3451],
        d = 761,
        u = null;
    a.prototype.getCreatureBones = function() {
        switch (this.data.type) {
            case "FightTeamInformations":
            case "FightAllianceTeamInformations":
            case "FightTeamLightInformations":
            case "GameRolePlayNpcInformations":
            case "GameRolePlayNpcWithQuestInformations":
                return 0;
            case "GameFightCharacterInformations":
            case "GameRolePlayCharacterInformations":
            case "GameRolePlayHumanoidInformations":
                var e = r.getLookWithoutMount(this.realLook);
                if (!e) return console.warn(new Error("getCreatureBones: look missing")), 666;
                var t = e.bonesId;
                if (!c[t]) return 1749;
                var i = e.skins[0],
                    n = o()[i];
                return n ? n : (console.error("getCreatureBones not found for:", t), 666);
            case "GameRolePlayPrismInformations":
                return 2247;
            case "GameRolePlayTaxCollectorInformations":
            case "GameFightTaxCollectorInformations":
                return 1813;
            case "GameRolePlayGroupMonsterInformations":
            case "GameFightMonsterInformations":
            case "GameFightMonsterWithAlignmentInformations":
                return this.data.isBoss ? 1748 : l.indexOf(this.data.creatureGenericId) >= 0 ? 2247 : this.data.isSummon ? 1765 : 1747;
            case "GameRolePlayMountInformation":
                return 1749;
            case "GameFightMutantInformations":
            case "GameRolePlayMutantInformations":
                return 1747;
            default:
                return console.error("getCreatureBones: unrecognized data type:", this.data.type), 666
        }
    }, a.prototype.setCreatureLook = function(e, t) {
        var i = t || n,
            o = "GameRolePlayPrismInformations" === this.data.type,
            a = "GameRolePlayTaxCollectorInformations" === this.data.type,
            c = this.data.humanoidInfo || o || a,
            l = this.realLook && this.realLook.bonesId === d;
        if (s.isRoleplayMode && !c || l) return this.realLook ? this.setLook(this.realLook, {
            useRealLook: !0,
            noSmokeAnimation: !0
        }, i) : i();
        var u = this.getCreatureBones();
        if (!u) return i();
        var p = {
                bonesId: u,
                skins: [],
                indexedColors: [],
                scales: [90],
                subentities: []
            },
            h = this;
        return r.prototype.setLook.call(this, p, e, function() {
            return h.animManager.applyCreatureAnimationModifier(), h.staticAnim(i)
        })
    }
}
