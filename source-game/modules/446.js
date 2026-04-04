function(e, t, i) {
    function n() {
        l.call(this);
        var e = this;
        this.windowsContainer = null,
        this.playerData = new $,
        this.serversData = new re,
        this.almanaxData = new M,
        this.boxArranger = new v,
        this.isConnected = !1,
        this.wBody = it,
        it.allowDomEvents(),
        this.on("IdentificationSuccessMessage", this.onIdentificationSuccess),
        this.on("IdentificationSuccessWithLoginTokenMessage", this.onIdentificationSuccess),
        this.on("ServersListMessage", this.onServerListReceived),
        this.on("CurrentMapMessage", this.onCurrentMapMessage),
        window.dofus.connectionManager.on("ClientUIOpenedMessage", this.openUIFromServer.bind(this)),
        window.addEventListener("orientationchange", function() {
            e.fixIOSWebviewOrientationScale(), e.fixAndroidOrientation()
        }),
        F.initialize(this),
        this.setupAppTransition()
    }

    function o() {
        return window.cordova && window.cordova.plugins && window.cordova.plugins.screenorientation
    }
    i(447);
    var a, r, s = i(18),
        c = i(56).inherits,
        l = i(36).EventEmitter,
        d = i(72),
        u = i(90),
        p = i(63),
        h = i(448),
        f = i(125),
        b = i(549),
        m = i(103),
        M = i(550),
        g = (i(551),
            i(7)),
        _ = i(552),
        A = i(54),
        O = i(537),
        v = i(567),
        y = i(568),
        z = i(563),
        w = i(576),
        T = i(606),
        C = i(608),
        I = i(668),
        S = i(671),
        E = i(673),
        L = i(418),
        N = i(674),
        R = i(748),
        q = i(524),
        x = i(55),
        B = i(17),
        D = B.getText,
        W = i(752),
        P = i(527),
        k = i(469),
        F = i(64),
        H = i(732),
        U = i(758),
        G = i(141),
        j = i(771),
        Y = i(775),
        X = i(781),
        V = i(788),
        Q = i(791),
        K = i(793),
        J = i(795),
        Z = i(797),
        $ = i(799),
        ee = i(559),
        te = i(840),
        ie = i(847),
        ne = i(849),
        oe = i(851),
        ae = i(863),
        re = i(760),
        se = i(864),
        ce = i(887),
        le = i(889),
        de = i(898),
        ue = i(30),
        pe = i(914),
        he = i(916),
        fe = i(921),
        be = i(88),
        me = i(60),
        Me = i(923),
        ge = i(926),
        _e = i(928),
        Ae = i(52),
        Oe = i(452),
        ve = i(933),
        ye = i(935),
        ze = i(838),
        we = i(936),
        Te = i(501),
        Ce = i(1423),
        Ie = i(1425),
        Se = i(1427),
        Ee = i(1429),
        Le = i(61),
        Ne = i(1431),
        Re = i(1433),
        qe = i(1438),
        xe = i(1455),
        Be = i(1457),
        De = i(1459),
        We = i(1462),
        Pe = i(1464),
        ke = i(1469),
        Fe = i(1471),
        He = i(1473),
        Ue = i(1475),
        Ge = i(949),
        je = i(1477),
        Ye = i(1479),
        Xe = i(1482),
        Ve = 1.4,
        Qe = 1.1,
        Ke = 10,
        Je = 3,
        Ze = 1e4,
        $e = "last_viewport_verification_time",
        et = "viewport_verification_nb_tries",
        tt = new d(document.getElementById("dofusBody")),
        it = new d(document.getElementById("dofusBody"));
    p.initialize(it), g.isIOS && !g.isPhoneGap && i(1485), c(n, l), e.exports = n, n.prototype.setupAppTransition = function() {
        function e() {
            n.emit("appGoBackground")
        }

        function t() {
            n.emit("appLeaveBackground"), n.fixAndroidOrientation(), f.appOpen(), o && (window.dofus.sendMessage("BasicPingMessage", {
                quiet: !0
            }), a = !0)
        }
        var i = window.dofus.connectionManager,
            n = this,
            o = !1,
            a = !1;
        i.on("open", function() {
            o = !0
        }), i.on("disconnect", function() {
            o = !1, a = !1
        }), i.on("BasicPongMessage", function() {
            a && (n.emit("connectedAfterAppLeaveBackground"), a = !1)
        }), f.appOpen(), g.isIOSApp ? (document.addEventListener("pause", e, !1), document.addEventListener("resume", t, !1)) : document.addEventListener("visibilitychange", function(i) {
            i.target.hidden ? e() : t()
        }, !1)
    }, n.prototype.transmitMessage = function(e) {
        switch (e._messageType) {
            case "MapComplementaryInformationsDataMessage":
            case "MapComplementaryInformationsWithCoordsMessage":
            case "MapComplementaryInformationsDataInHouseMessage":
            case "MapComplementaryInformationsWithObstacleOverride":
                this.emit("mapComplementaryInformationsData", e);
                break;
            default:
                this.emit(e._messageType, e)
        }
    }, n.prototype.initialize = function(e, t) {
        function i() {
            var e = Ae.getLastFocusedWindowId();
            n.isConnected && n.chat.active ? n.isPortraitMode() || n.chat.deactivate() : h.isOpen() ? h.close() : n.isConnected && !e ? Ae["switch"]("global") : e ? Ae.getWindow(e)
                .backButtonClose() : n.loginScreen.isVisible() && navigator.app.exitApp()
        }
        var n = this;
        this.loginScreen || (h.initialize(it, it), this._createUiForLogin(), document.addEventListener("deviceReady", function() {
            document.addEventListener("backbutton", i)
        })), e && (t && (a = t, r = window.CdvPurchase && window.CdvPurchase.store ? new Xe(a, window.CdvPurchase, g) : new Ye(a)), console.debug("Gui.initialize:", e))
    }, n.prototype.initializeAfterLogin = function(e) {
        if (this.initialized) return e();
        ue.initialize(this),
        this.fightManager = new N,
        this.shieldTutorialManager = new Me,
        this.criterionManager = new C,
        this.scenarioManager = new Ce,
        this.playerData.initialize(this, a, r),
        this.serversData.initialize(this),
        this.almanaxData.initialize(),
        this.fightManager.initialize(this),
        this.criterionManager.initialize(this),
        this.shieldTutorialManager.initialize(this),
        this.boxArranger.initialize(),
        this.GPS = new W,
        this.pingSystem = new oe,
        this.gifts = new ae,
        this.npcDialogHandler = new Q,
        this.uiLocker = new ye,
        ee.initialize(),
        P.initialize(this),
        O.initialize(this),
        q.initialize(this),
        ge.initialize(this),
        I.initialize(this),
        z.initialize(this),
        te.initialize(),
        ve.initialize(),
        ze.initialize(r),
        Te.initialize(),
        _.initialize();
        var t = this;
        s.series([E.load, H.initialize, k.initialize], function(i) {
            return i ? e(i) : (t._initUserInterface(), t._initAutoResize(), t.initialized = !0, t.emit("initialized"), void e())
        })
    }, n.prototype.onServerListReceived = function(e) {
        this.initialized ? this.serversData.onServerList(e) : this.once("initialized", function() {
            this.serversData.onServerList(e)
        })
    }, n.prototype._createUiForLogin = function() {
        Ae.initialize(this), it.setStyles({
            height: A.dimensions.screenHeight + "px"
        }), this.backgroundScreen = it.appendChild(new xe), this.splashScreenNewsManager = it.appendChild(new Re), this.loginScreen = it.appendChild(new qe), this.splashScreen = it.appendChild(new Be), this.connectionSplashScreen = it.appendChild(new Ne), this.windowsContainer = new d("div", {
            className: "windowsContainer"
        }), it.appendChild(this.windowsContainer), Ae.addWindow("connectionQueue", new He, {
            fixed: !0
        }), Ae.addWindow("popup", new Ue), Ae.addWindow("confirm", new Ge), Ae.addWindow("nickname", new De, {
            fixed: !0
        }), Ae.addWindow("legalAgreement", new We), Ae.addWindow("loginSettings", new Pe), Ae.addWindow("cleanAssets", new ke), Ae.addWindow("recaptcha", new je), Ae.addWindow("securityCode", new Fe, {
            fixed: !0
        }), u.initialize(it), this.dropDown = it.appendChild(new pe), this.tooltipBox = it.appendChild(be.initialiseTooltipBehavior(it)), this.fixViewportSize()
    }, n.prototype._addWindows = function() {
        this.windowsReferences = Ae.getWindowsReferences(), we(a, r)
    }, n.prototype._initUserInterface = function() {
        this.gameGuiContainer = new d("div", {
            className: "gameGuiContainer",
            hidden: !0
        }), it.appendChild(this.gameGuiContainer), this.sidebarBackground = this.gameGuiContainer.createChild("div", {
            className: "blackStripe"
        }), this.mapBorder1 = this.gameGuiContainer.createChild("div", {
            className: "mapBorder"
        }), this.mapBorder2 = this.gameGuiContainer.createChild("div", {
            className: ["mapBorder", "flipped"]
        }), this.screenLeftover = this.gameGuiContainer.createChild("div", {
            className: "blackStripe"
        }), this.gameGuiContainer.appendChild(window.foreground), this.numberInputPad = this.gameGuiContainer.appendChild(new J), this._addWindows(), this.chat = this.gameGuiContainer.appendChild(new w), this.chatButton = this.gameGuiContainer.appendChild(new T), this.mainControls = this.gameGuiContainer.appendChild(new X), this.shortcutBar = this.gameGuiContainer.appendChild(new se), this.menuBar = this.gameGuiContainer.appendChild(new Y(a)), this.textNotification = this.gameGuiContainer.appendChild(new S), this.roleplayBuffs = this.gameGuiContainer.appendChild(new _e(this.playerData.inventory)), this.timeline = this.gameGuiContainer.appendChild(new le), this.damagePreview = this.gameGuiContainer.appendChild(new de), this.progressGauge = this.shortcutBar.appendChild(new ie), this.compass = this.gameGuiContainer.appendChild(new he), this.hintArrow = this.gameGuiContainer.appendChild(new fe), this.kohBox = this.windowsContainer.appendChild(new U), this.party = this.gameGuiContainer.appendChild(new Z), this.challengeIndicator = this.gameGuiContainer.appendChild(new y), this.rewardsIndicator = this.gameGuiContainer.appendChild(new ne), this.npcDialogUi = this.gameGuiContainer.appendChild(new K), this.portraitDialogUI = this.gameGuiContainer.appendChild(new Ie), this.notificationBar = this.gameGuiContainer.appendChild(new V), this.mapCoordinateDisplay = this.gameGuiContainer.appendChild(new j), this.shopFloatingToolbar = this.gameGuiContainer.appendChild(new R), this.hintAnimationManager = this.gameGuiContainer.appendChild(new Se), this.performanceOverlay = this.gameGuiContainer.appendChild(new Ee), L.init(this.gameGuiContainer)
    }, n.prototype.onCurrentMapMessage = function() {
        window.foreground.hideBorderArrow()
    }, n.prototype.openUIFromServer = function(e) {
        e.type === b.CLIENT_UI_RECONNECTION && G.reconnectByCharId(window.gui.playerData.characterBaseInformations.id)
    }, n.prototype.openContextualMenu = function(e, t, i) {
        i = i || {};
        var n = i.x,
            o = i.y;
        if (i.isCanvasCoordinate) {
            var a = window.foreground.convertCanvasToScreenCoordinate(n, o);
            n = a.x, o = a.y
        }
        h.openAt(e, n, o, t)
    }, n.prototype.openContextualMenuAround = function(e, t, i) {
        h.openAround(e, t, i)
    }, n.prototype.closeContextualMenu = function(e) {
        h.close(e)
    }, n.prototype.showHintArrow = function(e, t) {
        this.hintArrow.showArrow(e, t)
    }, n.prototype.hideHintArrow = function() {
        this.hintArrow.hideArrow()
    }, n.prototype.newSpeechBubble = function(e) {
        return new ce(e)
    }, n.prototype.disconnect = function(e) {
        this.isConnected = !1, "SOCKET_LOST" !== e && "ASSET_MISSING" !== e || this.expectedDisconnectionReason || (console.warn("[Gui] disconnected:", e), this.openSimplePopup(D("ui.popup.connectionFailed.text"))), this._shutDownUI(), this.emit("disconnect", e), this.playerData.disconnectModules()
    }, n.prototype.connectionGonnaBeClosed = function(e) {
        this.expectedDisconnectionReason = e;
        var t = this;
        window.setTimeout(function() {
            t.expectedDisconnectionReason = null
        }, 6e4)
    }, n.prototype._shutDownUI = function() {
        this.splashScreen.show(), G.backToLogin(), me.close(), Ae.closeAll(), this.disableScreenOrientation(), this.gameGuiContainer && this.gameGuiContainer.hide(), this.tooltipBox && this.tooltipBox.closeTooltip(), this.kohBox && this.kohBox.hide()
    }, n.prototype.onIdentificationSuccess = function() {
        this.loginScreen.hide(), this.splashScreen.show()
    }, n.prototype.onConnect = function(e) {
        this.isConnected = !0, x.initialize(this), this.backgroundScreen.hide(), this.gameGuiContainer.show(), this._resizeUi(), this.uiLocker.updateAll(), this.playerData.connectModules(e, this.fightManager.isInReconnection), window.gui.emit("connected", this.fightManager.isInReconnection), this.enableScreenOrientation()
    }, n.prototype.openPopup = function(e) {
        Ae.getWindow("popup")
            .addContent(e), Ae.open("popup")
    }, n.prototype.openSimplePopup = function(e, t) {
        this.openPopup({
            title: t || D("ui.common.error"),
            message: e
        })
    }, n.prototype.openConfirmPopup = function(e, t) {
        Ae.getWindow("confirm")
            .update(e), Ae.open("confirm", t)
    }, n.prototype.openCancelPopup = function(e) {
        Ae.getWindow("cancel")
            .update(e), Ae.open("cancel")
    }, n.prototype._resizeUi = function(e) {
        void 0 === e && (e = window.gui.playerData.isFighting), g.isDevice ? it.replaceClassNames(["no-touch"], ["touch"]) : it.replaceClassNames(["touch"], ["no-touch"]), this.displayNotch(x.limitToNotch), A.updateScreen();
        var t = A.dimensions;
        this.isPortraitMode() || it.setStyles({
            width: t.screenWidth + "px",
            height: t.screenHeight + "px"
        }), this.ipadRatio = x.bottomMenuBar, this.ipadRatio ? (it.replaceClassNames(["largeRatio"], ["ipadRatio"]), A.resizeNarrowScreen(e), this.sidebarBackground.setStyles({
            left: 0,
            top: t.mapBottom - 1 + "px",
            width: t.screenWidth + "px",
            height: t.screenHeight - t.mapBottom + 1 + "px"
        }), this.mapBorder1.addClassNames("vertical"), this.mapBorder1.setStyles({
            left: 0,
            top: 0,
            width: t.mapLeft + "px",
            height: t.mapHeight + "px"
        }), this.mapBorder2.addClassNames("vertical"), this.mapBorder2.setStyles({
            left: t.mapRight + "px",
            top: 0,
            width: t.screenWidth - t.mapRight + "px",
            height: t.mapHeight + "px"
        }), this.screenLeftover.setStyles({
            left: 0,
            top: 0,
            width: t.screenWidth + "px",
            height: t.mapTop + "px"
        })) : (it.replaceClassNames(["ipadRatio"], ["largeRatio"]), A.resizeWideScreen(e), this.sidebarBackground.setStyles({
            left: t.mapRight + "px",
            top: 0,
            width: t.screenWidth - t.mapRight + "px",
            height: t.screenHeight + "px"
        }), this.mapBorder1.delClassNames("vertical"), this.mapBorder1.setStyles({
            left: t.mapLeft + "px",
            top: 0,
            width: t.mapWidth + "px",
            height: t.mapTop + "px"
        }), this.mapBorder2.delClassNames("vertical"), this.mapBorder2.setStyles({
            left: t.mapLeft + "px",
            top: t.mapBottom - 1 + "px",
            width: t.mapWidth + "px",
            height: t.screenHeight - t.mapBottom + 1 + "px"
        }), this.screenLeftover.setStyles({
            left: 0,
            top: 0,
            width: t.mapLeft + "px",
            height: t.screenHeight + "px"
        })), window.isoEngine.updateDimensions(t), this.emit("resize", t)
    }, n.prototype.fixIOSWebviewOrientationScale = function() {
        var e = this;
        if (g.isIOS) {
            var t = document.getElementsByName("viewport")[0];
            if (t && t.content) {
                var i = t.content.split("maximum-scale=0.005")
                    .join("maximum-scale=1"),
                    n = t.content.split("maximum-scale=1")
                    .join("maximum-scale=0.005");
                t.content = n, setTimeout(function() {
                    t.content = i, e.emit("iOSWebviewRescaled")
                }, 0)
            }
        }
    }, n.prototype.fixAndroidOrientation = function() {
        if (g.isAndroid && this.gameGuiContainer && this.gameGuiContainer.rootElement) {
            var e = this;
            setTimeout(function() {
                e.gameGuiContainer.rootElement.scrollTo(0, 0)
            }, 0)
        }
    }, n.prototype.refreshPortraitMode = function() {
        if (this.isConnected) {
            if (this.canUsePortraitMode()) return this.enableScreenOrientation();
            this.disableScreenOrientation()
        }
    }, n.prototype.canUsePortraitMode = function() {
        return this.scenarioManager && !this.scenarioManager.isPlaying() && x.isPortraitMode
    }, n.prototype.isPortraitMode = function() {
        var e = !1;
        return o() && this.canUsePortraitMode() && (e = window.cordova.plugins.screenorientation.type.indexOf("portrait") !== -1), e
    }, n.prototype.displayLandscapeOrientation = function() {
        o() && window.cordova.plugins.screenorientation.setOrientation("landscape")
    }, n.prototype.enableScreenOrientation = function() {
        o() && this.canUsePortraitMode() && window.cordova.plugins.screenorientation.unlock()
    }, n.prototype.disableScreenOrientation = function() {
        o() && window.cordova.plugins.screenorientation.lock("landscape")
    }, n.prototype.fixViewportSize = function() {
        var e = Le.getItem($e) || 0,
            t = Date.now() - e < Ze,
            i = Le.getItem(et) || 0,
            n = i >= Je;
        if (o()) {
            if (n && t) return;
            t || (i = 0);
            var a = window.innerHeight,
                r = document.body.getBoundingClientRect()
                .height;
            Math.abs(a - r) > 1 && (i++, Le.setItem($e, Date.now()), Le.setItem(et, i), window.location.reload())
        }
    }, n.prototype.getPortraitViewport = function() {
        var e = Oe.isOpened() ? Oe.getHeight() : 0;
        return {
            width: Math.ceil(window.document.documentElement.clientWidth / window.gui.getScaleForPortrait()),
            height: Math.ceil((window.document.documentElement.clientHeight - e) / window.gui.getScaleForPortrait())
        }
    }, n.prototype.getScaleForPortrait = function() {
        var e = g.isAndroidTablet ? Qe : Ve;
        return Math.floor(window.innerHeight / window.innerWidth * e * Ke) / Ke
    }, n.prototype.setPortraitScale = function() {
        this.wBody.setStyles({
            width: window.document.documentElement.clientWidth + "px",
            height: window.document.documentElement.clientHeight + "px",
            transform: "scale(" + this.getScaleForPortrait() + ")",
            transformOrigin: "left top"
        }), Oe.disableScroll(!0), Oe.pauseVirtualScroll(!0)
    }, n.prototype.setLandscapeScale = function() {
        var e = A.dimensions;
        this.wBody.setStyles({
            width: e.screenWidth + "px",
            height: e.screenHeight + "px",
            transform: "",
            transformOrigin: ""
        }), Oe.disableScroll(!1), Oe.pauseVirtualScroll(!1), this._resizeUi()
    }, n.prototype._initAutoResize = function() {
        function e() {
            clearTimeout(t), t = setTimeout(function() {
                i._resizeUi()
            }, 250)
        }
        Oe.hide(), this._resizeUi();
        var t, i = this;
        g.isDevice || (window.addEventListener("scroll", e), window.addEventListener("resize", e)), this.fightManager.on("fightEnterPreparation", function() {
            i._resizeUi()
        }), this.fightManager.on("fightEnterBattle", function(e) {
            "PREPARATION_SKIPPED" === e && i._resizeUi()
        }), this.fightManager.on("fightEnd", function() {
            i._resizeUi()
        }), m.on("gameContextChanged", function() {
            i._resizeUi()
        }), x.on("bottomMenuBar", function() {
            i._resizeUi()
        }), x.on("fullscreen", function() {
            i._resizeUi()
        }), x.on("limitToNotch", function() {
            i._resizeUi()
        }), x.on("isPortraitMode", function() {
            i.refreshPortraitMode()
        }), this.scenarioManager.on("stepChanged", function() {
            i.refreshPortraitMode()
        }), x.on("menubarSize", this.resizeToolbarForRoleplay.bind(this)), x.on("menubarSizeInFight", this.resizeToolbarForFight.bind(this)), x.on("toolbarThicknessInFight", this.resizeToolbarForFight.bind(this))
    }, n.prototype._resizeToolbar = function(e) {
        var t = window.gui.playerData.isFighting;
        e === t && this._resizeUi(t)
    }, n.prototype.resizeToolbarForFight = function() {
        this._resizeToolbar(!0)
    }, n.prototype.resizeToolbarForRoleplay = function() {
        this._resizeToolbar(!1)
    }, n.prototype.showFightingToolbar = function(e) {
        this._resizeUi(e)
    }, n.prototype.getBuildVersion = function() {
        var e = window.appInfo && window.appInfo.version,
            t = window.buildVersion,
            i = [];
        return e && i.push("Client v" + e), t && i.push("Build v" + t), i.join("/")
    }, n.prototype.displayNotch = function(e) {
        tt.toggleClassName("removeNotch", !e)
    }
}
