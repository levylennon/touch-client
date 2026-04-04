function(e, t) {
    t.onChangeRules = [{
        regex: "^[a-z]$",
        expectedResult: !1,
        transform: function(e) {
            return e.toUpperCase()
        }
    }, {
        regex: "([A-Z].*|\\[[A-Z].*|)$",
        error: "ui.charcrea.invalidNameReason4"
    }, {
        regex: "^[a-z-\\[\\]]*$",
        regexFlags: "i",
        error: "tablet.charCrea.name.lettersDashes"
    }, {
        regex: "[\\s]+",
        expectedResult: !1,
        error: "tablet.charCrea.name.noSpaces"
    }, {
        regex: "^(-|[a-z]-)",
        expectedResult: !1,
        regexFlags: "i",
        error: "ui.charcrea.invalidNameReason3"
    }, {
        regex: "^.*-.*-",
        expectedResult: !1,
        error: "ui.charcrea.invalidNameReason3"
    }, {
        regex: "^.*[^-\\[][A-Z]",
        expectedResult: !1,
        error: "ui.charcrea.invalidNameReason4"
    }, {
        regex: "(.)\\1{2,}",
        expectedResult: !1,
        regexFlags: "i",
        error: "ui.charcrea.invalidNameReason6"
    }, {
        regex: "([b-df-hj-np-tv-xz]){4,}",
        expectedResult: !1,
        regexFlags: "i",
        error: "ui.charcrea.name.consonants3Consec"
    }, {
        regex: "^[\\S]{,20}$",
        expectedResult: !1,
        error: "ui.charcrea.invalidNameReason1"
    }, {
        regex: "^[\\S]{3,20}$",
        expectedResult: !0,
        error: "ui.charcrea.invalidNameReason1"
    }], t.onSubmitRules = [{
        regex: "^[\\S]{3,20}$",
        error: "ui.charcrea.invalidNameReason1"
    }, {
        regex: "[aeiouy]+",
        regexFlags: "i",
        error: "ui.charcrea.invalidNameReason5"
    }]
}
