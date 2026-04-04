function(e, t, i) {
    function n(e) {
        d = !1, p = e.login, s.logIn(), a.log("Session_Info.Login", {
            account_session_id: p
        })
    }

    function o() {
        function e(e) {
            a.register(e)
        }
        b || h && f && e(h)
    }
    var a = i(117),
        r = i(124),
        s = i(125),
        c = window.dofus.connectionManager,
        l = i(126)(c),
        d = !1,
        u = 0,
        p = "",
        h = 0,
        f = !1,
        b = !1;
    window.gui.on("disconnect", function() {
        a.unregister(), h = 0, f = !1, b = !1
    }), window.gui.on("initialized", function() {
        l.initFightEvents(window.gui.fightManager)
    }), c.on("NicknameAcceptedMessage", function() {
        a.log("F_T_U_E.Step0000_Chose_Nickname")
    }), c.on("ServersListMessage", function(e) {
        for (var t = 0, i = e.servers || [], n = 0, o = i.length; n < o; n += 1) {
            var a = i[n];
            t += a.charactersCount
        }
        d = !t
    }), c.on("IdentificationSuccessMessage", n), c.on("IdentificationSuccessWithLoginTokenMessage", n), c.on("SelectedServerDataMessage", function(e) {
        a.log("Session_Info.Choose_Server", {
            account_session_id: p
        }), d && a.log("F_T_U_E.Step0100_Chose_Server", {
            server_id: e.serverId
        })
    }), c.on("CharacterCreationResultMessage", function(e) {
        d && e.result === r.OK && a.log("F_T_U_E.Step0200_Create_First_Character")
    }), window.gui.playerData.on("characterSelectedSuccess", function() {
        u = window.gui.playerData.characterBaseInformations.level, f = !0, o(), a.log("Session_Info.Choose_Character")
    }), c.on("ServerKpiSessionStartedMessage", function(e) {
        h = e.kpiSessionId, o()
    }), c.on("CharacterLevelUpMessage", function(e) {
        a.log("User_Life_Cycle.Level_Up", {
            old_level: u
        }), s.trackLevelGrowth(u, e.newLevel), u = e.newLevel
    }), c.on("AchievementFinishedMessage", function(e) {
        a.log("User_Life_Cycle.Achievement_Achieved", {
            achievement_id: e.id
        })
    }), c.on("AchievementRewardSuccessMessage", function(e) {
        a.log("User_Life_Cycle.Achievement_Get_Reward", {
            achievement_id: e.achievementId
        })
    }), window.gui.playerData.quests.on("questStarted", function(e) {
        a.log("User_Life_Cycle.Quest_Start", {
            quest_id: e
        })
    }), window.gui.playerData.quests.on("QuestFinished", function(e) {
        a.log("User_Life_Cycle.Quest_End", {
            quest_id: e
        })
    }), window.gui.playerData.quests.on("DQStarted", function(e) {
        a.log("User_Life_Cycle.daily_quest_start", {
            quest_id: e
        })
    }), window.gui.playerData.quests.on("mainDQStarted", function(e) {
        a.log("User_Life_Cycle.daily_quest_start", {
            quest_id: e
        })
    }), window.gui.playerData.quests.on("DQFinished", function(e) {
        a.log("User_Life_Cycle.daily_quest_end", {
            quest_id: e
        })
    }), c.on("QuestObjectiveValidatedMessage", function(e) {
        var t = window.gui.playerData.quests.all[e.questId] || {},
            i = t.stepId || 0;
        a.log("User_Life_Cycle.Quest_Step_Objective_Success", {
            quest_id: e.questId,
            objective_id: e.objectiveId,
            step_id: i
        })
    }), c.on("QuestStepValidatedMessage", function(e) {
        a.log("User_Life_Cycle.Quest_Step_Success", {
            quest_id: e.questId,
            step_id: e.stepId
        })
    }), c.on("DungeonEnteredMessage", function(e) {
        a.log("User_Life_Cycle.Donjon_Start", {
            dungeon_id: e.dungeonId
        })
    }), c.on("JobLevelUpMessage", function(e) {
        a.log("User_Life_Cycle.Profession_Level_Up", {
            job_id: e.jobsDescription.jobId,
            new_level: e.newLevel
        })
    }), c.on("GameRolePlayPlayerLifeStatusMessage", function(e) {
        e.state > 0 && a.log("User_Life_Cycle.Death")
    }), c.on("PartyJoinMessage", function(e) {
        a.log("social.fight_group_join", {
            group_id: e.partyId
        })
    }), c.on("PartyDeletedMessage", function(e) {
        a.log("social.fight_group_quit", {
            group_id: e.partyId
        })
    }), c.on("PartyLeaveMessage", function(e) {
        a.log("social.fight_group_quit", {
            group_id: e.partyId
        })
    }), c.on("PartyKickedByMessage", function(e) {
        a.log("social.fight_group_quit", {
            group_id: e.partyId
        })
    });
    var m = null;
    c.on("GuildMembershipMessage", function(e) {
        m = e.guildInfo.guildId
    }), c.on("GuildJoinedMessage", function(e) {
        m = e.guildInfo.guildId, a.log("social.guild_join", {
            guild_id: m
        })
    }), c.on("GuildLeftMessage", function() {
        a.log("social.guild_quit", {
            guild_id: m
        })
    })
}
