function(e, t, i) {
    function n() {
        a.call(this);
        var e = document.createElement("canvas");
        e.id = "engineCanvas";
        var t = document.getElementById("dofusBody");
        t.appendChild(e), this.mapScene = new c({
            canvas: e,
            name: "mapScene",
            l: -r.HORIZONTAL_OFFSET,
            t: -r.VERTICAL_OFFSET,
            w: r.MAP_SCENE_WIDTH,
            h: r.MAP_SCENE_HEIGHT,
            canvasWidth: 0,
            canvasHeight: 0,
            maxZoom: r.MAX_ZOOM_MAP,
            pixelRatio: r.PIXEL_RATIO,
            textureRatio: r.PRERENDER_RATIO_MAP,
            cameraAcceleration: 1.15,
            nbCacheableSprites: r.MAX_SPRITES_BUFFER_MAP,
            textureMemoryCacheSize: r.MAX_TEXTURE_MEMORY_MAP,
            prerenderQualityRatio: r.PRERENDER_RATIO_MAP,
            adjustToCanvasRatio: !0,
            usePrecisionRendering: !0
        });
        var i = {
            scene: this.mapScene,
            layer: r.MAP_LAYER_BACKGROUND,
            position: -1,
            x: -r.HORIZONTAL_OFFSET,
            y: -r.VERTICAL_OFFSET,
            w: r.MAP_SCENE_WIDTH,
            h: r.MAP_SCENE_HEIGHT,
            id: "mapBackground"
        };
        this.renderer = this.mapScene.renderer, this.background = new d(i), this.actorManager = new u({
            isoEngine: this,
            scene: this.mapScene
        }), this.mapRenderer = new l(this.mapScene, this.background), this.tacticalMode = new p(this.mapScene), this.fightSequence = new h, this.highlightedElements = {}, this.isInGame = !1, this.isMovementWaitingForConfirmation = !1, this.endMovementCallback = null, this.isMovementCanceled = !1, this.unblockedCells = null, this.unblockedNpcId = -1, this.isMapChanging = !1, this.interactiveMessageStack = [], this.actionQueue = new M, this.lastContextualMenuSkillId = null, s.start(), this.mapScene.camera.setZoom(0), this._initGridOverlayLayers(), this._previousTurn = !1, this._isUserTurn = !1;
        var n = this,
            o = this.background;
        window.gui.on("CurrentMapMessage", function() {
            n.isMapChanging = !0, n.interactiveMessageStack = []
        }), this.on("mapLoaded", function() {
            n.isMapChanging = !1
        }), this.actorManager.on("actorLoaded", function() {
            n.pendingInteractiveUseStart()
        }), this.on("GameFightStartMessage", function() {
            n._resetFightPositionLayer()
        }), window.gui.on("GameFightEndMessage", function() {
            n._resetFightPositionLayer(), n._resetSpellRangeLayer(), n._resetSpellEffectLayer(), n._resetWalkLayer(), n._resetWalkAreaLayer(), n._resetEnemyWalkAreaLayer(), o.removeTargetHighlights(), window.foreground.confirmBox.close(), this._isUserTurn = !1
        }), _.on("gameContextChanged", this.onGameContextChanged.bind(this)), this._initLoadingProgress(), this.bitmapFonts = null, this._currentBannerTweens = {
            backTween: null,
            textTween: null
        }
    }
    var o = i(56)
        .inherits,
        a = i(36)
        .EventEmitter,
        r = i(13),
        s = i(1179),
        c = i(1172),
        l = i(1490),
        d = i(1504),
        u = i(1511),
        p = i(1530),
        h = i(1532),
        f = i(707),
        b = i(52),
        m = i(439),
        M = i(1547),
        g = i(105),
        _ = i(103);
    o(n, a), e.exports = n, n.prototype._loadBitmapFonts = function() {
        if (null === this.bitmapFonts) {
            var e = this;
            m.loadModel("bitmapFonts", "atlas", function(t, i) {
                var n = e.mapScene.createTexture(i, "atlas", "mimap", "permanent");
                e.bitmapFonts = {
                    characters: {
                        dimensions: t.characters,
                        texture: n
                    },
                    numbers: {
                        dimensions: t.numbers,
                        texture: n
                    }
                }
            })
        }
    }, n.prototype.initialize = function() {
        this.fightSequence.initialize(), this.mapRenderer.initialize(), this.actionQueue.initialize(), f.loadMissingTemplatesInfo(), this._loadBitmapFonts()
    }, n.prototype._activateMapScene = function() {
        return this.isInGame === !1 && (s.addScene(this.mapScene), s.addScene(this.actorManager), this.isInGame = !0, !0)
    }, n.prototype._deactivateMapScene = function() {
        return this.isInGame === !0 && (this.mapScene.clear(0, 0, 0, 0), s.removeScene(this.mapScene), s.removeScene(this.actorManager), this.clearUserMovementZone(), this.background.resetAndClear(), this.releaseMap(), this.interactiveDisconnect(), this.isInGame = !1, !0)
    }, n.prototype.disconnect = function() {
        g.unlockMessages(), this.emit("disconnect"), this._deactivateMapScene(), this.mapTransitionDisconnect(), this.background && this.background.gridAnimator && this.background.gridAnimator.clear(), this.clearPendingMovement(), this.actionQueue.clear(), this.actorManager.turnNicknamesOff(), this.interactiveMessageStack = []
    }, n.prototype.transmitMessage = function(e) {
        this.emit(e._messageType, e)
    }, n.prototype.releaseMap = function(e) {
        this.isInGame !== !1 && (_.isRoleplayMode && this.actorManager.removeAllActors(), this.cleanupChallenges(), this.background.releaseMap(), this.mapRenderer.releaseMap(e), this.actionQueue.clear())
    }, n.prototype.onGameContextChanged = function() {
        this.clearHighlights(), this.clearPendingMovement(), this.actionQueue.clear(), this.interactiveMessageStack = [], _.isFightMode ? (this.cleanupChallenges(), s.removeScene(this.actorManager)) : (s.addScene(this.actorManager), this.actorManager.userActor.show(), this.clearUserMovementZone(), this.background.deleteAllZones())
    }, n.prototype.setInteractiveBlink = function(e) {
        this.interactiveBlink = e
    }, n.prototype._updateMapInfoData = function(e, t) {
        this.mapRenderer.setStatedElements(e.statedElements), this.addChallenges(e.fights), this.mapRenderer.setInteractiveElements(e.interactiveElements), this.mapRenderer.updateObstacles(e.obstacles), t && t.noMovementWaitReset || (this.isMovementWaitingForConfirmation = !1)
    }, n.prototype.onQuickReconnection = function(e) {
        if (!window.gui.isConnected) return e && e();
        if (window.gui.playerData && window.gui.playerData.isFighting) return e && e();
        if (this.endMovementCallback = null, this.isMovementCanceled = !1, this.isMovementWaitingForConfirmation = !1, this.mapRenderer.removeMovementFeedback(), this.actionQueue.clear(), this.isMapChanging = !0, this.interactiveMessageStack = [], b.isDialogActive()) return e && e();
        window.foreground.lock("quickReconnection"), this.lastMoveRequestTime = null, this.actorManager.pause(), window.dofus.sendMessage("MapInformationsRequestMessage", {
            mapId: this.mapRenderer.mapId
        });
        var t = this;
        this.once("mapLoaded", function() {
            if (window.foreground.unlock("quickReconnection"), t.userPreviousPosition) {
                var i = t.userPreviousPosition;
                window.dofus.sendMessage("GameMapMovementCancelMessage", {
                    cellId: i
                });
                var n = t.actorManager.userActor;
                n.noMovement(), n.setDisposition(i, n.direction)
            }
            return t.actorManager.unpause(), e && e()
        })
    }, n.prototype.attackActor = function(e) {
        var t = window.gui.fightManager.isInFight();
        if (!t) {
            var i = this.actorManager.actors,
                n = i[e];
            if (n) {
                var o = n.cellId,
                    a = this.actorManager.userActor,
                    r = function() {
                        window.dofus.sendMessage("GameRolePlayAttackMonsterRequestMessage", {
                            monsterGroupId: e
                        })
                    };
                return a.cellId === o ? r() : void this._movePlayerOnMap(o, !1, r)
            }
        }
    }, n.prototype.updateDimensions = function(e) {
        this.mapScene.setCanvasDimensions(e.mapWidth, e.mapHeight, e.mapLeft, e.mapTop, "absolute") && this.mapScene.camera.setZoom(0), this.isInGame && this.mapScene.requireCompleteRefresh()
    }, n.prototype.useItem = function(e, t, i) {
        var n = this.mapScene.convertCanvasToSceneCoordinate(e, t),
            o = this.mapRenderer.getCellId(n.x, n.y)
            .cell,
            a = this.actorManager.getActorsOnCell(o);
        a.length && a[0].actorId >= 0 ? window.dofus.sendMessage("ObjectUseOnCharacterMessage", {
            characterId: a[0].actorId,
            objectUID: i
        }) : window.dofus.sendMessage("ObjectUseOnCellMessage", {
            cells: o,
            objectUID: i
        })
    }, n.prototype.sendToFightSequence = function(e) {
        this.emit(e._messageType, e)
    }
}
