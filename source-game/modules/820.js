function(e, t, i) {
    function n() {
        o.call(this), this.finishedAchievementsIds = [], this.accountAchievementsIds = [], this.rewardableAchievements = {}, this.maximumNumberOfAchievements = 0, this.achievementCategories = [], this.categories = {}, this.categoriesPercentage = {}, this.categoriesAchievementCount = {}, this.categoriesCurrentAchievementCount = {}, this.categoriesTotal = {}, this.categoriesTotalPercentage = {}, this.categoriesTotalAchievementCount = {}, this.categoriesTotalCurrentAchievementCount = {}, this.subCategories = {}, this.subCategoriesPercentage = {}, this.subCategoriesAchievementCount = {}, this.subCategoriesCurentAchievementCount = {}, this.points = 0
    }
    var o = i(59)
        .EventEmitter,
        a = i(56)
        .inherits,
        r = i(17)
        .getText,
        s = i(130),
        c = i(13),
        l = i(821),
        d = i(559),
        u = 1359;
    a(n, o), e.exports = n, n.prototype.disconnect = function() {
        this.finishedAchievementsIds = [], this.accountAchievementsIds = [], this.rewardableAchievements = {}, this.points = 0, this.categoriesPercentage = {}, this.categoriesCurrentAchievementCount = {}, this.categoriesTotalPercentage = {}, this.categoriesTotalCurrentAchievementCount = {}, this.subCategoriesPercentage = {}, this.subCategoriesCurentAchievementCount = {}
    }, n.prototype.initialize = function(e) {
        var t = this;
        e.on("AchievementListMessage", function(e) {
            var i = e.enrichData.points;
            e.enrichData.achievementsTotal && (t.maximumNumberOfAchievements = e.enrichData.achievementsTotal), t.finishedAchievementsIds = e.finishedAchievementsIds;
            for (var n = 0; n < e.rewardableAchievements.length; n++) t.finishedAchievementsIds.push(e.rewardableAchievements[n].id), t.rewardableAchievements[e.rewardableAchievements[n].id] = e.rewardableAchievements[n];
            for (var o = 0; o < e.accountAchievements.length; o++) e.accountAchievements[o].isFirstForAccount || t.accountAchievementsIds.push(e.accountAchievements[o].id);
            t.points = i, t.emit("achievementListUpdated", e)
        }), e.on("AchievementFinishedMessage", function(e) {
            window.gui.chat.logMsg(r("ui.achievement.achievementUnlockWithLink", e.id));
            var i = e.enrichData.points;
            t.finishedAchievementsIds.push(e.id), t.rewardableAchievements[e.id] = e, t.points += i;
            var n = null,
                o = e.enrichData.categoryID;
            if (t.categories[o]) t.categoriesTotalCurrentAchievementCount[o]++, t.categoriesCurrentAchievementCount[o]++, t.categoriesPercentage[o] = t.categoriesCurrentAchievementCount[o] / t.categoriesAchievementCount[o];
            else {
                for (var a in t.categoriesTotal)
                    if (t.categoriesTotal.hasOwnProperty(a) && t.categoriesTotal[a].indexOf(o) !== -1) {
                        n = a;
                        break
                    } n && (t.categoriesTotalCurrentAchievementCount[n]++, t.subCategoriesCurentAchievementCount[o]++, t.subCategoriesPercentage[o] = t.subCategoriesCurentAchievementCount[o] / t.subCategoriesAchievementCount[o])
            }
            n ? t.categoriesTotalPercentage[n] = t.categoriesTotalCurrentAchievementCount[n] / t.categoriesTotalAchievementCount[n] : t.categoriesTotalPercentage[o] = t.categoriesTotalCurrentAchievementCount[o] / t.categoriesTotalAchievementCount[o], e.parentCategoryID = n, e.id === c.ALBUERA_VILLAGE_ACHIEVEMENT && d.sendTagAlbueraVillageDiscovered(), e.id === c.ALBUERA_FOREST_ACHIEVEMENT && d.sendTagAlbueraForestDiscovered(), e.id === c.BELLADONNA_ISLAND_ACHIEVEMENT && d.sendTagBelladonnaIslandDiscovered(), e.id === c.ALBUERA_DUNGEON_ACHIEVEMENT && d.sendTagAlbueraDungeonDone(), e.id === u && d.sendEventStartGrobeExploration(), t.emit("achievementFinished", e)
        }), e.on("AchievementRewardSuccessMessage", function(e) {
            delete t.rewardableAchievements[e.achievementId], t.emit("achievementRewardSuccess", e.achievementId)
        }), s.getAllDataBulk("AchievementCategories", function(e, i) {
            return e ? console.error("AchievementCategories error", e) : (t.achievementCategories = i, void i.forEach(function(e) {
                var i = e.achievementIds.length;
                0 === e.parentId ? i > 0 && (t.categoriesTotalAchievementCount[e.id] ? t.categoriesTotalAchievementCount[e.id] += i : t.categoriesTotalAchievementCount[e.id] = i, t.categoriesAchievementCount[e.id] = i, t.categories[e.id] = e.achievementIds) : (t.categoriesTotal[e.parentId] ? t.categoriesTotal[e.parentId].push(e.id) : t.categoriesTotal[e.parentId] = [e.id], t.categoriesTotalAchievementCount[e.parentId] ? t.categoriesTotalAchievementCount[e.parentId] += i : t.categoriesTotalAchievementCount[e.parentId] = i, t.subCategoriesAchievementCount[e.id] = i, t.subCategories[e.id] = e.achievementIds)
            }))
        })
    }, n.prototype.getCategoryPercentage = function(e) {
        var t = this,
            i = this.categoriesTotal[e];
        this.categoriesTotalCurrentAchievementCount[e] = 0, i && i.forEach(function(i) {
            var n = t.subCategories[i];
            t.subCategoriesCurentAchievementCount[i] = 0, n ? (n.forEach(function(n) {
                t.finishedAchievementsIds.indexOf(n) !== -1 && (t.subCategoriesCurentAchievementCount[i]++, t.categoriesTotalCurrentAchievementCount[e]++)
            }), t.subCategoriesPercentage[i] = t.subCategoriesCurentAchievementCount[i] / t.subCategoriesAchievementCount[i]) : console.error("getCategoryPercentage : Cannot get sub category ID ", i)
        });
        var n = this.categories[e];
        this.categoriesCurrentAchievementCount[e] = 0, n && (n.forEach(function(i) {
            t.finishedAchievementsIds.indexOf(i) !== -1 && (t.categoriesCurrentAchievementCount[e]++, t.categoriesTotalCurrentAchievementCount[e]++)
        }), this.categoriesPercentage[e] = this.categoriesCurrentAchievementCount[e] / this.categoriesAchievementCount[e]), this.categoriesTotalPercentage[e] = this.categoriesTotalCurrentAchievementCount[e] / this.categoriesTotalAchievementCount[e]
    }, n.prototype.getAchievementKamasReward = function(e, t, i) {
        if (!e) return 0;
        var n = e.kamasScaleWithPlayerLevel ? i : t;
        return Math.floor((Math.pow(n, 2) + 20 * n - 20) * e.kamasRatio)
    }, n.prototype.getAchievementExperienceReward = function(e, t, i) {
        if (!e) return 0;
        var n = e.experienceRatio,
            o = window.gui.playerData.experienceFactor;
        return l.calculateAchievementXp(n, t, i, o)
    }, n.prototype.completedData = function(e) {
        var t = this.finishedAchievementsIds.indexOf(e) !== -1,
            i = this.rewardableAchievements[e],
            n = this.accountAchievementsIds.indexOf(e) !== -1,
            o = {
                isAccountCompleted: n,
                isCompleted: t && !i,
                finishedlevel: null
            };
        if (o.isCompleted) return o;
        var a = this.rewardableAchievements;
        for (var r in a)
            if (a.hasOwnProperty(r)) {
                var s = a[r];
                if (s.id === e) {
                    o.isCompleted = !0, o.finishedlevel = s.finishedlevel;
                    break
                }
            } return o
    }, n.prototype.getAchievementPercent = function() {
        return 0 === this.maximumNumberOfAchievements ? 0 : Math.round(this.finishedAchievementsIds.length / this.maximumNumberOfAchievements * 100)
    }, n.prototype.hasFinished = function(e) {
        return this.finishedAchievementsIds.indexOf(e) !== -1
    }
}
