function(e, t, i) {
    function n() {
        this.features = {}
    }
    var o = i(59)
        .EventEmitter,
        a = i(56)
        .inherits,
        r = i(17)
        .getText,
        s = i(508),
        c = i(844),
        l = i(502);
    a(n, o), e.exports = n, n.prototype.initialize = function() {
        var e = this;
        window.dofus.connectionManager.on("MatchmakingStatusMessage", function(t) {
            switch ((e.isOnDungeonAcceptance() || e.isOnRaidAcceptance() || e.isOnCMDungeonAcceptance() || e.isOnKolosseum1v1Acceptance() || e.isOnKolosseum3v3Acceptance()) && t.matchmakingStatus !== c.REQUIRES_ACCEPTANCE && e._removeRequest(t.matchmakingFeature), e.features[s.DUNGEON_GROUP_SEARCH].proposalUpdate = !1, e.features[s.RAID_GROUP_SEARCH].proposalUpdate = !1, e.features[s.CM_DUNGEON_GROUP_SEARCH].proposalUpdate = !1, e.features[t.matchmakingFeature].matchmakingStatus = t.matchmakingStatus, t.matchmakingFeature) {
                case s.DUNGEON_GROUP_SEARCH:
                case s.RAID_GROUP_SEARCH:
                case s.CM_DUNGEON_GROUP_SEARCH:
                    e.emit("groupSeekerStatusUpdate", {
                        statusId: t.matchmakingStatus,
                        data: t.data
                    });
                    break;
                case s.PVP_3VS3:
                    e.emit("Kolosseum3v3StatusUpdate", {
                        statusId: t.matchmakingStatus,
                        data: t.data
                    });
                    break;
                case s.PVP_1VS1:
                    e.emit("Kolosseum1v1StatusUpdate", {
                        statusId: t.matchmakingStatus,
                        data: t.data
                    })
            }
        }), window.dofus.connectionManager.on("MatchmakingProposalMatchMessage", function(t) {
            e.features[t.matchmakingFeature].matchData = t.matchData[0], e._showRequest(t.matchmakingFeature, t.acceptanceDuration, t._enrichData)
        }), window.dofus.connectionManager.on("MatchmakingAcceptMatchMessage", function(t) {
            var i = window.gui.notificationBar,
                n = 0,
                o = "matchMaking" + t.matchmakingFeature;
            Object.keys(t.acceptanceResults)
                .forEach(function(e) {
                    var i = t.acceptanceResults[e];
                    i.accepted === !0 && n++
                });
            var a = 0,
                s = t.matchmakingFeature,
                c = e.features[s].matchData.team;
            if (c.length > 0)
                for (var l = 0; l < c.length; l += 1) a += c[l].size;
            else console.warn("Missing team data on Matchmaking feature id : " + s);
            var d = r("ui.matchmaking.feature" + t.matchmakingFeature + ".invitationTitle", r("ui.matchmaking.feature" + t.matchmakingFeature + ".name"), n, a);
            i.setTitleText(o, d)
        }), window.dofus.connectionManager.on("MatchmakingProposalUpdateMessage", function(t) {
            e.features[t.matchmakingFeature].proposalUpdate = !0
        })
    }, n.prototype.connect = function() {
        this.features[s.DUNGEON_GROUP_SEARCH] = {
            proposalUpdate: !1
        }, this.features[s.RAID_GROUP_SEARCH] = {
            proposalUpdate: !1
        }, this.features[s.CM_DUNGEON_GROUP_SEARCH] = {
            proposalUpdate: !1
        }, this.features[s.PVP_1VS1] = {}, this.features[s.PVP_3VS3] = {}
    }, n.prototype.disconnect = function() {
        this.features = {}
    }, n.prototype.isOnDungeonQueue = function() {
        var e = this.features[s.DUNGEON_GROUP_SEARCH].matchmakingStatus;
        return e === c.QUEUED
    }, n.prototype.isOnRaidQueue = function() {
        var e = this.features[s.RAID_GROUP_SEARCH].matchmakingStatus;
        return e === c.QUEUED
    }, n.prototype.isOnCMDungeonQueue = function() {
        var e = this.features[s.CM_DUNGEON_GROUP_SEARCH].matchmakingStatus;
        return e === c.QUEUED
    }, n.prototype.isOnKolosseum1v1Queue = function() {
        var e = this.features[s.PVP_1VS1].matchmakingStatus;
        return e === c.QUEUED
    }, n.prototype.isOnKolosseum3v3Queue = function() {
        var e = this.features[s.PVP_3VS3].matchmakingStatus;
        return e === c.QUEUED
    }, n.prototype.isOnDungeonAcceptance = function() {
        var e = this.features[s.DUNGEON_GROUP_SEARCH].matchmakingStatus;
        return e === c.REQUIRES_ACCEPTANCE
    }, n.prototype.isOnRaidAcceptance = function() {
        var e = this.features[s.RAID_GROUP_SEARCH].matchmakingStatus;
        return e === c.REQUIRES_ACCEPTANCE
    }, n.prototype.isOnCMDungeonAcceptance = function() {
        var e = this.features[s.CM_DUNGEON_GROUP_SEARCH].matchmakingStatus;
        return e === c.REQUIRES_ACCEPTANCE
    }, n.prototype.isOnKolosseum1v1Acceptance = function() {
        var e = this.features[s.PVP_1VS1].matchmakingStatus;
        return e === c.REQUIRES_ACCEPTANCE
    }, n.prototype.isOnKolosseum3v3Acceptance = function() {
        var e = this.features[s.PVP_3VS3].matchmakingStatus;
        return e === c.REQUIRES_ACCEPTANCE
    }, n.prototype.dungeonsTagged = function(e) {
        e.length && (this.features[s.DUNGEON_GROUP_SEARCH].dungeonsTagged = e)
    }, n.prototype.raidsTagged = function(e) {
        e.length && (this.features[s.RAID_GROUP_SEARCH].raidsTagged = e)
    }, n.prototype.getDungeonSeekerStatus = function() {
        return this.features[s.DUNGEON_GROUP_SEARCH].matchmakingStatus
    }, n.prototype.getRaidSeekerStatus = function() {
        return this.features[s.RAID_GROUP_SEARCH].matchmakingStatus
    }, n.prototype.getKolosseum1v1Status = function() {
        return !!this.features[s.PVP_1VS1] && this.features[s.PVP_1VS1].matchmakingStatus
    }, n.prototype.getKolosseum3v3Status = function() {
        return this.features[s.PVP_3VS3].matchmakingStatus
    }, n.prototype.getDungeonSeekerUpdate = function() {
        return this.features[s.DUNGEON_GROUP_SEARCH].proposalUpdate
    }, n.prototype.getRaidSeekerUpdate = function() {
        return this.features[s.RAID_GROUP_SEARCH].proposalUpdate
    }, n.prototype.getCMDungeonSeekerUpdate = function() {
        return this.features[s.CM_DUNGEON_GROUP_SEARCH].proposalUpdate
    }, n.prototype._showRequest = function(e, t, i) {
        function n(t) {
            var i = t > 0;
            return window.dofus.connectionManager.sendMessage("MatchmakingAcceptRequestMessage", {
                matchmakingFeature: e,
                accepted: i
            }), a.hideButtons(c), "NOTHING"
        }
        var o, a = window.gui.notificationBar,
            c = "matchMaking" + e,
            d = a.notificationType.INVITATION;
        if (e === s.DUNGEON_GROUP_SEARCH || e === s.RAID_GROUP_SEARCH || e === s.CM_DUNGEON_GROUP_SEARCH) o = r("ui.matchmaking.feature" + e + ".playerInvitation", i.nameId);
        else {
            if (e !== s.PVP_3VS3 && e !== s.PVP_1VS1) return console.error("Unknown feature " + e);
            o = r("ui.matchmaking.feature" + e + ".playerInvitation"), d = a.notificationType.KOLIZEUM
        }
        var u = 0,
            p = this.features[e].matchData.team;
        if (p.length > 0)
            for (var h = 0; h < p.length; h += 1) u += p[h].size;
        else console.warn("Missing team data on Matchmaking feature id : " + e);
        var f = {
            type: d,
            title: r("ui.matchmaking.feature" + e + ".invitationTitle", r("ui.matchmaking.feature" + e + ".name"), 0, u),
            wuidom: l.process(o),
            buttons: [{
                label: r("ui.common.refuse"),
                action: n
            }, {
                label: r("ui.common.accept"),
                action: n
            }],
            onClose: n,
            timer: t
        };
        a.newNotification(c, f)
    }, n.prototype._removeRequest = function(e) {
        window.gui.notificationBar.removeNotification("matchMaking" + e)
    }
}
