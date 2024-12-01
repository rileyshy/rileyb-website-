/* 
 * Tipper v3.1.0 - 2015-04-04 
 * A jQuery plugin for simple tooltips. Part of the formstone library. 
 * http://classic.formstone.it/tipper/ 
 * 
 * Copyright 2015 Ben Plum; MIT Licensed 
 */

!function(a, b) {
    "use strict";
    function c(b) {
        return v.formatter = f,
        m = a("body"),
        this.filter(function() {
            return !a(this).data(l)
        }).data(l, a.extend({}, v, b || {})).on(u, d)
    }
    function d(b) {
        var c = a(b.currentTarget);
        n = a.extend(!0, {
            $target: c,
            left: b.pageX,
            top: b.pageY
        }, c.data(l) || {}, c.data(l + "-options") || {}),
        n.delay ? n.timer = i(n.timer, n.delay, function() {
            e(c, n)
        }) : e(c, n),
        n.$target.one(s, n, h),
        !n.follow && n.match && c.on(t, n, g).trigger(t)
    }
    function e(b, c) {
        var d = "";
        d += '<div class="' + [o, l + "-" + c.direction].join(" ") + '">',
        d += '<div class="' + p + '">',
        d += c.formatter.call(b, c),
        d += '<span class="' + q + '"></span>',
        d += "</div>",
        d += "</div>",
        c.$tipper = a(d),
        m.append(c.$tipper),
        c.$content = c.$tipper.find(k(p)),
        c.$caret = c.$tipper.find(k(q)),
        c.offset = b.offset(),
        c.height = b.outerHeight(),
        c.width = b.outerWidth();
        var e = {}
          , f = {}
          , h = {}
          , i = c.$caret.outerHeight(!0)
          , j = c.$caret.outerWidth(!0)
          , n = c.$content.outerHeight(!0)
          , s = c.$content.outerWidth(!0);
        "right" === c.direction || "left" === c.direction ? (f.top = (n - i) / 2,
        h.top = -n / 2,
        "right" === c.direction ? h.left = c.margin : "left" === c.direction && (h.left = -(s + c.margin))) : (f.left = (s - j) / 2,
        h.left = -s / 2,
        "bottom" === c.direction ? h.top = c.margin : "top" === c.direction && (h.top = -(n + c.margin))),
        c.$content.css(h),
        c.$caret.css(f),
        c.follow ? c.$target.on(t, c, g).trigger(t) : c.match ? "right" === c.direction || "left" === c.direction ? (e.top = c.top,
        "right" === c.direction ? e.left = c.offset.left + c.width : "left" === c.direction && (e.left = c.offset.left)) : (e.left = c.left,
        "bottom" === c.direction ? e.top = c.offset.top + c.height : "top" === c.direction && (e.top = c.offset.top)) : "right" === c.direction || "left" === c.direction ? (e.top = c.offset.top + c.height / 2,
        "right" === c.direction ? e.left = c.offset.left + c.width : "left" === c.direction && (e.left = c.offset.left)) : (e.left = c.offset.left + c.width / 2,
        "bottom" === c.direction ? e.top = c.offset.top + c.height : "top" === c.direction && (e.top = c.offset.top)),
        c.$tipper.css(e).addClass(r)
    }
    function f(a) {
        return this.data("title")
    }
    function g(a) {
        var b = a.data
          , c = {
            left: a.pageX,
            top: a.pageY
        };
        b.follow && "undefined" != typeof b.$tipper && b.$tipper.css(c)
    }
    function h(a) {
        var b = a.data;
        j(b.timer),
        "undefined" != typeof b.$tipper && (b.$tipper.remove(),
        b.$target.off([t, s].join(" ")),
        b = null)
    }
    function i(a, b, c) {
        return j(a),
        setTimeout(c, b)
    }
    function j(a) {
        a && (clearTimeout(a),
        a = null)
    }
    function k(a) {
        return "." + a
    }
    var l = "tipper"
      , m = null
      , n = null
      , o = l
      , p = l + "-content"
      , q = l + "-caret"
      , r = l + "-visible"
      , s = "mouseleave." + l
      , t = "mousemove." + l
      , u = "mouseenter." + l
      , v = {
        delay: 0,
        direction: "top",
        follow: !1,
        formatter: a.noop,
        margin: 15,
        match: !1
    }
      , w = {
        defaults: function(b) {
            return v = a.extend(v, b || {}),
            "object" == typeof this ? a(this) : !0
        },
        destroy: function() {
            return this.trigger(s).off(k(l)).removeData(l)
        }
    };
    a.fn[l] = function(a) {
        return w[a] ? w[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? this : c.apply(this, arguments)
    }
    ,
    a[l] = function(a) {
        "defaults" === a && w.defaults.apply(this, Array.prototype.slice.call(arguments, 1))
    }
}(jQuery);
