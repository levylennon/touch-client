function(e, t, i) {
    function n(e, t, i, n, o, s, c, l) {
        var d = a / i,
            u = r / i;
        this.x = e * d, this.y = t * u, this.w = d, this.h = u, this.id = n, this.path = o, this.texture = s, this.scene = c, this.distToViewCenter = l
    }
    var o = i(1181),
        a = o.CHUNK_WIDTH,
        r = o.CHUNK_HEIGHT;
    e.exports = n
}
