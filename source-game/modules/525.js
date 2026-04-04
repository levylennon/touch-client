function(e, t, i) {
    function n(e) {
        switch (e) {
            case d.WAITING_FOR_HELP:
                return s.waitingForHelp;
            case d.FIGHTING:
                return s.fighting;
            default:
                return s.noFight
        }
    }

    function o(e) {
        this.id = e.uniqueId, this.level = 0, this.updateInfo(e)
    }
    var a = i(526),
        r = i(527),
        s = a.fightState,
        c = i(17)
        .getText,
        l = i(16),
        d = {
            NORMAL: 0,
            WAITING_FOR_HELP: 1,
            FIGHTING: 2
        },
        u = i(531),
        p = i(504);
    t.TaxCollector = o, o.prototype.updateInfo = function(e) {
        for (var t in e) this[t] = e[t];
        this.fightState = n(e.state);
        var i = l.getObjectInArrayById(e.complements, "_type", "TaxCollectorWaitingForHelpInformations");
        i && (this.waitingForHelpInfo = i.waitingForHelpInfo);
        var o = l.getObjectInArrayById(e.complements, "_type", "TaxCollectorGuildInformations");
        o && (this.guildId = o.guild.guildId, this.level = r.guilds[this.guildId].guildLevel)
    }, o.prototype.getGuild = function() {
        return r.guilds[this.guildId]
    }, o.prototype.getName = function() {
        return this.enrichData.firstName + " " + this.enrichData.lastName
    }, o.prototype.getPosition = function() {
        return this.worldX + "," + this.worldY
    }, t.setupEvents = function() {
        var e = window.gui;
        e.on("TaxCollectorMovementMessage", function(e) {
            var t = e.basicInfos,
                i = t.enrichData || {},
                n = i.firstName + " " + i.lastName,
                o = t.worldX + "," + t.worldY,
                a = "";
            a = e.hireOrFire ? c("ui.social.TaxCollectorAdded", n, o, e.playerName) : c("ui.social.TaxCollectorRemoved", n, o, e.playerName), window.gui.chat.logMsg(a, p.CHANNEL_GUILD)
        }), e.on("TaxCollectorAttackedMessage", function(e) {
            var t = e.enrichData,
                i = t.firstName + " " + t.lastName,
                n = e.worldX + "," + e.worldY,
                o = window.gui.playerData,
                a = o.guild.current.guildId,
                r = a === e.guild.guildId,
                s = r ? "guild,perceptors" : "alliance,attacks";
            window.gui.chat.logMsg(c("ui.social.TaxCollectorAttacked", s, i, e.guild.guildName, n), p.CHANNEL_GUILD)
        }), e.on("TaxCollectorErrorMessage", function(e) {
            var t;
            switch (e.reason) {
                case u.TAX_COLLECTOR_ALREADY_ONE:
                    t = c("ui.social.alreadyTaxCollectorOnMap");
                    break;
                case u.TAX_COLLECTOR_CANT_HIRE_HERE:
                    t = c("ui.social.cantHireTaxCollecotrHere");
                    break;
                case u.TAX_COLLECTOR_CANT_HIRE_YET:
                    t = c("ui.social.cantHireTaxcollectorTooTired");
                    break;
                case u.TAX_COLLECTOR_ERROR_UNKNOWN:
                    t = c("ui.social.unknownErrorTaxCollector");
                    break;
                case u.TAX_COLLECTOR_MAX_REACHED:
                    t = c("ui.social.cantHireMaxTaxCollector");
                    break;
                case u.TAX_COLLECTOR_NO_RIGHTS:
                    t = c("ui.social.taxCollectorNoRights");
                    break;
                case u.TAX_COLLECTOR_NOT_ENOUGH_KAMAS:
                    t = c("ui.social.notEnougthRichToHireTaxCollector");
                    break;
                case u.TAX_COLLECTOR_NOT_OWNED:
                    t = c("ui.social.notYourTaxcollector")
            }
            if (t) {
                var i = window.gui.chat;
                i.logError(t)
            }
        }), e.on("TaxCollectorAttackedResultMessage", function(e) {
            var t, i = e.basicInfos,
                n = i.enrichData || {},
                o = n.firstName + " " + n.lastName,
                a = i.worldX + "," + i.worldY;
            t = e.deadOrAlive ? c("ui.social.TaxCollectorDied", o, e.guild.guildName, a) : c("ui.social.TaxCollectorSurvived", o, e.guild.guildName, a), window.gui.chat.logMsg(t, p.CHANNEL_GUILD)
        }), e.on("ExchangeGuildTaxCollectorGetMessage", function(e) {
            for (var t = e.objectsInfos || [], i = "", n = 0; n < t.length; n += 1) {
                i && (i += ", ");
                var o = t[n],
                    a = o.enrichData || {};
                i += o.quantity + "x" + a.itemName
            }
            var r = "";
            r = i ? c("ui.social.thingsTaxCollectorGet", i, e.experience) : c("ui.social.xpTaxCollectorGet", e.experience);
            var s = e.enrichData || {},
                l = c("ui.social.taxcollectorRecolted", s.firstName + " " + s.lastName, "(" + e.worldX + ", " + e.worldY + ")", e.userName, r);
            window.gui.chat.logMsg(l, p.CHANNEL_GUILD)
        })
    }
}
