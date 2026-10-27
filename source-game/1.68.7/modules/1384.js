function(e, t, i) {
    function n() {
        s.call(this, "div", {
            className: "AlmanaxTab",
            name: "almanax"
        }), this._isRefreshPending = !1;
        var e = this;
        this.on("opened", this._refresh), window.gui.almanaxData.on("almanachUpdate", function() {
            e._showAlmanaxNotification(window.gui.almanaxData.getDate(), window.gui.almanaxData.getMerydeName())
        }), window.gui.scenarioManager.on("stepChanged", function() {
            var e = g.getValue("almanaxLastNotif");
            window.gui.scenarioManager.isBehaviourEnabled(O.DISABLE_ALMANAX_NOTIF) && e > -1 && (window.gui.notificationBar.removeNotification("almanax_" + e), g.setValue("almanaxLastNotif", -1))
        })
    }
    i(1385);
    var o = i(56)
        .inherits,
        a = i(490),
        r = i(86),
        s = i(72),
        c = i(16),
        l = i(88),
        d = l.addTooltip,
        u = l.enableTooltip,
        p = i(17)
        .getText,
        h = i(469),
        f = i(506),
        b = i(502),
        m = i(130),
        M = i(52),
        g = i(60),
        _ = i(32)
        .formatUrlToCssUrl,
        A = i(142),
        O = i(129),
        v = 365,
        y = 954,
        z = -4,
        w = -24,
        T = 13344,
        C = 13345;
    o(n, s), e.exports = n, n.prototype._refresh = function() {
        var e = this;
        this._isRefreshPending || (this._isRefreshPending = !0, this.addClassNames("spinner"), A.getAlmanax(function(t, i, n) {
            if (t) return void e._handleError();
            if (n) return e._updateQuestProgress(), e._isRefreshPending = !1, void e.delClassNames("spinner");
            e.clearContent();
            var o = window.gui.almanaxData.getDate(),
                a = window.gui.almanaxData.getCalendar(),
                r = a.npcId;
            m.getDataArray("Npcs", [r], function(t, n) {
                var a = n && n[0];
                !t && a || (a || t || (t = new Error("Npc data are empty.")), console.error("_refresh for npcId:", r, "date:", o, "error:", t), a = {}), e._createContent(), e._updateQuestProgress(), e._updateAlmanaxData(i, a.nameId || ""), e.delClassNames("spinner"), e._isRefreshPending = !1
            })
        }))
    }, n.prototype._handleError = function() {
        this.clearContent(), this._createRetryButton(), this.delClassNames("spinner"), this._isRefreshPending = !1
    }, n.prototype._createRetryButton = function() {
        var e = this.createChild("div", {
            className: "failureBox"
        });
        e.createChild("div", {
            text: p("ui.common.error") + "..."
        });
        var t = e.appendChild(new r({
                className: "greenButton",
                text: p("tablet.common.retry")
            })),
            i = this;
        t.on("tap", function() {
            i._refresh()
        })
    }, n.prototype._createContent = function() {
        var e = this.createChild("div", {
                className: "col1"
            }),
            t = e.createChild("div", {
                className: "dateBlock"
            });
        this.monthText = t.createChild("div", {
            className: "monthText"
        });
        var i = t.createChild("div", {
            className: "dayBg"
        });
        this.dayNumber = i.createChild("div", {
            className: "dayNumber"
        }), this.yearText = t.createChild("div", {
            className: "yearText"
        });
        var n = t.createChild("div", {
            className: "illusWrapper"
        });
        this.astro = n.createChild("div", {
            className: "smallIllus"
        }), this.monthGod = n.createChild("div", {
            className: "smallIllus"
        });
        var o = t.createChild("div", {
            className: "bottomIllusWrapper"
        });
        this.bottomIllus = o.createChild("div", {
            className: "bottomIllus"
        }), this.linkToCalendar = e.appendChild(b.process('<a href="' + p("ui.almanax.link") + '">' + p("ui.almanax.calendar") + "</a>"));
        var c, l = this.createChild("div", {
            className: "col2"
        });
        c = l.createChild("div");
        var u = c.createChild("div", {
                className: ["block", "saintBlock"]
            }),
            m = u.createChild("div", {
                className: "saintBg"
            });
        this.merydeIllus = m.createChild("div", {
            className: "saintIllus"
        }), this.merydeTitle = u.createChild("div", {
            className: "title"
        }), this.merydeDesc = u.createChild("div", {
            className: "description"
        }), this.instructionText = u.createChild("div", {
            className: "instructionText"
        }), c = l.createChild("div");
        var M = c.createChild("div", {
            className: ["block", "bonusBlock"]
        });
        M.createChild("div", {
            className: ["smallIllus", "bonusIllus"]
        }), this.bonusTitle = M.createChild("div", {
            className: "title"
        }), this.bonusDesc = M.createChild("div", {
            className: "description"
        }), c = l.createChild("div");
        var g = c.createChild("div", {
                className: ["block", "questBlock"]
            }),
            _ = g.createChild("div", {
                className: "questContent"
            }),
            A = _.createChild("div", {
                className: "dolmanaxBg"
            }),
            O = A.createChild("div", {
                className: "dolmanaxIllus"
            });
        h.getItems([T], function(e) {
            return e ? console.error(e) : void O.setStyle("backgroundImage", h.items[T].image)
        }), _.createChild("div", {
            className: "title",
            text: p("ui.almanax.dolmanaxQuest")
        }), this.questDesc = _.createChild("div", {
            className: "description"
        }), _.appendChild(new r({
            className: ["locateButton", "greenButton"],
            text: p("ui.almanax.localizeSanctuary")
        }, function() {
            window.gui.emit("CompassUpdateMessage", {
                type: f.COMPASS_TYPE_SIMPLE,
                worldX: z,
                worldY: w
            })
        }));
        var v = _.createChild("div", {
            className: "progression"
        });
        this.questProgressTitle = v.createChild("div", {
            className: "questProgressTitle"
        }), this.questProgressBar = v.appendChild(new a({
            className: "questProgressBar"
        })), this.astroTooltipTx = new s("div"), d(this.astro, this.astroTooltipTx), this.monthGodTooltipTx = new s("div"), d(this.monthGod, this.monthGodTooltipTx), this.merydeTootipTx = new s("div"), d(this.merydeIllus, this.merydeTootipTx), this.questTooltipTx = new s("div"), d(this.questProgressBar, this.questTooltipTx), d(this.linkToCalendar, p("ui.almanax.goToWebsite"))
    }, n.prototype._updateAlmanaxData = function(e, t) {
        var i = window.gui.almanaxData.getCalendar(),
            n = c.getAlmanaxDate();
        this.dayNumber.setText(n.day), this.monthText.setText(n.monthName), this.yearText.setText(p("ui.common.year", n.year));
        var o = e.event,
            a = e.zodiac,
            r = e.month;
        o || console.error(new Error("_updateAlmanaxData: event data missing")), a || console.error(new Error("_updateAlmanaxData: zodiac data missing")), r || console.error(new Error("_updateAlmanaxData: month data missing")), a.imageUrl || console.error(new Error("_updateAlmanaxData: zodiac image missing for zodiacId " + a.id)), this.astro.setStyle("backgroundImage", _(a.imageUrl)), r.protectorImageUrl || console.error(new Error("_updateAlmanaxData: month image missing for monthId " + r.id)), this.monthGod.setStyle("backgroundImage", _(r.protectorImageUrl)), o.imageUrl || console.error(new Error("_updateAlmanaxData: event image missing for eventId " + o.id)), this.bottomIllus.setStyle("backgroundImage", _(o.imageUrl)), this.merydeTitle.setText(p("ui.almanax.dayMeryde", t)), o.ephemeris || console.error(new Error("_updateAlmanaxData: event ephemeris missing for eventId " + o.id)), this.merydeDesc.setText(o.ephemeris), this.instructionText.setText(p("ui.almanax.offeringTo", t)), this.bonusTitle.setText(p("ui.almanax.dayBonus") + p("ui.common.colon") + i.nameId), this.bonusDesc.setHtml(i.descId), o.bossImageUrl || console.error(new Error("_updateAlmanaxData: event bossimageurl missing for eventId " + o.id)), this.merydeIllus.setStyle("backgroundImage", _(o.bossImageUrl)), a.description || console.error(new Error("_updateAlmanaxData: zodiac description missing for zodiacId " + a.id)), this.astroTooltipTx.setText(a.description), u(this.astro, Boolean(a.description)), r.protectorDesc || console.error(new Error("_updateAlmanaxData: month protector desc missing")), this.monthGodTooltipTx.setText(r.protectorDesc), u(this.monthGod, Boolean(r.protectorDesc)), o.bossText || console.error(new Error("_updateAlmanaxData: event bosstext missing for eventId " + o.id)), this.merydeTootipTx.setText(o.bossText), u(this.merydeIllus, Boolean(o.bossText))
    }, n.prototype._updateQuestProgress = function() {
        if (window.gui.playerData.quests.finished[y]) return this.questDesc.setText(p("ui.almanax.dolmanaxQuestDone")), this.questProgressTitle.setText(p("ui.almanax.questDone")), void this.questProgressBar.setValue(1);
        this.questDesc.setText(p("ui.almanax.dolmanaxQuestDesc")), this.questProgressTitle.setText(p("ui.almanax.questProgress"));
        var e = window.gui.playerData.inventory.getQuantityOfAnItem(C) || 0,
            t = Math.min(e, v);
        this.questProgressBar.setValue(t / v), this.questTooltipTx.setText(p("ui.almanax.calendarSheetsCollected", t, v))
    }, n.prototype._showAlmanaxNotification = function(e, t) {
        if (g.getValue("option-showAlmanaxEveryday") && !window.gui.scenarioManager.isBehaviourEnabled(O.DISABLE_ALMANAX_NOTIF) && g.getValue("almanaxLastNotif") !== e) {
            g.setValue("almanaxLastNotif", e);
            var i = c.getAlmanaxDate(),
                n = window.gui.notificationBar;
            n.newNotification("almanax_" + e, {
                type: n.notificationType.INVITATION,
                title: i.day + " " + i.monthName + " " + i.year,
                text: p("ui.almanax.offeringTo", t),
                buttons: [{
                    label: p("ui.almanax.almanax"),
                    action: function() {
                        M.open("dailyQuest", {
                            tabId: "almanax"
                        })
                    }
                }]
            })
        }
    }
}
