function(e, t, i) {
    function n() {
        S = [], E = [], L = []
    }

    function o(e, t, i) {
        !t || p(e) && h(e) && f(e) ? !t && (p(e) || h(e) || f(e)) && (i === I.CM ? L.splice(L.indexOf(e), 1) : i === I.RAID ? E.splice(E.indexOf(e), 1) : S.splice(S.indexOf(e), 1)) : i === I.CM ? L.push(e) : i === I.RAID ? E.push(e) : S.push(e)
    }

    function a(e) {
        var t = [];
        S.forEach(function(i) {
            e[i] && t.push(i)
        }), S = t
    }

    function r() {
        return S
    }

    function s() {
        return E
    }

    function c() {
        return L
    }

    function l() {
        return window.gui.playerData.MatchmakingData.isOnDungeonQueue() || window.gui.playerData.MatchmakingData.isOnRaidQueue() || window.gui.playerData.MatchmakingData.isOnCMDungeonQueue()
    }

    function d() {
        return window.gui.playerData.MatchmakingData.isOnDungeonAcceptance() || window.gui.playerData.MatchmakingData.isOnRaidAcceptance() || window.gui.playerData.MatchmakingData.isOnCMDungeonAcceptance()
    }

    function u() {
        var e = window.gui.playerData.MatchmakingData,
            t = e.getDungeonSeekerStatus() !== C.REQUIRES_ACCEPTANCE;
        return !l() && t
    }

    function p(e) {
        return S.indexOf(e) > -1
    }

    function h(e) {
        return E.indexOf(e) > -1
    }

    function f(e) {
        return L.indexOf(e) > -1
    }

    function b(e) {
        return p(e) || h(e) || f(e)
    }

    function m(e) {
        switch (e.matchmakingFeature) {
            case T.RAID_GROUP_SEARCH:
                g(e.data[0].selectors);
                break;
            case T.DUNGEON_GROUP_SEARCH:
                M(e.data[0].selectors);
                break;
            case T.CM_DUNGEON_GROUP_SEARCH:
                _(e.data[0].selectors)
        }
    }

    function M(e) {
        e && !e.length && (S = e)
    }

    function g(e) {
        e && !e.length && (E = e)
    }

    function _(e) {
        e && !e.length && (L = e)
    }

    function A() {
        return E.length > 0 && window.dofus.sendMessage("MatchmakingCancelRequestMessage", {
            matchmakingFeature: T.RAID_GROUP_SEARCH
        }), S.length > 0 && window.dofus.sendMessage("MatchmakingCancelRequestMessage", {
            matchmakingFeature: T.DUNGEON_GROUP_SEARCH
        }), L.length > 0 && window.dofus.sendMessage("MatchmakingCancelRequestMessage", {
            matchmakingFeature: T.CM_DUNGEON_GROUP_SEARCH
        }), !0
    }

    function O() {
        L.length > 0 && window.dofus.sendMessage("MatchmakingUpdateRequestMessage", {
            matchmakingFeature: T.CM_DUNGEON_GROUP_SEARCH,
            matchmakingData: {
                selectors: L
            }
        }), S.length > 0 && window.dofus.sendMessage("MatchmakingUpdateRequestMessage", {
            matchmakingFeature: T.DUNGEON_GROUP_SEARCH,
            matchmakingData: {
                selectors: S
            }
        }), E.length > 0 && window.dofus.sendMessage("MatchmakingUpdateRequestMessage", {
            matchmakingFeature: T.RAID_GROUP_SEARCH,
            matchmakingData: {
                selectors: E
            }
        })
    }

    function v() {
        L.length > 0 && window.dofus.sendMessage("MatchmakingCreateRequestMessage", {
            matchmakingFeature: T.CM_DUNGEON_GROUP_SEARCH,
            matchmakingData: {
                selectors: L
            }
        }), S.length > 0 && window.dofus.sendMessage("MatchmakingCreateRequestMessage", {
            matchmakingFeature: T.DUNGEON_GROUP_SEARCH,
            matchmakingData: {
                selectors: S
            }
        }), E.length > 0 && window.dofus.sendMessage("MatchmakingCreateRequestMessage", {
            matchmakingFeature: T.RAID_GROUP_SEARCH,
            matchmakingData: {
                selectors: E
            }
        })
    }

    function y() {
        var e = l(),
            t = window.gui.playerData.MatchmakingData.getDungeonSeekerUpdate() || window.gui.playerData.MatchmakingData.getRaidSeekerUpdate() || window.gui.playerData.MatchmakingData.getCMDungeonSeekerUpdate();
        return e && t
    }

    function z() {
        var e = {};
        e[I.CLASSIC] = !1, e[I.RAID] = !1, e[I.CM] = !1;
        var t = window.gui.playerData,
            i = t.partyData,
            n = i.getClassicalParty(),
            o = i.getDungeonParty();
        if (!n && !o) return e;
        var a = n ? Object.keys(n._members)
            .length + 1 : 0,
            r = o ? Object.keys(o._members)
            .length + 1 : 0;
        return e[I.CLASSIC] = a > 3 || r > 3, e[I.RAID] = a > 5 || r > 5, e[I.CM] = a > 4 || r > 4, e
    }

    function w(e) {
        return e === C.COMPLETED
    }
    var T = i(508),
        C = i(844),
        I = i(1408),
        S = [],
        E = [],
        L = [];
    t.reset = n, t.tagDungeon = o, t.clearUnavailableTaggedDungeons = a, t.getDungeonsTag = r, t.getRaidsTag = s, t.getCMDungeonsTag = c, t.isQueued = l, t.isAcceptance = d, t.canTag = u, t.isDungeonTagged = p, t.isRaidTagged = h, t.isCMDungeonTagged = f, t.isTagged = b, t.setTaggedList = m, t.setDungeonsTaggedList = M, t.setRaidsTaggedList = g, t.setCMDungeonsTaggedList = _, t.cancel = A, t.update = O, t.seek = v, t.canEdit = y, t.isGroupReachingMax = z, t.isMatchmakingSuccessfull = w
}
