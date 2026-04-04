function(e, t, i) {
    var n = i(1514),
        o = i(17)
        .getText,
        a = i(512)
        .npcActionRequest,
        r = i(52);
    n.prototype.openPlayerContextualMenu = function(e) {
        var t = this.data;
        if (!t || !t.accountId) return void console.error("openPlayerContextualMenu was called on non player actor", this.actorId);
        var i = this.cellId;
        window.gui.openContextualMenu("player", {
            accountId: t.accountId,
            playerId: t.playerId,
            playerName: t.name,
            cellId: i,
            isMutant: "GameRolePlayMutantInformations" === t.type,
            humanoidInfoOptions: t.humanoidInfo && t.humanoidInfo.options,
            alignmentInfos: t.alignmentInfos,
            isInteractiveRequired: !0
        }, e)
    }, n.prototype.openNpcContextualMenu = function(e) {
        var t = this.data;
        if (!t || !t.npcData) return void console.error("openNpcContextualMenu was called on non npc actor", this.actorId);
        var i = window.isoEngine,
            n = i.mapRenderer.map.id,
            o = this.actorId;
        return window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.NPC_INTERACTION, {
            npcId: t.npcId
        }), 0 === t.npcData.actions.length ? void i.highlightActorOnAction(o) : 1 === t.npcData.actions.length && window.gui.playerData.isAlive() ? (i.highlightActorOnAction(o), a(t.npcData, this.actorId, n, t.npcData.actions[0])) : void window.gui.openContextualMenu("npc", {
            actorId: o,
            npcId: t.npcId,
            npcData: t.npcData,
            mapId: n
        }, e)
    }, n.prototype.tap = function(e, t) {
        var i = this.actorId,
            n = this.cellId,
            a = this.data,
            s = this.scene.convertSceneToCanvasCoordinate(e, t),
            c = {
                x: s.x,
                y: s.y,
                isCanvasCoordinate: !0
            },
            l = window.actorManager.getActorsOnCell(n)
            .length,
            d = window.actorManager.getActorsOnCellByTypes(n),
            u = d.onlinePlayer,
            p = u.length,
            h = d.npc,
            f = d.other;
        if (1 === l) switch (a.type) {
            case "GameRolePlayGroupMonsterInformations":
                window.gui.openContextualMenu("monster", a, c);
                break;
            case "GameRolePlayPrismInformations":
                window.gui.openContextualMenu("prism", a, c);
                break;
            case "GameRolePlayTaxCollectorInformations":
                a.mapId = window.isoEngine.mapRenderer.map.id, window.gui.openContextualMenu("taxCollector", a, c);
                break;
            case "GameRolePlayNpcInformations":
            case "GameRolePlayNpcWithQuestInformations":
                var b = window.isoEngine,
                    m = b.mapRenderer.map.id,
                    M = a.npcId;
                if (!M) return;
                var g = a.npcData;
                if (!g) return console.error("NPC id", M, "missing in database on mapId", m);
                this.openNpcContextualMenu(c);
                break;
            case "GameRolePlayCharacterInformations":
            case "GameRolePlayMutantInformations":
                1 === p ? this.openPlayerContextualMenu(c) : this.isFollower || console.error("nbOnlinePlayersOnCell has an unexpected value (< 1): ", p, this.actorId);
                break;
            case "FightTeamInformations":
            case "FightAllianceTeamInformations":
            case "FightTeamLightInformations":
                window.gui.openContextualMenu("fightTeam", a, c);
                break;
            case "GameFightMutantInformations":
            case "GameFightCharacterInformations":
                window.gui.openContextualMenu("player", {
                    playerId: a.playerId,
                    playerName: a.name,
                    isMutant: "GameFightMutantInformations" === a.type
                }, c);
                break;
            case "GameRolePlayMountInformation":
                var _ = [{
                    caption: o("ui.mount.viewMountDetails"),
                    cb: function() {
                        r.getWindow("mount")
                            .showPaddockMount(i)
                    }
                }];
                window.gui.openContextualMenu("generic", {
                    title: (a.name || o("ui.common.noName")) + "\n" + o("ui.mount.mountOf", a.ownerName) + "\n" + o("ui.common.rank", a.level),
                    actions: _
                }, c);
                break;
            case "GameFightMonsterInformations":
            case "GameFightMonsterWithAlignmentInformations":
            case "GameFightTaxCollectorInformations":
                return void window.gui.openContextualMenu("fightSwap", a, c);
            case "PaddockObject":
                window.gui.openContextualMenu("paddockObject", {
                    cellId: n,
                    paddockObjectName: this.data.name
                }, c)
        } else window.gui.openContextualMenu("playersList", {
            coordinates: c,
            actors: u,
            npc: h[0],
            monster: f[0]
        })
    }
}
