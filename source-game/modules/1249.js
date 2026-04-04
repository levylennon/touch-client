function(e, t, i) {
    function n() {
        function e(e) {
            var t, i = u.freeOnFailCheckbox.isActivate() && u.freeOnFailCheckbox.isVisible();
            t = u.payingCheckbox.isActivate() ? o.CRAFT_OPTION_NOT_FREE : o.CRAFT_OPTION_NONE;
            var n;
            n = i ? o.CRAFT_OPTION_NOT_FREE_EXCEPT_ON_FAIL : o.CRAFT_OPTION_NONE;
            var a;
            a = u.noResourceCheckbox.isActivate() ? o.CRAFT_OPTION_RESOURCES_REQUIRED : o.CRAFT_OPTION_NONE;
            var r;
            return r = !u.jobsPublicMode[u.job.id] && e || u.jobsPublicMode[u.job.id] && !e ? o.CRAFT_OPTION_PUBLIC_ON_CONNECTION : o.CRAFT_OPTION_NONE, t + n + a + r
        }

        function t() {
            u.jobCrafterDirectorySettings = {
                jobId: u.job.id,
                minSlot: f,
                userDefinedParams: e()
            }, window.dofus.sendMessage("JobCrafterDirectoryDefineSettingsMessage", {
                settings: u.jobCrafterDirectorySettings
            })
        }

        function i(e) {
            var t = window.gui.playerData.jobs.craftersSettings,
                i = {};
            for (var n in t)
                if (t[n].jobId === e) {
                    i = t[n];
                    break
                } var a = i.userDefinedParams,
                r = 0 !== (a & o.CRAFT_OPTION_NOT_FREE),
                s = 0 !== (a & o.CRAFT_OPTION_NOT_FREE_EXCEPT_ON_FAIL),
                c = 0 !== (a & o.CRAFT_OPTION_RESOURCES_REQUIRED),
                l = 0 !== (a & o.CRAFT_OPTION_PUBLIC_ON_CONNECTION);
            u.payingCheckbox.toggleActivation(r), u.freeOnFailCheckbox.toggleActivation(s), u.noResourceCheckbox.toggleActivation(c), u.publicButton.setText(l ? h : p), u.jobsPublicMode[e] = l, u.selector.clearContent();
            for (var d = window.gui.playerData.jobs.getMaxSlotsByJobId(u.job.id), f = 1; f <= d; f += 1) u.selector.addOption(f, f);
            u.selector.setValue(i.minSlot ? i.minSlot : 1)
        }

        function n(e, t) {
            window.dofus.sendMessage("JobAllowMultiCraftRequestSetMessage", {
                jobId: e,
                enabled: t
            })
        }

        function a() {
            u.jobCrafterDirectorySettings = {
                jobId: u.job.id,
                minSlot: f,
                userDefinedParams: e(!0)
            }, window.dofus.sendMessage("JobCrafterDirectoryDefineSettingsMessage", {
                settings: u.jobCrafterDirectorySettings
            }), n(u.job.id, !u.jobsPublicMode[u.job.id])
        }
        r.call(this, {
            className: "JobOptionsWindow",
            title: c("ui.craft.jobOptions"),
            positionInfo: {
                left: "c",
                top: "c",
                width: 400,
                height: 260
            }
        });
        var u = this;
        this.jobsPublicMode = {};
        var p = c("ui.craft.enablePublicMode"),
            h = c("ui.craft.disablePublicMode"),
            f = 1;
        this.once("open", function() {
            var e = u.windowBody.createChild("div", {
                className: "container"
            });
            e.createChild("div", {
                text: c("ui.craft.referencingOptions")
            }), u.payingCheckbox = e.appendChild(new l(c("ui.craft.notFree"))), u.freeOnFailCheckbox = e.appendChild(new l(c("ui.craft.freeIfFailed"))), u.freeOnFailCheckbox.addClassNames("freeOnFail"), u.noResourceCheckbox = e.appendChild(new l(c("ui.craft.ressourcesNeeded")));
            var i = e.createChild("div", {
                className: "selectorWrapper"
            });
            i.createChild("div", {
                className: "selectorLabel",
                text: c("ui.craft.minItemInCraft")
            }), u.selector = i.appendChild(new d), u.selector.on("change", function(e) {
                f = Number(e)
            });
            var n = u.windowBody.createChild("div", {
                className: "buttons"
            });
            this.publicButton = n.appendChild(new s(p, {
                className: "publicButton"
            })), this.publicButton.on("tap", a), this.saveButton = n.appendChild(new s(c("ui.common.save"), {
                className: "saveButton"
            })), this.saveButton.on("tap", t), window.gui.playerData.jobs.on("jobPublicMode", function(e) {
                u.publicButton.setText(e ? h : p), u.jobsPublicMode[u.job.id] = e
            })
        }), this.on("open", function(e) {
            this.job = window.gui.playerData.jobs.list[e.jobId], this.freeOnFailCheckbox.toggleDisplay(Boolean(this.job.info.specializationOfId)), i(e.jobId)
        }), window.gui.on("disconnect", function() {
            u.jobsPublicMode = {}
        })
    }
    i(1250);
    var o = i(1251),
        a = i(56)
        .inherits,
        r = i(70),
        s = i(86)
        .DofusButton,
        c = i(17)
        .getText,
        l = i(594),
        d = i(945);
    a(n, r), e.exports = n
}
