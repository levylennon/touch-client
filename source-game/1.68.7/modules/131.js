function(e, t) {
    e.exports.cacheDatabaseSuffix = "DataCache";
    var i = "isCacheComplete";
    e.exports.cacheCompletion = i,
    e.exports.typeNames = ["AbuseReasons", "AchievementCategories", "AchievementObjectives", "AchievementRewards", "Achievements", "ActionDescriptions", "AlignmentBalance", "AlignmentEffect", "AlignmentGift", "AlignmentOrder", "AlignmentRank", "AlignmentRankJntGift", "AlignmentSides", "AlignmentTitles", "AlmanaxCalendars", "Appearances", "Areas", "BidHouseCategories", "Breeds", "CensoredContents", "CensoredWords", "Challenge", "ChatChannels", "Companions", "Documents", "Dungeons", "Effects", "EmblemBackgrounds", "EmblemSymbolCategories", "EmblemSymbols", "Emoticons", "ExternalNotifications", "Heads", "HintCategory", "Hints", "Houses", "Incarnation", "IncarnationLevels", "InfoMessages", "Interactives", "Items", "ItemSets", "ItemTypes", "Jobs", "LivingObjectSkinJntMood", "MapCoordinates", "MapPositions", "MapReferences", "MonsterMiniBoss", "MonsterRaces", "Monsters", "MonsterSuperRaces", "Months", "MountBehaviors", "MountBones", "Mounts", "Notifications", "NpcActions", "NpcMessages", "Npcs", "OptionalFeatures", "Ornaments", "Pack", "Pets", "PresetIcons", "QuestCategory", "QuestObjectives", "QuestObjectiveTypes", "Quests", "QuestStepRewards", "QuestSteps", "RankNames", "Recipes", "RideFood", "Roles", "ServerCommunities", "ServerGameTypes", "ServerPopulations", "Servers", "ShieldModelsLevels", "SkillNames", "Skills", "SkinMappings", "Smileys", "SoundBones", "SoundUi", "SoundUiHook", "SpeakingItemsText", "SpeakingItemsTriggers", "SpellBombs", "SpellEffects", "SpellLevels", "Spells", "SpellStates", "SpellTypes", "StealthBones", "SubAreaIdPerCoordinate", "SubAreas", "SubAreasWorldMapData", "SuperAreas", "TacticalThemes", "TaxCollectorFirstnames", "TaxCollectorNames", "Tips", "TitleCategories", "Titles", "ToaRank", "TypeActions", "UniqueDrops", "UpgradeTemplates", "Url", "WorldMaps"];
    var n = {
        AbuseReasons: "_abuseReasonId",
        AlignmentTitles: "sideId",
        Houses: "modelId",
        InfoMessages: "messageId",
        LivingObjectSkinJntMood: "skinId",
        MapCoordinates: "compressedCoords",
        Recipes: "resultId",
        SpeakingItemsText: "textId",
        SpeakingItemsTriggers: "triggersId"
    };
    e.exports.getKey = function(e) {
        return n[e] || "id"
    };
    var o = {};
    o[i] = !0, e.exports.hasStringId = function(e) {
        return o[e] || !1
    }
}
