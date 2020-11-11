(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 39 ], {
    1042: function(t, i, e) {
        "use strict";
        e.r(i), e.d(i, "default", function() {
            return f;
        });
        e(47), e(20), e(32), e(187), e(21);
        var n = e(325), r = e.n(n);
        e(17), e(65), e(81), e(103), e(38), e(190), e(104), e(9), e(80), e(39), e(40);
        function o(t) {
            return function(t) {
                if (Array.isArray(t)) return t;
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
            }(t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }();
        }
        function a(t, i) {
            for (var e = 0; e < i.length; e++) {
                var n = i[e];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        var s = 0, d = function() {
            function t(i, e) {
                var n = e.window, o = e.maxRatio, a = e.breakpoints;
                !function(t, i) {
                    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
                }(this, t), this._$grid = i, this._eventNS = ".flexbox-sizer-" + s++, this._$window = r()(n), 
                this._maxRatio = o, this._breakpoints = a, this.refresh(), this._bind();
            }
            return function(t, i, e) {
                i && a(t.prototype, i), e && a(t, e);
            }(t, [ {
                key: "refresh",
                value: function() {
                    this._setGridData(), this._autoSizeGrid();
                }
            }, {
                key: "destroy",
                value: function() {
                    this._$window.off(this._eventNS);
                }
            }, {
                key: "_bind",
                value: function() {
                    var t = this;
                    this._$window.on("refresh-grids" + this._eventNS, function() {
                        return t.refresh();
                    }), this._$window.on("resize" + this._eventNS, function() {
                        return t._autoSizeGrid();
                    }), this._$window.on("orientationchange" + this._eventNS, function() {
                        return t._autoSizeGrid();
                    });
                }
            }, {
                key: "_getBreakpointModifier",
                value: function(t) {
                    return this._breakpoints.reduce(function(i, e) {
                        return e.width >= t && e.width < i.width ? e : i;
                    }, {
                        width: 1 / 0,
                        modifier: 1
                    }).modifier;
                }
            }, {
                key: "_getCssFloat",
                value: function(t, i) {
                    return parseFloat(window.getComputedStyle(t[0])[i]);
                }
            }, {
                key: "_autoSizeGrid",
                value: function() {
                    var t = this._$grid.css("boxSizing"), i = 2 * this._getCssFloat(this._$grid, "border-left-width"), e = 2 * this._getCssFloat(this._$grid, "padding-left"), n = this._getCssFloat(this._$grid, "width"), r = "border-box" !== t ? n : n - i - e;
                    this._recalcWidths(this._$grid, r);
                }
            }, {
                key: "_setGridData",
                value: function() {
                    this._gridData = this._getGridData(this._$grid);
                }
            }, {
                key: "_getGridData",
                value: function(t) {
                    var i = [];
                    return t.find(".js-grid-item-container").each(function() {
                        var t = r()(this), e = t.data("height") || t.height(), n = t.data("width") || t.width(), o = t.outerWidth(!0) - t.width(), a = t.data("flex-grow"), s = Math.round(a * e / n);
                        i.push({
                            $item: t,
                            flexWidth: a,
                            nonContentWidth: o,
                            flexHeight: s
                        });
                    }), i;
                }
            }, {
                key: "_recalcWidths",
                value: function(t, i) {
                    var e = this._gridData, n = this._getGridModifierData(e, i, 2), r = n.flexModifier, o = n.averageRowHeight, a = r < 2;
                    this._adjustWidths(e, a ? r : 1), this._toggleGridSpacer(t, !1);
                    var s = t.find(".js-grid-item-container").last().height();
                    this._toggleGridSpacer(t, !a || s / o > 2.5), this._setImageSizes(e), t.addClass("grid--ready");
                }
            }, {
                key: "_getGridModifierData",
                value: function(t, i, e) {
                    for (var n, r = this._getBreakpointModifier(i), a = 1, s = 0, d = 1 / 0, u = 1, f = -1; d / u > this._maxRatio && a < e; ) {
                        a = (1 + s * (f *= -1)) * r;
                        var h = o(this._getRowHeights(t, i, a).reverse());
                        d = h[0], u = (n = h.slice(1)).reduce(function(t, i) {
                            return t + i;
                        }, 0) / n.length, s += .005;
                    }
                    return {
                        averageRowHeight: u,
                        flexModifier: a
                    };
                }
            }, {
                key: "_setImageSizes",
                value: function(t) {
                    t.forEach(function(t) {
                        var i = t.$item, e = i.width();
                        i.find("img").attr({
                            sizes: e + "px",
                            "data-sizes": e + "px"
                        });
                    });
                }
            }, {
                key: "_getRowHeights",
                value: function(t, i, e) {
                    return this._getGridDimensions(t, i, e).map(function(t) {
                        return t[0].height;
                    });
                }
            }, {
                key: "_getGridDimensions",
                value: function(t, i, e) {
                    var n = [], r = [], o = i;
                    function a() {
                        var t = [], e = r.reduce(function(t, i) {
                            return t + i.modifiedFlexWidth;
                        }, 0), o = i / e;
                        r.length && (r.forEach(function(i) {
                            var e = i.modifiedFlexWidth * o, n = i.modifiedFlexHeight * o;
                            t.push({
                                width: e,
                                height: n
                            });
                        }), n.push(t)), r = [];
                    }
                    return t.forEach(function(t) {
                        var n = e * t.flexWidth + t.nonContentWidth, s = e * t.flexHeight;
                        o >= n ? o -= n : (a(), o = i - n), r.push({
                            modifiedFlexWidth: n,
                            modifiedFlexHeight: s
                        });
                    }), a(), n;
                }
            }, {
                key: "_adjustWidths",
                value: function(t, i) {
                    t.forEach(function(t) {
                        var e = t.$item, n = t.flexWidth, r = i * n;
                        e.width(r), e.css("flexGrow", "" + r);
                    });
                }
            }, {
                key: "_toggleGridSpacer",
                value: function(t, i) {
                    var e = i ? "block" : "none";
                    t.find(".js-grid-spacer").toggleClass("grid__item-spacer", i).css({
                        display: e
                    });
                }
            } ]), t;
        }();
        function u(t, i) {
            for (var e = 0; e < i.length; e++) {
                var n = i[e];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        var f = function() {
            function t(i) {
                !function(t, i) {
                    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
                }(this, t), this.grids = r()(i.context).find(i.gridSelector).toArray().map(function(t) {
                    return new d(r()(t), i);
                });
            }
            return function(t, i, e) {
                i && u(t.prototype, i), e && u(t, e);
            }(t, [ {
                key: "refresh",
                value: function() {
                    this.grids.forEach(function(t) {
                        return t.refresh();
                    });
                }
            }, {
                key: "destroy",
                value: function() {
                    this.grids.forEach(function(t) {
                        return t.destroy();
                    });
                }
            } ], [ {
                key: "init",
                value: function(i) {
                    return new t(Object.assign({
                        window: window,
                        context: document.body,
                        gridSelector: ".js-grid-main",
                        maxRatio: 1.5,
                        breakpoints: [ {
                            width: 1325,
                            modifier: 220 / 260
                        }, {
                            width: 1024,
                            modifier: 170 / 260
                        }, {
                            width: 768,
                            modifier: .5
                        }, {
                            width: 540,
                            modifier: 90 / 260
                        } ]
                    }, i));
                }
            } ]), t;
        }();
    }
} ]);