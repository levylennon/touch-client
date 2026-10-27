// webpack module 371
export default function(e, t, i) {
    var n = i(105);
    n.on("GameRolePlayArenaUpdatePlayerInfosMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
