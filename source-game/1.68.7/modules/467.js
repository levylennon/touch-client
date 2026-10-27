function(e, t, i) {
    function n(e) {
        for (var t = "", i = 0; i < e.length; i += 1) i > 0 && (t += ", "), t += e[i];
        return t + "."
    }

    function o(e) {
        var t = e.isSpecialization,
            i = t ? M : m,
            o = t ? _ : g,
            a = window.gui.playerData.jobs.getJobNpcNameById(i),
            r = [];
        return r.push(f("ui.skill.jobNotKnown", n(e.jobNameList))), r.push(f("ui.npc.learnJobs", a, "{mapWithFlag," + o[0] + "," + o[1] + "," + window.gui.playerData.position.worldmapId + "}")), r
    }

    function a(e) {
        var t = e.jobNameList,
            i = e.jobLevelList,
            n = e.levelMinList,
            o = [];
        o.push(f("ui.skill.levelLow"));
        for (var a = 0; a < t.length; a += 1) o.push(f("ui.skill.levelLowJob", t[a], n[a], i[a]));
        return o
    }

    function r(e) {
        var t = [];
        return t.push(f("ui.skill.toolNeeded", n(e.jobNameList))), t
    }

    function s() {
        var e = [];
        return e.push(f("ui.skill.resourceAlreadyHarvested")), e
    }

    function c(e) {
        var t = [];
        for (var i in e) {
            var n = e[i],
                o = z[n.type](n);
            t.push(o)
        }
        return t
    }

    function l(e, t) {
        if (!e) return "jobNotKnown";
        if (e.experience.jobLevel < t._levelMin) return "levelLow";
        {
            if (t._parentJobId !== v) return "resourceAlreadyHarvested";
            var i = window.gui.playerData.inventory.getCurrentWeapon() || {};
            if (!i.item || e.info.toolIds.indexOf(i.item.id) === -1) return "toolNeeded"
        }
    }

    function d(e, t) {
        return h.getDataMap("Jobs", [e], null, function(i, n) {
            if (i) return t(i);
            var o = n[e] || {};
            t(null, 0 !== o.specializationOfId)
        })
    }

    function u(e, t, i) {
        var n = {
            type: "",
            jobNameList: [],
            jobLevelList: [],
            levelMinList: [],
            isSpecialization: []
        };
        return n.type = l(e, t), n.type && (n.jobNameList.push(t._parentJobName), "levelLow" === n.type && (n.jobLevelList.push(e.experience.jobLevel), n.levelMinList.push(t._levelMin))), "jobNotKnown" !== n.type ? i(null, n) : void d(t._parentJobId, function(e, t) {
            return e ? (console.error("Failed to get Job", e), i(e)) : (n.isSpecialization = t, i(null, n))
        })
    }

    function p(e, t) {
        var i = window.gui.playerData.jobs.list,
            n = {},
            o = [];
        b.eachSeries(e, function(e, a) {
            var r = e._parentJobId,
                s = r === A ? O : i[r];
            u(s, e, function(e, i) {
                if (e) return console.error("Failed to get message params", e), t(e);
                var s = i.type;
                if (!s || o.indexOf(r) !== -1) return void a();
                if (n[s]) {
                    var c = n[s];
                    c.jobNameList = c.jobNameList.concat(i.jobNameList), c.jobLevelList = c.jobLevelList.concat(i.jobLevelList), c.levelMinList = c.levelMinList.concat(i.levelMinList)
                } else n[s] = i;
                o.push(r), a()
            })
        }, function(e) {
            return e ? t(e) : void t(null, n)
        })
    }
    var h = i(130),
        f = i(17)
        .getText,
        b = i(18),
        m = i(13)
        .JOB_NPC_ID,
        M = i(13)
        .JOB_FM_NPC_ID,
        g = [1, -20],
        _ = [-5, -13],
        A = 1,
        O = {
            experience: {
                jobLevel: 100
            },
            info: {
                toolIds: []
            }
        },
        v = 36,
        y = 102,
        z = {
            jobNotKnown: o,
            levelLow: a,
            toolNeeded: r,
            resourceAlreadyHarvested: s
        };
    t.displayNotification = function(e, t) {
        var i = window.isoEngine.mapRenderer.interactiveElements,
            n = i[e],
            o = [];
        t ? o = t.filter(function(e) {
            return e._parentJobId && (e.skillId === y || e._parentJobId !== A)
        }) : n && (o = n.disabledSkills.length > 0 ? n.disabledSkills.filter(function(e) {
            return e._parentJobId && e._parentJobId === v
        }) : n.enabledSkills.filter(function(e) {
            return e._parentJobId && e._parentJobId === v
        })), p(o, function(e, t) {
            if (e) return void console.error("Failed to determine message", e);
            var i = Object.keys(t)
                .length;
            if (0 !== i) {
                i > 1 && t.jobNotKnown && delete t.jobNotKnown;
                var n = [];
                n = c(t);
                for (var o = 0; o < n.length; o++)
                    for (var a = 0; a < n[o].length; a++) window.gui.chat.logError(n[o][a])
            }
        })
    }
}
