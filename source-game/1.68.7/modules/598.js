function(e, t, i) {
    function n() {
        this.linksToReplace = [], this.previousLinks = []
    }

    function o(e) {
        var t = [],
            i = e.isItemInstance;
        if (i)
            for (var n = 0; n < e.effects.length; n++) {
                var o = e.effects[n];
                o && t.push(o.serialize())
            }
        return {
            _type: "ObjectItem",
            position: i ? e.position : 0,
            objectGID: i ? e.objectGID : e.id,
            objectUID: i ? e.objectUID : 0,
            effects: t,
            quantity: i ? e.quantity : 1
        }
    }
    var a = i(17)
        .getText,
        r = i(112),
        s = "￼";
    e.exports = n, n.OBJ_REPL_CHAR = s, n.prototype.newLinkForSending = function(e, t) {
        var i, n, o;
        if (this.linksToReplace.length >= r.MAX_CHAT_OBJECT_REF) return "";
        switch (e) {
            case "recipe":
                i = "[" + a("ui.common.recipes", 1) + a("ui.common.colon") + t.getName() + "]", n = "{recipe," + t.getProperty("id") + "}";
                break;
            case "itemStats":
                i = "[" + t.getName() + "]", n = s, o = t;
                break;
            case "monster":
                n = t.text, i = "[" + t.monsterName + ": " + t.posX + "," + t.posY + "]";
                break;
            case "shareLocation":
                n = t.text, i = "[" + t.posX + "," + t.posY + "]";
                break;
            default:
                return console.error(new Error("Invalid link type: " + e))
        }
        return this.linksToReplace.push([i, n, o]), " " + i + " "
    }, n.prototype.prepareForSending = function(e, t) {
        for (var i = 0; i < this.linksToReplace.length; i++) {
            var n = this.linksToReplace[i],
                a = e.replace(n[0], n[1]);
            n[2] && a !== e && t.push(o(n[2])), e = a
        }
        return this.previousLinks = this.linksToReplace, this.linksToReplace = [], e
    }, n.prototype.undoPrepareForSending = function() {
        this.linksToReplace = this.previousLinks
    }, n.prototype.replaceLinksReceived = function(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i],
                o = "{itemStats," + n.objectGID + "," + n.objectUID + "}";
            e = e.replace(s, o)
        }
        return e
    }
}
