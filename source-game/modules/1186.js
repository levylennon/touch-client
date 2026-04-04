function(e, t, i) {
    function n(e, t, i) {
        this.id = e, this.position = new o(t, i), this.icons = [], this.nVisibleIcons = 0
    }
    var o = i(1185),
        a = i(1184)
        .getRelativePositions;
    e.exports = n, n.prototype.getIconPosition = function(e) {
        var t = a(this.nVisibleIcons);
        if (!t[e]) {
            var i = "";
            if (this.icons && this.icons.length > 0) {
                var n = this.icons[0];
                n.infoData && n.infoData.x && n.infoData.y && (i = "[" + n.infoData.x + "," + n.infoData.y + "]")
            }
            return console.error(new Error("relativePositions for " + e + " is null, nVisibleIcons on the cluster is " + this.nVisibleIcons + ", clusterId is " + this.id + " " + i)), this.position
        }
        return this.position.plus(t[e])
    }, n.prototype.add = function(e) {
        this.icons.unshift(e), e.visible && (this.nVisibleIcons += 1)
    }, n.prototype.remove = function(e) {
        var t = this.icons.indexOf(e);
        t === -1 ? console.error(new Error("[IconCluster.remove] Icon not in cluster: " + e.id)) : (this.icons.splice(t, 1), e.visible && (this.nVisibleIcons -= 1))
    }
}
