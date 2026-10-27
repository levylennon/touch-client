function(e, t, i) {
    function n() {
        a.call(this, {
            className: "guildHouseInfoWindow",
            positionInfo: {
                top: "c",
                left: "c",
                width: 450,
                height: 380
            }
        }), this.rights = [], this.rightsText = [r("ui.guildHouse.Right1"), r("ui.guildHouse.Right2"), r("ui.guildHouse.Right4"), r("ui.guildHouse.Right8"), r("ui.guildHouse.Right16"), r("ui.guildHouse.Right32"), r("ui.guildHouse.Right64"), r("ui.guildHouse.Right128"), r("ui.guildHouse.Right256")], this.setupDom(), this.on("open", this.open)
    }
    i(1093);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(17)
        .getText,
        s = i(962),
        c = i(765),
        l = i(130),
        d = 9;
    o(n, a), e.exports = n, n.prototype.setupDom = function() {
        this.tabs = this.windowBody.appendChild(new s({
            className: "tabs"
        }));
        var e = [{
            id: "content"
        }];
        this.rights = this.windowBody.appendChild(new c(e, null, {
            clickable: !1
        })), this.skills = this.windowBody.appendChild(new c(e, null, {
            clickable: !1
        })), this.tabs.addTab(r("ui.social.guildHouseRights"), this.rights), this.tabs.addTab(r("ui.common.abilities"), this.skills), this.tabs.openTab(0)
    }, n.prototype.open = function(e) {
        var t, i = this,
            n = e.guildshareParams,
            o = e.skillListIds;
        for (this.windowTitle.setText(e.houseName), this.tabs.openTab(0), this.rights.clearContent(), this.skills.clearContent(), t = 0; t < d; t++) n >> t & 1 && this.rights.addRow({
            content: this.rightsText[t]
        });
        l.getDataArray("Skills", o, function(e, n) {
            for (e && console.error("Failed to retrieve skills data", e), t = 0; t < n.length; t++) i.skills.addRow({
                content: n[t].nameId
            })
        })
    }
}
