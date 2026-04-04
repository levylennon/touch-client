function(e, t, i) {
    function n() {
        c.call(this, {
            className: "EstateForSellWindow",
            title: m("ui.estate.agency"),
            positionInfo: {
                top: "c",
                left: "c",
                width: "82%",
                height: "94%",
                maxHeight: 660
            }
        });
        var e = this;
        this.once("open", function() {
            e.setupContainer1(), e.setupContainer2(), e.setupContainer3()
        }), this.on("open", function() {
            e.resetFilterData()
        }), this.on("close", function() {
            e.table.clearContent(), p.close("estateInformation")
        }), this.setupSocketEvents()
    }

    function o(e, t) {
        for (var i = {}, n = {}, o = 0; o < e.length; o++) i[e[o].modelId] = !0, n[e[o].subAreaId] = !0;
        u.getDataMap("Houses", Object.keys(i), null, function(i, o) {
            return i ? t(i) : void u.getDataMap("SubAreas", Object.keys(n), null, function(i, n) {
                if (i) return t(i);
                for (var a = window.gui.databases.Areas, r = [], s = 0; s < e.length; s++) {
                    var c = e[s],
                        l = n[c.subAreaId],
                        d = o[c.modelId];
                    r.push({
                        type: "house",
                        gfxId: d.gfxId,
                        name: d.nameId,
                        areaName: a[l.areaId].nameId,
                        price: h.kamasToString(c.price),
                        rooms: c.nbRoom,
                        chests: c.nbChest,
                        skillsCount: c.skillListIds.length,
                        subAreaName: l.nameId,
                        ownerName: c.ownerName,
                        ownerConnected: c.ownerConnected,
                        worldX: c.worldX,
                        worldY: c.worldY
                    })
                }
                return t(null, r)
            })
        })
    }

    function a(e, t) {
        for (var i = {}, n = 0; n < e.length; n++) i[e[n].subAreaId] = !0;
        u.getDataMap("SubAreas", Object.keys(i), null, function(i, n) {
            if (i) return t(i);
            for (var o = [], a = window.gui.databases.Areas, r = 0; r < e.length; r++) {
                var s = e[r],
                    c = n[s.subAreaId];
                c && o.push({
                    type: "paddock",
                    name: m("ui.mount.paddockWithRoom", s.nbObject),
                    areaName: a[c.areaId].nameId,
                    price: h.kamasToString(s.price),
                    mounts: s.nbMount,
                    objects: s.nbObject,
                    subAreaName: c.nameId,
                    ownerName: s.guildOwner ? s.guildOwner : "?",
                    worldX: s.worldX,
                    worldY: s.worldY
                })
            }
            return t(null, o)
        })
    }

    function r() {
        p.open("estateInformation", this.data)
    }
    i(1030);
    var s = i(56)
        .inherits,
        c = i(70),
        l = i(86)
        .DofusButton,
        d = i(423),
        u = i(130),
        p = i(52),
        h = i(16),
        f = i(945),
        b = i(1031),
        m = i(17)
        .getText,
        M = i(765);
    s(n, c), e.exports = n, n.prototype.setupRoomSelector = function() {
        var e = this,
            t = 4;
        this.roomSelector.addOption(m("ui.estate.filter.atLeastNbRoom"), 0);
        for (var i = 1; i <= t; i++) this.roomSelector.addOption(m("ui.estate.filter.nbRoom", i), i);
        this.roomSelector.on("change", function(t) {
            e.houseToSellFilter.atLeastNbRoom = parseInt(t, 10)
        })
    }, n.prototype.setupChestSelector = function() {
        var e = this,
            t = 4;
        this.chestSelector.addOption(m("ui.estate.filter.atLeastNbChest"), 0);
        for (var i = 1; i <= t; i++) this.chestSelector.addOption(m("ui.estate.filter.nbChest", i), i);
        this.chestSelector.on("change", function(t) {
            e.houseToSellFilter.atLeastNbChest = parseInt(t, 10)
        })
    }, n.prototype.setupMountSelector = function() {
        var e = this,
            t = 20,
            i = 5;
        this.mountSelector.addOption(m("ui.estate.filter.atLeastNbMount"), 0);
        for (var n = i; n <= t; n += i) this.mountSelector.addOption(m("ui.estate.filter.nbMount", n), n);
        this.mountSelector.on("change", function(t) {
            e.paddockToSellFilter.atLeastNbMount = parseInt(t, 10)
        })
    }, n.prototype.setupBreedingSelector = function() {
        var e = this,
            t = 20,
            i = 5;
        this.breedingSelector.addOption(m("ui.estate.filter.atLeastNbMachine"), 0);
        for (var n = i; n <= t; n += i) this.breedingSelector.addOption(m("ui.estate.filter.nbMachine", n), n);
        this.breedingSelector.on("change", function(t) {
            e.paddockToSellFilter.atLeastNbMachine = parseInt(t, 10)
        })
    }, n.prototype.setupHousingAreaSelector = function() {
        var e = this;
        this.housingAreaSelector.addOption(m("ui.estate.filter.areaRequested"), -1);
        for (var t = b.getAreasWithHouseOrPaddock("house"), i = 0; i < t.length; i++) e.housingAreaSelector.addOption(t[i].nameId, t[i].id);
        this.housingAreaSelector.on("change", function(t) {
            e.houseToSellFilter.areaId = parseInt(t, 10)
        })
    }, n.prototype.setupPaddockAreaSelector = function() {
        var e = this;
        this.paddocksAreaSelector.addOption(m("ui.estate.filter.areaRequested"), -1);
        for (var t = b.getAreasWithHouseOrPaddock("paddock"), i = 0; i < t.length; i++) e.paddocksAreaSelector.addOption(t[i].nameId, t[i].id);
        this.paddocksAreaSelector.on("change", function(t) {
            e.paddockToSellFilter.areaId = parseInt(t, 10)
        })
    }, n.prototype.setupSkillSelector = function() {
        var e = this;
        this.skillSelector.addOption(m("ui.estate.filter.skillRequested"), 0), b.getSkillsAvailableInHouse(function(t, i) {
            if (t) return console.error("Failed to retrieve skill list", t);
            for (var n = 0; n < i.length; n++) e.skillSelector.addOption(i[n].nameId, i[n].id)
        }), this.skillSelector.on("change", function(t) {
            e.houseToSellFilter.skillRequested = parseInt(t, 10)
        })
    }, n.prototype.changeDialogType = function(e) {
        this.dialogType = e, "house" === e ? (this.roomSelector.show(), this.chestSelector.show(), this.housingAreaSelector.show(), this.skillSelector.show(), this.mountSelector.hide(), this.breedingSelector.hide(), this.paddocksAreaSelector.hide()) : (this.roomSelector.hide(), this.chestSelector.hide(), this.housingAreaSelector.hide(), this.skillSelector.hide(), this.mountSelector.show(), this.breedingSelector.show(), this.paddocksAreaSelector.show())
    }, n.prototype.setupContainer1 = function() {
        var e = this,
            t = this.windowBody.createChild("div", {
                className: "container1"
            });
        t.createChild("div", {
            className: ["text", "inline"],
            text: m("ui.estate.typeChoice")
        }), this.propertySelector = t.appendChild(new f({
            className: "propertySelector"
        })), this.propertySelector.addOption(m("ui.common.housesWord"), "house"), this.propertySelector.addOption(m("ui.common.mountPark"), "paddock"), this.propertySelector.on("change", function(t) {
            e.changeDialogType(t), e.searchButton.emit("tap")
        })
    }, n.prototype.setupContainer2 = function() {
        var e = this,
            t = this.windowBody.createChild("div", {
                className: ["wrapper", "container2"]
            });
        t.createChild("div", {
            className: "text",
            text: m("ui.search.criteria")
        });
        var i = t.createChild("div", {
            className: "priceContainer"
        });
        i.createChild("div", {
            className: ["text", "inline"],
            text: m("ui.estate.filter.maxPrice")
        });
        var n = i.createChild("div", {
            className: "inputContainer"
        });
        this.priceInput = n.appendChild(new d({
            minValue: 0,
            title: m("ui.estate.filter.maxPrice")
        })), n.createChild("div", {
            className: "kamaUnit",
            text: m("ui.common.short.kama")
        });
        var o = t.createChild("div", {
            className: "col1"
        });
        this.roomSelector = o.appendChild(new f({
            className: "roomSelector"
        })), 
        this.setupRoomSelector(), this.chestSelector = o.appendChild(new f({
            className: "chestsSelector"
        })), 
        this.setupChestSelector(), this.mountSelector = o.appendChild(new f({
            className: "mountsSelector"
        })), 
        this.setupMountSelector(), this.breedingSelector = o.appendChild(new f({
            className: "breedingSelector"
        })), 
        this.setupBreedingSelector(), this.housingAreaSelector = o.appendChild(new f({
            className: "areaSelector"
        })), 
        this.setupHousingAreaSelector(), this.paddocksAreaSelector = o.appendChild(new f({
            className: "areaSelector"
        })), 
        this.setupPaddockAreaSelector(), this.skillSelector = o.appendChild(new f({
            className: "skillSelector"
        })), 
        this.setupSkillSelector(), this.searchButton = t.appendChild(new l(m("ui.search.search"), {
            className: ["searchButton", "inline"]
        })), 
        this.searchButton.on("tap", function() {
            var t = e.priceInput.getValue();
            return "house" === e.dialogType ? (e.houseToSellFilter.maxPrice = t, window.dofus.sendMessage("HouseToSellFilterMessage", e.houseToSellFilter), void window.dofus.sendMessage("HouseToSellListRequestMessage", {
                pageIndex: 1
            })) : (e.paddockToSellFilter.maxPrice = t, window.dofus.sendMessage("PaddockToSellFilterMessage", e.paddockToSellFilter), void window.dofus.sendMessage("PaddockToSellListRequestMessage", {
                pageIndex: 1
            }))
        })
    }, n.prototype.setupContainer3 = function() {
        function e(e) {
            var t = new l("", {
                className: "info"
            });
            return t.data = e.button, t.on("tap", r), t
        }
        var t = this,
            i = this.windowBody.createChild("div", {
                className: ["wrapper", "container3"]
            }),
            n = [{
                id: "name",
                header: m("ui.common.name"),
                sort: !0
            }, {
                id: "subarea",
                header: m("ui.map.subarea"),
                sort: !0
            }, {
                id: "price",
                header: m("ui.common.price"),
                sort: !0
            }, {
                id: "button",
                format: e
            }],
            o = {
                clickable: !1
            };
        this.table = i.appendChild(new M(n, null, o));
        var a = i.createChild("div", {
            className: "navigator"
        });
        this.leftButton = a.appendChild(new l("", {
            className: ["leftButton", "inline"]
        })), this.pages = a.createChild("div", {
            className: ["pages", "inline"]
        }), this.rightButton = a.appendChild(new l("", {
            className: ["rightButton", "inline"]
        })), this.leftButton.on("tap", function() {
            var e = {
                pageIndex: t.currentPageIndex - 1
            };
            return "house" === t.dialogType ? void window.dofus.sendMessage("HouseToSellListRequestMessage", e) : void window.dofus.sendMessage("PaddockToSellListRequestMessage", e)
        }), this.rightButton.on("tap", function() {
            var e = {
                pageIndex: t.currentPageIndex + 1
            };
            return "house" === t.dialogType ? void window.dofus.sendMessage("HouseToSellListRequestMessage", e) : void window.dofus.sendMessage("PaddockToSellListRequestMessage", e)
        })
    }, n.prototype.updateList = function(e) {
        var t = this;
        this.table.clearContent();
        var i = "house" === t.dialogType ? o : a;
        i(e, function(e, i) {
            if (e) return console.error("Failed to retrieve data", e);
            for (var n = [], o = 0; o < i.length; o++) {
                var a = i[o];
                n.push({
                    name: a.name,
                    subarea: a.areaName,
                    price: a.price,
                    button: a
                })
            }
            t.table.addList(n)
        })
    }, n.prototype.resetFilterData = function() {
        this.houseToSellFilter = {
            areaId: -1,
            atLeastNbRoom: 0,
            atLeastNbChest: 0,
            skillRequested: 0,
            maxPrice: 0
        }, this.paddockToSellFilter = {
            areaId: -1,
            atLeastNbMount: 0,
            atLeastNbMachine: 0,
            maxPrice: 0
        }, this.roomSelector.setValue(0), this.chestSelector.setValue(0), this.mountSelector.setValue(0), this.breedingSelector.setValue(0), this.housingAreaSelector.setValue(-1), this.paddocksAreaSelector.setValue(-1), this.skillSelector.setValue(0), this.priceInput.setValue(0), window.dofus.sendMessage("HouseToSellFilterMessage", this.houseToSellFilter), window.dofus.sendMessage("PaddockToSellFilterMessage", this.paddockToSellFilter)
    }, n.prototype.updateDisplay = function(e, t) {
        this.currentPageIndex = t.pageIndex, this.currentPageIndex <= 1 ? this.leftButton.disable() : this.leftButton.enable(), this.currentPageIndex >= t.totalPage ? this.rightButton.disable() : this.rightButton.enable(), this.pages.setText(t.pageIndex + "/" + t.totalPage), this.propertySelector.setValue(e), this.changeDialogType(e)
    }, n.prototype.setupSocketEvents = function() {
        var e = this;
        window.dofus.connectionManager.on("HouseToSellListMessage", function(t) {
            p.openDialog(e.id), e.updateDisplay("house", t), e.updateList(t.houseList)
        }), window.dofus.connectionManager.on("PaddockToSellListMessage", function(t) {
            p.openDialog(e.id), e.updateDisplay("paddock", t), e.updateList(t.paddockList)
        })
    }
}
