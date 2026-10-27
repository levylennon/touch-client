function(e, t, i) {
    function n() {
        function e(e) {
            n.characterDisplay.clear(), n.characterDisplay.setLook(e, {
                direction: c.DIRECTION_SOUTH,
                animation: "AnimStatique",
                boneType: "characters/",
                skinType: "characters/",
                riderOnly: !0
            })
        }

        function t(t, i) {
            var o = t.playerInfo.playerId;
            window.gui.playerData.id === o ? e(window.gui.playerData.characterBaseInformations.entityLook) : window.dofus.sendMessage("ContactLookRequestByIdMessage", {
                contactType: s.SOCIAL_CONTACT_CRAFTER,
                playerId: t.playerInfo.playerId
            }), n.name.setText(t.playerInfo.playerName), n.jobName.setText(i.nameId), n.jobLevel.setText(t.jobInfo.jobLevel);
            var a = t.playerInfo.alignmentSide;
            a !== b.ALIGNMENT_ANGEL && a !== b.ALIGNMENT_EVIL && (a = b.ALIGNMENT_NEUTRAL);
            var c = "gfx/alignments/wings/Artisan_tx_bg" + a + "_frame0.png";
            f.preloadImage(c, function(e) {
                n.characterDisplay.setStyle("backgroundImage", e)
            }), n.nearCraftTable.setText(t.playerInfo.isInWorkshop ? l : m), n.coordinates.setText("-"), t.playerInfo.isInWorkshop && (n.coordinates.setText("( " + t.playerInfo.worldX + "," + t.playerInfo.worldY + " )"), h.getDataMap("SubAreas", [t.playerInfo.subAreaId], null, function(e, i) {
                if (e) return console.error(e);
                var o = i[t.playerInfo.subAreaId],
                    a = window.gui.databases.Areas[o.areaId];
                n.location.setText(a.nameId + " ( " + o.nameId + " )")
            }));
            var d = t.jobInfo.userDefinedParams,
                u = 0 !== (d & r.CRAFT_OPTION_NOT_FREE),
                p = 0 !== (d & r.CRAFT_OPTION_NOT_FREE_EXCEPT_ON_FAIL),
                M = 0 !== (d & r.CRAFT_OPTION_RESOURCES_REQUIRED);
            n.checkboxNotFree.toggleActivation(u), n.freeOnFailCheckbox.toggleDisplay(Boolean(i.specializationOfId)), n.freeOnFailCheckbox.toggleActivation(p), n.checkboxRessourcesNeeded.toggleActivation(M), n.minItems.setText(t.jobInfo.minSlots), n.messageButton.enable()
        }

        function i() {
            n.characterDisplay.release(), delete n.crafter
        }
        d.call(this, {
            className: "CrafterWindow",
            title: u("ui.craft.crafter"),
            positionInfo: {
                top: "c",
                left: "c",
                width: 550,
                height: 380
            }
        });
        var n = this,
            l = u("ui.common.yes"),
            m = u("ui.common.no");
        this.once("open", function() {
            var i = this.windowBody.createChild("div", {
                    className: "colsWrapper"
                }),
                r = i.createChild("div", {
                    className: "col1"
                }),
                s = i.createChild("div", {
                    className: "col2"
                }),
                c = r.createChild("div", {
                    className: ["block", "blockCharacter"]
                });
            this.characterDisplay = c.appendChild(new a({
                scale: 2
            })), this.characterDisplay.clear();
            var l = s.createChild("div", {
                className: ["block", "blockInfos"]
            });
            l.createChild("div", {
                className: "title",
                text: u("ui.common.informations")
            });
            var d = l.createChild("div", {
                className: "line"
            });
            d.createChild("div", {
                className: "label",
                text: u("ui.common.name")
            }), this.name = d.createChild("div", {
                className: ["value", "name"]
            });
            var h = l.createChild("div", {
                className: "line"
            });
            h.createChild("div", {
                className: "label",
                text: u("ui.craft.job")
            }), this.jobName = h.createChild("div", {
                className: ["value", "job"]
            });
            var f = l.createChild("div", {
                className: "line"
            });
            f.createChild("div", {
                className: "label",
                text: u("ui.craft.jobLevel")
            }), this.jobLevel = f.createChild("div", {
                className: ["value", "jobLevel"]
            });
            var b = s.createChild("div", {
                className: ["block", "blockLocation"]
            });
            b.createChild("div", {
                className: "title",
                text: u("ui.common.localisation")
            });
            var m = b.createChild("div", {
                className: "line"
            });
            this.location = m.createChild("div", {
                className: ["value", "location"]
            });
            var M = b.createChild("div", {
                className: "line"
            });
            M.createChild("div", {
                className: "label",
                text: u("ui.craft.nearCraftTable")
            }), this.nearCraftTable = M.createChild("div", {
                className: ["value", "nearCraftTable"]
            });
            var g = b.createChild("div", {
                className: "line"
            });
            g.createChild("div", {
                className: "label",
                text: u("ui.common.coordinates")
            }), this.coordinates = g.createChild("div", {
                className: ["value", "coordinates"]
            });
            var _ = s.createChild("div", {
                className: ["block", "blockOptions"]
            });
            _.createChild("div", {
                className: "title",
                text: u("ui.craft.jobOptions")
            }), this.checkboxNotFree = _.appendChild(new p(u("ui.craft.notFree"))), this.checkboxNotFree.disable(), this.freeOnFailCheckbox = _.appendChild(new p(u("ui.craft.freeIfFailed"))), this.freeOnFailCheckbox.addClassNames("freeOnFail"), this.freeOnFailCheckbox.disable(), this.checkboxRessourcesNeeded = _.appendChild(new p(u("ui.craft.ressourcesNeeded"))), this.checkboxRessourcesNeeded.disable();
            var A = _.createChild("div", {
                className: "line"
            });
            A.createChild("div", {
                className: "label",
                text: u("ui.craft.minItemInCraft")
            }), this.minItems = A.createChild("div", {
                className: ["value", "minItems"]
            }), this.messageButton = this.windowBody.appendChild(new o(u("ui.common.wMessage"))), this.messageButton.addClassNames("messageButton"), this.messageButton.on("tap", function() {
                window.gui.chat.startPrivateMessage(n.crafter.playerInfo.playerName)
            }), window.gui.on("ContactLookMessage", function(t) {
                n.crafter && e(t.look)
            }), window.gui.on("JobCrafterDirectoryAddMessage", function(e) {
                n.crafter && e.listEntry.playerInfo.playerId === n.crafter.playerInfo.playerId && (n.crafter = e.listEntry, t(n.crafter, n.job))
            }), window.gui.on("JobCrafterDirectoryRemoveMessage", function(e) {
                n.crafter && e.playerId === n.crafter.playerInfo.playerId && n.messageButton.disable()
            })
        }), this.on("open", function(e) {
            e = e || {}, this.crafter = e.crafter, this.job = e.job, t(this.crafter, this.job)
        }), this.on("close", i)
    }
    i(1280);
    var o = i(86)
        .DofusButton,
        a = i(689),
        r = i(1251),
        s = i(1281),
        c = i(730),
        l = i(56)
        .inherits,
        d = i(70),
        u = i(17)
        .getText,
        p = i(594),
        h = i(130),
        f = i(12),
        b = i(440);
    l(n, d), e.exports = n
}
