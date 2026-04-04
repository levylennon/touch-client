function(e, t, i) {
    function n() {}
    var o = i(1514),
        a = i(691),
        r = i(715),
        s = i(718),
        c = s.HOOK_POINT_CATEGORY_MOUNT_DRIVER,
        l = s.HOOK_POINT_CATEGORY_LIFTED_ENTITY;
    o.prototype.addSubentity = function(e, t, i) {
        var n = this;
        a.prototype.addSubentity.call(this, e, t, function(t) {
            return e.bindingPointCategory === c && (n.riderEntity = t), i && i(t)
        })
    }, o.prototype.carryCharacter = function(e) {
        var t = this;
        if (this.animManager.isTemporary) return console.warn("Actor animManager is not ready."), void window.setTimeout(function() {
            t.carryCharacter(e)
        }, 2e3);
        var i = {
            animManager: e.animManager,
            bindingPoint: "carried_3_0",
            symbolModifier: r[l],
            bindingPointCategory: l
        };
        e.getFighterData()
            .isCarryied = !0, e.parentActor = this, this.carriedEntity = i, this.carriedActor = e, this.refreshCarried()
    }, o.prototype.refreshCarried = function(e) {
        e = e || n;
        var t = this,
            i = window.actorManager;
        if (!this.carriedEntity || !this.carriedActor) return e();
        var o = !i.isCreatureModeOn && this.riderEntity || this.animManager;
        o.addAnimation({
            base: "carrying",
            direction: -1
        }, function() {
            return o.applyCarryAnimationModifier(), o.subentityRefs[t.carriedEntity.bindingPoint] || o.addSubentity(t.carriedEntity), t.carriedActor.setDisposition(t.cellId), t.carriedActor.y = -1e3, t.staticAnim(), e()
        })
    }
}
