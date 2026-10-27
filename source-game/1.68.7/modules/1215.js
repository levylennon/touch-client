function(e, t, i) {
    function n() {
        r.call(this, "div", {
            className: "GuildCustomizationPanel"
        }), this._isActive = !1, this.on("open", function() {
            this._isActive || (this._isActive = !0, this._setupDom())
        }), this.on("close", this._onClose)
    }
    i(1216);
    var o = i(17)
        .getText,
        a = i(56)
        .inherits,
        r = i(72),
        s = i(810),
        c = i(1217);
    a(n, r), e.exports = n, n.prototype._onClose = function() {
        this.clearContent(), this.motd = null, this.privateMsg = null, this.publicMsg = null, this._isActive = !1
    }, n.prototype._setupDom = function() {
        var e = this.createChild("div", {
                className: "contentDiv"
            }),
            t = e.createChild("div", {
                className: "publicDiv"
            }),
            i = e.createChild("div", {
                className: "privateDiv"
            });
        t.createChild("div", {
            className: "image"
        }), this.publicMsg = new c(t, "publicMsg", s.SOCIAL_INFO_GUILD_PUBLIC_MSG, o("tablet.social.publicMsg"), o("tablet.social.publicMsgHelp")), this.motd = new c(i, "motd", s.SOCIAL_INFO_GUILD_MOTD, o("tablet.social.motd"), o("tablet.social.motdHelp")), this.privateMsg = new c(i, "privateMsg", s.SOCIAL_INFO_GUILD_PRIVATE_MSG, o("tablet.social.privateMsg"), o("tablet.social.privateMsgHelp"))
    }
}
