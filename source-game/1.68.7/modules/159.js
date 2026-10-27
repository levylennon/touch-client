function(e, t, i) {
    (function(t) {
        function i(e, t, i) {
            return e ^ t ^ i
        }

        function n(e, t, i) {
            return e & t | ~e & i
        }

        function o(e, t, i) {
            return (e | ~t) ^ i
        }

        function a(e, t, i) {
            return e & i | t & ~i
        }

        function r(e, t, i) {
            return e ^ (t | ~i)
        }

        function s(e, t) {
            return e << t | e >>> 32 - t
        }

        function c(e) {
            var i = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            "string" == typeof e && (e = new t(e, "utf8"));
            var n = b(e),
                o = 8 * e.length,
                a = 8 * e.length;
            n[o >>> 5] |= 128 << 24 - o % 32, n[(o + 64 >>> 9 << 4) + 14] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
            for (var r = 0; r < n.length; r += 16) M(i, n, r);
            for (var r = 0; r < 5; r++) {
                var s = i[r];
                i[r] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
            }
            var c = m(i);
            return new t(c)
        }
        e.exports = c;
        /** @preserve
        	(c) 2012 by Cédric Mesnil. All rights reserved.
        	
        	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
        	
        	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        	
        	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        	*/
        var l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
            d = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
            u = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
            p = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
            h = [0, 1518500249, 1859775393, 2400959708, 2840853838],
            f = [1352829926, 1548603684, 1836072691, 2053994217, 0],
            b = function(e) {
                for (var t = [], i = 0, n = 0; i < e.length; i++, n += 8) t[n >>> 5] |= e[i] << 24 - n % 32;
                return t
            },
            m = function(e) {
                for (var t = [], i = 0; i < 32 * e.length; i += 8) t.push(e[i >>> 5] >>> 24 - i % 32 & 255);
                return t
            },
            M = function(e, t, c) {
                for (var b = 0; b < 16; b++) {
                    var m = c + b,
                        M = t[m];
                    t[m] = 16711935 & (M << 8 | M >>> 24) | 4278255360 & (M << 24 | M >>> 8)
                }
                var g, _, A, O, v, y, z, w, T, C;
                y = g = e[0], z = _ = e[1], w = A = e[2], T = O = e[3], C = v = e[4];
                for (var I, b = 0; b < 80; b += 1) I = g + t[c + l[b]] | 0, I += b < 16 ? i(_, A, O) + h[0] : b < 32 ? n(_, A, O) + h[1] : b < 48 ? o(_, A, O) + h[2] : b < 64 ? a(_, A, O) + h[3] : r(_, A, O) + h[4], I = 0 | I, I = s(I, u[b]), I = I + v | 0, g = v, v = O, O = s(A, 10), A = _, _ = I, I = y + t[c + d[b]] | 0, I += b < 16 ? r(z, w, T) + f[0] : b < 32 ? a(z, w, T) + f[1] : b < 48 ? o(z, w, T) + f[2] : b < 64 ? n(z, w, T) + f[3] : i(z, w, T) + f[4], I = 0 | I, I = s(I, p[b]), I = I + C | 0, y = C, C = T, T = s(w, 10), w = z, z = I;
                I = e[1] + A + T | 0, e[1] = e[2] + O + C | 0, e[2] = e[3] + v + y | 0, e[3] = e[4] + g + z | 0, e[4] = e[0] + _ + w | 0, e[0] = I
            }
    })
    .call(t, i(145)
        .Buffer)
}
