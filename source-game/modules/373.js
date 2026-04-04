function(e, t, i) {
    var n = i(105);
    n.on("JobDescriptionMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("JobLevelUpMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("JobUnlearntMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("JobExperienceMultiUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("JobExperienceUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("JobAllowMultiCraftRequestMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("JobMultiCraftAvailableSkillsMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("JobCrafterDirectoryListMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("JobCrafterDirectorySettingsMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("JobListedUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("JobCrafterDirectoryRemoveMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("JobCrafterDirectoryAddMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("JobCrafterDirectoryEntryMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
