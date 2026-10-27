function(e, t, i) {
    function n(e) {
        var t = e / r.MAP_SCENE_HEIGHT;
        f.mapWidth = ~~(r.MAP_SCENE_WIDTH * t), f.mapHeight = ~~(r.MAP_SCENE_HEIGHT * t), f.zoom = r.PIXEL_RATIO * t, f.sideBarWidth = f.screenWidth - f.mapWidth, f.bottomBarHeight = f.screenHeight - f.mapHeight
    }

    function o(e, t) {
        var i, n, o;
        "narrow" === e ? (i = f.screenWidth, n = r.CHAT_BTN_MIN_WIDTH, f.mainControlBarSize = 132, o = r.PING_EMOTE_BTN_NARROW_MIN_WIDTH) : (i = f.screenHeight, n = r.CHAT_BTN_MIN_HEIGHT, f.mainControlBarSize = 72, o = r.PING_EMOTE_BTN_WIDE_MIN_HEIGHT);
        var a = 0;
        "narrow" === e ? (f.posChatBtn = a, a += n, f.pingEmoteBtnSize = o, f.posPingEmoteBtn = a, a += o) : (f.pingEmoteBtnSize = o, o = 0), f.posMainControlBar = a, a += f.mainControlBarSize;
        var c = l.gui.shortcutBar,
            d = l.gui.menuBar,
            u = i - f.mainControlBarSize - n,
            p = t ? s.menubarSizeInFight : s.menubarSize,
            h = d.computeMinimumSize(p, e),
            b = ~~(u - h - o),
            m = c.computeBestSize(b, e),
            M = u - m - o - h;
        f.menuBarSize = h + M, f.shortcutBarSize = m, f.posShortcutBar = a, a += f.shortcutBarSize, f.posMenuBar = a, a += f.menuBarSize, "wide" === e && (f.posChatBtn = a, f.posPingEmoteBtn = a)
    }

    function a(e, t) {
        var i;
        return i = "narrow" === e ? t ? s.toolbarThicknessInFight : 1 : 3, i * r.SHORTCUT_ICON_SIZE + r.SHORTCUT_GAUGE_SIZE + 5
    }
    var r = i(13),
        s = i(55),
        c = i(14),
        l = c(),
        d = 175,
        u = 310,
        p = l.document.body,
        h = l.getComputedStyle(p, null),
        f = {
            bodyPaddingLeft: 0,
            bodyPaddingRight: 0,
            viewportWidth: 0,
            viewportHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            windowFullScreenWidth: 0,
            windowFullScreenHeight: 0,
            physicalScreenWidth: Math.max(l.screen.width, l.screen.height),
            physicalScreenHeight: Math.min(l.screen.width, l.screen.height),
            physicalToViewportRatio: 0,
            mapWidth: 0,
            mapHeight: 0,
            mapLeft: 0,
            mapTop: 0,
            mapRight: 0,
            mapBottom: 0
        };
    t.dimensions = f, t.updateScreen = function() {
        f.bodyPaddingLeft = parseInt(h.getPropertyValue("padding-left"), 10), f.bodyPaddingRight = parseInt(h.getPropertyValue("padding-right"), 10), f.viewportWidth = l.document.documentElement.clientWidth, f.viewportHeight = l.document.documentElement.clientHeight, f.screenWidth = f.viewportWidth - f.bodyPaddingLeft - f.bodyPaddingRight, f.screenHeight = f.viewportHeight, f.windowFullScreenWidth = f.screenWidth, f.windowFullScreenHeight = f.screenHeight, f.physicalToViewportRatio = f.viewportWidth / f.physicalScreenWidth
    }, t.updateScreen(), t.resizeNarrowScreen = function(e) {
        var t = "narrow",
            i = f.screenHeight - a(t, e),
            s = i / r.MAP_SCENE_HEIGHT,
            c = ~~(r.MAP_SCENE_WIDTH * s);
        c > f.screenWidth && (s = f.screenWidth / r.MAP_SCENE_WIDTH, i = ~~(r.MAP_SCENE_HEIGHT * s)), n(i), f.bottomBarHeight = Math.min(f.bottomBarHeight, d), o(t, e), f.mapLeft = Math.round(f.sideBarWidth / 2), f.mapTop = f.screenHeight - f.bottomBarHeight - f.mapHeight, f.mapRight = f.mapLeft + f.mapWidth, f.mapBottom = f.mapTop + f.mapHeight, f.windowFullScreenWidth = f.screenWidth, f.windowFullScreenHeight = f.mapBottom, f.screenExceptToolbar = {
            left: 0,
            top: 0,
            width: f.screenWidth,
            height: f.screenHeight - f.bottomBarHeight
        }
    }, t.resizeWideScreen = function(e) {
        var t = "wide",
            i = f.screenWidth - a(t, e),
            c = i / r.MAP_SCENE_WIDTH,
            l = ~~(r.MAP_SCENE_HEIGHT * c);
        n(Math.min(l, f.screenHeight)), f.sideBarWidth = s.fullscreen ? f.sideBarWidth : Math.min(f.sideBarWidth, u), o(t, e), f.mapLeft = s.fullscreen ? 0 : f.screenWidth - f.sideBarWidth - f.mapWidth, f.mapTop = Math.round(f.bottomBarHeight / 2), f.mapRight = f.mapLeft + f.mapWidth, f.mapBottom = f.mapTop + f.mapHeight, f.windowFullScreenWidth = f.screenWidth, f.windowFullScreenHeight = f.screenHeight, f.screenExceptToolbar = {
            left: 0,
            top: 0,
            width: f.screenWidth - f.sideBarWidth,
            height: f.screenHeight
        }
    }
}
