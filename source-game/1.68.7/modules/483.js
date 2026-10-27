function(e, t) {
    e.exports = {
        shed: {
            equip: 2,
            free: 3,
            certificate: 4,
            paddock: 6,
            sterilize: 17
        },
        paddock: {
            shed: 7,
            free: 8,
            equip: 10,
            certificate: 14,
            sterilize: 19
        },
        equip: {
            shed: 1,
            paddock: 9,
            free: 11,
            certificate: 13,
            sterilize: 18
        },
        certificate: {
            shed: 5,
            paddock: 16,
            equip: 15
        }
    }
}
