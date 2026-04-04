function(e, t, i) {
    function n() {
        r.call(this, {
            className: "GroupSeekerWindow",
            title: l("ui.groupSeeker.title"),
            positionInfo: {
                left: "c",
                top: "c",
                width: 550,
                height: 550
            },
            helpTab: {
                part: 2,
                subPart: 12
            },
            changeDefaultOpenAction: !0
        }), this.mustReload = !0;
        var e = this;
        this.on("open", function() {
            if (this._dungeonsList.getDom(this.body), this._addCountersAndCheckboxes(), this.selectedCategory !== -1) {
                var e = this._dungeonsList.getItemElt(this.selectedCategory);
                this._dungeonsList.deployItem(e, !0);
                var t = e.subitemList.getChild(this.selectedDungeon);
                this._dungeonsList.list.showElement(t)
            }
        }), this.on("close", function() {
            this.body.clearContent()
        }), f.on("DungeonsListMessage", function(t) {
            if (t.classifications.length < 1) return void window.gui.openSimplePopup(l("ui.groupSeeker.seekImpossible"));
            if (t.dungeonId) {
                h.reset();
                var i = t._enrichData.dungeons[t.dungeonId].dungeonType;
                h.tagDungeon(t.dungeonId, !0, i)
            }
            h.clearUnavailableTaggedDungeons(t._enrichData.dungeons), e._setupDom(t), e.openState && e.body.clearContent(), u.open(e.id, {
                bypassDefaultAction: !0
            })
        }), window.gui.on("disconnect", function() {
            e._pending = !1, h.reset()
        }), window.gui.playerData.MatchmakingData.on("groupSeekerStatusUpdate", function(t) {
            e._pending = !1, e.openState && (h.isMatchmakingSuccessfull(t.statusId) && h.reset(), this.isOnDungeonQueue() && t.data.length && h.setTaggedList(t), e._refreshList(), e._setStatus())
        }), f.on("MatchmakingErrorMessage", function() {
            e._pending = !1, e.openState && e._setStatus()
        }), window.gui.on("GameFightPlacementPossiblePositionsMessage", function() {
            e.openState && e._setStatus()
        }), window.gui.on("GameFightEndMessage", function() {
            e.openState && e._setStatus()
        }), f.on("MatchmakingProposalUpdateMessage", function() {
            e._pending = !1, e.openState && e._setStatus()
        }), window.gui.playerData.partyData.on("partyLeaderUpdate", function() {
            e.openState && e._setStatus()
        }), window.gui.playerData.partyData.on("partyNewMember", function() {
            e.openState && e.defaultOpenAction()
        }), window.gui.playerData.partyData.on("PartyLeaveMessage", function() {
            e.openState && e.defaultOpenAction()
        }), window.gui.playerData.partyData.on("partyMemberLeaving", function() {
            e.openState && e.defaultOpenAction()
        }), this._header = this.windowBody.createChild("div", {
            className: "header",
            text: l("ui.groupSeeker.header")
        }), this.body = this.windowBody.createChild("div", {
            className: "body"
        }), this._dungeonsList = new d({
            emitOnSelectItem: !0
        }), this._dungeonsList.myWindow = this, this._dungeonsList.setSubitemsGetter(o), this._dungeonsList.on("itemDeployed", function(e) {
            for (var t = e.subitemList.getChildren(), i = 0; i < t.length; i += 1) t[i].toggleClassName("completed", t[i].data.finished)
        }), this._bottom = this.windowBody.createChild("div", {
            className: "bottom"
        }), this._buttonWrapperSubscribe = this._bottom.createChild("div", {
            className: "buttonWrapperSubscribe"
        }), this._buttonWrapperPending = this._bottom.createChild("div", {
            className: "buttonWrapperPending"
        }), this._subscribeButton = this._buttonWrapperSubscribe.appendChild(new s({
            text: l("ui.groupSeeker.subscribe"),
            className: ["greenButton", "cmButton"]
        }, function() {
            e._pending !== !0 && (e._pending = !0, e._setButtonsAvailability(), h.seek())
        })), this._cancelButton = this._buttonWrapperPending.appendChild(new s({
            text: l("ui.groupSeeker.cancel"),
            className: ["greenButton", "cmButton"]
        }, function() {
            e._pending !== !0 && (e._pending = !0, e._setButtonsAvailability(), h.cancel())
        })), this._buttonWrapperPending.createChild("div", {
            className: "text",
            text: l("ui.groupSeeker.pending")
        }), this._buttonWrapperPending.hide(), this._buttonWrapperProposalUpdate = this._bottom.createChild("div", {
            className: "buttonWrapperPending"
        }), this._proposalCancelButton = this._buttonWrapperProposalUpdate.appendChild(new s({
            text: l("ui.groupSeeker.cancel"),
            className: ["greenButton", "cmButton"]
        }, function() {
            e._pending !== !0 && (e._pending = !0, e._setButtonsAvailability(), h.cancel())
        })), this._proposalUpdateButton = this._buttonWrapperProposalUpdate.appendChild(new s({
            text: l("ui.groupSeeker.update"),
            className: ["greenButton", "cmButton"]
        }, function() {
            e._pending !== !0 && (e._pending = !0, e._setButtonsAvailability(), h.update())
        })), this._buttonWrapperProposalUpdate.hide()
    }

    function o(e) {
        return e.info.subList
    }
    i(1406);
    var a = i(56)
        .inherits,
        r = i(70),
        s = i(86),
        c = i(72),
        l = i(17)
        .getText,
        d = i(1060),
        u = i(52),
        p = i(594),
        h = i(1407),
        f = i(105),
        b = i(1408);
    a(n, r), e.exports = n, n.prototype._addCountersAndCheckboxes = function() {
        for (var e = 0; e < this._dungeonsList.getItemCount(); e += 1) {
            var t = this._dungeonsList.getItemElt(e),
                i = t.getChildren()[0];
            i.appendChild(t.info.counter), i.appendChild(t.info.checkbox)
        }
    }, n.prototype.defaultOpenAction = function() {
        window.dofus.sendMessage("DungeonsListRequestMessage")
    }, n.prototype._setupDom = function(e) {
        function t(t, i, n) {
            var o = [],
                a = 0,
                r = !1;
            return t.forEach(function(t) {
                o.push(t.beforeText.hasClassName("on")), t.beforeText.hasClassName("on") && a++, t.id === e.dungeonId && (r = !0)
            }), o.indexOf(!1) > -1 ? i.delClassNames("checked") : i.addClassNames("checked"), n.setText(l("ui.groupSeeker.counter", a, t.length)), r
        }

        function i(i, o) {
            for (var a = [], r = 0; r < i.length; r++) {
                var s = i[r].dungeonId,
                    c = i[r].dungeonType,
                    l = h.isDungeonTagged(s) || h.isRaidTagged(s) || h.isCMDungeonTagged(s),
                    d = new p("", {
                        defaultValue: l
                    });
                d._id = s, d._type = c, d.on("change", function(e) {
                    var i = n._dungeonsList.getItemElt(o);
                    if (i) {
                        var a = i.info.subList,
                            r = i.info.checkbox,
                            s = i.info.counter;
                        t(a, r, s), h.tagDungeon(this._id, e, this._type), n._setButtonsAvailability(), n._setStatus()
                    }
                }), a.push({
                    text: e._enrichData.dungeons[s].nameId,
                    id: s,
                    beforeText: d,
                    dungeonType: c,
                    unclickable: !0
                }), n._dungeonsListElement.push(d)
            }
            return a
        }
        this._dungeonsList.clearContent(), this.selectedDungeon = e.dungeonId, this.selectedCategory = -1;
        var n = this;
        this._classificationButtons = [], this._dungeonsListElement = [], Object.keys(e.classifications)
            .forEach(function(o) {
                var a = e.classifications[o];
                if (Object.keys(a)
                    .length) {
                    var r = new c("div", {
                            className: "counter"
                        }),
                        l = function() {
                            var e = this.toggleClassName("checked"),
                                t = n._dungeonsList.getItemElt(this.index)
                                .info.subList;
                            t.forEach(function(t) {
                                t.beforeText.toggleActivation(e)
                            })
                        },
                        d = new s({
                            className: "checkbox",
                            scaleOnPress: !0
                        }, l);
                    d.index = o, n._classificationButtons.push(d);
                    var u = {
                            id: a.classificationId,
                            subList: i(a.dungeons, o),
                            counter: r,
                            checkbox: d
                        },
                        p = e._enrichData.classifications[a.classificationId];
                    if (p) n._dungeonsList.addItem(p.nameId, u);
                    else {
                        for (var h = a.dungeons || [], f = [], b = 0; b < h.length; b += 1) {
                            var m = h[b] || {};
                            f.push(m.dungeonId)
                        }
                        console.error(new Error("Classification data missing for dungeons " + f.join(",")))
                    }
                    var M = t(u.subList, u.checkbox, u.counter);
                    M && (n.selectedCategory = o)
                }
            }), this._setStatus()
    }, n.prototype._refreshList = function() {
        this._dungeonsListElement.forEach(function(e) {
            e.toggleActivation(h.isTagged(e._id), !0)
        }), this._setButtonsAvailability()
    }, n.prototype._setStatus = function() {
        var e = h.isGroupReachingMax(),
            t = h.getRaidsTag(),
            i = h.getDungeonsTag(),
            n = h.getCMDungeonsTag();
        h.canEdit() ? this._header.setText(l("ui.groupSeeker.headerEdit")) : h.isQueued() ? this._header.setText(l("ui.groupSeeker.headerPending")) : e[b.RAID] && t.length > 0 ? this._header.setText(l("ui.groupSeeker.maxPlayerReachedForRaids")) : e[b.CLASSIC] && i.length > 0 ? this._header.setText(l("ui.groupSeeker.maxPlayerReachedForDungeons")) : e[b.CM] && n.length > 0 ? this._header.setText(l("ui.groupSeeker.maxPlayerReachedForDungeons")) : window.gui.playerData.isFighting ? this._header.setText(l("ui.groupSeeker.headerInFight")) : this._header.setText(l("ui.groupSeeker.header")), this._buttonWrapperProposalUpdate.toggleDisplay(h.canEdit()), this._buttonWrapperSubscribe.toggleDisplay(h.canTag()), this._buttonWrapperPending.toggleDisplay(h.isQueued() && !h.canEdit()), this._setButtonsAvailability()
    }, n.prototype._setButtonsAvailability = function() {
        function e() {
            c._subscribeButton.disable(), c._cancelButton.disable(), c._proposalCancelButton.disable(), c._proposalUpdateButton.disable()
        }

        function t() {
            c._subscribeButton.enable(), c._cancelButton.enable(), c._proposalCancelButton.enable(), c._proposalUpdateButton.enable()
        }

        function i() {
            c._classificationButtons.forEach(function(e) {
                e.disable()
            }), c._dungeonsListElement.forEach(function(e) {
                e.disable()
            })
        }

        function n() {
            c._classificationButtons.forEach(function(e) {
                e.enable()
            }), c._dungeonsListElement.forEach(function(e) {
                e.enable()
            })
        }
        var o = h.isGroupReachingMax(),
            a = h.getRaidsTag(),
            r = h.getDungeonsTag(),
            s = h.getCMDungeonsTag(),
            c = this;
        if (!window.gui.playerData.isPlayerClassicGroupLeader()) return e(), i(), this._header.setText(l("ui.groupSeeker.headerNotLeader"));
        if (o[b.CLASSIC] && r.length > 0) this._subscribeButton.disable();
        else if (o[b.RAID] && a.length > 0) this._subscribeButton.disable();
        else if (o[b.CM] && s.length > 0) this._subscribeButton.disable();
        else {
            if ((h.isQueued() && !h.canEdit() || h.isAcceptance()) && !this._pending) return t(), i();
            if (window.gui.playerData.isFighting || r.length < 1 && a.length < 1 && s.length < 1) return n(), this._subscribeButton.disable();
            this._pending ? e() : (n(), t())
        }
    }
}
