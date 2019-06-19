! function(t, e, i) {
    "use strict";
    var s = i.Basic,
        n = {
            cssSels: {
                Main: {
                    slider: ".js-compare__separator",
                    compareRegion: ".js-compare__item",
                    compareContent: ".js-compare__size",
                    sliding: ".js-compare__sliding"
                }
            },
            cssClss: {
                animated: "compare__item_animated"
            },
            startOffset: "50",
            isVertical: 1
        },
        o = function() {
            // function t(t, e) {
            //     t.removeClass(e), this._state.animated = !1, this._swipe.pause(!1)
            // }

            function s(t) {
                // if (!this._state.animated) {
                //     if (!this._state.click) return void(this._state.click = !0);
                //     var i = this._elems.compareRegion.eq(0),
                //         s = this._opts.cssClss.animated;
                //     s && (i.addClass(s).one(c, this.onAnimationEnd), this._swipe.pause(!0), this._state.animated = !0), o.call(this, e(t.originalEvent || t)[this._opts.isVertical ? "y" : "x"])
                // }
            }

            function n(t, e) {
                this._elems.sliding[t](e + "%")
            }

            function o(t) {
                var e, i, s, o = !this._opts.isVertical,
                    a = this._elems.parent,
                    r = this.getOffset();
                o ? (e = "height", r = r.top) : (e = "height", r = r.top), i = a[e](), s = Math.min((t - r) / i * 100, 100), this._state.offset = s, n.call(this, e, s)
            }

            function a() {
                this._elems.compareContent.css({
                    width: "",
                    height: ""
                }), this._elems.parent.height(""), this._elems.sliding[this._opts.isVertical ? "height" : "width"]("")
            }

            function r() {
                a.call(this);
                for (var t, e, i, s, n = !this._opts.isVertical, o = this._elems.compareRegion.get(0).getBoundingClientRect(), r = this._elems.compareRegion.get(1).getBoundingClientRect(), l = this._elems.parent, c = ["width", "height"], h = 0; h < c.length; h++) s = 0 === h, e = c[h], t = s === n, i = Math[t ? "min" : "max"](r[e], o[e], l[e]()), !s && n ? l[e](i) : this._elems.compareContent[e](i)
            }

            function l() {
                var t = this._opts.isVertical ? 1 : 0;
                this._swipe = i.Tools.initModule("Swipe", this._elems.parent, {
                    targetAxis: this._opts.isVertical ? "y" : "x",
                    resetDelta: !0,
                    _Handlers: {
                        start: function(e, i) {
                            this._state.startFrom = i.from[t]
                        }.bind(this),
                        move: function(e) {
                            o.call(this, this._state.startFrom + e[t])
                        }.bind(this),
                        end: function() {
                            this._state.startFrom = null, this._state.click = !1
                        }.bind(this)
                    }
                })
            }
            var c = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";
            return {
                _Handlers: {
                    dom: {
                        "resize:window": function() {
                            this.fixSizes()
                        },
                        click: s
                    }
                },
                _Init: function() {
                    var e = this._elems.compareRegion,
                        i = this._opts.cssClss.animated;
                    2 !== e.length && console && console.error && console.error("Wrong compare elems count"), i && (this.onAnimationEnd = t.bind(this, e.eq(0), i)), this._state = {
                        animated: !1,
                        startFrom: null,
                        click: !0,
                        offset: this._opts.startOffset
                    };
                    var s = e.find("img");
                    s.length ? Promise.all(s.toArray().map(function(t) {
                        var e;
                        return e = t.complete === !0 ? Promise.resolve() : new Promise(function(e, i) {
                            t.onload = e, t.onerror = i
                        })
                    })).then(this.fixSizes.bind(this)) : this.fixSizes.call(this), l.call(this)
                },
                getOffset: function() {
                    var t = this._elems.parent.get(0).getBoundingClientRect();
                    return {
                        top: t.top + document.body.scrollTop,
                        left: t.left + document.body.scrollLeft
                    }
                },
                fixSizes: function() {
                    r.call(this), n.call(this, this._opts.isVertical ? "height" : "width", this._state.offset)
                }
            }
        }(),
        a = s.getView(o, n, null, "CompareSlider");
    i.Basic.moduleOpts.setParams("CompareSlider", {
        paramAttrs: {
            startOffset: "data-startfrom",
            isVertical: "data-vertical"
        }
    }), s.Extend(e.getNameSpace("Modules", i), {
        CompareSlider: a
    })
}(this.jQuery || this.$ || this.$f, this, this.ru.mail.cpf);