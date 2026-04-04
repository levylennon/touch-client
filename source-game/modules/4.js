function(e, t) {
    "function" != typeof String.prototype.startsWith && (String.prototype.startsWith = function(e, t) {
        return void 0 === t && (t = 0), this.slice(t, e.length + t) === e
    }), "function" != typeof String.prototype.endsWith && (String.prototype.endsWith = function(e, t) {
        var i = this.toString();
        (void 0 === t || t > i.length) && (t = i.length), t -= e.length;
        var n = i.indexOf(e, t);
        return n !== -1 && n === t
    }), "function" != typeof Number.isInteger && (Number.isInteger = function(e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e
    })
}
