function(e, t) {
    function i(e) {
        e = e || {}, this.id = e.id, this.categoryId = e.categoryId || "custom", this.x = e.x, this.y = e.y, this.nameId = e.nameId || "", this.color = e.color, this.color && !Array.isArray(this.color) && (this.color = [this.color.r / 124, this.color.g / 124, this.color.b / 124, this.color.a]), this.data = e.data, this.isDestination = e.isDestination, this.iconId = e.iconId || n
    }
    var n = "flag0";
    e.exports = i
}
