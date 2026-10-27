/**
 * Entry do bundle do jogo. Reconstrói o runtime webpack original
 * (ver source-game/webpack-runtime-factory.js) e bootstrap em t(0).
 *
 * `e` é o array de módulos; `t` é o require (exposto como window.singletons);
 * `i` é o cache de instâncias. Comportamento idêntico ao bundle original.
 */
import modules from './modules-index.js'

;(function (e) {
  function t(n) {
    if (i[n]) return i[n].exports
    var o = (i[n] = {
      exports: {},
      id: n,
      loaded: !1,
    })
    return e[n].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports
  }
  var i = {}
  window.singletons = t
  return (t.m = e), (t.c = i), (t.p = ''), t(0)
})(modules)
