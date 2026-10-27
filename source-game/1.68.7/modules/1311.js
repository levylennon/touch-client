function(e, t, i) {
    function n(e) {
        function t() {
            i.changeVolume(this.volume), c.playUiSound("SPEC_BUTTON")
        }
        o.call(this, "div", {
            className: "SoundChannelVolume"
        });
        var i = this;
        this.preferences = s.getValue("soundPreferences", c.getDefaultParams(), !0), this.channelId = e.channelId;
        var n = e.text;
        this.createChild("div", {
            className: "label",
            text: n
        });
        for (var r = this.createChild("div", {
                className: "volumeButtons"
            }), l = this.buttons = [], d = 0; d < 5; d++) {
            var u = r.appendChild(new a("", {
                className: ["volume", "volume" + d]
            }));
            l.push(u), u.volume = d / 4, u.disable(), u.on("tap", t)
        }
        this.preferences[this.channelId] = this.preferences[this.channelId] || {
            volume: 0,
            muted: !0
        }, this.setPosition(this.preferences[this.channelId].volume || 0)
    }
    i(1312);
    var o = i(72),
        a = i(86)
        .DofusButton,
        r = i(56)
        .inherits,
        s = i(60),
        c = i(91);
    r(n, o), e.exports = n, n.prototype.setPosition = function(e) {
        e = Math.max(0, Math.min(4, ~~(4 * e)));
        for (var t = 0; t < 5; t++) this.buttons[t].enable();
        this.buttons[e].disable()
    }, n.prototype.changeVolume = function(e) {
        c.setChannelVolume(this.channelId, e), this.setPosition(e), this.preferences[this.channelId].volume = e, this.preferences[this.channelId].muted = 0 === e, s.setValue("soundPreferences", this.preferences, null, !0)
    }
}
