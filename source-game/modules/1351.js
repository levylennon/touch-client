function(e, t, i) {
    function n() {
        r.call(this, "div", {
            className: ["panel", "generalTab"],
            name: "general"
        });
        var e = this;
        this.openedTabId = null, this.once("open", function() {
            e._setupDom()
        }), this.on("open", function() {
            var e = window.gui.playerData.ToaData,
                t = e.current.score,
                i = l.getStepsData();
            this._mapLocationButton && this._mapLocationButton.destroy(), i ? (this._score.delClassNames("unavailable"), this._score.setText(o("ui.common.score") + o("ui.common.colon") + t)) : (this._score.addClassNames("unavailable"), this._score.setText(o("ui.toa.ascensionClosed")));
            var n = e.isQuestAccomplished(),
                a = {
                    type: n ? "zaap" : "quest",
                    x: n ? d : p,
                    y: n ? u : h
                };
            this._mapLocationButton = this._localisationBox.appendChild(new c(a))
        })
    }
    i(1352);
    var o = i(17)
        .getText,
        a = i(56)
        .inherits,
        r = i(72),
        s = i(453),
        c = i(1062)
        .MapLocationButton,
        l = i(1353),
        d = -73,
        u = -17,
        p = -33,
        h = -11;
    a(n, r), e.exports = n, n.prototype._setupDom = function() {
        var e = this.createChild("div", {
                className: "contentBlock"
            }),
            t = this._mainScroller = e.appendChild(new s({
                className: "ToaScroller"
            })),
            i = t.content.createChild("div", {
                className: "scrollBlock"
            });
        this._createContent(i), t.refresh()
    }, n.prototype._createContent = function(e) {
        var t = e.createChild("div", {
                className: "generalContent"
            }),
            i = t.createChild("div", {
                className: "introBlock"
            }),
            n = i.createChild("div", {
                className: "col1"
            }),
            a = n.createChild("div", {
                className: "titleHeaderContentBlock"
            });
        a.createChild("div", {
                className: "title"
            })
            .setHtml(o("ui.toa.welcome"));
        var r = i.createChild("div", {
                className: "col2"
            }),
            s = r.createChild("div", {
                className: "scoreBoxHeaderContentBlock"
            });
        this._score = s.createChild("div", {
                className: "playerScore"
            }), n.createChild("div", {
                className: "description"
            })
            .setHtml(o("ui.toa.welcomeText"));
        var c = this._localisationBox = r.createChild("div", {
            className: "localisationBox"
        });
        c.createChild("div", {
            className: "locDescription",
            text: o("ui.toa.localisation")
        }), t.createChild("hr", {
            className: "separator"
        });
        var d = t.createChild("div", {
                className: "rewardsBlock"
            }),
            u = d.createChild("div", {
                className: "rewardsHeader"
            }),
            p = u.createChild("div", {
                className: "rewardsTitleBox"
            });
        p.createChild("div", {
                className: "title"
            })
            .setHtml(o("ui.toa.rewards"));
        var h = d.createChild("div", {
                className: "rewardsContent"
            }),
            f = window.gui.playerData.ToaData,
            b = [{
                id: "rankName",
                header: o("ui.toa.rewardsBoardRank"),
                sort: !1
            }, {
                id: "score",
                header: o("ui.toa.rewardsBoardScore"),
                sort: !1
            }, {
                id: "details",
                header: o("ui.toa.maintabLadder"),
                sort: !1
            }, {
                id: "rewards",
                header: o("ui.grimoire.quest.rewards"),
                format: function(e) {
                    return l.displayRewardsDetails(e.id)
                },
                sort: !1
            }];
        l.createTable(h, b, !1), l.setContent(h, f.ranks), h.createChild("div", {
                className: "description"
            })
            .setHtml(o("ui.toa.rewardsText")), t.createChild("hr", {
                className: "separator"
            });
        var m = t.createChild("div", {
                className: "scoreBlock"
            }),
            M = m.createChild("div", {
                className: "scoreHeader"
            }),
            g = M.createChild("div", {
                className: "scoreTitleBox"
            });
        g.createChild("div", {
                className: "title"
            })
            .setHtml(o("ui.toa.scoring"));
        var _ = m.createChild("div", {
            className: "scoreContent"
        });
        _.createChild("div", {
                className: "description"
            })
            .setHtml(o("ui.toa.scoringText")), t.createChild("hr", {
                className: "separator"
            });
        var A = t.createChild("div", {
                className: "rulesBlock"
            }),
            O = A.createChild("div", {
                className: "rulesHeader"
            }),
            v = O.createChild("div", {
                className: "rulesTitleBox"
            });
        v.createChild("div", {
                className: "title"
            })
            .setHtml(o("ui.toa.rules"));
        var y = A.createChild("div", {
            className: "rulesContent"
        });
        y.createChild("div", {
                className: "description"
            })
            .setHtml(o("ui.toa.rulesText"))
    }
}
