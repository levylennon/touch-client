function(e, t) {
    var i = {
        TUTORIAL: 0,
        ERROR: 1,
        INVITATION: 2,
        PRIORITY_INVITATION: 3,
        INFORMATION: 4,
        KOLIZEUM: 5
    };
    t.notificationType = i, t.notificationPriority = [i.ERROR, i.PRIORITY_INVITATION, i.KOLIZEUM, i.INVITATION, i.INFORMATION, i.TUTORIAL];
    var n = {};
    n[i.TUTORIAL] = {
        icon: 11,
        color: "green"
    }, n[i.ERROR] = {
        icon: 11,
        color: "red"
    }, n[i.INVITATION] = {
        icon: 12,
        color: "blue"
    }, n[i.PRIORITY_INVITATION] = {
        icon: 10,
        color: "blue"
    }, n[i.INFORMATION] = {
        icon: 27,
        color: "yellow"
    }, n[i.KOLIZEUM] = {
        icon: 10,
        color: "red"
    }, t.notificationImageInfo = n
}
