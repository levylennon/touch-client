// webpack module 388
export default function(e, t, i) {
    var n = i(105);
    n.on("SetCharacterRestrictionsMessage", function(e) {
        window.isoEngine.actorManager.userActor.updateRestrictions(e.restrictions)
    }), n.on("ServerExperienceModificatorMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
