function(e, t, i) {
    function n(e, t, i, n, o) {
        this._infoType = i, this._label = n, this._helpText = o;
        var a = !1,
            r = window.gui.playerData,
            s = r.guildData.getGuildMemberInfo(r.id);
        if (s) {
            var c = r.guild.checkRight(b.GUILD_RIGHT_BOSS, s.rights);
            a = c || s.rank === _ || s.rank === A
        }
        this._iAmThePopup = t === y, this._mustEditInPopup = v && !this._iAmThePopup;
        var d = O.indexOf(this._infoType) !== -1;
        this._maxLength = d ? p.MAX_SOCIALINFO_SHORT_LEN : p.MAX_SOCIALINFO_LEN, this._setupDom(e, t, a), this._listener = new l, this._setupEvents(), e.on("destroy", this._onDestroy.bind(this))
    }

    function o(e) {
        var t = window.gui.playerData.guildData.getGuildMemberInfo(e);
        return t ? t.name : "?"
    }
    i(1218);
    var a = i(88)
        .addTooltip,
        r = i(86),
        s = i(17)
        .getText,
        c = i(16),
        l = i(556),
        d = i(588),
        u = i(767),
        p = i(112),
        h = i(453),
        f = i(810),
        b = i(520),
        m = i(52),
        M = i(72),
        g = i(505),
        _ = 1,
        A = 2,
        O = [f.SOCIAL_INFO_GUILD_MOTD, f.SOCIAL_INFO_ALLIANCE_MOTD],
        v = !0,
        y = "socialInfoPanel",
        z = "SocialInfoEditorPanel",
        w = {
            allPagesAllowed: !0
        };
    e.exports = n, n.prototype._onDestroy = function() {
        this._listener.stopListening()
    }, n.prototype._setupDom = function(e, t, i) {
        var n = this,
            o = e.createChild("div", {
                className: ["socialInfoEditor", t]
            }),
            c = o.createChild("div", {
                className: "headerDiv"
            });
        this._iAmThePopup && c.hide();
        var l = c.createChild("div", {
            className: "btnAndTitle"
        });
        this._editBtn = l.appendChild(new r({
            className: ["editBtn", "greenButton"],
            addIcon: !0,
            tooltip: s("ui.common.modify"),
            hidden: !0
        }, this._editButtonTapHandler.bind(this))), i && this._editBtn.show();
        var d = l.createChild("div", {
            className: "labelAndLastChange"
        });
        d.createChild("div", {
            className: "label",
            text: this._label
        }), this._lastChangeDiv = d.createChild("div", {
            className: "lastChangeDiv",
            hidden: !0
        });
        var p = o.createChild("div", {
            className: "editionDiv"
        });
        a(p, this._helpText), this._characterCounter = p.createChild("div", {
            className: "characterCount",
            hidden: !0
        }), this._textScroller = p.appendChild(new h({
            className: "textDiv"
        }, {
            showHintArrows: !0
        })), this._textDiv = this._textScroller.content, this._placeholder = new u(p, {
            noHeight: !0
        }), this._editDiv = p.createChild("textarea", {
            className: "editDiv",
            hidden: !0
        }), this._editDiv.rootElement.addEventListener("input", this._editDivChangeHandler.bind(this)), p.rootElement.addEventListener("touchend", function(e) {
            e.stopImmediatePropagation(), n._editDiv.rootElement.dispatchEvent(new Event("touchend"))
        });
        var f = this._editingBtnDiv = o.createChild("div", {
            className: "editingBtnDiv",
            hidden: !0
        });
        this._submitButton = f.appendChild(new r({
            className: ["submitBtn", "greenButton"],
            text: s("ui.common.save")
        }, this._submitButtonTapHandler.bind(this))), this._submitButton.disable(), this._cancelButton = f.appendChild(new r({
            className: ["cancelBtn", "secondaryButton", "greenButton"],
            text: s("ui.common.cancel")
        }, this._cancelButtonTapHandler.bind(this))), this._iAmThePopup && f.show();
    }, n.prototype._setupEvents = function() {
        var e = window.gui.playerData.guildData,
            t = window.dofus.connectionManager,
            i = this;
        e.requestSocialInfo(this._infoType), this._listener.listenTo(e, "socialInfoUpdated", function(e, t) {
            e === i._infoType && i._onInfoUpdateFromServer(t)
        }), this._listener.listenTo(t, "SocialInfoEditingRequestReplyMessage", function(e) {
            e.infoType === i._infoType && i._editRequestReplyHandler(e.result, e.editorCharacterId)
        })
    }, n.prototype._editButtonTapHandler = function() {
        window.dofus.sendMessage("SocialInfoEditingRequestMessage", {
            infoType: this._infoType
        })
    }, n.prototype._editRequestReplyHandler = function(e, t) {
        e ? this._startEditing() : d.showNotification(s("tablet.lockedBy", o(t)), this._editBtn)
    }, n.prototype._onInfoUpdateFromServer = function(e) {
        this._updateInfo(e), this._iAmThePopup && this._startEditing()
    }, n.prototype._startEditing = function() {
        if (this._mustEditInPopup) {
            var e = m.getPanel(z, 1);
            if (e) return;
            var t = new M("div", {
                    className: "socialInfoPanelParent"
                }),
                i = new n(t, y, this._infoType, "", this._helpText);
            return e = m.createPanel(z, t, {
                title: this._label,
                top: 10,
                width: "60%",
                height: "40%",
                isModal: !0,
                noCloseButton: !0
            }), void(i._parentEditor = this)
        }
        this._lastChangeDiv.hide(), this._textScroller.hide(), this._placeholder.toggleDisplay(!1), this._editBtn.hide(), this._editingBtnDiv.show(), this._editDiv.show();
        var o = this._editDiv.rootElement;
        o.value = this._originalText, o.selectionStart = o.selectionEnd = this._originalText.length, o.scrollTop = o.scrollHeight, this._characterCounter.show(), this._editDivChangeHandler(), o.focus()
    }, n.prototype._finishEditing = function(e) {
        if (this._submitButton.disable(), this._cancelButton.disable(), this._iAmThePopup) return this._listener.stopListening(), m.close(m.getPanel(z, 1)
            .id), this._parentEditor._finishEditing(e);
        if (void 0 !== e) {
            var t = window.gui.playerData.id;
            this._updateInfo({
                timestamp: Date.now(),
                editorId: t,
                value: e
            })
        }
        this._lastChangeDiv.toggleDisplay(Boolean(this._lastChangeDiv.getText())), this._editDiv.hide(), this._characterCounter.hide();
        var i = Boolean(this._textDiv.getText());
        this._textScroller.toggleDisplay(i), this._editBtn.show(), this._editingBtnDiv.hide(), document.activeElement.blur()
    }, n.prototype._cancelButtonTapHandler = function() {
        this._finishEditing(), window.dofus.sendMessage("SocialInfoEditingCancelMessage", {
            infoType: this._infoType
        })
    }, n.prototype._submitButtonTapHandler = function() {
        var e = this._editDiv.rootElement.value.trimRight();
        if (e === this._originalText) return this._cancelButtonTapHandler();
        var t = g.getUnsendableCharacters(e, w);
        if (t.length) {
            var i = t[0] + " (" + t[0].codePointAt()
                .toString(16) + ")";
            return window.gui.openPopup({
                title: s("ui.common.error"),
                message: s("tablet.chat.unsendableChars", i)
            })
        }
        e = g.encode(e, w), window.dofus.sendMessage("SocialInfoEditingCommitMessage", {
            infoType: this._infoType,
            content: e
        }), this._finishEditing(e)
    }, n.prototype._editDivChangeHandler = function() {
        var e = g.encode(this._editDiv.rootElement.value, w),
            t = this._maxLength - e.length;
        this._characterCounter.setText(t), this._characterCounter.toggleClassName("tooLong", t < 0), this._submitButton.setEnable(t >= 0)
    }, n.prototype._updateInfo = function(e) {
        if (this._setTextContent(e.value), e.editorId && e.timestamp) {
            var t = Math.max(Math.round((Date.now() - e.timestamp) / 1e3), 1);
            this._lastChangeDiv.setText(s("tablet.lastChangeBy", c.durationToHuman(t), o(e.editorId))), this._lastChangeDiv.show()
        } else this._lastChangeDiv.hide()
    }, n.prototype._setTextContent = function(e) {
        var t = g.decode(e, w);
        this._originalText = t, this._textDiv.setText(t), this._textScroller.toggleDisplay(Boolean(t)), t && this._textScroller.refresh(), this._placeholder.toggleDisplay(!t), t || this._placeholder.setText(this._helpText)
    }
}
