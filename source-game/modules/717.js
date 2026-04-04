function(e, t) {
    e.exports = function(e) {
        var t = e.base;
        return {
            parent: e,
            child: "AnimMarche" === t || "AnimCourse" === t ? e : null
        }
    }
}
