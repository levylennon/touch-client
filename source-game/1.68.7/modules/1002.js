function(e, t, i) {
    function n() {
        a.call(this, {
            className: "GiftSelectionWindow",
            title: r("ui.connection.giftReceived"),
            noCloseButton: !0,
            positionInfo: {
                left: "c",
                top: "c",
                width: 800,
                height: 540
            }
        });
        var e = this;
        this._giftList = [], this._giftListIndex = 0, this._hasDom = !1, this._itemSpace = null, this._charactersSpace = null, this._selectedCharaId = null, this.on("open", function(t) {
            e._characterList = window.gui.gifts.getCharaListMinusDeadPeople(), e._giftList = t || [], e._createDom(), e._setupEvents(), e._updateCharactersSpace(), e._updateGift()
        }), this.on("open", function() {
            window.foreground.lock("giftAttribution")
        }), this.on("close", function() {
            window.foreground.unlock("giftAttribution"), e._reset()
        })
    }
    i(1003);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(17)
        .getText,
        s = i(1004),
        c = i(1010),
        l = i(86)
        .DofusButton,
        d = i(22);
    o(n, a), e.exports = n, n.prototype._reset = function() {
        this._charactersSpace && this._charactersSpace.reset(), this.windowBody.clearContent(), this._hasDom = !1, this._giftListIndex = 0, this._giftList = [], this._itemSpace = null, this._charactersSpace = null, this._selectedCharaId = null
    }, n.prototype._setupEvents = function() {
        var e = this;
        window.gui.gifts.on("giftAssignRequestResult", function(t) {
            if (e.openState) {
                var i = e._giftList[e._giftListIndex];
                i && t.actionId === i.uid && (e._charactersSpace.setAssignLoading(!1), e._nextGift())
            }
        })
    }, n.prototype._createDom = function() {
        var e = this;
        if (!this._hasDom) {
            var t = this.windowBody,
                i = t.createChild("div", {
                    className: "left"
                });
            this._itemSpace = i.appendChild(new s({
                forceHidePreviewBtn: !0
            }));
            var n = t.createChild("div", {
                className: "right"
            });
            this._charactersSpace = n.appendChild(new c), this._charactersSpace.on("selectTile", function(t) {
                e._selectedCharaId = t
            });
            var o = t.createChild("div", {
                className: "buttonSpace"
            });
            o.appendChild(new l(r("ui.connection.notNow"), {
                scaleOnPress: !0,
                className: "buttonSpaceButton"
            }, function() {
                e._nextGift()
            })), this._assignBtn = o.appendChild(new l(r("ui.connection.assignGift"), {
                scaleOnPress: !0,
                className: "buttonSpaceButton"
            }, function() {
                e._charactersSpace.setAssignLoading(!0), e._assignGift()
            })), t.createChild("div", {
                className: "warning",
                text: r("ui.connection.assignGiftWarning")
            }), this._hasDom = !0
        }
    }, n.prototype._nextGift = function() {
        var e = this,
            t = this._giftListIndex + 1 >= this._giftList.length;
        if (t) return this.close();
        this._giftListIndex += 1;
        var i = this.position.x,
            n = this.position.y;
        d.tween(this, {
            opacity: 0,
            webkitTransform: "translate3d(" + i + "px," + n + "px,0) scale(0.8)"
        }, {
            time: 150,
            delay: 0,
            easing: "ease-out"
        }, function() {
            d.tween(e, {
                opacity: 1,
                webkitTransform: "translate3d(" + i + "px," + n + "px,0)  scale(1)"
            }, {
                time: 150,
                delay: 0,
                easing: "ease-out"
            }, function() {
                e._updateGift()
            })
        })
    }, n.prototype._assignGift = function() {
        if (this._selectedCharaId) {
            var e = this._giftList[this._giftListIndex];
            e && window.gui.gifts.assignGift(e.uid, this._selectedCharaId)
        }
    }, n.prototype._updateGift = function() {
        var e = this._giftList[this._giftListIndex] || {};
        this._itemSpace.update(e)
    }, n.prototype._updateCharactersSpace = function() {
        this._charactersSpace.update(this._characterList)
    }
}
