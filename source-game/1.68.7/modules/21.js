function(e, t) {
    function i(e) {
        var t = parseInt(e, 10);
        return t > 9 ? t : "0" + t
    }

    function n(e) {
        this.timestamp = this.baseTimestamp = e
    }
    var o = null;
    t.time = {
        serverTimeLag: 0,
        serverUtcTimeLag: 0,
        timezoneOffset: 0,
        dofusTimeYearLag: -1370
    };
    var a = function() {
        return Date.now()
    };
    t.leadWithZero = i, t.initialize = function(e, i, n) {
        o = i, n && (a = n), e.on("BasicTimeMessage", function(e) {
            var i = a(),
                n = t.time;
            n.serverTimeLag = 1e3 * (e.timestamp + 60 * e.timezoneOffset) - i, n.serverUtcTimeLag = 1e3 * e.timestamp - i, n.timezoneOffset = 60 * e.timezoneOffset * 1e3
        })
    }, t.now = function() {
        return a() + t.time.serverUtcTimeLag
    }, t.DofusDate = n, n.prototype.getLocalDate = function(e) {
        var i = new Date(this.baseTimestamp);
        return this.dofusDate = e, this.date = i, this.year = i.getFullYear() + (e ? t.time.dofusTimeYearLag : 0), this.month = i.getMonth(), this.day = i.getDate(), this.hour = i.getHours(), this.minute = i.getMinutes(), this.timestamp = i.getTime(), this
    }, n.prototype.getServerDate = function(e) {
        var i = new Date(this.baseTimestamp + t.time.timezoneOffset);
        return this.dofusDate = e, this.date = i, this.year = i.getUTCFullYear() + (e ? t.time.dofusTimeYearLag : 0), this.month = i.getUTCMonth(), this.day = i.getUTCDate(), this.hour = i.getUTCHours(), this.minute = i.getUTCMinutes(), this.timestamp = i.getTime(), this
    }, n.prototype.toString = function(e) {
        if (!this.date) return {};
        var n = !this.dofusDate && e,
            a = this.year + (n ? t.time.dofusTimeYearLag : 0),
            r = i(this.day),
            s = i(this.month + 1),
            c = i(this.hour),
            l = i(this.minute);
        return {
            date: o("ui.time.dateNumbers", r, s, a),
            time: c + ":" + l,
            year: a,
            month: s,
            monthName: window.gui.databases.Months[this.month].nameId,
            day: r,
            hour: c,
            minute: l
        }
    }
}
