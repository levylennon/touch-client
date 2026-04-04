function(e, t, i) {
    function n(e, t) {
        c.call(this, {
            title: r("tablet.purchasesPending.title"),
            className: "PurchasesPendingWindow",
            noCloseButton: !0,
            positionInfo: {
                left: "c",
                top: "c",
                width: 450,
                height: 243,
                isModal: !0
            }
        }), o = t, this._reset(), this.on("open", this._onOpen);
        var i = this,
            n = window.dofus.connectionManager;
        n.on("shopIAPArticlesSuccess", function(e) {
            if (i._content) {
                var t = e.articles;
                d.validateArticles(t), i._displayPurchasesList(null, t)
            }
        }), n.on("shopIAPArticlesError", function() {
            i._content && i._displayPurchasesList(new Error("IAP articles are not available"))
        })
    }
    i(1348);
    var o, a = i(86),
        r = i(17)
        .getText,
        s = i(56)
        .inherits,
        c = i(70),
        l = i(52),
        d = i(838),
        u = {
            PENDING: 0,
            FAILED: 1,
            SUCCEEDED: 2
        };
    s(n, c), e.exports = n, n.prototype._reset = function() {
        this.windowBody.clearContent(), this._content = null, this._description = null, this._spinner = null, this._pendingPurchases = [], this._purchasesDetails = {}, this._isProcessing = !1
    }, n.prototype._onOpen = function() {
        this._content || this._createContent()
    }, n.prototype.freeContent = function() {
        this._reset()
    }, n.prototype._createContent = function() {
        this._content = this.windowBody.createChild("div", {
            className: "content"
        });
        var e = this._content.createChild("div", {
            className: "textBox"
        });
        this._description = e.createChild("div", {
            className: "description"
        }), this._purchasesList = e.createChild("div", {
            className: "purchasesList"
        }), this._spinner = e.createChild("div", {
            className: ["spinnerContainer", "spinner"]
        }), this._validationDone = e.createChild("div", {
            className: "validationDone",
            hidden: !0
        }), this._okButton = this._content.appendChild(new a({
            text: r("ui.common.ok"),
            className: ["greenButton", "okButton"]
        }, function() {
            l.close("purchasesPending")
        })), this._okButton.disable()
    }, n.prototype._processNext = function() {
        var e = this._pendingPurchases.shift();
        d.validatePendingIAP(e)
    }, n.prototype._displayPurchasesListNotAvailable = function() {
        this._spinner.hide(), this._purchasesList.setText(r("tablet.purchasesPending.listNotAvailable"))
    }, n.prototype._displayPurchasesList = function(e, t) {
        if (e && console.error(e), this._content)
            if (e) this._displayPurchasesListNotAvailable();
            else {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i],
                        o = this._purchasesDetails[n.key];
                    if (o) {
                        var a = this._purchasesList.getChild(n.key);
                        a || (a = this._purchasesList.createChild("div", {
                            className: "entry",
                            name: n.key,
                            text: n.name
                        }), a.createChild("div", {
                            className: "state"
                        }), a.createChild("div", {
                            className: "name",
                            text: n.name
                        })), o.article = n;
                        var r = o.state;
                        switch (r) {
                            case u.PENDING:
                                a.delClassNames(["failure", "success"]);
                                break;
                            case u.FAILED:
                                a.replaceClassNames(["success"], ["failure"]);
                                break;
                            case u.SUCCEEDED:
                                a.replaceClassNames(["failure"], ["success"])
                        }
                    }
                }
                Object.keys(this._purchasesDetails)
                    .length <= this._purchasesList.getChildCount() ? this._spinner.hide() : this._spinner.show()
            }
    }, n.prototype.validatePendingPurchases = function(e) {
        if (!e || !e.length) return console.error(new Error("No purchase to validate: " + e));
        var t = e.filter(function(e) {
            return !this._purchasesDetails[e.productId]
        }, this);
        if (t.forEach(function(e) {
                this._purchasesDetails[e.productId] = {
                    state: u.PENDING,
                    article: null
                }
            }, this), this._pendingPurchases = this._pendingPurchases.concat(t), t.length) {
            l.open(this.id), this._description.setText(r("tablet.purchasesPending.description", Object.keys(this._purchasesDetails)
                .length) + r("ui.common.colon")), this._spinner.show();
            var i = this;
            d.getStoreInfos(function(e) {
                return e ? i._displayPurchasesList(e) : (window.dofus.send("shopIAPArticlesRequest"), void i._startProcessing())
            })
        }
    }, n.prototype._startProcessing = function() {
        this._isProcessing || (this._isProcessing = !0, this._validationDone.hide(), this._okButton.disable(), this._processNext())
    }, n.prototype._endProcessing = function() {
        var e = 0,
            t = !1;
        for (var i in this._purchasesDetails) {
            var n = this._purchasesDetails[i].state;
            n === u.SUCCEEDED ? e++ : t || n !== u.FAILED || (t = !0)
        }
        t && o.refreshReceipt(function(e) {
            e && console.error("Refresh receipt failed", e)
        }), this._purchasesList.getChildCount() || this._displayPurchasesListNotAvailable(), this._isProcessing = !1, this._validationDone.setText(r("tablet.purchasesPending.validationDone", e)), this._validationDone.show(), this._okButton.enable()
    }, n.prototype.validateNextPendingPurchases = function(e, t) {
        if (e && console.error(e), this._content) {
            var i = this._purchasesList.getChild(t);
            this._purchasesDetails[t].state = e ? u.FAILED : u.SUCCEEDED, i && (e ? i.replaceClassNames(["success"], ["failure"]) : i.replaceClassNames(["failure"], ["success"])), this._pendingPurchases.length ? this._processNext() : this._endProcessing()
        }
    }
}
