function(e, t) {
    var i = !1;
    "ontouchstart" in window && (i = !0);
    var n, o = {
        x: 0,
        y: 0
    };
    n = i ? function(e, t) {
        t = t || {};
        var i = e.touches || [],
            n = i.length;
        if (0 === n) return {
            x: o.x,
            y: o.y,
            touches: [],
            touchCount: 0
        };
        for (var a = [], r = 0; r < n; r += 1) a.push({
            x: i[r].clientX,
            y: i[r].clientY
        });
        o.x = i[0].clientX, o.y = i[0].clientY;
        var s = document.getElementById("resizableBody");
        return s && t.useScrollValue && (o.y += s.scrollTop || 0), {
            x: o.x,
            y: o.y,
            touches: a,
            touchCount: n
        }
    } : function(e, t) {
        t = t || {}, o.x = e.clientX, o.y = e.clientY;
        var i = document.getElementById("resizableBody");
        return i && t.useScrollValue && (o.y += i.scrollTop || 0), {
            x: o.x,
            y: o.y,
            touchCount: "mouseup" === e.type ? 0 : 1,
            touches: [{
                x: o.x,
                y: o.y
            }]
        }
    }, e.exports = {
        canTouch: i,
        getPosition: n,
        position: o,
        events: {
            start: i ? "touchstart" : "mousedown",
            move: i ? "touchmove" : "mousemove",
            end: i ? "touchend" : "mouseup"
        }
    }
}
