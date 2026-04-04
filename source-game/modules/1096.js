function(e, t, i) {
    function n() {
        function e(e) {
            t.windowTitle.setText(e.name + " - " + r("ui.common.short.level") + " " + e.level), t._updateContent(e)
        }
        var t = this;
        o.call(this, {
            className: "GuildMemberRightsWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 450,
                height: 490
            }
        }), this.rightCheckboxes = [], this.rightNames = [{
            right: b.GUILD_RIGHT_ALMOST_BOSS,
            label: r("ui.social.guildRightsAllRights")
        }, {
            right: b.GUILD_RIGHT_MANAGE_GUILD_BOOSTS,
            label: r("ui.social.guildRightsBoost")
        }, {
            right: b.GUILD_RIGHT_MANAGE_RIGHTS,
            label: r("ui.social.guildRightsRights")
        }, {
            right: b.GUILD_RIGHT_INVITE_NEW_MEMBERS,
            label: r("ui.social.guildRightsInvit")
        }, {
            right: b.GUILD_RIGHT_BAN_MEMBERS,
            label: r("ui.social.guildRightsBann")
        }, {
            right: b.GUILD_RIGHT_MANAGE_XP_CONTRIBUTION,
            label: r("ui.social.guildRightsPercentXP")
        }, {
            right: b.GUILD_RIGHT_MANAGE_MY_XP_CONTRIBUTION,
            label: r("ui.social.guildRightManageOwnXP")
        }, {
            right: b.GUILD_RIGHT_MANAGE_RANKS,
            label: r("ui.social.guildRightsRank")
        }, {
            right: b.GUILD_RIGHT_DEFENSE_PRIORITY,
            label: r("ui.social.guildRightsPrioritizeMe")
        }, {
            right: b.GUILD_RIGHT_HIRE_TAX_COLLECTOR,
            label: r("ui.social.guildRightsHiretax")
        }, {
            right: b.GUILD_RIGHT_COLLECT,
            label: r("ui.social.guildRightsCollect")
        }, {
            right: b.GUILD_RIGHT_COLLECT_MY_TAX_COLLECTOR,
            label: r("ui.social.guildRightsCollectMy")
        }, {
            right: b.GUILD_RIGHT_USE_FARMS,
            label: r("ui.social.guildRightsMountParkUse")
        }, {
            right: b.GUILD_RIGHT_ORGANIZE_FARMS,
            label: r("ui.social.guildRightsMountParkArrange")
        }, {
            right: b.GUILD_RIGHT_TAKE_OTHERS_MOUNTS_IN_PADDOCKS,
            label: r("ui.social.guildRightsManageOtherMount")
        }, {
            right: b.GUILD_RIGHT_MANAGE_ALLIANCE_PRISM,
            label: r("ui.social.guildRightsSetAlliancePrism")
        }, {
            right: b.GUILD_RIGHT_TALK_IN_ALLIANCE_CHAN,
            label: r("ui.social.guildRightsTalkInAllianceChannel")
        }], this.minXpGivenPercentage = 0, this.maxXpGivenPercentage = 100, this.once("open", function(i) {
            var n = [],
                o = window.gui.databases.RankNames;
            for (var a in o) n.push(o[a]);
            u.sortObjectInArray(n, "order"), t.rankNames = n, t._setupDom(), e(i), this.on("open", e)
        })
    }
    i(1097);
    var o = i(70),
        a = i(56)
        .inherits,
        r = i(17)
        .getText,
        s = i(17)
        .processText,
        c = i(86)
        .DofusButton,
        l = i(594),
        d = i(945),
        u = i(16),
        p = i(765),
        h = i(421),
        f = i(52),
        b = i(520);
    a(n, o), e.exports = n, n.prototype._updateContent = function(e) {
        var t = this.selector;
        if (t) {
            var i = this.rank,
                n = window.gui.playerData,
                o = n.guild,
                a = e.id === n.id,
                r = e.id === o.current.leaderId,
                c = n.id === o.current.leaderId,
                l = !a && !r;
            this.memberInfo = {
                memberId: e.id,
                experienceGivenPercent: e.experienceGivenPercent,
                name: e.name,
                rank: e.rank
            }, t.toggleOption(0, c), t.setValue(e.rank);
            var d, u = [];
            for (d = 0; d < this.rankNames.length; d++) {
                var p = s(this.rankNames[d].nameId, e.sex ? 1 : 0);
                u.push(p)
            }
            t.changeTexts(u), i.setText(s(window.gui.databases.RankNames[e.rank].nameId, e.sex ? 1 : 0)), this.xpContributionLabel.setText(e.experienceGivenPercent + "%");
            var h, f = o.checkRight(b.GUILD_RIGHT_ALMOST_BOSS, e.rights),
                m = o.hasRight(b.GUILD_RIGHT_MANAGE_RIGHTS);
            for (d = 0; d < this.rightNames.length; d++) {
                var M = this.rightNames[d].right;
                h = this.rightCheckboxes[d], h && (r || o.checkRight(M, e.rights) ? h.activate() : h.deactivate(), h.disable(), (c || m && l && o.hasRight(M)) && h.enable())
            }
            if (this.setXpButton.disable(), (o.hasRight(b.GUILD_RIGHT_MANAGE_XP_CONTRIBUTION) || o.hasRight(b.GUILD_RIGHT_MANAGE_MY_XP_CONTRIBUTION)) && this.setXpButton.enable(), !r && o.hasRight(b.GUILD_RIGHT_MANAGE_RANKS) || f) return t.show(), i.hide(), void this.rankTitleText.delClassNames("noMargin");
            t.hide(), i.show(), this.rankTitleText.addClassNames("noMargin")
        }
    }, n.prototype._setupDom = function() {
        var e, t, i = this,
            n = this.windowBody.createChild("div", {
                className: "upperPanel"
            }),
            o = n.createChild("div", {
                className: "container"
            });
        this.rankTitleText = o.createChild("div", {
            className: "text",
            text: r("ui.social.guildRank")
        }), this.rank = o.createChild("div", {
            className: "rank"
        }), this.selector = o.appendChild(new d);
        var a = this.rankNames;
        for (e = 0, t = a.length; e < t; e += 1) this.selector.addOption(a[e].nameId, a[e].id);
        this.selector.on("change", function(e, t) {
            return 1 === parseInt(e, 10) ? window.gui.openConfirmPopup({
                title: r("ui.popup.warning"),
                message: r("ui.social.doUGiveRights", i.memberInfo.name),
                cb: function(n) {
                    return n ? void(i.memberInfo.rank = e) : void i.selector.setValue(t)
                }
            }) : void(i.memberInfo.rank = e)
        });
        var s = n.createChild("div", {
            className: ["container", "XpToGuild"]
        });
        s.createChild("div", {
            className: "text",
            text: r("ui.social.percentXpFull")
        }), this.setXpButton = s.appendChild(new c("", {
            className: "setXpButton"
        }));
        var u = s.appendChild(new h);
        u.on("confirm", function(e) {
            i.xpContributionLabel.setText(e + "%"), i.memberInfo.experienceGivenPercent = e
        }), this.setXpButton.on("tap", function() {
            u.open({
                min: i.minXpGivenPercentage,
                max: i.maxXpGivenPercentage,
                defaultValue: parseInt(i.xpContributionLabel.getText(), 10)
            })
        }), this.xpContributionLabel = s.createChild("div", {
            className: "xpLabel",
            text: "0%"
        });
        for (var b = this.windowBody.appendChild(new p([{
                id: "name"
            }, {
                id: "checkbox"
            }], null, {
                noHeader: !0
            })), m = 0; m < this.rightNames.length; m++) {
            var M = this.rightNames[m],
                g = new l("");
            this.rightCheckboxes.push(g), b.addRow({
                name: M.label,
                checkbox: g
            })
        }
        var _ = this.windowBody.createChild("div", {
                className: "buttonContainer"
            }),
            A = _.appendChild(new c(r("ui.common.validation")));
        A.on("tap", function() {
            i.memberInfo.rights = i.getRightsMask(), window.dofus.sendMessage("GuildChangeMemberParametersMessage", i.memberInfo), f.close(i.id)
        }), this.on("close", function() {
            u.hide()
        })
    }, n.prototype.getRightsMask = function() {
        for (var e = 0, t = 0; t < this.rightNames.length; t++) {
            var i = this.rightCheckboxes[t];
            i && i.isActivate() && (e += this.rightNames[t].right)
        }
        return e
    }
}
