function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "progressGauge"
        }), this.gaugeBg = this.createChild("div", {
            className: "gaugeBg"
        }), this.gaugeMask = this.createChild("div", {
            className: "gaugeMask"
        }), this.gaugeFill = this.gaugeMask.createChild("div", {
            className: "gaugeFill"
        }), this._resetAnimInfo(), this._initEvents()
    }
    i(848);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(54)
        .dimensions,
        s = i(16),
        c = i(17)
        .getText,
        l = i(60),
        d = {
            PLAYER_EXPERIENCE: "playerExperience",
            GUILD_EXPERIENCE: "guildExperience",
            MOUNT_EXPERIENCE: "mountExperience",
            INVENTORY_PODS: "inventoryPods",
            FIGHT_TIMER: "fightTimer"
        },
        u = "-progressBarPref";
    o(n, a), e.exports = n, n.prototype._initEvents = function() {
        var e = this,
            t = window.dofus.connectionManager,
            i = window.gui,
            n = i.playerData;
        i.on("resize", function() {
            e._resize()
        }), n.on("characterSelectedSuccess", function() {
            var t = l.getValue(n.id + u, d.PLAYER_EXPERIENCE);
            t && (e.defaultMode = t, e._setMode(e.defaultMode), e._setPercentage(0))
        }), t.on("CharacterStatsListMessage", function(t) {
            var i = t.stats;
            if (e.playerPercentage = e._convertXpToPercentage(i.experience, i.experienceLevelFloor, i.experienceNextLevelFloor), e.gaugeMode === d.PLAYER_EXPERIENCE) {
                var n = window.gui.playerData.isLevelMax(),
                    o = e.playerPercentage;
                n && (o = 100), e._setPercentage(o)
            }
        }), t.on("GuildInformationsGeneralMessage", function(t) {
            e.guildPercentage = e._convertXpToPercentage(t.experience, t.expLevelFloor, t.expNextLevelFloor), e.gaugeMode === d.GUILD_EXPERIENCE && e._setPercentage(e.guildPercentage)
        }), t.on("MountSetMessage", function(t) {
            var i = t.mountData;
            e.mountPercentage = e._convertXpToPercentage(i.experience, i.experienceForLevel, i.experienceForNextLevel), e.gaugeMode === d.MOUNT_EXPERIENCE && e._setPercentage(e.mountPercentage)
        }), n.jobs.on("jobExperienceUpdate", function(t) {
            e["job" + t.jobId + "Percentage"] = t.percentage, e.gaugeMode === "job" + t.jobId && e._setPercentage(e["job" + t.jobId + "Percentage"])
        }), n.inventory.on("weightUpdated", function() {
            e.gaugeMode === d.INVENTORY_PODS && e._updateGaugeWithInventoryPods()
        }), i.fightManager.on("fightEnterPreparation", function(t) {
            t.isSpectator || e._setMode(d.FIGHT_TIMER, {
                duration: t.timeMaxBeforeFightStart
            })
        }), i.fightManager.on("fightEnterBattle", function() {
            n.isSpectator || (e.gaugeMode !== d.FIGHT_TIMER && e._setMode(d.FIGHT_TIMER), e._pauseAnimation())
        }), i.timeline.on("setTurnOf", function(t, i) {
            if (e.gaugeMode === d.FIGHT_TIMER) {
                var o = n.characters.controlledCharacterId;
                t.id === o ? e._animate(i) : (e._setStatic(), e._setPercentage(0))
            }
        }), i.fightManager.on("fightEnd", function() {
            e._setMode(e.defaultMode)
        })
    }, n.prototype._updateGaugeWithInventoryPods = function() {
        var e = window.gui.playerData.inventory;
        this._setPercentage(Math.round(e.weight / e.maxWeight * 100))
    }, n.prototype._setMode = function(e, t) {
        var i = t && "number" == typeof t.duration ? t.duration : null,
            n = t && "number" == typeof t.percentage ? t.percentage : 0;
        this.gaugeMode = e;
        var o = null;
        e.indexOf("job") !== -1 && (o = parseInt(e.split("job")[1], 10), e = "job");
        var a;
        switch (e) {
            case d.FIGHT_TIMER:
                a = "fightTimer", null !== i ? this._animate(i, n) : (this._setStatic(), this._setPercentage(n));
                break;
            case d.GUILD_EXPERIENCE:
                a = "guildXp", this._setStatic(), this._setPercentage(this.guildPercentage);
                break;
            case d.MOUNT_EXPERIENCE:
                a = "mountXp", this._setStatic(), this._setPercentage(this.mountPercentage);
                break;
            case d.INVENTORY_PODS:
                a = "inventoryPods", this._setStatic(), this._updateGaugeWithInventoryPods();
                break;
            case "job":
                a = "jobXp", this._setStatic(), this._setPercentage(this["job" + o + "Percentage"]);
                break;
            case d.PLAYER_EXPERIENCE:
            default:
                a = "playerXp";
                var r = window.gui.playerData.isLevelMax();
                n = this.playerPercentage, r && (n = 100, a = "playerXpLevelMax"), this._setStatic(), this._setPercentage(n)
        }
        this.setClassNames(["progressGauge", a])
    }, n.prototype._resetAnimInfo = function() {
        this.animationInfo = {
            startTime: 0,
            duration: 0,
            startFrom: 0
        }
    }, n.prototype._setStatic = function() {
        this.gaugeFill.setStyles({
            webkitAnimation: "initial",
            webkitAnimationPlayState: "initial"
        }), this._resetAnimInfo()
    }, n.prototype._setPercentage = function(e) {
        e || (e = 0), e = Math.max(0, Math.min(100, e)), this.gaugeFill.setStyle("webkitTransform", "translate3d(-" + (100 - e) / 2 + "%,0,0) scaleX(" + e / 100 + ")")
    }, n.prototype._convertXpToPercentage = function(e, t, i) {
        return (e - t) / (i - t) * 100
    }, n.prototype._animate = function(e, t) {
        if (this.gaugeMode !== d.FIGHT_TIMER) return console.error(new Error("ProgressGauge._animate: ProgressGauge is not in timer mode"));
        t = t || 0, t = Math.max(0, Math.min(100, t));
        var i = e / 100 * t;
        this._setStatic(), this._setPercentage(100), s.forceReflow(this.gaugeFill), this.animationInfo = {
            startTime: Date.now(),
            duration: e,
            startFrom: t
        }, this.gaugeFill.setStyles({
            webkitAnimation: "progressGaugeAnimation " + e + "ms linear -" + i + "ms",
            webkitAnimationPlayState: "running"
        })
    }, n.prototype._pauseAnimation = function() {
        return this.gaugeMode !== d.FIGHT_TIMER ? console.error(new Error("ProgressGauge._pauseAnimation: ProgressGauge is not in timer mode")) : void this.gaugeFill.setStyle("webkitAnimationPlayState", "paused")
    }, n.prototype._resize = function() {
        window.gui.ipadRatio ? this.setStyle("width", "100%") : this.setStyle("width", r.shortcutBarSize - 9 + "px");
        var e = this.animationInfo;
        if (this.gaugeMode === d.FIGHT_TIMER && 0 !== e.startTime) {
            var t = Date.now() - e.startTime;
            if (t < e.duration) {
                var i = t / e.duration * (100 - e.startFrom),
                    n = e.startFrom + i;
                this._animate(e.duration - t, n)
            }
        }
    }, n.prototype.openPrefMenu = function() {
        function e() {
            i.defaultMode = this.value, i._setMode(i.defaultMode), l.setValue(window.gui.playerData.id + u, i.defaultMode)
        }

        function t(t, o) {
            n.push({
                caption: t,
                value: o,
                cb: e,
                ticked: i.defaultMode === o
            })
        }
        var i = this,
            n = [];
        t(c("ui.banner.xpCharacter"), "playerExperience"), t(c("ui.common.weight"), "inventoryPods"), window.gui.playerData.guild.current && t(c("ui.banner.xpGuild"), "guildExperience"), window.gui.playerData.equippedMount && t(c("ui.banner.xpMount"), "mountExperience");
        for (var o in window.gui.playerData.jobs.list) {
            var a = window.gui.playerData.jobs.list[o];
            t(c("ui.common.xp") + " " + a.info.nameId, "job" + a.id)
        }
        window.gui.openContextualMenu("generic", {
            title: c("ui.banner.customGauge"),
            actions: n
        })
    }
}
