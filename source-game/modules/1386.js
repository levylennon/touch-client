function(e, t, i) {
    function n() {
        a.call(this, {
            className: "FeatureIntroWindow",
            title: c("ui.popup.newFeature"),
            positionInfo: {
                left: "c",
                top: "c",
                width: 520,
                height: 480
            }
        }), this._featureId = 0;
        var e = this;
        this.toaQuestFinished = !1,
        s.on("FeatureEnabledMessage", function(t) {
            e.displayFeature(t)
        }), this.on("open", function(e) {
            this._featureId = e.feature;
            var t = M[this._featureId];
            if (t) {
                var i = window.gui.playerData.ToaData;
                this.toaQuestFinished = i.isQuestAccomplished(), t.locateBtnParams && (this._updateLocateParams(t), this._locateButton.updateParams(t.locateBtnParams)), this._encyclopediaButton.toggleDisplay(void 0 !== t.part), this._locateButton.toggleDisplay(void 0 !== t.locateBtnParams), this._redirectButton.toggleDisplay(t.part !== -1), this._img.setClassNames(["img", t.name]), this._desc.setText(c(t.text))
            }
        }), this._createDom()
    }
    i(1387);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(52),
        s = i(105),
        c = i(17)
        .getText,
        l = i(86),
        d = i(60),
        u = i(1062)
        .MapLocationButton,
        p = "featureDisplayed",
        h = -73,
        f = -17,
        b = -33,
        m = -11,
        M = {
            1: {
                part: 2,
                subPart: 22,
                name: "dailyQuest",
                text: "ui.dailyQuest.explanations"
            },
            2: {
                name: "groupSeeker",
                text: "ui.groupSeeker.explanations"
            },
            3: {
                part: -1,
                name: "toa",
                text: "ui.toa.explanations",
                locateBtnParams: {
                    type: "quest",
                    x: b,
                    y: m
                }
            },
            4: {
                part: 2,
                subPart: 14,
                name: "arena",
                text: "ui.koliseum.explanations"
            }
        };
    o(n, a), e.exports = n, n.prototype.displayFeature = function(e) {
        var t = window.gui.playerData.characters.mainCharacterId,
            i = e && e.feature;
        if (i) {
            var n = d.getValue(p, {});
            n[t] || (n[t] = {}), n[t][i] || (n[t][i] = !0, d.setValue(p, n), r.open(this.id, e))
        }
    }, n.prototype._createDom = function() {
        var e = this;
        this._img = this.windowBody.createChild("div", {
            className: "img"
        }), this._desc = this.windowBody.createChild("div", {
            className: "desc"
        });
        var t = this.windowBody.createChild("div", {
            className: "buttons"
        });
        this._locateButton = t.appendChild(new u({
            className: ["greenButton"],
            text: c("ui.toa.localisation")
        })), this._redirectButton = t.appendChild(new l({
            className: ["greenButton"],
            text: c("ui.popup.toInterface")
        })), this._encyclopediaButton = t.appendChild(new l({
            className: ["greenButton"],
            text: c("ui.popup.toEncyclopedia")
        })), this._redirectButton.on("tap", function() {
            r.open(M[e._featureId].name)
        }), this._encyclopediaButton.on("tap", function() {
            M[e._featureId].part === -1 ? r.open(M[e._featureId].name) : r.open("help", {
                part: M[e._featureId].part,
                subPart: M[e._featureId].subPart
            })
        })
    }, n.prototype._updateLocateParams = function(e) {
        3 === this._featureId && (e.locateBtnParams = {
            type: this.toaQuestFinished ? "zaap" : "quest",
            x: this.toaQuestFinished ? h : b,
            y: this.toaQuestFinished ? f : m
        })
    }
}
