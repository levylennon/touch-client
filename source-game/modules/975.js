function(e, t, i) {
    function n() {
        y.call(this, {
            className: "BreedingWindow",
            positionInfo: {
                left: "0",
                bottom: "0",
                width: "100%",
                height: "100%"
            },
            noTitle: !0
        }), this.mountDataFromCertifId = {}, this.babyMap = {}, this._reset(), this._setupEvents()
    }

    function o() {
        var e = this.room.breedingWindow;
        e._setFilterBoxVisible(!1), e._selectTile(this.room, this)
    }
    i(976);
    var a = i(86),
        r = i(594),
        s = i(977),
        c = i(418),
        l = i(979),
        d = i(792),
        u = i(483),
        p = i(17)
        .getText,
        h = i(56)
        .inherits,
        f = i(481),
        b = i(981),
        m = i(983),
        M = i(987),
        g = i(767),
        _ = i(988),
        A = i(945),
        O = i(962),
        v = i(990),
        y = i(70),
        z = i(52),
        w = i(72),
        T = s.DRAG_ID,
        C = "c",
        I = 150,
        S = 1,
        E = 200,
        L = "paddock",
        N = f.EFFECT_INVALID_CERTIF,
        R = 996,
        q = 997,
        x = 998,
        B = {
            id: !0,
            name: !0,
            model: !0
        },
        D = 2,
        W = !0,
        P = 6e5;
    h(n, y), e.exports = n, n.prototype._reset = function() {
        this.isWindowSizeFull = !1, this.isMultiselect = !1, this.selectionRoom = null, this.focusedTile = null, this.openedRoom = null, this.dropZones = {}, this.certificateQueue = [], this.certificateTilePendingSelection = null, this.nonLoadedCertifCount = 0, this.waitingGaugeGoal = 0, this.certifAreRequested = !1, this.numMassRemove = 0, this.numMassAdd = 0, this.filters = new M, this.isFilterEmpty = !0, this.isWaitingForInventory = !1, this.isAscending = !0, this._purgeNewbornList()
    }, n.prototype.freeContent = function() {
        this.windowBody.clearContent(), this.equipBox = null, this.focusedMountDetails = null, this.rooms = null, this.roomBoxes = null, this.roomTabs = null, this.displayedRooms = null, this.roomDropZones = null, this.mountFilterBox = null, this.filterButtonBar = null, this.allNoneCheckbox = null, this.waitingGauge = null
    }, n.prototype._resetDom = function() {
        for (var e in this.rooms) this.rooms[e].reset();
        this._hideMountDetails(), this.equipBox.updateMount(null), this._setFilterBoxVisible(!1), this.mountFilterBox ? this.mountFilterBox.resetFilters() : console.error("_resetDom: mountFilterBox was " + this.mountFilterBox), window.clearTimeout(this.debugCheckTimeout), this.allNoneCheckbox.toggleActivation(!1, !0), this.waitingGauge.hideGauge(), b.freeContent()
    }, n.prototype._createDom = function() {
        this._createRooms();
        var e = this.windowBody.createChild("div", {
            className: "leftCol"
        });
        this._setupMountDetails(e), this._setupEquipBox(e), this._hideMountDetails();
        var t = this.windowBody.createChild("div", {
            className: "rightCol"
        });
        this._setupFilterMenuBox(t), this.rooms.paddock.capacity = this.paddockCapacity, this._setupRoomBoxes(t), this.waitingGauge = this.windowBody.appendChild(new v), this._setupMountFilterBox(t), this._setupDropZones()
    }, n.prototype._setupEvents = function() {
        function e(e) {
            if (t.waitingGauge.hideGauge(), e === d.MOUNT_PADDOCK_ERROR) {
                var i = p("ui.exchange.cantExchangeMountPaddockError");
                window.gui.openSimplePopup(i)
            }
        }
        var t = this,
            i = window.gui,
            n = window.dofus.connectionManager,
            o = i.playerData,
            a = o.inventory;
        i.on("disconnect", function() {
            t.mountDataFromCertifId = {}
        }), this.on("close", function() {
            this._resetDom(), this._reset(), i.uiLocker.unlockFeature("mount", "breedingOpened")
        }), this.on("opened", function() {
            this.isWindowSizeFull = !0
        }), n.on("ExchangeStartOkMountMessage", function(e) {
            t._initDisplay(e)
        }), o.on("setMount", this.localizeEvent(function() {
            t._updateEquipBox(), t.waitingGauge.hideGauge()
        })), o.on("unsetMount", this.localizeEvent(function() {
            t.numMassRemove && t.numMassRemove--, t._updateEquipBox()
        })), i.on("ExchangeMountStableBornAddMessage", function(e) {
            var i = e.mountDescription;
            t.babyMap[i.id] = Date.now(), t.equipBox && t._addMountsToRoom(t.rooms.shed, i)
        }), i.on("ExchangeMountStableAddMessage", this.localizeEvent(function(e) {
            t._addMountsToRoom(t.rooms.shed, e.mountDescription)
        })), i.on("ExchangeMountStableRemoveMessage", this.localizeEvent(function(e) {
            t._removeMountsFromRoom(t.rooms.shed, e.mountId)
        })), i.on("ExchangeMountPaddockAddMessage", this.localizeEvent(function(e) {
            t._addMountsToRoom(t.rooms.paddock, e.mountDescription)
        })), i.on("ExchangeMountPaddockRemoveMessage", this.localizeEvent(function(e) {
            t._removeMountsFromRoom(t.rooms.paddock, e.mountId)
        })), n.on("RealEstatePropertiesMessage", this._updatePaddockProperties.bind(this)), a.on("listUpdate", function(e) {
            t.isWaitingForInventory && t._loadCertificatesAfterInventoryLoads(e)
        }), a.on("itemAdded", this.localizeEvent(function(e) {
            t._addCertificates([e])
        })), a.on("itemsAdded", this.localizeEvent(function(e) {
            t._addCertificates(e)
        })), a.on("itemDeleted", this.localizeEvent(function(e, i) {
            t._removeCertificates([i])
        })), a.on("itemsDeleted", this.localizeEvent(function(e, i) {
            t._removeCertificates(i)
        })), n.on("MountDataMessage", this.localizeEvent(function(e) {
            t._receiveMountData(e.mountData)
        })), n.on("MountRenamedMessage", this.localizeEvent(function(e) {
            var i = t._findTileInRooms(e.mountId);
            i.mountData.name = e.name, t._refreshTile(i)
        })), n.on("MountSterilizedMessage", this.localizeEvent(function(e) {
            var i = t._findTileInRooms(e.mountId);
            i.mountData.reproductionCount = -1, t._refreshTile(i)
        })), i.on("ExchangeMountStableErrorMessage", function() {
            e(d.MOUNT_PADDOCK_ERROR)
        }), n.on("ExchangeErrorMessage", this.localizeEvent(function(t) {
            e(t.errorType)
        })), c.on("dragStart", this.localizeEvent(function(e, i, n) {
            i === T && t._startDragging(e, n)
        })), c.on("dragEnd", this.localizeEvent(function(e, i) {
            i === T && t._endDragging(e)
        }))
    }, n.prototype._initDisplay = function(e) {
        window.gui.uiLocker.lockFeature("mount", "breedingOpened", p("tablet.mount.uiLocker.breeding")), z.openDialog(this.id), this.equipBox ? this._resetDom() : this._createDom(), this._updateEquipBox(!0), this.roomBoxes.hide(), this._addMountsToRoom(this.rooms.shed, e.stabledMountsDescription), this._addMountsToRoom(this.rooms.paddock, e.paddockedMountsDescription), this._loadCertificatesFromInventory(), this.roomBoxes.show(), this.roomTabs.openTab(L, null, {
            forceOpen: !0
        })
    }, n.prototype._loadCertificatesFromInventory = function() {
        var e = window.gui.playerData.inventory;
        return e.isLoaded ? this._addCertificates(Object.keys(e.objects)) : (this.waitingGauge.showGauge(1), void(this.isWaitingForInventory = !0))
    }, n.prototype._loadCertificatesAfterInventoryLoads = function(e) {
        this.isWaitingForInventory = !1, this._addCertificates(Object.keys(e)), this.waitingGauge.hideGauge()
    }, n.prototype._createRooms = function() {
        var e = [{
            id: "paddock",
            name: p("ui.common.mountPark")
        }, {
            id: "shed",
            name: p("ui.mount.barn"),
            capacity: I
        }, {
            id: "certificate",
            name: p("ui.mount.certificates")
        }, {
            id: "equip",
            name: p("ui.common.equip"),
            capacity: S,
            hidden: !0
        }];
        this.rooms = {}, this.displayedRooms = {};
        for (var t = 0; t < e.length; t += 1) {
            var i = e[t],
                n = i.id,
                o = this.rooms[n] = new _(this, n, i.name, i.capacity);
            i.hidden || (this.displayedRooms[n] = o)
        }
        this.numTabs = Object.keys(this.displayedRooms)
            .length
    }, n.prototype._updatePaddockProperties = function(e) {
        e.farm.length < 1 || (this.paddockCapacity = e.farm[0].maxOutdoorMount, this.openState && this._updateRoomTab(this.rooms.paddock))
    }, n.prototype._setupMountDetails = function(e) {
        var t = e.createChild("div", {
                className: "mountDetailsBox"
            }),
            i = this.focusedMountDetails = t.appendChild(new f),
            n = i.getIllustrationElement();
        i.placeholder = new g(t), i.dragInfo = new s(this, n)
    }, n.prototype._setupEquipBox = function(e) {
        this.equipBox = new l(e, this.rooms.equip, o)
    }, n.prototype._selectTab = function(e) {
        this.openedRoom = this.rooms[e], this._updateDisplayedRoom();
        var t = this.isMultiselect && this.openedRoom === this.selectionRoom;
        this.allNoneCheckbox.toggleActivation(t, !0)
    }, n.prototype._setupRoomBoxes = function(e) {
        var t = this.roomBoxes = e.createChild("div", {
                className: "roomBoxes"
            }),
            i = t.createChild("div", {
                className: "roomBoxWrapper"
            }),
            n = i.createChild("div", {
                className: "tileSpace"
            });
        this.roomPlaceholder = new g(n);
        var o = this.roomTabs = t.appendChild(new O({
                className: "roomTabs"
            })),
            a = i.rootElement.clientHeight / this.numTabs,
            r = 0;
        o.on("openTab", this._selectTab.bind(this));
        for (var s in this.rooms)
            if (this.displayedRooms[s]) {
                var c = this.rooms[s],
                    l = c.createBox(n);
                o.addTab(c.name, l, s);
                var d = o.getTabsMap()[s].tab;
                d.setStyles({
                    width: a + "px",
                    top: r + "px"
                }), r += a, d.title = d.createChild("div", {
                    className: "title",
                    text: c.name
                }), d.statusLabel = d.createChild("div", {
                    className: "statusLabel"
                }), this._updateRoomTab(c)
            }
    }, n.prototype._setupFilterMenuBox = function(e) {
        var t = e.createChild("div", {
                className: "filterMenuBox"
            }),
            i = t.createChild("div", {
                className: "filterMenu"
            });
        this._createFilterButton(i), this._createSortSelector(i), this._createSelectAndFilterInfo(i), this._createSelectAllOrNone(i), this.filterButtonBar = t.createChild("div", {
            className: "filterButtonBar"
        })
    }, n.prototype._createFilterButton = function(e) {
        var t = this;
        this.filterBtn = e.appendChild(new a({
            text: p("tablet.mount.filter"),
            className: ["button", "filterButton"],
            addIcon: "before"
        }, function() {
            t._setFilterBoxVisible(!t.isFilterBoxVisible)
        }))
    }, n.prototype._createSortSelector = function(e) {
        var t = e.appendChild(new A({
            className: "sortSelector"
        }));
        this.sorters = [{
            name: p("ui.common.sort") + p("ui.common.colon"),
            property: "id"
        }, {
            name: p("tablet.mount.type"),
            property: "model"
        }, {
            name: p("ui.common.sex"),
            property: "sex"
        }, {
            name: p("ui.common.name"),
            property: "name"
        }, {
            name: p("ui.common.level"),
            property: "level"
        }, {
            name: p("tablet.mount.expiration"),
            property: "expiration"
        }];
        for (var i = 0; i < this.sorters.length; i += 1) {
            var n = this.sorters[i];
            t.addOption(n.name, n.property), t.toggleOption(i, !0)
        }
        t.on("change", this._changeSorter.bind(this)), this.selectedSorter = t.selectFirst(!0)
    }, n.prototype._createSelectAndFilterInfo = function(e) {
        this.selectAndFilterInfo = e.createChild("div", {
            className: "selectAndFilterInfo"
        })
    }, n.prototype._createSelectAllOrNone = function(e) {
        var t = this,
            i = p("ui.common.all") + " / " + p("ui.common.none"),
            n = this.allNoneCheckbox = e.appendChild(new r(i));
        n.addClassNames("allNoneCheckbox"), n.on("change", function(e) {
            t._setMultiselect(e, !0)
        })
    }, n.prototype._setupDropZones = function() {
        function e(e, t, i) {
            n._droppedMount(this, e, i)
        }

        function t() {
            n._handleDragEnter(this.id, !0)
        }

        function i() {
            n._handleDragEnter(this.id, !1)
        }
        var n = this,
            o = [];
        for (var a in this.rooms) {
            o.push(a);
            var r = this.roomTabs.getTabsMap()[a];
            if (r) {
                var s = this.roomTabs.getTabsMap()[a].tab;
                c.setDroppable(s, [T]), s.id = a, s.on("drop", e), s.on("dragEnter", t), s.on("dragLeave", i)
            }
        }
        this.roomDropZones = this.roomBoxes.createChild("div", {
            className: "roomDropZones"
        });
        for (var l = 0; l < o.length; l += 1) {
            a = o[l];
            var d = this.dropZones[a] = new w("div", {
                className: ["dropZone", a, "transition"]
            });
            d.id = a;
            var u = this.rooms[a];
            "equip" === a ? (this.equipBox.box.appendChild(d), d.addClassNames("equip")) : (this.roomDropZones.appendChild(d), d.addClassNames("room")), d.createChild("div", {
                className: "amount",
                name: "amount"
            }), d.createChild("div", {
                className: "label",
                text: u.name,
                name: "label"
            }), c.setDroppable(d, [T]), d.on("drop", e), d.on("dragEnter", t), d.on("dragLeave", i)
        }
    }, n.prototype._setupMountFilterBox = function(e) {
        if (e && e.rootElement) {
            if (!this.isWindowSizeFull) return this.debugCheckTimeout = window.setTimeout(function(e) {
                e.mountFilterBox || console.error("Absence of MountFilterBox after 2 seconds")
            }, 2e3, this), this.once("opened", this._setupMountFilterBox.bind(this, e));
            this.mountFilterBox = e.appendChild(new m(this.filters)), this.mountFilterBox.setButtonBar(this.filterButtonBar);
            var t = this;
            this.mountFilterBox.on("activeFiltersUpdated", function() {
                t.isFilterEmpty = t.filters.isEmpty(), t._setMultiselect(!1), t._updateDisplayedRoom(), t.filterBtn.toggleClassName("hasFilter", !t.isFilterEmpty)
            })
        }
    }, n.prototype._receiveMountData = function(e) {
        var t, i = e.id;
        if (!this.certificateQueue.length) return (t = this._findTileInRooms(i)) ? (t.mountData = this._prepareMountForRoom(e, t.room), this._refreshTile(t), void(t === this.focusedTile && this._displayMountDetails(e))) : console.error("Received data about unknown mount ", e);
        var n = this.certificateQueue.shift(),
            o = C + n.objectUID;
        if (this.mountDataFromCertifId[o] = this._prepareMountForRoom(e, this.rooms.certificate), e.isNewborn && (this.babyMap[o] = this.babyMap[i]), t = this.rooms.certificate.getTile(o), t.mountData.receivedData = e, this._refreshTile(t), t.setSpinnerVisible(!1), this.certificateTilePendingSelection === t && (this.certificateTilePendingSelection = null, this._selectTile(this.rooms.certificate, t)), this.nonLoadedCertifCount--, this.certifAreRequested && this.waitingGauge.refreshGauge(this.nonLoadedCertifCount), !W) {
            var a = this.certificateQueue[0];
            if (a) return this._requestMountData(a)
        }
        0 === this.nonLoadedCertifCount && this.certifAreRequested && (this.certifAreRequested = !1, "certificate" === this.openedRoom.id && this._updateDisplayedRoom())
    }, n.prototype._requestOneCertificate = function(e) {
        this.certificateQueue.indexOf(e) >= 0 || (this.certificateQueue.push(e), !W && this.certificateQueue.length > 1 || this._requestMountData(e))
    }, n.prototype._requestAllCertificates = function() {
        this.certifAreRequested = !0, this.waitingGauge.showGauge(this.nonLoadedCertifCount, p("tablet.mount.loadingCertif", this.nonLoadedCertifCount));
        var e = this.rooms.certificate.mountMap;
        for (var t in e) this.mountDataFromCertifId[t] || this._requestOneCertificate(e[t].certificate)
    }, n.prototype.tileTapHandler = function(e) {
        return this._setFilterBoxVisible(!1), e.mountData.certificate && !e.mountData.receivedData ? (e.setSpinnerVisible(!0), this.certificateTilePendingSelection = e, this._requestOneCertificate(e.mountData.certificate)) : (e.selected && !this.isMultiselect && this._setMultiselect(!0), void this._selectTile(e.room, e))
    }, n.prototype._purgeNewbornList = function() {
        var e = Date.now();
        for (var t in this.babyMap) e - this.babyMap[t] > P && delete this.babyMap[t]
    }, n.prototype._prepareMountForRoom = function(e, t) {
        return e.mountLocation = t.id, e.isNewborn = Boolean(this.babyMap[e.id] || e.receivedData && this.babyMap[e.receivedData.id]), e.expiration = e.certificate && e.certificate.mountInfo && e.certificate.mountInfo.date, e.receivedData && e.expiration && (e.receivedData.expiration = e.expiration), e
    }, n.prototype._addMountsToRoom = function(e, t) {
        t = Array.isArray(t) ? t : [t];
        for (var i = t.length, n = 0; n < i; n++) e.addMount(this._prepareMountForRoom(t[n], e));
        this.numMassAdd && (this.numMassAdd -= i, this.waitingGauge.refreshGauge(this.numMassAdd + this.numMassRemove)), 0 === this.numMassAdd && (this._updateRoomTab(e), e === this.openedRoom && this._updateDisplayedRoom())
    }, n.prototype._removeMountsFromRoom = function(e, t) {
        t = Array.isArray(t) ? t : [t];
        var i = t.length,
            n = this.focusedTile && this.focusedTile.id;
        t.indexOf(n) !== -1 && (this._hideMountDetails(), this.focusedTile = null);
        for (var o = 0; o < t.length; o += 1) e.removeMount(t[o]);
        this.numMassRemove && (this.numMassRemove -= i, this.waitingGauge.refreshGauge(this.numMassAdd + this.numMassRemove)), 0 === this.numMassRemove && (e === this.selectionRoom && 0 === e.getNumSelected() && this._setMultiselect(!1), this._updateRoomTab(e), e === this.openedRoom && this._updateDisplayedRoom())
    }, n.prototype._addCertificates = function(e) {
        for (var t = this._extractCertificates(e), i = [], n = 0; n < t.length; n++) {
            var o = t[n],
                a = o.mountInfo,
                r = C + o.objectUID,
                s = this.mountDataFromCertifId[r];
            s || this.nonLoadedCertifCount++, i.push({
                id: r,
                certificate: o,
                model: a.modelId,
                name: a.name,
                receivedData: s
            })
        }
        this._addMountsToRoom(this.rooms.certificate, i)
    }, n.prototype._removeCertificates = function(e) {
        for (var t = [], i = 0; i < e.length; i += 1) {
            var n = C + e[i].objectUID,
                o = this.mountDataFromCertifId[n];
            o ? delete this.mountDataFromCertifId[n] : this.nonLoadedCertifCount--, t.push(n)
        }
        this._removeMountsFromRoom(this.rooms.certificate, t)
    }, n.prototype._extractCertificates = function(e) {
        for (var t = window.gui.playerData.inventory, i = [], n = 0; n < e.length; n += 1) {
            var o = e[n],
                a = o.objectUID ? o : t.objects[o],
                r = f.getMountInfoFromCertificate(a);
            r && (a.effectsMap[N] || (this._enrichCertificateData(a, r), i.push(a)))
        }
        return i
    }, n.prototype._enrichCertificateData = function(e, t) {
        var i = {
                mountId: t.mountId,
                date: t.date,
                modelId: t.modelId
            },
            n = e.effectsMap,
            o = n[q];
        o && (i.name = o.text);
        var a = n[x];
        a && (i.validityDays = a.days, i.validityHours = a.hours, i.validityMinutes = a.minutes, i.validityDesc = a.description);
        var r = n[R];
        r && (i.ownerDesc = r.description), e.mountInfo = i
    }, n.prototype._requestMountData = function(e) {
        var t = e.mountInfo;
        window.dofus.sendMessage("MountInformationRequestMessage", {
            id: t.mountId,
            time: t.date
        })
    }, n.prototype._updateRoomTab = function(e) {
        var t = this.roomTabs.getTabsMap()[e.id];
        if (t) {
            var i = t.tab.statusLabel,
                n = '(<span class="highlight">' + e.numMounts;
            n += void 0 !== e.capacity && e.capacity !== Number.POSITIVE_INFINITY ? "</span> / " + e.capacity + ")" : "</span>)", i.setHtml(n)
        }
    }, n.prototype._showRoomPlaceholderIfNeeded = function() {
        var e = this.openedRoom,
            t = e.getNumHiddenMounts(),
            i = e.numMounts,
            n = null;
        0 === i ? n = p("tablet.mount.emptyRoom") : i === t && (n = p("tablet.mount.filteredMounts", i)), e.toggleDisplay(!n), this.roomPlaceholder.setText(n)
    }, n.prototype._updateRoomStats = function() {
        var e = this.openedRoom,
            t = e.getNumHiddenMounts(),
            i = e.numMounts,
            n = "";
        this.isFilterEmpty || (n = p("tablet.mount.filter") + p("ui.common.colon") + (i - t) + " / " + i + "\n");
        var o = "";
        if (this.selectionRoom) {
            var a = this.selectionRoom.getNumSelected();
            a > 0 && (o = p("tablet.common.selection") + p("ui.common.colon") + a)
        }
        this.selectAndFilterInfo.setText(n + o)
    }, n.prototype._updateDisplayedRoom = function() {
        var e = this.openedRoom;
        e && ("certificate" === e.id && !this.isFilterEmpty && this._initLoadAllCertificates() || (e.refreshDisplay(this.filters, this.selectedSorter, this.isAscending), this._showRoomPlaceholderIfNeeded(), this._updateRoomStats()))
    }, n.prototype._refreshTile = function(e) {
        e.refreshDisplay(), e.room === this.openedRoom && this._updateDisplayedRoom()
    }, n.prototype._clearSelection = function() {
        var e = this.focusedTile;
        e && (e.room.setMountSelected(e.id, !1), this.focusedTile = null), this.selectionRoom && (this.selectionRoom.unselectAll(), this.selectionRoom = null), this._updateRoomStats()
    }, n.prototype._setMultiselect = function(e, t) {
        this.allNoneCheckbox.toggleActivation(e, !0), this.isMultiselect = e, this._clearSelection(), this._hideMountDetails(), e && (this.selectionRoom = this.openedRoom, t && (this.openedRoom.selectAll(), this._updateRoomStats()))
    }, n.prototype._selectTile = function(e, t) {
        var i = this.focusedTile;
        if (this.isMultiselect && t.room !== this.selectionRoom && this._setMultiselect(!1), this.isMultiselect) {
            if (e.setMountSelected(t.id, !t.selected), 0 === e.getNumSelected()) return this._setMultiselect(!1)
        } else {
            if (t === i) return;
            i && i.room.setMountSelected(i.id, !1), e.setHightlightedMount(t.id)
        }
        this.focusedTile = t, this._displayMountDetails(t.mountData), this._updateRoomStats()
    }, n.prototype._updateEquipBox = function(e) {
        var t = window.gui.playerData.equippedMount;
        if (t && this._prepareMountForRoom(t, this.rooms.equip), this.equipBox.updateMount(t), !e) {
            var i = this.focusedTile === this.equipBox.tile;
            t ? i ? this._displayMountDetails(t) : this._selectTile(this.rooms.equip, this.equipBox.tile) : i && this._hideMountDetails()
        }
    }, n.prototype._hideMountDetails = function() {
        var e = this.focusedMountDetails;
        e.hide(), e.placeholder.toggleDisplay(!0);
        var t = p(this.isMultiselect ? "tablet.mount.pendingMultiselect" : "tablet.mount.selectMount");
        e.placeholder.setText(t)
    }, n.prototype._displayMountDetails = function(e) {
        if (e.certificate && (e = e.receivedData, !e)) return this._hideMountDetails();
        var t = this.focusedMountDetails;
        t.show(), t.placeholder.toggleDisplay(!1), t.dragInfo.setMount(e), t.setMount(e, {
            context: "breeding"
        })
    }, n.prototype._requestExchangeBetweenRooms = function(e, t, i) {
        var n = u[e][t];
        n && window.dofus.sendMessage("ExchangeHandleMountStableMessage", {
            actionType: n,
            rideId: i
        })
    }, n.prototype._getIdForExchange = function(e, t) {
        return "certificate" !== e ? t : ~~t.substr(1)
    }, n.prototype._moveMounts = function(e, t, i, n) {
        void 0 === n && (n = i.length);
        var o = D * n;
        for (this.waitingGauge.showGauge(o, p("tablet.mount.moving", n), D), this.numMassRemove = this.numMassAdd = n; n > 0; n--) {
            var a = this._getIdForExchange(e, i.pop());
            this._requestExchangeBetweenRooms(e, t, a)
        }
    }, n.prototype.prepareDraggedTiles = function(e) {
        var t = this.rooms[e.mountLocation],
            i = t.getTile(e.id);
        return i.selected || this._selectTile(t, i), t.getNumSelected()
    }, n.prototype._startDragging = function(e, t) {
        var i = this;
        this.roomDropZones.addClassNames("enable"), e.addClassNames("dragging");
        var n = t.mount,
            o = this.rooms[n.mountLocation],
            a = o.getNumSelected();
        this.dragTimeout = setTimeout(function() {
            for (var e in i.dropZones) {
                var t = i.dropZones[e];
                if (t.isEnabled = e !== o.id && ("equip" !== t.id || a <= 1), t.toggleClassName("enable", t.isEnabled), t.isEnabled) {
                    var n = i.rooms[e],
                        r = n.capacity - n.numMounts,
                        s = "";
                    a > r && (s = r > 0 ? p("tablet.mount.roomLeft", r) : p("tablet.mount.roomFullShort")), t.toggleClassName("warning", Boolean(s) && r > 0), t.toggleClassName("full", Boolean(s) && r <= 0), t.getChild("amount")
                        .setText(s)
                }
            }
        }, E)
    }, n.prototype._endDragging = function(e) {
        clearTimeout(this.dragTimeout), e.delClassNames("dragging");
        for (var t in this.dropZones) {
            var i = this.dropZones[t];
            i.delClassNames("enable", "dragEnter");
            var n = this.roomTabs.getTabsMap()[t];
            if (n) {
                var o = n.tab;
                o.delClassNames("dragEnter")
            }
        }
        if (this.roomDropZones.delClassNames("enable"), c.isLostDrop && this.focusedTile) {
            var a = this.focusedTile.mountData;
            a.certificate && !a.receivedData && this._clearSelection()
        }
    }, n.prototype._handleDragEnter = function(e, t) {
        var i = this.dropZones[e];
        i.toggleClassName("dragEnter", t);
        var n = this.roomTabs.getTabsMap()[e];
        if (n) {
            var o = n.tab;
            o.toggleClassName("dragEnter", t && i.isEnabled)
        }
    }, n.prototype._droppedMount = function(e, t, i) {
        var n = i.mount,
            o = n.mountLocation,
            a = e.id;
        if (o !== a) {
            var r = this.rooms[o],
                s = this.rooms[a],
                c = "equip" !== a ? s.capacity - s.numMounts : s.capacity,
                l = "equip" !== a ? r.getSelection() : [n.id],
                d = l.length;
            if (c <= 0) window.gui.openSimplePopup(p("tablet.mount.roomFull"));
            else if (c < d) {
                var u = this;
                window.gui.openConfirmPopup({
                    title: p("ui.popup.warning"),
                    message: p("tablet.mount.partialMoveMounts", c),
                    cb: function(e) {
                        e && u._moveMounts(o, a, l, c)
                    }
                })
            } else this._moveMounts(o, a, l)
        }
    }, n.prototype._findTileInRooms = function(e) {
        for (var t in this.rooms) {
            var i = this.rooms[t].getTile(e);
            if (i) return i
        }
        return null
    }, n.prototype._initLoadAllCertificates = function() {
        return 0 !== this.nonLoadedCertifCount && (this.rooms.certificate.lockRoom(), this.roomPlaceholder.setText(" "), this._requestAllCertificates(), !0)
    }, n.prototype._changeSorter = function(e) {
        this.isAscending = this.selectedSorter !== e || !this.isAscending, this.selectedSorter = e, "certificate" === this.openedRoom.id && !B[e] && this._initLoadAllCertificates() || this._updateDisplayedRoom();
    }, n.prototype._setFilterBoxVisible = function(e) {
        this.isFilterBoxVisible = e, this.filterBtn.toggleClassName("enabled", e), this.mountFilterBox && this.mountFilterBox.toggleClassName("enable", e)
    }
}
