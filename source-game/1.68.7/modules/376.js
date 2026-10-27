function(e, t, i) {
    var n = i(105),
        o = i(12),
        a = i(13),
        r = a.ITEM_DIR;
    n.on("ObjectGroundAddedMessage", function(e) {
        var t = {
            cellId: e.cellId,
            objectGID: e.objectGID
        };
        o.loadImage(r + e._iconId + ".png", function(e) {
            t.img = e, window.isoEngine.addObjects([t])
        })
    }), n.on("ObjectGroundListAddedMessage", function(e) {
        for (var t = [], i = [], n = 0, a = e.cells.length; n < a; n++) {
            t.push({
                cellId: e.cells[n],
                objectGID: e.referenceIds[n]
            }), i.push(r + e._iconIds[n] + ".png");
            var s = window.isoEngine.mapRenderer.objects[e.cells[n]];
            s && s.remove()
        }
        o.loadImages(i, null, function(e) {
            for (var i = 0; i < e.length; i++) t[i].img = e[i];
            window.isoEngine.addObjects(t)
        })
    }), n.on("ObjectGroundRemovedMessage", function(e) {
        window.isoEngine.removeObjects([e.cell])
    }), n.on("ObjectGroundRemovedMultipleMessage", function(e) {
        window.isoEngine.removeObjects(e.cells)
    })
}
