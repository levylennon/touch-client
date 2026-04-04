function(e, t, i) {
    function n(e) {
        switch (e) {
            case c.PRISM_STATE_ATTACKED:
                return r.waitingForHelp;
            case c.PRISM_STATE_FIGHTING:
                return r.fighting;
            default:
                return r.noFight
        }
    }

    function o(e) {
        for (var t in e) this[t] = e[t];
        this.id = e.subAreaId, this.fightState = e.prism ? n(e.prism.state) : r.noFight
    }
    var a = i(526),
        r = a.fightState,
        s = i(17)
        .getText,
        c = i(522),
        l = i(504),
        d = i(21);
    t.Prism = o, o.prototype.updateInfo = function(e) {
        for (var t in e) this[t] = e[t];
        if (!e.prism) return void delete this.prism;
        var i = n(e.prism.state);
        if (i === r.waitingForHelp && this.fightState !== r.waitingForHelp) {
            var o = e.enrichData.subAreaName + " (" + e.enrichData.areaName + ")";
            window.gui.chat.logMsg(s("ui.prism.attacked", o, this.getPosition()), l.CHANNEL_ALLIANCE)
        }
        var a = this.getAlliance();
        a.allianceEmblem.isAlliance = !0, this.fightState = i
    }, o.prototype.getPlacementDate = function() {
        return new d.DofusDate(1e3 * this.prism.placementDate)
            .getServerDate()
            .toString()
            .date
    }, o.prototype.getName = function() {
        var e = window.gui.playerData.alliance.current;
        return s("ui.zaap.prism") + " " + e.allianceName
    }, o.prototype.getPosition = function() {
        return this.worldX + "," + this.worldY
    }, o.prototype.getAlliance = function() {
        if (this.prism) return "AllianceInsiderPrismInformation" === this.prism._type ? window.gui.playerData.alliance.current : this.prism.alliance
    }
}
