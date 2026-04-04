function(e, t, i) {
    function n(e, t, i) {
        var n = y.getValue("zaap-" + e + "-" + t, {});
        return Boolean(n[i])
    }

    function o(e, t, i, n) {
        var o = y.getValue("zaap-" + e + "-" + t, {});
        o[i] = n, y.setValue("zaap-" + e + "-" + t, o)
    }

    function a(e, t) {
        return e.favorite && !t.favorite ? -1 : !e.favorite && t.favorite ? 1 : e.saved && !t.saved ? -1 : !e.saved && t.saved ? 1 : e.name > t.name ? 1 : -1
    }

    function r() {
        this.myTable.selectRow(this.myRow.rowId, !0)
    }

    function s() {
        p.call(this, {
            className: "teleporterListWindow",
            title: "_",
            positionInfo: {
                left: "c",
                top: "c",
                width: "600",
                height: "440"
            },
            helpTab: {
                part: 2,
                subPart: 8
            },
            changeDefaultOpenAction: !0
        });
        var e = this;
        this.parentBody = null, this.zaapBody = this.windowBody.createChild("div", {
            className: ["teleporterBody", "zaapBody"]
        }), this.subwayBody = this.windowBody.createChild("div", {
            className: ["teleporterBody", "subwayBody"]
        }), this.houseBody = this.windowBody.createChild("div", {
            className: ["teleporterBody", "houseBody"]
        }), this.createTabs(this.zaapBody, [{
            title: M("ui.zaap.zaap"),
            name: "Zaap"
        }, {
            title: M("ui.zaap.prism"),
            name: "Prism"
        }]), this.createTabs(this.subwayBody, [{
            title: M("ui.map.craftHouse"),
            name: "CraftHouse"
        }, {
            title: M("ui.map.bidHouse"),
            name: "BidHouse"
        }, {
            title: M("ui.common.misc"),
            name: "Misc"
        }]), this.createTabs(this.houseBody, [{
            title: M("ui.common.housesWord"),
            name: "House"
        }]), this.createFooter(), window.gui.on("ZaapListMessage", function(t) {
            window.gui.playerData.teleporterData.shouldListenToZaapListMessage() && (e.toggleHelpDisplay(t.teleporterType !== O.TELEPORTER_HOUSE), e.nbKamas.toggleDisplay(t.teleporterType !== O.TELEPORTER_HOUSE), e.setContent(t))
        }), window.gui.on("TeleportDestinationsListMessage", function(t) {
            e.toggleHelpDisplay(t.teleporterType !== O.TELEPORTER_HOUSE), e.nbKamas.toggleDisplay(t.teleporterType !== O.TELEPORTER_HOUSE), e.setContent(t)
        }), this.on("open", function() {
            window.gui.playerData.setDialogState(!0)
        }), this.on("close", function() {
            window.gui.playerData.setDialogState(!1)
        })
    }
    i(1142);
    var c, l, d, u = i(56)
        .inherits,
        p = i(70),
        h = i(72),
        f = i(86),
        b = i(1062)
        .MapLocationButton,
        m = i(52),
        M = i(17)
        .getText,
        g = i(16),
        _ = i(962),
        A = i(765),
        O = i(846),
        v = i(63),
        y = i(60),
        z = i(509),
        w = i(34)
        .logger,
        T = 3,
        C = 2,
        I = 0,
        S = [2, 3, 4];
    u(s, p), e.exports = s, s.prototype.defaultOpenAction = function() {
        window.gui.playerData.isSubscriberAtMinLevel(z.ELITE) || m.open("BonusPackElitePopup"), window.gui.playerData.teleporterData.setListenToZaapListMessage(!0), window.dofus.sendMessage("ZaapOpenDialogRequestMessage")
    }, s.prototype.createTabs = function(e, t) {
        var i = this;
        e.tabs = new _, e.appendChild(e.tabs), e.panels = e.createChild("div", {
            className: "panels"
        }), e.panelCollection = {}, t.forEach(function(t) {
            var n = t.name,
                o = e.panels.createChild("div", {
                    className: ["panel", n]
                });
            e.panelCollection[n] = o, e.tabs.addTab(t.title, o), o.on("open", function() {
                this.selectedMapId ? i.buttonOk.enable() : i.buttonOk.disable()
            }), i.createTable(o, {
                isHouseTable: "House" === t.name
            })
        })
    }, s.prototype.createTable = function(e, t) {
        function i(t, i) {
            e.selectedTeleporterType = i.teleporterType, e.selectedMapId = i.mapId, r.buttonOk.enable()
        }

        function n(e, t) {
            return !(!e.favorite || t.favorite) || !(e.favorite || !t.favorite)
        }
        var r = this;
        t = t || {};
        var s = M("ui.zaap.destination") + M("ui.common.colon"),
            c = M("ui.common.area") + " (" + M("ui.common.subarea") + ")";
        return t.isHouseTable ? void(e.table = e.appendChild(new A([{
            id: "destination",
            header: M("ui.common.housesWord"),
            sort: function(e, t) {
                return n(e, t) ? 0 : e.name.localeCompare(t.name)
            }
        }, {
            id: "coordinates",
            header: M("ui.common.coordinatesSmall"),
            sort: function(e, t) {
                return n(e, t) ? 0 : e.coordinateX > t.coordinateX ? 1 : t.coordinateX > e.coordinateX ? -1 : e.coordinateY > t.coordinateY ? 1 : t.coordinateY > e.coordinateY ? -1 : 0
            }
        }], null, {
            clickable: !0,
            scaleOnPress: !0,
            onRowTap: i
        }))) : void(e.table = e.appendChild(new A([{
            id: "favorite",
            header: "",
            sort: !0,
            format: function(e) {
                var t = new h("div"),
                    i = t.createChild("div", {
                        className: "favoriteButton"
                    });
                return v(i), i.toggleClassName("fullStar", e.favorite), i.on("tap", function() {
                    e.favorite = !e.favorite, o(e.teleporterType, e.category, e.mapId, e.favorite), i.toggleClassName("fullStar", e.favorite), e.table.sort(a)
                }), t
            },
            defaultCompare: !0
        }, {
            id: "saved",
            header: "",
            sort: !1
        }, {
            id: "destination",
            header: s + c,
            sort: function(e, t) {
                return n(e, t) ? 0 : e.name.localeCompare(t.name)
            }
        }, {
            id: "coordinates",
            header: M("ui.common.coordinatesSmall"),
            sort: function(e, t) {
                return n(e, t) ? 0 : e.coordinateX > t.coordinateX ? 1 : t.coordinateX > e.coordinateX ? -1 : e.coordinateY > t.coordinateY ? 1 : t.coordinateY > e.coordinateY ? -1 : 0
            }
        }, {
            id: "cost",
            header: M("ui.common.cost"),
            sort: function(e, t) {
                return n(e, t) ? 0 : e.teleporterCost > t.teleporterCost ? 1 : t.teleporterCost > e.teleporterCost ? -1 : 0
            }
        }], null, {
            clickable: !0,
            scaleOnPress: !0,
            onRowTap: i
        })))
    }, s.prototype.createFooter = function() {
        var e = this,
            t = this.windowBody.createChild("div", {
                className: "footer"
            });
        this.buttonOk = t.appendChild(new f({
            className: "greenButton",
            text: M("ui.common.validation")
        })), this.buttonOk.on("tap", function() {
            var t = e.parentBody.tabs.getCurrentTab()
                .target;
            window.dofus.sendMessage("TeleportRequestMessage", {
                teleporterType: t.selectedTeleporterType,
                mapId: t.selectedMapId
            })
        }), this.nbKamas = t.createChild("div", {
            className: "nbKamas"
        })
    }, s.prototype.setContent = function(e) {
        switch (m.openDialog(this.id, {
                bypassDefaultAction: !0
            }), this.setClassNames("window", "teleporterListWindow"), this.buttonOk.disable(), c = window.gui.playerData.inventory.kamas, l = window.gui.playerData.position.mapId, d = window.gui.playerData.position.subArea.nameId, e.teleporterType) {
            case O.TELEPORTER_ZAAP:
            case O.TELEPORTER_PRISM:
                this.setupZaapBody(e);
                break;
            case O.TELEPORTER_SUBWAY:
                this.setupSubwayBody(e);
                break;
            case O.TELEPORTER_HOUSE:
                this.setupHousesBody(e)
        }
        this.nbKamas.setText(g.kamasToString(c, ""))
    }, s.prototype.setupZaapBody = function(e) {
        var t, i, o;
        o = M(e.teleporterType === O.TELEPORTER_ZAAP ? "ui.zaap.zaap" : "ui.zaap.prism"), this.windowSpanTitle.setText(o + " - " + d), l === e.spawnMapId ? this.windowTitle.addClassNames("saved") : this.windowTitle.delClassNames("saved"), this.parentBody = this.zaapBody, this.zaapBody.show(), this.subwayBody.hide(), this.houseBody.hide();
        for (t in this.zaapBody.panelCollection) this.zaapBody.panelCollection.hasOwnProperty(t) && (i = this.zaapBody.panelCollection[t], i.table && (i.table.clearContent(), i.selectedTeleporterType = null, i.selectedMapId = null));
        var r = e._subAreas.length,
            s = [];
        for (t = 0; t < r; t += 1) {
            var c = e._subAreas[t],
                u = e._maps[t],
                p = e.destTeleporterType[t],
                h = n(p, I, u.id);
            s.push({
                name: c.areaName + " (" + c.name + ")",
                category: I,
                type: p,
                posX: u.posX,
                posY: u.posY,
                mapId: u.id,
                teleporterCost: e.costs[t],
                saved: u.id === e.spawnMapId,
                isFavorite: h
            })
        }
        for (t = 0; t < r; t += 1) {
            var f = s[t],
                b = f.type === O.TELEPORTER_ZAAP || f.type === O.TELEPORTER_PRISM;
            if (f.mapId !== l && b) {
                var m;
                f.type === O.TELEPORTER_ZAAP && (m = this.zaapBody.panelCollection.Zaap), f.type === O.TELEPORTER_PRISM && (m = this.zaapBody.panelCollection.Prism), this._addTeleporter({
                    parentPanel: m,
                    teleporterType: f.type,
                    category: f.category,
                    destinationName: f.name,
                    posX: f.posX,
                    posY: f.posY,
                    mapId: f.mapId,
                    teleporterCost: f.teleporterCost,
                    saved: f.saved,
                    isFavorite: f.isFavorite
                })
            }
        }
        for (t in this.zaapBody.panelCollection) this.zaapBody.panelCollection.hasOwnProperty(t) && this.zaapBody.panelCollection[t].table.sort(a);
        this.setupTabs()
    }, s.prototype.setupHousesBody = function(e) {
        var t, i, n;
        this.windowSpanTitle.setText(M("ui.common.housesWord")), this.parentBody = this.houseBody, this.zaapBody.hide(), this.subwayBody.hide(), this.houseBody.show();
        for (t in this.houseBody.panelCollection) i = this.houseBody.panelCollection[t], i.table && (i.table.clearContent(), i.selectedTeleporterType = null, i.selectedMapId = null);
        var o = e.mapIds.length;
        for (t = 0; t < o; t += 1) {
            var a = e.mapIds[t];
            n = window.gui.playerData.houseData.getHouseByMapInterior(a), this._addTeleporter({
                parentPanel: this.houseBody.panelCollection.House,
                teleporterType: O.TELEPORTER_HOUSE,
                destinationName: n.enrichData.houseName,
                posX: n.worldX,
                posY: n.worldY,
                mapId: a,
                teleporterCost: 0,
                isFavorite: !1,
                houseTeleporter: !0
            })
        }
        this.setupTabs()
    }, s.prototype.setupSubwayBody = function(e) {
        var t, i, o;
        this.windowSpanTitle.setText(M("ui.zaap.zaapi") + " - " + d), l === e.spawnMapId ? this.windowTitle.addClassNames("saved") : this.windowTitle.delClassNames("saved"), this.parentBody = this.subwayBody, this.zaapBody.hide(), this.houseBody.hide(), this.subwayBody.show();
        for (t in this.subwayBody.panelCollection) this.subwayBody.panelCollection.hasOwnProperty(t) && (i = this.subwayBody.panelCollection[t], i.table && (i.table.clearContent(), i.selectedTeleporterType = null, i.selectedMapId = null));
        var r = [];
        for (t = 0; t < e._hints.length; t += 1) {
            o = e._hints[t];
            var s = o.realMapId || o.mapId,
                c = n(O.TELEPORTER_SUBWAY, o.categoryId, s);
            S.indexOf(o.categoryId) !== -1 ? r.push({
                name: o.nameId,
                category: o.categoryId,
                posX: o.x,
                posY: o.y,
                mapId: s,
                teleporterCost: o.teleporterCost,
                saved: o.mapId === e.spawnMapId,
                isFavorite: c
            }) : w.log("Zaapi " + o.id + " category " + o.categoryId + ' "' + o.nameId + '" will be ignored.')
        }
        for (t = 0; t < r.length; t += 1)
            if (o = r[t], o.mapId !== l) {
                var u;
                u = o.category === T ? this.subwayBody.panelCollection.CraftHouse : o.category === C ? this.subwayBody.panelCollection.BidHouse : this.subwayBody.panelCollection.Misc, this._addTeleporter({
                    parentPanel: u,
                    teleporterType: O.TELEPORTER_SUBWAY,
                    destinationName: o.name,
                    category: o.category,
                    posX: o.posX,
                    posY: o.posY,
                    mapId: o.mapId,
                    teleporterCost: o.teleporterCost,
                    saved: o.saved,
                    isFavorite: o.isFavorite
                })
            } for (t in this.subwayBody.panelCollection) this.subwayBody.panelCollection.hasOwnProperty(t) && this.subwayBody.panelCollection[t].table.sort(a);
        this.setupTabs()
    }, s.prototype._addTeleporter = function(e) {
        var t = e.parentPanel.table,
            i = e.teleporterCost,
            n = e.isFavorite,
            o = new h("div");
        o.createChild("div", {
            className: "destinationName",
            text: e.destinationName
        });
        var a = o.appendChild(new b({
                type: e.houseTeleporter ? "house" : "zaap",
                name: e.destinationName,
                x: e.posX,
                y: e.posY
            })),
            s = new h("div"),
            l = s.createChild("div", {
                className: "favoriteButton"
            });
        v(l), l.toggleClassName("fullStar", n);
        var d = t.addRow({
            favorite: n,
            saved: e.saved ? new h("div", {
                className: "on"
            }) : null,
            destination: o,
            coordinates: e.posX + "," + e.posY,
            cost: g.kamasToString(i),
            teleporterCost: i,
            coordinateX: e.posX,
            coordinateY: e.posY,
            teleporterType: e.teleporterType,
            category: e.category,
            mapId: e.mapId,
            isFavorite: n,
            name: e.destinationName,
            table: t
        });
        c < i && d.addClassNames("disabled"), a.myTable = t, a.myRow = d, l.myTable = t, l.myRow = d, a.on("tap", r)
    }, s.prototype.setupTabs = function() {
        var e = this.parentBody.tabs,
            t = e.getTabsMap(),
            i = !1;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var o = t[n];
                if (o.target.table.getRowCount() <= 0) {
                    o.tab.disable();
                    continue
                }
                o.tab.enable(), i || (e.openTab(n), i = !0)
            } if (!i) {
            var a = e.getFirstTab();
            a.tab.enable(), e.openFirstTab()
        }
    }
}
