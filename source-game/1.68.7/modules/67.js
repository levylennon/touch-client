function(e, t, i) {
    function n(e) {
        var i = t.getCoordinatesRelativeToBody(e.left, e.top);
        return {
            top: i.y,
            left: i.x,
            bottom: i.y + e.height,
            right: i.x + e.width,
            width: e.width,
            height: e.height,
            x: i.x,
            y: i.y
        }
    }

    function o(e, t, i, n, o) {
        var r = i - e;
        r < u && (r = n, r + e > a.screenWidth - u && (r = Math.max(u, a.screenWidth - u - e)));
        var s = Math.max(o - t, u),
            l = c.gui.getPortraitViewport();
        return c.gui.isPortraitMode() && s + t > l.height && (s = l.height - t), {
            x: Math.round(r),
            y: Math.round(s)
        }
    }
    var a = i(54)
        .dimensions,
        r = i(68),
        s = i(14),
        c = s(),
        l = r.FINGER_OFFSET,
        d = l / 2,
        u = r.OFFSET_FROM_SCREEN;
    t.getCoordinatesFromNotch = function(e, t) {
        return {
            x: e + a.bodyPaddingLeft,
            y: t
        }
    }, t.getCoordinatesRelativeToBody = function(e, t) {
        return {
            x: e - a.bodyPaddingLeft,
            y: t
        }
    }, t.positionNextTo = function(e, t, i) {
        e.setStyle("opacity", 0), e.show();
        var o = n(t.rootElement.getBoundingClientRect()),
            r = n(e.rootElement.getBoundingClientRect()),
            s = 0,
            c = 0;
        if (i && i.padding) {
            var l = i.padding;
            r.width += 2 * l, r.height += 2 * l
        }
        o.left > r.width ? s = o.left - r.width : a.screenWidth - o.right > r.width && (s = o.left + o.width), c = a.screenHeight - o.bottom + o.height > r.height ? o.top : o.top + o.height > r.height ? o.top + o.height - r.height : a.screenHeight - r.height, e.setStyles({
            left: Math.round(s) + "px",
            top: Math.round(c) + "px"
        }), e.setStyle("opacity", 1)
    }, t.getElementPositionAt = function(e, i, n) {
        var a = t.getCoordinatesRelativeToBody(i, n),
            r = c.gui.isPortraitMode() ? c.gui.getScaleForPortrait() : 1;
        return i = a.x / r, n = a.y / r, o(e.rootElement.clientWidth, e.rootElement.clientHeight, i - d, i + d, n - d)
    };
    var p = 60;
    t.getElementPositionCenteredAt = function(e, i, n) {
        var o = e.rootElement.clientWidth,
            a = e.rootElement.clientHeight;
        return t.getCenteredTooltipPosition(o, a, i, n, p)
    }, t.getCenteredTooltipPosition = function(e, i, n, o, r) {
        var s = t.getCoordinatesRelativeToBody(n, o);
        n = s.x, o = s.y;
        var c = n - e / 2;
        c < u ? c = u : c + e > a.screenWidth - u && (c = a.screenWidth - u - e);
        var l;
        return r ? (l = o - i - r, l < u && (l = o + r)) : l = Math.max(o - i / 2, u), {
            x: Math.round(c),
            y: Math.round(l)
        }
    }, t.getElementPositionAround = function(e, t) {
        var i, a;
        a = e && e.rootElement ? {
            width: e.rootElement.clientWidth,
            height: e.rootElement.clientHeight
        } : {
            width: 0,
            height: 0
        }, i = t && t.rootElement ? n(t.rootElement.getBoundingClientRect()) : {
            width: 0,
            height: 0,
            left: 0,
            top: 0
        };
        var r = c.gui.isPortraitMode() ? c.gui.getScaleForPortrait() : 1,
            s = i.width / 2,
            l = i.height / 2,
            u = i.left / r + s,
            p = i.top / r + l;
        return s = s < d ? d : s, l = l < d ? d : l, o(a.width, a.height, u - s, u + s, p - l)
    }, t.getTargetRect = function(e) {
        return e.rootElement.getBoundingClientRect()
    }, t.newTargetRect = function(e, t, i, n) {
        return {
            left: e - i / 2,
            top: t - n / 2,
            width: i,
            height: n
        }
    }, t.getBestTooltipPosition = function(e, t, i, o) {
        i = n(i);
        var r, s, c = i.left + i.width / 2,
            l = i.top + i.height / 2;
        return s = i.top - o - t, s >= u ? r = c - e / 2 : (r = c > a.screenWidth / 2 ? i.left - o - e : c + i.width / 2 + o, s = l - t / 2), r < u ? r = u : r + e > a.screenWidth - u && (r = a.screenWidth - u - e), s < u ? s = u : s + t > a.screenHeight - u && (s = a.screenHeight - u - t), {
            x: Math.round(r),
            y: Math.round(s)
        }
    }
}
