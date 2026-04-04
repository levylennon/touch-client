function(e, t, i) {
    function n(e) {
        o.getAllDataMap(a, function(t, i) {
            return t ? e(t) : (window.gui.databases = i, void e())
        })
    }
    var o = i(130),
        a = ["AlignmentGift", "AlignmentRankJntGift", "AlignmentSides", "AlmanaxCalendars", "Areas", "BidHouseCategories", "Breeds", "ChatChannels", "Incarnation", "IncarnationLevels", "ItemTypes", "Months", "MountBehaviors", "OptionalFeatures", "QuestObjectiveTypes", "RankNames", "Roles", "ShieldModelsLevels", "Smileys", "SpellBombs", "SpellStates", "SpellTypes", "SuperAreas", "ToaRank", "TypeActions", "WorldMaps", "Heads"];
    e.exports.load = n
}
