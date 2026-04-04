function(e, t, i) {
    function n() {
        this.lastReceivingTime = 0, this.lastPingSent = 0, this.isListening = !1, this.timeout = null, this.alarmLevel = l
    }

    function o(e) {
        e.timeout = null, e._sendPing();
        var t = e.lastReceivingTime;
        window.setTimeout(function() {
            e.lastReceivingTime === t && window.gui.connectionSplashScreen.onStateChange("UNSTABLE", e.alarmLevel)
        }, s)
    }
    var a = i(107),
        r = 1e3,
        s = 300,
        c = 1e3,
        l = 0,
        d = 1,
        u = 2,
        p = {
            AchievementRewardRequestMessage: d,
            AllianceChangeGuildRightsMessage: d,
            AllianceFactsRequestMessage: d,
            AllianceInsiderInfoRequestMessage: d,
            AllianceKickRequestMessage: d,
            BasicWhoIsRequestMessage: d,
            ChangeMapMessage: d,
            ChatClientMultiMessage: d,
            ChatClientPrivateMessage: d,
            CharacterCreationRequestMessage: u,
            CharacterDeletionRequestMessage: d,
            CharacterNameSuggestionRequestMessage: d,
            CharacterSelectionMessage: u,
            ExchangeBidHouseBuyMessage: u,
            ExchangeBidHouseListMessage: d,
            ExchangeBidHouseTypeMessage: d,
            ExchangeBuyMessage: u,
            ExchangeHandleMountStableMessage: d,
            ExchangeObjectMoveMessage: d,
            ExchangeObjectMovePricedMessage: d,
            ExchangePlayerRequestMessage: d,
            ExchangeRequestOnShopStockMessage: d,
            ExchangeSellMessage: u,
            ExchangeShowVendorTaxMessage: d,
            ExchangeStartAsVendorMessage: u,
            FriendAddRequestMessage: d,
            FriendDeleteRequestMessage: d,
            GameMapMovementRequestMessage: d,
            GameRolePlayPlayerFightRequestMessage: d,
            GuildChangeMemberParametersMessage: d,
            GuildCharacsUpgradeRequestMessage: u,
            GuildFactsRequestMessage: d,
            GuildGetInformationsMessage: d,
            GuildHouseTeleportRequestMessage: d,
            GuildKickRequestMessage: d,
            GuildPaddockTeleportRequestMessage: d,
            GuildSpellUpgradeRequestMessage: u,
            HouseGuildRightsViewMessage: d,
            HouseGuildShareRequestMessage: d,
            HouseKickRequestMessage: d,
            HouseLockFromInsideRequestMessage: d,
            IgnoredAddRequestMessage: d,
            InteractiveUseRequestMessage: d,
            JobAllowMultiCraftRequestSetMessage: d,
            JobCrafterDirectoryDefineSettingsMessage: d,
            LeaveDialogRequestMessage: d,
            LockableChangeCodeMessage: d,
            MountFeedRequestMessage: d,
            MountReleaseRequestMessage: d,
            MountRenameRequestMessage: d,
            MountSetXpRatioRequestMessage: d,
            MountSterilizeRequestMessage: d,
            MountToggleRidingRequestMessage: d,
            NpcDialogReplyMessage: d,
            NpcGenericActionRequestMessage: d,
            ObjectSetPositionMessage: d,
            ObjectUseMessage: u,
            OrnamentSelectRequestMessage: d,
            PartyAbdicateThroneMessage: d,
            PartyAcceptInvitationMessage: d,
            PartyCancelInvitationMessage: d,
            PartyInvitationArenaRequestMessage: d,
            PartyInvitationRequestMessage: d,
            PartyKickRequestMessage: d,
            PartyLeaveRequestMessage: d,
            PrismSettingsRequestMessage: d,
            ServerSelectionMessage: u,
            SetEnableAVARequestMessage: d,
            SetEnablePVPRequestMessage: d,
            SpellUpgradeRequestMessage: u,
            StatsUpgradeRequestMessage: u,
            TitleSelectRequestMessage: d
        },
        h = {
            socialDataRequest: d
        };
    t.monitor = new n, t.WARNING = d, t.BLOCKING = u, n.prototype.startListening = function() {
        if (!this.isListening) {
            var e = this;
            this._connectionLatency = new a(window.dofus.connectionManager), this._connectionLatency.startListening(), this.isListening = !0, window.dofus.connectionManager.on("BasicPongMessage", this._gotPong.bind(this)), window.gui.on("connected", function() {
                e._connectionLatency.startPingLoop()
            }), window.gui.on("appLeaveBackground", function() {
                e._connectionLatency.startPingLoop()
            }), window.gui.on("disconnect", function() {
                e._connectionLatency.stopPingLoop()
            }), window.gui.on("appGoBackground", function() {
                e._connectionLatency.stopPingLoop()
            })
        }
    }, n.prototype.receiving = function() {
        this.lastReceivingTime = Date.now(), this._connectionLatency.startPingLoop(), this.timeout && (this.alarmLevel = l, this.timeout = window.clearTimeout(this.timeout))
    }, n.prototype.sending = function(e, t) {
        var i;
        i = "sendMessage" === e ? p[t.type] : h[e], i && this._monitorCommandDelay(i), this._connectionLatency.startPingLoop()
    }, n.prototype._monitorCommandDelay = function(e) {
        this.alarmLevel = Math.max(e, this.alarmLevel), this.timeout || (this.timeout = window.setTimeout(o, r, this))
    }, n.prototype._sendPing = function() {
        Date.now() - this.lastPingSent >= c && (this._connectionLatency.sendPing(), this.lastPingSent = Date.now())
    }, n.prototype._gotPong = function() {
        this.lastPingSent = 0, window.gui.connectionSplashScreen.onStateChange("CONNECTED")
    }
}
