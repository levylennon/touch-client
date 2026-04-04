function(e, t, i) {
    function n() {
        function e() {
            var e = window.isoEngine,
                i = e.mapRenderer.interactiveElements,
                n = i[this.elementId],
                o = this.skill;
            e.lastContextualMenuSkillId = o.skillId, e.actionQueue.enqueueInteractive(n.elementId, n.elementTypeId, function() {
                e.queueUseInteractive(n.elementId, o.skillInstanceUid)
            }), t.close()
        }
        r.call(this);
        var t = this;
        this.once("open", function() {
            this._setupDom()
        }), this.on("open", function(t, i) {
            function n(t, i) {
                var n = t._name || "skill " + t.skillId,
                    o = r.actionsContainer.appendChild(new l({
                        text: n,
                        className: "cmButton"
                    }, e));
                return i ? void o.disable() : (o.elementId = s.elementId, void(o.skill = t))
            }
            var a, r = this,
                s = t || {};
            if (s._isDoor)
                if (a = window.gui.playerData.position.getHousePropertiesById(s._selectedIntanceId)) {
                    var f = d.getWindow("houseBuySell");
                    f.prepareDialog(a.modelId, a.ownerName, a._displayedName);
                    var b = a.ownerName,
                        m = a.status;
                    b = m === p.ABANDONED ? c("ui.common.houseWithNoOwner") : b === window.gui.playerData.identification.uniqueNickname.toString() ? c("ui.common.myHouse") : c("ui.house.homeOf", a._displayedName), this.banner.setContent({
                        house: {
                            houseOwner: b,
                            houseName: a._name,
                            houseId: a.houseId,
                            forSale: a.isOnSale,
                            isClosed: a.isClosed
                        },
                        guild: a.guildInfo
                    }), this._displayHeader(!0)
                } else this._displayHeader(!1);
            else s._name ? (this.banner.setContent({
                name: s._name
            }), this._displayHeader(!0)) : this._displayHeader(!1);
            if (this.actionsContainer.clearContent(), s.elementTypeId === o.ELEMENT_TYPE_ID.PADDOCK) {
                var M = window.isoEngine.mapRenderer.getCurrentPaddockInstanceProperties();
                if (M.locked && M.status === p.SOON_TO_BE_PUT_BACK_ON_SALE) return this.actionsContainer.createChild("div", {
                    className: "cmButton",
                    text: c("ui.social.paddockWithNoOwner")
                }), i()
            }
            var g, _, A = window.isoEngine.mapRenderer,
                O = A.isFarmOnMap(),
                v = O ? A.getCurrentPaddockInstanceProperties()
                .farmId.toString() : "-1",
                y = O ? A.getCurrentPaddockInstanceProperties()
                .doorId : -1;
            for (g = 0, _ = s.enabledSkills.length; g < _; g++)(!s._isDoor && y !== s.elementId || s._isDoor && s.enabledSkills[g].parameters === s._selectedIntanceId.toString() || O && y === s.elementId && s.enabledSkills[g].parameters === v) && n(s.enabledSkills[g]);
            for (g = 0, _ = s.disabledSkills.length; g < _; g++) n(s.disabledSkills[g], !0);
            0 === s.enabledSkills.length && s.disabledSkills.length > 0 && h(s.elementTypeId, s.disabledSkills);
            var z = window.gui.playerData,
                w = z.hasRight(u.JUMP_HOUSE),
                T = z.adminMenu.getAdminMenuId();
            w && null !== T && a && "?" !== a.ownerName && (r.admin = r.actionsContainer.appendChild(new l({
                text: "Admin",
                className: "cmButton"
            }, function() {
                var e = {
                    name: "*" + a.ownerName,
                    houseId: a.houseId
                };
                window.gui.closeContextualMenu(), window.gui.openContextualMenuAround("admin", r.admin, e), r.emit("close")
            }))), i()
        })
    }
    var o = i(13),
        a = i(56)
        .inherits,
        r = i(450),
        s = i(464),
        c = i(17)
        .getText,
        l = i(86),
        d = i(52),
        u = i(466),
        p = i(443),
        h = i(467)
        .displayNotification;
    a(n, r), e.exports = n, n.prototype._setupDom = function() {
        this.banner = this.header.appendChild(new s);
        var e = this.entryList;
        this.actionsContainer = e.createChild("div"), this._addCancel()
    }
}
