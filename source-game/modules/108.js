function(e, t, i) {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i] || {};
            n.accountId && (n.uniqueNickname = new a(e, n.accountName))
        }
        return t
    }
    var o = i(109),
        a = i(113);
    t.createMessage = function(e, t) {
        switch (t._messageType) {
            case "CharacterStatsListMessage":
                return t.stats = new o(e, t.stats, (!1)), t;
            case "SlaveSwitchContextMessage":
                return t.slaveStats = new o(e, t.slaveStats, (!1)), t;
            case "IdentificationSuccessMessage":
            case "IdentificationSuccessWithLoginTokenMessage":
                return t.uniqueNickname = new a(e, t.nickname), t;
            case "BasicWhoIsMessage":
                return t.uniqueNickname = new a(e, t.accountNickname), t;
            case "FriendUpdateMessage":
                return t.friendUpdated.uniqueNickname = new a(e, t.friendUpdated.accountName), t;
            case "FriendAddedMessage":
                return t.friendAdded.uniqueNickname = new a(e, t.friendAdded.accountName), t;
            case "IgnoredAddedMessage":
                return t.ignoreAdded.uniqueNickname = new a(e, t.ignoreAdded.accountName), t;
            case "FriendsListMessage":
                return n(e, t.friendsList), t;
            case "IgnoredListMessage":
                return n(e, t.ignoredList), t;
            default:
                return t
        }
    }
}
