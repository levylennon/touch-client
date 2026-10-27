function(e, t, i) {
    function n() {
        s.call(this, {
            className: "EstateInformationWindow",
            title: r("ui.popup.information"),
            positionInfo: {
                top: "c",
                left: "c",
                width: 580,
                height: 355
            }
        });
        var e = this;
        this.worldX = 0, this.worldY = 0, this.once("open", function() {
            e.setupDom()
        }), this.on("open", function(t) {
            return t ? (e.windowBody.show(), void e.updateData(t)) : void e.windowBody.hide()
        })
    }
    i(1033);
    var o = i(56)
        .inherits,
        a = i(86)
        .DofusButton,
        r = i(17)
        .getText,
        s = i(70),
        c = i(52),
        l = i(12);
    o(n, s), e.exports = n, n.prototype.setupDom = function() {
        var e = this,
            t = this.windowBody.createChild("div", {
                className: ["container", "container1"]
            }),
            i = t.createChild("div", {
                className: "imageContainer"
            });
        this.image = i.createChild("div", {
            className: "image"
        });
        var n = t.createChild("div", {
            className: "houseDetails"
        });
        this.name = n.createChild("div", {
            className: "name"
        });
        var o = n.createChild("div", {
            className: ["textContainer", "price"]
        });
        o.createChild("div", {
            className: "left",
            text: r("ui.common.price")
        }), this.price = o.createChild("div", {
            className: "right"
        }), n.createChild("div", {
            className: "message",
            text: r("ui.estate.visit")
        }), this.roomsContainer = n.createChild("div", {
            className: ["textContainer", "clear"]
        }), this.roomsContainer.createChild("div", {
            className: "left",
            text: r("ui.estate.nbRoom")
        }), this.roomCount = this.roomsContainer.createChild("div", {
            className: "right"
        }), this.chestContainer = n.createChild("div", {
            className: "textContainer"
        }), this.chestContainer.createChild("div", {
            className: "left",
            text: r("ui.estate.nbChest")
        }), this.chestCount = this.chestContainer.createChild("div", {
            className: "right"
        }), this.mountsContainer = n.createChild("div", {
            className: ["textContainer", "clear"]
        }), this.mountsContainer.createChild("div", {
            className: "left",
            text: r("ui.estate.nbMount")
        }), this.mountCount = this.mountsContainer.createChild("div", {
            className: "right"
        }), this.breedingContainer = n.createChild("div", {
            className: "textContainer"
        }), this.breedingContainer.createChild("div", {
            className: "left",
            text: r("ui.estate.nbMachine")
        }), this.breedingCount = this.breedingContainer.createChild("div", {
            className: "right"
        }), this.skills = n.createChild("div", {
            className: "message"
        });
        var s = this.windowBody.createChild("div", {
                className: ["container", "container2"]
            }),
            l = s.createChild("div", {
                className: "textContainer"
            });
        l.createChild("div", {
            className: ["titleText", "text"],
            text: r("ui.common.localisation")
        }), this.coordinate = l.createChild("div", {
            className: "text"
        });
        var d = l.appendChild(new a("", {
            className: "positionBtn"
        }));
        this.locationName = s.createChild("div", {
            className: "locationName"
        });
        var u = this.windowBody.createChild("div", {
                className: ["container", "container3"]
            }),
            p = u.createChild("div", {
                className: "textContainer"
            });
        p.createChild("div", {
            className: ["titleText", "text"],
            text: r("ui.common.ownerWord")
        }), this.ownerName = p.createChild("div", {
            className: "text"
        }), this.ownerStatus = p.createChild("div", {
            className: "text"
        }), this.chatButton = p.appendChild(new a("", {
            className: "chatBtn"
        })), d.on("tap", function() {
            isNaN(e.worldX) || isNaN(e.worldY) || (window.gui.emit("CompassUpdateMessage", {
                type: "estate",
                worldX: e.worldX,
                worldY: e.worldY,
                name: e.nameTxt
            }), c.open("worldMap", {
                x: e.worldX,
                y: e.worldY
            }))
        }), this.chatButton.on("tap", function() {
            window.gui.chat.startPrivateMessage(e.ownerName.getText(), !0)
        })
    }, n.prototype.updateData = function(e) {
        var t = this;
        if (this.worldX = e.worldX, this.worldY = e.worldY, this.price.setText(e.price), this.coordinate.setText(e.worldX + "," + e.worldY), this.ownerName.setText("?" === e.ownerName ? r("ui.common.none") : e.ownerName), "?" !== e.ownerName && e.hasOwnProperty("ownerConnected")) {
            var i = r(e.ownerConnected ? "ui.server.state.online" : "ui.server.state.offline");
            this.ownerStatus.setText(" (" + i + ")")
        } else this.ownerStatus.setText("");
        this.locationName.setText(e.areaName + " ( " + e.subAreaName + " )"), this.chatButton.toggleDisplay("house" === e.type && "?" !== e.ownerName && e.ownerConnected);
        var n = "gfx/illusUi/enclos_tx_illuEnclos.png",
            o = "house" === e.type ? "gfx/houses/" + e.gfxId + ".png" : n;
        if (this.image.setStyle("backgroundImage", "none"), l.preloadImage(o, function(e) {
                t.image.setStyle("backgroundImage", e)
            }), "house" === e.type) {
            this.mountsContainer.hide(), this.breedingContainer.hide(), this.roomsContainer.show(), this.chestContainer.show(), this.nameTxt = e.name, this.name.setText(e.name), this.roomCount.setText(e.rooms), this.chestCount.setText(e.chests);
            var a;
            return a = e.skillsCount > 0 ? r("ui.estate.houseSkills", e.skillsCount) : r("ui.estate.noSkill"), this.skills.setText(a), void this.skills.show()
        }
        this.nameTxt = r("ui.common.mountPark"), this.name.setText(r("ui.common.mountPark")), this.skills.hide(), this.roomsContainer.hide(), this.chestContainer.hide(), this.mountsContainer.show(), this.breedingContainer.show(), this.mountCount.setText(e.mounts), this.breedingCount.setText(e.objects)
    }
}
