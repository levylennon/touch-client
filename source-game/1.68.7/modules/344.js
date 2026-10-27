function(e, t, i) {
    var n = i(105);
    n.on("AchievementListMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AchievementDetailsMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AchievementDetailedListMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AchievementFinishedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AchievementRewardSuccessMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AchievementRewardErrorMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
