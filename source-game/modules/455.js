function(e, t) {
    /*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
    ! function(t, i, n) {
        function o(e, t) {
            this.wrapper = "string" == typeof e ? i.querySelector(e) : e, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
                resizeScrollbars: !0,
                mouseWheelSpeed: 20,
                snapThreshold: .334,
                startX: 0,
                startY: 0,
                scrollY: !0,
                directionLockThreshold: 5,
                momentum: !0,
                bounce: !0,
                bounceTime: 600,
                bounceEasing: "",
                preventDefault: !0,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                },
                HWCompositing: !0,
                useTransition: !0,
                useTransform: !0
            };
            for (var n in t) this.options[n] = t[n];
            this.translateZ = this.options.HWCompositing && c.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = c.hasTransition && this.options.useTransition, this.options.useTransform = c.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? c.ease[this.options.bounceEasing] || c.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
        }

        function a(e, t, n) {
            var o = i.createElement("div"),
                a = i.createElement("div");
            return n === !0 && (o.style.cssText = "position:absolute;z-index:9999", a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), a.className = "iScrollIndicator", "h" == e ? (n === !0 && (o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", a.style.height = "100%"), o.className = "iScrollHorizontalScrollbar") : (n === !0 && (o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", a.style.width = "100%"), o.className = "iScrollVerticalScrollbar"), o.style.cssText += ";overflow:hidden", t || (o.style.pointerEvents = "none"), o.appendChild(a), o
        }

        function r(e, n) {
            this.wrapper = "string" == typeof n.el ? i.querySelector(n.el) : n.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = e, this.options = {
                listenX: !0,
                listenY: !0,
                interactive: !1,
                resize: !0,
                defaultScrollbars: !1,
                shrink: !1,
                fade: !1,
                speedRatioX: 0,
                speedRatioY: 0
            };
            for (var o in n) this.options[o] = n[o];
            this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (c.addEvent(this.indicator, "touchstart", this), c.addEvent(t, "touchend", this)), this.options.disablePointer || (c.addEvent(this.indicator, c.prefixPointerEvent("pointerdown"), this), c.addEvent(t, c.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (c.addEvent(this.indicator, "mousedown", this), c.addEvent(t, "mouseup", this))), this.options.fade && (this.wrapperStyle[c.style.transform] = this.scroller.translateZ, this.wrapperStyle[c.style.transitionDuration] = c.isBadAndroid ? "0.001s" : "0ms", this.wrapperStyle.opacity = "0")
        }
        var s = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                t.setTimeout(e, 1e3 / 60)
            },
            c = function() {
                function e(e) {
                    return r !== !1 && ("" === r ? e : r + e.charAt(0)
                        .toUpperCase() + e.substr(1))
                }
                var o = {},
                    a = i.createElement("div")
                    .style,
                    r = function() {
                        for (var e, t = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, n = t.length; i < n; i++)
                            if (e = t[i] + "ransform", e in a) return t[i].substr(0, t[i].length - 1);
                        return !1
                    }();
                o.getTime = Date.now || function() {
                    return (new Date)
                        .getTime()
                }, o.extend = function(e, t) {
                    for (var i in t) e[i] = t[i]
                }, o.addEvent = function(e, t, i, n) {
                    e.addEventListener(t, i, !!n)
                }, o.removeEvent = function(e, t, i, n) {
                    e.removeEventListener(t, i, !!n)
                }, o.prefixPointerEvent = function(e) {
                    return t.MSPointerEvent ? "MSPointer" + e.charAt(9)
                        .toUpperCase() + e.substr(10) : e
                }, o.momentum = function(e, t, i, o, a, r, s) {
                    var c, l, d = e - t,
                        u = n.abs(d) / i;
                    return s && u > s && (u = s), r = void 0 === r ? 6e-4 : r, c = e + u * u / (2 * r) * (d < 0 ? -1 : 1), l = u / r, c < o ? (c = a ? o - a / 2.5 * (u / 8) : o, d = n.abs(c - e), l = d / u) : c > 0 && (c = a ? a / 2.5 * (u / 8) : 0, d = n.abs(e) + c, l = d / u), {
                        destination: n.round(c),
                        duration: l
                    }
                };
                var s = e("transform");
                return o.extend(o, {
                    hasTransform: s !== !1,
                    hasPerspective: e("perspective") in a,
                    hasTouch: "ontouchstart" in t,
                    hasPointer: t.PointerEvent || t.MSPointerEvent,
                    hasTransition: e("transition") in a
                }), o.isBadAndroid = /Android /.test(t.navigator.appVersion) && !/Chrome\/\d/.test(t.navigator.appVersion), o.extend(o.style = {}, {
                    transform: s,
                    transitionTimingFunction: e("transitionTimingFunction"),
                    transitionDuration: e("transitionDuration"),
                    transitionDelay: e("transitionDelay"),
                    transformOrigin: e("transformOrigin")
                }), o.hasClass = function(e, t) {
                    var i = new RegExp("(^|\\s)" + t + "(\\s|$)");
                    return i.test(e.className)
                }, o.addClass = function(e, t) {
                    if (!o.hasClass(e, t)) {
                        var i = e.className.split(" ");
                        i.push(t), e.className = i.join(" ")
                    }
                }, o.removeClass = function(e, t) {
                    if (o.hasClass(e, t)) {
                        var i = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
                        e.className = e.className.replace(i, " ")
                    }
                }, o.offset = function(e) {
                    for (var t = -e.offsetLeft, i = -e.offsetTop; e = e.offsetParent;) t -= e.offsetLeft, i -= e.offsetTop;
                    return {
                        left: t,
                        top: i
                    }
                }, o.preventDefaultException = function(e, t) {
                    for (var i in t)
                        if (t[i].test(e[i])) return !0;
                    return !1
                }, o.extend(o.eventType = {}, {
                    touchstart: 1,
                    touchmove: 1,
                    touchend: 1,
                    mousedown: 2,
                    mousemove: 2,
                    mouseup: 2,
                    pointerdown: 3,
                    pointermove: 3,
                    pointerup: 3,
                    MSPointerDown: 3,
                    MSPointerMove: 3,
                    MSPointerUp: 3
                }), o.extend(o.ease = {}, {
                    quadratic: {
                        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        fn: function(e) {
                            return e * (2 - e)
                        }
                    },
                    circular: {
                        style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        fn: function(e) {
                            return n.sqrt(1 - --e * e)
                        }
                    },
                    back: {
                        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        fn: function(e) {
                            var t = 4;
                            return (e -= 1) * e * ((t + 1) * e + t) + 1
                        }
                    },
                    bounce: {
                        style: "",
                        fn: function(e) {
                            return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                        }
                    },
                    elastic: {
                        style: "",
                        fn: function(e) {
                            var t = .22,
                                i = .4;
                            return 0 === e ? 0 : 1 == e ? 1 : i * n.pow(2, -10 * e) * n.sin((e - t / 4) * (2 * n.PI) / t) + 1
                        }
                    }
                }), o.tap = function(e, t) {
                    var n = i.createEvent("Event");
                    n.initEvent(t, !0, !0), n.pageX = e.pageX, n.pageY = e.pageY, e.target.dispatchEvent(n)
                }, o.click = function(e) {
                    var t, n = e.target;
                    /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || (t = i.createEvent("MouseEvents"), t.initMouseEvent("click", !0, !0, e.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), t._constructed = !0, n.dispatchEvent(t))
                }, o
            }();
        o.prototype = {
            version: "5.1.3",
            _init: function() {
                this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
            },
            destroy: function() {
                this._initEvents(!0), this._execEvent("destroy")
            },
            _transitionEnd: function(e) {
                e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
            },
            _start: function(e) {
                if ((1 == c.eventType[e.type] || 0 === e.button) && this.enabled && (!this.initiated || c.eventType[e.type] === this.initiated)) {
                    !this.options.preventDefault || c.isBadAndroid || c.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
                    var t, i = e.touches ? e.touches[0] : e;
                    this.initiated = c.eventType[e.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = c.getTime(), this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, t = this.getComputedPosition(), this._translate(n.round(t.x), n.round(t.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = i.pageX, this.pointY = i.pageY, this._execEvent("beforeScrollStart")
                }
            },
            _move: function(e) {
                if (this.enabled && c.eventType[e.type] === this.initiated) {
                    this.options.preventDefault && e.preventDefault();
                    var t, i, o, a, r = e.touches ? e.touches[0] : e,
                        s = r.pageX - this.pointX,
                        l = r.pageY - this.pointY,
                        d = c.getTime();
                    if (this.pointX = r.pageX, this.pointY = r.pageY, this.distX += s, this.distY += l, o = n.abs(this.distX), a = n.abs(this.distY), !(d - this.endTime > 300 && o < 10 && a < 10)) {
                        if (this.directionLocked || this.options.freeScroll || (o > a + this.options.directionLockThreshold ? this.directionLocked = "h" : a >= o + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                            if ("vertical" == this.options.eventPassthrough) e.preventDefault();
                            else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                            l = 0
                        } else if ("v" == this.directionLocked) {
                            if ("horizontal" == this.options.eventPassthrough) e.preventDefault();
                            else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                            s = 0
                        }
                        s = this.hasHorizontalScroll ? s : 0, l = this.hasVerticalScroll ? l : 0, t = this.x + s, i = this.y + l, (t > 0 || t < this.maxScrollX) && (t = this.options.bounce ? this.x + s / 3 : t > 0 ? 0 : this.maxScrollX), (i > 0 || i < this.maxScrollY) && (i = this.options.bounce ? this.y + l / 3 : i > 0 ? 0 : this.maxScrollY), this.directionX = s > 0 ? -1 : s < 0 ? 1 : 0, this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(t, i), d - this.startTime > 300 && (this.startTime = d, this.startX = this.x, this.startY = this.y)
                    }
                }
            },
            _end: function(e) {
                if (this.enabled && c.eventType[e.type] === this.initiated) {
                    this.options.preventDefault && !c.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
                    var t, i, o = (e.changedTouches ? e.changedTouches[0] : e, c.getTime() - this.startTime),
                        a = n.round(this.x),
                        r = n.round(this.y),
                        s = n.abs(a - this.startX),
                        l = n.abs(r - this.startY),
                        d = 0,
                        u = "";
                    if (this.isInTransition = 0, this.initiated = 0, this.endTime = c.getTime(), !this.resetPosition(this.options.bounceTime)) {
                        if (this.scrollTo(a, r), !this.moved) return this.options.tap && c.tap(e, this.options.tap), this.options.click && c.click(e), void this._execEvent("scrollCancel");
                        if (this._events.flick && o < 200 && s < 100 && l < 100) return void this._execEvent("flick");
                        if (this.options.momentum && o < 300 && (t = this.hasHorizontalScroll ? c.momentum(this.x, this.startX, o, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration, this.options.maxSpeed) : {
                                destination: a,
                                duration: 0
                            }, i = this.hasVerticalScroll ? c.momentum(this.y, this.startY, o, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration, this.options.maxSpeed) : {
                                destination: r,
                                duration: 0
                            }, a = t.destination, r = i.destination, d = n.max(t.duration, i.duration), this.isInTransition = 1), this.options.snap) {
                            var p = this._nearestSnap(a, r);
                            this.currentPage = p, d = this.options.snapSpeed || n.max(n.max(n.min(n.abs(a - p.x), 1e3), n.min(n.abs(r - p.y), 1e3)), 300), a = p.x, r = p.y, this.directionX = 0, this.directionY = 0, u = this.options.bounceEasing
                        }
                        return a != this.x || r != this.y ? ((a > 0 || a < this.maxScrollX || r > 0 || r < this.maxScrollY) && (u = c.ease.quadratic), void this.scrollTo(a, r, d, u)) : void this._execEvent("scrollEnd")
                    }
                }
            },
            _resize: function() {
                var e = this;
                clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                    e.refresh()
                }, this.options.resizePolling)
            },
            resetPosition: function(e) {
                var t = this.x,
                    i = this.y;
                return e = e || 0, !this.hasHorizontalScroll || this.x > 0 ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), (t != this.x || i != this.y) && (this.scrollTo(t, i, e, this.options.bounceEasing), !0)
            },
            cancel: function() {
                this.enabled = !1, this.initiated = !1
            },
            disable: function() {
                this.enabled = !1
            },
            enable: function() {
                this.enabled = !0
            },
            disableHardwareRendering: function(e) {
                this.translateZ = !e && this.options.HWCompositing && c.hasPerspective ? " translateZ(0)" : ""
            },
            refresh: function() {
                this.wrapper.offsetHeight;
                this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = c.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
            },
            on: function(e, t) {
                this._events[e] || (this._events[e] = []), this._events[e].push(t)
            },
            off: function(e, t) {
                if (this._events[e]) {
                    var i = this._events[e].indexOf(t);
                    i > -1 && this._events[e].splice(i, 1)
                }
            },
            _execEvent: function(e) {
                if (this._events[e]) {
                    var t = 0,
                        i = this._events[e].length;
                    if (i)
                        for (; t < i; t++) this._events[e][t].apply(this, [].slice.call(arguments, 1))
                }
            },
            scrollBy: function(e, t, i, n) {
                e = this.x + e, t = this.y + t, i = i || 0, this.scrollTo(e, t, i, n)
            },
            scrollTo: function(e, t, i, n) {
                n = n || c.ease.circular, this.isInTransition = this.options.useTransition && i > 0, !i || this.options.useTransition && n.style ? (this._transitionTimingFunction(n.style), this._transitionTime(i), this._translate(e, t)) : this._animate(e, t, i, n.fn)
            },
            scrollToElement: function(e, t, i, o, a) {
                if (e = e.nodeType ? e : this.scroller.querySelector(e)) {
                    var r = c.offset(e);
                    r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, i === !0 && (i = n.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), o === !0 && (o = n.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= i || 0, r.top -= o || 0, r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top, t = void 0 === t || null === t || "auto" === t ? n.max(n.abs(this.x - r.left), n.abs(this.y - r.top)) : t, this.scrollTo(r.left, r.top, t, a)
                }
            },
            _transitionTime: function(e) {
                if (e = e || 0, this.scrollerStyle[c.style.transitionDuration] = e + "ms", !e && c.isBadAndroid && (this.scrollerStyle[c.style.transitionDuration] = "0.001s"), this.indicators)
                    for (var t = this.indicators.length; t--;) this.indicators[t].transitionTime(e)
            },
            _transitionTimingFunction: function(e) {
                if (this.scrollerStyle[c.style.transitionTimingFunction] = e, this.indicators)
                    for (var t = this.indicators.length; t--;) this.indicators[t].transitionTimingFunction(e)
            },
            _translate: function(e, t) {
                if (this.options.useTransform ? this.scrollerStyle[c.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ : (e = n.round(e), t = n.round(t), this.scrollerStyle.left = e + "px", this.scrollerStyle.top = t + "px"), this.x = e, this.y = t, this.indicators)
                    for (var i = this.indicators.length; i--;) this.indicators[i].updatePosition()
            },
            _initEvents: function(e) {
                var i = e ? c.removeEvent : c.addEvent,
                    n = this.options.bindToWrapper ? this.wrapper : t;
                i(t, "orientationchange", this), i(t, "resize", this), this.options.click && i(this.wrapper, "click", this, !0), this.options.disableMouse || (i(this.wrapper, "mousedown", this), i(n, "mousemove", this), i(n, "mousecancel", this), i(n, "mouseup", this)), c.hasPointer && !this.options.disablePointer && (i(this.wrapper, c.prefixPointerEvent("pointerdown"), this), i(n, c.prefixPointerEvent("pointermove"), this), i(n, c.prefixPointerEvent("pointercancel"), this), i(n, c.prefixPointerEvent("pointerup"), this)), c.hasTouch && !this.options.disableTouch && (i(this.wrapper, "touchstart", this), i(n, "touchmove", this), i(n, "touchcancel", this), i(n, "touchend", this)), i(this.scroller, "transitionend", this), i(this.scroller, "webkitTransitionEnd", this), i(this.scroller, "oTransitionEnd", this), i(this.scroller, "MSTransitionEnd", this)
            },
            getComputedPosition: function() {
                var e, i, n = t.getComputedStyle(this.scroller, null);
                return this.options.useTransform ? (n = n[c.style.transform].split(")")[0].split(", "), e = +(n[12] || n[4]), i = +(n[13] || n[5])) : (e = +n.left.replace(/[^-\d.]/g, ""), i = +n.top.replace(/[^-\d.]/g, "")), {
                    x: e,
                    y: i
                }
            },
            _initIndicators: function() {
                function e(e) {
                    if (s.indicators)
                        for (var t = s.indicators.length; t--;) e.call(s.indicators[t])
                }
                var t, i = this.options.interactiveScrollbars,
                    n = "string" != typeof this.options.scrollbars,
                    o = [],
                    s = this;
                this.indicators = [], this.options.scrollbars && (this.options.scrollY && (t = {
                    el: a("v", i, this.options.scrollbars),
                    interactive: i,
                    defaultScrollbars: !0,
                    customStyle: n,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenX: !1
                }, this.wrapper.appendChild(t.el), o.push(t)), this.options.scrollX && (t = {
                    el: a("h", i, this.options.scrollbars),
                    interactive: i,
                    defaultScrollbars: !0,
                    customStyle: n,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenY: !1
                }, this.wrapper.appendChild(t.el), o.push(t))), this.options.indicators && (o = o.concat(this.options.indicators));
                for (var c = o.length; c--;) this.indicators.push(new r(this, o[c]));
                this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                    e(function() {
                        this.fade()
                    })
                }), this.on("scrollCancel", function() {
                    e(function() {
                        this.fade()
                    })
                }), this.on("scrollStart", function() {
                    e(function() {
                        this.fade(1)
                    })
                }), this.on("beforeScrollStart", function() {
                    e(function() {
                        this.fade(1, !0)
                    })
                })), this.on("refresh", function() {
                    e(function() {
                        this.refresh()
                    })
                }), this.on("destroy", function() {
                    e(function() {
                        this.destroy()
                    }), delete this.indicators
                })
            },
            _initWheel: function() {
                c.addEvent(this.wrapper, "wheel", this), c.addEvent(this.wrapper, "mousewheel", this), c.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                    c.removeEvent(this.wrapper, "wheel", this), c.removeEvent(this.wrapper, "mousewheel", this), c.removeEvent(this.wrapper, "DOMMouseScroll", this)
                })
            },
            _wheel: function(e) {
                if (this.enabled) {
                    e.preventDefault(), e.stopPropagation();
                    var t, i, o, a, r = this;
                    if (void 0 === this.wheelTimeout && r._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                            r._execEvent("scrollEnd"), r.wheelTimeout = void 0
                        }, 400), "deltaX" in e) 1 === e.deltaMode ? (t = -e.deltaX * this.options.mouseWheelSpeed, i = -e.deltaY * this.options.mouseWheelSpeed) : (t = -e.deltaX, i = -e.deltaY);
                    else if ("wheelDeltaX" in e) t = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed, i = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                    else if ("wheelDelta" in e) t = i = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
                    else {
                        if (!("detail" in e)) return;
                        t = i = -e.detail / 3 * this.options.mouseWheelSpeed
                    }
                    if (t *= this.options.invertWheelDirection, i *= this.options.invertWheelDirection, this.hasVerticalScroll || (t = i, i = 0), this.options.snap) return o = this.currentPage.pageX, a = this.currentPage.pageY, t > 0 ? o-- : t < 0 && o++, i > 0 ? a-- : i < 0 && a++, void this.goToPage(o, a);
                    o = this.x + n.round(this.hasHorizontalScroll ? t : 0), a = this.y + n.round(this.hasVerticalScroll ? i : 0), o > 0 ? o = 0 : o < this.maxScrollX && (o = this.maxScrollX), a > 0 ? a = 0 : a < this.maxScrollY && (a = this.maxScrollY), this.scrollTo(o, a, 0)
                }
            },
            _initSnap: function() {
                this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                    var e, t, i, o, a, r, s = 0,
                        c = 0,
                        l = 0,
                        d = this.options.snapStepX || this.wrapperWidth,
                        u = this.options.snapStepY || this.wrapperHeight;
                    if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                        if (this.options.snap === !0)
                            for (i = n.round(d / 2), o = n.round(u / 2); l > -this.scrollerWidth;) {
                                for (this.pages[s] = [], e = 0, a = 0; a > -this.scrollerHeight;) this.pages[s][e] = {
                                    x: n.max(l, this.maxScrollX),
                                    y: n.max(a, this.maxScrollY),
                                    width: d,
                                    height: u,
                                    cx: l - i,
                                    cy: a - o
                                }, a -= u, e++;
                                l -= d, s++
                            } else
                                for (r = this.options.snap, e = r.length, t = -1; s < e; s++)(0 === s || r[s].offsetLeft <= r[s - 1].offsetLeft) && (c = 0, t++), this.pages[c] || (this.pages[c] = []), l = n.max(-r[s].offsetLeft, this.maxScrollX), a = n.max(-r[s].offsetTop, this.maxScrollY), i = l - n.round(r[s].offsetWidth / 2), o = a - n.round(r[s].offsetHeight / 2), this.pages[c][t] = {
                                    x: l,
                                    y: a,
                                    width: r[s].offsetWidth,
                                    height: r[s].offsetHeight,
                                    cx: i,
                                    cy: o
                                }, l > this.maxScrollX && c++;
                        this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                    }
                }), this.on("flick", function() {
                    var e = this.options.snapSpeed || n.max(n.max(n.min(n.abs(this.x - this.startX), 1e3), n.min(n.abs(this.y - this.startY), 1e3)), 300);
                    this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, e)
                })
            },
            _nearestSnap: function(e, t) {
                if (!this.pages.length) return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
                var i = 0,
                    o = this.pages.length,
                    a = 0;
                if (n.abs(e - this.absStartX) < this.snapThresholdX && n.abs(t - this.absStartY) < this.snapThresholdY) return this.currentPage;
                for (e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX), t > 0 ? t = 0 : t < this.maxScrollY && (t = this.maxScrollY); i < o; i++)
                    if (e >= this.pages[i][0].cx) {
                        e = this.pages[i][0].x;
                        break
                    } for (o = this.pages[i].length; a < o; a++)
                    if (t >= this.pages[0][a].cy) {
                        t = this.pages[0][a].y;
                        break
                    } return i == this.currentPage.pageX && (i += this.directionX, i < 0 ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), e = this.pages[i][0].x), a == this.currentPage.pageY && (a += this.directionY, a < 0 ? a = 0 : a >= this.pages[0].length && (a = this.pages[0].length - 1), t = this.pages[0][a].y), {
                    x: e,
                    y: t,
                    pageX: i,
                    pageY: a
                }
            },
            goToPage: function(e, t, i, o) {
                o = o || this.options.bounceEasing, e >= this.pages.length ? e = this.pages.length - 1 : e < 0 && (e = 0), t >= this.pages[e].length ? t = this.pages[e].length - 1 : t < 0 && (t = 0);
                var a = this.pages[e][t].x,
                    r = this.pages[e][t].y;
                i = void 0 === i ? this.options.snapSpeed || n.max(n.max(n.min(n.abs(a - this.x), 1e3), n.min(n.abs(r - this.y), 1e3)), 300) : i, this.currentPage = {
                    x: a,
                    y: r,
                    pageX: e,
                    pageY: t
                }, this.scrollTo(a, r, i, o)
            },
            next: function(e, t) {
                var i = this.currentPage.pageX,
                    n = this.currentPage.pageY;
                i++, i >= this.pages.length && this.hasVerticalScroll && (i = 0, n++), this.goToPage(i, n, e, t)
            },
            prev: function(e, t) {
                var i = this.currentPage.pageX,
                    n = this.currentPage.pageY;
                i--, i < 0 && this.hasVerticalScroll && (i = 0, n--), this.goToPage(i, n, e, t)
            },
            _initKeys: function(e) {
                var i, n = {
                    pageUp: 33,
                    pageDown: 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40
                };
                if ("object" == typeof this.options.keyBindings)
                    for (i in this.options.keyBindings) "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase()
                        .charCodeAt(0));
                else this.options.keyBindings = {};
                for (i in n) this.options.keyBindings[i] = this.options.keyBindings[i] || n[i];
                c.addEvent(t, "keydown", this), this.on("destroy", function() {
                    c.removeEvent(t, "keydown", this)
                })
            },
            _key: function(e) {
                if (this.enabled) {
                    var t, i = this.options.snap,
                        o = i ? this.currentPage.pageX : this.x,
                        a = i ? this.currentPage.pageY : this.y,
                        r = c.getTime(),
                        s = this.keyTime || 0,
                        l = .25;
                    switch (this.options.useTransition && this.isInTransition && (t = this.getComputedPosition(), this._translate(n.round(t.x), n.round(t.y)), this.isInTransition = !1), this.keyAcceleration = r - s < 200 ? n.min(this.keyAcceleration + l, 50) : 0, e.keyCode) {
                        case this.options.keyBindings.pageUp:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? o += i ? 1 : this.wrapperWidth : a += i ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.pageDown:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? o -= i ? 1 : this.wrapperWidth : a -= i ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.end:
                            o = i ? this.pages.length - 1 : this.maxScrollX, a = i ? this.pages[0].length - 1 : this.maxScrollY;
                            break;
                        case this.options.keyBindings.home:
                            o = 0, a = 0;
                            break;
                        case this.options.keyBindings.left:
                            o += i ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.up:
                            a += i ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.right:
                            o -= i ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.down:
                            a -= i ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        default:
                            return
                    }
                    if (i) return void this.goToPage(o, a);
                    o > 0 ? (o = 0, this.keyAcceleration = 0) : o < this.maxScrollX && (o = this.maxScrollX, this.keyAcceleration = 0), a > 0 ? (a = 0, this.keyAcceleration = 0) : a < this.maxScrollY && (a = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(o, a, 0), this.keyTime = r
                }
            },
            _animate: function(e, t, i, n) {
                function o() {
                    var p, h, f, b = c.getTime();
                    return b >= u ? (a.isAnimating = !1, a._translate(e, t), void(a.resetPosition(a.options.bounceTime) || a._execEvent("scrollEnd"))) : (b = (b - d) / i, f = n(b), p = (e - r) * f + r, h = (t - l) * f + l, a._translate(p, h), void(a.isAnimating && s(o)))
                }
                var a = this,
                    r = this.x,
                    l = this.y,
                    d = c.getTime(),
                    u = d + i;
                this.isAnimating = !0, o()
            },
            handleEvent: function(e) {
                switch (e.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(e);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(e);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(e);
                        break;
                    case "orientationchange":
                    case "resize":
                        this._resize();
                        break;
                    case "transitionend":
                    case "webkitTransitionEnd":
                    case "oTransitionEnd":
                    case "MSTransitionEnd":
                        this._transitionEnd(e);
                        break;
                    case "wheel":
                    case "DOMMouseScroll":
                    case "mousewheel":
                        this._wheel(e);
                        break;
                    case "keydown":
                        this._key(e);
                        break;
                    case "click":
                        e._constructed || (e.preventDefault(), e.stopPropagation())
                }
            }
        }, r.prototype = {
            handleEvent: function(e) {
                switch (e.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(e);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(e);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(e)
                }
            },
            destroy: function() {
                this.options.interactive && (c.removeEvent(this.indicator, "touchstart", this), c.removeEvent(this.indicator, c.prefixPointerEvent("pointerdown"), this), c.removeEvent(this.indicator, "mousedown", this), c.removeEvent(t, "touchmove", this), c.removeEvent(t, c.prefixPointerEvent("pointermove"), this), c.removeEvent(t, "mousemove", this), c.removeEvent(t, "touchend", this), c.removeEvent(t, c.prefixPointerEvent("pointerup"), this), c.removeEvent(t, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
            },
            _start: function(e) {
                var i = e.touches ? e.touches[0] : e;
                e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = i.pageX, this.lastPointY = i.pageY, this.startTime = c.getTime(), this.options.disableTouch || c.addEvent(t, "touchmove", this), this.options.disablePointer || c.addEvent(t, c.prefixPointerEvent("pointermove"), this), this.options.disableMouse || c.addEvent(t, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
            },
            _move: function(e) {
                var t, i, n, o, a = e.touches ? e.touches[0] : e;
                c.getTime();
                this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, t = a.pageX - this.lastPointX, this.lastPointX = a.pageX, i = a.pageY - this.lastPointY, this.lastPointY = a.pageY, n = this.x + t, o = this.y + i, this._pos(n, o), e.preventDefault(), e.stopPropagation()
            },
            _end: function(e) {
                if (this.initiated) {
                    if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), c.removeEvent(t, "touchmove", this), c.removeEvent(t, c.prefixPointerEvent("pointermove"), this), c.removeEvent(t, "mousemove", this), this.scroller.options.snap) {
                        var i = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                            o = this.options.snapSpeed || n.max(n.max(n.min(n.abs(this.scroller.x - i.x), 1e3), n.min(n.abs(this.scroller.y - i.y), 1e3)), 300);
                        this.scroller.x == i.x && this.scroller.y == i.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = i, this.scroller.scrollTo(i.x, i.y, o, this.scroller.options.bounceEasing))
                    }
                    this.moved && this.scroller._execEvent("scrollEnd")
                }
            },
            transitionTime: function(e) {
                e = e || 0, this.indicatorStyle[c.style.transitionDuration] = e + "ms", !e && c.isBadAndroid && (this.indicatorStyle[c.style.transitionDuration] = "0.001s")
            },
            transitionTimingFunction: function(e) {
                this.indicatorStyle[c.style.transitionTimingFunction] = e
            },
            refresh: function() {
                this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (c.addClass(this.wrapper, "iScrollBothScrollbars"), c.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (c.removeClass(this.wrapper, "iScrollBothScrollbars"), c.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
                this.wrapper.offsetHeight;
                this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = n.max(n.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = n.max(n.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
            },
            updatePosition: function() {
                var e = this.options.listenX && n.round(this.sizeRatioX * this.scroller.x) || 0,
                    t = this.options.listenY && n.round(this.sizeRatioY * this.scroller.y) || 0;
                this.options.ignoreBoundaries || (e < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = n.max(this.indicatorWidth + e, 8), this.indicatorStyle.width = this.width + "px"), e = this.minBoundaryX) : e > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = n.max(this.indicatorWidth - (e - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", e = this.maxPosX + this.indicatorWidth - this.width) : e = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), t < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = n.max(this.indicatorHeight + 3 * t, 8), this.indicatorStyle.height = this.height + "px"), t = this.minBoundaryY) : t > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = n.max(this.indicatorHeight - 3 * (t - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", t = this.maxPosY + this.indicatorHeight - this.height) : t = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = e, this.y = t, this.scroller.options.useTransform ? this.indicatorStyle[c.style.transform] = "translate(" + e + "px," + t + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = e + "px", this.indicatorStyle.top = t + "px")
            },
            _pos: function(e, t) {
                e < 0 ? e = 0 : e > this.maxPosX && (e = this.maxPosX), t < 0 ? t = 0 : t > this.maxPosY && (t = this.maxPosY), e = this.options.listenX ? n.round(e / this.sizeRatioX) : this.scroller.x, t = this.options.listenY ? n.round(t / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(e, t)
            },
            fade: function(e, t) {
                if (!t || this.visible) {
                    clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                    var i = e ? 250 : 500,
                        n = e ? 0 : 300;
                    e = e ? "1" : "0", this.wrapperStyle[c.style.transitionDuration] = i + "ms",
                        this.fadeTimeout = setTimeout(function(e) {
                            this.wrapperStyle.opacity = e, this.visible = +e
                        }.bind(this, e), n)
                }
            }
        }, o.utils = c, "undefined" != typeof e && e.exports ? e.exports = o : t.IScroll = o
    }(window, document, Math)
}
