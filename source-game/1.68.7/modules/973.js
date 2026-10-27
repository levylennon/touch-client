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

    function o() {
        p.call(this, {
            title: a("ui.charcrea.more"),
            className: "BreedDetailWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 912,
                height: "95%",
                maxHeight: 570,
                isModal: !0,
                isFullScreen: !0
            }
        }), this.loadedSpells = {}, this.favSpells = [], this.on("open", this._initialize)
    }
    i(974);
    var a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(453),
        c = i(16)
        .showProgressively,
        l = i(885),
        d = i(732),
        u = i(883),
        p = i(70),
        h = i(34)
        .logger,
        f = {
            spellTooltipAll: !0
        },
        b = {
            visibilityOptions: {
                spellTooltipName: !0,
                spellTooltipDescription: !0
            }
        };
    r(o, p), e.exports = o, o.prototype.freeContent = function() {
        this.windowBody.clearContent(), this.loadedSpells = {}, this.favSpells = []
    }, o.prototype._initialize = function(e) {
        this.breedData = e.breedData, this.windowBody.setClassNames(["windowBody", n(e.breedData.id)
            .bgClass
        ]), this._createContent(this.windowBody), this._updateBreedDescription(), this._updateSpells()
    }, o.prototype._createContent = function(e) {
        var t = this.scroller = e.appendChild(new s({}, {
                showHintArrows: !0
            })),
            i = t.content,
            n = i.createChild("div", {
                className: "leftSide"
            });
        this.breedDescription = n.createChild("div", {
            className: "breedDescription",
            hidden: !0
        });
        var o = this.breedDescription.createChild("div", {
                className: "descriptionZone"
            }),
            r = o.createChild("div", {
                className: "descriptionText"
            });
        this.breedName = r.createChild("div", {
            className: "breedName",
            text: "."
        }), this.breedName.setText(""), this.breedStory = r.createChild("div", {
            className: "breedStory"
        });
        var c = this.favoriteSpells = n.createChild("div", {
            className: "favSpells",
            hidden: !0
        });
        c.createChild("div", {
            className: "title",
            text: a("tablet.charCrea.popularSpells")
        });
        for (var l = this.breedData.id, d = window.gui.databases.Breeds[l].spellsHighlighted || [], u = 0; u < d.length; u++) {
            var p = this.favSpells[u] = c.createChild("div", {
                className: "spell",
                hidden: !0
            });
            p.spellId = d[u]
        }
        var h = i.createChild("div", {
                className: "rightSide"
            }),
            f = this.allSpells = h.createChild("div", {
                className: "spells",
                hidden: !0
            });
        f.createChild("div", {
            className: "title",
            text: a("tablet.charCrea.allSpells")
        }), this.spellsContainer = f.createChild("div", {
            className: "spellsContainer"
        })
    }, o.prototype._appearWhenReady = function() {
        c(this.breedDescription), c(this.favoriteSpells), c(this.allSpells), this.scroller.refresh(), this.scroller.notify()
    }, o.prototype._updateBreedDescription = function() {
        var e = this.breedData;
        this.breedName.setText(e.longNameId), this.breedStory.setText(e.descriptionId)
    }, o.prototype._updateSpells = function() {
        this.windowBody.addClassNames("spinner");
        var e = this.breedId,
            t = this.breedData.breedSpellsId,
            i = this;
        this._loadSpellsData(t, function(n) {
            return n ? console.error(n) : void(i.openState && i.breedId === e && i._updateSpellSlots(t))
        })
    }, o.prototype._loadSpellsData = function(e, t) {
        for (var i = [], n = this.loadedSpells, o = 0; o < e.length; o += 1) n[e[o]] || i.push(e[o]);
        return i.length ? void d.createSpells(i, function(e, i) {
            if (e) return t(e);
            i = d.sortSpells(i, "minPlayerLevel");
            for (var o = 0; o < i.length; o += 1) {
                var a = i[o];
                n[a.id] = a
            }
            t()
        }) : t()
    }, o.prototype._updateSpellSlots = function(e) {
        var t, i = this.breedData.id,
            n = [],
            o = window.gui.databases.Breeds[i];
        e.forEach(function(e) {
            o.spellsHighlighted.indexOf(e) < 0 && n.push(e)
        });
        for (var a = 0; a < n.length; a += 1) {
            var r = this.spellsContainer.appendChild(new u({
                tooltipOptions: {
                    longTapExplanation: !0
                }
            }));
            t = this.loadedSpells[n[a]], r.setSpell(t, f), r.toggleDisplay(Boolean(t))
        }
        this.windowBody.delClassNames("spinner");
        for (var s = 0; s < this.favSpells.length; s += 1) {
            var c = this.favSpells[s];
            t = this.loadedSpells[c.spellId], t ? (c.slot = c.appendChild(new u({
                tooltipOptions: {
                    longTapExplanation: !0
                }
            })), c.slot.setSpell(t, f), c.appendChild(new l({
                spell: t
            }, b)), c.show()) : h.error(new Error("Cannot find spell id " + c.spellId + " for breed id " + this.breedData.id))
        }
        this._appearWhenReady()
    }
}
