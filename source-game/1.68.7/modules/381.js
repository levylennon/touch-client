function(e, t, i) {
    var n = i(105),
        o = i(382),
        a = i(17)
        .getText;
    n.on("StatsUpgradeResultMessage", function(e) {
        if (e.result !== o.SUCCESS) {
            var t = "";
            switch (e.result) {
                case o.NONE:
                    t = a("ui.popup.statboostFailed.text");
                    break;
                case o.GUEST:
                    t = a("ui.fight.guestAccount");
                    break;
                case o.RESTRICTED:
                    t = a("ui.charSel.deletionErrorUnsecureMode");
                    break;
                case o.IN_FIGHT:
                    t = a("ui.error.cantDoInFight");
                    break;
                case o.NOT_ENOUGH_POINT:
                    t = a("ui.popup.statboostFailed.notEnoughPoint")
            }
            t && window.gui.chat.logError(t)
        }
    })
}
