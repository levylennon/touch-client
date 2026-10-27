function(e, t, i) {
    function n(e) {
        for (var t = 0, i = 0; i < e.length; i++) t += e.charCodeAt(i) % 16;
        return (t % 16)
            .toString(16)
            .toUpperCase()
    }

    function o() {
        var e = Math.ceil(100 * Math.random());
        return e <= 40 ? String.fromCharCode(Math.floor(26 * Math.random()) + 65) : e <= 80 ? String.fromCharCode(Math.floor(26 * Math.random()) + 97) : String.fromCharCode(Math.floor(10 * Math.random()) + 48)
    }

    function a() {
        for (var e = "", t = 0; t < 20; t++) e += o();
        return e + n(e)
    }

    function r() {
        S = !0, window.gui.openSimplePopup(A("ui.common.cantSelectThisCharacter"), A("ui.popup.impossible_action")), g || window.dofus.sendMessage("CharactersListRequestMessage")
    }

    function s() {
        for (var e = 0; e < E.length; e++)
            if (E[e].level > w.MAX_CHARACTER_LEVEL_FOR_TUTORIAL) return !1;
        return !0
    }

    // function c(e) {
    //     // CharactersListMessage function
    //     let E = e.characters,
    //         I, C,
    //         M = e;

    //     window.gui.backgroundScreen.show();

    //     if(E.length === 0){
    //         v.closeAll();
    //         v.open("firstCharacterForm");
    //     }
    //     else if(I) {
    //         I = false;
    //         v.open("characterCreation");
    //     } 
    //     else if(C) {
    //         C = false;
    //         if(window.gui.playerData.accountCapabilities.tutorialAvailable){
    //             window.dofus.sendMessage("CharacterFirstSelectionMessage", {
    //                 id: E[0].id,
    //                 doTutorial: s()
    //             });
    //         } 
    //         else {
    //             t.selectCharacter(E[0].id);
    //         }
    //     }
    //     else if(S){
    //         v.open("characterSelection", E);
    //     } 
    //     else if("characterId" === O.connectMethod){
    //         if(O.characterId) {
    //             t.selectCharacter(O.characterId);
    //         }
    //         else {
    //             console.error(new Error("characterId is missing!"));
    //             v.open("characterSelection", E);
    //         }
    //     }
    //     else if (O.connectMethod === "lastCharacter") {
    //         t.selectCharacter(E[0].id);
    //     }
    //     else {
    //         v.open("characterSelection", E);
    //     }
        
    // }
    
    // Backup Function     
    function c(e) {
        return M = e,
        E = e.characters,
        window.gui.backgroundScreen.show(),
        0 === E.length ? (v.closeAll(), v.open("firstCharacterForm")) : I ? (I = !1, v.open("characterCreation")) : C ? (C = !1, window.gui.playerData.accountCapabilities.tutorialAvailable ? void window.dofus.sendMessage("CharacterFirstSelectionMessage", {
            id: E[0].id,
            doTutorial: s()
        }) : t.selectCharacter(E[0].id)) : S ? v.open("characterSelection", E) : "characterId" === O.connectMethod ? O.characterId ? t.selectCharacter(O.characterId) : (console.error(new Error("characterId is missing!")), void v.open("characterSelection", E)) : "lastCharacter" === O.connectMethod ? t.selectCharacter(E[0].id) : void v.open("characterSelection", E)
    }
    
    function l() {
        C = !1, S = !1, E = [], I = !1
    }

    function d(e) {
        var t = {
            rebreed: !1,
            recolor: !1,
            relook: !1,
            rename: !1,
            regender: !1
        };
        return (e & y.CHARACTER_REMODELING_BREED) > 0 && (t.rebreed = !0), (e & y.CHARACTER_REMODELING_COLORS) > 0 && (t.recolor = !0), (e & y.CHARACTER_REMODELING_COSMETIC) > 0 && (t.relook = !0), (e & y.CHARACTER_REMODELING_NAME) > 0 && (t.rename = !0), (e & y.CHARACTER_REMODELING_GENDER) > 0 && (t.regender = !0), t
    }

    function u(e, t) {
        return e ? z.MANDATORY : t ? z.POSSIBLE : z.IMPOSSIBLE
    }

    function p(e, t) {
        for (var i = {}, n = !1, o = t.charactersToRemodel, a = t.characters, r = 0; r < a.length; r++) a[r].id === e && (i.entityLook = a[r].entityLook);
        for (var s = 0; s < o.length; s++)
            if (o[s].id === e) {
                i.characterToRemodel = o[s];
                var c = d(o[s].mandatoryChangeMask),
                    l = d(o[s].possibleChangeMask);
                i.canRebreed = u(c.rebreed, l.rebreed), i.canRecolor = u(c.recolor, l.recolor), i.canReface = u(c.relook, l.relook), i.canRename = u(c.rename, l.rename), i.canRegender = u(c.regender, l.regender), n = !0;
                for (var p = 0; p < t.characters.length; p++)
                    if (t.characters[p].id === e) {
                        i.level = t.characters[p].level;
                        break
                    } break
            } return n ? i : null
    }

    function h(e) {
        if (g = null, "CharactersListWithRemodelingMessage" !== M._messageType) return !1;
        var t = p(e, M);
        return !!t && (v.getWindow("characterSelection")
            .hide(), v.open("characterCreation", {
                relookingParams: t
            }), g = t, !0)
    }

    function f(e) {
        for (var t = [e], i = 0; i < E.length; i += 1) {
            var n = E[i];
            n.id !== e.id && t.push(n)
        }
        E = t
    }

    function b(e) {
        g.canRename && (e.infos.name = _.name), g.canRebreed && (e.infos.entityLook = _.remodelingInformation.entityLook), g.canRecolor && (e.infos.entityLook.indexedColors = _.colors), g.canReface && (e.infos.entityLook.skins[1] = _.headSkin)
    }

    function m(e) {
        S = !1, v.close("characterSelection"), g && _ && (v.close("characterCreation"), b(e)), window.gui.onConnect(e.infos), window.actorManager.setUserCharacterData(e.infos), f(e.infos), window.dofus.sendMessage("ClientKeyMessage", {
            key: L
        }), window.dofus.sendMessage("GameContextCreateRequestMessage")
    }
    var M, g, _, A = i(17)
        .getText,
        O = i(141),
        v = i(52),
        y = i(564),
        z = i(565),
        w = i(13),
        T = i(125),
        C = !1,
        I = !1,
        S = !1,
        E = [],
        L = a();
    t.confirmNewCharacterCreation = function() {
        C = !0, T.characterCreation()
    }, t.confirmCharacterRelooking = function(e) {
        var t = g.characterToRemodel.id;
        _ = e, window.dofus.sendMessage("CharacterSelectionWithRemodelMessage", {
            id: t,
            remodel: _.remodelingInformation
        })
    }, t.selectCharacter = function(e) {
        if (!h(e)) return e < 1 ? void console.error(new Error("characterSelection: characterId should be positive")) : void window.dofus.sendMessage("CharacterSelectionMessage", {
            id: e
        })
    }, t.backToSelection = function() {
        return v.closeAll(), 0 === E.length ? O.goBackToSelectionOf("server") : void v.open("characterSelection", E)
    }, t.initialize = function(e) {
        var t = window.dofus.connectionManager;
        t.on("CharacterSelectedForceMessage", function() {
            window.dofus.sendMessage("CharacterSelectedForceReadyMessage")
        }),
        t.on("CharactersListMessage", c),
        t.on("CharactersListWithRemodelingMessage", c),
        t.on("CharacterSelectedSuccessMessage", m),
        t.on("CharacterSelectedErrorMessage", r),
        e.on("disconnect", l)
    }, t.getCharacterList = function() {
        return E
    }, t.setOpenCharacterCreation = function(e) {
        I = e
    }
}
