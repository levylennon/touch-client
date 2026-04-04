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
        return t[e]
    }

    function o(e, t, i, n, o) {
        var a = new O({
            className: [e, "blackButtonV2"],
            text: t,
            tooltip: i
        }, n);
        return o && (t && a.createChild("div", {
            className: "btnText",
            text: t
        }), a.createChild("div", {
            className: "btnIcon"
        })), a
    }

    function a(e, t, i) {
        g.call(this, "div", {
            className: e
        }), this.myWindow = t, x(this), this.on("tap", i)
    }

    function r() {
        D.call(this, {
            title: "",
            noCloseButton: !0,
            className: "CharacterCreationWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: "100%",
                height: "100%",
                isFullScreen: !0,
                isModal: !0
            }
        }), this.relookingParams = null, this._reset(), this.on("open", function() {
            this.addClassNames(["disabled"]), z.setOpenCharacterCreation(!1)
        }), this.on("opened", this._initialize), this._listenersSetup()
    }

    function s(e, t) {
        var i = e[t];
        return i ? i.order || 0 : 0
    }

    function c(e, t) {
        for (var i in e)
            if (e[i].skins === t.toString()) return i;
        return 0
    }

    function l() {
        var e = this,
            t = e;
        E.getItems([t.itemId], function(e, i) {
            return e ? console.error(e) : void B.showNotification(I("tablet.charCrea.potionNeeded", i[0].getName()), t)
        })
    }

    function d() {
        var e = this.myWindow;
        if (Y("GEN_BUTTON"), e._breedId !== this.breedId) return Date.now() - e.lastRendering < ue ? console.warn("Ignoring hammered button") : void e._selectBreed(this.breedId, void 0, e._currentColors)
    }

    function u(e) {
        3 === window.gui.databases.Breeds[e._breedId].complexity ? window.gui.openConfirmPopup({
            fullScreen: !0,
            className: ["swapButtons", "bluePopup"],
            buttonYesLabel: I("ui.common.yes"),
            buttonNoLabel: I("ui.charcrea.otherClass"),
            title: I("ui.charcrea.popupTitle"),
            message: I("ui.charcrea.popupMessage"),
            cb: function(t) {
                t && e._next()
            }
        }) : e._next()
    }

    function p() {
        Y("GEN_BUTTON"), this.myWindow._selectHead(this.headOrder, !0)
    }

    function h() {
        window.clearInterval(Ae), Ae = null, _e && _e.rootElement && (_e.setColor(pe, he), _e.myWindow._updateSprite())
    }

    function f(e) {
        e && (Ae && h(), _e = e, pe = e.getColor(), he = e.isCustomColor(), Me = 0, ge = Date.now(), Ae = window.setInterval(f, fe));
        var t = me[Me % me.length],
            i = {
                rgb: t,
                hex: T.colorArrayToHexa(t)
            };
        _e.setColor(i), _e.myWindow._updateSprite(), Me++, Date.now() - ge >= be && h()
    }

    function b() {
        Y("GEN_BUTTON");
        var e = this.myWindow;
        e._selectColor(this.id), f(e.selectedColorBtn)
    }

    function m(e, t, i) {
        var n = T.parseIndexedColor(t)
            .color,
            o = [n.r, n.g, n.b];
        e.setColor({
            rgb: o,
            hex: T.colorArrayToHexa(o)
        }, i)
    }
    i(1255);
    var M = i(56)
        .inherits,
        g = i(72),
        _ = i(12),
        A = i(13),
        O = i(86),
        v = i(124),
        y = i(689),
        z = i(563),
        w = i(1082),
        T = i(475),
        C = i(1256),
        I = i(17)
        .getText,
        S = i(1084),
        E = i(469),
        L = i(1258),
        N = i(112),
        R = i(16)
        .showProgressively,
        q = i(496),
        x = i(63),
        B = i(588),
        D = i(70),
        W = i(52),
        P = i(1260),
        k = i(1262),
        F = i(565),
        H = i(34)
        .logger,
        U = i(16),
        G = i(66),
        j = i(116),
        Y = i(91)
        .playUiSound,
        X = i(21),
        V = i(509),
        Q = i(1264)
        .onSubmitRules,
        K = i(1264)
        .onChangeRules,
        J = 13518,
        Z = 10860,
        $ = 10861,
        ee = 10862,
        te = {
            1: [174, 252],
            2: [173, 252],
            3: [197, 252],
            4: [218, 254],
            5: [172, 253],
            6: [179, 255],
            7: [189, 253],
            8: [194, 254],
            9: [195, 252],
            10: [210, 253],
            11: [200, 256],
            12: [174, 252],
            13: [238, 239],
            14: [213, 208],
            15: [259, 239]
        },
        ie = [200, 252],
        ne = 0,
        oe = 1,
        ae = 2,
        re = 3,
        se = 1e3 / 24,
        ce = 0,
        le = 1,
        de = 8,
        ue = 500;
    M(a, g), a.prototype.setSelected = function(e) {
        e ? this.addClassNames("selected") : this.delClassNames("selected")
    }, M(r, D), e.exports = r, r.prototype._reset = function() {
        h(),
        this.step = ne,
        this.relookingParams = null,
        this._relookingPreviousValues = null,
        this.allBreeds = null,
        this.numBreeds = 0,
        this.headsMap = null,
        this.loadedHeads = [],
        this.lastRendering = 0,
        this._recommendedBreed = null,
        this._nameGeneratorUsed = !1,
        this._styleGeneratorUsed = !1,
        this._withoutMount = !1,
        this._withoutPet = !1,
        this._naked = !1,
        this.breedBtns = [],
        this.headContainers = [],
        this.nameInput = null,
        this.currentIllustration = null,
        this.breedIllustrationBg = this.breedIllustrationBgFade = null,
        this.breedBg = this.breedBgFade = null,
        this.breedDescription = null,
        this.breedName = null,
        this.breedStory = null,
        this.breedSelector = null,
        this.headSelector = null,
        this.colorPicker = null,
        this.colorButtons = null,
        this.selectedColor = null,
        this._currentColors = null,
        this._assetUrlCache = {},
        this.spriteStatus = {},
        this._breedId = 1,
        this._sex = ce,
        this._cosmeticId = 1, 
        this.headOrder = 0
    }, r.prototype._setStyles = function() {
        this.windowBody.setClassNames(["windowBody", n(this._breedId)
            .bgClass
        ]), this._updateBreedBg(), this._updateBreedIllustration()
    }, r.prototype.freeContent = function() {
        document.activeElement.blur(), this.characterDisplay && this.characterDisplay.release(), this.characterDisplay = null, this.windowBody.clearContent(), this.centeredContent.clearContent(), this._reset()
    }, r.prototype._initialize = function(e) {
        if (!this.allBreeds) {
            var t = this;
            return void this._createAll(function(i) {
                return i ? console.error("characterCreation: initialize error", i) : (t._initialize(e), void t._loadHeadImages())
            })
        }
        this._isRiding = !1, this.relookingParams = e && e.relookingParams, this._customButtons.toggleDisplay(this.relookingParams), this.relookingParams ? (this.relookingParams.isInfiniteRecolor = Boolean(e.isInfiniteRecolor), this._initCharacterForRelooking(e)) : this._initCharacter(e), this.delClassNames(["disabled"])
    }, r.prototype._initCharacter = function(e) {
        this._stepLayoutSetup(oe), this.nameInput.setValue("");
        var t = Math.floor(Math.random() * de),
            i = e.breedId ? e.breedId : 1;
        if (e.breedId) this._recommendedBreed = e.breedId, this._sex = e.sex, t = s(this.headsMap, e.cosmeticId);
        else {
            this._sex = Math.random() > .45 ? le : ce;
            var n = Math.floor(Math.random() * this.numEasyBreeds),
                o = 0;
            for (i = 1; i <= this.numBreeds; i++)
                if (!(this.allBreeds[i].complexity > 1)) {
                    if (o === n) break;
                    o++
                }
        }
        this.breedSexTabs.openTab(this._sex), this.headSexTabs.openTab(this._sex), this._buttonM.toggleClassName("on", this._sex === ce), this._buttonF.toggleClassName("on", this._sex === le), this._selectBreed(i, t)
    }, r.prototype._initCharacterForRelooking = function(e) {
        var t, i, n = this.relookingParams,
            o = n.characterToRemodel,
            a = o.cosmeticId;
        this._relookingPreviousValues = {
            name: o.name,
            breed: o.breed,
            cosmeticId: o.cosmeticId,
            indexedColors: o.colors,
            sex: o.sex
        }, e && !e.cosmeticId && o.headId && (a = c(this.headsMap, o.headId), this._relookingPreviousValues.cosmeticId = a);
        var r = o.breed;
        e.breedId ? (this._sex = e.sex, a = e.cosmeticId, r = e.breedId) : this.relookingParams.canRegender ? this._sex = o.sex ? ce : le : this._sex = o.sex ? le : ce, n.canRebreed ? (t = I("tablet.connection.rebreed"), i = I("tablet.charcrea.titleRebreed")) : n.canRename ? (t = I("ui.connection.rename"), i = I("ui.charcrea.titleRename")) : n.canRecolor ? (t = I("ui.connection.recolor"), i = I("ui.charcrea.titleRecolor")) : n.canReface && (t = I("ui.connection.relook"), i = I("ui.charcrea.titleRelook")), t && (window.gui.openSimplePopup(t, I("ui.popup.warning")), this.pageTitle.setText(i));
        var l = s(this.headsMap, a);
        this.nameInput.setValue(o.name), this._buttonM.toggleClassName("on", this._sex === ce), this._buttonF.toggleClassName("on", this._sex === le), this.breedSexTabs.openTab(this._sex), this.headSexTabs.openTab(this._sex);
        var d = this.relookingParams.entityLook.subentities.length > 0,
            u = this.relookingParams.entityLook.skins.length > 2;
        this.relookingParams.entityLook.subentities.length > 0 && this.relookingParams.entityLook.bonesId > 1 && (u = this.relookingParams.entityLook.subentities[0].subEntityLook.skins.length > 2), this._stuffButton.toggleDisplay(u), this._mountButton.toggleDisplay(d), n.canRebreed ? this._stepLayoutSetup(oe) : this._stepLayoutSetup(ae), this._currentColors = o.colors, this._selectBreed(r, l, o.colors), n.canRecolor && this._selectColor(0)
    }, r.prototype._createAll = function(e) {
        this.allBreeds = window.gui.databases.Breeds, this.numBreeds = Object.keys(this.allBreeds)
            .length, this.numEasyBreeds = 0;
        for (var t = this, i = 1; i <= this.numBreeds; i++) {
            var n = this.allBreeds[i].complexity;
            1 === n && this.numEasyBreeds++
        }
        this.breedBg = this.windowBody.createChild("div", {
            className: "breedBg"
        }), this.breedBgFade = this.windowBody.createChild("div", {
            className: "breedBg"
        }), this._leftSideSetup(), this._centerSetup(), this._rightSideSetup(), this._createBreedElements(), this._createHeadElements(), this._createNavButtons();
        var o = this._footer = this.windowBody.createChild("div", {
            className: "footer"
        });
        o.createChild("div", {
            className: "effect"
        });
        var a = o.createChild("div", {
            className: "contentWrapper"
        });
        this.roles = a.appendChild(new C), this.roles.init();
        var r = a.createChild("div", {
                className: "texts"
            }),
            s = r.createChild("div", {
                className: "titleWrapper"
            });
        x(s), s.on("tap", function() {
            W.open("breedDetail", {
                breedData: t.allBreeds[t._breedId]
            })
        }), this._breedTitle = s.createChild("div", {
            className: "title"
        }), this.moreInfoBtn = s.createChild("div", {
            className: "moreInfoBtn"
        }), this._breedDescription = r.createChild("div", {
            className: "breedDescription"
        }), o.createChild("div", {
            className: "background"
        }), this._breedComplexity = a.createChild("div", {
            className: "breedComplexity"
        }), this._breedComplexity.createChild("div", {
            className: "label",
            text: I("tablet.charCrea.difficulty") + I("ui.common.colon")
        }), this._breedComplexity.createChild("div", {
            className: ["sword", "sword1"]
        }), this._breedComplexity.createChild("div", {
            className: ["sword", "sword2"]
        }), this._breedComplexity.createChild("div", {
            className: ["sword", "sword3"]
        }), this._stepLayoutSetup(oe), this.headsMap = window.gui.databases.Heads, e()
    }, r.prototype._leftSideSetup = function() {
        this.breedIllustrationWrapper = this.windowBody.createChild("div", {
            className: "breedIllustration"
        }), this.breedIllustrationBg = this.breedIllustrationWrapper.createChild("div", {
            className: "breedIllustrationBg"
        }), this.breedIllustrationBgFade = this.breedIllustrationWrapper.createChild("div", {
            className: "breedIllustrationBg"
        })
    }, r.prototype._centerSetup = function() {
        function e() {
            i._sex !== this._sex && (i.headSexTabs.openTab(this._sex), i.breedSexTabs.openTab(this._sex))
        }

        function t() {
            return W.closeAll(), W.open("firstCharacterForm", {
                skipIntro: !0,
                relookingParams: i.relookingParams
            })
        }
        this.centeredContent || (this.centeredContent = this.createChild("div", {
            className: "content"
        }));
        var i = this,
            n = this.centeredContent;
        this._createTopLabel(n), this._characterCustomContent = n.createChild("div", {
            className: "characterCustomContent"
        }), this.headSelector = this._createSelector(this._characterCustomContent, "headSexTabs"), this._setupColorTool(this._characterCustomContent), this._createNameSelector(this._characterCustomContent), this._breedSelectorWrapper = n.createChild("div", {
            className: "breedSexTabsWrapper"
        }), this.breedSelector = this._createSelector(this._breedSelectorWrapper, "breedSexTabs");
        var o = this._breedSelectorWrapper.createChild("div", {
            className: "buttonCharacterWrapper"
        });
        this._buttonM = o.appendChild(new O({
            className: ["sexBtn", "sexM"]
        }, e)), this._buttonM._sex = ce, this._buttonF = o.appendChild(new O({
            className: ["sexBtn", "sexF"]
        }, e)), this._buttonF._sex = le, this._breedSelectorWrapper.createChild("div", {
            className: "space"
        });
        var a = this._breedSelectorWrapper.createChild("div", {
            className: "buttonWrapper"
        });
        a.appendChild(new O({
            text: I("ui.charcrea.recommendation"),
            className: ["blackButtonV2", "recommendationBtn"]
        }, function() {
            t()
        })), a.appendChild(new O({
            text: I("tablet.charCrea.next"),
            className: ["greenButtonV2", "nextBtn"]
        }, function() {
            u(i)
        }))
    }, r.prototype._rightSideSetup = function() {
        this._rightbar = this.windowBody.createChild("div", {
            className: "rightBar"
        }), this._setupCharacterOnIsland(this._rightbar)
    }, r.prototype._rightSideUpdatePosition = function(e) {
        var t = G(this._characterCustomContent.rootElement),
            i = G(this.checkerboardImage.rootElement),
            n = e ? (t.x - (i.width + 80) / 2) / 2 : 0,
            o = e ? i.y - i.height / 4 : 0;
        this._rightbar.setStyle("transform", "translate(" + n + "px," + o + "px)")
    }, r.prototype._stepLayoutSetup = function(e) {
        this.step = e;
        var t = e === ae,
            i = e === oe;
        this.characterOnIsland.toggleDisplay(i || t), this.characterOnIsland.toggleClassName("raceStep", i), this._footer.toggleDisplay(i);
        var n = G(this.rootElement);
        if (i && (.3 * n.width < .52 * n.height ? (this._breedSelectorWrapper.setStyle("width", .3 * n.width + "px"), this.breedSexTabs.setStyle("height", .3 * n.width + "px")) : (this._breedSelectorWrapper.setStyle("width", .52 * n.height + "px"), this.breedSexTabs.setStyle("height", .52 * n.height + "px"))), this._breedSelectorWrapper.toggleDisplay(i), this.breedIllustrationWrapper.toggleDisplay(i), this._characterCustomContent.toggleDisplay(t), this._rightSideUpdatePosition(t), i) this.backButton.setText(I("ui.common.cancel"));
        else if (t) {
            var o = G(this.picker.rootElement);
            this.colorPicker.updateDimensions(o.width - 10, o.height), this.headSexTabs.toggleTabAvailability(ce, this._sex === ce), this.headSexTabs.toggleTabAvailability(le, this._sex === le), this._selectCurrentHeads(), this.relookingParams ? (this._allowElement(this.headSexTabs, this.relookingParams.canRegender), this._allowElement(this.nameSelector, this.relookingParams.canRename, Z), this._allowElement(this.colorTool, this.relookingParams.canRecolor, $), this.createBtn.setText(I("ui.common.validation")), this.backButton.setText(I("ui.common.cancel"))) : (this._selectColor(0, !0), this.backButton.setText(I("ui.common.back")))
        }
    }, r.prototype._allowElement = function(e, t, i) {
        if (e.toggleTabAvailability) {
            var n = this._sex === ce,
                o = e.header.getChildren(),
                a = o[n ? le : ce],
                r = o[this._sex],
                s = e.content;
            return this._allowElement(a, this.relookingParams.canRegender, ee), this._allowElement(r, this.relookingParams.canReface), this._allowElement(s, this.relookingParams.canReface, J), e.toggleTabAvailability(ce, this.relookingParams.canRegender && this._sex === ce), void e.toggleTabAvailability(le, this.relookingParams.canRegender && this._sex === le)
        }
        if (e.toggleClassName("disabled", !t), !t) {
            var c = e.appendChild(new g("div", {
                className: "disabledFeature"
            }));
            i && (c.itemId = i, x(c), c.on("tap", l))
        }
    }, r.prototype._next = function() {
        this._stepLayoutSetup(ae)
    }, r.prototype._canStepBack = function() {
        return this.step !== oe && !(this.relookingParams && !this.relookingParams.canRebreed)
    }, r.prototype._back = function() {
        if (this._canStepBack()) this._stepLayoutSetup(oe);
        else {
            W.close(this.id);
            var e = window.gui.playerData.isSubscriberAtMinLevel(V.ELITE);
            if (!e && this.relookingParams && this.relookingParams.isInfiniteRecolor) return;
            if (e && this.relookingParams && this.relookingParams.isInfiniteRecolor && this.relookingParams.canRecolor && !this.relookingParams.canRegender && !this.relookingParams.canRebreed) return;
            z.backToSelection()
        }
    }, r.prototype._createSelector = function(e, t, i) {
        var n = {};
        n.females = new g("div", {
            className: "females"
        }), n.males = new g("div", {
            className: "males"
        });
        var o = e.appendChild(new q({
            className: ["sexTabs", t],
            tabClassName: "mySwipeTabBtn"
        }));
        i && o.hide(), o.addTab("", n.males, ce), o.addTab("", n.females, le);
        var a = this;
        return o.on("openTab", function(e) {
            a._updateSex(e)
        }), this[t] = o, n
    }, r.prototype._createBreedButton = function(e, t) {
        var i = new a(["breedSelectionButton", "classe" + e.id], this, d);
        i.breedId = e.id;
        var n = t === ce ? this.breedSelector.males : this.breedSelector.females;
        return n.appendChild(i), i
    }, r.prototype._createHeadContainer = function(e, t) {
        var i = new g("div", {
                className: "headContainer"
            }),
            n = 1 + (e - 1) * de * 2 + t * de;
        i.buttons = [];
        for (var o = 0; o < de; o++) {
            var r = new a("headSelectionButton", this, p);
            i.appendChild(r), i.buttons.push(r), r.headOrder = o, r.cosmeticId = n + o, r.gender = t
        }
        var s = t === ce ? this.headSelector.males : this.headSelector.females;
        return s.appendChild(i), i
    }, r.prototype._createBreedElements = function() {
        var e = [];
        Object.keys(window.gui.databases.Breeds)
            .forEach(function(t) {
                e.push(window.gui.databases.Breeds[t])
            });
        for (var t = e.sort(function(e, t) {
                return e.complexity < t.complexity ? -1 : t.complexity < e.complexity ? 1 : 0
            }), i = 0; i < t.length; i++) {
            var n = t[i],
                o = n.id;
            this.breedBtns[o] = this._createBreedButton(n, ce), this.breedBtns[o + this.numBreeds] = this._createBreedButton(n, le)
        }
    }, r.prototype._createHeadElements = function() {
        for (var e = 1; e <= this.numBreeds; e++) this.headContainers[e] = [this._createHeadContainer(e, ce), this._createHeadContainer(e, le)]
    }, r.prototype._loadHeadImages = function(e, t) {
        if (this.loadedHeads[e]) return t && t();
        var i, n;
        e ? (i = 1 + (e - 1) * de * 2, n = i + 2 * de - 1, this.loadedHeads[e] = !0) : (i = 1, n = this.numBreeds * de * 2);
        for (var o = this.headsMap, a = [], r = i; r <= n; r++) a.push("gfx/cosmetics/" + o[~~r].assetId + ".png");
        var s = this;
        _.preloadImages(a, function(a) {
            if (!s.headContainers.length) return t && t();
            if (!e)
                for (var r = 1; r <= s.numBreeds; r++) s.loadedHeads[r] = !0;
            for (var c = 0, l = i; l <= n; l++) {
                var d = o[~~l],
                    u = s.headContainers[d.breed][d.gender].buttons[d.order];
                u.setStyle("backgroundImage", a[c++])
            }
            return t && t()
        })
    }, r.prototype._listenersSetup = function() {
        var e = this;
        window.gui.on("CharacterCreationResultMessage", function(t) {
            if (t.result === v.OK) {
                z.confirmNewCharacterCreation();
                var i = e.nameInput.getValue(!0);
                return j.log("F_T_U_E.creates_new_character", {
                    timestamp_event: new X.DofusDate(X.now())
                        .getServerDate()
                        .timestamp,
                    recommanded_breed_id: e._recommendedBreed,
                    chosen_breed_id: e._breedId,
                    gender_chosen: e._sex,
                    face_id_chosen: e._cosmeticId,
                    has_used_name_generator: e._nameGeneratorUsed,
                    has_used_style_generator: e._styleGeneratorUsed,
                    character_name: i
                }), W.close(e.id)
            }
            var n;
            switch (t.result) {
                case v.ERR_INVALID_NAME:
                    n = I("ui.charcrea.nameRules");
                    break;
                case v.ERR_NAME_ALREADY_EXISTS:
                    n = I("ui.popup.charcrea.nameAlreadyExist");
                    break;
                case v.ERR_TOO_MANY_CHARACTERS:
                    n = I("ui.popup.charcrea.tooManyCharacters");
                    break;
                case v.ERR_NOT_ALLOWED:
                    n = I("ui.popup.charcrea.notSubscriber");
                    break;
                case v.ERR_RESTRICED_ZONE:
                    n = I("ui.charSel.deletionErrorUnsecureMode");
                    break;
                default:
                    n = I("ui.popup.charcrea.noReason")
            }
            B.showNotification(n, e.createBtn), e.delClassNames(["disabled"])
        }), window.gui.on("CharacterNameSuggestionSuccessMessage", function(t) {
            e.nameInput && e.nameInput.setValue(t.suggestion, !0)
        })
    }, r.prototype.backButtonClose = function() {
        this._back()
    }, r.prototype._buildColorsArray = function() {
         const colorCount = A.CHARACTER_COLORS;

        // Cria um array para armazenar todas as cores indexadas
        const indexedColors = new Array(colorCount);

        // Armazena somente as cores personalizadas (ou null, se não for)
        const currentCustomColors = [];

        for (let i = 0; i < colorCount; i++) {
            const colorButton = this.colorButtons[i];
            const color = colorButton.getColor(); // Ex: { rgb: [r, g, b] }

            // Converte para uma cor indexada (formato específico do jogo)
            const indexedColor = T.getIndexedColor(i + 1, color.rgb[0], color.rgb[1], color.rgb[2]);

            // Adiciona ao array final de cores
            indexedColors[i] = indexedColor;

            // Se for uma cor personalizada, adiciona ao array auxiliar; caso contrário, null
            currentCustomColors.push(colorButton.isCustomColor() ? indexedColor : null);
        }

        // Salva as cores personalizadas atuais
        this._currentColors = currentCustomColors;

        return indexedColors;
        
        // for (var e = new Array(A.CHARACTER_COLORS), t = [], i = 0; i < A.CHARACTER_COLORS; i++) {
        //     var n = this.colorButtons[i],
        //         o = n.getColor(),
        //         a = T.getIndexedColor(i + 1, o.rgb[0], o.rgb[1], o.rgb[2]);
        //     e[i] = a, t.push(n.isCustomColor() ? a : null)
        // }
        // return this._currentColors = t, e
    }, r.prototype._selectCurrentHeads = function() {
        if (this.headSexTabs.isVisible()) {
            for (var e = 1, t = this.numBreeds; e <= t; e++) this.headContainers[e][ce].hide(), this.headContainers[e][le].hide();
            this.headContainers[this._breedId][ce].show(), this.headContainers[this._breedId][le].show()
        }
    }, r.prototype._updateSprite = function(e) {
        var t = this.allBreeds[this._breedId],
            i = U.parseLook(H, t[(this._sex === le ? "female" : "male") + "Look"], "Breed: " + this._breedId + " sex: " + this._sex),
            n = i.skin,
            o = i.scale,
            a = this.headsMap[this._cosmeticId].skins,
            r = this._buildColorsArray()
            .join("#");
        this.spriteStatus.bodySkin === n && this.spriteStatus.headSkin === a && this.spriteStatus.colorsHash === r && this.spriteStatus.orientation === this.orientation && this.spriteStatus.scale === o || (this.spriteStatus.bodySkin = n, this.spriteStatus.headSkin = a, this.spriteStatus.colorsHash = r, this.spriteStatus.orientation = this.orientation, this.spriteStatus.scale = o, this._drawCharacter(e))
    }, r.prototype._getAsset = function(e, t) {
        var i = this;
        return this._assetUrlCache[e] ? t(this._assetUrlCache[e]) : void _.preloadImage(e, function(n) {
            i._assetUrlCache[e] = n, t(n)
        })
    }, r.prototype._updateBreedIllustration = function() {
        if (this.breedIllustrationBg.isVisible()) {
            var e = this.breedIllustrationBg;
            this.breedIllustrationBg = this.breedIllustrationBgFade, this.breedIllustrationBgFade = e;
            var t = "breed" + this._breedId;
            this.breedIllustrationBg.setClassNames(["breedIllustrationBg", t]), R(this.breedIllustrationBg, 500, null, this.breedIllustrationBgFade)
        }
    }, r.prototype._updateBreedBg = function() {
        var e = this.breedBg;
        this.breedBg = this.breedBgFade, this.breedBgFade = e;
        var t = n(this._breedId)
            .bgClass;
        this.breedBg.setClassNames(["breedBg", t]), R(this.breedBg, 500, null, this.breedBgFade)
    }, r.prototype._updateBreedIsland = function() {
        var e = this;
        this._getAsset("gfx/bases/base_" + this._breedId + ".png", function() {
            if (e.characterDisplay) {
                var t = te[e._breedId];
                t || (console.warn("Missing center tile data for breed:", e._breedId), t = ie), R(e.checkerboardImage), R(e.rotationLeft), R(e.rotationRight)
            }
        })
    }, r.prototype._updateBreedDescription = function() {
        var e = this.allBreeds[this._breedId];
        this.roles.updateRoles(this._breedId), this._breedTitle.setText(e.longNameId), this._breedDescription.setText(e.gameplayDescriptionId), this._breedComplexity.replaceClassNames(["level1", "level2", "level3"], ["level" + e.complexity])
    }, r.prototype._toggleBreedBtn = function(e, t) {
        this.breedBtns[e].setSelected(t), this.breedBtns[e + this.numBreeds].setSelected(t)
    }, r.prototype._selectBreed = function(e, t, i) {
        this._toggleBreedBtn(this._breedId, !1), this._toggleBreedBtn(e, !0), this._breedId = e, this._setStyles(), this.characterDisplay.setStyle("opacity", 0), this._updateBreedIsland(), this._updateBreedDescription(), this._selectCurrentHeads(), this._loadHeadImages(e), this._selectHead(void 0 !== t ? t : this.headOrder), i ? this._loadColors(i, !0) : this._resetColors(), this.orientation = re, this._updateSprite(!0)
    }, r.prototype._updateSex = function(e) {
        this._sex !== e && (this._sex = e, this._selectCurrentHeads(), this._selectHead(this.headOrder), this._buttonM.toggleClassName("on", e === ce), this._buttonF.toggleClassName("on", e === le), this._updateSprite(!0))
    }, r.prototype._selectHead = function(e, t) {
        var i = this.headContainers[this._breedId][this._sex].buttons[e];
        if (i.cosmeticId !== this._cosmeticId) {
            this._cosmeticId = i.cosmeticId, this.headOrder = e;
            for (var n = this.headContainers[this._breedId][this._sex].buttons, o = 0; o < n.length; o++) n[o].setSelected(n[o] === i);
            t && this._updateSprite(!1)
        }
    };
    var pe, he, fe = 100,
        be = 500,
        me = [
            [255, 144, 0],
            [255, 228, 0]
        ],
        Me = 0,
        ge = 0,
        _e = null,
        Ae = null;
    r.prototype._colorChanged = function(e) {
        this.selectedColorBtn && (this.selectedColorBtn.setColor(e, !0), this._updateSprite())
    }, r.prototype._setupColorTool = function(e) {
        var t = this.colorTool = e.createChild("div", {
                className: "colorTool"
            }),
            i = this.colorSelector = t.createChild("div", {
                className: "colorSelector"
            }),
            n = i.createChild("div", {
                className: "colorButtons"
            }),
            a = n.createChild("div", {
                className: "buttonBox"
            });
        this.colorButtons = new Array(A.CHARACTER_COLORS + 1);
        for (var r = 0; r <= A.CHARACTER_COLORS; r++) this.colorButtons[r] = a.appendChild(new L(this, r, b, {
            active: r < A.CHARACTER_COLORS
        }));
        this.selectedColorBtn = null, this.picker = i.createChild("div", {
            className: "picker"
        }), this.colorPicker = this.picker.appendChild(new w);
        var s = this;
        this.colorPicker.on("newColor", function(e) {
            if (s.selectedColorBtn) {
                s.selectedColorBtn.setColor(e, !0);
                var t = Date.now();
                (!s.colorPicker.lastUpdate || t - s.colorPicker.lastUpdate > se) && (s.colorPicker.lastUpdate = t, s._updateSprite())
            }
        }), this.colorPicker.on("colorChanged", function(e) {
            s._colorChanged(e)
        });
        var c = this.colorPickerFooter = t.createChild("div", {
            className: "colorPickerFooter"
        });
        c.appendChild(new o("resetColorBtn", "", I("tablet.charCrea.resetCurrentColor"), function() {
            return s.selectedColorBtn && s.selectedColorBtn.getColor() ? (s._resetColorButton(s.selectedColorBtn), s._selectColor(s.selectedColorBtn.id, !0), void s._updateSprite()) : B.showNotification(I("tablet.charCrea.resetCurrentColor"), this)
        }, (!0))), c.appendChild(new o("randomColorBtn", I("tablet.charCrea.randomColors"), I("tablet.charCrea.randomColorsTip"), function() {
            s._styleGeneratorUsed = !0;
            for (var e = 0; e < A.CHARACTER_COLORS; e++) s.colorButtons[e].randomize();
            s._selectColor(0, !0), s._updateSprite()
        }, (!0))), c.appendChild(new o("resetAllColorBtn", I("tablet.charCrea.resetAll"), I("tablet.charCrea.resetAllTip"), function() {
            s._resetColors(), s._updateSprite(), s._currentColors = null
        }));
        var l = this.colorPicker.appendChild(new S);
        l.on("confirm", function(e) {
            var t = T.hexToRgb(e);
            t && (s.colorPicker.setCurrentColor([t.r, t.g, t.b]), s._colorChanged(s.colorPicker.getCurrentColor()))
        }), c.appendChild(new o("hexColorBtn", "#", I("ui.charcrea.hexColorTip"), function() {
            s.colorPicker.openHexInput()
        }));
        var d = this.pickerRect = G(this.picker.rootElement);
        this.colorPicker.updateDimensions(d.width - 10, d.height - 60)
    }, r.prototype._createTopLabel = function(e) {
        var t = this.topLabel = e.createChild("div", {
            className: "topLabel"
        });
        t.createChild("div", {
            className: "topLabelBackground"
        }), t.createChild("div", {
            className: "fioritureRococo"
        }), this.pageTitle = t.createChild("div", {
            className: "topLabelText",
            text: I("ui.charcrea.title")
        })
    }, r.prototype._createNameSelector = function(e) {
        var t = this,
            i = this.nameSelector = e.createChild("div", {
                className: "nameSelector"
            }),
            n = this.nameErrWrapper = i.createChild("div", {
                className: "nameErrors"
            }),
            a = n.appendChild(new k);
        this.nameInput = i.appendChild(new P({
            className: "nameInput",
            attr: {
                type: "text",
                id: "nameInput",
                maxlength: N.MAX_PLAYER_NAME_LEN
            },
            onChangeRules: K,
            onSubmitRules: Q,
            blockInvalidInput: !1
        }, function(e) {
            e.blur()
        })), this.nameInput.setPlaceholder(I("ui.popup.charcrea.noName")), this.nameInput.on("validationFailed", function(e) {
            if (t._needsNameCheck()) {
                var i = [];
                e.forEach(function(e) {
                    i.push(" - " + I(e.error))
                }), i.length > 0 && a.setText(i.join("\n"))
            }
        }), this.nameInput.on("validationPassed", function() {
            a.setText("")
        }), this.randomiseBtn = i.appendChild(new o("randomiseBtn", "", I("tablet.charCrea.randomNameTip"), function() {
            t._nameGeneratorUsed = !0, window.dofus.sendMessage("CharacterNameSuggestionRequestMessage")
        }, (!0))), this.randomiseBtn.createChild("div", {
            className: "text",
            text: I("ui.charcrea.randomName")
        })
    }, r.prototype._createRotationButton = function(e, t) {
        var i = this,
            n = this.characterOnIsland.createChild("div", {
                className: e,
                hidden: !0
            }),
            o = n.appendChild(new O({
                className: "shadow",
                repeatDelay: 100
            }, function() {
                i.orientation = i.characterDisplay.rotateCharacter(t)
            }));
        return o.createChild("div", {
            className: "arrow"
        }), n
    }, r.prototype._setupCharacterOnIsland = function(e) {
        var t = this.characterOnIsland = e.createChild("div", {
            className: "characterOnIsland"
        });
        this.checkerboardImage = t.createChild("div", {
            className: "checkerboardImage"
        }), this.characterDisplay = t.appendChild(new y({
            scale: 3
        })), this.rotationRight = this._createRotationButton("rotationRight", !0), this.rotationLeft = this._createRotationButton("rotationLeft", !1)
    }, r.prototype._createNavButtons = function() {
        var e = this;
        this.backButton = this.windowBody.appendChild(new O({
            className: ["cancelBtn", "blackButton"]
        }, function() {
            e._back()
        })), this._customButtons = this.windowBody.createChild("div", {
            className: "customButtons"
        }), this._mountButton = this._customButtons.appendChild(new O({
            className: ["mountBtn", "blackButton"]
        }, function() {
            e._isRiding ? e._withoutMount = !e._withoutMount : e._withoutPet = !e._withoutPet, this.toggleClassName("off", e._withoutMount || e._withoutPet), e._drawCharacter(!0)
        })), this._stuffButton = this._customButtons.appendChild(new O({
            className: ["stuffBtn", "blackButton"]
        }, function() {
            e._naked = !e._naked, this.toggleClassName("off", e._naked), e._drawCharacter(!0)
        })), this.createBtn = this.nameSelector.appendChild(new O({
            text: I("ui.charcrea.create"),
            className: ["greenButtonV2", "createButton"]
        }, function() {
            e._createCharacter()
        }))
    }, r.prototype._checkRelookingMandatoryChanges = function(e, t) {
        var i = this.relookingParams,
            n = this.nameInput.getValue();
        if (i.canRename === F.MANDATORY && this._relookingPreviousValues.name === n) return B.showNotification(I("tablet.charcrea.sameName"), this.createBtn), !1;
        if (i.canRebreed === F.MANDATORY && this._relookingPreviousValues.breed === this._breedId) return B.showNotification(I("tablet.charcrea.sameBreed"), this.createBtn), !1;
        if (i.canRegender === F.MANDATORY && this._relookingPreviousValues._sex === t) return B.showNotification(I("tablet.charcrea.sameSex"), this.createBtn), !1;
        if (i.canReface === F.MANDATORY && this._relookingPreviousValues._cosmeticId === this._cosmeticId) return B.showNotification(I("tablet.charcrea.sameFace"), this.createBtn), !1;
        if (i.canRecolor === F.MANDATORY) {
            for (var o = !0, a = this._relookingPreviousValues.indexedColors, r = 0; r < a.length; r += 1)
                if (a[r] !== e[r]) {
                    o = !1;
                    break
                } if (o && i && i.level > 1) return B.showNotification(I("tablet.charcrea.sameColors"), this.createBtn), !1
        }
        return !0
    }, r.prototype._createCharacter = function() {
        var e = this.nameInput.getValue(this._needsNameCheck());
        if (this._needsNameCheck()) {
            if (e === !1) return;
            var t = e.length;
            if (0 === t) return B.showNotification(I("ui.popup.charcrea.noName"), this.createBtn);
            if (t < N.MIN_PLAYER_NAME_LEN || t > N.MAX_PLAYER_NAME_LEN) return B.showNotification(I("ui.charcrea.nameRules"), this.createBtn)
        }
        var i = this._buildColorsArray(),
            n = this._sex === le,
            o = {
                name: e,
                breed: this._breedId,
                sex: n,
                colors: i,
                cosmeticId: this._cosmeticId
            };
        if (this.relookingParams) {
            var a = this._checkRelookingMandatoryChanges(i, n);
            if (!a) return;
            o.headSkin = this.spriteStatus.headSkin, o.remodelingInformation = {
                name: e,
                breed: this._breedId,
                sex: n,
                colors: i,
                cosmeticId: this._cosmeticId,
                entityLook: this._buildEntityLook()
            };
            var r = window.gui.playerData.isSubscriberAtMinLevel(V.ELITE);
            if (!r && this.relookingParams && this.relookingParams.isInfiniteRecolor) return window.gui.openSimplePopup(I("ui.shop.needBonusPackElite") + " (code: 962139)"), W.close(this.id);
            if (r && this.relookingParams && this.relookingParams.isInfiniteRecolor && this.relookingParams.canRecolor && !this.relookingParams.canRegender && !this.relookingParams.canRebreed) return window.dofus.sendMessage("CharacterRemodelRequestMessage", {
                remodel: o
            }), W.close(this.id);
            z.confirmCharacterRelooking(o)
        } else this.addClassNames(["disabled"]), document.activeElement.blur(), window.dofus.sendMessage("CharacterCreationRequestMessage", o)
    }, 
    r.prototype._buildEntityLook = function() {
       // #EntityLook Builder
       // Monta o array de cores indexadas
    const indexedColors = this._buildColorsArray();

    // Cria a estrutura base da aparência da entidade
    const entityLook = {
        bonesId: 1,
        indexedColors: indexedColors,
        scales: [this.spriteStatus.scale],
        skins: [this.spriteStatus.bodySkin, this.spriteStatus.headSkin],
        subentities: []
    };

    // Se houver parâmetros de relooking (personalização)
    if (this.relookingParams) {
        const relook = this.relookingParams.entityLook;
        const character = this.relookingParams.characterToRemodel;

        // Copia as propriedades do relooking para a aparência da entidade
        entityLook.bonesId = relook.bonesId;
        entityLook.indexedColors = relook.indexedColors;
        entityLook.skins = relook.skins;
        entityLook.scales = relook.scales;
        entityLook.subentities = relook.subentities;

        const hasMount = entityLook.bonesId > 1 && entityLook.subentities.length > 0;

        if (hasMount) {
            // Marca como montado (montaria)
            this._isRiding = true;

            // Atualiza as cores da montaria
            entityLook.subentities[0].subEntityLook.indexedColors = indexedColors;

            // Se for camaleão ou não estiver montado, aplica cores da montaria
            const isCameleon = character.isRideCameleon;
            const isRiding = character.isRiding;

            if ((isRiding && isCameleon) || !isRiding) {
                entityLook.indexedColors = T.getMountIndexedColor(indexedColors);
            }

            // Define os skins personalizados na subentidade (montaria)
            entityLook.subentities[0].subEntityLook.skins[0] = this.spriteStatus.bodySkin;
            entityLook.subentities[0].subEntityLook.skins[1] = this.spriteStatus.headSkin;

            return entityLook;
        }

        // Caso não esteja montado, apenas atualiza as cores e skins principais
        if (entityLook.subentities.length > 0) {
            entityLook.subentities[0].subEntityLook.indexedColors = indexedColors;
        }

        entityLook.indexedColors = indexedColors;
        entityLook.skins[0] = this.spriteStatus.bodySkin;
        entityLook.skins[1] = this.spriteStatus.headSkin;
    }

    return entityLook;

        // var e = this._buildColorsArray(),
        //     t = {
        //         bonesId: 1,
        //         indexedColors: e,
        //         scales: [this.spriteStatus.scale],
        //         skins: [this.spriteStatus.bodySkin, this.spriteStatus.headSkin],
        //         subentities: []
        //     };

        // if (this.relookingParams) {
        //     var i = this.relookingParams.entityLook;
        //     if (t.indexedColors = i.indexedColors, t.bonesId = i.bonesId, t.skins = i.skins, t.scales = i.scales, t.subentities = i.subentities, t.bonesId > 1 && t.subentities.length > 0) return this._isRiding = !0, t.subentities[0].subEntityLook.indexedColors = e, (this.relookingParams.characterToRemodel.isRiding && this.relookingParams.characterToRemodel.isRideCameleon || !this.relookingParams.characterToRemodel.isRiding) && (t.indexedColors = T.getMountIndexedColor(e)), t.subentities[0].subEntityLook.skins[0] = this.spriteStatus.bodySkin, t.subentities[0].subEntityLook.skins[1] = this.spriteStatus.headSkin, t;
        //     t.subentities.length > 0 && (t.subentities[0].subEntityLook.indexedColors = e), t.indexedColors = e, t.skins[0] = this.spriteStatus.bodySkin, t.skins[1] = this.spriteStatus.headSkin
        // }

        // return t
    }, 
    
    r.prototype._drawCharacter = function(e) {
        this.lastRendering = Date.now();
        var t = this;
        this.characterDisplay.setLook(this._buildEntityLook(), {
            boneType: "characters/",
            skinType: "characters/",
            direction: this.orientation,
            riderOnly: t._withoutMount,
            withoutPet: t._withoutPet,
            naked: t._naked,
            forceRefresh: !0
        }, function() {
            e && R(t.characterDisplay, 300, 50)
        })
    }, r.prototype._selectColor = function(e, t) {
        var i = this.colorButtons[e];
        (i !== this.selectedColorBtn || t) && (this.selectedColorBtn && this.selectedColorBtn.deselect(), this.selectedColorBtn = i, i.select(), this.colorPicker.setCurrentColor(i.getColor()
            .rgb))
    }, r.prototype._resetColorButton = function(e) {
        var t = (this._sex === le ? "female" : "male") + "Colors",
            i = this.allBreeds[this._breedId][t][e.id];
        m(e, i, !1)
    }, r.prototype._resetColors = function(e) {
        for (var t = 0; t < A.CHARACTER_COLORS; t++) {
            var i = this.colorButtons[t];
            e && i.isCustomColor() || this._resetColorButton(i)
        }
        this._selectColor(0, !0)
    }, r.prototype._loadColors = function(e, t) {
        for (var i = 0; i < A.CHARACTER_COLORS; i++) null !== e[i] ? m(this.colorButtons[i], e[i], t) : this._resetColorButton(this.colorButtons[i])
    }, r.prototype._needsNameCheck = function() {
        return !this.relookingParams || this.relookingParams.canRename
    }
}
