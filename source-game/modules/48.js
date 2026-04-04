function(e, t) {
    "use strict";

    function i(e) {
        var t = void 0;
        return t = "object" === ("undefined" == typeof HTMLElement ? "undefined" : n(HTMLElement)) ? e instanceof HTMLElement : !!e && "object" === ("undefined" == typeof e ? "undefined" : n(e)) && 1 === e.nodeType && "string" == typeof e.nodeName
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    t.isElement = i
}
