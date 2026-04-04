function(e, t, i) {
    function n(e) {
        return Boolean(A[e])
    }
// #serversData
    function o() {
        r.call(this),
        this.serversRawData = [],
        this.serversWithMyCharacter = [],
        this.optionalFeatures = {},
        this.connectedServerId = null,
        this.connectedServerData = null,
        this.sessionConstants = {},
        this.settings = {}
    }
    var a = i(105),
        r = i(59).EventEmitter,
        s = i(56).inherits,
        c = i(130),
        l = i(52),
        d = i(17).getText,
        u = i(141),
        p = i(761),
        h = i(762),
        f = i(12),
        b = i(763),
        m = i(13),
        M = i(14),
        g = 6e4,
        _ = !1,
        A = {
            401: !0,
            402: !0,
            407: !0,
            403: !0,
            404: !0,
            405: !0,
            406: !0,
            408: !0,
            409: !0,
            410: !0,
            411: !0
        };
    e.exports = o, s(o, r), o.serverConstants = {
        SERVER_CONST_TIME_BEFORE_DISCONNECTION: 1,
        SERVER_CONST_KOH_DURATION: 2,
        SERVER_CONST_KOH_WINNING_SCORE: 3,
        SERVER_CONST_MINIMAL_TIME_BEFORE_KOH: 4,
        SERVER_CONST_TIME_BEFORE_WEIGH_IN_KOH: 5
    }, 
    o.prototype._continueSelectServer = function(e) {
        var t = M();
        this.connectedServerId = e, this.connectedServerData = this._findServerById(e), t.dofus.accessGameServer(e, function(t) {
            if (t) return console.error(new Error("accessGameServer serverId: " + e + ", error: " + t))
        }), this.failTimeout && (console.warn("Clearing previous connection timeout from ServersData.selectServer"), t.clearTimeout(this.failTimeout));
        var i = this;
        this.failTimeout = t.setTimeout(function() {
            i._onSelectedServerRefused({
                serverId: e,
                serverStatus: p.STATUS_UNKNOWN,
                error: h.SERVER_CONNECTION_ERROR_NO_REASON
            })
        }, g), t.gui.once("AuthenticationTicketAcceptedMessage", function() {
            t.clearTimeout(i.failTimeout), i.failTimeout = null
        })
    }, 
    o.prototype.selectServer = function(e) {
        var t = this,
            i = M();
        if (!e) return console.error(new Error("serverId is null")), void this._onSelectedServerRefused({});
        var n = i.Config.preferredServerId;
        n && n !== e ? i.gui.openConfirmPopup({
            title: d("ui.server.confirmPreferredServerTitle"),
            message: d("ui.server.confirmPreferredServerMessage"),
            cb: function(i) {
                i ? t._continueSelectServer(e) : u.goBackToSelectionOf("server")
            }
        }) : t._continueSelectServer(e)
    }, 
    o.prototype.showServerSelectionUi = function() {
        this.serversWithMyCharacter.length > 0 ? l.open("serverListSelection", { seeCharacters: !0 }) : l.open("serverSimpleSelection", this.serversRawData)
    }, 
    o.prototype._filterMyServersList = function() {
        this.serversWithMyCharacter = this.serversRawData.filter(function(e) {
            return e && e.charactersCount > 0
        }), this.serversWithMyCharacter.sort(function(e, t) {
            return t.date - e.date
        })
    }, 
    o.prototype.initialize = function(e) {
        var t = this;
        e.on("disconnect", function() {
            t.serversRawData = [],
            t.serversWithMyCharacter = [],
            t.optionalFeatures = {},
            t.connectedServerId = null,
            t.connectedServerData = null,
            t.sessionConstants = {},
            t.settings = {}
        }), 
        e.on("ServerStatusUpdateMessage", function(e) {
            if (!e.server) return console.warn("WARN: ServerStatusUpdateMessage message have no server information");
            for (var i = e.server, n = !0, o = 0, a = t.serversRawData.length; o < a; o += 1)
                if (i.id === t.serversRawData[o].id) {
                    t.serversRawData[o] = i,
                    n = !1;
                    break
                } n && t.serversRawData.push(i), t._filterMyServersList(), t.emit("serversUpdate", i)
        }), 
        e.on("SelectedServerRefusedMessage", function(e) {
            t._onSelectedServerRefused(e)
        }), 
        e.on("ServerOptionalFeaturesMessage", function(e) {
            t.optionalFeatures = {};
            for (var i = window.gui.databases.OptionalFeatures, n = 0, o = e.features.length; n < o; n += 1) {
                var a = e.features[n];
                t.optionalFeatures[i[a].keyword] = a
            }
        }), 
        e.on("ServerSessionConstantsMessage", function(e) {
            t.sessionConstants = {};
            for (var i = e.variables, n = 0, o = e.variables.length; n < o; n += 1) t.sessionConstants[i[n].id] = i[n].value
        }), 
        e.on("ServerSettingsMessage", function(e) {
            t.settings.serverCommunityId = e.community, t.settings.serverLang = e.lang, t.settings.serverGameType = e.gameType
        }), 
        a.on("CharacterSelectedSuccessMessage", function() {
            t.staticContent = null
        }), 
        a.on("AuthenticationTicketRefusedMessage", function() {
            t.failTimeout && window.clearTimeout(t.failTimeout)
        })
    }, 
    o.prototype.onServerList = function(e) {
        this.serversRawData = e.servers,
        this._filterMyServersList();

        var t = u.connectMethod,
            i = "lastServer" === t || "lastCharacter" === t || "characterId" === t;
        if (i) {
            var n = this.serversWithMyCharacter[0] || {},
                o = n.id;
            if (o && n.status === p.ONLINE && n.isSelectable) return this.selectServer(o)
        }
        this.showServerSelectionUi()
    }, 
    o.prototype.isFeatureActive = function(e) {
        return this.optionalFeatures.hasOwnProperty(e);
    }, 
    o.prototype.syncServerStaticData = function(e) {
        var t = this;
        if (this.staticContent) return e();
        var i = ["Servers", "ServerGameTypes", "ServerPopulations", "ServerCommunities"];
        c.getAllDataMap(i, function(i, n) {
            return i ? e(i) : (t.staticContent = {}, t.staticContent.data = n.Servers, t.staticContent.gameTypes = n.ServerGameTypes, t.staticContent.populations = n.ServerPopulations, t.staticContent.communities = n.ServerCommunities, e())
        })
    }, 
    o.prototype.getAutoChosenServers = function(e, t) {
        var i = this;
        e = e || {};
        var n = M()
            .gui.playerData.identification.communityId;
        (e.communityId || 0 === e.communityId) && (n = e.communityId), this.syncServerStaticData(function(e) {
            return e ? t(e) : void b(i.serversRawData, i.staticContent, n, m.RESTRICTED_SERVER_IDS, t)
        })
    }, 
    o.prototype.pickUpOneServerForMe = function() {
        this.getAutoChosenServers(null, function(e, t) {
            if (e) return window.gui.openSimplePopup(d("tablet.server.noServersForYourCommunity")), void(_ || (console.error("pickUpOneServerForMe:", e), _ = !0));
            var i = t[Math.floor(Math.random() * t.length)];
            i && l.open("serverDetails", i)
        })
    }, 
    o.prototype._findServerById = function(e) {
        for (var t = 0; t < this.serversRawData.length; t++)
            if (e === this.serversRawData[t].id) return this.serversRawData[t];
        return null
    }, 
    o.prototype.getServerNameById = function(e) {
        for (var t = 0; t < this.serversRawData.length; t++)
            if (e === this.serversRawData[t].id) return this.serversRawData[t]._name;
        return e.toString()
    }, 
    o.prototype.getServerShortNameById = function(e) {
        var t, i = this.getServerNameById(e),
            n = new RegExp("[0-9]+")
            .exec(i),
            o = Array.isArray(n) ? n[0].length : 0;
        return t = Array.isArray(n) ? i.substring(0, 3 - o)
            .toUpperCase() + n : i.substring(0, 3)
            .toUpperCase(), "[" + t + "]"
    }, 
    o.prototype.getAllowedServerList = function() {
        for (var e = [], t = 0; t < this.serversRawData.length; t++) {
            var i = this.serversRawData[t];
            i.status !== p.ONLINE && i.status !== p.SAVING && i.status !== p.FULL || i.id === m.TOURNAMENT_PROD_SERVERID || e.push(i)
        }
        return e
    },
    o.prototype.getSelectableServerList = function() {
        for (var e = [], t = 0; t < this.serversRawData.length; t++) {
            var i = this.serversRawData[t];
            i.status === p.ONLINE && i.isSelectable && e.push(i)
        }
        return e
    }, 
    o.prototype.getSelectableServerNames = function() {
        var e = this.getSelectableServerList();
        if (0 === e.length) return d("ui.common.none")
            .toLowerCase();
        for (var t = e[0]._name, i = 1; i < e.length; i++) t += ", " + e[i]._name;
        return t
    }, 
    o.prototype._onSelectedServerRefused = function(e) {
        this.failTimeout && window.clearTimeout(this.failTimeout);
        var t = this._findServerById(e.serverId);
        t && (t.status = e.serverStatus);
        var i;
        switch (e.error) {
            case h.SERVER_CONNECTION_ERROR_DUE_TO_STATUS:
                switch (i = "Status", e.serverStatus) {
                    case p.OFFLINE:
                        i += "Offline";
                        break;
                    case p.STARTING:
                        i += "Starting";
                        break;
                    case p.NOJOIN:
                        i += "Nojoin";
                        break;
                    case p.SAVING:
                        i += "Saving";
                        break;
                    case p.STOPING:
                        i += "Stoping";
                        break;
                    case p.FULL:
                        i += "Full";
                        break;
                    default:
                        i += "Unknown"
                }
                break;
            case h.SERVER_CONNECTION_ERROR_ACCOUNT_RESTRICTED:
                i = "AccountRestricted";
                break;
            case h.SERVER_CONNECTION_ERROR_COMMUNITY_RESTRICTED:
                i = "CommunityRestricted";
                break;
            case h.SERVER_CONNECTION_ERROR_LOCATION_RESTRICTED:
                i = "LocationRestricted";
                break;
            case h.SERVER_CONNECTION_ERROR_SERVER_FULL:
                i = "ServerFull";
                break;
            case h.SERVER_CONNECTION_ERROR_REGULAR_PLAYERS_ONLY:
                i = "RegularPlayersOnly";
                break;
            default:
                i = "NoReason"
        }
        var n;
        switch (i) {
            case "AccountRestricted":
                n = d("ui.server.cantChoose.serverForbidden");
                break;
            case "CommunityRestricted":
                n = d("ui.server.cantChoose.communityRestricted");
                break;
            case "LocationRestricted":
                n = d("ui.server.cantChoose.locationRestricted");
                break;
            case "ServerFull":
                n = d("ui.server.cantChoose.serverFull");
                break;
            case "RegularPlayersOnly":
                n = d("ui.server.cantChoose.regularPlayerRestricted");
                break;
            case "StatusOffline":
                n = d("ui.server.cantChoose.serverDown");
                break;
            case "StatusStarting":
                n = d("ui.server.cantChoose.serverDown");
                break;
            case "StatusNojoin":
                n = d("ui.server.cantChoose.serverForbidden");
                break;
            case "StatusSaving":
                n = d("ui.server.cantChoose.serverSaving");
                break;
            case "StatusStoping":
                n = d("ui.server.cantChoose.serverDown");
                break;
            case "StatusFull":
                n = d("ui.server.cantChoose.serverFull") + "\n\n" + d("ui.server.serversAccessibles", this.getSelectableServerNames());
                break;
            case "NoReason":
            case "StatusUnknown":
                n = d("ui.popup.connectionFailed.text")
        }
        this.showServerSelectionUi(), window.gui.openSimplePopup(n)
    }, 
    o.getServerImage = function(e, t) {
        var i = ["gfx/illus/illu_0.png"];
        n(e) && i.push("gfx/illus/illu_" + e + ".png"), f.preloadImages(i, function(e) {
            var i = e[0],
                n = e[1];
            return n && "none" !== n ? t(null, n) : t(null, i)
        })
    }, 
    o.prototype.getMyServerName = function() {
        return this.connectedServerData && this.connectedServerData._name
    }, 
    o.prototype.isTournamentServer = function() {
        var e = window.parseInt(this.connectedServerId, 10);
        return e === m.TOURNAMENT_TEST_SERVERID || e === m.TOURNAMENT_PROD_SERVERID
    }
}
