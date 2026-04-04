function(e, t, i) {
    var n = i(16),
        o = i(14),
        a = o();
    t.deleteFiles = function(e, t, i) {
        if (!a.wizAssets) {
            var o = new Error("deleteFiles called despite wizAssets not available");
            return i ? i(o) : console.error(o)
        }
        return e && (e = e.map(function(e) {
            return n.getCacheFolder() + e
        })), a.wizAssets.deleteFiles(e, t, i)
    },
    t.downloadFile = function(e, t, i, o) {
        if (!a.wizAssets) {
            var r = new Error("downloadFile called despite wizAssets not available");
            return o ? o(r) : console.error(r)
        }
        return a.wizAssets.downloadFile(e, n.getCacheFolder() + t, i, o)
    }
}
