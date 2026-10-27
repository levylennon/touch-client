function(e, t) {
    function i(e, t, i, n) {
        this.id = e, this.visible = !0, this.color = null, this.categoryId = t, this.infoData = i, this.dimensions = n, this.cluster = null, this.vertexBufferSlot = null
    }
    e.exports = i, i.prototype.setVisibility = function(e) {
        return this.visible !== e && (this.visible = e, this.cluster && (e ? this.cluster.nVisibleIcons += 1 : this.cluster.nVisibleIcons -= 1), !0)
    }
}
