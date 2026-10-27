// webpack module 395
export default function(e, t, i) {
    var n = i(105);
    n.on("SpellListMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
