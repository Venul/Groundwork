! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}
("undefined" != typeof window ? window : this, function(t, e) {
    function s(t) {
        var e = "length" in t && t.length,
            s = rt.type(t);
        return "function" === s || rt.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === s || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function a(t, e, s) {
        if (rt.isFunction(e)) return rt.grep(t, function(t, a) {
            return !!e.call(t, a, t) !== s
        });
        if (e.nodeType) return rt.grep(t, function(t) {
            return t === e !== s
        });
        if ("string" == typeof e) {
            if (ut.test(e)) return rt.filter(e, t, s);
            e = rt.filter(e, t)
        }
        return rt.grep(t, function(t) {
            return rt.inArray(t, e) >= 0 !== s
        })
    }

    function r(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function n(t) {
        var e = bt[t] = {};
        return rt.each(t.match(vt) || [], function(t, s) {
            e[s] = !0
        }), e
    }

    function i() {
        ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", o, !1), t.removeEventListener("load", o, !1)) : (ft.detachEvent("onreadystatechange", o), t.detachEvent("onload", o))
    }

    function o() {
        (ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (i(), rt.ready())
    }

    function c(t, e, s) {
        if (void 0 === s && 1 === t.nodeType) {
            var a = "data-" + e.replace(St, "-$1").toLowerCase();
            if (s = t.getAttribute(a), "string" == typeof s) {
                try {
                    s = "true" === s ? !0 : "false" === s ? !1 : "null" === s ? null : +s + "" === s ? +s : Ct.test(s) ? rt.parseJSON(s) : s
                } catch (r) {}
                rt.data(t, e, s)
            } else s = void 0
        }
        return s
    }

    function m(t, e, s, a) {
        if (rt.acceptData(t)) {
            var r, n, i = rt.expando,
                o = t.nodeType,
                c = o ? rt.cache : t,
                l = o ? t[i] : t[i] && i;
            if (l && c[l] && (a || c[l].data) || void 0 !== s || "string" != typeof e) return l || (l = o ? t[i] = Q.pop() || rt.guid++ : i), c[l] || (c[l] = o ? {} : {
                toJSON: rt.noop
            }), ("object" == typeof e || "function" == typeof e) && (a ? c[l] = rt.extend(c[l], e) : c[l].data = rt.extend(c[l].data, e)), n = c[l], a || (n.data || (n.data = {}), n = n.data), void 0 !== s && (n[rt.camelCase(e)] = s), "string" == typeof e ? (r = n[e], null == r && (r = n[rt.camelCase(e)])) : r = n, r
        }
    }

    function u() {
        return !0
    }

    function d() {
        return !1
    }

    function f() {
        try {
            return ft.activeElement
        } catch (t) {}
    }

    function p(t) {
        var e = zt.split("|"),
            s = t.createDocumentFragment();
        if (s.createElement)
            for (; e.length;) s.createElement(e.pop());
        return s
    }

  
    // function x(t, e) {
    //     for (var s, a = 0; null != (s = t[a]); a++) rt._data(s, "globalEval", !e || rt._data(e[a], "globalEval"))
    // }

    // function w(t, e) {
    //     if (1 === e.nodeType && rt.hasData(t)) {
    //         var s, a, r, n = rt._data(t),
    //             i = rt._data(e, n),
    //             o = n.events;
    //         if (o) {
    //             delete i.handle, i.events = {};
    //             for (s in o)
    //                 for (a = 0, r = o[s].length; r > a; a++) rt.event.add(e, s, o[s][a])
    //         }
    //         i.data && (i.data = rt.extend({}, i.data))
    //     }
    // }

    // function k(t, e) {
    //     var s, a, r;
    //     if (1 === e.nodeType) {
    //         if (s = e.nodeName.toLowerCase(), !st.noCloneEvent && e[rt.expando]) {
    //             r = rt._data(e);
    //             for (a in r.events) rt.removeEvent(e, a, r.handle);
    //             e.removeAttribute(rt.expando)
    //         }
    //         "script" === s && e.text !== t.text ? (v(e).text = t.text, b(e)) : "object" === s ? (e.parentNode && (e.outerHTML = t.outerHTML), st.html5Clone && t.innerHTML && !rt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === s && At.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === s ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === s || "textarea" === s) && (e.defaultValue = t.defaultValue)
    //     }
    // }

    // function C(e, s) {
    //     var a, r = rt(s.createElement(e)).appendTo(s.body),
    //         n = t.getDefaultComputedStyle && (a = t.getDefaultComputedStyle(r[0])) ? a.display : rt.css(r[0], "display");
    //     return r.detach(), n
    // }

    // function S(t) {
    //     var e = ft,
    //         s = Zt[t];
    //     return s || (s = C(t, e), "none" !== s && s || (Yt = (Yt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Yt[0].contentWindow || Yt[0].contentDocument).document, e.write(), e.close(), s = C(t, e), Yt.detach()), Zt[t] = s), s
    // }

    function T(t, e) {
        return {
            get: function() {
                var s = t();
                return null != s ? s ? void delete this.get : (this.get = e).apply(this, arguments) : void 0
            }
        }
    }

    function P(t, e) {
        if (e in t) return e;
        for (var s = e.charAt(0).toUpperCase() + e.slice(1), a = e, r = ue.length; r--;)
            if (e = ue[r] + s, e in t) return e;
        return a
    }

    function j(t, e) {
        for (var s, a, r, n = [], i = 0, o = t.length; o > i; i++) a = t[i], a.style && (n[i] = rt._data(a, "olddisplay"), s = a.style.display, e ? (n[i] || "none" !== s || (a.style.display = ""), "" === a.style.display && jt(a) && (n[i] = rt._data(a, "olddisplay", S(a.nodeName)))) : (r = jt(a), (s && "none" !== s || !r) && rt._data(a, "olddisplay", r ? s : rt.css(a, "display"))));
        for (i = 0; o > i; i++) a = t[i], a.style && (e && "none" !== a.style.display && "" !== a.style.display || (a.style.display = e ? n[i] || "" : "none"));
        return t
    }

    function E(t, e, s) {
        var a = ce.exec(e);
        return a ? Math.max(0, a[1] - (s || 0)) + (a[2] || "px") : e
    }

    function A(t, e, s, a, r) {
        for (var n = s === (a ? "border" : "content") ? 4 : "width" === e ? 1 : 0, i = 0; 4 > n; n += 2) "margin" === s && (i += rt.css(t, s + Pt[n], !0, r)), a ? ("content" === s && (i -= rt.css(t, "padding" + Pt[n], !0, r)), "margin" !== s && (i -= rt.css(t, "border" + Pt[n] + "Width", !0, r))) : (i += rt.css(t, "padding" + Pt[n], !0, r), "padding" !== s && (i += rt.css(t, "border" + Pt[n] + "Width", !0, r)));
        return i
    }

    function N(t, e, s) {
        var a = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            n = te(t),
            i = st.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, n);
        if (0 >= r || null == r) {
            if (r = ee(t, e, n), (0 > r || null == r) && (r = t.style[e]), ae.test(r)) return r;
            a = i && (st.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + A(t, e, s || (i ? "border" : "content"), a, n) + "px"
    }

    function O(t, e, s, a, r) {
        return new O.prototype.init(t, e, s, a, r)
    }

    function M() {
        return setTimeout(function() {
            de = void 0
        }), de = rt.now()
    }

    function F(t, e) {
        var s, a = {
                height: t
            },
            r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e) s = Pt[r], a["margin" + s] = a["padding" + s] = t;
        return e && (a.opacity = a.width = t), a
    }

    function I(t, e, s) {
        for (var a, r = (ve[e] || []).concat(ve["*"]), n = 0, i = r.length; i > n; n++)
            if (a = r[n].call(s, e, t)) return a
    }

    function z(t, e, s) {
        var a, r, n, i, o, c, l, m, h = this,
            u = {},
            d = t.style,
            f = t.nodeType && jt(t),
            p = rt._data(t, "fxshow");
        s.queue || (o = rt._queueHooks(t, "fx"), null == o.unqueued && (o.unqueued = 0, c = o.empty.fire, o.empty.fire = function() {
            o.unqueued || c()
        }), o.unqueued++, h.always(function() {
            h.always(function() {
                o.unqueued--, rt.queue(t, "fx").length || o.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (s.overflow = [d.overflow, d.overflowX, d.overflowY], l = rt.css(t, "display"), m = "none" === l ? rt._data(t, "olddisplay") || S(t.nodeName) : l, "inline" === m && "none" === rt.css(t, "float") && (st.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), s.overflow && (d.overflow = "hidden", st.shrinkWrapBlocks() || h.always(function() {
            d.overflow = s.overflow[0], d.overflowX = s.overflow[1], d.overflowY = s.overflow[2]
        }));
        for (a in e)
            if (r = e[a], pe.exec(r)) {
                if (delete e[a], n = n || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !p || void 0 === p[a]) continue;
                    f = !0
                }
                u[a] = p && p[a] || rt.style(t, a)
            } else l = void 0;
        if (rt.isEmptyObject(u)) "inline" === ("none" === l ? S(t.nodeName) : l) && (d.display = l);
        else {
            p ? "hidden" in p && (f = p.hidden) : p = rt._data(t, "fxshow", {}), n && (p.hidden = !f), f ? rt(t).show() : h.done(function() {
                rt(t).hide()
            }), h.done(function() {
                var e;
                rt._removeData(t, "fxshow");
                for (e in u) rt.style(t, e, u[e])
            });
            for (a in u) i = I(f ? p[a] : 0, a, h), a in p || (p[a] = i.start, f && (i.end = i.start, i.start = "width" === a || "height" === a ? 1 : 0))
        }
    }

    function H(t, e) {
        var s, a, r, n, i;
        for (s in t)
            if (a = rt.camelCase(s), r = e[a], n = t[s], rt.isArray(n) && (r = n[1], n = t[s] = n[0]), s !== a && (t[a] = n, delete t[s]), i = rt.cssHooks[a], i && "expand" in i) {
                n = i.expand(n), delete t[a];
                for (s in n) s in t || (t[s] = n[s], e[s] = r)
            } else e[a] = r
    }

    function L(t, e, s) {
        var a, r, n = 0,
            i = _e.length,
            o = rt.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (r) return !1;
                for (var e = de || M(), s = Math.max(0, l.startTime + l.duration - e), a = s / l.duration || 0, n = 1 - a, i = 0, c = l.tweens.length; c > i; i++) l.tweens[i].run(n);
                return o.notifyWith(t, [l, n, s]), 1 > n && c ? s : (o.resolveWith(t, [l]), !1)
            },
            l = o.promise({
                elem: t,
                props: rt.extend({}, e),
                opts: rt.extend(!0, {
                    specialEasing: {}
                }, s),
                originalProperties: e,
                originalOptions: s,
                startTime: de || M(),
                duration: s.duration,
                tweens: [],
                createTween: function(e, s) {
                    var a = rt.Tween(t, l.opts, e, s, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(a), a
                },
                stop: function(e) {
                    var s = 0,
                        a = e ? l.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; a > s; s++) l.tweens[s].run(1);
                    return e ? o.resolveWith(t, [l, e]) : o.rejectWith(t, [l, e]), this
                }
            }),
            m = l.props;
        for (H(m, l.opts.specialEasing); i > n; n++)
            if (a = _e[n].call(l, t, m, l.opts)) return a;
        return rt.map(m, I, l), rt.isFunction(l.opts.start) && l.opts.start.call(t, l), rt.fx.timer(rt.extend(c, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function B(t) {
        return function(e, s) {
            "string" != typeof e && (s = e, e = "*");
            var a, r = 0,
                n = e.toLowerCase().match(vt) || [];
            if (rt.isFunction(s))
                for (; a = n[r++];) "+" === a.charAt(0) ? (a = a.slice(1) || "*", (t[a] = t[a] || []).unshift(s)) : (t[a] = t[a] || []).push(s)
        }
    }

    function D(t, e, s, a) {
        function r(o) {
            var c;
            return n[o] = !0, rt.each(t[o] || [], function(t, o) {
                var l = o(e, s, a);
                return "string" != typeof l || i || n[l] ? i ? !(c = l) : void 0 : (e.dataTypes.unshift(l), r(l), !1)
            }), c
        }
        var n = {},
            i = t === $e;
        return r(e.dataTypes[0]) || !n["*"] && r("*")
    }

    function R(t, e) {
        var s, a, r = rt.ajaxSettings.flatOptions || {};
        for (a in e) void 0 !== e[a] && ((r[a] ? t : s || (s = {}))[a] = e[a]);
        return s && rt.extend(!0, t, s), t
    }

    function q(t, e, s) {
        for (var a, r, n, i, o = t.contents, c = t.dataTypes;
            "*" === c[0];) c.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (i in o)
                if (o[i] && o[i].test(r)) {
                    c.unshift(i);
                    break
                }
        if (c[0] in s) n = c[0];
        else {
            for (i in s) {
                if (!c[0] || t.converters[i + " " + c[0]]) {
                    n = i;
                    break
                }
                a || (a = i)
            }
            n = n || a
        }
        return n ? (n !== c[0] && c.unshift(n), s[n]) : void 0
    }

    function U(t, e, s, a) {
        var r;
        if (rt.isArray(e)) rt.each(e, function(e, r) {
            s || Ge.test(t) ? a(t, r) : U(t + "[" + ("object" == typeof r ? e : "") + "]", r, s, a)
        });
        else if (s || "object" !== rt.type(e)) a(t, e);
        else
            for (r in e) U(t + "[" + r + "]", e[r], s, a)
    }

    function W() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function V() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function G(t) {
        return rt.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var Q = [],
        X = Q.slice,
        J = Q.concat,
        K = Q.push,
        Y = Q.indexOf,
        Z = {},
        tt = Z.toString,
        et = Z.hasOwnProperty,
        st = {},
        at = "1.11.3",
        rt = function(t, e) {
            return new rt.fn.init(t, e)
        },
        nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        it = /^-ms-/,
        ot = /-([\da-z])/gi,
        ct = function(t, e) {
            return e.toUpperCase()
        };
    rt.fn = rt.prototype = {
        jquery: at,
        constructor: rt,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : X.call(this)
        },
        pushStack: function(t) {
            var e = rt.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return rt.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(rt.map(this, function(e, s) {
                return t.call(e, s, e)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                s = +t + (0 > t ? e : 0);
            return this.pushStack(s >= 0 && e > s ? [this[s]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: Q.sort,
        splice: Q.splice
    }, 
    rt.extend = rt.fn.extend = function() {
        var t, e, s, a, r, n, i = arguments[0] || {},
            o = 1,
            c = arguments.length,
            l = !1;
        for ("boolean" == typeof i && (l = i, i = arguments[o] || {}, o++), "object" == typeof i || rt.isFunction(i) || (i = {}), o === c && (i = this, o--); c > o; o++)
            if (null != (r = arguments[o]))
                for (a in r) t = i[a], s = r[a], i !== s && (l && s && (rt.isPlainObject(s) || (e = rt.isArray(s))) ? (e ? (e = !1, n = t && rt.isArray(t) ? t : []) : n = t && rt.isPlainObject(t) ? t : {}, i[a] = rt.extend(l, n, s)) : void 0 !== s && (i[a] = s));
        return i
    }, 
    rt.extend({
        expando: "jQuery" + (at + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === rt.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === rt.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !rt.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return !1;
            try {
                if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (s) {
                return !1
            }
            if (st.ownLast)
                for (e in t) return et.call(t, e);
            for (e in t);
            return void 0 === e || et.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[tt.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && rt.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(it, "ms-").replace(ot, ct)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, a) {
            var r, n = 0,
                i = t.length,
                o = s(t);
            if (a) {
                if (o)
                    for (; i > n && (r = e.apply(t[n], a), r !== !1); n++);
                else
                    for (n in t)
                        if (r = e.apply(t[n], a), r === !1) break
            } else if (o)
                for (; i > n && (r = e.call(t[n], n, t[n]), r !== !1); n++);
            else
                for (n in t)
                    if (r = e.call(t[n], n, t[n]), r === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(nt, "")
        },
        makeArray: function(t, e) {
            var a = e || [];
            return null != t && (s(Object(t)) ? rt.merge(a, "string" == typeof t ? [t] : t) : K.call(a, t)), a
        },
        inArray: function(t, e, s) {
            var a;
            if (e) {
                if (Y) return Y.call(e, t, s);
                for (a = e.length, s = s ? 0 > s ? Math.max(0, a + s) : s : 0; a > s; s++)
                    if (s in e && e[s] === t) return s
            }
            return -1
        },
        merge: function(t, e) {
            for (var s = +e.length, a = 0, r = t.length; s > a;) t[r++] = e[a++];
            if (s !== s)
                for (; void 0 !== e[a];) t[r++] = e[a++];
            return t.length = r, t
        },
        grep: function(t, e, s) {
            for (var a, r = [], n = 0, i = t.length, o = !s; i > n; n++) a = !e(t[n], n), a !== o && r.push(t[n]);
            return r
        },
        map: function(t, e, a) {
            var r, n = 0,
                i = t.length,
                o = s(t),
                c = [];
            if (o)
                for (; i > n; n++) r = e(t[n], n, a), null != r && c.push(r);
            else
                for (n in t) r = e(t[n], n, a), null != r && c.push(r);
            return J.apply([], c)
        },
        guid: 1,
        proxy: function(t, e) {
            var s, a, r;
            return "string" == typeof e && (r = t[e], e = t, t = r), rt.isFunction(t) ? (s = X.call(arguments, 2), a = function() {
                return t.apply(e || this, s.concat(X.call(arguments)))
            }, a.guid = t.guid = t.guid || rt.guid++, a) : void 0
        },
        now: function() {
            return +new Date
        },
        support: st
    }), 
rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var lt = function(t) {
        function e(t, e, s, a) {
            var r, n, i, o, c, l, h, d, f, p;
            if ((e ? e.ownerDocument || e : D) !== O && N(e), e = e || O, s = s || [], o = e.nodeType, "string" != typeof t || !t || 1 !== o && 9 !== o && 11 !== o) return s;
            if (!a && F) {
                if (11 !== o && (r = _t.exec(t)))
                    if (i = r[1]) {
                        if (9 === o) {
                            if (n = e.getElementById(i), !n || !n.parentNode) return s;
                            if (n.id === i) return s.push(n), s
                        } else if (e.ownerDocument && (n = e.ownerDocument.getElementById(i)) && L(e, n) && n.id === i) return s.push(n), s
                    } else {
                        if (r[2]) return Y.apply(s, e.getElementsByTagName(t)), s;
                        if ((i = r[3]) && x.getElementsByClassName) return Y.apply(s, e.getElementsByClassName(i)), s
                    }
                if (x.qsa && (!I || !I.test(t))) {
                    if (d = h = B, f = e, p = 1 !== o && t, 1 === o && "object" !== e.nodeName.toLowerCase()) {
                        for (l = S(t), (h = e.getAttribute("id")) ? d = h.replace(bt, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", c = l.length; c--;) l[c] = d + u(l[c]);
                        f = vt.test(t) && m(e.parentNode) || e, p = l.join(",")
                    }
                    if (p) try {
                        return Y.apply(s, f.querySelectorAll(p)), s
                    } catch (g) {} finally {
                        h || e.removeAttribute("id")
                    }
                }
            }
            return P(t.replace(ct, "$1"), e, s, a)
        }

        function s() {
            function t(s, a) {
                return e.push(s + " ") > w.cacheLength && delete t[e.shift()], t[s + " "] = a
            }
            var e = [];
            return t
        }

        function a(t) {
            return t[B] = !0, t
        }

        function r(t) {
            var e = O.createElement("div");
            try {
                return !!t(e)
            } catch (s) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function n(t, e) {
            for (var s = t.split("|"), a = t.length; a--;) w.attrHandle[s[a]] = e
        }

        function i(t, e) {
            var s = e && t,
                a = s && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
            if (a) return a;
            if (s)
                for (; s = s.nextSibling;)
                    if (s === e) return -1;
            return t ? 1 : -1
        }

        function o(t) {
            return function(e) {
                var s = e.nodeName.toLowerCase();
                return "input" === s && e.type === t
            }
        }

        function c(t) {
            return function(e) {
                var s = e.nodeName.toLowerCase();
                return ("input" === s || "button" === s) && e.type === t
            }
        }

        function l(t) {
            return a(function(e) {
                return e = +e, a(function(s, a) {
                    for (var r, n = t([], s.length, e), i = n.length; i--;) s[r = n[i]] && (s[r] = !(a[r] = s[r]))
                })
            })
        }

        function m(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function h() {}

        function u(t) {
            for (var e = 0, s = t.length, a = ""; s > e; e++) a += t[e].value;
            return a
        }

        function d(t, e, s) {
            var a = e.dir,
                r = s && "parentNode" === a,
                n = q++;
            return e.first ? function(e, s, n) {
                for (; e = e[a];)
                    if (1 === e.nodeType || r) return t(e, s, n)
            } : function(e, s, i) {
                var o, c, l = [R, n];
                if (i) {
                    for (; e = e[a];)
                        if ((1 === e.nodeType || r) && t(e, s, i)) return !0
                } else
                    for (; e = e[a];)
                        if (1 === e.nodeType || r) {
                            if (c = e[B] || (e[B] = {}), (o = c[a]) && o[0] === R && o[1] === n) return l[2] = o[2];
                            if (c[a] = l, l[2] = t(e, s, i)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function(e, s, a) {
                for (var r = t.length; r--;)
                    if (!t[r](e, s, a)) return !1;
                return !0
            } : t[0]
        }

        function p(t, s, a) {
            for (var r = 0, n = s.length; n > r; r++) e(t, s[r], a);
            return a
        }

        function g(t, e, s, a, r) {
            for (var n, i = [], o = 0, c = t.length, l = null != e; c > o; o++)(n = t[o]) && (!s || s(n, a, r)) && (i.push(n), l && e.push(o));
            return i
        }

        function y(t, e, s, r, n, i) {
            return r && !r[B] && (r = y(r)), n && !n[B] && (n = y(n, i)), a(function(a, i, o, c) {
                var l, m, h, u = [],
                    d = [],
                    f = i.length,
                    y = a || p(e || "*", o.nodeType ? [o] : o, []),
                    _ = !t || !a && e ? y : g(y, u, t, o, c),
                    v = s ? n || (a ? t : f || r) ? [] : i : _;
                if (s && s(_, v, o, c), r)
                    for (l = g(v, d), r(l, [], o, c), m = l.length; m--;)(h = l[m]) && (v[d[m]] = !(_[d[m]] = h));
                if (a) {
                    if (n || t) {
                        if (n) {
                            for (l = [], m = v.length; m--;)(h = v[m]) && l.push(_[m] = h);
                            n(null, v = [], l, c)
                        }
                        for (m = v.length; m--;)(h = v[m]) && (l = n ? tt(a, h) : u[m]) > -1 && (a[l] = !(i[l] = h))
                    }
                } else v = g(v === i ? v.splice(f, v.length) : v), n ? n(null, i, v, c) : Y.apply(i, v)
            })
        }

        function _(t) {
            for (var e, s, a, r = t.length, n = w.relative[t[0].type], i = n || w.relative[" "], o = n ? 1 : 0, c = d(function(t) {
                    return t === e
                }, i, !0), l = d(function(t) {
                    return tt(e, t) > -1
                }, i, !0), m = [function(t, s, a) {
                    var r = !n && (a || s !== j) || ((e = s).nodeType ? c(t, s, a) : l(t, s, a));
                    return e = null, r
                }]; r > o; o++)
                if (s = w.relative[t[o].type]) m = [d(f(m), s)];
                else {
                    if (s = w.filter[t[o].type].apply(null, t[o].matches), s[B]) {
                        for (a = ++o; r > a && !w.relative[t[a].type]; a++);
                        return y(o > 1 && f(m), o > 1 && u(t.slice(0, o - 1).concat({
                            value: " " === t[o - 2].type ? "*" : ""
                        })).replace(ct, "$1"), s, a > o && _(t.slice(o, a)), r > a && _(t = t.slice(a)), r > a && u(t))
                    }
                    m.push(s)
                }
            return f(m)
        }

        function v(t, s) {
            var r = s.length > 0,
                n = t.length > 0,
                i = function(a, i, o, c, l) {
                    var m, h, u, d = 0,
                        f = "0",
                        p = a && [],
                        y = [],
                        _ = j,
                        v = a || n && w.find.TAG("*", l),
                        b = R += null == _ ? 1 : Math.random() || .1,
                        x = v.length;
                    for (l && (j = i !== O && i); f !== x && null != (m = v[f]); f++) {
                        if (n && m) {
                            for (h = 0; u = t[h++];)
                                if (u(m, i, o)) {
                                    c.push(m);
                                    break
                                }
                            l && (R = b)
                        }
                        r && ((m = !u && m) && d--, a && p.push(m))
                    }
                    if (d += f, r && f !== d) {
                        for (h = 0; u = s[h++];) u(p, y, i, o);
                        if (a) {
                            if (d > 0)
                                for (; f--;) p[f] || y[f] || (y[f] = J.call(c));
                            y = g(y)
                        }
                        Y.apply(c, y), l && !a && y.length > 0 && d + s.length > 1 && e.uniqueSort(c)
                    }
                    return l && (R = b, j = _), p
                };
            return r ? a(i) : i
        }
        var b, x, w, k, C, S, T, P, j, E, A, N, O, M, F, I, z, H, L, B = "sizzle" + 1 * new Date,
            D = t.document,
            R = 0,
            q = 0,
            $ = s(),
            U = s(),
            W = s(),
            V = function(t, e) {
                return t === e && (A = !0), 0
            },
            G = 1 << 31,
            Q = {}.hasOwnProperty,
            X = [],
            J = X.pop,
            K = X.push,
            Y = X.push,
            Z = X.slice,
            tt = function(t, e) {
                for (var s = 0, a = t.length; a > s; s++)
                    if (t[s] === e) return s;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            st = "[\\x20\\t\\r\\n\\f]",
            at = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = at.replace("w", "w#"),
            nt = "\\[" + st + "*(" + at + ")(?:" + st + "*([*^$|!~]?=)" + st + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + st + "*\\]",
            it = ":(" + at + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
            ot = new RegExp(st + "+", "g"),
            ct = new RegExp("^" + st + "+|((?:^|[^\\\\])(?:\\\\.)*)" + st + "+$", "g"),
            lt = new RegExp("^" + st + "*," + st + "*"),
            mt = new RegExp("^" + st + "*([>+~]|" + st + ")" + st + "*"),
            ht = new RegExp("=" + st + "*([^\\]'\"]*?)" + st + "*\\]", "g"),
            ut = new RegExp(it),
            dt = new RegExp("^" + rt + "$"),
            ft = {
                ID: new RegExp("^#(" + at + ")"),
                CLASS: new RegExp("^\\.(" + at + ")"),
                TAG: new RegExp("^(" + at.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + nt),
                PSEUDO: new RegExp("^" + it),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + st + "*(even|odd|(([+-]|)(\\d*)n|)" + st + "*(?:([+-]|)" + st + "*(\\d+)|))" + st + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + st + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + st + "*((?:-\\d)?\\d*)" + st + "*\\)|)(?=[^-]|$)", "i")
            },
            pt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            yt = /^[^{]+\{\s*\[native \w/,
            _t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            vt = /[+~]/,
            bt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + st + "?|(" + st + ")|.)", "ig"),
            wt = function(t, e, s) {
                var a = "0x" + e - 65536;
                return a !== a || s ? e : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            },
            kt = function() {
                N()
            };
        try {
            Y.apply(X = Z.call(D.childNodes), D.childNodes), X[D.childNodes.length].nodeType
        } catch (Ct) {
            Y = {
                apply: X.length ? function(t, e) {
                    K.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var s = t.length, a = 0; t[s++] = e[a++];);
                    t.length = s - 1
                }
            }
        }
        x = e.support = {}, C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, N = e.setDocument = function(t) {
            var e, s, a = t ? t.ownerDocument || t : D;
            return a !== O && 9 === a.nodeType && a.documentElement ? (O = a, M = a.documentElement, s = a.defaultView, s && s !== s.top && (s.addEventListener ? s.addEventListener("unload", kt, !1) : s.attachEvent && s.attachEvent("onunload", kt)), F = !C(a), x.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = r(function(t) {
                return t.appendChild(a.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = yt.test(a.getElementsByClassName), x.getById = r(function(t) {
                return M.appendChild(t).id = B, !a.getElementsByName || !a.getElementsByName(B).length
            }), x.getById ? (w.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && F) {
                    var s = e.getElementById(t);
                    return s && s.parentNode ? [s] : []
                }
            }, w.filter.ID = function(t) {
                var e = t.replace(xt, wt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete w.find.ID, w.filter.ID = function(t) {
                var e = t.replace(xt, wt);
                return function(t) {
                    var s = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return s && s.value === e
                }
            }), w.find.TAG = x.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var s, a = [],
                    r = 0,
                    n = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; s = n[r++];) 1 === s.nodeType && a.push(s);
                    return a
                }
                return n
            }, w.find.CLASS = x.getElementsByClassName && function(t, e) {
                return F ? e.getElementsByClassName(t) : void 0
            }, z = [], I = [], (x.qsa = yt.test(a.querySelectorAll)) && (r(function(t) {
                M.appendChild(t).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + st + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + st + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + B + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + B + "+*").length || I.push(".#.+[+~]")
            }), r(function(t) {
                var e = a.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + st + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
            })), (x.matchesSelector = yt.test(H = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function(t) {
                x.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), z.push("!=", it)
            }), I = I.length && new RegExp(I.join("|")), z = z.length && new RegExp(z.join("|")), e = yt.test(M.compareDocumentPosition), L = e || yt.test(M.contains) ? function(t, e) {
                var s = 9 === t.nodeType ? t.documentElement : t,
                    a = e && e.parentNode;
                return t === a || !(!a || 1 !== a.nodeType || !(s.contains ? s.contains(a) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(a)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, V = e ? function(t, e) {
                if (t === e) return A = !0, 0;
                var s = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return s ? s : (s = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & s || !x.sortDetached && e.compareDocumentPosition(t) === s ? t === a || t.ownerDocument === D && L(D, t) ? -1 : e === a || e.ownerDocument === D && L(D, e) ? 1 : E ? tt(E, t) - tt(E, e) : 0 : 4 & s ? -1 : 1)
            } : function(t, e) {
                if (t === e) return A = !0, 0;
                var s, r = 0,
                    n = t.parentNode,
                    o = e.parentNode,
                    c = [t],
                    l = [e];
                if (!n || !o) return t === a ? -1 : e === a ? 1 : n ? -1 : o ? 1 : E ? tt(E, t) - tt(E, e) : 0;
                if (n === o) return i(t, e);
                for (s = t; s = s.parentNode;) c.unshift(s);
                for (s = e; s = s.parentNode;) l.unshift(s);
                for (; c[r] === l[r];) r++;
                return r ? i(c[r], l[r]) : c[r] === D ? -1 : l[r] === D ? 1 : 0
            }, a) : O
        }, e.matches = function(t, s) {
            return e(t, null, null, s)
        }, e.matchesSelector = function(t, s) {
            if ((t.ownerDocument || t) !== O && N(t), s = s.replace(ht, "='$1']"), !(!x.matchesSelector || !F || z && z.test(s) || I && I.test(s))) try {
                var a = H.call(t, s);
                if (a || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return a
            } catch (r) {}
            return e(s, O, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== O && N(t), L(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== O && N(t);
            var s = w.attrHandle[e.toLowerCase()],
                a = s && Q.call(w.attrHandle, e.toLowerCase()) ? s(t, e, !F) : void 0;
            return void 0 !== a ? a : x.attributes || !F ? t.getAttribute(e) : (a = t.getAttributeNode(e)) && a.specified ? a.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, s = [],
                a = 0,
                r = 0;
            if (A = !x.detectDuplicates, E = !x.sortStable && t.slice(0), t.sort(V), A) {
                for (; e = t[r++];) e === t[r] && (a = s.push(r));
                for (; a--;) t.splice(s[a], 1)
            }
            return E = null, t
        }, k = e.getText = function(t) {
            var e, s = "",
                a = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) s += k(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[a++];) s += k(e);
            return s
        }, w = e.selectors = {
            cacheLength: 50,
            createPseudo: a,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(xt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, s = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : s && ut.test(s) && (e = S(s, !0)) && (e = s.indexOf(")", s.length - e) - s.length) && (t[0] = t[0].slice(0, e), t[2] = s.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xt, wt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = $[t + " "];
                    return e || (e = new RegExp("(^|" + st + ")" + t + "(" + st + "|$)")) && $(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, s, a) {
                    return function(r) {
                        var n = e.attr(r, t);
                        return null == n ? "!=" === s : s ? (n += "", "=" === s ? n === a : "!=" === s ? n !== a : "^=" === s ? a && 0 === n.indexOf(a) : "*=" === s ? a && n.indexOf(a) > -1 : "$=" === s ? a && n.slice(-a.length) === a : "~=" === s ? (" " + n.replace(ot, " ") + " ").indexOf(a) > -1 : "|=" === s ? n === a || n.slice(0, a.length + 1) === a + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, s, a, r) {
                    var n = "nth" !== t.slice(0, 3),
                        i = "last" !== t.slice(-4),
                        o = "of-type" === e;
                    return 1 === a && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, s, c) {
                        var l, m, h, u, d, f, p = n !== i ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            y = o && e.nodeName.toLowerCase(),
                            _ = !c && !o;
                        if (g) {
                            if (n) {
                                for (; p;) {
                                    for (h = e; h = h[p];)
                                        if (o ? h.nodeName.toLowerCase() === y : 1 === h.nodeType) return !1;
                                    f = p = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [i ? g.firstChild : g.lastChild], i && _) {
                                for (m = g[B] || (g[B] = {}), l = m[t] || [], d = l[0] === R && l[1], u = l[0] === R && l[2], h = d && g.childNodes[d]; h = ++d && h && h[p] || (u = d = 0) || f.pop();)
                                    if (1 === h.nodeType && ++u && h === e) {
                                        m[t] = [R, d, u];
                                        break
                                    }
                            } else if (_ && (l = (e[B] || (e[B] = {}))[t]) && l[0] === R) u = l[1];
                            else
                                for (;
                                    (h = ++d && h && h[p] || (u = d = 0) || f.pop()) && ((o ? h.nodeName.toLowerCase() !== y : 1 !== h.nodeType) || !++u || (_ && ((h[B] || (h[B] = {}))[t] = [R, u]), h !== e)););
                            return u -= r, u === a || u % a === 0 && u / a >= 0
                        }
                    }
                },
                PSEUDO: function(t, s) {
                    var r, n = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return n[B] ? n(s) : n.length > 1 ? (r = [t, t, "", s], w.setFilters.hasOwnProperty(t.toLowerCase()) ? a(function(t, e) {
                        for (var a, r = n(t, s), i = r.length; i--;) a = tt(t, r[i]), t[a] = !(e[a] = r[i])
                    }) : function(t) {
                        return n(t, 0, r)
                    }) : n
                }
            },
            pseudos: {
                not: a(function(t) {
                    var e = [],
                        s = [],
                        r = T(t.replace(ct, "$1"));
                    return r[B] ? a(function(t, e, s, a) {
                        for (var n, i = r(t, null, a, []), o = t.length; o--;)(n = i[o]) && (t[o] = !(e[o] = n))
                    }) : function(t, a, n) {
                        return e[0] = t, r(e, null, n, s), e[0] = null, !s.pop()
                    }
                }),
                has: a(function(t) {
                    return function(s) {
                        return e(t, s).length > 0
                    }
                }),
                contains: a(function(t) {
                    return t = t.replace(xt, wt),
                        function(e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                }),
                lang: a(function(t) {
                    return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, wt).toLowerCase(),
                        function(e) {
                            var s;
                            do
                                if (s = F ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return s = s.toLowerCase(), s === t || 0 === s.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var s = t.location && t.location.hash;
                    return s && s.slice(1) === e.id
                },
                root: function(t) {
                    return t === M
                },
                focus: function(t) {
                    return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !w.pseudos.empty(t)
                },
                header: function(t) {
                    return gt.test(t.nodeName)
                },
                input: function(t) {
                    return pt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(t, e) {
                    return [e - 1]
                }),
                eq: l(function(t, e, s) {
                    return [0 > s ? s + e : s]
                }),
                even: l(function(t, e) {
                    for (var s = 0; e > s; s += 2) t.push(s);
                    return t
                }),
                odd: l(function(t, e) {
                    for (var s = 1; e > s; s += 2) t.push(s);
                    return t
                }),
                lt: l(function(t, e, s) {
                    for (var a = 0 > s ? s + e : s; --a >= 0;) t.push(a);
                    return t
                }),
                gt: l(function(t, e, s) {
                    for (var a = 0 > s ? s + e : s; ++a < e;) t.push(a);
                    return t
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[b] = o(b);
        for (b in {
                submit: !0,
                reset: !0
            }) w.pseudos[b] = c(b);
        return h.prototype = w.filters = w.pseudos, w.setFilters = new h, S = e.tokenize = function(t, s) {
            var a, r, n, i, o, c, l, m = U[t + " "];
            if (m) return s ? 0 : m.slice(0);
            for (o = t, c = [], l = w.preFilter; o;) {
                (!a || (r = lt.exec(o))) && (r && (o = o.slice(r[0].length) || o), c.push(n = [])), a = !1, (r = mt.exec(o)) && (a = r.shift(), n.push({
                    value: a,
                    type: r[0].replace(ct, " ")
                }), o = o.slice(a.length));
                for (i in w.filter) !(r = ft[i].exec(o)) || l[i] && !(r = l[i](r)) || (a = r.shift(),
                    n.push({
                        value: a,
                        type: i,
                        matches: r
                    }), o = o.slice(a.length));
                if (!a) break
            }
            return s ? o.length : o ? e.error(t) : U(t, c).slice(0)
        }, T = e.compile = function(t, e) {
            var s, a = [],
                r = [],
                n = W[t + " "];
            if (!n) {
                for (e || (e = S(t)), s = e.length; s--;) n = _(e[s]), n[B] ? a.push(n) : r.push(n);
                n = W(t, v(r, a)), n.selector = t
            }
            return n
        }, P = e.select = function(t, e, s, a) {
            var r, n, i, o, c, l = "function" == typeof t && t,
                h = !a && S(t = l.selector || t);
            if (s = s || [], 1 === h.length) {
                if (n = h[0] = h[0].slice(0), n.length > 2 && "ID" === (i = n[0]).type && x.getById && 9 === e.nodeType && F && w.relative[n[1].type]) {
                    if (e = (w.find.ID(i.matches[0].replace(xt, wt), e) || [])[0], !e) return s;
                    l && (e = e.parentNode), t = t.slice(n.shift().value.length)
                }
                for (r = ft.needsContext.test(t) ? 0 : n.length; r-- && (i = n[r], !w.relative[o = i.type]);)
                    if ((c = w.find[o]) && (a = c(i.matches[0].replace(xt, wt), vt.test(n[0].type) && m(e.parentNode) || e))) {
                        if (n.splice(r, 1), t = a.length && u(n), !t) return Y.apply(s, a), s;
                        break
                    }
            }
            return (l || T(t, h))(a, e, !F, s, vt.test(t) && m(e.parentNode) || e), s
        }, x.sortStable = B.split("").sort(V).join("") === B, x.detectDuplicates = !!A, N(), x.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(O.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || n("type|href|height|width", function(t, e, s) {
            return s ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || n("value", function(t, e, s) {
            return s || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || n(et, function(t, e, s) {
            var a;
            return s ? void 0 : t[e] === !0 ? e.toLowerCase() : (a = t.getAttributeNode(e)) && a.specified ? a.value : null
        }), e
    }(t);
    rt.find = lt, rt.expr = lt.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = lt.uniqueSort, rt.text = lt.getText, rt.isXMLDoc = lt.isXML, rt.contains = lt.contains;
    var mt = rt.expr.match.needsContext,
        ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ut = /^.[^:#\[\.,]*$/;
    rt.filter = function(t, e, s) {
        var a = e[0];
        return s && (t = ":not(" + t + ")"), 1 === e.length && 1 === a.nodeType ? rt.find.matchesSelector(a, t) ? [a] : [] : rt.find.matches(t, rt.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, rt.fn.extend({
        find: function(t) {
            var e, s = [],
                a = this,
                r = a.length;
            if ("string" != typeof t) return this.pushStack(rt(t).filter(function() {
                for (e = 0; r > e; e++)
                    if (rt.contains(a[e], this)) return !0
            }));
            for (e = 0; r > e; e++) rt.find(t, a[e], s);
            return s = this.pushStack(r > 1 ? rt.unique(s) : s), s.selector = this.selector ? this.selector + " " + t : t, s
        },
        filter: function(t) {
            return this.pushStack(a(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(a(this, t || [], !0))
        },
        is: function(t) {
            return !!a(this, "string" == typeof t && mt.test(t) ? rt(t) : t || [], !1).length
        }
    });
    var dt, ft = t.document,
        pt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        gt = rt.fn.init = function(t, e) {
            var s, a;
            if (!t) return this;
            if ("string" == typeof t) {
                if (s = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : pt.exec(t), !s || !s[1] && e) return !e || e.jquery ? (e || dt).find(t) : this.constructor(e).find(t);
                if (s[1]) {
                    if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(s[1], e && e.nodeType ? e.ownerDocument || e : ft, !0)), ht.test(s[1]) && rt.isPlainObject(e))
                        for (s in e) rt.isFunction(this[s]) ? this[s](e[s]) : this.attr(s, e[s]);
                    return this
                }
                if (a = ft.getElementById(s[2]), a && a.parentNode) {
                    if (a.id !== s[2]) return dt.find(t);
                    this.length = 1, this[0] = a
                }
                return this.context = ft, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? "undefined" != typeof dt.ready ? dt.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), rt.makeArray(t, this))
        };
    gt.prototype = rt.fn, dt = rt(ft);
    var yt = /^(?:parents|prev(?:Until|All))/,
        _t = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    rt.extend({
        dir: function(t, e, s) {
            for (var a = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === s || 1 !== r.nodeType || !rt(r).is(s));) 1 === r.nodeType && a.push(r), r = r[e];
            return a
        },
        sibling: function(t, e) {
            for (var s = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && s.push(t);
            return s
        }
    }), rt.fn.extend({
        has: function(t) {
            var e, s = rt(t, this),
                a = s.length;
            return this.filter(function() {
                for (e = 0; a > e; e++)
                    if (rt.contains(this, s[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var s, a = 0, r = this.length, n = [], i = mt.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; r > a; a++)
                for (s = this[a]; s && s !== e; s = s.parentNode)
                    if (s.nodeType < 11 && (i ? i.index(s) > -1 : 1 === s.nodeType && rt.find.matchesSelector(s, t))) {
                        n.push(s);
                        break
                    }
            return this.pushStack(n.length > 1 ? rt.unique(n) : n)
        },
        index: function(t) {
            return t ? "string" == typeof t ? rt.inArray(this[0], rt(t)) : rt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(rt.unique(rt.merge(this.get(), rt(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), rt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return rt.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, s) {
            return rt.dir(t, "parentNode", s)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return rt.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return rt.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, s) {
            return rt.dir(t, "nextSibling", s)
        },
        prevUntil: function(t, e, s) {
            return rt.dir(t, "previousSibling", s)
        },
        siblings: function(t) {
            return rt.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return rt.sibling(t.firstChild)
        },
        contents: function(t) {
            return rt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : rt.merge([], t.childNodes)
        }
    }, function(t, e) {
        rt.fn[t] = function(s, a) {
            var r = rt.map(this, e, s);
            return "Until" !== t.slice(-5) && (a = s), a && "string" == typeof a && (r = rt.filter(a, r)), this.length > 1 && (_t[t] || (r = rt.unique(r)), yt.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var vt = /\S+/g,
        bt = {};
    rt.Callbacks = function(t) {
        t = "string" == typeof t ? bt[t] || n(t) : rt.extend({}, t);
        var e, s, a, r, i, o, c = [],
            l = !t.once && [],
            m = function(n) {
                for (s = t.memory && n, a = !0, i = o || 0, o = 0, r = c.length, e = !0; c && r > i; i++)
                    if (c[i].apply(n[0], n[1]) === !1 && t.stopOnFalse) {
                        s = !1;
                        break
                    }
                e = !1, c && (l ? l.length && m(l.shift()) : s ? c = [] : h.disable())
            },
            h = {
                add: function() {
                    if (c) {
                        var a = c.length;
                        ! function n(e) {
                            rt.each(e, function(e, s) {
                                var a = rt.type(s);
                                "function" === a ? t.unique && h.has(s) || c.push(s) : s && s.length && "string" !== a && n(s)
                            })
                        }(arguments), e ? r = c.length : s && (o = a, m(s))
                    }
                    return this
                },
                remove: function() {
                    return c && rt.each(arguments, function(t, s) {
                        for (var a;
                            (a = rt.inArray(s, c, a)) > -1;) c.splice(a, 1), e && (r >= a && r--, i >= a && i--)
                    }), this
                },
                has: function(t) {
                    return t ? rt.inArray(t, c) > -1 : !(!c || !c.length)
                },
                empty: function() {
                    return c = [], r = 0, this
                },
                disable: function() {
                    return c = l = s = void 0, this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    return l = void 0, s || h.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(t, s) {
                    return !c || a && !l || (s = s || [], s = [t, s.slice ? s.slice() : s], e ? l.push(s) : m(s)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return h
    }, rt.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", rt.Callbacks("memory")]
                ],
                s = "pending",
                a = {
                    state: function() {
                        return s
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return rt.Deferred(function(s) {
                            rt.each(e, function(e, n) {
                                var i = rt.isFunction(t[e]) && t[e];
                                r[n[1]](function() {
                                    var t = i && i.apply(this, arguments);
                                    t && rt.isFunction(t.promise) ? t.promise().done(s.resolve).fail(s.reject).progress(s.notify) : s[n[0] + "With"](this === a ? s.promise() : this, i ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? rt.extend(t, a) : a
                    }
                },
                r = {};
            return a.pipe = a.then, rt.each(e, function(t, n) {
                var i = n[2],
                    o = n[3];
                a[n[1]] = i.add, o && i.add(function() {
                    s = o
                }, e[1 ^ t][2].disable, e[2][2].lock), r[n[0]] = function() {
                    return r[n[0] + "With"](this === r ? a : this, arguments), this
                }, r[n[0] + "With"] = i.fireWith
            }), a.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, s, a, r = 0,
                n = X.call(arguments),
                i = n.length,
                o = 1 !== i || t && rt.isFunction(t.promise) ? i : 0,
                c = 1 === o ? t : rt.Deferred(),
                l = function(t, s, a) {
                    return function(r) {
                        s[t] = this, a[t] = arguments.length > 1 ? X.call(arguments) : r, a === e ? c.notifyWith(s, a) : --o || c.resolveWith(s, a)
                    }
                };
            if (i > 1)
                for (e = new Array(i), s = new Array(i), a = new Array(i); i > r; r++) n[r] && rt.isFunction(n[r].promise) ? n[r].promise().done(l(r, a, n)).fail(c.reject).progress(l(r, s, e)) : --o;
            return o || c.resolveWith(a, n), c.promise()
        }
    });
    var xt;
    rt.fn.ready = function(t) {
        return rt.ready.promise().done(t), this
    }, rt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? rt.readyWait++ : rt.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--rt.readyWait : !rt.isReady) {
                if (!ft.body) return setTimeout(rt.ready);
                rt.isReady = !0, t !== !0 && --rt.readyWait > 0 || (xt.resolveWith(ft, [rt]), rt.fn.triggerHandler && (rt(ft).triggerHandler("ready"), rt(ft).off("ready")))
            }
        }
    }), rt.ready.promise = function(e) {
        if (!xt)
            if (xt = rt.Deferred(), "complete" === ft.readyState) setTimeout(rt.ready);
            else if (ft.addEventListener) ft.addEventListener("DOMContentLoaded", o, !1), t.addEventListener("load", o, !1);
        else {
            ft.attachEvent("onreadystatechange", o), t.attachEvent("onload", o);
            var s = !1;
            try {
                s = null == t.frameElement && ft.documentElement
            } catch (a) {}
            s && s.doScroll && ! function r() {
                if (!rt.isReady) {
                    try {
                        s.doScroll("left")
                    } catch (t) {
                        return setTimeout(r, 50)
                    }
                    i(), rt.ready()
                }
            }()
        }
        return xt.promise(e)
    };
    var wt, kt = "undefined";
    for (wt in rt(st)) break;
    st.ownLast = "0" !== wt, st.inlineBlockNeedsLayout = !1, rt(function() {
            var t, e, s, a;
            s = ft.getElementsByTagName("body")[0], s && s.style && (e = ft.createElement("div"), a = ft.createElement("div"), a.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", s.appendChild(a).appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", st.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (s.style.zoom = 1)), s.removeChild(a))
        }),
        function() {
            var t = ft.createElement("div");
            if (null == st.deleteExpando) {
                st.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    st.deleteExpando = !1
                }
            }
            t = null
        }(), rt.acceptData = function(t) {
            var e = rt.noData[(t.nodeName + " ").toLowerCase()],
                s = +t.nodeType || 1;
            return 1 !== s && 9 !== s ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
    var Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        St = /([A-Z])/g;
    rt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? rt.cache[t[rt.expando]] : t[rt.expando], !!t && !l(t)
        },
        data: function(t, e, s) {
            return m(t, e, s)
        },
        removeData: function(t, e) {
            return h(t, e)
        },
        _data: function(t, e, s) {
            return m(t, e, s, !0)
        },
        _removeData: function(t, e) {
            return h(t, e, !0)
        }
    }), rt.fn.extend({
        data: function(t, e) {
            var s, a, r, n = this[0],
                i = n && n.attributes;
            if (void 0 === t) {
                if (this.length && (r = rt.data(n), 1 === n.nodeType && !rt._data(n, "parsedAttrs"))) {
                    for (s = i.length; s--;) i[s] && (a = i[s].name, 0 === a.indexOf("data-") && (a = rt.camelCase(a.slice(5)), c(n, a, r[a])));
                    rt._data(n, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                rt.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                rt.data(this, t, e)
            }) : n ? c(n, t, rt.data(n, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                rt.removeData(this, t)
            })
        }
    }), rt.extend({
        queue: function(t, e, s) {
            var a;
            return t ? (e = (e || "fx") + "queue", a = rt._data(t, e), s && (!a || rt.isArray(s) ? a = rt._data(t, e, rt.makeArray(s)) : a.push(s)), a || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var s = rt.queue(t, e),
                a = s.length,
                r = s.shift(),
                n = rt._queueHooks(t, e),
                i = function() {
                    rt.dequeue(t, e)
                };
            "inprogress" === r && (r = s.shift(), a--), r && ("fx" === e && s.unshift("inprogress"), delete n.stop, r.call(t, i, n)), !a && n && n.empty.fire()
        },
        _queueHooks: function(t, e) {
            var s = e + "queueHooks";
            return rt._data(t, s) || rt._data(t, s, {
                empty: rt.Callbacks("once memory").add(function() {
                    rt._removeData(t, e + "queue"), rt._removeData(t, s)
                })
            })
        }
    }), rt.fn.extend({
        queue: function(t, e) {
            var s = 2;
            return "string" != typeof t && (e = t, t = "fx", s--), arguments.length < s ? rt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var s = rt.queue(this, t, e);
                rt._queueHooks(this, t), "fx" === t && "inprogress" !== s[0] && rt.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                rt.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var s, a = 1,
                r = rt.Deferred(),
                n = this,
                i = this.length,
                o = function() {
                    --a || r.resolveWith(n, [n])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; i--;) s = rt._data(n[i], t + "queueHooks"), s && s.empty && (a++, s.empty.add(o));
            return o(), r.promise(e)
        }
    });
    var Tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Pt = ["Top", "Right", "Bottom", "Left"],
        jt = function(t, e) {
            return t = e || t, "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t)
        },
        Et = rt.access = function(t, e, s, a, r, n, i) {
            var o = 0,
                c = t.length,
                l = null == s;
            if ("object" === rt.type(s)) {
                r = !0;
                for (o in s) rt.access(t, e, o, s[o], !0, n, i)
            } else if (void 0 !== a && (r = !0, rt.isFunction(a) || (i = !0), l && (i ? (e.call(t, a), e = null) : (l = e, e = function(t, e, s) {
                    return l.call(rt(t), s)
                })), e))
                for (; c > o; o++) e(t[o], s, i ? a : a.call(t[o], o, e(t[o], s)));
            return r ? t : l ? e.call(t) : c ? e(t[0], s) : n
        },
        At = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = ft.createElement("input"),
            e = ft.createElement("div"),
            s = ft.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", st.leadingWhitespace = 3 === e.firstChild.nodeType, st.tbody = !e.getElementsByTagName("tbody").length, st.htmlSerialize = !!e.getElementsByTagName("link").length, st.html5Clone = "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, s.appendChild(t), st.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", st.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, s.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", st.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, st.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                st.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == st.deleteExpando) {
            st.deleteExpando = !0;
            try {
                delete e.test
            } catch (a) {
                st.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e, s, a = ft.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) s = "on" + e, (st[e + "Bubbles"] = s in t) || (a.setAttribute(s, "t"), st[e + "Bubbles"] = a.attributes[s].expando === !1);
        a = null
    }();
    var Nt = /^(?:input|select|textarea)$/i,
        Ot = /^key/,
        Mt = /^(?:mouse|pointer|contextmenu)|click/,
        Ft = /^(?:focusinfocus|focusoutblur)$/,
        It = /^([^.]*)(?:\.(.+)|)$/;
    rt.event = {
        global: {},
        add: function(t, e, s, a, r) {
            var n, i, o, c, l, m, h, u, d, f, p, g = rt._data(t);
            if (g) {
                for (s.handler && (c = s, s = c.handler, r = c.selector), s.guid || (s.guid = rt.guid++), (i = g.events) || (i = g.events = {}), (m = g.handle) || (m = g.handle = function(t) {
                        return typeof rt === kt || t && rt.event.triggered === t.type ? void 0 : rt.event.dispatch.apply(m.elem, arguments)
                    }, m.elem = t), e = (e || "").match(vt) || [""], o = e.length; o--;) n = It.exec(e[o]) || [], d = p = n[1], f = (n[2] || "").split(".").sort(), d && (l = rt.event.special[d] || {}, d = (r ? l.delegateType : l.bindType) || d, l = rt.event.special[d] || {}, h = rt.extend({
                    type: d,
                    origType: p,
                    data: a,
                    handler: s,
                    guid: s.guid,
                    selector: r,
                    needsContext: r && rt.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, c), (u = i[d]) || (u = i[d] = [], u.delegateCount = 0, l.setup && l.setup.call(t, a, f, m) !== !1 || (t.addEventListener ? t.addEventListener(d, m, !1) : t.attachEvent && t.attachEvent("on" + d, m))), l.add && (l.add.call(t, h), h.handler.guid || (h.handler.guid = s.guid)), r ? u.splice(u.delegateCount++, 0, h) : u.push(h), rt.event.global[d] = !0);
                t = null
            }
        },
        remove: function(t, e, s, a, r) {
            var n, i, o, c, l, m, h, u, d, f, p, g = rt.hasData(t) && rt._data(t);
            if (g && (m = g.events)) {
                for (e = (e || "").match(vt) || [""], l = e.length; l--;)
                    if (o = It.exec(e[l]) || [], d = p = o[1], f = (o[2] || "").split(".").sort(), d) {
                        for (h = rt.event.special[d] || {}, d = (a ? h.delegateType : h.bindType) || d, u = m[d] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = n = u.length; n--;) i = u[n], !r && p !== i.origType || s && s.guid !== i.guid || o && !o.test(i.namespace) || a && a !== i.selector && ("**" !== a || !i.selector) || (u.splice(n, 1), i.selector && u.delegateCount--, h.remove && h.remove.call(t, i));
                        c && !u.length && (h.teardown && h.teardown.call(t, f, g.handle) !== !1 || rt.removeEvent(t, d, g.handle), delete m[d])
                    } else
                        for (d in m) rt.event.remove(t, d + e[l], s, a, !0);
                rt.isEmptyObject(m) && (delete g.handle, rt._removeData(t, "events"))
            }
        },
        trigger: function(e, s, a, r) {
            var n, i, o, c, l, m, h, u = [a || ft],
                d = et.call(e, "type") ? e.type : e,
                f = et.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = m = a = a || ft, 3 !== a.nodeType && 8 !== a.nodeType && !Ft.test(d + rt.event.triggered) && (d.indexOf(".") >= 0 && (f = d.split("."), d = f.shift(), f.sort()), i = d.indexOf(":") < 0 && "on" + d, e = e[rt.expando] ? e : new rt.Event(d, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = a), s = null == s ? [e] : rt.makeArray(s, [e]), l = rt.event.special[d] || {}, r || !l.trigger || l.trigger.apply(a, s) !== !1)) {
                if (!r && !l.noBubble && !rt.isWindow(a)) {
                    for (c = l.delegateType || d, Ft.test(c + d) || (o = o.parentNode); o; o = o.parentNode) u.push(o), m = o;
                    m === (a.ownerDocument || ft) && u.push(m.defaultView || m.parentWindow || t)
                }
                for (h = 0;
                    (o = u[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? c : l.bindType || d, n = (rt._data(o, "events") || {})[e.type] && rt._data(o, "handle"), n && n.apply(o, s), n = i && o[i], n && n.apply && rt.acceptData(o) && (e.result = n.apply(o, s), e.result === !1 && e.preventDefault());
                if (e.type = d, !r && !e.isDefaultPrevented() && (!l._default || l._default.apply(u.pop(), s) === !1) && rt.acceptData(a) && i && a[d] && !rt.isWindow(a)) {
                    m = a[i], m && (a[i] = null), rt.event.triggered = d;
                    try {
                        a[d]()
                    } catch (p) {}
                    rt.event.triggered = void 0, m && (a[i] = m)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = rt.event.fix(t);
            var e, s, a, r, n, i = [],
                o = X.call(arguments),
                c = (rt._data(this, "events") || {})[t.type] || [],
                l = rt.event.special[t.type] || {};
            if (o[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
                for (i = rt.event.handlers.call(this, t, c), e = 0;
                    (r = i[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (a = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(a.namespace)) && (t.handleObj = a, t.data = a.data, s = ((rt.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, o), void 0 !== s && (t.result = s) === !1 && (t.preventDefault(), t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var s, a, r, n, i = [],
                o = e.delegateCount,
                c = t.target;
            if (o && c.nodeType && (!t.button || "click" !== t.type))
                for (; c != this; c = c.parentNode || this)
                    if (1 === c.nodeType && (c.disabled !== !0 || "click" !== t.type)) {
                        for (r = [], n = 0; o > n; n++) a = e[n], s = a.selector + " ", void 0 === r[s] && (r[s] = a.needsContext ? rt(s, this).index(c) >= 0 : rt.find(s, this, null, [c]).length), r[s] && r.push(a);
                        r.length && i.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return o < e.length && i.push({
                elem: this,
                handlers: e.slice(o)
            }), i
        },
        fix: function(t) {
            if (t[rt.expando]) return t;
            var e, s, a, r = t.type,
                n = t,
                i = this.fixHooks[r];
            for (i || (this.fixHooks[r] = i = Mt.test(r) ? this.mouseHooks : Ot.test(r) ? this.keyHooks : {}), a = i.props ? this.props.concat(i.props) : this.props, t = new rt.Event(n), e = a.length; e--;) s = a[e], t[s] = n[s];
            return t.target || (t.target = n.srcElement || ft), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, i.filter ? i.filter(t, n) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var s, a, r, n = e.button,
                    i = e.fromElement;
                return null == t.pageX && null != e.clientX && (a = t.target.ownerDocument || ft, r = a.documentElement, s = a.body, t.pageX = e.clientX + (r && r.scrollLeft || s && s.scrollLeft || 0) - (r && r.clientLeft || s && s.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || s && s.scrollTop || 0) - (r && r.clientTop || s && s.clientTop || 0)), !t.relatedTarget && i && (t.relatedTarget = i === t.target ? e.toElement : i), t.which || void 0 === n || (t.which = 1 & n ? 1 : 2 & n ? 3 : 4 & n ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return rt.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, s, a) {
            var r = rt.extend(new rt.Event, s, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            a ? rt.event.trigger(r, null, e) : rt.event.dispatch.call(e, r), r.isDefaultPrevented() && s.preventDefault()
        }
    }, rt.removeEvent = ft.removeEventListener ? function(t, e, s) {
        t.removeEventListener && t.removeEventListener(e, s, !1)
    } : function(t, e, s) {
        var a = "on" + e;
        t.detachEvent && (typeof t[a] === kt && (t[a] = null), t.detachEvent(a, s))
    }, rt.Event = function(t, e) {
        return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? u : d) : this.type = t, e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(t, e)
    }, rt.Event.prototype = {
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = u, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = u, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = u, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, rt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        rt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var s, a = this,
                    r = t.relatedTarget,
                    n = t.handleObj;
                return (!r || r !== a && !rt.contains(a, r)) && (t.type = n.origType, s = n.handler.apply(this, arguments), t.type = e), s
            }
        }
    }), st.submitBubbles || (rt.event.special.submit = {
        setup: function() {
            return rt.nodeName(this, "form") ? !1 : void rt.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    s = rt.nodeName(e, "input") || rt.nodeName(e, "button") ? e.form : void 0;
                s && !rt._data(s, "submitBubbles") && (rt.event.add(s, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), rt._data(s, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && rt.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return rt.nodeName(this, "form") ? !1 : void rt.event.remove(this, "._submit")
        }
    }), st.changeBubbles || (rt.event.special.change = {
        setup: function() {
            return Nt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), rt.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, t, !0)
            })), !1) : void rt.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Nt.test(e.nodeName) && !rt._data(e, "changeBubbles") && (rt.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || rt.event.simulate("change", this.parentNode, t, !0)
                }), rt._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return rt.event.remove(this, "._change"), !Nt.test(this.nodeName)
        }
    }), st.focusinBubbles || rt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var s = function(t) {
            rt.event.simulate(e, t.target, rt.event.fix(t), !0)
        };
        rt.event.special[e] = {
            setup: function() {
                var a = this.ownerDocument || this,
                    r = rt._data(a, e);
                r || a.addEventListener(t, s, !0), rt._data(a, e, (r || 0) + 1)
            },
            teardown: function() {
                var a = this.ownerDocument || this,
                    r = rt._data(a, e) - 1;
                r ? rt._data(a, e, r) : (a.removeEventListener(t, s, !0), rt._removeData(a, e))
            }
        }
    }), rt.fn.extend({
        on: function(t, e, s, a, r) {
            var n, i;
            if ("object" == typeof t) {
                "string" != typeof e && (s = s || e, e = void 0);
                for (n in t) this.on(n, e, s, t[n], r);
                return this
            }
            if (null == s && null == a ? (a = e, s = e = void 0) : null == a && ("string" == typeof e ? (a = s, s = void 0) : (a = s, s = e, e = void 0)), a === !1) a = d;
            else if (!a) return this;
            return 1 === r && (i = a, a = function(t) {
                return rt().off(t), i.apply(this, arguments)
            }, a.guid = i.guid || (i.guid = rt.guid++)), this.each(function() {
                rt.event.add(this, t, a, s, e)
            })
        },
        one: function(t, e, s, a) {
            return this.on(t, e, s, a, 1)
        },
        off: function(t, e, s) {
            var a, r;
            if (t && t.preventDefault && t.handleObj) return a = t.handleObj, rt(t.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (s = e, e = void 0), s === !1 && (s = d), this.each(function() {
                rt.event.remove(this, t, s, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                rt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var s = this[0];
            return s ? rt.event.trigger(t, e, s, !0) : void 0
        }
    });
    var zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ht = / jQuery\d+="(?:null|\d+)"/g,
        Lt = new RegExp("<(?:" + zt + ")[\\s/>]", "i"),
        Bt = /^\s+/,
        Dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Rt = /<([\w:]+)/,
        qt = /<tbody/i,
        $t = /<|&#?\w+;/,
        Ut = /<(?:script|style|link)/i,
        Wt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Vt = /^$|\/(?:java|ecma)script/i,
        Gt = /^true\/(.*)/,
        Qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Xt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: st.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Jt = p(ft),
        Kt = Jt.appendChild(ft.createElement("div"));
    Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, Xt.th = Xt.td, rt.extend({
        clone: function(t, e, s) {
            var a, r, n, i, o, c = rt.contains(t.ownerDocument, t);
            if (st.html5Clone || rt.isXMLDoc(t) || !Lt.test("<" + t.nodeName + ">") ? n = t.cloneNode(!0) : (Kt.innerHTML = t.outerHTML, Kt.removeChild(n = Kt.firstChild)), !(st.noCloneEvent && st.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t)))
                for (a = g(n), o = g(t), i = 0; null != (r = o[i]); ++i) a[i] && k(r, a[i]);
            if (e)
                if (s)
                    for (o = o || g(t), a = a || g(n), i = 0; null != (r = o[i]); i++) w(r, a[i]);
                else w(t, n);
            return a = g(n, "script"), a.length > 0 && x(a, !c && g(t, "script")), a = o = r = null, n
        },
        buildFragment: function(t, e, s, a) {
            for (var r, n, i, o, c, l, m, h = t.length, u = p(e), d = [], f = 0; h > f; f++)
                if (n = t[f], n || 0 === n)
                    if ("object" === rt.type(n)) rt.merge(d, n.nodeType ? [n] : n);
                    else if ($t.test(n)) {
                for (o = o || u.appendChild(e.createElement("div")), c = (Rt.exec(n) || ["", ""])[1].toLowerCase(), m = Xt[c] || Xt._default, o.innerHTML = m[1] + n.replace(Dt, "<$1></$2>") + m[2], r = m[0]; r--;) o = o.lastChild;
                if (!st.leadingWhitespace && Bt.test(n) && d.push(e.createTextNode(Bt.exec(n)[0])), !st.tbody)
                    for (n = "table" !== c || qt.test(n) ? "<table>" !== m[1] || qt.test(n) ? 0 : o : o.firstChild, r = n && n.childNodes.length; r--;) rt.nodeName(l = n.childNodes[r], "tbody") && !l.childNodes.length && n.removeChild(l);
                for (rt.merge(d, o.childNodes), o.textContent = ""; o.firstChild;) o.removeChild(o.firstChild);
                o = u.lastChild
            } else d.push(e.createTextNode(n));
            for (o && u.removeChild(o), st.appendChecked || rt.grep(g(d, "input"), y), f = 0; n = d[f++];)
                if ((!a || -1 === rt.inArray(n, a)) && (i = rt.contains(n.ownerDocument, n), o = g(u.appendChild(n), "script"), i && x(o), s))
                    for (r = 0; n = o[r++];) Vt.test(n.type || "") && s.push(n);
            return o = null, u
        },
        cleanData: function(t, e) {
            for (var s, a, r, n, i = 0, o = rt.expando, c = rt.cache, l = st.deleteExpando, m = rt.event.special; null != (s = t[i]); i++)
                if ((e || rt.acceptData(s)) && (r = s[o], n = r && c[r])) {
                    if (n.events)
                        for (a in n.events) m[a] ? rt.event.remove(s, a) : rt.removeEvent(s, a, n.handle);
                    c[r] && (delete c[r], l ? delete s[o] : typeof s.removeAttribute !== kt ? s.removeAttribute(o) : s[o] = null, Q.push(r))
                }
        }
    }), rt.fn.extend({
        text: function(t) {
            return Et(this, function(t) {
                return void 0 === t ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = _(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = _(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var s, a = t ? rt.filter(t, this) : this, r = 0; null != (s = a[r]); r++) e || 1 !== s.nodeType || rt.cleanData(g(s)), s.parentNode && (e && rt.contains(s.ownerDocument, s) && x(g(s, "script")), s.parentNode.removeChild(s));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && rt.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && rt.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return rt.clone(this, t, e)
            })
        },
        html: function(t) {
            return Et(this, function(t) {
                var e = this[0] || {},
                    s = 0,
                    a = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Ht, "") : void 0;
                if (!("string" != typeof t || Ut.test(t) || !st.htmlSerialize && Lt.test(t) || !st.leadingWhitespace && Bt.test(t) || Xt[(Rt.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Dt, "<$1></$2>");
                    try {
                        for (; a > s; s++) e = this[s] || {}, 1 === e.nodeType && (rt.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, rt.cleanData(g(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = J.apply([], t);
            var s, a, r, n, i, o, c = 0,
                l = this.length,
                m = this,
                h = l - 1,
                u = t[0],
                d = rt.isFunction(u);
            if (d || l > 1 && "string" == typeof u && !st.checkClone && Wt.test(u)) return this.each(function(s) {
                var a = m.eq(s);
                d && (t[0] = u.call(this, s, a.html())), a.domManip(t, e)
            });
            if (l && (o = rt.buildFragment(t, this[0].ownerDocument, !1, this), s = o.firstChild, 1 === o.childNodes.length && (o = s), s)) {
                for (n = rt.map(g(o, "script"), v), r = n.length; l > c; c++) a = o, c !== h && (a = rt.clone(a, !0, !0), r && rt.merge(n, g(a, "script"))), e.call(this[c], a, c);
                if (r)
                    for (i = n[n.length - 1].ownerDocument, rt.map(n, b), c = 0; r > c; c++) a = n[c], Vt.test(a.type || "") && !rt._data(a, "globalEval") && rt.contains(i, a) && (a.src ? rt._evalUrl && rt._evalUrl(a.src) : rt.globalEval((a.text || a.textContent || a.innerHTML || "").replace(Qt, "")));
                o = s = null
            }
            return this
        }
    }), rt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        rt.fn[t] = function(t) {
            for (var s, a = 0, r = [], n = rt(t), i = n.length - 1; i >= a; a++) s = a === i ? this : this.clone(!0), rt(n[a])[e](s), K.apply(r, s.get());
            return this.pushStack(r)
        }
    });
    var Yt, Zt = {};
    ! function() {
        var t;
        st.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, s, a;
            return s = ft.getElementsByTagName("body")[0], s && s.style ? (e = ft.createElement("div"), a = ft.createElement("div"), a.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", s.appendChild(a).appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ft.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), s.removeChild(a), t) : void 0
        }
    }();
    var te, ee, se = /^margin/,
        ae = new RegExp("^(" + Tt + ")(?!px)[a-z%]+$", "i"),
        re = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (te = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
    }, ee = function(t, e, s) {
        var a, r, n, i, o = t.style;
        return s = s || te(t), i = s ? s.getPropertyValue(e) || s[e] : void 0, s && ("" !== i || rt.contains(t.ownerDocument, t) || (i = rt.style(t, e)), ae.test(i) && se.test(e) && (a = o.width, r = o.minWidth,
            n = o.maxWidth, o.minWidth = o.maxWidth = o.width = i, i = s.width, o.width = a, o.minWidth = r, o.maxWidth = n)), void 0 === i ? i : i + ""
    }) : ft.documentElement.currentStyle && (te = function(t) {
        return t.currentStyle
    }, ee = function(t, e, s) {
        var a, r, n, i, o = t.style;
        return s = s || te(t), i = s ? s[e] : void 0, null == i && o && o[e] && (i = o[e]), ae.test(i) && !re.test(e) && (a = o.left, r = t.runtimeStyle, n = r && r.left, n && (r.left = t.currentStyle.left), o.left = "fontSize" === e ? "1em" : i, i = o.pixelLeft + "px", o.left = a, n && (r.left = n)), void 0 === i ? i : i + "" || "auto"
    }), ! function() {
        function e() {
            var e, s, a, r;
            s = ft.getElementsByTagName("body")[0], s && s.style && (e = ft.createElement("div"), a = ft.createElement("div"), a.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", s.appendChild(a).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", n = i = !1, c = !0, t.getComputedStyle && (n = "1%" !== (t.getComputedStyle(e, null) || {}).top, i = "4px" === (t.getComputedStyle(e, null) || {
                width: "4px"
            }).width, r = e.appendChild(ft.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", c = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === r[0].offsetHeight, o && (r[0].style.display = "", r[1].style.display = "none", o = 0 === r[0].offsetHeight), s.removeChild(a))
        }
        var s, a, r, n, i, o, c;
        s = ft.createElement("div"), s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = s.getElementsByTagName("a")[0], (a = r && r.style) && (a.cssText = "float:left;opacity:.5", st.opacity = "0.5" === a.opacity, st.cssFloat = !!a.cssFloat, s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", st.clearCloneStyle = "content-box" === s.style.backgroundClip, st.boxSizing = "" === a.boxSizing || "" === a.MozBoxSizing || "" === a.WebkitBoxSizing, rt.extend(st, {
            reliableHiddenOffsets: function() {
                return null == o && e(), o
            },
            boxSizingReliable: function() {
                return null == i && e(), i
            },
            pixelPosition: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                return null == c && e(), c
            }
        }))
    }(), rt.swap = function(t, e, s, a) {
        var r, n, i = {};
        for (n in e) i[n] = t.style[n], t.style[n] = e[n];
        r = s.apply(t, a || []);
        for (n in e) t.style[n] = i[n];
        return r
    };
    var ne = /alpha\([^)]*\)/i,
        ie = /opacity\s*=\s*([^)]*)/,
        oe = /^(none|table(?!-c[ea]).+)/,
        ce = new RegExp("^(" + Tt + ")(.*)$", "i"),
        le = new RegExp("^([+-])=(" + Tt + ")", "i"),
        me = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        he = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ue = ["Webkit", "O", "Moz", "ms"];
    rt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var s = ee(t, "opacity");
                        return "" === s ? "1" : s
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": st.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, s, a) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, n, i, o = rt.camelCase(e),
                    c = t.style;
                if (e = rt.cssProps[o] || (rt.cssProps[o] = P(c, o)), i = rt.cssHooks[e] || rt.cssHooks[o], void 0 === s) return i && "get" in i && void 0 !== (r = i.get(t, !1, a)) ? r : c[e];
                if (n = typeof s, "string" === n && (r = le.exec(s)) && (s = (r[1] + 1) * r[2] + parseFloat(rt.css(t, e)), n = "number"), null != s && s === s && ("number" !== n || rt.cssNumber[o] || (s += "px"), st.clearCloneStyle || "" !== s || 0 !== e.indexOf("background") || (c[e] = "inherit"), !(i && "set" in i && void 0 === (s = i.set(t, s, a))))) try {
                    c[e] = s
                } catch (l) {}
            }
        },
        css: function(t, e, s, a) {
            var r, n, i, o = rt.camelCase(e);
            return e = rt.cssProps[o] || (rt.cssProps[o] = P(t.style, o)), i = rt.cssHooks[e] || rt.cssHooks[o], i && "get" in i && (n = i.get(t, !0, s)), void 0 === n && (n = ee(t, e, a)), "normal" === n && e in he && (n = he[e]), "" === s || s ? (r = parseFloat(n), s === !0 || rt.isNumeric(r) ? r || 0 : n) : n
        }
    }), rt.each(["height", "width"], function(t, e) {
        rt.cssHooks[e] = {
            get: function(t, s, a) {
                return s ? oe.test(rt.css(t, "display")) && 0 === t.offsetWidth ? rt.swap(t, me, function() {
                    return N(t, e, a)
                }) : N(t, e, a) : void 0
            },
            set: function(t, s, a) {
                var r = a && te(t);
                return E(t, s, a ? A(t, e, a, st.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), st.opacity || (rt.cssHooks.opacity = {
        get: function(t, e) {
            return ie.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var s = t.style,
                a = t.currentStyle,
                r = rt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                n = a && a.filter || s.filter || "";
            s.zoom = 1, (e >= 1 || "" === e) && "" === rt.trim(n.replace(ne, "")) && s.removeAttribute && (s.removeAttribute("filter"), "" === e || a && !a.filter) || (s.filter = ne.test(n) ? n.replace(ne, r) : n + " " + r)
        }
    }), rt.cssHooks.marginRight = T(st.reliableMarginRight, function(t, e) {
        return e ? rt.swap(t, {
            display: "inline-block"
        }, ee, [t, "marginRight"]) : void 0
    }), rt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        rt.cssHooks[t + e] = {
            expand: function(s) {
                for (var a = 0, r = {}, n = "string" == typeof s ? s.split(" ") : [s]; 4 > a; a++) r[t + Pt[a] + e] = n[a] || n[a - 2] || n[0];
                return r
            }
        }, se.test(t) || (rt.cssHooks[t + e].set = E)
    }), rt.fn.extend({
        css: function(t, e) {
            return Et(this, function(t, e, s) {
                var a, r, n = {},
                    i = 0;
                if (rt.isArray(e)) {
                    for (a = te(t), r = e.length; r > i; i++) n[e[i]] = rt.css(t, e[i], !1, a);
                    return n
                }
                return void 0 !== s ? rt.style(t, e, s) : rt.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return j(this, !0)
        },
        hide: function() {
            return j(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                jt(this) ? rt(this).show() : rt(this).hide()
            })
        }
    }), rt.Tween = O, O.prototype = {
        constructor: O,
        init: function(t, e, s, a, r, n) {
            this.elem = t, this.prop = s, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = a, this.unit = n || (rt.cssNumber[s] ? "" : "px")
        },
        cur: function() {
            var t = O.propHooks[this.prop];
            return t && t.get ? t.get(this) : O.propHooks._default.get(this)
        },
        run: function(t) {
            var e, s = O.propHooks[this.prop];
            return this.options.duration ? this.pos = e = rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), s && s.set ? s.set(this) : O.propHooks._default.set(this), this
        }
    }, O.prototype.init.prototype = O.prototype, O.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = rt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[rt.cssProps[t.prop]] || rt.cssHooks[t.prop]) ? rt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, rt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, rt.fx = O.prototype.init, rt.fx.step = {};
    var de, fe, pe = /^(?:toggle|show|hide)$/,
        ge = new RegExp("^(?:([+-])=|)(" + Tt + ")([a-z%]*)$", "i"),
        ye = /queueHooks$/,
        _e = [z],
        ve = {
            "*": [function(t, e) {
                var s = this.createTween(t, e),
                    a = s.cur(),
                    r = ge.exec(e),
                    n = r && r[3] || (rt.cssNumber[t] ? "" : "px"),
                    i = (rt.cssNumber[t] || "px" !== n && +a) && ge.exec(rt.css(s.elem, t)),
                    o = 1,
                    c = 20;
                if (i && i[3] !== n) {
                    n = n || i[3], r = r || [], i = +a || 1;
                    do o = o || ".5", i /= o, rt.style(s.elem, t, i + n); while (o !== (o = s.cur() / a) && 1 !== o && --c)
                }
                return r && (i = s.start = +i || +a || 0, s.unit = n, s.end = r[1] ? i + (r[1] + 1) * r[2] : +r[2]), s
            }]
        };
    rt.Animation = rt.extend(L, {
            tweener: function(t, e) {
                rt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var s, a = 0, r = t.length; r > a; a++) s = t[a], ve[s] = ve[s] || [], ve[s].unshift(e)
            },
            prefilter: function(t, e) {
                e ? _e.unshift(t) : _e.push(t)
            }
        }), rt.speed = function(t, e, s) {
            var a = t && "object" == typeof t ? rt.extend({}, t) : {
                complete: s || !s && e || rt.isFunction(t) && t,
                duration: t,
                easing: s && e || e && !rt.isFunction(e) && e
            };
            return a.duration = rt.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in rt.fx.speeds ? rt.fx.speeds[a.duration] : rt.fx.speeds._default, (null == a.queue || a.queue === !0) && (a.queue = "fx"), a.old = a.complete, a.complete = function() {
                rt.isFunction(a.old) && a.old.call(this), a.queue && rt.dequeue(this, a.queue)
            }, a
        }, rt.fn.extend({
            fadeTo: function(t, e, s, a) {
                return this.filter(jt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, s, a)
            },
            animate: function(t, e, s, a) {
                var r = rt.isEmptyObject(t),
                    n = rt.speed(e, s, a),
                    i = function() {
                        var e = L(this, rt.extend({}, t), n);
                        (r || rt._data(this, "finish")) && e.stop(!0)
                    };
                return i.finish = i, r || n.queue === !1 ? this.each(i) : this.queue(n.queue, i)
            },
            stop: function(t, e, s) {
                var a = function(t) {
                    var e = t.stop;
                    delete t.stop, e(s)
                };
                return "string" != typeof t && (s = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        n = rt.timers,
                        i = rt._data(this);
                    if (r) i[r] && i[r].stop && a(i[r]);
                    else
                        for (r in i) i[r] && i[r].stop && ye.test(r) && a(i[r]);
                    for (r = n.length; r--;) n[r].elem !== this || null != t && n[r].queue !== t || (n[r].anim.stop(s), e = !1, n.splice(r, 1));
                    (e || !s) && rt.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, s = rt._data(this),
                        a = s[t + "queue"],
                        r = s[t + "queueHooks"],
                        n = rt.timers,
                        i = a ? a.length : 0;
                    for (s.finish = !0, rt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = n.length; e--;) n[e].elem === this && n[e].queue === t && (n[e].anim.stop(!0), n.splice(e, 1));
                    for (e = 0; i > e; e++) a[e] && a[e].finish && a[e].finish.call(this);
                    delete s.finish
                })
            }
        }), rt.each(["toggle", "show", "hide"], function(t, e) {
            var s = rt.fn[e];
            rt.fn[e] = function(t, a, r) {
                return null == t || "boolean" == typeof t ? s.apply(this, arguments) : this.animate(F(e, !0), t, a, r)
            }
        }), rt.each({
            slideDown: F("show"),
            slideUp: F("hide"),
            slideToggle: F("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            rt.fn[t] = function(t, s, a) {
                return this.animate(e, t, s, a)
            }
        }), rt.timers = [], rt.fx.tick = function() {
            var t, e = rt.timers,
                s = 0;
            for (de = rt.now(); s < e.length; s++) t = e[s], t() || e[s] !== t || e.splice(s--, 1);
            e.length || rt.fx.stop(), de = void 0
        }, rt.fx.timer = function(t) {
            rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop()
        }, rt.fx.interval = 13, rt.fx.start = function() {
            fe || (fe = setInterval(rt.fx.tick, rt.fx.interval))
        }, rt.fx.stop = function() {
            clearInterval(fe), fe = null
        }, rt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, rt.fn.delay = function(t, e) {
            return t = rt.fx ? rt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, s) {
                var a = setTimeout(e, t);
                s.stop = function() {
                    clearTimeout(a)
                }
            })
        },
        function() {
            var t, e, s, a, r;
            e = ft.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], s = ft.createElement("select"), r = s.appendChild(ft.createElement("option")), t = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", st.getSetAttribute = "t" !== e.className, st.style = /top/.test(a.getAttribute("style")), st.hrefNormalized = "/a" === a.getAttribute("href"), st.checkOn = !!t.value, st.optSelected = r.selected, st.enctype = !!ft.createElement("form").enctype, s.disabled = !0, st.optDisabled = !r.disabled, t = ft.createElement("input"), t.setAttribute("value", ""), st.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), st.radioValue = "t" === t.value
        }();
    var be = /\r/g;
    rt.fn.extend({
        val: function(t) {
            var e, s, a, r = this[0];
            return arguments.length ? (a = rt.isFunction(t), this.each(function(s) {
                var r;
                1 === this.nodeType && (r = a ? t.call(this, s, rt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (s = e.get(r, "value")) ? s : (s = r.value, "string" == typeof s ? s.replace(be, "") : null == s ? "" : s)) : void 0
        }
    }), rt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = rt.find.attr(t, "value");
                    return null != e ? e : rt.trim(rt.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, s, a = t.options, r = t.selectedIndex, n = "select-one" === t.type || 0 > r, i = n ? null : [], o = n ? r + 1 : a.length, c = 0 > r ? o : n ? r : 0; o > c; c++)
                        if (s = a[c], !(!s.selected && c !== r || (st.optDisabled ? s.disabled : null !== s.getAttribute("disabled")) || s.parentNode.disabled && rt.nodeName(s.parentNode, "optgroup"))) {
                            if (e = rt(s).val(), n) return e;
                            i.push(e)
                        }
                    return i
                },
                set: function(t, e) {
                    for (var s, a, r = t.options, n = rt.makeArray(e), i = r.length; i--;)
                        if (a = r[i], rt.inArray(rt.valHooks.option.get(a), n) >= 0) try {
                            a.selected = s = !0
                        } catch (o) {
                            a.scrollHeight
                        } else a.selected = !1;
                    return s || (t.selectedIndex = -1), r
                }
            }
        }
    }), rt.each(["radio", "checkbox"], function() {
        rt.valHooks[this] = {
            set: function(t, e) {
                return rt.isArray(e) ? t.checked = rt.inArray(rt(t).val(), e) >= 0 : void 0
            }
        }, st.checkOn || (rt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var xe, we, ke = rt.expr.attrHandle,
        Ce = /^(?:checked|selected)$/i,
        Se = st.getSetAttribute,
        Te = st.input;
    rt.fn.extend({
        attr: function(t, e) {
            return Et(this, rt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                rt.removeAttr(this, t)
            })
        }
    }), rt.extend({
        attr: function(t, e, s) {
            var a, r, n = t.nodeType;
            return t && 3 !== n && 8 !== n && 2 !== n ? typeof t.getAttribute === kt ? rt.prop(t, e, s) : (1 === n && rt.isXMLDoc(t) || (e = e.toLowerCase(), a = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? we : xe)), void 0 === s ? a && "get" in a && null !== (r = a.get(t, e)) ? r : (r = rt.find.attr(t, e), null == r ? void 0 : r) : null !== s ? a && "set" in a && void 0 !== (r = a.set(t, s, e)) ? r : (t.setAttribute(e, s + ""), s) : void rt.removeAttr(t, e)) : void 0
        },
        removeAttr: function(t, e) {
            var s, a, r = 0,
                n = e && e.match(vt);
            if (n && 1 === t.nodeType)
                for (; s = n[r++];) a = rt.propFix[s] || s, rt.expr.match.bool.test(s) ? Te && Se || !Ce.test(s) ? t[a] = !1 : t[rt.camelCase("default-" + s)] = t[a] = !1 : rt.attr(t, s, ""), t.removeAttribute(Se ? s : a)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!st.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                        var s = t.value;
                        return t.setAttribute("type", e), s && (t.value = s), e
                    }
                }
            }
        }
    }), we = {
        set: function(t, e, s) {
            return e === !1 ? rt.removeAttr(t, s) : Te && Se || !Ce.test(s) ? t.setAttribute(!Se && rt.propFix[s] || s, s) : t[rt.camelCase("default-" + s)] = t[s] = !0, s
        }
    }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var s = ke[e] || rt.find.attr;
        ke[e] = Te && Se || !Ce.test(e) ? function(t, e, a) {
            var r, n;
            return a || (n = ke[e], ke[e] = r, r = null != s(t, e, a) ? e.toLowerCase() : null, ke[e] = n), r
        } : function(t, e, s) {
            return s ? void 0 : t[rt.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Te && Se || (rt.attrHooks.value = {
        set: function(t, e, s) {
            return rt.nodeName(t, "input") ? void(t.defaultValue = e) : xe && xe.set(t, e, s)
        }
    }), Se || (xe = {
        set: function(t, e, s) {
            var a = t.getAttributeNode(s);
            return a || t.setAttributeNode(a = t.ownerDocument.createAttribute(s)), a.value = e += "", "value" === s || e === t.getAttribute(s) ? e : void 0
        }
    }, ke.id = ke.name = ke.coords = function(t, e, s) {
        var a;
        return s ? void 0 : (a = t.getAttributeNode(e)) && "" !== a.value ? a.value : null
    }, rt.valHooks.button = {
        get: function(t, e) {
            var s = t.getAttributeNode(e);
            return s && s.specified ? s.value : void 0
        },
        set: xe.set
    }, rt.attrHooks.contenteditable = {
        set: function(t, e, s) {
            xe.set(t, "" === e ? !1 : e, s)
        }
    }, rt.each(["width", "height"], function(t, e) {
        rt.attrHooks[e] = {
            set: function(t, s) {
                return "" === s ? (t.setAttribute(e, "auto"), s) : void 0
            }
        }
    })), st.style || (rt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Pe = /^(?:input|select|textarea|button|object)$/i,
        je = /^(?:a|area)$/i;
    rt.fn.extend({
        prop: function(t, e) {
            return Et(this, rt.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = rt.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), rt.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, s) {
            var a, r, n, i = t.nodeType;
            return t && 3 !== i && 8 !== i && 2 !== i ? (n = 1 !== i || !rt.isXMLDoc(t), n && (e = rt.propFix[e] || e, r = rt.propHooks[e]), void 0 !== s ? r && "set" in r && void 0 !== (a = r.set(t, s, e)) ? a : t[e] = s : r && "get" in r && null !== (a = r.get(t, e)) ? a : t[e]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = rt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Pe.test(t.nodeName) || je.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), st.hrefNormalized || rt.each(["href", "src"], function(t, e) {
        rt.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), st.optSelected || (rt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        rt.propFix[this.toLowerCase()] = this
    }), st.enctype || (rt.propFix.enctype = "encoding");
    var Ee = /[\t\r\n\f]/g;
    rt.fn.extend({
        addClass: function(t) {
            var e, s, a, r, n, i, o = 0,
                c = this.length,
                l = "string" == typeof t && t;
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(vt) || []; c > o; o++)
                    if (s = this[o], a = 1 === s.nodeType && (s.className ? (" " + s.className + " ").replace(Ee, " ") : " ")) {
                        for (n = 0; r = e[n++];) a.indexOf(" " + r + " ") < 0 && (a += r + " ");
                        i = rt.trim(a), s.className !== i && (s.className = i)
                    }
            return this
        },
        removeClass: function(t) {
            var e, s, a, r, n, i, o = 0,
                c = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(vt) || []; c > o; o++)
                    if (s = this[o], a = 1 === s.nodeType && (s.className ? (" " + s.className + " ").replace(Ee, " ") : "")) {
                        for (n = 0; r = e[n++];)
                            for (; a.indexOf(" " + r + " ") >= 0;) a = a.replace(" " + r + " ", " ");
                        i = t ? rt.trim(a) : "", s.className !== i && (s.className = i)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var s = typeof t;
            return "boolean" == typeof e && "string" === s ? e ? this.addClass(t) : this.removeClass(t) : this.each(rt.isFunction(t) ? function(s) {
                rt(this).toggleClass(t.call(this, s, this.className, e), e)
            } : function() {
                if ("string" === s)
                    for (var e, a = 0, r = rt(this), n = t.match(vt) || []; e = n[a++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(s === kt || "boolean" === s) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : rt._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", s = 0, a = this.length; a > s; s++)
                if (1 === this[s].nodeType && (" " + this[s].className + " ").replace(Ee, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        rt.fn[e] = function(t, s) {
            return arguments.length > 0 ? this.on(e, null, t, s) : this.trigger(e)
        }
    }), rt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, s) {
            return this.on(t, null, e, s)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, s, a) {
            return this.on(e, t, s, a)
        },
        undelegate: function(t, e, s) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", s)
        }
    });
    var Ae = rt.now(),
        Ne = /\?/,
        Oe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    rt.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var s, a = null,
            r = rt.trim(e + "");
        return r && !rt.trim(r.replace(Oe, function(t, e, r, n) {
            return s && e && (a = 0), 0 === a ? t : (s = r || e, a += !n - !r, "")
        })) ? Function("return " + r)() : rt.error("Invalid JSON: " + e)
    }, rt.parseXML = function(e) {
        var s, a;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (a = new DOMParser, s = a.parseFromString(e, "text/xml")) : (s = new ActiveXObject("Microsoft.XMLDOM"), s.async = "false", s.loadXML(e))
        } catch (r) {
            s = void 0
        }
        return s && s.documentElement && !s.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e), s
    };
    var Me, Fe, Ie = /#.*$/,
        ze = /([?&])_=[^&]*/,
        He = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Le = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Be = /^(?:GET|HEAD)$/,
        De = /^\/\//,
        Re = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        qe = {},
        $e = {},
        Ue = "*/".concat("*");
    try {
        Fe = location.href
    } catch (We) {
        Fe = ft.createElement("a"), Fe.href = "", Fe = Fe.href
    }
    Me = Re.exec(Fe.toLowerCase()) || [], rt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Fe,
            type: "GET",
            isLocal: Le.test(Me[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ue,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": rt.parseJSON,
                "text xml": rt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? R(R(t, rt.ajaxSettings), e) : R(rt.ajaxSettings, t)
        },
        ajaxPrefilter: B(qe),
        ajaxTransport: B($e),
        ajax: function(t, e) {
            function s(t, e, s, a) {
                var r, m, y, _, b, w = e;
                2 !== v && (v = 2, o && clearTimeout(o), l = void 0, i = a || "", x.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, s && (_ = q(h, x, s)), _ = $(h, _, x, r), r ? (h.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (rt.lastModified[n] = b), b = x.getResponseHeader("etag"), b && (rt.etag[n] = b)), 204 === t || "HEAD" === h.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = _.state, m = _.data, y = _.error, r = !y)) : (y = w, (t || !w) && (w = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || w) + "", r ? f.resolveWith(u, [m, w, x]) : f.rejectWith(u, [x, w, y]), x.statusCode(g), g = void 0, c && d.trigger(r ? "ajaxSuccess" : "ajaxError", [x, h, r ? m : y]), p.fireWith(u, [x, w]), c && (d.trigger("ajaxComplete", [x, h]), --rt.active || rt.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var a, r, n, i, o, c, l, m, h = rt.ajaxSetup({}, e),
                u = h.context || h,
                d = h.context && (u.nodeType || u.jquery) ? rt(u) : rt.event,
                f = rt.Deferred(),
                p = rt.Callbacks("once memory"),
                g = h.statusCode || {},
                y = {},
                _ = {},
                v = 0,
                b = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === v) {
                            if (!m)
                                for (m = {}; e = He.exec(i);) m[e[1].toLowerCase()] = e[2];
                            e = m[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? i : null
                    },
                    setRequestHeader: function(t, e) {
                        var s = t.toLowerCase();
                        return v || (t = _[s] = _[s] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return v || (h.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > v)
                                for (e in t) g[e] = [g[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || b;
                        return l && l.abort(e), s(0, e), this
                    }
                };
            if (f.promise(x).complete = p.add, x.success = x.done, x.error = x.fail, h.url = ((t || h.url || Fe) + "").replace(Ie, "").replace(De, Me[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = rt.trim(h.dataType || "*").toLowerCase().match(vt) || [""], null == h.crossDomain && (a = Re.exec(h.url.toLowerCase()), h.crossDomain = !(!a || a[1] === Me[1] && a[2] === Me[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Me[3] || ("http:" === Me[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = rt.param(h.data, h.traditional)), D(qe, h, e, x), 2 === v) return x;
            c = rt.event && h.global, c && 0 === rt.active++ && rt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.getBannerStatus = !Be.test(h.type), n = h.url, h.getBannerStatus || (h.data && (n = h.url += (Ne.test(n) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = ze.test(n) ? n.replace(ze, "$1_=" + Ae++) : n + (Ne.test(n) ? "&" : "?") + "_=" + Ae++)), h.ifModified && (rt.lastModified[n] && x.setRequestHeader("If-Modified-Since", rt.lastModified[n]), rt.etag[n] && x.setRequestHeader("If-None-Match", rt.etag[n])), (h.data && h.getBannerStatus && h.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ue + "; q=0.01" : "") : h.accepts["*"]);
            for (r in h.headers) x.setRequestHeader(r, h.headers[r]);
            if (h.beforeSend && (h.beforeSend.call(u, x, h) === !1 || 2 === v)) return x.abort();
            b = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[r](h[r]);
            if (l = D($e, h, e, x)) {
                x.readyState = 1, c && d.trigger("ajaxSend", [x, h]), h.async && h.timeout > 0 && (o = setTimeout(function() {
                    x.abort("timeout")
                }, h.timeout));
                try {
                    v = 1, l.send(y, s)
                } catch (w) {
                    if (!(2 > v)) throw w;
                    s(-1, w)
                }
            } else s(-1, "No Transport");
            return x
        },
        getJSON: function(t, e, s) {
            return rt.get(t, e, s, "json")
        },
        getScript: function(t, e) {
            return rt.get(t, void 0, e, "script")
        }
    }), rt.each(["get", "post"], function(t, e) {
        rt[e] = function(t, s, a, r) {
            return rt.isFunction(s) && (r = r || a, a = s, s = void 0), rt.ajax({
                url: t,
                type: e,
                dataType: r,
                data: s,
                success: a
            })
        }
    }), rt._evalUrl = function(t) {
        return rt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, rt.fn.extend({
        wrapAll: function(t) {
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = rt(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(rt.isFunction(t) ? function(e) {
                rt(this).wrapInner(t.call(this, e))
            } : function() {
                var e = rt(this),
                    s = e.contents();
                s.length ? s.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = rt.isFunction(t);
            return this.each(function(s) {
                rt(this).wrapAll(e ? t.call(this, s) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
            }).end()
        }
    }), rt.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !st.reliableHiddenOffsets() && "none" === (t.style && t.style.display || rt.css(t, "display"))
    }, rt.expr.filters.visible = function(t) {
        return !rt.expr.filters.hidden(t)
    };
    var Ve = /%20/g,
        Ge = /\[\]$/,
        Qe = /\r?\n/g,
        Xe = /^(?:submit|button|image|reset|file)$/i,
        Je = /^(?:input|select|textarea|keygen)/i;
    rt.param = function(t, e) {
        var s, a = [],
            r = function(t, e) {
                e = rt.isFunction(e) ? e() : null == e ? "" : e, a[a.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t)) rt.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (s in t) U(s, t[s], e, r);
        return a.join("&").replace(Ve, "+")
    }, rt.fn.extend({
        serialize: function() {
            return rt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = rt.prop(this, "elements");
                return t ? rt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !rt(this).is(":disabled") && Je.test(this.nodeName) && !Xe.test(t) && (this.checked || !At.test(t))
            }).map(function(t, e) {
                var s = rt(this).val();
                return null == s ? null : rt.isArray(s) ? rt.map(s, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Qe, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: s.replace(Qe, "\r\n")
                }
            }).get()
        }
    }), rt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || V()
    } : W;
    var Ke = 0,
        Ye = {},
        Ze = rt.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Ye) Ye[t](void 0, !0)
    }), st.cors = !!Ze && "withCredentials" in Ze, Ze = st.ajax = !!Ze, Ze && rt.ajaxTransport(function(t) {
        if (!t.crossDomain || st.cors) {
            var e;
            return {
                send: function(s, a) {
                    var r, n = t.xhr(),
                        i = ++Ke;
                    if (n.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields) n[r] = t.xhrFields[r];
                    t.mimeType && n.overrideMimeType && n.overrideMimeType(t.mimeType), t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                    for (r in s) void 0 !== s[r] && n.setRequestHeader(r, s[r] + "");
                    n.send(t.getBannerStatus && t.data || null), e = function(s, r) {
                        var o, c, l;
                        if (e && (r || 4 === n.readyState))
                            if (delete Ye[i], e = void 0, n.onreadystatechange = rt.noop, r) 4 !== n.readyState && n.abort();
                            else {
                                l = {}, o = n.status, "string" == typeof n.responseText && (l.text = n.responseText);
                                try {
                                    c = n.statusText
                                } catch (m) {
                                    c = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                            }
                        l && a(o, c, l, n.getAllResponseHeaders())
                    }, t.async ? 4 === n.readyState ? setTimeout(e) : n.onreadystatechange = Ye[i] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }), rt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return rt.globalEval(t), t
            }
        }
    }), rt.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), rt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, s = ft.head || rt("head")[0] || ft.documentElement;
            return {
                send: function(a, r) {
                    e = ft.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, s) {
                        (s || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, s || r(200, "success"))
                    }, s.insertBefore(e, s.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var ts = [],
        es = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ts.pop() || rt.expando + "_" + Ae++;
            return this[t] = !0, t
        }
    }), rt.ajaxPrefilter("json jsonp", function(e, s, a) {
        var r, n, i, o = e.jsonp !== !1 && (es.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && es.test(e.data) && "data");
        return o || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(es, "$1" + r) : e.jsonp !== !1 && (e.url += (Ne.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return i || rt.error(r + " was not called"), i[0]
        }, e.dataTypes[0] = "json", n = t[r], t[r] = function() {
            i = arguments
        }, a.always(function() {
            t[r] = n, e[r] && (e.jsonpCallback = s.jsonpCallback, ts.push(r)), i && rt.isFunction(n) && n(i[0]), i = n = void 0
        }), "script") : void 0
    }), rt.parseHTML = function(t, e, s) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (s = e, e = !1), e = e || ft;
        var a = ht.exec(t),
            r = !s && [];
        return a ? [e.createElement(a[1])] : (a = rt.buildFragment([t], e, r), r && r.length && rt(r).remove(), rt.merge([], a.childNodes))
    };
    var ss = rt.fn.load;
    rt.fn.load = function(t, e, s) {
        if ("string" != typeof t && ss) return ss.apply(this, arguments);
        var a, r, n, i = this,
            o = t.indexOf(" ");
        return o >= 0 && (a = rt.trim(t.slice(o, t.length)), t = t.slice(0, o)), rt.isFunction(e) ? (s = e, e = void 0) : e && "object" == typeof e && (n = "POST"), i.length > 0 && rt.ajax({
            url: t,
            type: n,
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, i.html(a ? rt("<div>").append(rt.parseHTML(t)).find(a) : t)
        }).complete(s && function(t, e) {
            i.each(s, r || [t.responseText, e, t])
        }), this
    }, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        rt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), rt.expr.filters.animated = function(t) {
        return rt.grep(rt.timers, function(e) {
            return t === e.elem
        }).length
    };
    var as = t.document.documentElement;
    rt.offset = {
        setOffset: function(t, e, s) {
            var a, r, n, i, o, c, l, m = rt.css(t, "position"),
                h = rt(t),
                u = {};
            "static" === m && (t.style.position = "relative"), o = h.offset(), n = rt.css(t, "top"), c = rt.css(t, "left"), l = ("absolute" === m || "fixed" === m) && rt.inArray("auto", [n, c]) > -1, l ? (a = h.position(), i = a.top, r = a.left) : (i = parseFloat(n) || 0, r = parseFloat(c) || 0), rt.isFunction(e) && (e = e.call(t, s, o)), null != e.top && (u.top = e.top - o.top + i), null != e.left && (u.left = e.left - o.left + r), "using" in e ? e.using.call(t, u) : h.css(u)
        }
    }, rt.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                rt.offset.setOffset(this, t, e)
            });
            var e, s, a = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                n = r && r.ownerDocument;
            return n ? (e = n.documentElement, rt.contains(e, r) ? (typeof r.getBoundingClientRect !== kt && (a = r.getBoundingClientRect()), s = G(n), {
                top: a.top + (s.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: a.left + (s.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : a) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, s = {
                        top: 0,
                        left: 0
                    },
                    a = this[0];
                return "fixed" === rt.css(a, "position") ? e = a.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (s = t.offset()), s.top += rt.css(t[0], "borderTopWidth", !0), s.left += rt.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - s.top - rt.css(a, "marginTop", !0),
                    left: e.left - s.left - rt.css(a, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || as; t && !rt.nodeName(t, "html") && "static" === rt.css(t, "position");) t = t.offsetParent;
                return t || as
            })
        }
    }), rt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var s = /Y/.test(e);
        rt.fn[t] = function(a) {
            return Et(this, function(t, a, r) {
                var n = G(t);
                return void 0 === r ? n ? e in n ? n[e] : n.document.documentElement[a] : t[a] : void(n ? n.scrollTo(s ? rt(n).scrollLeft() : r, s ? r : rt(n).scrollTop()) : t[a] = r)
            }, t, a, arguments.length, null)
        }
    }), rt.each(["top", "left"], function(t, e) {
        rt.cssHooks[e] = T(st.pixelPosition, function(t, s) {
            return s ? (s = ee(t, e), ae.test(s) ? rt(t).position()[e] + "px" : s) : void 0
        })
    }), rt.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        rt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(s, a) {
            rt.fn[a] = function(a, r) {
                var n = arguments.length && (s || "boolean" != typeof a),
                    i = s || (a === !0 || r === !0 ? "margin" : "border");
                return Et(this, function(e, s, a) {
                    var r;
                    return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === a ? rt.css(e, s, i) : rt.style(e, s, a, i)
                }, e, n ? a : void 0, n, null)
            }
        })
    }), rt.fn.size = function() {
        return this.length
    }, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return rt
    });
    var rs = t.jQuery,
        ns = t.$;
    return rt.noConflict = function(e) {
        return t.$ === rt && (t.$ = ns), e && t.jQuery === rt && (t.jQuery = rs), rt
    }, typeof e === kt && (t.jQuery = t.$ = rt), rt
}), 
window.Modernizr = function(t, e, s) {
        function a(t) {
            _.cssText = t
        }

        function r(t, e) {
            return typeof t === e
        }

        function n(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function i(t, e) {
            for (var a in t) {
                var r = t[a];
                if (!n(r, "-") && _[r] !== s) return "pfx" == e ? r : !0
            }
            return !1
        }

        function o(t, e, a) {
            for (var n in t) {
                var i = e[t[n]];
                if (i !== s) return a === !1 ? t[n] : r(i, "function") ? i.bind(a || e) : i
            }
            return !1
        }

        function c(t, e, s) {
            var a = t.charAt(0).toUpperCase() + t.slice(1),
                n = (t + " " + x.join(a + " ") + a).split(" ");
            return r(e, "string") || r(e, "undefined") ? i(n, e) : (n = (t + " " + w.join(a + " ") + a).split(" "), o(n, e, s))
        }
        var l, m, h, u = "2.8.3",
            d = {},
            f = !0,
            p = e.documentElement,
            g = "modernizr",
            y = e.createElement(g),
            _ = y.style,
            v = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            b = "Webkit Moz O ms",
            x = b.split(" "),
            w = b.toLowerCase().split(" "),
            k = {},
            C = [],
            S = C.slice,
            T = function(t, s, a, r) {
                var n, i, o, c, l = e.createElement("div"),
                    m = e.body,
                    h = m || e.createElement("body");
                if (parseInt(a, 10))
                    for (; a--;) o = e.createElement("div"), o.id = r ? r[a] : g + (a + 1), l.appendChild(o);
                return n = ["&#173;", '<style id="s', g, '">', t, "</style>"].join(""), l.id = g, (m ? l : h).innerHTML += n, h.appendChild(l), m || (h.style.background = "", h.style.overflow = "hidden", c = p.style.overflow, p.style.overflow = "hidden", p.appendChild(h)), i = s(l, t), m ? l.parentNode.removeChild(l) : (h.parentNode.removeChild(h), p.style.overflow = c), !!i
            },
            P = function(e) {
                var s = t.matchMedia || t.msMatchMedia;
                if (s) return s(e) && s(e).matches || !1;
                var a;
                return T("@media " + e + " { #" + g + " { position: absolute; } }", function(e) {
                    a = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
                }), a
            },
            j = {}.hasOwnProperty;
        h = r(j, "undefined") || r(j.call, "undefined") ? function(t, e) {
            return e in t && r(t.constructor.prototype[e], "undefined")
        } : function(t, e) {
            return j.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var s = S.call(arguments, 1),
                a = function() {
                    if (this instanceof a) {
                        var r = function() {};
                        r.prototype = e.prototype;
                        var n = new r,
                            i = e.apply(n, s.concat(S.call(arguments)));
                        return Object(i) === i ? i : n
                    }
                    return e.apply(t, s.concat(S.call(arguments)))
                };
            return a
        }), k.touch = function() {
            var s;
            return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? s = !0 : T(["@media (", v.join("touch-enabled),("), g, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                s = 9 === t.offsetTop
            }), s
        }, k.csscolumns = function() {
            return c("columnCount")
        }, k.csstransforms = function() {
            return !!c("transform")
        }, k.csstransforms3d = function() {
            var t = !!c("perspective");
            return t && "webkitPerspective" in p.style && T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, s) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, k.csstransitions = function() {
            return c("transition")
        }, k.localstorage = function() {
            try {
                return localStorage.setItem(g, g), localStorage.removeItem(g), !0
            } catch (t) {
                return !1
            }
        };
        for (var E in k) h(k, E) && (m = E.toLowerCase(), d[m] = k[E](), C.push((d[m] ? "" : "no-") + m));
        return d.addTest = function(t, e) {
            if ("object" == typeof t)
                for (var a in t) h(t, a) && d.addTest(a, t[a]);
            else {
                if (t = t.toLowerCase(), d[t] !== s) return d;
                e = "function" == typeof e ? e() : e, "undefined" != typeof f && f && (p.className += " cpf-" + (e ? "" : "no-") + t), d[t] = e
            }
            return d
        }, a(""), y = l = null, d._version = u, d._prefixes = v, d._domPrefixes = w, d._cssomPrefixes = x, d.mq = P, d.testProp = function(t) {
            return i([t])
        }, d.testAllProps = c, d.testStyles = T, d.prefixed = function(t, e, s) {
            return e ? c(t, e, s) : c(t, "pfx")
        }, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " cpf-js cpf-" + C.join(" cpf-") : ""), d
    }
    (this, this.document), Modernizr.addTest("mediaqueries", Modernizr.mq("only all")),
    function(t) {
        "use strict";

        function e(e, s, a) {
            var r, n, i = Array.isArray(e) ? e : e.split("."),
                o = s || t;
            a = a !== !1;
            for (var c = 0; c < i.length && (r = i[c], n = o[r], p(n, "object") || a && (o[r] = n = {}), o = n, null !== o && !p(o, "undefined")); c += 1);
            return o
        }

        function s(t, s) {
            var a, r = Array.isArray(t) ? t : t.split("."),
                n = e(r.slice(0, r.length - 1), s, !1);
            return null === n || p(n, "undefined") || (a = n[r.pop()]), a
        }

        function a(t) {
            var e, s = t && p(t, "object") && !(t.nodeType || t === t.window);
            try {
                s = s && !(t.constructor && !d.call(t, "constructor") && !d.call(t.constructor.prototype, "isPrototypeOf"))
            } catch (a) {
                s = !1
            }
            if (s) {
                for (e in t);
                s = p(e, "undefined") || d.call(t, e)
            }
            return s
        }

        function r() {
            var t, e, s, n, i, o, c, l, m;
            if (p(arguments[0], "boolean") && (s = f.shift.apply(arguments)), arguments.length < 2) return arguments[0];
            t = f.shift.apply(arguments), m = p(t), "object" != m && "function" != m && "array" != m && (t = {}), e = arguments;
            for (var h = 0; h < e.length; h += 1)
                if (n = e[h], null != n)
                    for (var u in n) d.call(n, u) && n[u] !== t && (i = t[u], o = n[u], ((l = Array.isArray(o)) || a(o)) && s ? (c = l ? Array.isArray(i) ? i : [] : p(i, "object") ? i : {}, t[u] = r(!0, c, o)) : p(o, "undefined") || (t[u] = o));
            return t
        }

        function n() {
            var t, e, s, a, r, i, o, c, l = [],
                m = !1;
            if (p(arguments[0], "boolean") && (m = f.shift.call(arguments)), l = f.reduce.call(arguments, function(t, e) {
                    var s = p(e),
                        a = t.length > 0 && p(t[0]);
                    return (a ? s === a : "array" === s || "object" === s) && t.push(e), t
                }, l), a = l.shift(), o = Array.isArray(a), l.length)
                for (var h = 0; h < l.length; h++) {
                    s = l[h];
                    for (var u in s) d.call(s, u) && (r = p(t = s[u]), i = p(e = a[u]), r === i && ("object" === r || (c = "array" === r)) && t !== e && m ? a[u] = n(!0, c ? [] : {}, e, t) : "undefined" != i ? o ? a.push(t) : a[u] = [].concat(e, t) : a[u] = t)
                }
            return a
        }

        function i(t, e, s) {
            var a = null;
            return e = e || 100,
                function() {
                    function r() {
                        s || t.apply(n, i), a = null
                    }
                    var n = this,
                        i = arguments;
                    null !== a ? clearTimeout(a) : s && t.apply(n, i), a = setTimeout(r, e)
                }
        }

        function o(t, e, s) {
            e = e || 100;
            var a, r = null;
            return function() {
                var n = s || this,
                    i = +new Date,
                    o = Array.prototype.slice.call(arguments);
                a && a + e > i ? (clearTimeout(r), r = setTimeout(function() {
                    a = i, t.apply(n, o)
                }, e)) : (clearTimeout(r), a = i, t.apply(n, arguments))
            }
        }

        function c(t, e) {
            if ("object" != typeof t) throw new TypeError("invalid mixin");
            if ("object" != typeof e) throw new TypeError("invalid target");
            var s = Object.keys(e),
                a = Object.keys(t);
            return s.reduce(function(t, e) {
                return -1 !== a.indexOf(e) && (t = t.concat([e])), t
            }, [])
        }

        function l(t, e) {
            var s = c(e, t),
                a = s.length > 0;
            if (a) throw new Error("methods '" + s.join("','") + "' exists in target");
            return r(!0, t, e)
        }

        function m(t) {
            var e = function() {
                var t, s = this;
                return s instanceof e || (s = new e(e)), "__id" in s || (s.__id = ++h), (arguments[0] !== e || 1 !== arguments.length) && (t = s._Init.apply(s, arguments), p(t, "object") ? s = t : s._Init = null), s
            };
            return "_mixins" in t && t._mixins.forEach(function(e) {
                t = l(t, e)
            }), null === t || p(t, "undefined") || (e.prototype = t, e.prototype.constructor = e), e
        }
        "DEBUG" in t || (t.DEBUG = !1);
        var h = 0,
            u = Object.prototype,
            d = u.hasOwnProperty,
            f = Array.prototype,
            p = function() {
                for (var t, e = ["Object", "Array", "Boolean", "Date", "Function", "Number", "Null", "RegExp", "String", "Undefined", "Arguments", "Error", "Math", "JSON"], s = u.toString, a = {}, r = e[0].toLowerCase(), n = e.length; n--;) t = e[n], a["[" + r + " " + t + "]"] = t.toLowerCase();
                return function(t, e) {
                    var n = typeof t;
                    return (n === r || "function" === n) && (n = null === t ? "null" : a[s.call(t)] || r), e ? e === n : n
                }
            }(),
            g = function() {
                var t = Array.isArray;
                return p(t, "function") || (t = Array.isArray = function(t) {
                        return p(t, "array")
                    }),
                    function(e) {
                        return t(e)
                    }
            }(),
            y = function() {
                var e = function(e, a) {
                    var r = s(["fest"].concat(e), t);
                    if (p(r, "function")) return r(a);
                    if (t.DEBUG) throw new Error("Шаблон " + e + " отсутствует.")
                };
                return function(s) {
                    if (s) return e.bind(null, s);
                    if (t.DEBUG) throw new Error("Не указано имя шаблона")
                }
            }(),
            _ = function() {
                var t = "onclick",
                    e = "_options";
                return function(s) {
                    var a, r, n = s[e];
                    if (null != n) r = n;
                    else {
                        try {
                            a = s[t], null != a && (r = a())
                        } catch (i) {
                            DEBUG && console.error("Broken onclick val:", s)
                        }
                        s.removeAttribute(t), s[t] = null, s[e] = r
                    }
                    return r
                }
            }(),
            v = function() {
                function s(s) {
                    return s || (s = "location" in t && t.location.hostname.split(".").slice(0, -2).join(".") || ""), i = i || {}, e(s, i)
                }

                function a(t, e, a, n) {
                    var i = s(n),
                        o = i[t];
                    return !o || a ? o = i[t] = r(!0, {}, e) : r(!0, o, e), o
                }

                function n(t, e) {
                    return s(e)[t]
                }
                var i;
                return {
                    get: function(t, e) {
                        var s = n(t, e);
                        return s && s.options
                    },
                    set: function(t, e, s) {
                        var r = null;
                        (p(arguments[1], "string") || p(arguments[2], "object") || 4 === arguments.length) && (r = arguments[1], e = arguments[2], s = arguments[3]);
                        var n = {
                            options: e
                        };
                        return a(t, n, s, r).options
                    },
                    setParams: function() {
                        return a.apply(null, f.slice.call(arguments, 0, 3))
                    },
                    getParams: function() {
                        return n.apply(null, f.slice.call(arguments, 0, 1))
                    },
                    registerModule: function(t, e) {
                        a(t, {
                            initializer: e
                        })
                    }
                }
            }(),
            b = e("ru.mail.cpf");
        r(b, {
            Basic: {
                Extend: r,
                Merge: n,
                getOptions: _,
                moduleOpts: v,
                typeOf: p,
                getConstructor: m,
                getByPath: s,
                debounce: i,
                throttle: o
            },
            Tools: {
                getTemplate: y
            }
        }), r(b, {
            Types: {
                Array: {
                    isArray: g
                }
            }
        }), t.getNameSpace = e
    }(new Function("return this")()),
    function(t, e) {
        "use strict";

        function s(t, e, s) {
            t = t || {}, s = s || "cprojects";
            var r, n = [],
                i = [],
                o = "//" + s + ".radar.imgsmail.ru/update?p=" + s + "&t=" + e;
            for (var c in t) t.hasOwnProperty(c) && (c = c.replace(/-+/g, ""), r = t[c], (r || "" !== r && !a(r, "undefined")) && (n.push(c + ":" + r), !isNaN(+r) && a(+r, "number") && i.push(c + ":" + r)));
            (new Image).src = o + "&v=1&i=" + i.join(",") + "&data=" + n.join(",") + "&rnd=" + Math.random() + (document.referrer ? "&r=" + encodeURI(document.referrer) : "")
        }
        var a = e.Basic.typeOf;
        t.getNameSpace("Tools", e).sendToRadar = s
    }
    (window, window.ru.mail.cpf),
    function() {
        var t = Array.prototype;
        t.map || (t.map = function(t, e) {
            if (null == this) throw new TypeError(" this is null or not defined");
            if ("function" != typeof t) throw new TypeError(t + " is not a function");
            var s, a, r, n, i = Object(this),
                o = i.length >>> 0,
                c = 0;
            for (arguments.length > 1 && (s = e), a = new Array(o); o > c;) c in i && (r = i[c], n = t.call(s, r, c, i), a[c] = n), c++;
            return a
        }), t.forEach || (t.forEach = function(t, e) {
            "use strict";
            for (var s = this.length, a = 0; s > a; a++) a in this && t.call(e, this[a], a, this)
        }), t.reduce || (t.reduce = function(t, e) {
            "use strict";
            if (null === this || "undefined" == typeof this) throw new TypeError("Array.prototype.reduce called on null or undefined");
            if ("function" != typeof t) throw new TypeError(t + " is not a function");
            var s, a, r = this.length >>> 0,
                n = !1;
            for (arguments.length > 1 && (a = e, n = !0), s = 0; r > s; ++s) this.hasOwnProperty(s) && (n ? a = t(a, this[s], s, this) : (a = this[s], n = !0));
            if (!n) throw new TypeError("Reduce of empty array with no initial value");
            return a
        }), t.filter || (t.filter = function(t) {
            "use strict";
            var e, s, a, r;
            if (void 0 === this || null === this) throw new TypeError;
            var n = Object(this);
            if (r = n.length >>> 0, "function" != typeof t) throw new TypeError;
            e = [], s = arguments.length >= 2 ? arguments[1] : void 0;
            for (var i = 0; r > i; i++) i in n && (a = n[i], t.call(s, a, i, n) && e.push(a));
            return e
        }), Array.prototype.some || (Array.prototype.some = function(t) {
            "use strict";
            if (void 0 === this || null === this) throw new TypeError;
            var e = Object(this),
                s = e.length >>> 0;
            if ("function" != typeof t) throw new TypeError;
            for (var a = arguments.length >= 2 ? arguments[1] : void 0, r = 0; s > r; r++)
                if (r in e && t.call(a, e[r], r, e)) return !0;
            return !1
        }), Array.prototype.every || (Array.prototype.every = function(t) {
            "use strict";
            if (void 0 === this || null === this) throw new TypeError;
            var e = Object(this),
                s = e.length >>> 0;
            if ("function" != typeof t) throw new TypeError;
            for (var a = arguments.length >= 2 ? arguments[1] : void 0, r = 0; s > r; r++)
                if (r in e && !t.call(a, e[r], r, e)) return !1;
            return !0
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
            var s;
            if (null == this) throw new TypeError('"this" is null or not defined');
            var a = Object(this),
                r = a.length >>> 0;
            if (0 === r) return -1;
            var n = +e || 0;
            if (Math.abs(n) === 1 / 0 && (n = 0), n >= r) return -1;
            for (s = Math.max(n >= 0 ? n : r - Math.abs(n), 0); r > s;) {
                if (s in a && a[s] === t) return s;
                s++
            }
            return -1
        })
    }(),
    function() {
        var t = Object.prototype.hasOwnProperty,
            e = Array.prototype;
        ! function() {
            var t = e.indexOf;
            return "function" != typeof t && (e.indexOf = function(t) {
                    var e, s;
                    if (null == this) throw new TypeError;
                    e = Object(this), s = e.length >>> 0;
                    for (var a = 0; s > a; a++)
                        if (a in e && e[a] === t) return a;
                    return -1
                }),
                function(t, s) {
                    return e.indexOf.call(s, t)
                }
        }(),
        function() {
            var t = Function.prototype,
                s = t.bind;
            "function" != typeof s && (t.bind = function(t) {
                var s, a = this;
                if ("function" !== a) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                return s = e.slice.call(arguments, 1),
                    function() {
                        return a.apply(t, s.concat(e.slice.call(arguments)))
                    }
            })
        }(), "function" != typeof Object.create && ! function() {
            function t() {}
            Object.create = function(e) {
                if (1 != arguments.length) throw new Error("Current Object.create implementation only accepts one parameter.");
                return t.prototype = e, new t
            }
        }(), Object.keys || (Object.keys = function() {
            var e = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                s = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
            return function(a) {
                if ("object" != typeof a && ("function" != typeof a || null === a)) throw new TypeError("Object.keys called on non-object");
                var r, n = [];
                for (r in a) t.call(a, r) && n.push(r);
                return e && s.forEach(function(e) {
                    t.call(a, e) && n.push(e)
                }), n
            }
        }()), String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        })
    }(),
    function(t) {
        for (var e, s = ["ms", "moz", "webkit", "o"], a = 0; a < s.length && !t.requestAnimationFrame; ++a) e = s[a], t.requestAnimationFrame = t[e + "RequestAnimationFrame"], t.cancelAnimationFrame = t[e + "CancelAnimationFrame"] || t[e + "CancelRequestAnimationFrame"];
        t.requestAnimationFrame = t.requestAnimationFrame || function(e) {
            t.setTimeout(e, 1e3 / 60)
        }, t.cancelAnimationFrame = t.cancelAnimationFrame || function(e) {
            t.clearTimeout(e)
        }
    }
    // (this),
    // function(t, e, s) {
    //     var a, r, n, i, o, c, l = s.createElement("div");
    //     if (!("onmousewheel" in l)) {
    //         o = [e], i = ["mousewheel"], r = {
    //             add: ["addEventListener", "attachEvent", "add"],
    //             rem: ["removeEventListener", "detachEvent", "not"]
    //         }, c = r.add[0] in l, c ? i.push("DOMMouseScroll") : (i[0] = "on" + i[0], o.push(s));
    //         for (var m in r) r.hasOwnProperty(m) && r[m].splice(1 * c, 1);
    //         a = function(s) {
    //             s = s || e.event;
    //             var a, r, n = t(s.target || s.srcElement);
    //             r = s.wheelDelta || -40 * s.detail, a = t.Event(s, {
    //                 type: "mousewheel",
    //                 wheelDelta: r
    //             }), n.trigger(a)
    //         }, n = function(t) {
    //             for (var e = r[t ? "add" : "rem"], s = 0; s < i.length; s += 1) this[e[0]](i[s], a, !1)
    //         }, t.event.special.mousewheel = {
    //             setup: function() {
    //                 n.call(this, !0)
    //             },
    //             teardown: function() {
    //                 n.call(this, !1)
    //             }
    //         }
    //     }
    // }
    (jQuery, window, document),
    function(t, e) {
        var s = t.getNameSpace,
            a = e.Basic,
            r = a.typeOf;
        a.Extend(s("Types.Object", e), function() {
            var t = function(e, s, a) {
                    var n, i, o = null == s;
                    if (!o && (a = r(a, "function") ? a : Object.prototype.hasOwnProperty, !o))
                        if (Array.isArray(s))
                            for (n = 0;
                                (i = s[n++]) && (o = a.call(e, i)););
                        else if (r(s, "object")) {
                        for (var c in s)
                            if (!(o = a.call(e, c) && t(e[c], s[c], a))) break
                    } else o = a.call(e, s);
                    return o
                },
                s = function() {
                    var t, a, n, i, o, c, l, m, h = Array.prototype.slice.call(arguments),
                        u = [],
                        d = !0,
                        f = 0;
                    for (r(h[0], "array") && (t = h.shift()), n = h.length; n--;) {
                        if (a = h[n], !r(a, "object")) return !1;
                        for (var p in a) a.hasOwnProperty(p) && u.indexOf(p) < 0 && !(t && t.indexOf(p) < 0) && u.push(p)
                    }
                    if (!u.length) return !0;
                    for (; d && (c = u[f++]);)
                        for (n = 0; n < h.length; n++) {
                            if (a = h[n], !a.hasOwnProperty(c)) {
                                d = !1;
                                break
                            }
                            if (0 === n) i = a[c], m = r(i);
                            else if (o = a[c], l = r(o), l !== m || ("array" == l ? !e.Types.Array.Equals(i, o) : "object" == l ? !s(i, o) : i != o)) {
                                d = !1;
                                break
                            }
                        }
                    return d
                };
            return {
                hasKeys: t,
                Equals: s
            }
        }())
    }(window, window.getNameSpace("ru.mail.cpf")),
    function(t) {
        "use strict";
        var e = t.getNameSpace,
            s = e("ru.mail.cpf", t),
            a = s.Basic,
            r = a.typeOf;
        a.Extend(e("Types.String", s), function() {
            var t = String.prototype,
                e = function(t, e, s) {
                    var a, n, i = -1;
                    s = s || 0;
                    for (var o = 0; o < e.length; o++) r(a = e[o], "string") && (n = t.indexOf(a, s)) > -1 && (i = Math[0 > i ? "max" : "min"](n, i));
                    return i
                },
                s = function() {
                    var e, s = t.trim;
                    return r(s, "function") ? e = s : (e = function() {
                            return this.replace(/^\s+|\s+$/g, "")
                        }, t.trim = e),
                        function(e) {
                            return t.toString.call(e).trim()
                        }
                }(),
                a = function(t, e) {
                    if (t %= 100, t > 10 && 20 > t) return e[2];
                    switch (t %= 10) {
                        case 1:
                            return e[0];
                        case 2:
                        case 3:
                        case 4:
                            return e[1];
                        default:
                            return e[2]
                    }
                },
                n = function(t, e) {
                    var s;
                    return t.length <= e ? t : (s = t.substr(0, e), " " != t.charAt(e) && (s = s.substr(0, s.lastIndexOf(" "))), s)
                },
                i = function(t, e) {
                    return t.replace(/\$\{([\w\d\-_]+)\}/g, function(t, s) {
                        return r(e[s], "undefined") ? t : e[s]
                    })
                };
            return {
                getPlural: a,
                trim: s,
                getNearest: e,
                cutBySpace: n,
                supplant: i,
                regExp: {
                    Url: /^(?:http(?:s)?:\/\/)?(?:(?:[a-z0-9\-]+\.)+[a-z]{2,4})?\/?(?:[a-z0-9\-_]+(?:\/|(?:\.[a-z0-9]+)))*(?:\?.*)?$/i
                }
            }
        }())
    }(new Function("return this")()),
    function(t, e, s) {
        "use strict";
        var a = t.getNameSpace,
            r = e.Basic,
            n = r.typeOf;
        r.Extend(a("Types.String.Html", e), function() {
            var t = function(t) {
                    for (var r, n, i, o, c, l, m, h = []; t.length && (r = t.indexOf("<"), !(0 > r));) {
                        o = n = r + 1, c = a("Types.String", e).getNearest(t, [" ", ">", "/"], r), i = t.substr(o, c > -1 ? c - o : s), m = "<" + i, l = "!--" == i ? "-->" : "</" + i;
                        do n = t.indexOf(l, n + 1); while ((o = t.indexOf(m, o + 1)) > 0 && n > o);
                        n = t.indexOf(">", n) + 1, h.push(t.slice(r, n)), t = t.slice(n)
                    }
                    return h
                },
                r = function(t, e) {
                    return n(t, "string") && n(e, "string") ? i(t)[e] : void 0
                },
                i = function() {
                    var t = /[a-z]+[a-z0-9-_]*/i;
                    return function(e) {
                        var s, a, r, i, o, c, l, m = {};
                        if (n(e, "string")) {
                            if ((s = e.split(" ")).length > 1)
                                for (a = -1; n(r = s[++a], "string");) r.length && (a ? (l = r.indexOf("="), i = l > -1 ? [r.substr(0, l), r.substr(l + 1)] : [r], t.test(c = i[0]) && (m[c] = n(o = i[1], "string") ? o.slice(1, o.indexOf(o.charAt(0), 1)) : o)) : m.tagName = r.substr(1));
                            return m
                        }
                    }
                }();
            return {
                Split: t,
                getParams: i,
                getAttr: r
            }
        }())
    }(window, window.ru.mail.cpf),
    function(t, e, s) {
        "use strict";

        function a(t, e, s, a) {
            var n, i, o = t.isArray,
                c = a,
                l = p(s),
                m = "array" === l;
            switch (e && (c = e, p(t.getParamName, "function") ? c = t.getParamName(c, a) : !m && t.traditional && o || (c += ["[", o && !m ? "" : a, "]"].join(""))), l) {
                case "array":
                case "object":
                    n = r(s, t, c);
                    break;
                default:
                    i = [encodeURIComponent(c)], null != s && 0 !== s.length && i.push("?" !== s ? encodeURIComponent(s) : s), n = i.join("=")
            }
            return n
        }

        function r(t, e, s) {
            var r = [];
            switch (e = g({}, e), e.traditional = e.traditional !== !1, p(t)) {
                case "array":
                    r = t.reduce(function(t, r, n) {
                        return e.isArray = !0, t.concat(a(e, s, r, n))
                    }, []);
                    break;
                case "object":
                    r = Object.keys(t).reduce(function(r, n) {
                        return e.isArray = !1, r.concat(a(e, s, t[n], n))
                    }, [])
            }
            return r
        }

        function n(t) {
            var e, s, a = {
                path: "",
                query: "",
                hash: ""
            };
            return t ? (t = t.replace(/\+/g, " ").trim(), "/" === t ? (a.path = "/", s = !0) : t.indexOf("?") >= 0 ? (e = t.split("?"), a.path = e[0], t = e[1]) : y.test((e = t.split("#"))[0]) || _.test(e[0]) ? (a.path = e[0] || "", a.hash = e[1] || "", s = !0) : a.query = t, s || (e = t.split("#"), a.query = e[0] || "", a.hash = e[1] || ""), a) : a
        }

        function i(t) {
            var e = t.replace(/]/g, "").split("[");
            return 1 === e.length && (e = e[0].split(".")), e
        }

        function o(t) {
            var e = t && ("number" == typeof t || b.test(t));
            return e ? +t : t in x ? x[t] : t
        }

        function c(t) {
            var e = n(t);
            return e.query = h(e.query, !1) || {}, e
        }

        function l(t, e, a) {
            var n, i = c(e),
                o = i.path,
                l = i.hash,
                m = i.query;
            if (t = t || {}, a = a || {}, a.replace !== !1)
                for (var h in m) m.hasOwnProperty(h) && h in t && (m[h] = s);
            return m = g(!0, {}, m, t), n = r(m, a).join("&").replace(/%20/g, "+"), o + (o && n ? "?" : "") + n + (l ? "#" + l : "")
        }

        function m(t, e, s, a) {
            if (!e) return t;
            var r = {};
            return r[e] = s, l(r, t, a)
        }

        function h(t, e) {
            var a = {};
            return (p(e, "undefined") ? !0 : e) && (t = n(t).query), t ? (t.split("&").forEach(function(t) {
                var e, r, n = t.split("=");
                p(n[1], "undefined") && (n = t.match(v), n = n ? n.slice(1) : [t, null]), e = i(decodeURIComponent(n[0])), r = o(decodeURIComponent(n[1])), g(!0, a, e.reverse().reduce(function(t, s, a) {
                    var n = isNaN(s) || a === e.length - 1 ? {} : [];
                    return n[s || 0] = p(t, "undefined") ? r : t, n
                }, s))
            }), a) : null
        }

        function u(e) {
            var s = t.location;
            return p(e, "string") || p(e, "undefined") ? (e = e ? e.trim() : "", _.test(e) || (e = s.protocol + "//" + s.hostname + ("/" == e.charAt(0) ? "" : s.pathname) + e), e) : void 0
        }
        var d = t.getNameSpace,
            f = e.Basic,
            p = f.typeOf,
            g = f.Merge,
            y = /^\/?([^=&#\/]+\/)+[^=&#\/]*$/,
            _ = /^(http(s?):)?\/\/[^\/]+/i,
            v = /([a-z-_]+)([0-9,]+)/i,
            b = /^-?[0-9]*\.?[0-9]*$/,
            x = {
                "true": !0,
                "false": !1,
                "null": null,
                undefined: null,
                "": null
            };
        f.Extend(d("Types.String.Url", e), {
            getAbs: u,
            addParam: m,
            addParams: l,
            getParams: h
        })
    }(this, this.ru.mail.cpf),
    function(t, e) {
        function s(t) {
            var e = c(t),
                s = {
                    bind: function() {
                        e.add.apply(e, arguments)
                    },
                    once: function() {
                        e.once.apply(e, arguments)
                    },
                    _fire: function() {
                        var t = o.slice.call(arguments);
                        i(t[2], "undefined") && (t[2] = this), e.fire.apply(e, t)
                    }
                };
            t.Expandable === !0 && (s._addCbkTypes = function() {
                e._addTypes.apply(e, arguments)
            }), n(this, s)
        }

        function a(e) {
            var s, a;
            if (i(this, "object") && this !== t) {
                if (i(this._addEventTypes, "function")) return void this._addEventTypes(e.Types);
                a = e.Expandable = e.Expandable !== !1, s = c(e), n(this, {
                    _trigger: function() {
                        var t = o.slice.call(arguments);
                        t[1] = t.splice(1, t.length), t[2] = this, s.fire.apply(s, t)
                    },
                    on: s.add.bind(s),
                    once: s.once.bind(s),
                    off: s.remove.bind(s)
                }), a && (this._addEventTypes = s._addTypes.bind(s))
            }
        }
        var r = e.Basic,
            n = r.Extend,
            i = r.typeOf,
            o = Array.prototype,
            c = r.getConstructor(function() {
                function t(t, e, s) {
                    for (var a = e.split(" "), r = a.length; r--;) m.call(this, t, a[r], s)
                }
                var e = {
                        Types: null,
                        Expandable: !1,
                        Memory: !1,
                        Once: !1
                    },
                    s = function(t, e) {
                        var s, a, r = this._Types,
                            n = this._Opts;
                        !i(t, "string") || t in r || (r[t] = s = {
                            Handlers: null,
                            handlerParams: null,
                            Once: e && e.once === !0
                        }, a = e && e.memory || n.Memory, a && (s.History = [], i(a, "number") && (s.History.maxLength = a)))
                    },
                    a = function(t, e, s) {
                        var a = t.Handlers,
                            r = t.handlerParams;
                        a.indexOf(e) > -1 || (a.push(e), r.push({
                            once: s === !0
                        }))
                    },
                    r = function(t, e) {
                        var s = t.Handlers,
                            a = t.handlerParams,
                            r = i(e, "function") ? s.indexOf(e) : i(e, "number") ? e : -1;
                        r > -1 && (s.splice(r, 1), a.splice(r, 1))
                    },
                    c = function(t, e) {
                        for (var s, a, r, n = t.History, i = 0; i < n.length; i++) s = n[i], a = s.context, r = s.args, e.apply(a, r)
                    },
                    l = function(t, e, s, n) {
                        var o, l, m = this._Opts,
                            h = (m.Once || s.once) === !0,
                            u = s.fired;
                        i(e, "function") ? o = e : i(e, "object") && (i(o = e.handler) || (o = null), l = e.once === !0), o && (t ? (n && c.call(this, s, o), u && (h || l && n) || a.call(this, s, o, l)) : r.call(this, s, o))
                    },
                    m = function(t, e, s) {
                        var a, r, n = this._Types;
                        if (n && e && i(a = n[e], "object")) {
                            if (!Array.isArray(a.Handlers)) {
                                if (!t) return;
                                a.Handlers = [], a.handlerParams = []
                            }
                            if (r = Array.isArray(a.History) && a.History.length > 0, Array.isArray(s))
                                for (var o = 0; o < s.length; o++) l.call(this, t, s[o], a, r);
                            else s ? l.call(this, t, s, a, r) : t || delete n[e]
                        }
                    },
                    h = function() {
                        var e, s = arguments,
                            a = o.shift.apply(s),
                            r = s[0],
                            n = i(r);
                        if ("string" == n) t.call(this, a, r, s[1]);
                        else if ("object" == n) {
                            e = r;
                            for (var c in e) e.hasOwnProperty(c) && t.call(this, a, c, e[c])
                        }
                    },
                    u = function(t) {
                        var e, a, r, n;
                        if (Array.isArray(t))
                            for (var o = 0; o < t.length; o++) i(e = t[o], "string") && s.call(this, e);
                        else if (i(t, "object"))
                            for (var c in t) t.hasOwnProperty(c) && (a = t[c], i(a, "object") ? (r = a.handlers, n = a.opts) : r = a, s.call(this, c, n), m.apply(this, [!0, c, r]))
                    };
                return {
                    _Init: function(t) {
                        var s, a = this._Opts = n(!0, {}, e, t);
                        this._Types = {}, (s = a.Types) && u.call(this, s)
                    },
                    add: function() {
                        var t = o.slice.call(arguments);
                        return t.unshift(!0), h.apply(this, t), this
                    },
                    once: function(t, e) {
                        return m.call(this, !0, t, {
                            handler: e,
                            once: !0
                        }), this
                    },
                    remove: function() {
                        var t = o.slice.call(arguments);
                        t.unshift(!1), h.apply(this, arguments)
                    },
                    fire: function(t, e, s) {
                        var a, n, o, c, l, m, h = this._Types;
                        if (!this._disabled && !i(a = h[t], "undefined")) {
                            if (Array.isArray(n = a.Handlers)) {
                                o = a.handlerParams, s = s || null, e = e || [], Array.isArray(e) || e.hasOwnProperty("callee") || (e = [e]);
                                for (var u = 0; u < n.length; u++) n[u].apply(s, e), o[u].once && (r.call(this, a, u), u--)
                            }
                            a.fired = !0, (c = a.History) && (a.History.push({
                                context: s,
                                args: e
                            }), (l = c.maxLength) && (m = c.length) > l && c.splice(0, m - l))
                        }
                    },
                    _disable: function() {
                        this._disabled = !0, this._Opts.Expandable = !1
                    },
                    _destroy: function() {
                        this._disable(), delete this._Types
                    },
                    _addTypes: function(t) {
                        t && this._Opts.Expandable === !0 && u.call(this, t)
                    }
                }
            }()),
            l = {
                Tools: {
                    Callbacks: c
                },
                Methods: {
                    initCallbacks: s,
                    registerEventTypes: a
                }
            };
        n(!0, e, l), n(!0, t.getNameSpace("Comp", e), l)
    }(this, this.ru.mail.cpf),
    function(t, e) {
        function s(t, e) {
            return c(function(s, a) {
                t ? i(e, "object") && i(e.then, "function") ? e.then(s, a) : s(e) : a(e)
            })
        }
        var a = e.Tools,
            r = a.Callbacks,
            n = e.Basic,
            i = n.typeOf,
            o = n.Extend,
            c = function() {
                function t(t, e) {
                    i(e, "function") && this.add(l(t), e)
                }

                function e(t, e) {
                    i(e, "boolean") && setTimeout(function() {
                        this.fire(l(e), t), this._disable()
                    }.bind(this), 0)
                }

                function s(t, e) {
                    return function() {
                        var s;
                        try {
                            s = e.apply(this, arguments)
                        } catch (a) {
                            return console.error("Uncaught (in promise): " + a.stack), void t.reject(a)
                        }
                        i(s, "object") && i(s.then, "function") ? s.then(function(e) {
                            t.resolve(e)
                        }, function(e) {
                            t.reject(e)
                        }) : t.resolve(s)
                    }
                }
                var a = ["resolve", "reject"],
                    n = ["rejected", "resolved", "pending"],
                    l = function(t) {
                        return i(t, "boolean") ? a[t ? 0 : 1] : a.join(" ")
                    };
                return function(l) {
                    function m(t, s) {
                        return e.call(this, Array.prototype.slice.call(arguments, 2), s), p = n[s ? 1 : 0], t
                    }

                    function h(e, s) {
                        return t.call(this, e, s), d || u
                    }
                    var u, d, f = r({
                            Types: a,
                            Memory: !0,
                            Once: !0
                        }),
                        p = n[2];
                    return u = {}, u = o(u, {
                        done: h.bind(f, !0),
                        fail: h.bind(f, !1),
                        then: function() {
                            for (var e, a, r, n = c(), o = 0; 2 > o; o++) r = 0 === o, e = arguments[o], a = i(e, "function") ? s(n, e) : n[r ? "resolve" : "reject"], t.call(f, r, a);
                            return n
                        },
                        "catch": function(t) {
                            return u.then(null, t)
                        },
                        always: h.bind(f, null),
                        state: function() {
                            return p
                        },
                        promise: function(t) {
                            if (i(t, "object"))
                                for (var e in u) u.hasOwnProperty(e) && (t[e] = u[e]);
                            else t = u;
                            return t
                        },
                        progress: function() {}
                    }), i(l, "function") ? l.call(u, m.bind(f, null, !0), m.bind(f, null, !1)) : (d = u.promise({}), o(!0, d, {
                        resolve: m.bind(f, d, !0),
                        reject: m.bind(f, d, !1),
                        destroy: function() {
                            f._destroy()
                        }
                    })), d || u
                }
            }(),
            l = function() {
                function t() {
                    var t = Array.prototype.slice.call(arguments),
                        e = t.splice(0, 2),
                        s = e[0];
                    s[e[1]] = t[0], 0 === --this.length && this.promise.resolve.apply(null, s)
                }

                function e() {
                    this.promise.reject()
                }
                return function() {
                    for (var s, a, r = c(), n = {
                            length: arguments.length,
                            promise: r
                        }, o = [], l = n.length; l--;) s = arguments[l], s && (s.done && i(s.done, "function") || (a = s.then && i(s.then, "function"))) ? a ? s.then(t.bind(n, o, l), e.bind(n)) : s.done(t.bind(n, o, l)).fail(e.bind(n)) : (o[l] = s, n.length--);
                    return 0 === n.length && r.resolve.apply(null, o), r
                }
            }();
        c.all = function(t) {
            return c(function(e, s) {
                if (!Array.isArray(t)) return s(new TypeError("Invalid argument type"));
                var a = t.length,
                    r = [];
                t.forEach(function(t, n) {
                    try {
                        t.then(function(t) {
                            r[n] = t, 0 === --a && e(r)
                        }, s)
                    } catch (i) {
                        return new TypeError("Invalid argument type")
                    }
                })
            })
        }, c.resolve = s.bind(null, !0), c.reject = s.bind(null, !1), c.when = l;
        var m = {
            Promise: c,
            Deferred: c
        };
        o(!0, a, m), o(!0, t.getNameSpace("Comp.Tools", e), m), "Promise" in t && i(t.Promise, "function") || (t.Promise = function(t) {
            if (i(t, "function")) return c(t);
            throw new TypeError("Promise resolver undefined is not a function")
        }, o(t.Promise, c))
    }(this, this.ru.mail.cpf),
    function(t, e, s) {
        "use strict";

        function a() {
            return document.body
        }

        function r(t) {
            var s = {
                top: 0,
                left: 0
            };
            return t && "function" == typeof t.get && "function" == typeof t.eq && (t = t.get(0)), t !== document.body && t ? (s.top = t.scrollTop, s.left = t.scrollLeft) : (s.top = e.pageYOffset || o.scrollTop || a().scrollTop, s.left = e.pageXOffset || o.scrollLeft || a().scrollLeft), s
        }

        function n(t, e) {
            if (t) {
                var s = a();
                e && "function" == typeof e.get && "function" == typeof e.eq && (e = e.get(0)), isNaN(t.top) || (e && e !== s ? e.scrollTop = t.top : o.scrollTop = s.scrollTop = t.top), isNaN(t.left) || (e && e !== s ? e.scrollLeft = t.left : o.scrollLeft = s.scrollLeft = t.left)
            }
        }

        function i(e) {
            "function" == typeof e.get && "function" == typeof e.eq && (e = e.get(0));
            var s = e.getBoundingClientRect();
            return {
                left: s.left,
                top: s.top,
                width: s.width || t(e).width(),
                height: s.height || t(e).height()
            }
        }
        var o = document.documentElement;
        s.Basic.Extend(!0, s, {
            Tools: {
                Layout: {
                    getScroll: r,
                    setScroll: n,
                    getClientRect: i
                }
            }
        })
    }(this.jQuery || this.$ || this.$f, this, this.ru.mail.cpf),
    function(t, e) {
        "use strict";

        function s(t) {
            var e = {},
                s = function() {
                    var s = Array.prototype.slice.call(arguments, 0),
                        a = e[t.apply(this, s)];
                    return a ? a.apply(this, s) : null
                };
            return s.method = function(t, s) {
                return e[t] = s, this
            }, s
        }

        function a(t) {
            var e = t.length,
                s = function(t, e) {
                    return function() {
                        return e.apply(void 0, t.concat(Array.prototype.slice.call(arguments, 0)))
                    }
                },
                a = function() {
                    var r = Array.prototype.slice.call(arguments, 0);
                    return r.length < e ? s(r, a) : t.apply(void 0, Array.prototype.slice.apply(arguments, [0, e]))
                };
            return a
        }

        function r(t, e) {
            var s = Array.prototype.slice.call(arguments, 2);
            return t.map(function(t) {
                return "undefined" == typeof t || null === t ? null : "function" == typeof t[e] ? t[e].apply(t, s) : null
            })
        }

        function n(t, e) {
            return t.map(function(t) {
                return "undefined" != typeof t && null !== t ? t[e] : void 0
            })
        }
        var i = e.Basic.Extend;
        i(!0, e, {
            Tools: {
                FuncTools: {
                    multi: s,
                    curry: a,
                    invoke: r,
                    pluck: n
                }
            }
        })
    }(this, this.ru.mail.cpf),
    function(t, e, s) {
        "use strict";

        function a(t, e) {
            var s = S[t.type],
                a = s && s.hitCntr;
            _(a, "function") && a(t.params, e)
        }

        function r(t) {
            var e = w[t];
            if (e) {
                var s = e.promise,
                    a = e.url;
                return !s && a && (e.promise = s = v().promise(), b({
                    url: a,
                    type: "GET",
                    success: function(t) {
                        s.done(t), e.contents = j(t)
                    },
                    error: function(e) {
                        s.fail(), e && 404 == e.status && (w[t] = null)
                    },
                    complete: function() {
                        e.promise = null
                    }
                })), s
            }
        }

        function n() {
            var t, e, s, a, n, i, o, c, l, m, h = arguments;
            if (a = n = !1, h.length) {
                switch (_(l = h[0])) {
                    case "string":
                        h.length > 1 ? l in S && _(s = h[1], "object") && (n = !0, (c = []).push({
                            type: l,
                            params: s
                        })) : f.test(l) ? (a = !0, t = l) : e = l;
                        break;
                    case "array":
                        n = !0, c = l;
                        break;
                    default:
                        return
                }
                if (n && c.length)
                    for (var u = 0; u < c.length; u++) m = c[u], _(m, "object") && T(o = m.type, s = m.params) ? m.params = P(o, s) : c.splice(u--, 1);
                return (a && t || n && c.length || e) && (i = w.push({
                    url: a ? t : null,
                    contents: a ? null : n ? c : j(e)
                }) - 1, a && r(i)), i
            }
        }

        function i(t) {
            var e;
            return !(!(e = w[t]) || !e.contents)
        }

        function o(t, e) {
            var s = w[t];
            s && v.when(i(t) || r(t)).done(function() {
                E(s, e)
            })
        }

        function c(t, e, s, a) {
            var r;
            if (r = w[t]) {
                for (var n, i, o = r.contents, c = null, l = o.length; l--;)
                    if (o[l].type === e) {
                        c = o[l];
                        break
                    }
                null !== c && (n = S[c.type], i = n && n.hitEvent, _(i, "function") && i(c.params, s, a))
            }
        }
        var l = e.getNameSpace,
            m = s.Types.String,
            h = m.Html,
            u = m.Url,
            d = m.regExp,
            f = d.Url,
            p = h.Split,
            g = h.getParams,
            y = s.Basic,
            _ = y.typeOf,
            v = s.Tools.Promise,
            b = t.ajax || s.DOM.Tools.Ajax.request,
            x = s.Basic.Extend,
            w = [],
            k = function(t) {
                (new Image).src = t
            },
            C = function(t) {
                k(t.src)
            },
            S = function(t, s) {
                var a = e.screen,
                    r = s.URL;
                return {
                    admail: {
                        rqdPrms: "id",
                        hitCntr: function(t) {
                            var e = location.protocol + "//ad.mail.ru/${id}.gif";
                            C({
                                src: m.supplant(e, t)
                            })
                        },
                        hitEvent: function() {}
                    },
                    radar: function() {
                        var t = "//stat.radar.imgsmail.ru/update?t=${name}&p=${project}&v=${value}&i=${info}&rnd=${rnd}",
                            e = function(e) {
                                e.info = Object.keys(e.info).map(function(t) {
                                    return t + ":" + e.info[t]
                                }).join(","), e.info = encodeURIComponent(e.info), C({
                                    src: m.supplant(t, e)
                                })
                            };
                        return {
                            rqdPrms: "project",
                            hitCntr: function(t, s) {
                                var a, r = (new Date).valueOf();
                                s && s.promise && s.promise.then && (a = s.promise, delete s.promise), s = x({}, t, s), s.name = encodeURIComponent(s.name), s.value = encodeURIComponent(s.value || 0), s.info = _(s.info, "object") ? s.info : {}, s.rnd = Math.random(), a ? a.then(function() {
                                    s.info.success = (new Date).valueOf() - r, s.info.success = (new Date).valueOf() - r, e(s)
                                }, function() {
                                    s.info.error = (new Date).valueOf() - r, e(s)
                                }) : e(s)
                            }
                        }
                    }(),
                    topmail: function() {
                        function s() {
                            var t = e._tmr;
                            return t && _(t.push, "function") ? t : null
                        }
                        return {
                            domain: "*.top.mail.ru",
                            rqdPrms: ["id", function(t) {
                                return null !== s() || "domain" in t
                            }],
                            hitCntr: function(e, n) {
                                var i = n && n.referrer || r,
                                    o = n && n.url,
                                    c = s();
                                if (null !== c) c.push({
                                    id: e.id,
                                    type: "pageView",
                                    url: o,
                                    referrer: i,
                                    start: (new Date).getTime()
                                });
                                else {
                                    var l = ["//" + e.domain + "/counter?id=" + e.id + ";js=13", o ? ";u=" + encodeURIComponent(o) : "", "undefined" != typeof t.javaEnabled ? ";j=" + t.javaEnabled() : "", i ? ";r=" + encodeURIComponent(i) : "", a ? ";s=" + a.width + "*" + a.height + ";d=" + (a.colorDepth || a.pixelDepth) : "", ";_=" + Math.random()].join("");
                                    k(l)
                                }
                            },
                            hitEvent: function(t, e) {
                                var a = s();
                                null !== a && a.push(x({}, t, e))
                            }
                        }
                    }(),
                    rbmail: {
                        rqdPrms: "src|id",
                        nrmlzPrms: function(t) {
                            var e = location.protocol + "//rs.mail.ru/${type}${id}.gif";
                            return t.type = t.type || "d", t.src || (t.src = m.supplant(e, t)), t
                        },
                        hitCntr: function(t, e) {
                            var s = e && Object.keys(e).map(function(t) {
                                return t + "=" + e[t]
                            }).join("&");
                            s && (t = x({}, t), t.src += "?" + s), C(t)
                        },
                        domain: "rs.mail.ru"
                    },
                    comscore: {
                        rqdPrms: "src|id",
                        hitCntr: function(t, e) {
                            var a = e && e.referrer || r,
                                n = e && e.url,
                                i = ["http" + ("s" == s.URL.charAt(4) ? "s://sb" : "://b"), ".scorecardresearch.com/b?c1=2", "&c2=" + t.id, "&ns__t=" + (new Date).getTime(), "&ns_c=" + (s.characterSet || s.defaultCharset || ""), "&c7=" + encodeURIComponent(n), "&c9=" + encodeURIComponent(a)].join("");
                            k(i)
                        }
                    },
                    tns: {
                        rqdPrms: "src",
                        hitCntr: C,
                        domain: "www.tns-counter.ru"
                    },
                    yaru: {
                        rqdPrms: "id",
                        hitCntr: function(t, s) {
                            var a, n, i, o = e["yaCounter" + t.id];
                            o && (s && (a = s.url, n = s.title, i = s.referrer), i = i || r, o.hit(a, n, i))
                        }
                    },
                    googl: function() {
                        function t(t) {
                            var e = t.shift().split("."),
                                s = e.length > 1 && e[0],
                                a = e.pop();
                            switch (a) {
                                case "_setAccount":
                                    o("create", t.shift(), {
                                        name: s
                                    }), t = null;
                                    break;
                                case "_set":
                                    e.push("set"), t.unshift(e.join("."));
                                    break;
                                case "_trackPageview":
                                    e.push("send"), t.unshift(e.join("."), "pageview");
                                    break;
                                case "_setReferrerOverride":
                                    e.push("set"), t.unshift(e.join("."), "referrer");
                                    break;
                                case "_trackEvent":
                                    e.push("send"), t.unshift(e.join("."), "event")
                            }
                            null !== t && o.apply(null, t)
                        }

                        function s() {
                            var s, a = e._gaq;
                            if (o = e.ga, _(o, "function")) {
                                if (s = {
                                        push: t
                                    }, Array.isArray(a))
                                    for (var r = 0; r < a.length; r++) t(a[r])
                            } else s = e._gaq = a || [];
                            return s
                        }

                        function a() {
                            return "mrga" + c++
                        }

                        function n(t) {
                            var e, r = s();
                            return _(i, "object") ? e = i[t] : i = {}, e || (e = a(), i[t] = e, r.push([e + "._setAccount", t])), e
                        }
                        var i, o = e.ga,
                            c = 0;
                        return {
                            rqdPrms: "id",
                            hitCntr: function(t, e) {
                                var a = s(),
                                    i = n(t.id) || t.name || e && e.name,
                                    o = e && e.referrer || r;
                                o && a.push([i + "._setReferrerOverride", o]), a.push([i + "._trackPageview", e && e.url])
                            },
                            hitEvent: function(t, e, a) {
                                var r = s(),
                                    i = n(t.id) || t.name,
                                    o = i + "._trackEvent";
                                e.unshift(o), "function" == _(a) && r.push([i + "._set", "hitCallback", a]), r.push(e)
                            }
                        }
                    }(),
                    liru: {
                        hitCntr: function(t, e) {
                            var n = e && e.referrer || r,
                                i = t && t.domain ? t.domain : "counter.yadro.ru",
                                o = ["/hit"],
                                c = t.personal;
                            c && o.push(c);
                            var l = ["//" + i + o.join(";"), "?r" + encodeURIComponent(n), _(a, "undefined") ? "" : ";s" + a.width + "*" + a.height + "*" + (a.colorDepth || a.pixelDepth), ";u" + encodeURIComponent(e && e.url || s.URL) + ";" + Math.random()].join("");
                            k(l)
                        },
                        domain: "counter.yadro.ru"
                    }
                }
            }(navigator, document),
            T = function() {
                var t = function(t, e) {
                    var s, a, r = !1;
                    if (_(t, "function")) r = t(e);
                    else
                        for (s = t.split("|"), a = 0;
                            (t = s[a++]) && !(r = e.hasOwnProperty(t)););
                    return r
                };
                return function(e, s) {
                    var a, r, n, i, o = e in S;
                    if (o && (n = S[e], o = !("rqdPrms" in n)), !o)
                        if (i = S[e].rqdPrms, Array.isArray(i))
                            for (a = 0;
                                (r = i[a++]) && (o = t(r, s)););
                        else o = t(i, s);
                    return o
                }
            }(),
            P = function(t, e) {
                var s = S[t],
                    a = s && s.nrmlzPrms;
                return _(a, "function") && (e = a(e)), e
            },
            j = function() {
                var t = "mr_counter",
                    e = function() {
                        var t = "//",
                            e = /(\?|\/)/i;
                        return function(s) {
                            var a, r, n, i, o;
                            for (var c in S)
                                if (S.hasOwnProperty(c) && (o = S[c].domain) && (i = (a = "*" != o.charAt(0)) ? o : o.substr(1), r = s.indexOf(i), n = s.indexOf(t) + t.length, r > 0 && (a ? r == n : !e.test(s.slice(n, r))))) return c
                        }
                    }(),
                    s = function() {
                        var e = ["tagName", t, "type"];
                        return function(t) {
                            for (var s, a = 0; s = e[a++];) delete t[s];
                            return t
                        }
                    }();
                return function(a) {
                    var r, n, i, o, c, l, m, h, u, d = null,
                        f = !1;
                    if ((r = p(a)).length)
                        for (i = [], n = -1; o = r[++n];) c = o.substr(0, o.indexOf(">") + 1), l = g(c), "!--" == l.tagName ? l.hasOwnProperty(t) ? (f = !0, d = n, m = l.type, h = s(l)) : f && l.hasOwnProperty("/" + t) && (f = !1, u = r.slice(d + 1, n).join("")) : f || "img" == l.tagName && l.hasOwnProperty("src") && (m = e(l.src)) && (h = s(l)), !f && h && (m in S && (T(m, h) || u && T(m, h)) && (d ? (r.splice(d, n - d + 1), n = d) : r.splice(n, 1), n--, i.push({
                            type: m,
                            params: P(m, h)
                        })), d = u = h = null);
                    return i
                }
            }(),
            E = function() {
                var t = {
                        "referrer,url": u.getAbs
                    },
                    e = function(e) {
                        var s, a, r;
                        if (_(e, "object"))
                            for (var n in t)
                                if (t.hasOwnProperty(n) && _(r = t[n], "function")) {
                                    s = n.split(/,\s?/);
                                    for (var i = s.length; i--;) e.hasOwnProperty(a = s[i]) && (e[a] = r(e[a]))
                                }
                    };
                return function(t, s) {
                    var r, n = t.contents,
                        i = 0;
                    for (s && e(s); r = n[i++];) a(r, s)
                }
            }();
        x(l("Instances", s), {
            cntrsCtrl: {
                add: n,
                hit: o,
                hitEvent: c
            }
        })
    }(this.jQuery || this.$ || this.$f, this, this.ru.mail.cpf),
    function(t, e, s) {
        "use strict";
        var a = ".js-counters",
            r = s.Instances.cntrsCtrl,
            n = s.Basic,
            i = n.typeOf,
            o = function() {
                function s(t) {
                    for (var e, s = i(t, "string") ? t.split(",") : t, a = s.length; a--;) e = s[a], e in m && (s[a] = m[e]);
                    return s
                }

                function n(t) {
                    var s = "",
                        a = e.querySelectorAll(t);
                    return Array.prototype.forEach.call(a, function(t) {
                        s += t.innerHTML
                    }), s ? l[t] = r.add(s) : void 0
                }

                function o(t, e) {
                    e = e || a;
                    var s = l[e] || n(e);
                    isNaN(s) || r.hit(s, t)
                }

                function c(t, e, i, o) {
                    o = o || a;
                    var c, m = l[o] || n(o);
                    isNaN(m) || (c = s(e), r.hitEvent(m, t, c, i))
                }
                var l = {},
                    m = function(e) {
                        var s = t.location;
                        return {
                            "{url}": e.URL,
                            "{relurl}": s.pathname + s.search,
                            "{form}": "Заполнение формы",
                            "{click}": "Клик",
                            "{bclick}": "Клик по баннеру"
                        }
                    }(t.document);
                return {
                    hitCntrsBlck: o,
                    hitEvent: c
                }
            }();
        n.Extend(t.getNameSpace("Tools.Counters", s), o), n.Extend(t.getNameSpace("Comp.jQuery.Tools", s), o)
    }(window, window.document, window.ru.mail.cpf),
    function(t, e, s) {
        function a(t, s, r) {
            var n, o = T.total.ids,
                c = T.total.times,
                l = !1;
            r !== i(s) ? P() : (n = o.indexOf(t), ~n ? c[n] += T.period : (o.push(t), c.push(0), n = c.length - 1, l = !0), s.cumulative && !l ? t({
                value: c[n] / 1e3
            }) : s.cumulative || t({
                goal: (l ? "v_" : "t_") + location.pathname.replace(/\/$/, ""),
                value: l ? 1 : T.period / 1e3
            }), T.tm = e.setTimeout(a.bind(null, t, s, r), T.period))
        }

        function r(t, s) {
            var r = t.counters[s];
            T.active !== r && (T.active = r, e.clearTimeout(T.tm), a(r, t, s))
        }

        function n() {
            T.active = null, e.clearTimeout(T.tm)
        }

        function i(t) {
            var s, a, r, n, i, o = S.getScroll().top,
                c = o + e.innerHeight / 2,
                l = S.getClientRect(t.elem);
            if (l.height && l.width)
                for (i = t.counters.length - 1 || 1, a = l.height / i, s = l.top + o; i--;)
                    if (r = s + a * i, n = s + a * (i + 1), c >= r && n >= c) return i;
            return -1
        }

        function o() {
            if (T.isWindowActive) {
                var t, e = T.blocks.slice();
                e.reverse(), t = e.some(function(t) {
                    var e = i(t);
                    return ~e && r(t, e), ~e
                }), t ? E() : n()
            }
        }

        function c(t, s) {
            var a = Array.isArray(t) ? t[s] : t,
                r = "rnd=" + (Math.random() + "").substr(2);
            a ? (new Image).src = [a, r].join(-1 === a.indexOf("?") ? "?" : "&") : e.DEBUG && console.log("Попытка запроса отсутствующего rb-счетчика")
        }

        function l(t, s, a) {
            var r, n, i, o, l = a.jElem[0],
                m = a.counterParam,
                h = a.checkPos,
                u = !(0 === l.offsetWidth && 0 === l.offsetHeight),
                d = Array.isArray(m) && m.length || 1,
                f = d > 1,
                p = !1,
                g = 0;
            if (u)
                if (h) {
                    var y = l && l.ownerDocument,
                        _ = y.documentElement,
                        v = l.getBoundingClientRect();
                    r = v.top + (e.pageYOffset || _.scrollTop) - (_.clientTop || 0), n = t.top, i = t.top + s.height;
                    for (var b = d; b--;) f && null === m[b] ? g++ : (o = r, f && (o += l.offsetHeight / (d - 1) * b), o > n && i > o && (w(m[b], "function") ? m[b]({
                        rnd: Math.random()
                    }) : c(m, b), f && (m[b] = null), g++));
                    p = g === d
                } else p = !0, c(m, 0);
            return p
        }

        function m(t, e, s) {
            var a = 0;
            if (s) return l.apply(null, arguments);
            if (y && y.length)
                for (; s = y[a++];) l.call(null, t, e, s) === !0 && y.splice(--a, 1)
        }

        function h() {
            m({
                top: e.pageYOffset,
                left: e.pageXOffset
            }, {
                width: e.innerWidth,
                height: e.innerHeight
            }), P()
        }

        function u(t, s) {
            var a, r = this;
            t && (a = {
                jElem: r,
                counterParam: t,
                checkPos: s
            }, m({
                top: e.pageYOffset,
                left: e.pageXOffset
            }, {
                width: e.innerWidth,
                height: e.innerHeight
            }, a) !== !0 && (y.push(a), _ || (d(), _ = !0)))
        }

        function d() {
            t(e).on("scroll resize", function() {
                T.isWindowActive = !0, h()
            }).on("blur", function() {
                n(), T.isWindowActive = !1
            }).on("focus", function() {
                T.isWindowActive = !0, P()
            }).on("click touchstart keydown mousemove", function() {
                T.isWindowActive = !0, j()
            })
        }
        var f, p, g, y = [],
            _ = !1,
            v = "//rs.mail.ru/d",
            b = /,\s?/g,
            x = s.Basic.moduleOpts,
            w = s.Basic.typeOf,
            k = "rbmail",
            C = s.Basic.Extend,
            S = s.Tools.Layout,
            T = {
                blocks: [],
                active: null,
                tm: null,
                total: {
                    ids: [],
                    times: []
                },
                period: 5e3,
                isWindowActive: !0
            },
            P = s.Basic.debounce(o, 500),
            j = s.Basic.throttle(o, 500),
            E = s.Basic.debounce(function() {
                n(), T.isWindowActive = !1
            }, 3e4);
        t.fn.initVisibleCounter = function(e, s) {
            return this.each(function() {
                u.call(t(this), e, s)
            })
        }, t.fn.initScrollCounter = function(e, s) {
            return this.each(function() {
                var a = t(this),
                    r = a[0].getAttribute(e);
                if (r) {
                    var n = r.split(b);
                    s === !0 && (n = n.map(function(t) {
                        return t ? [v, t, ".gif"].join("") : ""
                    })), 1 === n.length && (n = n.pop()), u.call(a, n, !0)
                }
            })
        }, x.setParams("TrackBlocks", {
            initializer: function(t, e, a, r) {
                if (f = f || s.Instances.cntrsCtrl.add, p = p || s.Instances.cntrsCtrl.hit, g = g || s.Instances.cntrsCtrl.hitEvent, t.counters && (w(t.counters, "string") && (t.counters = t.counters.split(/\s*,\s*/).map(function(t) {
                        return {
                            id: t
                        }
                    })), w(t.counters, "array"))) {
                    var n, i;
                    n = t.counters.map(function(s) {
                        return p.bind(e, f(t.counterType || k, s))
                    }), u.call(e, n, !0), "topmail" === t.counterType && t.duration && (i = t.counters.map(function(s) {
                        var a = {
                                type: "reachGoal",
                                goal: location.pathname.replace(/\/$/, "")
                            },
                            r = f(t.counterType || k, C(a, s));
                        return g.bind(e, r, t.counterType || k)
                    }), T.blocks.push({
                        elem: e,
                        cumalative: !!t.cumulative,
                        counters: i
                    }), P())
                }
            },
            paramAttrs: {
                counters: "data-counter-id",
                counterType: "data-counter-type"
            },
            options: {
                duration: !0
            }
        })
    }(this.jQuery || this.$ || this.$f, this, ru.mail.cpf),
    function(t, e, s) {
        var a = t(e),
            r = t(e.document);
        s.Basic.Extend(e.getNameSpace("Comp.jQuery", s), function() {
            var e = {
                Elems: {
                    jBody: null,
                    jDoc: r,
                    jWindow: a
                }
            };
            return t(function() {
                e.Elems.jBody = t("body")
            }), e
        }())
    }(jQuery, window, window.ru.mail.cpf),
    function(t, e, s) {
        var a = e.getNameSpace,
            r = s.Basic,
            n = r.typeOf,
            i = Array.prototype,
            o = a("Comp.jQuery", s);
        r.Extend(o, function() {
            function e(s, a, r) {
                var i, o, c, l, m, h, u = /^in/i;
                r = r || {};
                for (var d in s) s.hasOwnProperty(d) && (i = s[d], c = n(i), "string" == c && i.length ? (l = "j" + d.substr(0, 1).toUpperCase() + d.substr(1), r[l] = (m = a.find(i)).length ? m : a.is(i) ? a : null) : "object" == c && (o = "j" + d.replace(u, ""), h = r[o], h instanceof t && h.length && e(i, h, r)));
                return r
            }
            var a = function() {
                    var t, e = o.Elems.jWindow,
                        a = ["scroll", "resize"],
                        r = function() {
                            var r, o = s.Comp.Tools.Callbacks,
                                c = arguments,
                                l = n(c[0], "boolean") ? i.shift.apply(c) : !0;
                            if (n(o, "function") && (l && n(t, "undefined") && (t = o({
                                    Types: a
                                }), e.bind(a.join(" "), function(s) {
                                    var a = s.type;
                                    t.fire(a, [{
                                        top: e.scrollTop(),
                                        left: e.scrollLeft()
                                    }, {
                                        height: e.height(),
                                        width: e.width()
                                    }, a])
                                })), !n(t, "undefined")))
                                for (var m = 0; m < a.length; m++) r = arguments[m], n(r, "undefined") && (r = arguments[m - 1]), n(r, "function") && t[l ? "add" : "remove"](a[m], r)
                        };
                    return {
                        attach: r,
                        detach: function() {
                            i.unshift.call(arguments, !1), r.apply(null, arguments)
                        }
                    }
                }(),
                r = function(t, e, s) {
                    e = e || {};
                    var a, r, n, i;
                    for (var o in t) t.hasOwnProperty(o) && (a = t[o]) && a.length && (r = a.is("input, select, textarea") ? "val" : "html", i = s && o in s ? s[o] : o, (n = e[i]) ? a[r](n) : e[i] = a[r]());
                    return e
                },
                c = {
                    Tools: {
                        getElements: e,
                        winHndlrs: a,
                        toggleElemsVal: r
                    }
                };
            return c
        }())
    }(jQuery, window, window.ru.mail.cpf),
    function(t, e, s) {
        var a = ".js-track_click",
            r = "data-params",
            n = s.Tools.Counters.hitEvent;
        t(e.document).on("click", a, function(e) {
            var s = t(e.currentTarget),
                a = s.attr(r) || "",
                i = a && a.split(",");
            i && (i.length < 3 && i.unshift("{click}"), i.length > 1 && n("googl", i))
        })
    }(this.jQuery, this, this.ru.mail.cpf),
    function(t, e) {
        function s(t) {
            var e = t.match(m);
            return null !== e && e[1]
        }

        function a(t) {
            var e, a, r, n = s(t),
                i = null;
            if (n)
                for (var c in u)
                    if (u.hasOwnProperty(c)) {
                        e = u[c], a = e.exts;
                        for (var l = 0; l < a.length; l++)
                            if (o(r = a[l], "string") && h.test(r) && (a[l] = r = new RegExp("^" + r + "$", "i")), o(r, "string") ? r === n : r.test(n)) {
                                i = c;
                                break
                            }
                    }
            return i
        }

        function r(t, e) {
            var s, a, r, n;
            return e = isNaN(e) || null === e ? 5e3 : e, r = l(), n = function() {
                clearTimeout(s), a.onload = a.onerror = null, r.reject()
            }, a = new Image, a.onload = function() {
                clearTimeout(s), r.resolve(a)
            }, a.onerror = n, s = setTimeout(n, e), a.src = t, setTimeout(function() {
                a.complete && r.resolve(a)
            }, 0), r.promise()
        }

        function n(t) {
            return t in u
        }
        var i = e.Basic,
            o = i.typeOf,
            c = i.Extend,
            l = e.Comp.Tools.Deferred,
            m = /\.([a-z]{3,4})$/i,
            h = /[^a-z]/i,
            u = {
                flash: {
                    exts: ["swf"],
                    canPreload: !1
                },
                pic: {
                    exts: ["jpe?g", "png", "gif"],
                    canPreload: !0
                }
            };
        c(t.getNameSpace("Tools.Images", e), {
            preloadImage: r,
            canPreload: function(t) {
                return n(t) && u[t].canPreload === !0
            },
            isTypeCorrect: n,
            getImageTypeFromUrl: a,
            _addTypes: function(t) {
                var e;
                for (var s in t) t.hasOwnProperty(s) && (e = t[s], o(e, "object") && e && (u[s] = c(!0, {}, e)))
            }
        })
    }(this, this.ru.mail.cpf),
    function(t, e) {
        function s(t) {
            e.Methods.registerEventTypes.call(this, {
                Types: t
            })
        }

        function a(t, e, s) {
            var a, n;
            return "_bindHandlerSet" in this ? a = this._bindHandlerSet._Sets : (a = {}, this._bindHandlerSet = r.bind(this, a), this._bindHandlerSet._Sets = a), n = a[t] = a[t] || {}, k.indexOf(e[0]) < 0 && e.unshift("dom"), n[e.join(":")] = s, a
        }

        function r(t, e) {
            var s = t[e];
            g(s, "object") && i.call(this, s, null, e)
        }

        function n(t, e) {
            return t.add(e).not(t)
        }

        function i(s, r, o) {
            var c, l, m, h, u, d, f, p, y, _ = this._opts,
                v = this._elems,
                x = _.cssSels,
                w = e.Tools.PubSub;
            for (var C in s)
                if (s.hasOwnProperty(C)) {
                    if (f = s[C], p = g(f), r && (C = [r, C].join(":")), c = C.split(":"), "opts" === c[0] && (c = b(c[1], _).split(":").concat(c.slice(2)), C = c.join(":")), l = k.indexOf(c[0]) > -1 ? c.shift() : k[0], m = c.shift(), "set" === l) {
                        a.call(this, m, c, f);
                        continue
                    }
                    switch (p) {
                        case "string":
                            y = this[f];
                            break;
                        case "function":
                        case "array":
                            y = f;
                            break;
                        case "object":
                            i.call(this, f, C, o);
                            continue;
                        default:
                            continue
                    }
                    if (g(y, "function")) y = y.bind(this);
                    else {
                        if (!Array.isArray(y) || "dom" === l) continue;
                        for (var S, T = y.length; T--;) S = y[T], g(S, "string") && (S = this[S]), g(S, "function") ? y[T] = S.bind(this) : y.splice(T, 1);
                        if (y.length < 1) continue
                    }
                    switch (u = h = null, l) {
                        case k[0]:
                            d = this;
                            break;
                        case k[1]:
                            if ("_elems" in this) {
                                switch (h = c.shift(), h && "$" === h.charAt(0) && (c.push(h.substr(1)), h = "document"), h) {
                                    case "document":
                                        d = n(v.parent, t.document), h = c.shift();
                                        break;
                                    case "window":
                                        d = n(v.parent, t), h = c.shift();
                                        break;
                                    default:
                                        d = o && v[o] || v.parent
                                }
                                h && (h = h.split("."), u = b(h, x), (g(u, "undefined") || u === !1) && (d = null))
                            }
                            break;
                        case k[2]:
                            d = this._model;
                            break;
                        case k[4]:
                            w && ("function" == typeof y && (y = [y]), s[m] = [], y.forEach(function(t) {
                                s[m].push(w.subscribe(m, t))
                            }, this))
                    }
                    d && (g(u, "string") && u.length ? d.on(m, u, y) : d.on(m, y))
                }
        }

        function o(t, e) {
            var s;
            return g(t, "function") && (s = t.prototype) && ("_Init" in e || (e._Init = null), e = y(Object.create(s), e), e._parent = s, e._Parent = s), e
        }

        function c(t, e, s, a) {
            var r;
            return !g(t, "string") || s[e] && s[e].length || (r = a.find(t).add(a.filter(t)), s[e] = r && r.length > 0 ? r : null), s[e]
        }

        function l(t, e, s) {
            var a, r = this._elems || {
                parent: e
            };
            if (r.Parent = r.parent, e = e || r.parent, g(t, "string")) return g(e, "string") && (s = e, e = r.parent), c(t, s, r, e);
            if (a = t)
                for (var n in a) a.hasOwnProperty(n) && c(a[n], n, r, e);
            return r
        }

        function m(t, e) {
            return null !== e && (!g(e, "object") || t.name in e && null !== e[t.name])
        }

        function h(t) {
            var e, s = this._opts._plugins,
                a = [],
                r = [];
            Array.isArray(s) && (s = s.reduce(function(t, e) {
                return t[e] = !0, t
            }, {}));
            for (var n = 0; n < t.length; n++) e = t[n], m(e, s) && (g(e.methods) && Object.keys(e.methods).forEach(function(t) {
                var s, a = e.methods[t],
                    r = this[t];
                s = g(r, "function") ? function() {
                    var t, e = this._super;
                    return this._super = r, t = a.apply(this, arguments), e ? this._super = e : delete this._super, t
                } : a, this[t] = s
            }.bind(this)), g(e._Handlers, "object") && a.push(e._Handlers), "_Events" in e && this._addEventTypes(e._Events), g(e._Init, "function") && r.push(e._Init));
            for (var o = 0; o < a.length; o++) i.call(this, a[o]);
            return r
        }

        function u() {
            var t = this.constructor.prototype,
                e = [];
            do t.hasOwnProperty("_Plugins") && (e = t._Plugins.concat(e)); while (t = t._parent);
            return e
        }

        function d(t, e, a, r, n, o, c) {
            function l(t) {
                return !isNaN(t.length) && g(t.find, "function")
            }
            var d = e._Init;
            e._Init = function() {
                var f, p, v, b, w, k, C, S, T, P, j = Array.prototype.slice.call(arguments),
                    E = null !== this._Plugins && u.call(this),
                    A = Array.isArray(E) && E.length > 0,
                    N = this._topChild !== !0,
                    O = "_Handlers",
                    M = {},
                    F = {};
                if (this._Plugins = E || null, this._moduleName = c || "", c && y(!0, M, x.get(c)), y(!0, M, j[0]), N && (this._topChild = !0, A && (T = M._plugins, E.forEach(function(t) {
                        g(t._Opts, "object") && m(t, T) && y(!0, F, t._Opts)
                    })), s.call(this, ["beforeInit", "init"])), j[0] = f = y(!0, {}, a, F, M), r && s.call(this, r), !t) {
                    if (p = j[1], v = j[2], (g(p, "object") && !l(p) || g(v, "object") && l(v)) && (p = v, v = j[2] = j[1]), p = j[1] = p || o, v && !g(v.on, "function")) throw new TypeError('View instance must be linked with an instance of the model that has "on" method for add handlers');
                    this._model = this._model || v || null, this._Model = this._model
                }
                if (e._parent && "_Init" in e._parent && e._parent._Init.apply(this, j), A = null !== this._Plugins, f = this._opts = this._opts || f, this._Opts = this._opts, O in f && g(C = f[O], "object") ? (delete f[O], S = _(!0, {}, n || {}, C)) : S = n, j.shift(), t || j.splice(0, 2), t || "_elems" in this || (g(p, "function") && (p = p.apply(this, j)), b = f.cssSels, w = b && (b.main || b.Main), this._elems = this._getElements(w, p), this._Elems = this._elems), A && (P = h.call(this, E), this._Plugins = null), g(S, "object") && i.call(this, S), N && this._trigger("beforeInit"), g(d, "function") && (k = d.apply(this, j)), A && P.length > 0)
                    for (var I = 0; I < P.length; I++) P[I].apply(this, j);
                return N && this._trigger("init"), k
            }
        }

        function f(t, e, s, a, r) {
            var n, i, c, m = null;
            if (!g(e, "object")) throw new TypeError("Prototype must be an object");
            return t = t !== !1, n = e._Handlers, t || (m = e._parentElement), c = e._Events, w.forEach(function(t) {
                delete e[t]
            }), e = o(a, e), e._getElements = l, d(t, e, s, c, n, m, r), i = v(e), r && (x.registerModule(r, i), C.register(r, i)), i.type = t ? "model" : "view", i
        }
        var p = e.Basic,
            g = p.typeOf,
            y = p.Extend,
            _ = p.Merge,
            v = p.getConstructor,
            b = p.getByPath,
            x = p.moduleOpts,
            w = ["_Events", "_Parent", "_Handlers", "_parentElement"],
            k = ["self", "dom", "model", "set", "pubsub", "opts"],
            C = f(!0, {
                _Init: function() {
                    this._modules = {}
                },
                register: function(t, e) {
                    if (t in this._modules || !g(e, "function")) throw new Error("Module '" + t + "' exists or bad constructor type");
                    this._modules[t] = e
                },
                get: function(t) {
                    return this._modules[t]
                }
            })();
        p.Constructors = {
            getModel: f.bind(null, !0),
            getView: f.bind(null, !1),
            _getServiceProps: function() {
                return w.slice(0)
            },
            _repo: C
        }, y(p, {
            getModel: p.Constructors.getModel,
            getView: p.Constructors.getView,
            getElements: l
        })
    }(this, this.ru.mail.cpf),
    function(t, e) {
        function s(t, e, s, c) {
            if (r(t, "string") && (t = a.Constructors._repo.get(t)), !r(t, "function") || !r(e, "object")) throw new TypeError("Arguments must refer to a function and object respectively");
            var l = t.prototype,
                m = e._Init,
                h = e._Handlers,
                u = e._Events;
            n.forEach(function(t) {
                delete e[t]
            }), l.hasOwnProperty("_Plugins") || (l._Plugins = []), l._Plugins.push({
                name: c || i + o++,
                _Init: m,
                _Handlers: h,
                _Events: u,
                _Opts: s,
                methods: e
            })
        }
        var a = e.Basic,
            r = a.typeOf,
            n = a.Constructors._getServiceProps().concat(["_Plugins", "_Init", "_Opts"]),
            i = "_plugin",
            o = 0;
        a.Extend(a.Constructors, {
            addPlugin: s
        })
    }(this, this.ru.mail.cpf),
    function(t) {
        var e = t.ru.mail.cpf,
            s = e.Basic,
            a = s.typeOf,
            r = s.Extend;
        r(t.getNameSpace("fest._helpers"), {
            classNamesFor: function() {
                var t = ["mix", "mods"];
                return function(e, s) {
                    var a = [e];
                    if ("object" == typeof s)
                        for (var r, n = t.length; n--;)
                            if (Array.isArray(r = s[t[n]]))
                                if (1 === n) {
                                    e += "_";
                                    for (var i = 0; i < r.length; i++) a.push(e + r[i])
                                } else a = a.concat(r);
                    return a.join(" ")
                }
            }(),
            getByPath: s.getByPath,
            mergeTopParams: function() {
                var t = ["mix", "mods", "attrs"];
                return function() {
                    return Array.prototype.slice.apply(arguments).reduce(function(e, s) {
                        return a(s, "object") && t.forEach(function(t) {
                            var r = s[t];
                            if (Array.isArray(s[t])) e[t] = e[t] || [], Array.prototype.push.apply(e[t], r);
                            else if (a(r, "object")) {
                                e[t] = e[t] || {};
                                for (var n in r) r.hasOwnProperty(n) && (e[t][n] = r[n])
                            }
                        }), e
                    }, {})
                }
            }(),
            mergeParams: function() {
                function t(t, e) {
                    for (var r in e)
                        if (e.hasOwnProperty(r)) {
                            var n = t[r],
                                i = e[r];
                            a(i, "object") && (a(n, "object") || a(n, "undefined")) && (t[r] = s(n, i))
                        }
                }

                function e(t, e) {
                    var a = t[o] = t[o] || {},
                        r = e[o];
                    for (var n in r) r.hasOwnProperty(n) && (a[n] = s(a[n], r[n]))
                }

                function s() {
                    var s, c, l, m, h, u, d = Array.prototype.slice.apply(arguments),
                        f = !0;
                    if (a(d[0], "boolean") && (f = d.shift()), !(d.length < 2)) {
                        s = d.shift(), a(s, "object") || (s = {});
                        for (var p = 0; p < d.length; p += 1)
                            if (c = d[p], l = c && c[i], null != c) {
                                for (var g, y = n.length; y--;) g = n[y], (c.hasOwnProperty(g) || (u = l && l.hasOwnProperty(g))) && c[g] !== s && (m = s[g], h = c[g], u ? m = l[g] : h && (Array.isArray(m) || Array.isArray(h) ? m = m ? m.concat(h) : h : !a(h, "object") || m && !a(s, "object") || (m = m ? r(!0, {}, m, h) : h)), s[g] = m);
                                f ? t(s, c) : c.hasOwnProperty(o) && e(s, c)
                            }
                        return s
                    }
                }
                var n = ["mix", "mods", "attrs"],
                    i = "_rewrite",
                    o = "_children";
                return s
            }(),
            avatar: function(t) {
                return t = t || {}, "width" in t && (t.height = t.width), "//cp-filin.mail.ru/pic?" + ["email", "name", "width", "height"].reduce(function(e, s) {
                    return t[s] && e.push(s + "=" + encodeURI(t[s])), e
                }, []).join("&")
            }
        })
    }(new Function("return this")()),
    function(t, e, s) {
        var a = t.getNameSpace,
            r = e.Basic,
            n = r.typeOf,
            i = r.Extend,
            o = function(t, e, s) {
                s = s || {};
                var a, r, i;
                for (var o in t) t.hasOwnProperty(o) && (a = t[o], "string" == n(a) && a.length && (r = "j" + o.substr(0, 1).toUpperCase() + o.substr(1), s[r] = (i = e.find(a)).length ? i : e.is(a) ? e : null));
                return s
            };
        s && s.addTest("operamini", function() {
            return "[object OperaMini]" === Object.prototype.toString.call(t.operamini)
        });
        var c = function(e) {
            var s, a = ["moz", "webkit", "o", "ms"],
                r = e.createElement("div"),
                o = r.style,
                c = {
                    touch: "ontouchstart" in t || "ontouchend" in e || "createTouch" in e
                },
                l = !0;
            try {
                e.createEvent("TouchEvent")
            } catch (m) {
                l = !1
            }
            c.touch = c.touch || l;
            for (var h = a.length; h--;)
                if ((s = a[h]) + "Transform" in o) {
                    c.prefix = s;
                    break
                }
            i(!0, c, {
                transition: (s || "") + "Transition" in o,
                transform3d: "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix,
                overflowScroll: "webkitOverflowScrolling" in o,
                geolocation: "geolocation" in navigator
            });
            var u = function() {
                var e, s = t.navigator.userAgent,
                    a = {},
                    r = s.match(/AppleWebKit\/([0-9\.]+)/),
                    n = ["Android", "PlayBook", "Fennec", "wOSBrowser", "NokiaBrowser", "IEMobile", "Bada"],
                    i = new RegExp("(" + n.join("|") + ")\\s?\\/?([0-9.]+)", "i"),
                    o = s.match(i),
                    l = "Blackberry";
                return (a.webkit = null != r) && (a.webkitVersion = parseFloat(r[1])), null != o ? (a.type = o[1].toLowerCase(), a.version = parseFloat(o[2])) : t.blackberry && (a.type = l, e = s.match(/ Version\/([0-9]+)/), a.version = parseFloat(e[1])), /opera mini/i.test(s) && (a.operaMini = !0, c.touch = !1), a
            }();
            return c.userAgent = u, c.touchScroll = function(t) {
                var e, s = t.webkit && t.webkitVersion > 534,
                    a = t.version,
                    r = function(t) {
                        return function() {
                            return s && a >= t
                        }
                    },
                    i = {
                        android: r(3),
                        playbook: r(0),
                        fennec: r(4),
                        wosbrowser: r(233),
                        nokiabrowser: function() {
                            return s && 7.3 === a
                        },
                        iemobile: function() {
                            return a >= 9
                        }
                    };
                return i.blackberry = i.playbook, (c.touch || "iemobile" == t.type) && (c.overflowScroll || n(e = i[t.type], "function") && e())
            }(u), c.preventTouchStart = "bada" == u.type, c
        }(document);
        i(a("Touch", e), {
            Tools: {
                getElems: o
            },
            Support: c
        }), t.$f && i(t.$f, {
            support: c
        })
    }(this, this.ru.mail.cpf, this.Modernizr),
    function(t, e, s, a) {
        "use strict";
        var r = s.Basic,
            n = s.Touch,
            i = r.typeOf,
            o = r.Extend,
            c = n && n.Support || a,
            l = c.touch || c.touchevents,
            m = {
                cssSels: {
                    targetElems: null,
                    ignoredElems: null
                },
                targetAxis: null,
                resetDelta: !1
            },
            h = r.Constructors.getView(function() {
                function e(t) {
                    var e, s, a = t.originalEvent || t,
                        r = a.changedTouches;
                    if (l) {
                        for (var n = 0; n < r.length; n++)
                            if (s = r[n], s.identifier === this._state.touchId) {
                                e = s;
                                break
                            }
                    } else e = m.reduce(function(t, e) {
                        return e = "page" + e.toUpperCase(), t[e] = a[e], t
                    }, {});
                    return e
                }

                function s(t) {
                    var s = e.call(this, t),
                        a = this._state.coords;
                    return s ? m.map(function(t, e) {
                        return s["page" + t.toUpperCase()] - a[e]
                    }) : [0, 0]
                }

                function a(t) {
                    this._state.coords = m.map(function(e) {
                        return t["page" + e.toUpperCase()]
                    })
                }

                function r(t) {
                    this._state.started || t.trigger("click"), this._timers.click = null
                }
                var n = 3,
                    m = ["x", "y"];
                return {
                    _Events: ["start", "move", "end"],
                    _Handlers: {
                        "set:touch": {
                            "touchstart:targetElems": "_onTouchStart",
                            "touchmove:document": "_onTouchMove",
                            "touchend:document": "_onTouchEnd"
                        },
                        "set:mouse": {
                            "mousedown:targetElems": "_onTouchStart",
                            "mousemove:document": "_onTouchMove",
                            "mouseup:document": "_onTouchEnd",
                            "click:targetElems": "_onClick"
                        }
                    },
                    _Init: function() {
                        this._timers = {
                            click: null
                        }, this._state = {
                            started: !1,
                            moved: !1,
                            paused: !1,
                            detecting: !1,
                            touchId: null,
                            coords: null,
                            delta: [0, 0]
                        }, this.setTargetAxis(this._opts.targetAxis), this._bindHandlerSet(l ? "touch" : "mouse")
                    },
                    _onTouchStart: function(s) {
                        var n, i = s.originalEvent || s,
                            m = this._state,
                            h = t(i.target),
                            u = i.touches,
                            d = i.changedTouches,
                            f = this._opts.cssSels.ignoredElems;
                        i.which > 1 || f && (h.is(f) || h.parents(f).length > 0) || m.paused || m.started || l && u.length > 1 || (n = l ? d[0] : e.call(this, i), a.call(this, n), o(m, {
                            touchId: n.identifier,
                            detecting: !0,
                            moved: !1
                        }), c.preventTouchStart && (this._timers.click = setTimeout(r.bind(this, h), 200), i.preventDefault()), l || i.preventDefault(), this._trigger("start", h, {
                            from: this._state.coords,
                            elem: i.currentTarget
                        }))
                    },
                    _onTouchMove: function(t) {
                        var e, a, r, i, c = !0,
                            m = this._Opts.targetAxis,
                            h = this._state;
                        (h.started || h.detecting) && (e = s.call(this, t), a = e.map(Math.abs), r = Math.max.apply(null, a), 0 !== r && (h.detecting && r > n && (null !== this._timers.click && (clearTimeout(this._timers.click), this._timers.click = null), l && null !== m && a[m] < a[1 - m] && (c = !1), o(h, {
                            detecting: !c,
                            started: c,
                            moved: c
                        })), h.started && (i = h.delta, e = e.map(function(t, e) {
                            return t + i[e]
                        }), this._trigger("move", e, t), t.preventDefault())))
                    },
                    _onTouchEnd: function(t) {
                        var e, a, r = this._state;
                        r.detecting = !1, r.started && (a = r.delta, e = {
                            coords: null,
                            touchId: null,
                            detecting: !1,
                            started: !1,
                            moved: r.started
                        }, this._Opts.resetDelta ? e.delta = m.map(function() {
                            return 0
                        }) : e.delta = s.call(this, t).map(function(t, e) {
                            return a[e] + t
                        }), o(r, e), this._trigger("end", e.delta), t.preventDefault())
                    },
                    _onClick: function(t) {
                        this._state.moved && t.preventDefault()
                    },
                    setTargetAxis: function(t) {
                        var e, s = this._opts;
                        i(t, "string") && (e = m.indexOf(t)) > -1 ? s.targetAxis = e : s.targetAxis = null
                    },
                    setDelta: function(t, e) {
                        if (i(t, "array")) return void(this._state.delta = t.slice(0));
                        var s = isNaN(t) ? m.indexOf(t) : t; - 1 !== s && (this._state.delta[s] = e)
                    },
                    getDelta: function(t) {
                        var e = this._state.delta;
                        return i(t, "undefined") ? e.slice(0) : isNaN(t) ? e[m.indexOf(t)] : e[t]
                    },
                    setState: function(t, e) {
                        i(t, "object") ? o(this._state, t) : this._state[t] = e
                    },
                    stopDetecting: function() {
                        this._state.detecting = !1
                    },
                    pause: function(t) {
                        return i(t, "boolean") && (this._state.paused = t), this._state.paused
                    }
                }
            }(), m, null, "Swipe");
        t.fn.bindScrollMove = function(t, e, s, a, r) {
            return new h(o(r, {
                _Handlers: {
                    start: t,
                    move: e,
                    end: s
                },
                targetAxis: a
            }), this)
        }
    }
    (this.jQuery || this.$ || this.$f, this, this.ru.mail.cpf, this.Modernizr),

    function(t, e, s) {
        "use strict";

        function a(t, e) {
            var s, r, n = null;
            if (g(e, "object")) {
                n = {};
                for (var i in e) e.hasOwnProperty(i) && (s = e[i], g(s, "object") ? y(!0, _(i, n), a(t, s)) : g(s, "function") ? n[i] = s(t) : (r = t.getAttribute(s)) && (n[i] = r))
            }
            return n
        }

        function r(t, e) {
            return e && (e[t] || e.common)
        }

        function n(t) {
            for (var e, s, a = t.split(k), r = {}, n = 0; n < a.length; n++) s = a.slice(0, n + 1).join(k), e = b.getParams(s), r = y(!0, r, e);
            return r.type = a[0], r
        }

        function i(t, e, s, r) {
            var n, i, o, c, l = e.initializer,
                m = e.type,
                h = t && t.data(m) || null;
            if (t && (c = t && t.get(0), c && (o = v(c))), null === h && g(l, "function")) {
                n = l.type, o = o && m in o ? o[m] : null, o && ("options" in o || "data" in o) ? (s = y(!0, o.options, s), o = o.data) : (s = y(!0, o, s), o = null), i = [y(!0, {}, e.options, a(c, e.paramAttrs), s)], "model" !== n && (i.push(t), i.push(e.model || null)), i.push(y(!0, {}, o, r));
                try {
                    h = l.apply(null, i)
                } catch (u) {
                    console.error('Module "' + e.type + '" initialization failed.', u.stack)
                }
                t && t.data(m, h)
            }
            return h
        }

        function o(t, e, s, a) {
            var r;
            return e && (r = t.find(e).add(t.filter(e))), t.attr(s) && (r = t.add(r)), !g(a, "string") || r && r.length || (r = t), r
        }

        function c(t) {
            S = y(!0, {}, x, p.moduleOpts.get(w), t)
        }

        function l(t, e) {
            var s = !1;
            Array.isArray(e) || (e = [e]);
            for (var a, r = e.length; r--;)
                if (a = e[r], t === a || 0 === t.indexOf(a) && t.charAt(a.length) === k) {
                    s = !0;
                    break
                }
            return s
        }

        function m(t, e, s, a) {
            for (var n, i, c, l = S.attrs, m = l.moduleViewType, h = o(t, S.cssSels.moduleView, m, S.viewType), u = [], d = 0; d < h.length; d++)
                if (c = h.eq(d), i = S.viewType || c.attr(m)) {
                    i = i.split(",");
                    for (var p, g = 0; g < i.length; g++) p = i[g].split(".").shift(), n = f(i[g], c, r(p, e), r(p, s), a), u.push({
                        instance: n,
                        type: p
                    })
                }
            return u
        }

        function h(t, e, s, a) {
            c(a);
            for (var n, i, l, h = S.attrs.moduleType, u = o(t, S.cssSels.module, h, S.moduleType), d = 1 === u.length, p = [], g = 0; g < u.length; g++)
                if (l = u.eq(g), i = S.moduleType || l.attr(h)) {
                    i = i.split(C), n = [];
                    for (var y, _, v, b = 0; b < i.length; b++) y = i[b], _ = y.split(".").shift(), v = f(y, l, r(_, e), r(_, s)), null !== v && (v = {
                        instance: v,
                        type: y
                    }, p.push(v), n.push(v));
                    p.length && (p = p.concat(m(l, e, s, n)))
                }
            return d && 1 === p.length ? p[0].instance : p
        }

        function u(t, e) {
            return h(t, e.options, e.data, {
                cssSels: {
                    module: null,
                    moduleView: null
                },
                moduleType: e.moduleType,
                viewType: e.viewType
            })
        }

        function d(t, e) {
            return c({
                cssSels: {
                    module: null,
                    moduleView: null
                },
                viewType: e.viewType
            }), m(t, e.options, e.data, [e.model])
        }

        function f(t, e, s, a, r) {
            Array.isArray(t) && (t = t.filter(function(t) {
                return g(t, "string") && t.length > 0
            }).join("."));
            var o, c, m = n(t),
                h = !0,
                u = null;
            if (e && (o = e.attr(S.attrs.viewAcceptType), o && (o = o.split(C))), (o = o || m.acceptTypes) && Array.isArray(r)) {
                h = !1;
                for (var d = 0; d < r.length; d++)
                    if (c = r[d], l(c.type, o)) {
                        m.model = c.instance, h = !0;
                        break
                    }
            }
            return h && (u = i(e, m, s, a), null !== u && c && (c.views = c.views || [], c.views.push({
                instance: u,
                type: t
            }))), u
        }
        var p = s.Basic,
            g = p.typeOf,
            y = p.Extend,
            _ = e.getNameSpace,
            v = p.getOptions,
            b = p.moduleOpts,
            x = {
                cssSels: {
                    module: ".js-module",
                    moduleView: ".js-view"
                },
                attrs: {
                    moduleType: "data-module",
                    moduleViewType: "data-view",
                    viewAcceptType: "data-accepted-module"
                },
                moduleType: null,
                viewType: null
            },
            w = "ModulesInit",
            k = ".",
            C = /,\s*/gi,
            S = x;
        y(!0, s, {
            Tools: {
                initModules: h,
                initModuleElems: u,
                initViewElems: d,
                initModule: f
            }
        }), t(function() {
            h(t(e.document.body))
        })
    }
(this.jQuery || this.$, this, this.ru.mail.cpf, this.DEBUG);