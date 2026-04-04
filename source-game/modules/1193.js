function(e, t, i) {
    function n() {
        this._deferredActionQueue = new r, this._iconTaxCollectors = null, this._worldmap = null, a.on("taxCollectorList", this.onTaxCollectorsList.bind(this))
    }

    function o(e, t) {
        if (!t) return !1;
        for (var i = e.complements || [], n = 0; n < i.length; n += 1) {
            var o = i[n];
            if ("TaxCollectorGuildInformations" === o._type && o.guild.guildId !== t.guildId) return !1
        }
        return !0
    }
    var a = i(524),
        r = i(1191),
        s = i(17)
        .getText,
        c = i(757),
        l = i(18),
        d = i(130),
        u = i(520);
    e.exports = n, n.prototype.updateTaxCollectors = function() {
        window.gui.playerData.guild.hasGuild() && window.dofus.sendMessage("GuildGetInformationsMessage", {
            infoType: c.INFO_TAX_COLLECTOR_GUILD_ONLY
        })
    }, n.prototype._updateIconsFromTaxCollectors = function(e) {
        var t = this,
            i = {};
        l.each(e, function(e, n) {
            var a = window.gui.playerData.guild;
            if (!a.hasGuild()) return n(new Error("No guild, why is there a tax collector update"));
            var r = a.hasRight(u.GUILD_RIGHT_HIRE_TAX_COLLECTOR) || a.hasRight(u.GUILD_RIGHT_COLLECT_MY_TAX_COLLECTOR) || a.hasRight(u.GUILD_RIGHT_COLLECT);
            if (!o(e, a.current) || !r) return n();
            var s = t.getIconInfo(e),
                c = s.subAreaId;
            return void 0 === c || null === c ? (i[s.id] = s, n()) : void d.getDataMap("SubAreas", [c], null, function(e, o) {
                if (e) return n(e);
                var a = o[c],
                    r = a.areaId,
                    l = window.gui.databases.Areas[r];
                if (!l) return n(new Error("The area " + r + " doesn't exist"));
                var d = l.superAreaId,
                    u = window.gui.databases.SuperAreas[l.superAreaId];
                if (!u) return n(new Error("The super area " + d + " doesn't exist"));
                var p = a.customWorldMap[0] || u.worldmapId;
                return p === t._worldmap.getDisplayedWorldmapId() && (i[s.id] = s), n()
            })
        }, function(e) {
            if (e) return console.error(e);
            var n, o;
            if (t._iconTaxCollectors)
                for (n in t._iconTaxCollectors) t._iconTaxCollectors.hasOwnProperty(n) && (o = t._iconTaxCollectors[n], i.hasOwnProperty(o.id) || t._worldmap.removeIcon(o.id));
            for (n in i) i.hasOwnProperty(n) && (o = i[n], t._iconTaxCollectors ? t._iconTaxCollectors.hasOwnProperty(o.id) || t._worldmap.addIcon(o, "icon_" + o.gfx) : t._worldmap.addIcon(o, "icon_" + o.gfx));
            t._iconTaxCollectors = i
        })
    }, n.prototype.onTaxCollectorsList = function(e, t) {
        function i() {
            n._updateIconsFromTaxCollectors(t)
        }
        var n = this;
        this._worldmap ? i() : this._deferredActionQueue.enqueue(i)
    }, n.prototype.setWorldMap = function(e) {
        this._worldmap = e, this._deferredActionQueue.signal()
    }, n.prototype.getIconInfo = function(e) {
        return {
            id: "tax_" + e.worldX + "_" + e.worldY,
            x: e.worldX,
            y: e.worldY,
            subAreaId: e.subAreaId,
            categoryId: 7,
            gfx: "1003",
            nameId: s("ui.common.taxCollector")
        }
    }
}
