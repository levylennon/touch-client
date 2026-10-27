function(e, t, i) {
    function n() {
        a.call(this, {
            className: ["JobLevelUpPopup"],
            positionInfo: {
                left: "c",
                top: "c",
                width: 450,
                height: 300
            },
            openingSound: "POPUP_INFO",
            customDom: !0
        }), this.params = {}, this.hasNewResources = !1;
        var e = this;
        this.on("open", function(t) {
            e._createDom(t)
        }), this.on("close", function() {
            e.windowBody.clearContent(), e.params = {}
        })
    }
    i(1422);
    var o = i(56)
        .inherits,
        a = i(951),
        r = i(12),
        s = i(469),
        c = i(871),
        l = i(1062),
        d = i(17)
        .getText;
    o(n, a), e.exports = n, n.prototype._createDom = function(e) {
        e = e || {}, this.params = e, this.windowTitle.setText(e.popupTitle), this._wrapper = this.windowBody.createChild("div", {
            className: "wrapper"
        }), this._jobPart = this._wrapper.createChild("div", {
            className: "jobPart"
        }), this._jobImage = this._jobPart.createChild("div", {
            className: "jobImage"
        }), this._jobData = this._jobPart.createChild("div", {
            className: "jobData"
        });
        var t = d("ui.craft.newJobLevel", e.nameId, e.newLevel);
        this._jobData.createChild("div", {
            text: t,
            className: "levelUpMessage"
        }), this._skillsAndRecipesWrapper = this._wrapper.createChild("div", {
            className: "skillsAndRecipesWrapper"
        }), this._resourcesWrapper = this._wrapper.createChild("div", {
            className: "resourcesWrapper"
        }), this._resourcesUnlockedText = this._resourcesWrapper.createChild("div", {
            className: "resourcesUnlockedText",
            text: d("ui.craft.newResources")
        }), this._resourcesWrapper.hide(), this._setJobImage(e.iconId), this._checkForNewResources(e.skills, e.newLevel), this._checkForNewRecipes(e.newLevel)
    }, n.prototype._checkForNewResources = function(e, t) {
        var i = !1,
            n = 0;
        for (var o in e) {
            var a = e[o];
            a.info.levelMin === t && (this._displayNewResource(a.info), i = !0, n++)
        }
        this._resourcesWrapper.toggleDisplay(i), this.toggleClassName("noResources", !i), this.toggleClassName("manyResources", n > 1), this.hasNewResources = i
    }, n.prototype._displayNewResource = function(e) {
        var t = e.gatheredRessourceItem,
            i = e.subAreas,
            n = this._resourcesWrapper.createChild("div", {
                className: "resourceData"
            }),
            o = n.createChild("div", {
                className: "resourceName"
            }),
            a = n.createChild("div", {
                className: "mapLocationDom"
            }),
            r = a.appendChild(new c({
                descriptionOptions: {
                    effects: !1
                }
            }));
        this._setResourceInfos(t, r, o), a.appendChild(new l.MapLocationButton({
            subareaIds: i,
            centerOn: "nearest",
            sameWorld: !0
        }))
    }, n.prototype._setJobImage = function(e) {
        var t = this,
            i = "gfx/jobs/" + e + ".png";
        r.preloadImage(i, function(e) {
            t._jobImage.setStyle("backgroundImage", e)
        })
    }, n.prototype._setResourceInfos = function(e, t, i) {
        var n = [];
        n.push(e), s.getItems(n, function(e, n) {
            if (e) return console.error("JobsLevelUpPopup: Failed to get ingredients", e);
            for (var o = 0; o < n.length; o++) {
                var a = n[o];
                t.setItem(a), i.setText(a.nameId)
            }
        })
    }, n.prototype._checkForNewRecipes = function(e) {
        var t = !1;
        switch (e) {
            case 10:
            case 20:
            case 40:
            case 60:
            case 80:
            case 100:
                t = !0
        }
        this._skillsAndRecipesWrapper.toggleDisplay(t), t && (this._recipesUnlockedWrapper = this._skillsAndRecipesWrapper.createChild("div", {
            className: "recipesUnlockedWrapper"
        }), this._plusIcon = this._recipesUnlockedWrapper.createChild("div", {
            className: "plusIcon"
        }), this._recipesUnlockedText = this._recipesUnlockedWrapper.createChild("div", {
            className: "recipesUnlockedText",
            text: d("ui.craft.newRecipes")
        })), this.toggleClassName("noRecipes", this.hasNewResources && !t)
    }
}
