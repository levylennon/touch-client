function(e, t, i) {
    var n = i(471),
        o = {
            amulet: 0,
            weapon: 1,
            ringLeft: 2,
            belt: 3,
            ringRight: 4,
            boots: 5,
            hat: 6,
            cape: 7,
            pets: 8,
            dofus1: 9,
            dofus2: 10,
            dofus3: 11,
            dofus4: 12,
            dofus5: 13,
            dofus6: 14,
            shield: 15,
            mount: 16,
            mutation: 20,
            boostFood: 21,
            firstBonus: 22,
            secondBonus: 23,
            firstMalus: 24,
            secondMalus: 25,
            roleplayBuffer: 26,
            follower: 27,
            cosmeticHat: 28,
            cosmeticCape: 29,
            cosmeticPets: 30,
            cosmeticShield: 31,
            cosmeticWeapon: 32,
            notEquipped: 63
        };
    e.exports.positions = o;
    var a = {
        shield: 82,
        fullSoulStone: 85,
        mount: 121,
        marker: 177,
        cosmeticHat: 181,
        cosmeticCape: 182,
        cosmeticWeapon: 183,
        cosmeticShield: 184,
        cosmeticPet: 185,
        cosmeticMount: 190,
        cosmeticLegendaryWeapon: 203
    };
    e.exports.types = a,
    t.superTypeNotEquippable = [
        n.RESOURCE,
        n.QUEST_OBJECT,
        n.MUTATION,
        n.BOOST_FOOD,
        n.BLESSING,
        n.CURSE,
        n.USABLE_OBJECT,
        n.ROLEPLAY_BUFF,
        n.MOUNT,
        n.FOLLOWER,
        n.CAPTURING_OBJECT,
        n.LIVING_OBJECT ];
    var r = [!1, !0, !0, !0, !0, !0, !1, !0, !0, !1, !0, !0, !0, !0, !1, !1, !1, !1, !1, !1, !1, !1, !0, !1, !1, !1, !1, !1, !1];
    e.exports.filterEquipment = r;
    var s = [!1, !1, !1, !1, !1, !1, !0, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1];
    e.exports.filterConsumables = s;
    var c = [!1, !1, !1, !1, !1, !1, !1, !1, !1, !0, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1];
    e.exports.filterRessources = c;
    var l = [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !0, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1];
    e.exports.filterQuest = l;
    var d = [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !0, !0, !1, !0, !0, !0];
    e.exports.filterCosmetics = d;
    var u = {
        inventoryFull: 1,
        cannotEquipTwice: 2,
        notTradable: 3,
        cannotDrop: 4,
        cannotDropNoPlace: 5,
        cannotDestroy: 6,
        levelTooLow: 7,
        livingObjectRefusedFood: 8,
        cannotUnequip: 9,
        cannotEquipHere: 10,
        criterions: 11,
        mimicryObjectError: 12
    };
    e.exports.objectErrors = u;
    var p = {
        equipment: 0,
        consumables: 1,
        resources: 2,
        quest: 3,
        preset: 4,
        cosmetics: 5
    };
    e.exports.categories = p;
    var h = [
        [],
        [o.amulet],
        [o.weapon],
        [o.ringLeft, o.ringRight],
        [o.belt],
        [o.boots],
        [],
        [o.shield],
        [o.weapon],
        [],
        [o.hat],
        [o.cape],
        [o.pets],
        [o.dofus1, o.dofus2, o.dofus3, o.dofus4, o.dofus5, o.dofus6],
        [],
        [o.mutation],
        [o.boostFood],
        [o.firstBonus, o.secondBonus],
        [o.firstMalus, o.secondMalus],
        [o.roleplayBuffer],
        [o.follower],
        [o.mount],
        [],
        [o.cosmeticWeapon],
        [o.cosmeticShield],
        [],
        [o.cosmeticHat],
        [o.cosmeticCape],
        [o.cosmeticPets]
    ];
    e.exports.itemTypePositions = h
}
