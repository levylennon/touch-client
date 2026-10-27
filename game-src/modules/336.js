// webpack module 336
export default function(e, t, i) {
    var n = i(105);
    n.on("ConsoleMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ConsoleCommandsListMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
