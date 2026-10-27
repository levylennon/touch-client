function(e, t, i) {
    function n(e) {
        function t(e) {
            var t = d.NEW_SERVER_IDS;
            e.isNewServer = t.indexOf(e.id) !== -1 && (e.isRestricted || e.statusId === u.ONLINE);
            var i = e.flag.getParent();
            if (i) {
                var n = i.getParent();
                if (n) return n.toggleClassName("newServerRow", e.isNewServer), e.isNewServer ? new c("div", {
                    className: "newServerIcon"
                }) : void 0
            }
        }

        function i(e) {
            var t = new c("div", {
                className: "persosDiv"
            });
            return e.charactersCount > 0 && (t.createChild("div", {
                className: "persosImage"
            }), t.createChild("div", {
                text: "x" + e.charactersCount,
                className: "persosText"
            })), t
        }
        e = e || {}, a.call(this, {
            className: "ServerSelection",
            title: e.title || r("ui.sersel.choseServer"),
            isFullScreen: !0,
            hidden: !0
        }), this.addClassNames(e.className);
        var n = this.windowBody;
        this.closeButton.setText(r("ui.common.cancel")), n.createChild("div", {
            className: "bg"
        });
        var o = n.createChild("div", {
                className: "bgParent"
            }),
            l = o.createChild("div", {
                className: "bgLeft"
            }),
            p = o.createChild("div", {
                className: "bgRight"
            });
        this.serverImage = l.createChild("div", {
            className: "serverImage"
        });
        var h = l.createChild("div", {
            className: "whiteBorders"
        });
        h.createChild("div", {
            className: "whiteBorderLeft"
        }), h.createChild("div", {
            className: "whiteBorderRight"
        }), p.createChild("div", {
            className: "whiteGradient"
        }), this.mainDiv = n.createChild("div", {
            className: "mainDiv"
        });
        var f = [{
            id: "flag"
        }, {
            id: "name",
            header: r("ui.common.name")
        }, {
            id: "newServer",
            format: t
        }, {
            id: "population",
            header: r("ui.sersel.population")
        }, {
            id: "creationDate",
            header: r("ui.sersel.creation")
        }, {
            id: "persos",
            header: r("ui.sersel.char"),
            format: i
        }, {
            id: "state",
            header: r("ui.sersel.state")
        }];
        this.table = this.mainDiv.appendChild(new s(f)), this.buttonsDiv = this.mainDiv.createChild("div", {
            className: "buttonsDiv"
        })
    }
    i(1132);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(17)
        .getText,
        s = i(765),
        c = i(72),
        l = i(21),
        d = i(13),
        u = i(761),
        p = 2;
    o(n, a), e.exports = n, n.prototype.updateServerLine = function(e) {
        var t = {
                0: r("ui.server.state.unknown"),
                1: r("ui.server.state.offline"),
                2: r("ui.server.state.starting"),
                3: r("ui.server.state.online"),
                4: r("ui.server.state.nojoin"),
                5: r("ui.server.state.saving"),
                6: r("ui.server.state.stoping"),
                7: r("ui.server.state.full")
            },
            i = {};
        i.id = e.id, i.isSelectable = e.isSelectable;
        var n = d.RESTRICTED_SERVER_IDS.indexOf(e.id) !== -1;
        i.isRestricted = n;
        var o = n && 3 === e.status,
            a = o ? r("ui.server.state.restricted") : t[e.status],
            s = o ? p : e.status,
            u = window.gui.serversData.staticContent,
            h = window.gui.serversData.staticContent.data[e.id] || {};
        i.flag = new c("div", {
            className: ["flagImage", "flag_" + h.communityId]
        }), i.statusId = s, i.state = new c("div", {
            className: "statusDiv"
        }), i.state.createChild("div", {
            className: ["statusImage", "status_" + s]
        }), i.state.createChild("div", {
            text: a,
            className: "statusText"
        });
        var f = u.populations[h.populationId] || {};
        i.population = f.nameId || "n/a";
        var b = new Date(h.openingDate || 0),
            m = l.leadWithZero(b.getDate()),
            M = l.leadWithZero(b.getMonth() + 1);
        i.creationDate = m + "/" + M + "/" + b.getFullYear(), i.name = h.nameId || e.id, i.charactersCount = e.charactersCount, i.date = e.date, this.table.updateRow(i, i.id)
    }
}
