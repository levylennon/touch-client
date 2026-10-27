function(e, t, i) {
    // ## Console Admin Frame 
    function n() {
        function e() {
            t.logScroller.refresh(),
            t.logScroller.goToBottom()
        }
        r.call(this, {
            className: "adminConsoleWindow",
            title: C,
            positionInfo: {
                left: "c",
                top: "c",
                width: 800,
                height: 500
            }
        }),
        f(this, { minWidth: 480, minHeight: 300 });
        var t = this;
        this._searchItem = new g(window.dofus.connectionManager),
        this._searchNpc = new _(window.dofus.connectionManager),
        this.history = [],
        this.historyPointer = 0,
        this.autoScroll = !0,
        this.domCreated = !1,
        this.helpInfo = null,
        this._adminCmdManager = new v,
        this.once("open", function() {
            t._createDom(),
            t._addClientCommands();
            var e = window.gui.playerData,
                i = e.hasRight(A.SHOW_ADMIN_CONSOLE_BUTTON);
            console.error(e.loginName + " (id: " + e.id + ") -> rightForAdminConsole = " + i + ", forcedAccount = " + e.forcedAccount + ", hasConsoleRight = " + e.identification.hasConsoleRight)
        }),
        window.gui.on("disconnect", function() {
            t.helpInfo = null
        }),
        this.on("open", function() {
            t.setTitle(t.getAdminTitle())
        }),
        this.on("focus", function() {
            window.setTimeout(function() {
                t.cmdInput.focus()
            }, 100)
        }),
        this.on("close", function() {
            u.hide()
        }),
        this.on("opened", function() {
            t.cmdInput.focus()
        }),
        this.on("resize", e), this.on("repositioned", e), window.gui.on("ConsoleCommandsListMessage", function(e) {
            t.helpInfo = e
        }),
        window.gui.on("ConsoleMessage", function(e) {
            return t.log ? void t.logMessage(e.content, N[e.type]) : console.warn(e.content)
        }),
        window.gui.on("DebugInClientMessage", function(e) {
            t.log && t.logMessage(e.message, R[e.level]),
            e.level >= q ? console.warn(e.message) : console.log(e.message)
        }),
        S.on("step", function(e) {
            e = e || {};
            var i = e.percent;
            t._preloadPB.setValue(i),
            t._preloadCount.setText(e.count + "/" + e.nbTotalMaps),
            t._preloadPercent.setText(~~(100 * i) + "%"),
            t._preloadEstimate.setText(e.secondLeft < 0 ? 0 : e.secondLeft + "s")
        }),
        S.on("error", function(e) {
            t.cmdInput.enable(),
            t._buttonSend.enable(),
            t._preloadBox.hide(),
            console.error(e)
        }),
        S.on("end", function(e) {
            t.cmdInput.enable(),
            t._buttonSend.enable(),
            t._preloadBox.hide(),
            t.logMessage("Finished preloading of in " + e.elapsedSecond + "s")
        }),
        this.optionButton = new s({className: "optionButton", scaleOnPress: !0 }, function() {
            var e = [];
            e.push({
                caption: "25%",
                cb: function() {
                    t.setOpacity(.25)
                }
            }), e.push({
                caption: "50%",
                cb: function() {
                    t.setOpacity(.5)
                }
            }), e.push({
                caption: "75%",
                cb: function() {
                    t.setOpacity(.75)
                }
            }), e.push({
                caption: "100%",
                cb: function() {
                    t.setOpacity(1)
                }
            }), window.gui.openContextualMenu("generic", {
                title: "Opacity",
                actions: e
            })
        }), this.optionButton.insertBefore(this.closeButton);
        var i = m.getValue(I);
        i && t.setOpacity(i), this._createDom()
    }
    i(954);
    var o = i(551),
        a = i(56).inherits,
        r = i(70),
        s = (i(52),i(86)),
        c = i(581),
        l = i(490),
        d = i(17).getText,
        u = i(452),
        p = i(453),
        h = i(594),
        f = i(603),
        b = i(72),
        m = i(60),
        M = i(955),
        g = i(956),
        _ = i(958),
        A = i(466),
        O = i(141),
        v = i(959),
        y = i(142),
        z = i(502),
        w = i(34).logger,
        T = 300,
        C = "Admin Console",
        I = "adminOpacity",
        S = new M,
        E = "incarnam",
        L = 45,
        N = ["Info", "Warn", "Error"],
        R = ["Debug", "Debug", "Info", "Warn", "Error", "Fatal"],
        q = 3;
    a(n, r), 
    e.exports = n,
    n.prototype._addClientCommands = function() {
        function e(e) {
            var t = 2,
                i = Array.prototype.slice.call(e),
                n = i.join(" ")
                .trim();
            return n.length < t ? void s.logMessage("Need to be at least " + t + " letters length.", "Error") : n
        }

        function t() {
            var t = e(arguments);
            if (t) return s._searchItem.search(t, function(e, t) {
                return e ? console.error("AdminConsole items search", e) : void s.logMessage(t, "Info")
            })
        }

        function i() {
            var t = e(arguments);
            if (t) return s._searchNpc.search(t, function(e, t) {
                return e ? console.error("AdminConsole npcs search", e) : void s.logMessage(t, "Info")
            })
        }

        function n() {
            var e = [0, 1, 2, 4],
                t = Array.prototype.slice.call(arguments)
                .join(" ")
                .trim();
            if ("help" === t) return void s.logMessage("You can see which servers will be recommended to a community\nUsage : /seerecommendedservers [id] \nIds are : \n0: FR\n1: EN\n2: INT\n4: SPA\n", "Info");
            if (t.length > 1 || t.length < 1) return void s.logMessage("The command needs as an argument the community id\n0: FR\n1: EN\n2: INT\n4: SPA\n", "Info");
            if (e.indexOf(parseInt(t, 10)) === -1) return void s.logMessage("The community id is not a valid id\n0: FR\n1: EN\n2: INT\n4: SPA\n", "Info");
            var i = {
                communityId: parseInt(t, 10)
            };
            return window.gui.serversData.getAutoChosenServers(i, function(e, t) {
                if (e) return void s.logMessage(e, "Info");
                var i = t || [],
                    n = "";
                for (var o in i) {
                    var a = i[o],
                        r = " - ";
                    a.staticData && a.staticData.server && (r += a.staticData.server.nameId, r += " (" + a.staticData.server.id + ")"), n += r
                }
                s.logMessage("Recommended server are : " + n, "Info")
            })
        }

        function o() {
            var e = Array.prototype.slice.call(arguments)
                .join(" ")
                .trim();
            if ("help" === e) return void s.logMessage("Using this command reset your gondola head token.Next time you connect, you will see the shop animation");
            var t = window.gui.serversData.connectedServerId;
            return m.setValue(t + "-gondolaHeadToken", "reset"), s.logMessage("Done, the token is now empty", "Info")
        }

        function a() {
            s.runMultipleCommands("move * 106169344 341;item * 1575")
        }

        function r() {
            s.runMultipleCommands("move * 115081731 370;item * 14290")
        }
        var s = this;
        window.gui.playerData.isAdmin() && (
            this._adminCmdManager.addCommand("searchitem", t, "Search items by their names and give the id."),
            this._adminCmdManager.addCommand("si", t, "Search items by their names and give the id."),
            this._adminCmdManager.addCommand("searchnpc", i, "Search npcs by their names and give the id."),
            this._adminCmdManager.addCommand("seerecommendedservers", n, "See your recommended servers."),
            this._adminCmdManager.addCommand("resetgondolatoken", o, "Reset your gondola token. Next time you connect, you will see the shop animation."),
            this._adminCmdManager.addCommand("guildtemple", a, "Setup for guild creation."),
            this._adminCmdManager.addCommand("alliancetemple", r, "Setup for alliance creation.")), this._adminCmdManager.addCommand("showeverycellid", function() {
            window.background && window.background.toggleDebugMode()
        }, "Show every cell id of the grid"), this._adminCmdManager.addCommand("showdebuginfo", function() {
            window.gui.performanceOverlay.display(!window.gui.performanceOverlay.isVisible())
        }, "Show debug infos"), this._adminCmdManager.addCommand("pushtoken", function() {
            var e = window.gui.playerData.getPushToken();
            e ? s.logMessage("Push token: " + e) : s.logMessage("No push token."), s.logMessage("Done!", "Debug")
        }, "Show the push token for push notification."), this._adminCmdManager.addCommand("forceaccount", function(e) {
            return e ? O.connectForcedAccount(e) : s.logMessage("1 argument required: forceaccount [username]", "Debug")
        }, "Force the account of a player")
    },
    n.prototype._createDom = function() {
        if (!this.domCreated) {
            var e = this,
                t = this.windowBody,
                i = t.createChild("div", {
                    className: "topDom"
                }),
                n = i.createChild("div", {
                    className: "upDownContainer"
                }),
                o = n.appendChild(new s({
                    text: "Next cmd",
                    className: ["greenButton", "upAndDown"]
                }));
            o.on("tap", function() {
                e.nextCmd()
            });
            var a = n.appendChild(new s({
                text: "Reset",
                className: ["greenButton", "upAndDown"]
            }));
            a.on("tap", function() {
                e._reset()
            });
            var r = n.appendChild(new s({
                text: "Previous cmd",
                className: ["greenButton", "upAndDown"]
            }));
            r.on("tap", function() {
                e.previousCmd()
            }), this.autoScrollCheckbox = n.appendChild(new h("autoscroll", {
                defaultValue: !0
            })), this.autoScrollCheckbox.addClassNames("upAndDown"), this.autoScrollCheckbox.on("change", function(t) {
                e.autoScroll = t
            });
            var u = i.createChild("form", {
                    attr: {
                        action: "#_",
                        method: "post"
                    }
                }),
                f = u.createChild("table", {
                    className: "cmdInputBar"
                }),
                b = f.createChild("td"),
                m = this.cmdInput = new c({
                    className: "cmdInput",
                    attr: {
                        id: "cmdInput"
                    }
                });
            b.appendChild(m), b = f.createChild("td", {
                className: "buttonSend"
            });
            var M = this._buttonSend = b.appendChild(new s({
                    text: d("ui.social.reportSend"),
                    className: ["greenButton"]
                })),
                g = this._preloadBox = t.createChild("div", {
                    className: "preloadBox",
                    hidden: !0
                });
            this._preloadPB = g.appendChild(new l({
                className: ["preloadPB", "green"]
            })), this._preloadCount = g.createChild("div", {
                className: "preloadCount"
            }), this._preloadPercent = g.createChild("div", {
                className: "preloadPercent"
            }), this._preloadEstimate = g.createChild("div", {
                className: "preloadEstimate"
            }), this.logScroller = t.appendChild(new p({
                className: "logBox"
            })), this.log = this.logScroller.content, M.on("tap", function() {
                var t = m.getValue();
                m.setValue(""), e.runMultipleCommands(t)
            }), m.rootElement.addEventListener("keydown", function(t) {
                if (t) {
                    var i = t.keyCode;
                    40 === i ? (t.preventDefault(), e.nextCmd()) : 38 === i && (t.preventDefault(), e.previousCmd())
                }
            }), u.rootElement.addEventListener("submit", function(e) {
                e.preventDefault(), M.emit("tap")
            }), this.domCreated = !0
        }
    },
    n.prototype.addToHistory = function(e) {
        return this.history[this.history.length - 1] !== e && e ? (this.history.push(e), void(this.historyPointer = this.history.length)) : void(this.historyPointer = this.history.length)
    },
    n.prototype.previousCmd = function() {
        if (!(this.historyPointer < 1)) {
            this.historyPointer -= 1;
            var e = this.history[this.historyPointer];
            this.cmdInput.setValue(e)
        }
    },
    n.prototype.nextCmd = function() {
        if (!(this.historyPointer > this.history.length - 1)) {
            this.historyPointer += 1;
            var e = this.history[this.historyPointer] || "";
            this.cmdInput.setValue(e)
        }
    },
    n.prototype.setOpacity = function(e) {
        this.windowBorder.setStyle("opacity", e), m.setValue(I, e)
    },
    n.prototype.handleEvent = function(e) {
        e = e.replace("event:", "");
        var t = e.split(","),
            i = t[0],
            n = "";
        switch (i) {
            case "player":
                var o = {
                    playerName: t[1],
                    playerId: t[2]
                };
                window.gui.openContextualMenu(i, o);
                break;
            case "admin":
                var a = "true" === t[1];
                n = window.atob(t[2]), a ? this.runCommand(n) : this.cmdInput.setValue(n);
                break;
            case "adminQuiet":
                n = window.atob(t[1]), this.runQuietCommand(n);
                break;
            case "guild":
                window.dofus.sendMessage("GuildFactsRequestMessage", {
                    guildId: t[1]
                })
        }
    },
    n.prototype._formatLinks = function(e) {
        var t = new b("div");
        return t.appendChild(z.process(e)), t
    },
    n.prototype.logMessage = function(e, t) {
        if (this._createDom(), this.log.getChildCount() > T) {
            var i = this.log.getChildren();
            Array.isArray(i) && i[0] && i[0].destroy()
        }
        var n = "message" + (t || "Info"),
            o = this.log.createChild("div", {
                className: ["message", n]
            });
        e = e.replace(/\n/g, "<br/>"), e = this._formatLinks(e), o.appendChild(e), this.logScroller.refresh(), this.autoScroll && this.logScroller.goToBottom()
    },
    n.prototype.runMultipleCommands = function(e) {
        e = e.trim();
        for (var t = e.split(";"), i = 0; i < t.length; i += 1) {
            var n = t[i];
            this.runCommand(n)
        }
    },
    n.prototype.runCommand = function(e) {
        e = e.trim();
        var t = !1;
        if (this.logMessage(e, "Command"), "help" === e || "/help" === e || "" === e) return this.helpInfo ? this.logMessage("\n" + this.helpInfo.descriptions.join(""), "Debug") : window.dofus.sendMessage("AdminCommandMessage", {
            content: "help"
        }), this.logMessage("<hr/>Client admin commands:", "Debug"), this.logMessage("\n" + this._adminCmdManager.helpList()
            .join("\n"), "Debug"), void this.logMessage("<hr/>", "Debug");
        this.addToHistory(e);
        var i = e.split(" ");
        if (t = this._adminCmdManager.runCommand.apply(this._adminCmdManager, i), !t && window.gui.playerData.isAdmin()) {
            if ("preload" === i[0]) {
                i.shift(), this.cmdInput.disable(), this._buttonSend.disable(), this._preloadBox.show(), this._preloadPB.setValue(0);
                var n = i[0];
                return n = n === E ? L : parseInt(n, 10), S.preloadAreas([n])
            }
            if ("autotest" === i[0] && o.run) return i.shift(), o.run(i.join(" "));
            if ("gridcolor" === i[0]) return i.shift(), 4 !== i.length ? this.logMessage("4 arguments required: gridcolor [red] [green] [blue] [alpha]", "Debug") : i[0] > 1 ? this.logMessage("Red   component has to be in range [0, 1]", "Debug") : i[1] > 1 ? this.logMessage("Green component has to be in range [0, 1]", "Debug") : i[2] > 1 ? this.logMessage("Blue  component has to be in range [0, 1]", "Debug") : i[3] > 1 ? this.logMessage("Alpha has to be in range [0, 1]", "Debug") : (window.isoEngine.background.setGridColor(i), this.logMessage("Grid color changed!", "Debug"));
            if ("haapi" === i[0]) {
                var a = y.getHaapiConfig();
                return a ? this.logMessage(a.getHostname(), "Debug") : (w.error(new Error("Config is missing.")), this.logMessage("Error: config error", "Error"))
            }
            if ("tutorial" === i[0]) {
                i.shift();
                var r = "Done";
                return 1 !== i.length || "start" !== i[0] ? r = "Wrong parameter, allowed parameters: start" : window.dofus.sendMessage("GuidedModeReturnRequestMessage"), this.logMessage(r, "Debug")
            }
        }
        if (!t && window.gui.playerData.isModeratorOrMore() && "setadminmenu" === i[0]) {
            var s = !1,
                c = i[1];
            return s = !c || "help" === c || !window.gui.playerData.adminMenu.setAdminMenuId(c), void(s && (this.logMessage("setadminmenu &lt;menuId&gt;: menuId must be one of the following:", "Debug"), this.logMessage(window.gui.playerData.adminMenu.helpToString(), "Debug")))
        }
        t || window.dofus.sendMessage("AdminCommandMessage", {
            content: e
        })
    },
    n.prototype.runQuietCommand = function(e) {
        window.dofus.sendMessage("AdminQuietCommandMessage", { content: e })
    },
    n.prototype._reset = function() {
        this.log.clearContent(), this.logScroller.refresh()
    },
    n.prototype.getAdminTitle = function() {
        var e = [],
            t = window.gui.serversData,
            i = window.gui.playerData.characterBaseInformations,
            n = t.getMyServerName();
        return n && e.push("Server: " + n + " (" + t.connectedServerId + ")"), i.id && i.name && e.push(i.name + " (" + i.id + ")"), 0 === e.length && e.push(C), e.join(" | ")
    }
}
