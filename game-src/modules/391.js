// webpack module 391
export default function(e, t, i) {
    var n = i(105);
    n.on("KamasUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ObjectAveragePricesMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
