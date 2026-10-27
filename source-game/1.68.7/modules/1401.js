function(e, t, i) {
    function n() {
        return null
    }

    function o() {
        u.open("characterCreation"), u.close("firstCharacterForm")
    }

    function a(e, t) {
        var i = {
            5: {
                1: 8,
                2: 11
            },
            6: {
                1: 6,
                2: 9
            },
            7: {
                1: 2,
                2: 4
            },
            8: {
                1: 1,
                2: 7
            }
        };
        return i[e] ? i[e][t] : null
    }

    function r(e, t, i) {
        var n = a(e, t);
        u.open("breedHighlightWindow", {
            breedId: n,
            relookingParams: i
        }), u.close("firstCharacterForm")
    }

    function s(e) {
        var t = {
            1: {
                question: d("ui.firstCharacter.question1")
            },
            2: {
                question: d("ui.firstCharacter.question2")
            },
            3: {
                question: d("ui.firstCharacter.question3")
            },
            4: {
                question: d("ui.firstCharacter.question4")
            },
            5: {
                question: d("ui.firstCharacter.question5")
            },
            6: {
                question: d("ui.firstCharacter.question6")
            },
            7: {
                question: d("ui.firstCharacter.question7")
            },
            8: {
                question: d("ui.firstCharacter.question8")
            }
        };
        return t[e] ? t[e].question : null
    }

    function c(e) {
        var t = {
            1: {
                answers: [d("ui.firstCharacter.answer1"), d("ui.firstCharacter.answer2")],
                buttons: [d("ui.firstCharacter.answerButton1"), d("ui.firstCharacter.answerButton2")]
            },
            2: {
                answers: [d("ui.firstCharacter.answer3"), d("ui.firstCharacter.answer4")],
                buttons: [d("ui.firstCharacter.answerButton3"), d("ui.firstCharacter.answerButton4")]
            },
            3: {
                answers: [d("ui.firstCharacter.answer5"), d("ui.firstCharacter.answer6")],
                buttons: [d("ui.firstCharacter.answerButton5"), d("ui.firstCharacter.answerButton6")]
            },
            4: {
                answers: [d("ui.firstCharacter.answer7"), d("ui.firstCharacter.answer8")],
                buttons: [d("ui.firstCharacter.answerButton7"), d("ui.firstCharacter.answerButton8")]
            },
            5: {
                answers: [d("ui.firstCharacter.answer9"), d("ui.firstCharacter.answer10")],
                buttons: [d("ui.firstCharacter.answerButton9"), d("ui.firstCharacter.answerButton10")]
            },
            6: {
                answers: [d("ui.firstCharacter.answer11"), d("ui.firstCharacter.answer12")],
                buttons: [d("ui.firstCharacter.answerButton11"), d("ui.firstCharacter.answerButton12")]
            },
            7: {
                answers: [d("ui.firstCharacter.answer13"), d("ui.firstCharacter.answer14")],
                buttons: [d("ui.firstCharacter.answerButton13"), d("ui.firstCharacter.answerButton14")]
            },
            8: {
                answers: [d("ui.firstCharacter.answer15"), d("ui.firstCharacter.answer16")],
                buttons: [d("ui.firstCharacter.answerButton15"), d("ui.firstCharacter.answerButton16")]
            }
        };
        return t[e] ? t[e] : []
    }

    function l(e, t, i) {
        return p.log("F_T_U_E.survey_question_answer", {
            question_id: e,
            answer_id: t,
            timestamp_event: new h.DofusDate(h.now())
                .getServerDate()
                .timestamp
        }), b[e][t](e, t, i), f[e][t]
    }
    var d = i(17)
        .getText,
        u = i(52),
        p = i(116),
        h = i(21),
        f = {
            1: {
                1: 2,
                2: 0
            },
            2: {
                1: 3,
                2: 4
            },
            3: {
                1: 5,
                2: 6
            },
            4: {
                1: 7,
                2: 8
            },
            5: {
                1: 0,
                2: 0
            },
            6: {
                1: 0,
                2: 0
            },
            7: {
                1: 0,
                2: 0
            },
            8: {
                1: 0,
                2: 0
            }
        },
        b = {
            1: {
                1: n,
                2: o
            },
            2: {
                1: n,
                2: n
            },
            3: {
                1: n,
                2: n
            },
            4: {
                1: n,
                2: n
            },
            5: {
                1: r,
                2: r
            },
            6: {
                1: r,
                2: r
            },
            7: {
                1: r,
                2: r
            },
            8: {
                1: r,
                2: r
            }
        };
    t.getQuestion = s, t.getAnswers = c, t.getNextStepId = l
}
