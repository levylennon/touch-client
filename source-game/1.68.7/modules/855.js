function(e, t, i) {
    function n() {
        o.call(this, "div", {
            className: "PingBox",
            positionInfo: {
                left: "0",
                bottom: "0",
                width: "100%",
                height: "100%"
            }
        });
        var e = this,
            t = window.gui;
        this._isOpen = !1, this._cellId = -1, this._setWheel(), this.on("hide", function() {
            window.isoEngine.mapRenderer.deletePingHighlight(this._cellId), this._isOpen = !1
        }), t.on("disconnect", function() {
            e.close()
        })
    }
    i(856);
    var o = i(72),
        a = i(857),
        r = i(56)
        .inherits,
        s = i(63),
        c = i(54)
        .dimensions,
        l = i(17)
        .getText,
        d = i(12),
        u = i(116),
        p = "ui/com_wheel_slice.svg",
        h = "ui/btn_close_ping_system.png",
        f = "ui/btn_cancel_ping_system.png",
        b = {
            1: {
                icons: ["ui/btn_danger_here_icon.png", "ui/btn_I_move_here_icon.png", "ui/btn_summon_here_icon.png", "ui/btn_move_me_icon.png", "ui/btn_push_icon.png", "ui/btn_there_icon.png"],
                circle: "ui/zoom_ring_nothing.png"
            },
            2: {
                icons: ["ui/btn_thanks_icon.png", "ui/btn_debuff_icon.png", "ui/btn_boost_icon.png", "ui/btn_more_health_icon.png", "ui/btn_more_AP_icon.png", "ui/btn_more_movement_icon.png"],
                circle: "ui/zoom_ring_myself.png"
            },
            3: {
                icons: ["ui/btn_attack_me_icon.png", "ui/btn_debuff_icon.png", "ui/btn_push_enemy_icon.png", "ui/btn_bring_back_enemy_icon.png", "ui/btn_decrease_AP_icon.png", "ui/btn_decrease_movement_icon.png"],
                circle: "ui/zoom_ring_ennemy.png"
            },
            4: {
                icons: ["ui/btn_defend_me_icon.png", "ui/btn_bring_back_icon.png", "ui/btn_push_icon.png", "ui/btn_thanks_icon.png", "ui/btn_congrat_icon.png", "ui/btn_boost_icon.png"],
                circle: "ui/zoom_ring_ally.png"
            },
            5: {
                icons: ["ui/btn_defend_me_icon.png", "ui/btn_bring_back_icon.png", "ui/btn_push_icon.png", "ui/btn_more_AP_icon.png", "ui/btn_more_movement_icon.png", "ui/btn_boost_icon.png"],
                circle: "ui/zoom_ring_summoning.png"
            }
        };
    r(n, o), e.exports = n, n.prototype._setContext = function(e) {
        function t(e, t) {
            return "ui.pingSystem.context" + e + ".text" + t
        }
        if (this._buttons.length) {
            var i = this;
            this._context = e, this._buttons.forEach(function(n) {
                i._svg.setAttributes({
                    fill: "url(#imgPatternContext" + e + "Icon" + (n._id - 1) + ")"
                }, n.icon), n.text.setText(l(t(e, n._id)))
            }), i._svg.setAttributes({
                fill: "url(#contextCircleBorder" + e + ")"
            }, this._circle)
        }
    }, n.prototype._setButtonEvent = function(e) {
        function t(e, t, n) {
            window.dofus.sendMessage("PingRequestMessage", {
                cell: e,
                type: t,
                targetType: n
            }), i.emit("actionSent")
        }
        var i = this;
        e.on("tap", function() {
            u.log("HUD.Click_on_button", {
                interface_id: "PingBox",
                button_id: "BTN_PING_" + this._id,
                clic_parameter_key: "context",
                clic_parameter_value: i._context,
                clic_type: "Simple_court"
            }), t(i._cellId, this._id, i._context)
        })
    }, n.prototype._setWheel = function() {
        function e(e, t, i, n, o) {
            var a = Math.PI / 180,
                r = i / 2,
                s = Math.cos(a * o) * r + e,
                c = -Math.sin(a * o) * r + t,
                l = Math.cos(a * n) * r + e,
                d = -Math.sin(a * n) * r + t;
            return "M" + e + " " + t + " " + s + " " + c + " A" + r + " " + r + " 0 0 1 " + l + " " + d + "Z"
        }
        var t = 2 * c.mapLeft,
            i = window.gui.ipadRatio ? 0 : 2 * c.mapTop,
            n = c.screenWidth,
            o = c.screenHeight,
            r = c.mapWidth + t,
            l = c.mapHeight + i,
            u = c.mapHeight > 720 ? 680 : c.mapHeight - 40,
            m = this;
        this._svg = this.appendChild(new a({
            attr: {
                viewBox: "0 0 " + n + " " + o
            }
        }));
        var M = this._svg.newElement("g"),
            g = this._svg.newElement("defs", {
                parent: M
            }),
            _ = this._svg.newElement("pattern", {
                parent: g,
                attr: {
                    id: "imgPattern",
                    width: "1",
                    height: "1"
                }
            });
        Object.keys(b)
            .forEach(function(e) {
                d.preloadImageUrls(b[e].icons, function(t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = m._svg.newElement("pattern", {
                            parent: g,
                            attr: {
                                id: "imgPatternContext" + e + "Icon" + i,
                                width: "1",
                                height: "1"
                            }
                        });
                        m._svg.newElement("image", {
                            parent: n,
                            attr: {
                                href: t[i],
                                width: .24 * u
                            }
                        })
                    }
                }), d.preloadImageUrl(b[e].circle, function(t) {
                    var i = m._svg.newElement("pattern", {
                        parent: g,
                        attr: {
                            id: "contextCircleBorder" + e,
                            width: "1",
                            height: "1"
                        }
                    });
                    m._svg.newElement("image", {
                        parent: i,
                        attr: {
                            href: t,
                            width: u / 3.5 + "px"
                        }
                    })
                })
            }), d.preloadImageUrl(p, function(e) {
                m._svg.newElement("image", {
                    parent: _,
                    attr: {
                        href: e,
                        transform: "translate(5, 0)",
                        width: Math.sin(30 * (Math.PI / 180)) * (.5 * (u - 20)) * 2 + "px"
                    }
                })
            });
        var A = this._svg.newElement("pattern", {
            parent: g,
            attr: {
                id: "imgPatternClose",
                width: "1",
                height: "1"
            }
        });
        d.preloadImageUrl(h, function(e) {
            m._svg.newElement("image", {
                parent: A,
                attr: {
                    href: e,
                    width: "60px"
                }
            })
        });
        var O = this._svg.newElement("pattern", {
            parent: g,
            attr: {
                id: "imgPatternCancel",
                width: "1",
                height: "1"
            }
        });
        d.preloadImageUrl(f, function(e) {
            m._svg.newElement("image", {
                parent: O,
                attr: {
                    href: e,
                    width: "60px"
                }
            })
        });
        var v = {
            icon: {
                width: .24 * u,
                height: .21 * u,
                x: .5 * r - .12 * u,
                y: .5 * l - .23 * u
            },
            elements: [{
                arc: {},
                icon: {
                    transform: "translate(0, " + .25 * -u + ")"
                },
                text: {
                    x: .5 * r,
                    y: .5 * l - .25 * u,
                    textanchor: "middle",
                    fill: "white",
                    style: "font-size: 18px; font-weight: bold;"
                }
            }, {
                arc: {
                    transform: "rotate(60 " + .5 * r + " " + .5 * l + ")"
                },
                icon: {
                    transform: "translate(" + .275 * u + ", " + .1 * -u + ")"
                },
                text: {
                    x: .5 * r + .275 * u,
                    y: .5 * l - .1 * u,
                    textanchor: "middle",
                    fill: "white",
                    style: "font-size: 18px; font-weight: bold;"
                }
            }, {
                arc: {
                    transform: "rotate(120 " + .5 * r + " " + .5 * l + ")"
                },
                icon: {
                    transform: "translate(" + .275 * u + ", " + .225 * u + ")"
                },
                text: {
                    x: .5 * r + .275 * u,
                    y: .5 * l + .225 * u,
                    textanchor: "middle",
                    fill: "white",
                    style: "font-size: 18px; font-weight: bold;"
                }
            }, {
                arc: {
                    transform: "rotate(180 " + .5 * r + " " + .5 * l + ")"
                },
                icon: {
                    transform: "translate(0, " + .375 * u + ")"
                },
                text: {
                    x: .5 * r,
                    y: .5 * l + .375 * u,
                    textanchor: "middle",
                    fill: "white",
                    style: "font-size: 18px; font-weight: bold;"
                }
            }, {
                arc: {
                    transform: "rotate(240 " + .5 * r + " " + .5 * l + ")"
                },
                icon: {
                    transform: "translate(" + .275 * -u + ", " + .225 * u + ")"
                },
                text: {
                    x: .5 * r - .275 * u,
                    y: .5 * l + .225 * u,
                    textanchor: "middle",
                    fill: "white",
                    style: "font-size: 18px; font-weight: bold;"
                }
            }, {
                arc: {
                    transform: "rotate(300 " + .5 * r + " " + .5 * l + ")"
                },
                icon: {
                    transform: "translate(" + .275 * -u + ", " + .1 * -u + ")"
                },
                text: {
                    x: .5 * r - .275 * u,
                    y: .5 * l - .1 * u,
                    textanchor: "middle",
                    fill: "white",
                    style: "font-size: 18px; font-weight: bold;"
                }
            }]
        };
        this._buttons = [];
        var y = this._svg.newElement("pattern", {
                parent: g,
                attr: {
                    id: "contextCircle",
                    width: "1",
                    height: "1"
                }
            }),
            z = c.mapHeight / c.mapWidth,
            w = (u / 3.55 * z - u / 3.55) / 2 - 10;
        this._contextCircle = this._svg.newElement("image", {
            parent: y,
            attr: {
                height: u / 3.55 + "px",
                transform: "translate(" + w + ", 0)"
            }
        });
        for (var T = 0; T < v.elements.length; T++) {
            var C = this._svg.newElement("g", {
                parent: M
            });
            C._id = this._buttons.length + 1, s(C, null), this._setButtonEvent(C), this._svg.newElement("path", {
                parent: C,
                attr: {
                    d: e(.5 * r, .5 * l, u, 60, 120),
                    fill: "url(#imgPattern)",
                    transform: v.elements[T].arc.transform || ""
                }
            }), C.icon = this._svg.newElement("rect", {
                parent: C,
                attr: {
                    width: v.icon.width,
                    height: v.icon.height,
                    x: v.icon.x,
                    y: v.icon.y,
                    transform: v.elements[T].icon.transform
                }
            }), C.text = this._svg.newElement("text", {
                parent: C,
                attr: {
                    width: v.icon.width,
                    x: v.elements[T].text.x,
                    y: v.elements[T].text.y,
                    "text-anchor": "middle",
                    fill: v.elements[T].text.fill,
                    style: v.elements[T].text.style
                }
            }), this._buttons.push(C)
        }
        this._svg.newElement("circle", {
            parent: M,
            attr: {
                cx: .5 * r,
                cy: .5 * l,
                r: u / 7.1,
                fill: "url(#contextCircle)"
            }
        }), this._circle = this._svg.newElement("circle", {
            parent: M,
            attr: {
                cx: .5 * r,
                cy: .5 * l,
                r: u / 7,
                fill: "url(#contextCircleBorder)"
            }
        });
        var I = this._svg.newElement("circle", {
            parent: M,
            attr: {
                cx: .8 * r,
                cy: .86 * l,
                r: "30",
                fill: "url(#imgPatternClose)"
            }
        });
        s(I, null), I.on("tap", function() {
            m.emit("actionSent")
        });
        var S = this._svg.newElement("circle", {
            parent: M,
            attr: {
                cx: .8 * r + 60,
                cy: .86 * l - 65,
                r: "30",
                fill: "url(#imgPatternCancel)"
            }
        });
        s(S, null), S.on("tap", function() {
            m.close()
        }), this.hide()
    }, n.prototype.isOpen = function() {
        return this._isOpen
    }, n.prototype.open = function(e, t) {
        if (!this.isOpen()) {
            this._isOpen = !0;
            var i = this;
            this._setContext(t);
            var n = window.foreground;
            this._cellId = e, n.confirmBox.close(), n.deselectSpell(), window.gui.shortcutBar.deselectCurrentSlot();
            var o = c.mapHeight > 720 ? 680 : c.mapHeight - 40,
                a = window.isoEngine.mapRenderer.getCellSceneCoordinate(e),
                r = window.background.scene.getImage(a, o / 3.55);
            r || console.error(new Error("Preview is missing inside the PingBox")), i._svg.setAttributes({
                href: r
            }, i._contextCircle), i.show()
        }
    }, n.prototype.close = function() {
        this._isOpen && (this._isOpen = !1, this.hide(), this._cellId = -1)
    }
}
