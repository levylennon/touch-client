// webpack module 359
export default function(e, t, i) {
    function n(e) {
        window.isoEngine.displayNumericalValue(e)
    }
    var o = i(105);
    o.on("DisplayNumericalValueMessage", n), o.on("DisplayNumericalValueWithAgeBonusMessage", n)
}
