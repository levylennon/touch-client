function(e, t, i) {
    var n = i(504),
        o = 666;
    t.RED_CHANNEL = o, t.isChannelSelective = function(e, t) {
        switch (e) {
            case n.CHANNEL_ALLIANCE:
            case n.CHANNEL_GUILD:
            case n.CHANNEL_PARTY:
                return !0;
            case n.PSEUDO_CHANNEL_PRIVATE:
                var i, o = window.gui.playerData.socialData;
                return i = "string" == typeof t ? o.searchOnlineFriendByName(t) : o.searchOnlineFriendById(t), !!i && o.isMutualFriend(i);
            default:
                return !1
        }
    }, t.isChannelSafe = function(e) {
        switch (e) {
            case o:
            case n.CHANNEL_ADMIN:
            case n.CHANNEL_ADS:
            case n.PSEUDO_CHANNEL_INFO:
            case n.PSEUDO_CHANNEL_FIGHT_LOG:
            case n.PSEUDO_CHANNEL_NPC_LOG:
                return !0;
            default:
                return !1
        }
    }, t.isHumanChannel = function(e) {
        switch (e) {
            case o:
            case n.PSEUDO_CHANNEL_INFO:
            case n.PSEUDO_CHANNEL_FIGHT_LOG:
            case n.PSEUDO_CHANNEL_NPC_LOG:
                return !1;
            default:
                return !0
        }
    }
}
