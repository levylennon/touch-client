function(e, t, i) {
    function n() {
        u.call(this, {
            className: "HelpWindow",
            title: p("ui.helpWindow.title"),
            positionInfo: {
                left: "0",
                bottom: "0",
                width: "100%",
                height: "100%"
            }
        }), this.once("open", function() {
            this._setupDom()
        }), this.on("open", function(e) {
            if (void 0 !== e.part && void 0 !== e.subPart && _[e.part] && _[e.part].subParts[e.subPart]) {
                M = e.part, g = e.subPart;
                var t = this._summaryList.getItemElt(M);
                this._summaryList.deployItem(t, !0);
                var i = t.subitemList.getChildren()[g];
                this._summaryList.selectAndShowSubitem(i)
            }
            this._setContent()
        })
    }

    function o(e, t) {
        for (var i = [], n = 0; n < e.length; n++) i.push({
            text: p(e[n].title),
            details: p(e[n].text),
            forbiddenLanguages: e[n].forbiddenLanguages,
            i: t,
            j: n
        });
        return i
    }

    function a(e) {
        for (var t = 0; t < e.length; t++)
            if (window.Config.language === e[t]) return !1;
        return !0
    }

    function r(e) {
        return e.info.subList
    }

    function s(e, t) {
        var i = e.info.subList;
        return a(i[t].forbiddenLanguages)
    }

    function c(e) {
        for (var t = e.info.subList, i = 0; i < t.length; i++)
            if (a(t[i].forbiddenLanguages)) return !0;
        return !1
    }

    function l(e) {
        var t = e.data;
        M = t.i, g = t.j, this.myWindow._setContent(t)
    }
    i(1364);
    var d = i(56)
        .inherits,
        u = i(70),
        p = i(17)
        .getText,
        h = i(1060),
        f = i(453),
        b = i(765),
        m = i(502),
        M = -1,
        g = -1,
        _ = [{
            title: "ui.helpWindow.category1",
            subParts: [{
                title: "ui.helpWindow.category1sub1",
                text: "ui.helpWindow.category1sub1text",
                forbiddenLanguages: []
            }]
        }, {
            title: "ui.helpWindow.category3",
            subParts: [{
                title: "ui.helpWindow.category3sub1",
                text: "ui.helpWindow.category3sub1text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category3sub2",
                text: "ui.helpWindow.category3sub2text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category3sub3",
                text: "ui.helpWindow.category3sub3text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category3sub4",
                text: "ui.helpWindow.category3sub4text",
                forbiddenLanguages: []
            }]
        }, {
            title: "ui.helpWindow.category2",
            subParts: [{
                title: "ui.helpWindow.category2sub1",
                text: "ui.helpWindow.category2sub1text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub2",
                text: "ui.helpWindow.category2sub2text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub3",
                text: "ui.helpWindow.category2sub3text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub4",
                text: "ui.helpWindow.category2sub4text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub18",
                text: "ui.helpWindow.category2sub18text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub5",
                text: "ui.helpWindow.category2sub5text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub6",
                text: "ui.helpWindow.category2sub6text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub7",
                text: "ui.helpWindow.category2sub7text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub8",
                text: "ui.helpWindow.category2sub8text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub9",
                text: "ui.helpWindow.category2sub9text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub10",
                text: "ui.helpWindow.category2sub10text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub11",
                text: "ui.helpWindow.category2sub11text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub12",
                text: "ui.helpWindow.category2sub12text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub26",
                text: "ui.helpWindow.category2sub26text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub13",
                text: "ui.helpWindow.category2sub13text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub14",
                text: "ui.helpWindow.category2sub14text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub15",
                text: "ui.helpWindow.category2sub15text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub16",
                text: "ui.helpWindow.category2sub16text1",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub17",
                text: "ui.helpWindow.category2sub17text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub19",
                text: "ui.helpWindow.category2sub19text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub20",
                text: "ui.helpWindow.category2sub20text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub21",
                text: "ui.helpWindow.category2sub21text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub22",
                text: "ui.helpWindow.category2sub22text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub23",
                text: "ui.helpWindow.category2sub23text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub24",
                text: "ui.helpWindow.category2sub24text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category2sub25",
                text: "ui.helpWindow.category2sub25text",
                forbiddenLanguages: []
            }]
        }, {
            title: "ui.helpWindow.category4",
            subParts: [{
                title: "ui.helpWindow.category4sub1",
                text: "ui.helpWindow.category4sub1text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category4sub2",
                text: "ui.helpWindow.category4sub2text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category4sub3",
                text: "ui.helpWindow.category4sub3text",
                forbiddenLanguages: []
            }]
        }, {
            title: "ui.helpWindow.category5",
            subParts: [{
                title: "ui.helpWindow.category5sub1",
                text: "ui.helpWindow.category5sub1text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category5sub2",
                text: "ui.helpWindow.category5sub2text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category5sub3",
                text: "ui.helpWindow.category5sub3text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category5sub4",
                text: "ui.helpWindow.category5sub4text",
                forbiddenLanguages: ["en", "de", "es", "it", "pt"]
            }, {
                title: "ui.helpWindow.category5sub5",
                text: "ui.helpWindow.category5sub5text",
                forbiddenLanguages: ["en", "de", "es", "it", "pt"]
            }]
        }, {
            title: "ui.helpWindow.category6",
            subParts: [{
                title: "ui.helpWindow.category6sub1",
                text: "ui.helpWindow.category6sub1text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category6sub2",
                text: "ui.helpWindow.category6sub2text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category6sub3",
                text: "ui.helpWindow.category6sub3text",
                forbiddenLanguages: []
            }]
        }, {
            title: "ui.helpWindow.category7",
            subParts: [{
                title: "ui.helpWindow.category7sub2",
                text: "ui.helpWindow.category7sub2text",
                forbiddenLanguages: []
            }, {
                title: "ui.helpWindow.category7sub3",
                text: "ui.helpWindow.category7sub3text",
                forbiddenLanguages: []
            }]
        }];
    d(n, u), e.exports = n, n.prototype._getDopeulsData = function() {
        for (var e = ["20", "40", "60", "80", "100", "120", "140", "160", "180", "200"], t = ["1", "2", "3", "5", "6", "8", "10", "12", "14", "17"], i = ["2450", "8100", "18150", "33800", "56250", "86700", "126350", "176400", "238050", "312500"], n = ["1400", "3600", "6600", "10400", "15000", "20400", "26600", "33600", "41400", "50000"], o = {}, a = 0; a < 10; a += 1) o[a] = {
            level: e[a],
            nbrDoplon: t[a],
            expPerQuest: i[a],
            expPerFight: n[a]
        };
        return o
    }, n.prototype._setupDom = function() {
        this.body = this.windowBody.createChild("div", {
            className: "helpBody"
        });
        var e = this.body.createChild("div", {
                className: "col1"
            }),
            t = this.body.createChild("div", {
                className: "col2"
            });
        e.createChild("div", {
            className: "col1Header",
            text: p("ui.helpWindow.menuTitle")
        });
        var i = this._summaryList = new h({
            noBreadcrumb: !0
        });
        i.myWindow = this, i.setSubitemsGetter(r), i.setFilter(c, s);
        for (var n = 0; n < _.length; n++) {
            var a = {
                id: n,
                subList: o(_[n].subParts, n)
            };
            i.addItem(p(_[n].title), a)
        }
        i.getDom(e), i.on("subitemSelected", l);
        var d = this._mainScroller = t.appendChild(new f({
                className: "col2Scroller"
            })),
            u = d.content.createChild("div", {
                className: "scrollBlock"
            });
        this._title = u.createChild("h2", {
            className: "contentTitle"
        }), this._content = u.createChild("div", {
            className: "content"
        })
    }, n.prototype._setContent = function(e) {
        if (this._title.clearContent(), this._content.clearContent(), M !== -1 && g !== -1)
            if (e || (e = {}, e.text = p(_[M].subParts[g].title), e.details = p(_[M].subParts[g].text)), this._title.setText(e.text), 2 === M && 17 === g) {
                this._content.appendChild(m.process(e.details));
                var t = [{
                        id: "level",
                        header: p("ui.helpWindow.category2sub16table1"),
                        sort: !1
                    }, {
                        id: "nbrDoplon",
                        header: p("ui.helpWindow.category2sub16table2"),
                        sort: !1
                    }, {
                        id: "expPerQuest",
                        header: p("ui.helpWindow.category2sub16table3"),
                        sort: !1
                    }, {
                        id: "expPerFight",
                        header: p("ui.helpWindow.category2sub16table4"),
                        sort: !1
                    }],
                    i = this._getDopeulsData();
                this._content.table = this._content.appendChild(new b(t, (!1), {
                    clickable: !1
                })), this._content.table.scroller.setEnable(!1), this._content.table.addMap(i), this._content.appendChild(m.process(p("ui.helpWindow.category2sub16text2")))
            } else this._content.appendChild(m.process(e.details));
        else this._content.setText(p("ui.helpWindow.defaultText"));
        this._mainScroller.refresh()
    }, n.prototype._resetSelectedSubCatElement = function() {
        this.selectedSubCatElement && (this.selectedSubCatElement.delClassNames("selected"), this.selectedSubCatElement = null)
    }
}
