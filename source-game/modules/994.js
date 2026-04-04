function(e, t, i) {
    function n(e) {
        var t = {
            1: {
                bgClass: "bg3"
            },
            2: {
                bgClass: "bg2"
            },
            3: {
                bgClass: "bg3"
            },
            4: {
                bgClass: "bg1"
            },
            5: {
                bgClass: "bg2"
            },
            6: {
                bgClass: "bg2"
            },
            7: {
                bgClass: "bg4"
            },
            8: {
                bgClass: "bg4"
            },
            9: {
                bgClass: "bg5"
            },
            10: {
                bgClass: "bg5"
            },
            11: {
                bgClass: "bg5"
            },
            12: {
                bgClass: "bg4"
            },
            13: {
                bgClass: "bg2"
            },
            14: {
                bgClass: "bg4"
            },
            15: {
                bgClass: "bg6"
            }
        };
        return t[e].bgClass
    }

    function o() {
        // ## Frame [characterSelection]
        function e(e) {
            l.close("deleteCharacterConfirm");
            var characters = e.data;

            n.selectedCharacter = characters,
            n._updateBreedBg(characters.breed),
            n.selectedRow && n.selectedRow["delete"].content.toggleDisplay(!1),
            n.selectedRow = e,
            n.selectedRow["delete"].content.toggleDisplay(!0),
            n.characterDisplay.setLook(characters.entityLook, {
                boneType: "characters/",
                skinType: "characters/"
            })
        }

        function t(e) {
            var t = "default",
                i = {
                    TooManyDeletion: d("ui.charSel.deletionErrorTooManyDeletion"),
                    WrongAnswer: d("ui.charSel.deletionErrorWrongAnswer"),
                    UnsecureMode: d("ui.charSel.deletionErrorUnsecureMode"),
                    "default": d("ui.charSel.deletionError")
                };
            e.reason === M.DEL_ERR_TOO_MANY_CHAR_DELETION ? t = "TooManyDeletion" : e.reason === M.DEL_ERR_BAD_SECRET_ANSWER ? t = "WrongAnswer" : e.reason === M.DEL_ERR_RESTRICED_ZONE && (t = "UnsecureMode"), a.openSimplePopup(i[t])
        }

        function i() {
            l.close(n.id), b.goBackToSelectionOf("server")
        }
        c.call(this, {
            className: "CharacterSelectionWindow",
            title: d("ui.charsel.title"),
            isFullScreen: !0
        });
        var n = this,
            o = this.windowBody,
            a = window.gui;
        this.closeButton.setText(d("ui.common.cancel")),
        this.selectedCharacter = null;
        var s = o.createChild("div", { className: "bgParent" }),
            u = s.createChild("div", { className: "bgLeft" }),
            A = s.createChild("div", { className: "bgRight" });

        A.createChild("div", { className: "bg" }), 
        this.canvas = u.createChild("div", { className: "canvasDiv" }),
        this.breedBg = this.canvas.createChild("div", { className: "breedBg" }),
        this.breedBgFade = this.canvas.createChild("div", { className: "breedBg" });
        var O = u.createChild("div", { className: "whiteBorders" });
        O.createChild("div", { className: "whiteBorderLeft" }),
        O.createChild("div", { className: "whiteBorderRight" }),
        A.createChild("div", { className: "whiteGradient" });

        var v = this.mainDiv = o.createChild("div", { className: "mainDiv" }),
            y = v.createChild("div", { className: "tableDiv" }),
            z = [{ id: "icon" },
                { id: "name", header: d("ui.common.name") },
                { id: "breed", header: d("ui.charcrea.breed") },
                { id: "level", header: d("ui.common.level") },
                { id: "bonusXp", header: d("ui.fightend.bonus") },
                { id: "delete" }];

        this.charactersTable = y.appendChild(new f(z, null, { newScroller: !0 })),
        this.charactersTable.addClassNames("characterTable"),
        this.charactersTable.on("rowTap", function(t) { t.data && t !== n.selectedRow && (_("SELECT_CHARACTER"), e(t)) });
        var w = v.createChild("div", { className: "buttonsDiv" }),
            T = w.appendChild(new p({
                text: d("ui.charsel.changeServer"),
                className: ["changeServerBtn", "blackButtonV2"],
                sound: "CANCEL_BUTTON"
            }, function() {
                i()
            }));
        this.btnCreate = w.appendChild(new p({
            text: d("ui.charsel.createCharacter"),
            className: ["newCharacterBtn", "blackButtonV2"],
            sound: "OK_BUTTON"
        }, function() {
            l.close("deleteCharacterConfirm"), l.close(n.id), l.open("characterCreation")
        })), this.xpBubble = w.createChild("div", {
            className: "xpBubble"
        }), this.checkerboardImage = this.canvas.createChild("div", {
            className: "checkerboardImage"
        });
        var C = this.canvas.appendChild(new m({
            scale: 3
        }));
        this.characterDisplay = C;
        var I = C.createChild("div", {
            className: "leftButton"
        });
        h(I, {
            repeatDelay: 100
        }), I.on("tap", function() {
            C.rotateCharacter(!1)
        }), I.createChild("div", {
            className: "arrow"
        });
        var S = C.createChild("div", {
            className: "rightButton"
        });
        h(S, {
            repeatDelay: 100
        }), S.on("tap", function() {
            C.rotateCharacter(!0)
        }), S.createChild("div", {
            className: "arrow"
        });
        var E = this.btnPlay = w.appendChild(new p({
            text: d("ui.common.play"),
            className: ["btnPlay", "greenButtonV2"],
            sound: "PLAY_BUTTON"
        }, function() {
            this.disable(), n.btnCreate.disable(), T.disable(), r.selectCharacter(n.selectedCharacter.id)
        }));
        this.closeButton.on("tap", function() {
            i()
        }), this._consoleButton = o.appendChild(new p({
            className: ["consoleButton"],
            hidden: !0
        }, function() {
            l["switch"]("adminConsole")
        })), this.on("open", function(e) {
            return n.selectedRow = null, e = e.length ? e : null, n._consoleButton.toggleDisplay(window.gui.playerData.hasRight(g.SHOW_ADMIN_CONSOLE_BUTTON)), this.charactersList = e || this.charactersList, this.charactersList ? (n.updateCharacterList(this.charactersList), E.enable(), n.btnCreate.enable(), T.enable(), void this.charactersTable.scroller.updateShadows()) : console.error("CharacterSelectionWindow opened without character list info")
        }), this.on("close", function() {
            l.close("deleteCharacterConfirm"), C.release()
        }), a.on("CharacterDeletionErrorMessage", this.localizeEvent(t))
    }

    function a(e) {
        for (var t = 1, i = 0, n = e.length; i < n; i++) {
            for (var o = 1, a = 0; a < n; a++) e[a].id !== e[i].id && e[a].level > e[i].level && o < 4 && o++;
            e[i].bonusXp = o, e[i].level > 1 && t++
        }
        return Math.min(t, 4)
    }
    i(995);
    var r = i(563),
        s = i(56)
        .inherits,
        c = i(70),
        l = i(52),
        d = i(17)
        .getText,
        u = i(323),
        p = i(86),
        h = i(63),
        f = i(765),
        b = i(141),
        m = i(689),
        M = i(996),
        g = i(466),
        _ = i(91)
        .playUiSound,
        A = i(72),
        O = i(16)
        .showProgressively,
        v = 20;
    s(o, c), e.exports = o, o.prototype.backButtonClose = function() {
        this.close(), b.goBackToSelectionOf("server")
    }, o.prototype.updateCharacterList = function(e) {
        function t() {
            var e = window.gui.playerData.identification.secretQuestion,
                t = i.selectedCharacter.level,
                n = i.selectedCharacter.id,
                o = i.selectedCharacter.name;
            t >= v && !window.gui.playerData.isAdmin() ? l.open("deleteCharacterConfirm", {
                id: n,
                name: o,
                secretQuestion: e
            }) : window.gui.openConfirmPopup({
                fullScreen: !0,
                className: "swapButtons",
                buttonYesLabel: d("ui.popup.delete"),
                buttonNoLabel: d("ui.common.cancel"),
                title: d("ui.popup.warnBeforeDeleteTitle", o),
                message: d("ui.popup.warnBeforeDelete"),
                cb: function(e) {
                    if (e) {
                        var t = u(n + "~000000000000000000");
                        window.dofus.sendMessage("CharacterDeletionRequestMessage", {
                            characterId: n,
                            secretAnswerHash: t
                        })
                    }
                }
            })
        }
        var i = this,
            n = a(e);
        this.xpBubble.setClassNames(["xpBubble", "x" + n + "Bubble"]), this.charactersTable.clearContent();
        for (var o = window.gui.databases.Breeds, r = 0; r < e.length; r++) {
            var s = e[r],
                c = s.breed || 0,
                h = {};
            h.icon = new A("div", {
                className: ["icon", "breed_" + c, s.sex ? "female" : "male"]
            }), h.name = s.name, h.breed = o[c].shortNameId, h.level = s.level, h.bonusXp = new A("div", {
                className: "bonus_x" + s.bonusXp
            }), h.name = s.name, h["delete"] = new p({
                className: "delete"
            }, t), h["delete"].toggleDisplay(!1), h = this.charactersTable.addRow(h), h.data = s
        }
        this.charactersTable.selectFirstRow()
    }, o.prototype._updateBreedBg = function(e) {
        var t = this.breedBg;
        this.breedBg = this.breedBgFade, this.breedBgFade = t;
        var i = n(e);
        this.breedBg.setClassNames(["breedBg", i]), O(this.breedBg, 500, null, this.breedBgFade), O(this.checkerboardImage)
    }
}
