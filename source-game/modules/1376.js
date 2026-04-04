function(e, t, i) {
    function n() {
        var e = this;
        r.call(this, {
            title: o("ui.common.panjidex"),
            className: "panjidexWindow",
            helpTab: {
                part: 2,
                subPart: 25
            },
            positionInfo: {
                right: "c",
                bottom: "c",
                width: 400,
                height: 490,
                mustAvoidToolbar: !0
            }
        }), this.once("open", function(e) {
            this._showModel = e.drawModeleFunction, this._createDom()
        }), this.on("open", function() {
            this._showPanjis()
        }), window.gui.on("disconnect", function() {
            e._panjiList && e._panjiList.getChildren()
                .forEach(function(e) {
                    "panji" === e.getClassNames()[0] && e.destroy()
                })
        })
    }
    i(1377);
    var o = i(17)
        .getText,
        a = i(56)
        .inherits,
        r = i(70),
        s = i(1e3),
        c = i(63),
        l = i(767),
        d = [{
            id: 1,
            item: 18102,
            name: "ui.common.panji_shake"
        }, {
            id: 2,
            item: 18104,
            name: "ui.common.panji_shield"
        }, {
            id: 3,
            item: 18106,
            name: "ui.common.panji_child"
        }, {
            id: 4,
            item: 18108,
            name: "ui.common.panji_water"
        }, {
            id: 5,
            item: 18110,
            name: "ui.common.panji_bamboo"
        }, {
            id: 6,
            item: 18112,
            name: "ui.common.panji_earth"
        }, {
            id: 7,
            item: 18140,
            name: "ui.common.panji_build"
        }, {
            id: 8,
            item: 18138,
            name: "ui.common.panji_waterfall"
        }, {
            id: 9,
            item: 18116,
            name: "ui.common.panji_wind"
        }, {
            id: 10,
            item: 18064,
            name: "ui.common.panji_stop"
        }, {
            id: 11,
            item: 18114,
            name: "ui.common.panji_oil"
        }, {
            id: 12,
            item: 18014,
            name: "ui.common.panji_fire"
        }, {
            id: 13,
            item: 17986,
            name: "ui.common.panji_sun"
        }, {
            id: 14,
            item: 18156,
            name: "ui.common.panji_stone"
        }, {
            id: 15,
            item: 18616,
            name: "ui.common.panji_wood"
        }, {
            id: 16,
            item: 20015,
            name: "ui.common.panji_confinement"
        }, {
            id: 17,
            item: 20017,
            name: "ui.common.panji_fusion"
        }, {
            id: 18,
            item: 20001,
            name: "ui.common.panji_spirit"
        }],
        u = 16249,
        p = 15,
        h = 16,
        f = 17,
        b = 18,
        m = [p, h, f, b];
    a(n, r), n.prototype._addPanji = function(e, t) {
        var i = this,
            n = this._panjiList.createChild("div", {
                className: "panji"
            });
        n.id = t, n.left = n.createChild("div", {
            className: "panjiLeft"
        }), n.right = n.createChild("div", {
            className: "panjiRight"
        }), n.left.slot = n.left.createChild("div", {
            className: "slot"
        }), n.left.img = n.left.slot.createChild("div", {
            className: ["img", "img" + t]
        }), n.nameText = n.right.createChild("div", {
            className: "panjiName",
            text: e.name
        }), n.consultButton = n.right.createChild("div", {
            className: "consultButton"
        }), c(n.consultButton), n.consultButton.on("tap", function() {
            i.windowManager.close(i.id), i._showModel(e.model)
        })
    }, n.prototype._showPanjis = function() {
        function e(e) {
            return e.id === n
        }
        var t = this,
            i = window.gui.playerData.inventory,
            n = 0;
        d.forEach(function(a) {
            var r = Boolean(i.quantityList[a.item]);
            m.indexOf(a.id) === -1 && (r = Boolean(i.quantityList[u]) || Boolean(i.quantityList[a.item])), n = a.id, r && !t._panjiList.getChildren()
                .some(e) && t._addPanji({
                    model: s[a.id],
                    name: o(a.name)
                }, a.id)
        }), this._placeHolder.toggleDisplay(this._panjiList.getChildren()
            .length < 2)
    }, n.prototype._createDom = function() {
        var e = this.windowBody.createChild("div", {
            className: "panjisListWrapper"
        });
        this._panjiList = e.createChild("div", {
            className: "panjisList"
        }), this._placeHolder = new l(this._panjiList), this._placeHolder.setText(o("ui.common.panjidexEmpty"))
    }, e.exports = n
}
