function(e, t, i) {
    function n() {
        this.alignmentInfos = null, this.playerRank = null, this.alignmentRank = null, this.alignmentTitles = null, this.alignmentRanks = null, this._imagePaths = ["gfx/alignments/Alignement_tx_IllusNeutre.png", "gfx/alignments/Alignement_tx_IllusBontarien.png", "gfx/alignments/Alignement_tx_IllusBrakmarien.png", "gfx/alignments/Alignement_tx_IllusMercenaire.png"], this._orderImagePaths = ["gfx/alignments/order_0.png", "gfx/alignments/order_1.png", "gfx/alignments/order_2.png", "gfx/alignments/order_3.png", "gfx/alignments/order_4.png", "gfx/alignments/order_5.png", "gfx/alignments/order_6.png", "gfx/alignments/order_7.png", "gfx/alignments/order_8.png", "gfx/alignments/order_9.png"], this._sideImagePaths = {
            1: "gfx/alignments/wings/tx_alignment1_frame0.png",
            2: "gfx/alignments/wings/tx_alignment2_frame0.png"
        }
    }
    var o = i(59)
        .EventEmitter,
        a = i(56)
        .inherits,
        r = i(130),
        s = i(12),
        c = 45,
        l = 63;
    a(n, o), e.exports = n, n.prototype.initialize = function(e) {
        var t = this;
        e.on("AlignmentRankUpdateMessage", function(e) {
            t.playerRank = e.alignmentRank, t.emit("alignmentChanged")
        }), e.on("initialized", function() {
            var i = ["AlignmentTitles", "AlignmentRank"];
            r.getAllDataTable(i, function(e, i) {
                return e ? console.error("Unable to load data for alignment window", e) : (t.alignmentTitles = i.AlignmentTitles, void(t.alignmentRanks = i.AlignmentRank))
            }), e.playerData.characters.on("specificCharacteristicsUpdated", function(i) {
                "alignmentInfos" === i && (t.alignmentInfos = e.playerData.characters.mainCharacter.characteristics.alignmentInfos, t.alignmentSide = e.databases.AlignmentSides[t.alignmentInfos.alignmentSide], t.emit("alignmentChanged"))
            })
        });
        var i = "gfx/alignments/wings.json";
        s.loadJson(i, function(e) {
            e.meta && e.symbols && (e = e.symbols), t._wingsData = e
        })
    }, n.prototype.getRank = function(e) {
        var t = this;
        return r.getDataMap("AlignmentRank", [this.playerRank], null, function(i, n) {
            return i ? e(i) : void e(null, n[t.playerRank])
        })
    }, n.prototype.getOrder = function(e, t) {
        return r.getDataMap("AlignmentOrder", [e.orderId], null, function(i, n) {
            return i ? t(i) : void t(null, n[e.orderId])
        })
    }, n.prototype.getAlignmentImageUrl = function(e) {
        this.alignmentInfos ? s.preloadImage(this._imagePaths[this.alignmentInfos.alignmentSide], e) : s.preloadImage(this._imagePaths[0], e)
    }, n.prototype.getTopWings = function(e, t) {
        var i = this,
            n = e.alignmentSide,
            o = e.alignmentGrade,
            a = 10 * (n - 1) + o,
            r = "gfx/alignments/wings/demonAngel_frame" + a + ".png",
            s = i._wingsData[c].frames[a].position,
            l = {
                imagePath: r,
                left: s.x,
                top: s.y,
                width: s.w,
                height: s.h
            };
        t(l)
    }, n.prototype.getBottomWings = function(e, t) {
        var i = this,
            n = e.alignmentSide,
            o = e.alignmentGrade,
            a = 10 * (n - 1) + o;
        if (i._wingsData[l].frames[a]) {
            var r = "gfx/alignments/wings/demonAngel2_frame" + a + ".png",
                s = i._wingsData[l].frames[a].position,
                c = {
                    imagePath: r,
                    left: s.x,
                    top: s.h + s.y,
                    width: s.w,
                    height: s.h
                };
            return t(c)
        }
        return t(null)
    }, n.prototype.getSmallWingsUrl = function(e, t) {
        var i = this._sideImagePaths[e];
        s.preloadImage(i, t)
    }, n.prototype.getOrderImageUrl = function(e, t) {
        var i = this._orderImagePaths[e];
        s.preloadImage(i, t)
    }, n.prototype.getAlignmentGradeString = function() {
        var e = this.alignmentInfos,
            t = e.alignmentGrade,
            i = e.alignmentSide,
            n = this.alignmentTitles;
        return t + " (" + n[i].namesId[t] + ")"
    }, n.prototype.getHonor = function() {
        var e = this.alignmentInfos,
            t = (e.honor - e.honorGradeFloor) / (e.honorNextGradeFloor - e.honorGradeFloor);
        return t
    }, n.prototype.getNameId = function() {
        return this.alignmentSide.nameId
    }
}
