function(e, t) {
    // #EntityLook Class
    function i(e, t, i, n, o) {
        var a = parseInt(i, 10);
        return isNaN(a) ? (e.error(new Error(t + " for " + n + " is not a number, caller: " + o)), -1) : a
    }
    e.exports = function(e, t, n) {
        // t = "{1|1664||160}"
        // n = "Breed: 15 sex: 1"
        var o = e,
            a = {
                bone: -1,
                color: "",
                scale: -1,
                skin: ""
            };
        if (!n) return o.error(new Error("PL need a caller")), a;
        var r = t.substring(1, t.length - 1).split("|"); 
        // 1|1664||160
        // [1, 1664, , 160]
        a.bone = i(o, "bone", r[0], t, n), // 1
        a.scale = i(o, "scale", r[3] || "100", t, n), // 160
        a.skin = r[1] || "", // 1664
        a.color = r[2] || ""; // 0

        return a;
    }
}
