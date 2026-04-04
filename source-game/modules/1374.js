function(e, t, i) {
    function n() {
        var e = this;
        c.call(this, {
            title: r("ui.popup.ratingTitle"),
            className: "RatingWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 500,
                height: 200
            }
        }), this.on("open", function() {
            e._initialize(), e._reset()
        }), this.on("close", function() {
            e._addNumAsked(), e._reset()
        }), this.isDislikeDofus = !1, this.isLikeDofus = !1, this.question = this.windowBody.createChild("div", {
            className: "question",
            text: r("ui.popup.ratingQuestion")
        }), this.buttonContainer = this.windowBody.createChild("div", {
            className: "buttonContainer"
        });
        var t = function() {
                console.log("Successfully launched review app")
            },
            i = function(e) {
                console.error("Error launching review app: " + e)
            };
        this.yesButton = this.buttonContainer.appendChild(new a({
            className: "greenButton",
            text: r("ui.popup.ratingYes")
        }, function() {
            if (e.isLikeDofus) window && window.LaunchReview && (window.LaunchReview.isRatingSupported() ? window.LaunchReview.rating(t, i) : window.LaunchReview.launch(t, i)), e._setUserPref({
                isNeverAsk: !0
            }), e.close();
            else if (e.isDislikeDofus) {
                e._setUserPref({
                    isNeverAsk: !0
                }), e.close();
                var n = "mailto:" + r("ui.popup.ratingEmail") + "?subject=" + r("ui.popup.ratingEmailSubject");
                window.cordova && window.cordova.InAppBrowser ? window.cordova.InAppBrowser.open(n, "_system", "location=yes,hidden=yes") : window.open(n, "_system")
            } else e._likeDofus()
        })), this.noButton = this.buttonContainer.appendChild(new a({
            className: "greenButton",
            text: r("ui.popup.ratingNo")
        }, function() {
            e.isDislikeDofus ? (e._setUserPref({
                isNeverAsk: !0
            }), e.close()) : e.isLikeDofus ? (e._setUserPref({
                isNeverAsk: !1
            }), e.close()) : e._dislikeDofus()
        }))
    }
    i(1375);
    var o = i(56)
        .inherits,
        a = i(86),
        r = i(17)
        .getText,
        s = i(60),
        c = i(70);
    o(n, c), e.exports = n, n.prototype._addNumAsked = function() {
        var e = s.getValue("rateDofus", null);
        e ? e.numAsked++ : e = {
            isNeverAsk: !1,
            numAsked: 1
        }, s.setValue("rateDofus", e, null)
    }, n.prototype._setUserPref = function(e) {
        var t = s.getValue("rateDofus", null);
        t || (t = {
            isNeverAsk: !1,
            numAsked: 1
        }), e.isNeverAsk && (t.isNeverAsk = !0), s.setValue("rateDofus", t, null), this.close()
    }, n.prototype._reset = function() {
        this.isDislikeDofus = !1, this.isLikeDofus = !1
    }, n.prototype._initialize = function() {
        this.question.setText(r("ui.popup.ratingQuestion")), this.noButton.setText(r("ui.popup.ratingNo")), this.yesButton.setText(r("ui.popup.ratingYes"))
    }, n.prototype._dislikeDofus = function() {
        this.isDislikeDofus = !0, this.question.setText(r("ui.popup.ratingDislikeQuestion")), this.noButton.setText(r("ui.popup.ratingWhyNotNo")), this.yesButton.setText(r("ui.popup.ratingWhyNotYes"))
    }, n.prototype._likeDofus = function() {
        this.isLikeDofus = !0, this.question.setText(r("ui.popup.ratingLikeQuestion")), this.noButton.setText(r("ui.popup.ratingLikeNo")),
            this.yesButton.setText(r("ui.popup.ratingLikeYes"))
    }
}
