function(e, t, i) {
    function n(e) {
        var t = Math.min(e - 1, c),
            i = new r("div", {
                className: "emptyFrame"
            });
        i.setStyles({
            left: t * l + "px",
            top: t * d + "px"
        });
        for (var n = i, o = t - 1; o >= 0; o--) n = n.createChild("div", {
            className: "emptyFrame"
        });
        return n.createChild("div", {
            className: "number",
            text: e
        }), i
    }

    function o(e, t) {
        this.sourceData = {
            mount: null
        }, this.styles = {}, this.onDragClassName = "draggedMount", this.wElement = t, this.imgElement = t, this.breedingWindow = e;
        var i = {
            dragInsteadOfScroll: !0,
            containerWidth: u,
            containerHeight: p
        };
        a.setDraggable(t, this, s, this.sourceData, i)
    }
    i(978);
    var a = i(418),
        r = i(72),
        s = "mountRoom",
        c = 7,
        l = -4,
        d = 4,
        u = 138,
        p = 118;
    e.exports = o, o.DRAG_ID = s, o.prototype.setMount = function(e, t) {
        this.sourceData.mount = e, this.imgElement = t || this.imgElement
    }, o.prototype.setStyle = function(e, t) {
        this.styles[e] = t
    }, o.prototype.prepareForDrag = function(e, t) {
        this.setStyle("backgroundImage", this.imgElement.getStyle("backgroundImage"));
        var i = this.breedingWindow.prepareDraggedTiles(this.sourceData.mount);
        if (i > 1) {
            t.addClassNames("multiselect");
            var o = n(i);
            t.insertAsFirstChild(o), this.wElement.once("dragEnd", function() {
                t.removeChild(o), t.delClassNames("multiselect")
            })
        }
        return !0
    }
}
