function(e, t, i) {
    ! function(e, i) {
        i(t)
    }(this, function(e) {
        "use strict";

        function t(e) {
            return e && DataView.prototype.isPrototypeOf(e)
        }

        function i(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function n(e) {
            return "string" != typeof e && (e = String(e)), e
        }

        function o(e) {
            var t = {
                next: function() {
                    var t = e.shift();
                    return {
                        done: void 0 === t,
                        value: t
                    }
                }
            };
            return _.iterable && (t[Symbol.iterator] = function() {
                return t
            }), t
        }

        function a(e) {
            this.map = {}, e instanceof a ? e.forEach(function(e, t) {
                    this.append(t, e)
                }, this) : Array.isArray(e) ? e.forEach(function(e) {
                    this.append(e[0], e[1])
                }, this) : e && Object.getOwnPropertyNames(e)
                .forEach(function(t) {
                    this.append(t, e[t])
                }, this)
        }

        function r(e) {
            return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(e.bodyUsed = !0)
        }

        function s(e) {
            return new Promise(function(t, i) {
                e.onload = function() {
                    t(e.result)
                }, e.onerror = function() {
                    i(e.error)
                }
            })
        }

        function c(e) {
            var t = new FileReader,
                i = s(t);
            return t.readAsArrayBuffer(e), i
        }

        function l(e) {
            var t = new FileReader,
                i = s(t);
            return t.readAsText(e), i
        }

        function d(e) {
            for (var t = new Uint8Array(e), i = new Array(t.length), n = 0; n < t.length; n++) i[n] = String.fromCharCode(t[n]);
            return i.join("")
        }

        function u(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
        }

        function p() {
            return this.bodyUsed = !1, this._initBody = function(e) {
                this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : _.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : _.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : _.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : _.arrayBuffer && _.blob && t(e) ? (this._bodyArrayBuffer = u(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : _.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || O(e)) ? this._bodyArrayBuffer = u(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : _.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, _.blob && (this.blob = function() {
                var e = r(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? r(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob()
                    .then(c)
            }), this.text = function() {
                var e = r(this);
                if (e) return e;
                if (this._bodyBlob) return l(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(d(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, _.formData && (this.formData = function() {
                return this.text()
                    .then(b)
            }), this.json = function() {
                return this.text()
                    .then(JSON.parse)
            }, this
        }

        function h(e) {
            var t = e.toUpperCase();
            return v.indexOf(t) > -1 ? t : e
        }

        function f(e, t) {
            t = t || {};
            var i = t.body;
            if (e instanceof f) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new a(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new a(t.headers)), this.method = h(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(i)
        }

        function b(e) {
            var t = new FormData;
            return e.trim()
                .split("&")
                .forEach(function(e) {
                    if (e) {
                        var i = e.split("="),
                            n = i.shift()
                            .replace(/\+/g, " "),
                            o = i.join("=")
                            .replace(/\+/g, " ");
                        t.append(decodeURIComponent(n), decodeURIComponent(o))
                    }
                }), t
        }

        function m(e) {
            var t = new a,
                i = e.replace(/\r?\n[\t ]+/g, " ");
            return i.split(/\r?\n/)
                .forEach(function(e) {
                    var i = e.split(":"),
                        n = i.shift()
                        .trim();
                    if (n) {
                        var o = i.join(":")
                            .trim();
                        t.append(n, o)
                    }
                }), t
        }

        function M(e, t) {
            t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new a(t.headers), this.url = t.url || "", this._initBody(e)
        }

        function g(t, i) {
            return new Promise(function(n, o) {
                function a() {
                    s.abort()
                }
                var r = new f(t, i);
                if (r.signal && r.signal.aborted) return o(new e.DOMException("Aborted", "AbortError"));
                var s = new XMLHttpRequest;
                s.onload = function() {
                    var e = {
                        status: s.status,
                        statusText: s.statusText,
                        headers: m(s.getAllResponseHeaders() || "")
                    };
                    e.url = "responseURL" in s ? s.responseURL : e.headers.get("X-Request-URL");
                    var t = "response" in s ? s.response : s.responseText;
                    n(new M(t, e))
                }, s.onerror = function() {
                    o(new TypeError("Network request failed"))
                }, s.ontimeout = function() {
                    o(new TypeError("Network request failed"))
                }, s.onabort = function() {
                    o(new e.DOMException("Aborted", "AbortError"))
                }, s.open(r.method, r.url, !0), "include" === r.credentials ? s.withCredentials = !0 : "omit" === r.credentials && (s.withCredentials = !1), "responseType" in s && _.blob && (s.responseType = "blob"), r.headers.forEach(function(e, t) {
                    s.setRequestHeader(t, e)
                }), r.signal && (r.signal.addEventListener("abort", a), s.onreadystatechange = function() {
                    4 === s.readyState && r.signal.removeEventListener("abort", a)
                }), s.send("undefined" == typeof r._bodyInit ? null : r._bodyInit)
            })
        }
        var _ = {
            searchParams: "URLSearchParams" in self,
            iterable: "Symbol" in self && "iterator" in Symbol,
            blob: "FileReader" in self && "Blob" in self && function() {
                try {
                    return new Blob, !0
                } catch (e) {
                    return !1
                }
            }(),
            formData: "FormData" in self,
            arrayBuffer: "ArrayBuffer" in self
        };
        if (_.arrayBuffer) var A = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            O = ArrayBuffer.isView || function(e) {
                return e && A.indexOf(Object.prototype.toString.call(e)) > -1
            };
        a.prototype.append = function(e, t) {
            e = i(e), t = n(t);
            var o = this.map[e];
            this.map[e] = o ? o + ", " + t : t
        }, a.prototype["delete"] = function(e) {
            delete this.map[i(e)]
        }, a.prototype.get = function(e) {
            return e = i(e), this.has(e) ? this.map[e] : null
        }, a.prototype.has = function(e) {
            return this.map.hasOwnProperty(i(e))
        }, a.prototype.set = function(e, t) {
            this.map[i(e)] = n(t)
        }, a.prototype.forEach = function(e, t) {
            for (var i in this.map) this.map.hasOwnProperty(i) && e.call(t, this.map[i], i, this)
        }, a.prototype.keys = function() {
            var e = [];
            return this.forEach(function(t, i) {
                e.push(i)
            }), o(e)
        }, a.prototype.values = function() {
            var e = [];
            return this.forEach(function(t) {
                e.push(t)
            }), o(e)
        }, a.prototype.entries = function() {
            var e = [];
            return this.forEach(function(t, i) {
                e.push([i, t])
            }), o(e)
        }, _.iterable && (a.prototype[Symbol.iterator] = a.prototype.entries);
        var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        f.prototype.clone = function() {
            return new f(this, {
                body: this._bodyInit
            })
        }, p.call(f.prototype), p.call(M.prototype), M.prototype.clone = function() {
            return new M(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new a(this.headers),
                url: this.url
            })
        }, M.error = function() {
            var e = new M(null, {
                status: 0,
                statusText: ""
            });
            return e.type = "error", e
        };
        var y = [301, 302, 303, 307, 308];
        M.redirect = function(e, t) {
            if (y.indexOf(t) === -1) throw new RangeError("Invalid status code");
            return new M(null, {
                status: t,
                headers: {
                    location: e
                }
            })
        }, e.DOMException = self.DOMException;
        try {
            new e.DOMException
        } catch (z) {
            e.DOMException = function(e, t) {
                this.message = e, this.name = t;
                var i = Error(e);
                this.stack = i.stack
            }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
        }
        g.polyfill = !0, self.fetch || (self.fetch = g, self.Headers = a, self.Request = f, self.Response = M), e.Headers = a, e.Request = f, e.Response = M, e.fetch = g, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    })
}
