function(e, t) {
    t.getEquippedItemById = function(e, t) {
        var i = e.equippedItems;
        for (var n in i)
            if (i.hasOwnProperty(n)) {
                var o = i[n];
                if (o.isInitialised && o.objectGID === t) return o
            } return null
    }
}
