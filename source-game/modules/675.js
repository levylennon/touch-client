function(e, t, i) {
    function n(e, t, i, n) {
        var l;
        switch (e._type) {
            case "FightTemporarySpellBoostEffect":
                l = new a(e, t, i, n);
                break;
            case "FightTriggeredEffect":
                l = new c(e, t, i, n);
                break;
            case "FightTemporaryBoostWeaponDamagesEffect":
                var d = e.weaponTypeId,
                    u = e.delta;
                l = new o(e, t, i, d, u, d, n);
                break;
            case "FightTemporaryBoostStateEffect":
                l = new s(e, t, i, n);
                break;
            case "FightTemporarySpellImmunityEffect":
                l = new o(e, t, i, e.immuneSpellId, null, null, n);
                break;
            case "FightTemporaryBoostEffect":
                l = new r(e, t, i, n)
        }
        return l
    }
    var o = i(676),
        a = i(678),
        r = i(681),
        s = i(682),
        c = i(687);
    o.setStateBuff(s), t.BasicBuff = o, t.SpellBuff = a, t.StatBuff = r, t.StateBuff = s, t.TriggeredBuff = c, t.makeBuffFromEffect = n
}
