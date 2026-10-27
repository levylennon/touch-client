function(e, t, i) {
    function n() {
        function e(e) {
            a._lifePoints = e, a.displayLifePoints()
        }

        function t(e) {
            a._maxLifePoints = e, a.displayLifePoints()
        }

        function i(e) {
            a._actionPoints = e, a.actionPointsNumber.setText(e)
        }

        function n(e) {
            a._movementPoints = e, a.movementPointsNumber.setText(e)
        }
        c.call(this, "div", {
            className: "playerPoints"
        });
        var a = this,
            d = window.gui;
        this._lifePoints = 1, this._maxLifePoints = 1, this._shieldPoints = 0, this._actionPoints = 0, this._movementPoints = 0, d.on("connected", function() {
            a.lifeDisplay = l.getValue("lifeDisplayMode", "simple")
        }), d.on("disconnect", function() {
            a.lifeGauge.setStyle("height", "0%"), a.lifePointsNumber.clearContent(), a._shieldPoints = 0, a.updateShieldUI()
        });
        var u = this.actionAndMovement = this.createChild("div", {
            className: "actionAndMovement"
        });
        this.actionPointsNumber = u.createChild("div", {
            className: ["number", "actionPoints"]
        }), this.movementPointsNumber = u.createChild("div", {
            className: ["number", "movementPoints"]
        }), o(this.actionPointsNumber, r("ui.common.ap")), o(this.movementPointsNumber, r("ui.common.mp"));
        var p = this.createChild("div", {
                className: "lifePointsWrapper"
            }),
            h = p.createChild("div", {
                className: "lifeHeart"
            });
        this.lifeGauge = h.createChild("div", {
            className: "lifeGauge"
        }), p.createChild("div", {
            className: "highlights"
        }), this.lifePointsNumberWrapper = p.createChild("div", {
            className: "numberWrapper"
        }), this.lifePointsNumber = this.lifePointsNumberWrapper.createChild("div", {
            className: "number"
        }), p.appendChild(new s), o(h, r("ui.common.lifePoints")), h.on("tap", function() {
            a.switchLifeDisplay()
        }), this.actionPointsNumber.on("tap", function() {
            window.gui.pingSystem.isActive() && window.gui.pingSystem.pingOnApMp(1)
        }), this.movementPointsNumber.on("tap", function() {
            window.gui.pingSystem.isActive() && window.gui.pingSystem.pingOnApMp(2)
        });
        var f = d.playerData.characters;
        f.on("specificCharacteristicsUpdated", function(o, a) {
            switch (o) {
                case "lifePoints":
                    e(a);
                    break;
                case "maxLifePoints":
                    t(a);
                    break;
                case "actionPointsCurrent":
                    i(a);
                    break;
                case "movementPointsCurrent":
                    n(a)
            }
        }), d.fightManager.on("shieldPointsUpdated", function(e, t) {
            e === f.controlledCharacterId && (a._shieldPoints = t, a.updateShieldUI())
        })
    }
    i(784);
    var o = i(88)
        .addTooltip,
        a = i(56)
        .inherits,
        r = i(17)
        .getText,
        s = i(785),
        c = i(72),
        l = i(60);
    a(n, c), n.prototype.updateShieldUI = function() {
        this._shieldPoints > 0 ? this._addShieldColor() : this._removeShieldColor(), this.displayLifePoints()
    }, n.prototype._addShieldColor = function() {
        this.lifeGauge.addClassNames("shield")
    }, n.prototype._removeShieldColor = function() {
        this.lifeGauge.delClassNames("shield")
    }, n.prototype.switchLifeDisplay = function() {
        switch (this.lifeDisplay) {
            case "simple":
                this.lifeDisplay = "total";
                break;
            case "total":
                this.lifeDisplay = "percentage";
                break;
            case "percentage":
                this.lifeDisplay = "simple"
        }
        l.setValue("lifeDisplayMode", this.lifeDisplay), this.displayLifePoints()
    }, n.prototype.displayLifePoints = function() {
        var e = this;
        setTimeout(function() {
            var t = e._lifePoints / e._maxLifePoints * 100;
            switch (e.lifeGauge.setStyle("height", t + "%"), e.lifeDisplay) {
                case "simple":
                    e._shieldPoints > 0 ? e.lifePointsNumber.setHtml(e._lifePoints + "<br>" + e._shieldPoints) : e.lifePointsNumber.setHtml(e._lifePoints);
                    break;
                case "total":
                    e.lifePointsNumber.setHtml(e._lifePoints + "<br>" + e._maxLifePoints);
                    break;
                case "percentage":
                    e.lifePointsNumber.setHtml(Math.round(t) + "%")
            }
        }, 0)
    }, e.exports = n
}
