function(e, t) {
    "use strict";
    var i = {
        G0_MODERATOR: ["g0"],
        G1_MODERATOR: ["g0", "g1"],
        G1P_MODERATOR: ["g0", "g1", "g1p"],
        G2_MODERATOR: ["g0", "g1", "g1p", "g2"],
        G2_MODERATOR_AND_CUSTOM_EVENT: ["g0", "g1", "g1p", "g2", "customEvent"],
        G3_MODERATOR: ["g0", "g1", "g1p", "g2", "g3"],
        MODERATOR_RANK_CUSTOM_EVENT_ONLY: ["customEvent"],
        GAME_MASTER_AA: ["aa"],
        GAME_MASTER_1: ["aa", "mj1"],
        GAME_MASTER_2: ["aa", "mj1", "mj2"],
        GAME_MASTER_3: ["aa", "mj1", "mj2", "mj3"]
    };
    i.ADMIN = i.GAME_MASTER_3.concat(i.G2_MODERATOR), e.exports = i
}
