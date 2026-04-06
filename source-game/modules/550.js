function(e, t, i) {
    // almanaxDataClass
    function n() {
        o.call(this), this._calendarDate = -1, this._merydeName = ""
    }
    var o = i(59)
        .EventEmitter,
        a = i(56)
        .inherits;
    a(n, o), e.exports = n, n.prototype.initialize = function() {
        this._setupListeners()
    }, n.prototype._setupListeners = function() {
        var e = this,
            t = window.dofus.connectionManager;
        t.on("AlmanachCalendarDateMessage", function(t) {
            e._calendarDate = t.date, e._merydeName = t._merydeName, e.emit("almanachUpdate")
        })
    }, n.prototype.isCurrentAlmanax = function(e) {
        return this._calendarDate === e
    }, n.prototype.getDate = function() {
        return this._calendarDate
    }, n.prototype.getMerydeName = function() {
        return this._merydeName
    }, n.prototype.getCalendar = function() {
        return window.gui.databases.AlmanaxCalendars[this._calendarDate]
    }
}
