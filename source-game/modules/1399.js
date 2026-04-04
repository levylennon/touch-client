function(e, t, i) {
    function n() {
        function e() {
            if (t._pending !== !0) {
                t._pending = !0, t._transition.delClassNames("highlight");
                var e = this._id,
                    i = t._bgWrappers[t._step];
                t._answer[e - 1] ? t._answer[e - 1].addClassNames("disabled") : t._answer[e + 1].addClassNames("disabled"), t._transition.addClassNames("highlight"), i._bg1.toggleClassName("disabled", 1 !== e), i._bg2.toggleClassName("disabled", 2 !== e), i._bg1.toggleClassName("highlight", 1 === e), i._bg2.toggleClassName("highlight", 2 === e), window.setTimeout(function() {
                    i._bg1.toggleClassName("selected", 1 === e), i._bg2.toggleClassName("selected", 2 === e)
                }, 301), window.setTimeout(function() {
                    t._textWrapper.delClassNames("display")
                }, 1550), window.setTimeout(function() {
                    t._nextStep(e)
                }, 1600), window.setTimeout(function() {
                    t._transition.delClassNames("highlight"), t._pending = !1
                }, 2600)
            }
        }
        a.call(this, {
            className: "firstCharacterFormWindow",
            noTitle: !0,
            noCloseButton: !0,
            positionInfo: {
                left: "c",
                top: "c",
                width: "100%",
                height: "100%",
                isFullScreen: !0
            }
        });
        var t = this;
        this._step = 0, this._pending = !1, this._transition = this.windowBody.createChild("div", {
            className: "transition"
        });
        var i = this.windowBody.createChild("div", {
            className: "header"
        });
        this._question = i.createChild("div", {
            className: "question"
        }), this._progressBar = i.createChild("div", {
            className: "progressBar"
        }), this._progression = this._progressBar.createChild("div", {
            className: "progress"
        }), this._bgWrappers = {};
        for (var n = 0; n < u; n++) {
            var o = this.windowBody.createChild("div", {
                className: ["bgWrapper", "scene" + (n + 1)]
            });
            o._id = n + 1, o._id > 1 && o.hide(), o.createChild("div", {
                className: "bgLeft"
            }), this._bgWrappers[n + 1] = o, o._bg1 = o.createChild("div", {
                className: "bg1"
            }), o._bg2 = o.createChild("div", {
                className: "bg2"
            }), o.createChild("div", {
                className: "bgRight"
            })
        }
        this._textWrapper = this.windowBody.createChild("div", {
            className: "textWrapper"
        }), this._answer = {}, this._answer[1] = this._textWrapper.createChild("div", {
            className: "answer"
        });
        var r = this._answer[1].createChild("div", {
            className: "descriptionWrapper"
        });
        this._answer[1]._description = r.createChild("div", {
            className: "description"
        }), this._answer[1]._button = this._answer[1].appendChild(new s({
            className: "greenButtonV2"
        }, e)), this._answer[1]._button._id = 1, this._answer[1]._button._text = this._answer[1]._button.createChild("div", {
            className: "text"
        }), this._answer[2] = this._textWrapper.createChild("div", {
            className: "answer"
        });
        var c = this._answer[2].createChild("div", {
            className: "descriptionWrapper"
        });
        this._answer[2]._description = c.createChild("div", {
            className: "description"
        }), this._answer[2]._button = this._answer[2].appendChild(new s({
            className: "greenButtonV2"
        }, e)), this._answer[2]._button._id = 2, this._answer[2]._button._text = this._answer[2]._button.createChild("div", {
            className: "text"
        }), this.on("open", function(e) {
            e.relookingParams && (t._relookingParams = e.relookingParams), t._initForm(e)
        })
    }
    i(1400);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(1401),
        s = i(86),
        c = i(116),
        l = i(21),
        d = i(52),
        u = 9;
    o(n, a), e.exports = n, n.prototype._initForm = function(e) {
        c.log("F_T_U_E.enters_survey", {
            timestamp_event: new l.DofusDate(l.now())
                .getServerDate()
                .timestamp
        });
        var t = e.skipIntro ? 2 : 1;
        this._setProgressBar(t), this._setBg(t, 1), this._setTexts(t), this._step = t
    }, n.prototype._nextStep = function(e) {
        var t = r.getNextStepId(this._step, e, this._relookingParams),
            i = this._bgWrappers[this._step];
        this._answer[1].delClassNames("disabled"), this._answer[2].delClassNames("disabled"), i._bg1.delClassNames("highlight"), i._bg1.delClassNames("disabled"), i._bg1.delClassNames("selected"), i._bg2.delClassNames("highlight"), i._bg2.delClassNames("disabled"), i._bg2.delClassNames("selected"), 0 !== t && this._setNewScene(t)
    }, n.prototype._setTexts = function(e) {
        var t = r.getQuestion(e),
            i = r.getAnswers(e)
            .answers,
            n = r.getAnswers(e)
            .buttons;
        this._question.setText(t), this._answer[1]._description.setText(i[0]), this._answer[2]._description.setText(i[1]), this._answer[1]._button._text.setText(n[0]), this._answer[2]._button._text.setText(n[1]), this._textWrapper.addClassNames("display")
    }, n.prototype._setBg = function(e, t) {
        this._bgWrappers[e].show(), e !== t && this._bgWrappers[t].hide()
    }, n.prototype._setProgressBar = function(e) {
        this._progressBar.toggleDisplay(e > 1);
        var t = e > 2 && e < 5,
            i = e > 4;
        this._progressBar.toggleClassName("step2", t), this._progressBar.toggleClassName("step3", i)
    }, n.prototype._setNewScene = function(e) {
        this._setTexts(e), this._setProgressBar(e), this._setBg(e, this._step), this._step = e
    }, n.prototype.backButtonClose = function() {
        this.close(), d.open("characterCreation")
    }
}
