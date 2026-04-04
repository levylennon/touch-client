function(e, t, i) {
    function n() {
        u = {}, p = {}, h = {}, f = {
            Jobs: u,
            Skills: p,
            Recipes: h
        }
    }

    function o(e, t, i) {
        return t.length ? void g.getDataMap(e, t, null, function(t, n) {
            if (t) return i(t);
            var o = f[e];
            for (var a in n) o[a] = n[a];
            i()
        }) : i()
    }

    function a(e, t) {
        o("Skills", e, function(i) {
            if (i) return t(i);
            for (var n = {}, a = 0, r = e.length; a < r; a += 1) {
                var s = p[e[a]];
                if (s && s.craftableItemIds)
                    for (var c = 0, l = s.craftableItemIds.length; c < l; c += 1) {
                        var d = s.craftableItemIds[c];
                        h[d] || (n[d] = !0)
                    }
            }
            o("Recipes", Object.keys(n), function(i) {
                if (i) return t(i);
                for (var n = 0, o = e.length; n < o; n += 1) {
                    var a = p[e[n]];
                    if (a && a.craftableItemIds) {
                        a.recipes = [];
                        for (var r = 0, s = a.craftableItemIds.length; r < s; r += 1) {
                            var c = a.craftableItemIds[r];
                            h[c] && a.recipes.push(h[c])
                        }
                    }
                }
                t()
            })
        })
    }

    function r() {
        g.getDataMap("Npcs", z, null, function(e, t) {
            if (e) return console.error("Failed to get the name of the job npcs", e);
            for (var i in t) L[i] = t[i].nameId
        })
    }

    function s(e, t, i) {
        for (var n = {}, r = {}, s = 0, c = e.length; s < c; s += 1) {
            var l = e[s],
                d = l.jobId,
                h = t[d];
            h || (h = t[d] = {
                id: d
            }), h.description = l, u[d] || (n[d] = !0);
            for (var f = 0, b = l.skills.length; f < b; f += 1) {
                var m = l.skills[f].skillId;
                p[m] || (r[m] = !0)
            }
        }
        o("Jobs", Object.keys(n), function(e) {
            return e ? i(e) : void a(Object.keys(r), function(e) {
                if (e) return i(e);
                for (var n in t) {
                    var o = t[n];
                    o.info = u[o.id];
                    for (var a = 0, r = o.description.skills.length; a < r; a += 1) {
                        var s = o.description.skills[a];
                        s.info = p[s.skillId]
                    }
                }
                i()
            })
        })
    }

    function c() {
        b.call(this), this.SKILLID_WRAP_GIFT = 209, this.SKILLID_DECRAFT = 181, this.ITEMID_MAGIC_FRAGMENT = 8378, this.RUNE_SIGNATURE_GID = w, this.SMITHMAGIC_RUNE_ID = C, this.SMITHMAGIC_POTION_ID = I, this.MAX_CRAFT_SLOTS = 8, this.list = {}, this._publicMode = !1, this._playersMultiCraftSkillById = {}, this._existingSlotCount = 0, this._onCraftTable = {}, this._stackCount = 0, this._stackCountPerGid = {}, this.jobXpBonus = 0
    }

    function l(e) {
        return Boolean(window.gui.playerData.inventory.objects[e.objectUID])
    }

    function d(e, t, i) {
        var n = e + ("SOLO" !== t ? "-" + t : "") + "-" + i;
        return S[n] || E
    }
    var u, p, h, f, b = i(59)
        .EventEmitter,
        m = i(17)
        .getText,
        M = i(56)
        .inherits,
        g = i(130),
        _ = i(469),
        A = i(16),
        O = i(91)
        .playUiSound,
        v = i(105),
        y = i(52),
        z = i(13)
        .JOB_NPC_IDS,
        w = 7508,
        T = 100,
        C = 78,
        I = 26,
        S = {
            "decrafting-craftInventory": {
                move: "max"
            },
            "decrafting-crafting": {
                move: "max"
            },
            "craftMagus-craftInventory": {
                move: "max"
            },
            "craftMagus-crafting": {
                move: "max"
            },
            "craftMagus-CLIENT-ingredientsBag": {
                move: "max"
            },
            "craftMagus-CLIENT-craftInventory": {
                move: "max"
            },
            "craftMagus-CRAFTER-ingredientsBag": {
                move: "max"
            },
            "craftMagus-CRAFTER-crafting": {
                move: "max"
            },
            "craftMagus-CRAFTER-craftInventory": {
                move: "max"
            }
        },
        E = {
            move: 1
        },
        L = {};
    M(c, b), e.exports = c, c.prototype.disconnect = function() {
        n(), this.list = {}, this._publicMode = !1, this._playersMultiCraftSkillById = {}, this.jobXpBonus = 0, this.craftersSettings = null, this.jobOriginalOrder = null, this.clearAfterCraft()
    }, c.prototype.startCraftingSession = function(e, t, i) {
        this.craftSide = e, this.craftType = this.getCraftType(t), this._setupSkillData(t), this.setExistingSlotCount(i), this.isMagicCraft = "craftMagus" === this.craftType, this._stackCount = 0, this.canUseCrafterIngredient = !1, this.isCrafterWorking = !1, this.isCombining = !1, this._startListeningForCraft()
    }, c.prototype.setCrafterIngredientsAllowed = function(e) {
        this.canUseCrafterIngredient = e
    }, c.prototype.switchToCrafter = function(e) {
        this.isCrafterWorking = e
    }, c.prototype.startCombining = function() {
        this.isCombining = !0
    }, c.prototype.stopCombining = function() {
        this.isCombining = !1
    }, c.prototype.clearAfterCraft = function() {
        this._onCraftTable = {}, this._stackCountPerGid = {}, this._stopListeningForCraft(), this.removeAllListeners("objectAdded"), this.removeAllListeners("objectModified"), this.removeAllListeners("objectRemoved")
    }, c.prototype._startListeningForCraft = function() {
        if (!this.isListeningForCraft) {
            this.isListeningForCraft = !0, this._objectAddedHandler || (this._objectAddedHandler = this._onCraftObjectAddedMessage.bind(this), this._objectModifiedHandler = this._onCraftObjectModifiedMessage.bind(this), this._objectRemovedHandler = this._onCraftObjectRemovedMessage.bind(this));
            var e = window.dofus.connectionManager;
            e.on("ExchangeObjectAddedMessage", this._objectAddedHandler), e.on("FMExchangeObjectAddedMessage", this._objectAddedHandler), e.on("ExchangeObjectModifiedMessage", this._objectModifiedHandler), e.on("ExchangeObjectRemovedMessage", this._objectRemovedHandler)
        }
    }, c.prototype._stopListeningForCraft = function() {
        if (this.isListeningForCraft) {
            this.isListeningForCraft = !1;
            var e = window.dofus.connectionManager;
            e.removeListener("ExchangeObjectAddedMessage", this._objectAddedHandler), e.removeListener("ExchangeObjectModifiedMessage", this._objectModifiedHandler), e.removeListener("ExchangeObjectRemovedMessage", this._objectRemovedHandler)
        }
    }, c.prototype._onCraftObjectAddedMessage = function(e) {
        var t = e.remote,
            i = e.object,
            n = i.objectUID,
            o = i.objectGID,
            a = i.quantity,
            r = this._onCraftTable[n];
        return r ? console.warn("ExchangeObjectAddedMessage received for existing object " + n) : (this._onCraftTable[n] = {
            GID: o,
            quantity: a
        }, this._stackCount++, this._stackCountPerGid[o] = (this._stackCountPerGid[o] || 0) + 1, void this.emit("objectAdded", i, t))
    }, c.prototype._onCraftObjectModifiedMessage = function(e) {
        var t = e.object,
            i = e.remote,
            n = t.objectUID,
            o = this._onCraftTable[n];
        return o ? (o.quantity = t.quantity, void this.emit("objectModified", t, i)) : console.error("craftObjectModified of unknown object " + n)
    }, c.prototype._onCraftObjectRemovedMessage = function(e) {
        var t = e.remote,
            i = e.objectUID,
            n = this._onCraftTable[i];
        if (!n) return console.error("craftObjectRemoved of unknown object " + i);
        var o = n.GID;
        delete this._onCraftTable[i], this._stackCount--, 0 === --this._stackCountPerGid[o] && delete this._stackCountPerGid[o], this.emit("objectRemoved", i, t)
    }, c.prototype._setupSkillData = function(e) {
        this.currentSkillId = e, this.skillData = p[e];
        var t = this.list[this.skillData.parentJobId] || {},
            i = t.experience || {};
        this.crafterSkillLevel = i.jobLevel, this.canCrafterSign = this.crafterSkillLevel >= T
    }, c.prototype.getCraftType = function(e) {
        var t = p[e];
        return t ? t.isForgemagus || t.modifiableItemType !== -1 ? "craftMagus" : e === this.SKILLID_DECRAFT ? "decrafting" : e === this.SKILLID_WRAP_GIFT ? "wrapping" : "crafting" : console.error("Invalid skillId: " + e)
    }, c.prototype.isCraftableItem = function(e) {
        return this.skillData.modifiableItemType === e.getProperty("typeId") && e.getProperty("enhanceable")
    }, c.prototype._getReplacedItemOnMagicTable = function(e) {
        return this._onCraftTable[e.objectUID] ? null : e.objectGID === w ? this._getSignatureRuneOnTable() : this._isMagicRuneOrPotion(e) ? this._getRuneOrPotionOnMagicTable() : this._getItemOnMagicTable()
    }, c.prototype._getSignatureRuneOnTable = function() {
        for (var e in this._onCraftTable) {
            var t = this._onCraftTable[e];
            if (t.GID === w) return e
        }
        return null
    }, c.prototype._getRuneOrPotionOnMagicTable = function() {
        for (var e in this._onCraftTable) {
            var t = this._onCraftTable[e],
                i = _.items[t.GID].typeId;
            if (i === C || i === I) return e
        }
        return null
    }, c.prototype._getItemOnMagicTable = function() {
        for (var e in this._onCraftTable) {
            var t = this._onCraftTable[e];
            if (t.GID !== w) {
                var i = _.items[t.GID].typeId;
                if (i !== C && i !== I) return e
            }
        }
        return null
    }, c.prototype._isMagicRuneOrPotion = function(e) {
        var t = e.item.typeId;
        return t === C || t === I
    }, c.prototype._getItemMoveTargets = function(e, t) {
        if (this.isMagicCraft) switch (this.craftSide) {
            case "SOLO":
                switch (e) {
                    case "craftInventory":
                        return ["crafting"];
                    case "crafting":
                        return ["craftInventory"];
                    default:
                        return []
                }
            case "CLIENT":
                if (this.isCrafterWorking) return [];
                switch (e) {
                    case "craftInventory":
                        return ["ingredientsBag", "craftPayment"];
                    case "ingredientsBag":
                        return ["craftInventory"];
                    case "craftPayment":
                        return ["craftInventory"];
                    default:
                        return []
                }
            case "CRAFTER":
                if (!this.isCrafterWorking) return [];
                switch (e) {
                    case "craftInventory":
                        var i = this.canUseCrafterIngredient || t.objectGID === w;
                        return i ? ["crafting"] : [];
                    case "crafting":
                        return l(t) ? ["craftInventory"] : ["ingredientsBag"];
                    case "ingredientsBag":
                        return ["crafting"];
                    default:
                        return []
                }
            default:
                return []
        } else switch (this.craftSide) {
            case "SOLO":
                switch (e) {
                    case "craftInventory":
                        return ["crafting"];
                    case "crafting":
                        return ["craftInventory"];
                    default:
                        return []
                }
            case "CRAFTER":
                switch (e) {
                    case "craftInventory":
                        return ["crafting"];
                    case "crafting":
                        return ["craftInventory"];
                    default:
                        return []
                }
            case "CLIENT":
                switch (e) {
                    case "craftInventory":
                        return ["crafting", "craftPayment"];
                    case "crafting":
                        return ["craftInventory"];
                    case "craftPayment":
                        return ["craftInventory"];
                    default:
                        return []
                }
            default:
                return []
        }
    }, c.prototype.canItemMove = function(e, t, i) {
        var n = this._getItemMoveTargets(e, i);
        return n.indexOf(t) !== -1
    }, c.prototype.getQuickTransferPreference = function(e) {
        var t = null;
        return t || d(this.craftType, this.craftSide, e)
    }, c.prototype.getQuickTransferInfo = function(e, t, i) {
        if (this.isCombining) return {
            targets: [],
            movedQty: 0,
            proposedQty: 0
        };
        var n = this._getItemMoveTargets(e, t);
        if (0 === n.length) return {
            targets: [],
            movedQty: 0,
            proposedQty: 0
        };
        var o, a = this.isMagicCraft && "CLIENT" === this.craftSide ? "ingredientsBag" : "crafting";
        if (o = n.indexOf(a) !== -1 ? this.howManyCanBeAddedToCraft(e, t, i) : t.quantity, 0 === o) return {
            targets: [],
            movedQty: 0,
            proposedQty: 0
        };
        var r = this.getQuickTransferPreference(e);
        return r.move ? {
            targets: n,
            movedQty: "max" === r.move ? o : 1
        } : {
            targets: n,
            proposedQty: "max" === r.propose ? o : 1,
            maxQty: o
        }
    }, c.prototype.howManyCanBeAddedToCraft = function(e, t, i) {
        if (this.isCombining) return 0;
        if (i < 1) return 0;
        if (t.objectGID === w) return !this._getSignatureRuneOnTable() && "CLIENT" !== this.craftSide && this.canCrafterSign ? 1 : 0;
        if (this.isMagicCraft) {
            if ("CLIENT" === this.craftSide && this.isCrafterWorking) return 0;
            if ("CRAFTER" === this.craftSide && !this.isCrafterWorking) return 0;
            var n = "CRAFTER" === this.craftSide && "craftInventory" === e;
            return this._isMagicRuneOrPotion(t) ? n && !this.canUseCrafterIngredient ? 0 : i : this.isCraftableItem(t) ? n ? 0 : this._onCraftTable[t.objectUID] ? 0 : 1 : 0
        }
        return "SOLO" === this.craftSide ? this.getFreeSlotCount() || this._onCraftTable[t.objectUID] ? i : 0 : this.getFreeSlotCount() || this._stackCountPerGid[t.objectGID] ? i : 0
    }, c.prototype.moveItemToCraft = function(e, t, i) {
        if (!(i >= 1)) return console.error("moveItemToCraft quantity: " + i);
        if (this.isMagicCraft) {
            var n = this._getReplacedItemOnMagicTable(t);
            n && this.removeItemFromCraft(n, this._onCraftTable[n].quantity)
        }
        var o = t.objectUID;
        "CRAFTER" === this.craftSide && "craftInventory" !== e ? window.dofus.sendMessage("ExchangeObjectUseInWorkshopMessage", {
            objectUID: o,
            quantity: i
        }) : window.dofus.sendMessage("ExchangeObjectMoveMessage", {
            objectUID: o,
            quantity: i
        })
    }, c.prototype.removeItemFromCraft = function(e, t) {
        return t >= 1 ? void("CRAFTER" === this.craftSide && this.isMagicCraft ? window.dofus.sendMessage("ExchangeObjectUseInWorkshopMessage", {
            objectUID: e,
            quantity: -t
        }) : window.dofus.sendMessage("ExchangeObjectMoveMessage", {
            objectUID: e,
            quantity: -t
        })) : console.error("removeItemFromCraft quantity: " + t)
    }, c.prototype.initialize = function(e) {
        function t(e, t, i) {
            e || (console.error(new Error("job name is missing for job " + t.toString())), e = "n/a");
            var n;
            n = i ? m("ui.craft.referenceAdd", e) : m("ui.craft.referenceRemove", e), window.gui.chat.logMsg(n)
        }

        function i(e) {
            var t = o.list[e.jobId];
            t || (t = {}, o.list[e.jobId] = t), t.experience = e
        }
        var o = this;
        n(), r();
        var a = A.createFifo();
        e.on("JobDescriptionMessage", function(e) {
            a.push(function(t) {
                s(e.jobsDescription, o.list, function(i) {
                    if (i) return t(i);
                    o.jobOriginalOrder = [];
                    for (var n = 0; n < e.jobsDescription.length; n++) o.jobOriginalOrder.push(e.jobsDescription[n].jobId);
                    o.emit("jobListUpdated"), t()
                })
            })
        }), e.on("JobCrafterDirectorySettingsMessage", function(e) {
            a.push(function(t) {
                o.craftersSettings = e.craftersSettings, t()
            })
        }), e.on("JobListedUpdateMessage", function(e) {
            a.push(function(i) {
                var n = o.list[e.jobId],
                    a = "";
                if (n) {
                    var r = n.info || {};
                    return a = r.nameId, t(a, e.jobId, e.addedOrDeleted), i()
                }
                g.getDataMap("Jobs", [e.jobId], null, function(n, o) {
                    if (n) return i(n);
                    var r = o[e.jobId] || {};
                    a = r.nameId, t(a, e.jobId, e.addedOrDeleted), i()
                })
            })
        }), e.on("JobExperienceUpdateMessage", function(e) {
            a.push(function(t) {
                i(e.experiencesUpdate);
                var n = e.experiencesUpdate.jobId;
                o.emit("jobExperienceUpdate", o.getJobExperience(n)), t()
            })
        }), e.on("JobExperienceMultiUpdateMessage", function(e) {
            a.push(function(t) {
                for (var n = 0, a = e.experiencesUpdate.length; n < a; n += 1) {
                    i(e.experiencesUpdate[n]);
                    var r = e.experiencesUpdate[n].jobId;
                    o.emit("jobExperienceUpdate", o.getJobExperience(r))
                }
                t()
            })
        }), e.on("JobLevelUpMessage", function(e) {
            a.push(function(t) {
                s([e.jobsDescription], o.list, function(i) {
                    if (i) return t(i);
                    var n = e.newLevel,
                        a = o.list[e.jobsDescription.jobId];
                    a.experience.jobLevel = n;
                    var r = m("ui.craft.newJobLevel", a.info.nameId, n);
                    window.gui.chat.logMsg(r);
                    var s = a.info.nameId + " " + m("ui.levelUp.TitleLevel", n),
                        c = {};
                    c.newLevel = n, c.iconId = a.info.iconId, c.popupTitle = s, c.nameId = a.info.nameId, c.skills = e.jobsDescription.skills, y.close("jobLvlUp"), y.open("jobLvlUp", c), O("LEVEL_UP"), o.emit("jobLevelUp", a, n), t()
                })
            })
        }), e.on("JobUnlearntMessage", function(e) {
            a.push(function(t) {
                delete o.list[e.jobId], o.jobOriginalOrder.splice(o.jobOriginalOrder.indexOf(e.jobId), 1), o.emit("jobListUpdated"), t()
            })
        }), e.on("JobAllowMultiCraftRequestMessage", function(e) {
            a.push(function(t) {
                o._publicMode = e.enabled, delete o._playersMultiCraftSkillById[window.gui.playerData.id], o.emit("jobPublicMode", o._publicMode), t()
            })
        }), e.on("JobMultiCraftAvailableSkillsMessage", function(e) {
            a.push(function(t) {
                o._updateMultiCraftAvailableSkills(e), t()
            })
        }), e.on("CurrentMapMessage", function() {
            a.push(function(e) {
                o._playersMultiCraftSkillById = {}, e()
            })
        }), v.on("ServerBonusMessage", function(e) {
            o.jobXpBonus = e.jobXpBonus
        }), v.on("ServerBonusUpdateMessage", function(e) {
            o.jobXpBonus = e.jobXpBonus
        })
    }, c.prototype.getCraftTable = function() {
        return this._onCraftTable
    }, c.prototype.setExistingSlotCount = function(e) {
        this._existingSlotCount = Math.min(Math.max(e, 0), this.MAX_CRAFT_SLOTS)
    }, c.prototype.getExistingSlotCount = function() {
        return this._existingSlotCount
    }, c.prototype.getFreeSlotCount = function() {
        var e = this._stackCountPerGid[w] ? 1 : 0;
        return "SOLO" === this.craftSide ? this._existingSlotCount - this._stackCount + e : this._existingSlotCount - Object.keys(this._stackCountPerGid)
            .length + e
    }, c.prototype.prepareSkillRecipes = function(e, t) {
        a([e], t)
    }, c.prototype.getRecipesBySkill = function(e) {
        return p[e].recipes
    }, c.prototype.getSkill = function(e) {
        return p[e]
    }, c.prototype.getJobFromSkillId = function(e) {
        var t = p[e] || {};
        return u[t.parentJobId] || {}
    }, c.prototype.getAvailableSkills = function(e) {
        for (var t = {}, i = Object.keys(this.list), n = 0; n < i.length; n++)
            for (var o = this.list[i[n]], a = o.description.skills, r = 0; r < a.length; r++) e && a[r].time > 0 || (t[a[r].skillId] = a[r].info);
        return t
    }, c.prototype.getStorageCraftFilterMap = function(e, t) {
        for (var i = this._getRecipeByNbIngredient(e, 1, t), n = {}, o = 0, a = i.length; o < a; o += 1)
            for (var r = i[o].ingredientIds, s = 0, c = r.length; s < c; s += 1) {
                var l = r[s];
                n[l] = !0
            }
        return this.canCrafterSign && "CLIENT" !== this.craftSide && (n[w] = !0), n
    }, c.prototype._getRecipeByNbIngredient = function(e, t, i) {
        i = i || t;
        for (var n = this.getRecipesBySkill(e), o = [], a = 0, r = n.length; a < r; a += 1) {
            var s = n[a],
                c = s.ingredientIds.length;
            c >= t && c <= i && o.push(s)
        }
        return o
    }, c.prototype._getRecipesWithItemsOnCraftTable = function(e) {
        function t() {
            var e = {};
            for (var t in i._onCraftTable) {
                var n = i._onCraftTable[t],
                    o = n.GID,
                    a = n.quantity;
                o !== w && (e[o] || (e[o] = 0), e[o] += a)
            }
            return e
        }
        for (var i = this, n = [], o = t(), a = Object.keys(o)
                .length, r = this._getRecipeByNbIngredient(e, a), s = 0, c = r.length; s < c; s += 1) {
            var l = r[s],
                d = !0;
            for (var u in o) {
                for (var p = parseInt(u, 10), h = o[p], f = !1, b = 0, m = l.ingredientIds.length; b < m; b += 1) {
                    var M = l.ingredientIds[b],
                        g = l.quantities[b];
                    if (p === M && h === g) {
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    d = !1;
                    break
                }
            }
            d && n.push(l)
        }
        return n
    }, c.prototype.checkRecipe = function(e) {
        var t, i = !1,
            n = this._getRecipesWithItemsOnCraftTable(e);
        return 1 === n.length ? (t = n[0], i = !0) : e === this.SKILLID_DECRAFT && (i = !0, t = {
            resultId: this.ITEMID_MAGIC_FRAGMENT,
            resultLevel: 1,
            ingredientIds: [],
            quantities: []
        }), {
            isRecipeKnown: i,
            itemToCraft: t
        }
    }, c.prototype._updateMultiCraftAvailableSkills = function(e) {
        var t = this,
            i = e.playerId,
            n = e.skills,
            a = {};
        if (!e.enabled) return void delete this._playersMultiCraftSkillById[i];
        for (var r = [], s = 0, c = n.length; s < c; s += 1) {
            var l = n[s];
            p[l] || r.push(l)
        }
        o("Skills", r, function(e) {
            if (e) return console.error("JobData: Cannot get missing skills for ids", r, e);
            for (var o = 0, s = n.length; o < s; o += 1) {
                var c = n[o],
                    l = p[c];
                l ? a[c] = l : console.warn("JobsData: No data for skillId", c)
            }
            t._playersMultiCraftSkillById[i] = a
        })
    }, c.prototype.playersMultiCraftSkillById = function(e) {
        return this._playersMultiCraftSkillById[e]
    }, c.prototype.getMaxSlotsByJobId = function(e) {
        var t = this.list[e],
            i = 0;
        if (!t) return 0;
        for (var n = t.description.skills, o = 0, a = n.length; o < a; o += 1) {
            var r = n[o].maxSlots;
            r && r > i && (i = r)
        }
        return i
    }, c.prototype.getUsableSkillsInMap = function(e, t, i) {
        var n = [];
        if (!t) return n;
        var o;
        if (o = e === window.gui.playerData.id ? this.getAvailableSkills(i) : this.playersMultiCraftSkillById(e, i), !o) return n;
        var a = {};
        for (var r in t)
            for (var s = t[r], c = s.enabledSkills, l = s.disabledSkills, d = c.concat(l), u = 0, p = d.length; u < p; u += 1) {
                var h = d[u].skillId;
                o[h] && !a[h] && (n.push(o[h]), a[h] = !0)
            }
        return n
    }, c.prototype.getJobNpcNameById = function(e) {
        return L[e]
    }, c.prototype.getJobExperience = function(e) {
        var t = this.list[e];
        if (!t) return null;
        var i = t.experience || {},
            n = {
                jobId: e
            };
        return n.currentLevel = i.jobLevel, n.currentExperience = i.jobXP, n.levelExperienceFloor = i.jobXpLevelFloor, n.levelExperienceCeil = i.jobXpNextLevelFloor, n.percentage = 100, n.levelExperienceCeil && (n.percentage = Math.floor((n.currentExperience - n.levelExperienceFloor) / (n.levelExperienceCeil - n.levelExperienceFloor) * 100)), n
    }
}
