function(e, t, i) {
    function n(e) {
        var t = e.role,
            i = d.setupNames(e.otherId, e.initiatorId);
        i && (b = i.sourceName, m = i.targetName, d.setupCancelPopupTexts({
            title: l("ui.common.exchange"),
            message: l("ui.craft.waitForCraftClient", m)
        }), t === c.MULTICRAFT_CUSTOMER ? d.setupConfirmPopupTexts({
            title: l("ui.common.exchange"),
            message: l("ui.craft.CrafterAskCustomer", b)
        }) : t === c.MULTICRAFT_CRAFTER && d.setupConfirmPopupTexts({
            title: l("ui.common.exchange"),
            message: l("ui.craft.CustomerAskCrafter", b)
        }), d.askingExchangePopup())
    }

    function o(e) {
        var t = e.skillId,
            i = window.gui.playerData.jobs;
        return t === f.AWAKENING ? void u.open("legendaryWeaponAwakeningWindow") : void i.prepareSkillRecipes(t, function(n) {
            if (n) return console.error("Craft: prepareSkillRecipes", t, n);
            var o, a = i.getCraftType(t),
                r = "craftMagus" === a ? "craftMagus" : "crafting";
            window.gui.scenarioManager.isBehaviourEnabled(h.ENABLE_FAKE_CRAFT_TUTORIAL_1) ? o = 1 : window.gui.scenarioManager.isBehaviourEnabled(h.ENABLE_FAKE_CRAFT_TUTORIAL_2) && (o = 2), u.openDialog([r, "craftInventory"], {
                type: a,
                msg: e,
                fakeCraft: o
            })
        })
    }

    function a(e, t) {
        var i = e.skillId,
            n = window.gui.playerData.jobs;
        n.prepareSkillRecipes(i, function(o) {
            if (o) return console.error("MultiCraft: prepareSkillRecipes", i, o);
            var a = n.getCraftType(i),
                r = "craftMagus" === a ? "craftMagusMulti" : "craftingMulti";
            u.continueDialog([r, "craftInventory"], {
                type: a,
                isCrafter: t.isCrafter,
                sourceName: b,
                targetName: m,
                msg: e
            })
        })
    }

    function r(e) {
        e.skillId === f.UPGRADING ? u.open("legendaryWeaponUpgradingWindow") : e.skillId === f.SHATTER && u.open("legendaryWeaponShatterWindow")
    }
    var s = i(669),
        c = i(521),
        l = i(17)
        .getText,
        d = i(670),
        u = i(52),
        p = i(105),
        h = i(129);
    t.SMITHMAGIC_RUNE_ID = 78, t.SMITHMAGIC_POTION_ID = 26, t.SIGNATURE_RUNE_ID = 7508, t.SIGNATURE_AVAILABLE_LEVEL = 100;
    var f = {
            AWAKENING: 248,
            UPGRADING: 255,
            SHATTER: 261
        },
        b = "",
        m = "";
    t.initialize = function(e) {
        e.on("ExchangeOkMultiCraftMessage", n), e.on("ExchangeStartOkCraftWithInformationMessage", o), e.on("ExchangeStartOkMulticraftCrafterMessage", function(e) {
            a(e, {
                isCrafter: !0
            })
        }), e.on("ExchangeStartOkMulticraftCustomerMessage", function(e) {
            a(e, {
                isCrafter: !1
            })
        }), p.on("ObjectUpgradeEffectOpenMessage", r)
    }, t.displayAutoCraftStopReasonMessage = function(e) {
        var t = "",
            i = !0;
        switch (e) {
            case s.STOPPED_REASON_OK:
                t = l("ui.craft.autoCraftStopedOk");
                break;
            case s.STOPPED_REASON_USER:
                t = l("ui.craft.autoCraftStoped"), i = !1;
                break;
            case s.STOPPED_REASON_MISSING_RESSOURCE:
                t = l("ui.craft.autoCraftStopedNoRessource");
                break;
            case s.STOPPED_REASON_IMPOSSIBLE_CRAFT:
                t = l("ui.craft.autoCraftStopedInvalidRecipe")
        }
        var n = window.gui;
        i && n.openSimplePopup(t, l("ui.popup.information")), t && n.chat.logMsg(t)
    }
}
