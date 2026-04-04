function(e, t) {
    t.loadScript = function(e, t) {
        var i = document.getElementsByTagName("head")[0],
            n = document.createElement("script");
        n.setAttribute("crossorigin", "anonymous"), n.onload = function() {
            return this.onload = null, this.onerror = null, t()
        }, n.onerror = function() {
            return this.onload = null, this.onerror = null, t(new Error("Error loading script: " + e))
        }, n.type = "text/javascript", n.src = e, i.appendChild(n)
    }, t.loadJson = function(e, t) {
        var i = new XMLHttpRequest;
        i.overrideMimeType("application/json"), i.onreadystatechange = function() {
            if (4 === ~~i.readyState) {
                if (i.onreadystatechange = null, 200 !== ~~i.status) return t(new Error("Error loading json: " + e));
                var n;
                try {
                    n = JSON.parse(i.responseText)
                } catch (o) {
                    return t(o)
                }
                return t(null, n)
            }
        }, i.open("GET", e, !0), i.send(null)
    }
}
