!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 94));
})([
  function (t, e) {
    var r = (t.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = r);
  },
  function (t, e) {
    var r = (t.exports = { version: "2.6.11" });
    "number" == typeof __e && (__e = r);
  },
  function (t, e, r) {
    var n = r(22)("wks"),
      o = r(23),
      i = r(0).Symbol,
      a = "function" == typeof i;
    (t.exports = function (t) {
      return n[t] || (n[t] = (a && i[t]) || (a ? i : o)("Symbol." + t));
    }).store = n;
  },
  function (t, e, r) {
    var n = r(6);
    t.exports = function (t) {
      if (!n(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  },
  function (t, e, r) {
    var n = r(11),
      o = r(21);
    t.exports = r(5)
      ? function (t, e, r) {
          return n.f(t, e, o(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        };
  },
  function (t, e, r) {
    t.exports = !r(17)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return r.call(t, e);
    };
  },
  function (t, e, r) {
    var n = r(33),
      o = r(13);
    t.exports = function (t) {
      return n(o(t));
    };
  },
  function (t, e, r) {
    var n = r(0),
      o = r(1),
      i = r(15),
      a = r(4),
      s = r(8),
      c = function (t, e, r) {
        var u,
          f,
          d,
          p = t & c.F,
          l = t & c.G,
          h = t & c.S,
          m = t & c.P,
          _ = t & c.B,
          y = t & c.W,
          g = l ? o : o[e] || (o[e] = {}),
          v = g.prototype,
          b = l ? n : h ? n[e] : (n[e] || {}).prototype;
        for (u in (l && (r = e), r))
          ((f = !p && b && void 0 !== b[u]) && s(g, u)) ||
            ((d = f ? b[u] : r[u]),
            (g[u] =
              l && "function" != typeof b[u]
                ? r[u]
                : _ && f
                ? i(d, n)
                : y && b[u] == d
                ? (function (t) {
                    var e = function (e, r, n) {
                      if (this instanceof t) {
                        switch (arguments.length) {
                          case 0:
                            return new t();
                          case 1:
                            return new t(e);
                          case 2:
                            return new t(e, r);
                        }
                        return new t(e, r, n);
                      }
                      return t.apply(this, arguments);
                    };
                    return (e.prototype = t.prototype), e;
                  })(d)
                : m && "function" == typeof d
                ? i(Function.call, d)
                : d),
            m &&
              (((g.virtual || (g.virtual = {}))[u] = d),
              t & c.R && v && !v[u] && a(v, u, d)));
      };
    (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (t.exports = c);
  },
  function (t, e, r) {
    var n = r(3),
      o = r(34),
      i = r(35),
      a = Object.defineProperty;
    e.f = r(5)
      ? Object.defineProperty
      : function (t, e, r) {
          if ((n(t), (e = i(e, !0)), n(r), o))
            try {
              return a(t, e, r);
            } catch (t) {}
          if ("get" in r || "set" in r)
            throw TypeError("Accessors not supported!");
          return "value" in r && (t[e] = r.value), t;
        };
  },
  function (t, e) {
    var r = {}.toString;
    t.exports = function (t) {
      return r.call(t).slice(8, -1);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  },
  function (t, e) {
    var r = Math.ceil,
      n = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? n : r)(t);
    };
  },
  function (t, e, r) {
    var n = r(16);
    t.exports = function (t, e, r) {
      if ((n(t), void 0 === e)) return t;
      switch (r) {
        case 1:
          return function (r) {
            return t.call(e, r);
          };
        case 2:
          return function (r, n) {
            return t.call(e, r, n);
          };
        case 3:
          return function (r, n, o) {
            return t.call(e, r, n, o);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, r) {
    var n = r(22)("keys"),
      o = r(23);
    t.exports = function (t) {
      return n[t] || (n[t] = o(t));
    };
  },
  function (t, e) {
    t.exports = !0;
  },
  function (t, e, r) {
    var n = r(6),
      o = r(0).document,
      i = n(o) && n(o.createElement);
    t.exports = function (t) {
      return i ? o.createElement(t) : {};
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e, r) {
    var n = r(1),
      o = r(0),
      i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
      return i[t] || (i[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: n.version,
      mode: r(19) ? "pure" : "global",
      copyright: "?? 2019 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, e) {
    var r = 0,
      n = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(
        void 0 === t ? "" : t,
        ")_",
        (++r + n).toString(36)
      );
    };
  },
  function (t, e) {
    t.exports =
      "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
  },
  function (t, e, r) {
    var n = r(11).f,
      o = r(8),
      i = r(2)("toStringTag");
    t.exports = function (t, e, r) {
      t &&
        !o((t = r ? t : t.prototype), i) &&
        n(t, i, { configurable: !0, value: e });
    };
  },
  function (t, e, r) {
    t.exports = { default: r(61), __esModule: !0 };
  },
  function (t, e, r) {
    var n = r(36),
      o = r(24);
    t.exports =
      Object.keys ||
      function (t) {
        return n(t, o);
      };
  },
  function (t, e, r) {
    var n = r(14),
      o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(n(t), 9007199254740991) : 0;
    };
  },
  function (t, e, r) {
    t.exports = r(65);
  },
  function (t, e, r) {
    "use strict";
    var n = r(19),
      o = r(10),
      i = r(48),
      a = r(4),
      s = r(7),
      c = r(49),
      u = r(25),
      f = r(52),
      d = r(2)("iterator"),
      p = !([].keys && "next" in [].keys()),
      l = function () {
        return this;
      };
    t.exports = function (t, e, r, h, m, _, y) {
      c(r, e, h);
      var g,
        v,
        b,
        w = function (t) {
          if (!p && t in I) return I[t];
          switch (t) {
            case "keys":
            case "values":
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this, t);
          };
        },
        x = e + " Iterator",
        P = "values" == m,
        S = !1,
        I = t.prototype,
        C = I[d] || I["@@iterator"] || (m && I[m]),
        F = C || w(m),
        T = m ? (P ? w("entries") : F) : void 0,
        E = ("Array" == e && I.entries) || C;
      if (
        (E &&
          (b = f(E.call(new t()))) !== Object.prototype &&
          b.next &&
          (u(b, x, !0), n || "function" == typeof b[d] || a(b, d, l)),
        P &&
          C &&
          "values" !== C.name &&
          ((S = !0),
          (F = function () {
            return C.call(this);
          })),
        (n && !y) || (!p && !S && I[d]) || a(I, d, F),
        (s[e] = F),
        (s[x] = l),
        m)
      )
        if (
          ((g = {
            values: P ? F : w("values"),
            keys: _ ? F : w("keys"),
            entries: T,
          }),
          y)
        )
          for (v in g) v in I || i(I, v, g[v]);
        else o(o.P + o.F * (p || S), e, g);
      return g;
    };
  },
  function (t, e, r) {
    var n = r(13);
    t.exports = function (t) {
      return Object(n(t));
    };
  },
  function (t, e, r) {
    var n = r(12),
      o = r(2)("toStringTag"),
      i =
        "Arguments" ==
        n(
          (function () {
            return arguments;
          })()
        );
    t.exports = function (t) {
      var e, r, a;
      return void 0 === t
        ? "Undefined"
        : null === t
        ? "Null"
        : "string" ==
          typeof (r = (function (t, e) {
            try {
              return t[e];
            } catch (t) {}
          })((e = Object(t)), o))
        ? r
        : i
        ? n(e)
        : "Object" == (a = n(e)) && "function" == typeof e.callee
        ? "Arguments"
        : a;
    };
  },
  function (t, e, r) {
    var n = r(12);
    t.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (t) {
          return "String" == n(t) ? t.split("") : Object(t);
        };
  },
  function (t, e, r) {
    t.exports =
      !r(5) &&
      !r(17)(function () {
        return (
          7 !=
          Object.defineProperty(r(20)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, r) {
    var n = r(6);
    t.exports = function (t, e) {
      if (!n(t)) return t;
      var r, o;
      if (e && "function" == typeof (r = t.toString) && !n((o = r.call(t))))
        return o;
      if ("function" == typeof (r = t.valueOf) && !n((o = r.call(t)))) return o;
      if (!e && "function" == typeof (r = t.toString) && !n((o = r.call(t))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e, r) {
    var n = r(8),
      o = r(9),
      i = r(37)(!1),
      a = r(18)("IE_PROTO");
    t.exports = function (t, e) {
      var r,
        s = o(t),
        c = 0,
        u = [];
      for (r in s) r != a && n(s, r) && u.push(r);
      for (; e.length > c; ) n(s, (r = e[c++])) && (~i(u, r) || u.push(r));
      return u;
    };
  },
  function (t, e, r) {
    var n = r(9),
      o = r(28),
      i = r(38);
    t.exports = function (t) {
      return function (e, r, a) {
        var s,
          c = n(e),
          u = o(c.length),
          f = i(a, u);
        if (t && r != r) {
          for (; u > f; ) if ((s = c[f++]) != s) return !0;
        } else
          for (; u > f; f++)
            if ((t || f in c) && c[f] === r) return t || f || 0;
        return !t && -1;
      };
    };
  },
  function (t, e, r) {
    var n = r(14),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, e) {
      return (t = n(t)) < 0 ? o(t + e, 0) : i(t, e);
    };
  },
  function (t, e, r) {
    var n = r(0).document;
    t.exports = n && n.documentElement;
  },
  function (t, e, r) {
    "use strict";
    var n = r(16);
    function o(t) {
      var e, r;
      (this.promise = new t(function (t, n) {
        if (void 0 !== e || void 0 !== r)
          throw TypeError("Bad Promise constructor");
        (e = t), (r = n);
      })),
        (this.resolve = n(e)),
        (this.reject = n(r));
    }
    t.exports.f = function (t) {
      return new o(t);
    };
  },
  function (t, e, r) {
    r(45);
    for (
      var n = r(0),
        o = r(4),
        i = r(7),
        a = r(2)("toStringTag"),
        s =
          "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
            ","
          ),
        c = 0;
      c < s.length;
      c++
    ) {
      var u = s[c],
        f = n[u],
        d = f && f.prototype;
      d && !d[a] && o(d, a, u), (i[u] = i.Array);
    }
  },
  function (t, e, r) {
    "use strict";
    var n = r(53)(!0);
    r(30)(
      String,
      "String",
      function (t) {
        (this._t = String(t)), (this._i = 0);
      },
      function () {
        var t,
          e = this._t,
          r = this._i;
        return r >= e.length
          ? { value: void 0, done: !0 }
          : ((t = n(e, r)), (this._i += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, e, r) {
    t.exports = { default: r(67), __esModule: !0 };
  },
  function (t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n,
      o = r(68),
      i = (n = o) && n.__esModule ? n : { default: n };
    e.default = function (t) {
      return function () {
        var e = t.apply(this, arguments);
        return new i.default(function (t, r) {
          return (function n(o, a) {
            try {
              var s = e[o](a),
                c = s.value;
            } catch (t) {
              return void r(t);
            }
            if (!s.done)
              return i.default.resolve(c).then(
                function (t) {
                  n("next", t);
                },
                function (t) {
                  n("throw", t);
                }
              );
            t(c);
          })("next");
        });
      };
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(46),
      o = r(47),
      i = r(7),
      a = r(9);
    (t.exports = r(30)(
      Array,
      "Array",
      function (t, e) {
        (this._t = a(t)), (this._i = 0), (this._k = e);
      },
      function () {
        var t = this._t,
          e = this._k,
          r = this._i++;
        return !t || r >= t.length
          ? ((this._t = void 0), o(1))
          : o(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]]);
      },
      "values"
    )),
      (i.Arguments = i.Array),
      n("keys"),
      n("values"),
      n("entries");
  },
  function (t, e) {
    t.exports = function () {};
  },
  function (t, e) {
    t.exports = function (t, e) {
      return { value: e, done: !!t };
    };
  },
  function (t, e, r) {
    t.exports = r(4);
  },
  function (t, e, r) {
    "use strict";
    var n = r(50),
      o = r(21),
      i = r(25),
      a = {};
    r(4)(a, r(2)("iterator"), function () {
      return this;
    }),
      (t.exports = function (t, e, r) {
        (t.prototype = n(a, { next: o(1, r) })), i(t, e + " Iterator");
      });
  },
  function (t, e, r) {
    var n = r(3),
      o = r(51),
      i = r(24),
      a = r(18)("IE_PROTO"),
      s = function () {},
      c = function () {
        var t,
          e = r(20)("iframe"),
          n = i.length;
        for (
          e.style.display = "none",
            r(39).appendChild(e),
            e.src = "javascript:",
            (t = e.contentWindow.document).open(),
            t.write("<script>document.F=Object</script>"),
            t.close(),
            c = t.F;
          n--;

        )
          delete c.prototype[i[n]];
        return c();
      };
    t.exports =
      Object.create ||
      function (t, e) {
        var r;
        return (
          null !== t
            ? ((s.prototype = n(t)),
              (r = new s()),
              (s.prototype = null),
              (r[a] = t))
            : (r = c()),
          void 0 === e ? r : o(r, e)
        );
      };
  },
  function (t, e, r) {
    var n = r(11),
      o = r(3),
      i = r(27);
    t.exports = r(5)
      ? Object.defineProperties
      : function (t, e) {
          o(t);
          for (var r, a = i(e), s = a.length, c = 0; s > c; )
            n.f(t, (r = a[c++]), e[r]);
          return t;
        };
  },
  function (t, e, r) {
    var n = r(8),
      o = r(31),
      i = r(18)("IE_PROTO"),
      a = Object.prototype;
    t.exports =
      Object.getPrototypeOf ||
      function (t) {
        return (
          (t = o(t)),
          n(t, i)
            ? t[i]
            : "function" == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? a
            : null
        );
      };
  },
  function (t, e, r) {
    var n = r(14),
      o = r(13);
    t.exports = function (t) {
      return function (e, r) {
        var i,
          a,
          s = String(o(e)),
          c = n(r),
          u = s.length;
        return c < 0 || c >= u
          ? t
            ? ""
            : void 0
          : (i = s.charCodeAt(c)) < 55296 ||
            i > 56319 ||
            c + 1 === u ||
            (a = s.charCodeAt(c + 1)) < 56320 ||
            a > 57343
          ? t
            ? s.charAt(c)
            : i
          : t
          ? s.slice(c, c + 2)
          : a - 56320 + ((i - 55296) << 10) + 65536;
      };
    };
  },
  function (t, e, r) {
    var n = r(32),
      o = r(2)("iterator"),
      i = r(7);
    t.exports = r(1).getIteratorMethod = function (t) {
      if (null != t) return t[o] || t["@@iterator"] || i[n(t)];
    };
  },
  function (t, e, r) {
    var n = r(3),
      o = r(16),
      i = r(2)("species");
    t.exports = function (t, e) {
      var r,
        a = n(t).constructor;
      return void 0 === a || null == (r = n(a)[i]) ? e : o(r);
    };
  },
  function (t, e, r) {
    var n,
      o,
      i,
      a = r(15),
      s = r(76),
      c = r(39),
      u = r(20),
      f = r(0),
      d = f.process,
      p = f.setImmediate,
      l = f.clearImmediate,
      h = f.MessageChannel,
      m = f.Dispatch,
      _ = 0,
      y = {},
      g = function () {
        var t = +this;
        if (y.hasOwnProperty(t)) {
          var e = y[t];
          delete y[t], e();
        }
      },
      v = function (t) {
        g.call(t.data);
      };
    (p && l) ||
      ((p = function (t) {
        for (var e = [], r = 1; arguments.length > r; ) e.push(arguments[r++]);
        return (
          (y[++_] = function () {
            s("function" == typeof t ? t : Function(t), e);
          }),
          n(_),
          _
        );
      }),
      (l = function (t) {
        delete y[t];
      }),
      "process" == r(12)(d)
        ? (n = function (t) {
            d.nextTick(a(g, t, 1));
          })
        : m && m.now
        ? (n = function (t) {
            m.now(a(g, t, 1));
          })
        : h
        ? ((i = (o = new h()).port2),
          (o.port1.onmessage = v),
          (n = a(i.postMessage, i, 1)))
        : f.addEventListener &&
          "function" == typeof postMessage &&
          !f.importScripts
        ? ((n = function (t) {
            f.postMessage(t + "", "*");
          }),
          f.addEventListener("message", v, !1))
        : (n =
            "onreadystatechange" in u("script")
              ? function (t) {
                  c.appendChild(u("script")).onreadystatechange = function () {
                    c.removeChild(this), g.call(t);
                  };
                }
              : function (t) {
                  setTimeout(a(g, t, 1), 0);
                })),
      (t.exports = { set: p, clear: l });
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return { e: !1, v: t() };
      } catch (t) {
        return { e: !0, v: t };
      }
    };
  },
  function (t, e, r) {
    var n = r(3),
      o = r(6),
      i = r(40);
    t.exports = function (t, e) {
      if ((n(t), o(e) && e.constructor === t)) return e;
      var r = i.f(t);
      return (0, r.resolve)(e), r.promise;
    };
  },
  function (t, e, r) {
    t.exports = { default: r(96), __esModule: !0 };
  },
  ,
  function (t, e, r) {
    r(62), (t.exports = r(1).Object.keys);
  },
  function (t, e, r) {
    var n = r(31),
      o = r(27);
    r(63)("keys", function () {
      return function (t) {
        return o(n(t));
      };
    });
  },
  function (t, e, r) {
    var n = r(10),
      o = r(1),
      i = r(17);
    t.exports = function (t, e) {
      var r = (o.Object || {})[t] || Object[t],
        a = {};
      (a[t] = e(r)),
        n(
          n.S +
            n.F *
              i(function () {
                r(1);
              }),
          "Object",
          a
        );
    };
  },
  function (t, e, r) {
    "use strict";
    r.r(e),
      r.d(e, "Headers", function () {
        return l;
      }),
      r.d(e, "Request", function () {
        return b;
      }),
      r.d(e, "Response", function () {
        return x;
      }),
      r.d(e, "DOMException", function () {
        return S;
      }),
      r.d(e, "fetch", function () {
        return I;
      });
    var n = "URLSearchParams" in self,
      o = "Symbol" in self && "iterator" in Symbol,
      i =
        "FileReader" in self &&
        "Blob" in self &&
        (function () {
          try {
            return new Blob(), !0;
          } catch (t) {
            return !1;
          }
        })(),
      a = "FormData" in self,
      s = "ArrayBuffer" in self;
    if (s)
      var c = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]",
        ],
        u =
          ArrayBuffer.isView ||
          function (t) {
            return t && c.indexOf(Object.prototype.toString.call(t)) > -1;
          };
    function f(t) {
      if (
        ("string" != typeof t && (t = String(t)),
        /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
      )
        throw new TypeError("Invalid character in header field name");
      return t.toLowerCase();
    }
    function d(t) {
      return "string" != typeof t && (t = String(t)), t;
    }
    function p(t) {
      var e = {
        next: function () {
          var e = t.shift();
          return { done: void 0 === e, value: e };
        },
      };
      return (
        o &&
          (e[Symbol.iterator] = function () {
            return e;
          }),
        e
      );
    }
    function l(t) {
      (this.map = {}),
        t instanceof l
          ? t.forEach(function (t, e) {
              this.append(e, t);
            }, this)
          : Array.isArray(t)
          ? t.forEach(function (t) {
              this.append(t[0], t[1]);
            }, this)
          : t &&
            Object.getOwnPropertyNames(t).forEach(function (e) {
              this.append(e, t[e]);
            }, this);
    }
    function h(t) {
      if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
      t.bodyUsed = !0;
    }
    function m(t) {
      return new Promise(function (e, r) {
        (t.onload = function () {
          e(t.result);
        }),
          (t.onerror = function () {
            r(t.error);
          });
      });
    }
    function _(t) {
      var e = new FileReader(),
        r = m(e);
      return e.readAsArrayBuffer(t), r;
    }
    function y(t) {
      if (t.slice) return t.slice(0);
      var e = new Uint8Array(t.byteLength);
      return e.set(new Uint8Array(t)), e.buffer;
    }
    function g() {
      return (
        (this.bodyUsed = !1),
        (this._initBody = function (t) {
          var e;
          (this._bodyInit = t),
            t
              ? "string" == typeof t
                ? (this._bodyText = t)
                : i && Blob.prototype.isPrototypeOf(t)
                ? (this._bodyBlob = t)
                : a && FormData.prototype.isPrototypeOf(t)
                ? (this._bodyFormData = t)
                : n && URLSearchParams.prototype.isPrototypeOf(t)
                ? (this._bodyText = t.toString())
                : s && i && (e = t) && DataView.prototype.isPrototypeOf(e)
                ? ((this._bodyArrayBuffer = y(t.buffer)),
                  (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                : s && (ArrayBuffer.prototype.isPrototypeOf(t) || u(t))
                ? (this._bodyArrayBuffer = y(t))
                : (this._bodyText = t = Object.prototype.toString.call(t))
              : (this._bodyText = ""),
            this.headers.get("content-type") ||
              ("string" == typeof t
                ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                : this._bodyBlob && this._bodyBlob.type
                ? this.headers.set("content-type", this._bodyBlob.type)
                : n &&
                  URLSearchParams.prototype.isPrototypeOf(t) &&
                  this.headers.set(
                    "content-type",
                    "application/x-www-form-urlencoded;charset=UTF-8"
                  ));
        }),
        i &&
          ((this.blob = function () {
            var t = h(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }),
          (this.arrayBuffer = function () {
            return this._bodyArrayBuffer
              ? h(this) || Promise.resolve(this._bodyArrayBuffer)
              : this.blob().then(_);
          })),
        (this.text = function () {
          var t,
            e,
            r,
            n = h(this);
          if (n) return n;
          if (this._bodyBlob)
            return (
              (t = this._bodyBlob),
              (e = new FileReader()),
              (r = m(e)),
              e.readAsText(t),
              r
            );
          if (this._bodyArrayBuffer)
            return Promise.resolve(
              (function (t) {
                for (
                  var e = new Uint8Array(t), r = new Array(e.length), n = 0;
                  n < e.length;
                  n++
                )
                  r[n] = String.fromCharCode(e[n]);
                return r.join("");
              })(this._bodyArrayBuffer)
            );
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }),
        a &&
          (this.formData = function () {
            return this.text().then(w);
          }),
        (this.json = function () {
          return this.text().then(JSON.parse);
        }),
        this
      );
    }
    (l.prototype.append = function (t, e) {
      (t = f(t)), (e = d(e));
      var r = this.map[t];
      this.map[t] = r ? r + ", " + e : e;
    }),
      (l.prototype.delete = function (t) {
        delete this.map[f(t)];
      }),
      (l.prototype.get = function (t) {
        return (t = f(t)), this.has(t) ? this.map[t] : null;
      }),
      (l.prototype.has = function (t) {
        return this.map.hasOwnProperty(f(t));
      }),
      (l.prototype.set = function (t, e) {
        this.map[f(t)] = d(e);
      }),
      (l.prototype.forEach = function (t, e) {
        for (var r in this.map)
          this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
      }),
      (l.prototype.keys = function () {
        var t = [];
        return (
          this.forEach(function (e, r) {
            t.push(r);
          }),
          p(t)
        );
      }),
      (l.prototype.values = function () {
        var t = [];
        return (
          this.forEach(function (e) {
            t.push(e);
          }),
          p(t)
        );
      }),
      (l.prototype.entries = function () {
        var t = [];
        return (
          this.forEach(function (e, r) {
            t.push([r, e]);
          }),
          p(t)
        );
      }),
      o && (l.prototype[Symbol.iterator] = l.prototype.entries);
    var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function b(t, e) {
      var r,
        n,
        o = (e = e || {}).body;
      if (t instanceof b) {
        if (t.bodyUsed) throw new TypeError("Already read");
        (this.url = t.url),
          (this.credentials = t.credentials),
          e.headers || (this.headers = new l(t.headers)),
          (this.method = t.method),
          (this.mode = t.mode),
          (this.signal = t.signal),
          o || null == t._bodyInit || ((o = t._bodyInit), (t.bodyUsed = !0));
      } else this.url = String(t);
      if (
        ((this.credentials =
          e.credentials || this.credentials || "same-origin"),
        (!e.headers && this.headers) || (this.headers = new l(e.headers)),
        (this.method =
          ((r = e.method || this.method || "GET"),
          (n = r.toUpperCase()),
          v.indexOf(n) > -1 ? n : r)),
        (this.mode = e.mode || this.mode || null),
        (this.signal = e.signal || this.signal),
        (this.referrer = null),
        ("GET" === this.method || "HEAD" === this.method) && o)
      )
        throw new TypeError("Body not allowed for GET or HEAD requests");
      this._initBody(o);
    }
    function w(t) {
      var e = new FormData();
      return (
        t
          .trim()
          .split("&")
          .forEach(function (t) {
            if (t) {
              var r = t.split("="),
                n = r.shift().replace(/\+/g, " "),
                o = r.join("=").replace(/\+/g, " ");
              e.append(decodeURIComponent(n), decodeURIComponent(o));
            }
          }),
        e
      );
    }
    function x(t, e) {
      e || (e = {}),
        (this.type = "default"),
        (this.status = void 0 === e.status ? 200 : e.status),
        (this.ok = this.status >= 200 && this.status < 300),
        (this.statusText = "statusText" in e ? e.statusText : "OK"),
        (this.headers = new l(e.headers)),
        (this.url = e.url || ""),
        this._initBody(t);
    }
    (b.prototype.clone = function () {
      return new b(this, { body: this._bodyInit });
    }),
      g.call(b.prototype),
      g.call(x.prototype),
      (x.prototype.clone = function () {
        return new x(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new l(this.headers),
          url: this.url,
        });
      }),
      (x.error = function () {
        var t = new x(null, { status: 0, statusText: "" });
        return (t.type = "error"), t;
      });
    var P = [301, 302, 303, 307, 308];
    x.redirect = function (t, e) {
      if (-1 === P.indexOf(e)) throw new RangeError("Invalid status code");
      return new x(null, { status: e, headers: { location: t } });
    };
    var S = self.DOMException;
    try {
      new S();
    } catch (t) {
      ((S = function (t, e) {
        (this.message = t), (this.name = e);
        var r = Error(t);
        this.stack = r.stack;
      }).prototype = Object.create(Error.prototype)),
        (S.prototype.constructor = S);
    }
    function I(t, e) {
      return new Promise(function (r, n) {
        var o = new b(t, e);
        if (o.signal && o.signal.aborted)
          return n(new S("Aborted", "AbortError"));
        var a = new XMLHttpRequest();
        function s() {
          a.abort();
        }
        (a.onload = function () {
          var t,
            e,
            n = {
              status: a.status,
              statusText: a.statusText,
              headers:
                ((t = a.getAllResponseHeaders() || ""),
                (e = new l()),
                t
                  .replace(/\r?\n[\t ]+/g, " ")
                  .split(/\r?\n/)
                  .forEach(function (t) {
                    var r = t.split(":"),
                      n = r.shift().trim();
                    if (n) {
                      var o = r.join(":").trim();
                      e.append(n, o);
                    }
                  }),
                e),
            };
          n.url =
            "responseURL" in a ? a.responseURL : n.headers.get("X-Request-URL");
          var o = "response" in a ? a.response : a.responseText;
          r(new x(o, n));
        }),
          (a.onerror = function () {
            n(new TypeError("Network request failed"));
          }),
          (a.ontimeout = function () {
            n(new TypeError("Network request failed"));
          }),
          (a.onabort = function () {
            n(new S("Aborted", "AbortError"));
          }),
          a.open(o.method, o.url, !0),
          "include" === o.credentials
            ? (a.withCredentials = !0)
            : "omit" === o.credentials && (a.withCredentials = !1),
          "responseType" in a && i && (a.responseType = "blob"),
          o.headers.forEach(function (t, e) {
            a.setRequestHeader(e, t);
          }),
          o.signal &&
            (o.signal.addEventListener("abort", s),
            (a.onreadystatechange = function () {
              4 === a.readyState && o.signal.removeEventListener("abort", s);
            })),
          a.send(void 0 === o._bodyInit ? null : o._bodyInit);
      });
    }
    (I.polyfill = !0),
      self.fetch ||
        ((self.fetch = I),
        (self.Headers = l),
        (self.Request = b),
        (self.Response = x));
  },
  function (t, e, r) {
    var n =
        (function () {
          return this;
        })() || Function("return this")(),
      o =
        n.regeneratorRuntime &&
        Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0,
      i = o && n.regeneratorRuntime;
    if (((n.regeneratorRuntime = void 0), (t.exports = r(66)), o))
      n.regeneratorRuntime = i;
    else
      try {
        delete n.regeneratorRuntime;
      } catch (t) {
        n.regeneratorRuntime = void 0;
      }
  },
  function (t, e) {
    !(function (e) {
      "use strict";
      var r = Object.prototype,
        n = r.hasOwnProperty,
        o = "function" == typeof Symbol ? Symbol : {},
        i = o.iterator || "@@iterator",
        a = o.asyncIterator || "@@asyncIterator",
        s = o.toStringTag || "@@toStringTag",
        c = "object" == typeof t,
        u = e.regeneratorRuntime;
      if (u) c && (t.exports = u);
      else {
        (u = e.regeneratorRuntime = c ? t.exports : {}).wrap = m;
        var f = {},
          d = {};
        d[i] = function () {
          return this;
        };
        var p = Object.getPrototypeOf,
          l = p && p(p(C([])));
        l && l !== r && n.call(l, i) && (d = l);
        var h = (v.prototype = y.prototype = Object.create(d));
        (g.prototype = h.constructor = v),
          (v.constructor = g),
          (v[s] = g.displayName = "GeneratorFunction"),
          (u.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (u.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, v)
                : ((t.__proto__ = v), s in t || (t[s] = "GeneratorFunction")),
              (t.prototype = Object.create(h)),
              t
            );
          }),
          (u.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          (w.prototype[a] = function () {
            return this;
          }),
          (u.AsyncIterator = w),
          (u.async = function (t, e, r, n) {
            var o = new w(m(t, e, r, n));
            return u.isGeneratorFunction(e)
              ? o
              : o.next().then(function (t) {
                  return t.done ? t.value : o.next();
                });
          }),
          b(h),
          (h[s] = "Generator"),
          (h[i] = function () {
            return this;
          }),
          (h.toString = function () {
            return "[object Generator]";
          }),
          (u.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (u.values = C),
          (I.prototype = {
            constructor: I,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(r, n) {
                return (
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, "catchLoc"),
                    c = n.call(i, "finallyLoc");
                  if (s && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), f)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), S(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: C(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          });
      }
      function m(t, e, r, n) {
        var o = e && e.prototype instanceof y ? e : y,
          i = Object.create(o.prototype),
          a = new I(n || []);
        return (
          (i._invoke = (function (t, e, r) {
            var n = "suspendedStart";
            return function (o, i) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === o) throw i;
                return F();
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                  var s = x(a, r);
                  if (s) {
                    if (s === f) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var c = _(t, e, r);
                if ("normal" === c.type) {
                  if (
                    ((n = r.done ? "completed" : "suspendedYield"), c.arg === f)
                  )
                    continue;
                  return { value: c.arg, done: r.done };
                }
                "throw" === c.type &&
                  ((n = "completed"), (r.method = "throw"), (r.arg = c.arg));
              }
            };
          })(t, r, a)),
          i
        );
      }
      function _(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      function y() {}
      function g() {}
      function v() {}
      function b(t) {
        ["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t);
          };
        });
      }
      function w(t) {
        var e;
        this._invoke = function (r, o) {
          function i() {
            return new Promise(function (e, i) {
              !(function e(r, o, i, a) {
                var s = _(t[r], t, o);
                if ("throw" !== s.type) {
                  var c = s.arg,
                    u = c.value;
                  return u && "object" == typeof u && n.call(u, "__await")
                    ? Promise.resolve(u.__await).then(
                        function (t) {
                          e("next", t, i, a);
                        },
                        function (t) {
                          e("throw", t, i, a);
                        }
                      )
                    : Promise.resolve(u).then(function (t) {
                        (c.value = t), i(c);
                      }, a);
                }
                a(s.arg);
              })(r, o, e, i);
            });
          }
          return (e = e ? e.then(i, i) : i());
        };
      }
      function x(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              x(t, e),
              "throw" === e.method)
            )
              return f;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return f;
        }
        var n = _(r, t.iterator, e.arg);
        if ("throw" === n.type)
          return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), f;
        var o = n.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              f)
            : o
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            f);
      }
      function P(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function S(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function I(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(P, this),
          this.reset(!0);
      }
      function C(t) {
        if (t) {
          var e = t[i];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              o = function e() {
                for (; ++r < t.length; )
                  if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (o.next = o);
          }
        }
        return { next: F };
      }
      function F() {
        return { value: void 0, done: !0 };
      }
    })(
      (function () {
        return this;
      })() || Function("return this")()
    );
  },
  function (t, e, r) {
    var n = r(1),
      o = n.JSON || (n.JSON = { stringify: JSON.stringify });
    t.exports = function (t) {
      return o.stringify.apply(o, arguments);
    };
  },
  function (t, e, r) {
    t.exports = { default: r(69), __esModule: !0 };
  },
  function (t, e, r) {
    r(70), r(42), r(41), r(71), r(82), r(83), (t.exports = r(1).Promise);
  },
  function (t, e) {},
  function (t, e, r) {
    "use strict";
    var n,
      o,
      i,
      a,
      s = r(19),
      c = r(0),
      u = r(15),
      f = r(32),
      d = r(10),
      p = r(6),
      l = r(16),
      h = r(72),
      m = r(73),
      _ = r(55),
      y = r(56).set,
      g = r(77)(),
      v = r(40),
      b = r(57),
      w = r(78),
      x = r(58),
      P = c.TypeError,
      S = c.process,
      I = S && S.versions,
      C = (I && I.v8) || "",
      F = c.Promise,
      T = "process" == f(S),
      E = function () {},
      O = (o = v.f),
      A = !!(function () {
        try {
          var t = F.resolve(1),
            e = ((t.constructor = {})[r(2)("species")] = function (t) {
              t(E, E);
            });
          return (
            (T || "function" == typeof PromiseRejectionEvent) &&
            t.then(E) instanceof e &&
            0 !== C.indexOf("6.6") &&
            -1 === w.indexOf("Chrome/66")
          );
        } catch (t) {}
      })(),
      j = function (t) {
        var e;
        return !(!p(t) || "function" != typeof (e = t.then)) && e;
      },
      M = function (t, e) {
        if (!t._n) {
          t._n = !0;
          var r = t._c;
          g(function () {
            for (
              var n = t._v,
                o = 1 == t._s,
                i = 0,
                a = function (e) {
                  var r,
                    i,
                    a,
                    s = o ? e.ok : e.fail,
                    c = e.resolve,
                    u = e.reject,
                    f = e.domain;
                  try {
                    s
                      ? (o || (2 == t._h && R(t), (t._h = 1)),
                        !0 === s
                          ? (r = n)
                          : (f && f.enter(),
                            (r = s(n)),
                            f && (f.exit(), (a = !0))),
                        r === e.promise
                          ? u(P("Promise-chain cycle"))
                          : (i = j(r))
                          ? i.call(r, c, u)
                          : c(r))
                      : u(n);
                  } catch (t) {
                    f && !a && f.exit(), u(t);
                  }
                };
              r.length > i;

            )
              a(r[i++]);
            (t._c = []), (t._n = !1), e && !t._h && L(t);
          });
        }
      },
      L = function (t) {
        y.call(c, function () {
          var e,
            r,
            n,
            o = t._v,
            i = B(t);
          if (
            (i &&
              ((e = b(function () {
                T
                  ? S.emit("unhandledRejection", o, t)
                  : (r = c.onunhandledrejection)
                  ? r({ promise: t, reason: o })
                  : (n = c.console) &&
                    n.error &&
                    n.error("Unhandled promise rejection", o);
              })),
              (t._h = T || B(t) ? 2 : 1)),
            (t._a = void 0),
            i && e.e)
          )
            throw e.v;
        });
      },
      B = function (t) {
        return 1 !== t._h && 0 === (t._a || t._c).length;
      },
      R = function (t) {
        y.call(c, function () {
          var e;
          T
            ? S.emit("rejectionHandled", t)
            : (e = c.onrejectionhandled) && e({ promise: t, reason: t._v });
        });
      },
      k = function (t) {
        var e = this;
        e._d ||
          ((e._d = !0),
          ((e = e._w || e)._v = t),
          (e._s = 2),
          e._a || (e._a = e._c.slice()),
          M(e, !0));
      },
      N = function (t) {
        var e,
          r = this;
        if (!r._d) {
          (r._d = !0), (r = r._w || r);
          try {
            if (r === t) throw P("Promise can't be resolved itself");
            (e = j(t))
              ? g(function () {
                  var n = { _w: r, _d: !1 };
                  try {
                    e.call(t, u(N, n, 1), u(k, n, 1));
                  } catch (t) {
                    k.call(n, t);
                  }
                })
              : ((r._v = t), (r._s = 1), M(r, !1));
          } catch (t) {
            k.call({ _w: r, _d: !1 }, t);
          }
        }
      };
    A ||
      ((F = function (t) {
        h(this, F, "Promise", "_h"), l(t), n.call(this);
        try {
          t(u(N, this, 1), u(k, this, 1));
        } catch (t) {
          k.call(this, t);
        }
      }),
      ((n = function (t) {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }).prototype = r(79)(F.prototype, {
        then: function (t, e) {
          var r = O(_(this, F));
          return (
            (r.ok = "function" != typeof t || t),
            (r.fail = "function" == typeof e && e),
            (r.domain = T ? S.domain : void 0),
            this._c.push(r),
            this._a && this._a.push(r),
            this._s && M(this, !1),
            r.promise
          );
        },
        catch: function (t) {
          return this.then(void 0, t);
        },
      })),
      (i = function () {
        var t = new n();
        (this.promise = t),
          (this.resolve = u(N, t, 1)),
          (this.reject = u(k, t, 1));
      }),
      (v.f = O =
        function (t) {
          return t === F || t === a ? new i(t) : o(t);
        })),
      d(d.G + d.W + d.F * !A, { Promise: F }),
      r(25)(F, "Promise"),
      r(80)("Promise"),
      (a = r(1).Promise),
      d(d.S + d.F * !A, "Promise", {
        reject: function (t) {
          var e = O(this);
          return (0, e.reject)(t), e.promise;
        },
      }),
      d(d.S + d.F * (s || !A), "Promise", {
        resolve: function (t) {
          return x(s && this === a ? F : this, t);
        },
      }),
      d(
        d.S +
          d.F *
            !(
              A &&
              r(81)(function (t) {
                F.all(t).catch(E);
              })
            ),
        "Promise",
        {
          all: function (t) {
            var e = this,
              r = O(e),
              n = r.resolve,
              o = r.reject,
              i = b(function () {
                var r = [],
                  i = 0,
                  a = 1;
                m(t, !1, function (t) {
                  var s = i++,
                    c = !1;
                  r.push(void 0),
                    a++,
                    e.resolve(t).then(function (t) {
                      c || ((c = !0), (r[s] = t), --a || n(r));
                    }, o);
                }),
                  --a || n(r);
              });
            return i.e && o(i.v), r.promise;
          },
          race: function (t) {
            var e = this,
              r = O(e),
              n = r.reject,
              o = b(function () {
                m(t, !1, function (t) {
                  e.resolve(t).then(r.resolve, n);
                });
              });
            return o.e && n(o.v), r.promise;
          },
        }
      );
  },
  function (t, e) {
    t.exports = function (t, e, r, n) {
      if (!(t instanceof e) || (void 0 !== n && n in t))
        throw TypeError(r + ": incorrect invocation!");
      return t;
    };
  },
  function (t, e, r) {
    var n = r(15),
      o = r(74),
      i = r(75),
      a = r(3),
      s = r(28),
      c = r(54),
      u = {},
      f = {};
    ((e = t.exports =
      function (t, e, r, d, p) {
        var l,
          h,
          m,
          _,
          y = p
            ? function () {
                return t;
              }
            : c(t),
          g = n(r, d, e ? 2 : 1),
          v = 0;
        if ("function" != typeof y) throw TypeError(t + " is not iterable!");
        if (i(y)) {
          for (l = s(t.length); l > v; v++)
            if ((_ = e ? g(a((h = t[v]))[0], h[1]) : g(t[v])) === u || _ === f)
              return _;
        } else
          for (m = y.call(t); !(h = m.next()).done; )
            if ((_ = o(m, g, h.value, e)) === u || _ === f) return _;
      }).BREAK = u),
      (e.RETURN = f);
  },
  function (t, e, r) {
    var n = r(3);
    t.exports = function (t, e, r, o) {
      try {
        return o ? e(n(r)[0], r[1]) : e(r);
      } catch (e) {
        var i = t.return;
        throw (void 0 !== i && n(i.call(t)), e);
      }
    };
  },
  function (t, e, r) {
    var n = r(7),
      o = r(2)("iterator"),
      i = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (n.Array === t || i[o] === t);
    };
  },
  function (t, e) {
    t.exports = function (t, e, r) {
      var n = void 0 === r;
      switch (e.length) {
        case 0:
          return n ? t() : t.call(r);
        case 1:
          return n ? t(e[0]) : t.call(r, e[0]);
        case 2:
          return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
        case 3:
          return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
        case 4:
          return n
            ? t(e[0], e[1], e[2], e[3])
            : t.call(r, e[0], e[1], e[2], e[3]);
      }
      return t.apply(r, e);
    };
  },
  function (t, e, r) {
    var n = r(0),
      o = r(56).set,
      i = n.MutationObserver || n.WebKitMutationObserver,
      a = n.process,
      s = n.Promise,
      c = "process" == r(12)(a);
    t.exports = function () {
      var t,
        e,
        r,
        u = function () {
          var n, o;
          for (c && (n = a.domain) && n.exit(); t; ) {
            (o = t.fn), (t = t.next);
            try {
              o();
            } catch (n) {
              throw (t ? r() : (e = void 0), n);
            }
          }
          (e = void 0), n && n.enter();
        };
      if (c)
        r = function () {
          a.nextTick(u);
        };
      else if (!i || (n.navigator && n.navigator.standalone))
        if (s && s.resolve) {
          var f = s.resolve(void 0);
          r = function () {
            f.then(u);
          };
        } else
          r = function () {
            o.call(n, u);
          };
      else {
        var d = !0,
          p = document.createTextNode("");
        new i(u).observe(p, { characterData: !0 }),
          (r = function () {
            p.data = d = !d;
          });
      }
      return function (n) {
        var o = { fn: n, next: void 0 };
        e && (e.next = o), t || ((t = o), r()), (e = o);
      };
    };
  },
  function (t, e, r) {
    var n = r(0).navigator;
    t.exports = (n && n.userAgent) || "";
  },
  function (t, e, r) {
    var n = r(4);
    t.exports = function (t, e, r) {
      for (var o in e) r && t[o] ? (t[o] = e[o]) : n(t, o, e[o]);
      return t;
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      o = r(1),
      i = r(11),
      a = r(5),
      s = r(2)("species");
    t.exports = function (t) {
      var e = "function" == typeof o[t] ? o[t] : n[t];
      a &&
        e &&
        !e[s] &&
        i.f(e, s, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (t, e, r) {
    var n = r(2)("iterator"),
      o = !1;
    try {
      var i = [7][n]();
      (i.return = function () {
        o = !0;
      }),
        Array.from(i, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !o) return !1;
      var r = !1;
      try {
        var i = [7],
          a = i[n]();
        (a.next = function () {
          return { done: (r = !0) };
        }),
          (i[n] = function () {
            return a;
          }),
          t(i);
      } catch (t) {}
      return r;
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(10),
      o = r(1),
      i = r(0),
      a = r(55),
      s = r(58);
    n(n.P + n.R, "Promise", {
      finally: function (t) {
        var e = a(this, o.Promise || i.Promise),
          r = "function" == typeof t;
        return this.then(
          r
            ? function (r) {
                return s(e, t()).then(function () {
                  return r;
                });
              }
            : t,
          r
            ? function (r) {
                return s(e, t()).then(function () {
                  throw r;
                });
              }
            : t
        );
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(10),
      o = r(40),
      i = r(57);
    n(n.S, "Promise", {
      try: function (t) {
        var e = o.f(this),
          r = i(t);
        return (r.e ? e.reject : e.resolve)(r.v), e.promise;
      },
    });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, r) {
    r(64), (t.exports = r(95));
  },
  function (t, e, r) {
    "use strict";
    r.r(e);
    var n,
      o = r(29),
      i = r.n(o),
      a = r(43),
      s = r.n(a),
      c = r(44),
      u = r.n(c),
      f = r(59),
      d = r.n(f),
      p = r(26),
      l = r.n(p);
    (window.GFPPCP = null),
      (n = jQuery),
      (window.GFPPCP = function (t) {
        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
        (this.form = null),
          (this.countryCode = ""),
          (this.paymentMethod = ""),
          (this.activeFeed = null),
          (this.feedActivated = !1),
          (this.strings = gforms_ppcp_frontend_strings);
        var r,
          o = this;
        (o.init = function () {
          (o.form = "#gform_" + o.formId),
            (o.GFCCField = "#field_" + o.formId + "_" + o.ccFieldId),
            (o.paypalButtons = n("#gform_ppcp_smart_payment_buttons")),
            (o.orderIdField = n("#gf_ppcp_order_id")),
            (o.subscriptionIdField = n(
              "#gf_" + o.formId + "_ppcp_subscription_id"
            )),
            (o.totalName = "gform_ppcp_amount_" + o.formId),
            (o.btnArgs = null),
            o.bindFrontendFeedsEvaluated(),
            o.applyPriceClass(),
            o.bindFormTotalUpdate(),
            n(o.form).on("submit", function () {
              o.isGoPrevPage() && o.removeIdFields();
            }),
            gformCalculateTotalPrice(o.formId);
        }),
          (o.bindFrontendFeedsEvaluated = function () {
            gform.addAction("gform_frontend_feeds_evaluated", function (t, e) {
              if (e === o.formId) {
                o.feedActivated = !1;
                var r = o.getFirstActivePPCPFeed(t);
                !1 !== r &&
                  ((o.feedActivated = !0),
                  o.loadActiveFeedSettings(r),
                  o.prepareSmartBtnArgs(o.activeFeed),
                  o.setPayPalScriptSrc(o.activeFeed),
                  o.renderPaymentMethod());
              }
            });
          }),
          (o.getFirstActivePPCPFeed = function (t) {
            var e = t.filter(function (t) {
              return "gravityformsppcp" === t.addonSlug && t.isActivated;
            });
            return !!e.length && e.shift();
          }),
          (o.loadActiveFeedSettings = function (t) {
            o.activeFeed = null;
            for (var e = 0; e < l()(o.feeds).length; e++)
              if (o.feeds[e].feedId === t.feedId)
                return (o.activeFeed = o.feeds[e]), o.activeFeed;
            return !1;
          }),
          (o.prepareSmartBtnArgs = function (t) {
            (o.btnArgs = {
              style: {
                layout: o.smartPaymentButtons.buttonsLayout,
                color: o.smartPaymentButtons.buttonsColor,
                shape: o.smartPaymentButtons.buttonsShape,
              },
            }),
              "authorize" === t.intent || "capture" === t.intent
                ? ((o.btnArgs.onApprove = o.onOrderApprove),
                  (o.btnArgs.createOrder = o.createOrder))
                : "subscription" === t.intent &&
                  ((o.btnArgs.createSubscription = o.createSubscription),
                  (o.btnArgs.onApprove = o.onSubscriptionApprove),
                  (o.btnArgs.onError = o.onSubscriptionError),
                  (o.btnArgs.onCancel = o.onSubscriptionCancel),
                  (o.btnArgs.fundingSource = paypal.FUNDING.PAYPAL));
          }),
          (o.setPayPalScriptSrc = function (t) {
            var e = n('script[data-identifier="gform_ppcp_js_sdk"]'),
              r = e.attr("src");
            (r = r
              .replace("&intent=authorize", "")
              .replace("&intent=subscription", "")
              .replace("&vault=true", "")
              .replace("&intent=capture", "")),
              "authorize" === t.intent || "capture" === t.intent
                ? (r += "&intent=" + t.intent)
                : "subscription" === t.intent &&
                  (r += "&vault=true&intent=subscription"),
              e.attr("src", r);
          }),
          (o.applyPriceClass = function () {
            if (
              void 0 !== window.gf_form_conditional_logic &&
              void 0 !== window.gf_form_conditional_logic[o.formId]
            ) {
              for (
                var t = l()(window.gf_form_conditional_logic[o.formId].fields),
                  e = d()(window.gf_form_conditional_logic[o.formId].fields),
                  r = [],
                  i = 0;
                i < e.length;
                i++
              )
                e[i].length && r.push(t[i]);
              for (var a = 0; a < r.length; a++)
                n("#field_" + o.formId + "_" + r[a])
                  .not(".gfield_price")
                  .addClass("gform_ppcp_field_price");
            }
          }),
          (o.bindFormTotalUpdate = function () {
            gform.addFilter(
              "gform_product_total",
              function (t, e) {
                return (
                  "0" === e ||
                    (void 0 !== window[o.totalName] &&
                      window[o.totalName] !== t &&
                      o.removeIdFields(),
                    (window[o.totalName] = t),
                    o.renderPayPalField()),
                  t
                );
              },
              51
            );
          }),
          (o.bindSpinnerTargetElem = function () {
            gform.addFilter("gform_spinner_target_elem", function (t) {
              return n(
                "#gform_wrapper_" +
                  o.formId +
                  " .gform_next_button, #gform_send_resume_link_button_" +
                  o.formId +
                  ", #gform_ppcp_smart_payment_buttons"
              );
            });
          }),
          (o.getDiscountTotal = function () {
            var t = 0,
              e = void 0;
            if (
              void 0 !== window["gf_coupons" + o.formId] &&
              "form_total" === o.activeFeed.paymentAmount
            ) {
              for (
                var r = d()(window["gf_coupons" + o.formId]).length, n = 0;
                n < r;
                n++
              )
                "flat" === (e = d()(window["gf_coupons" + o.formId])[n]).type &&
                  (t += gform.applyFilters(
                    "gform_coupons_discount_amount",
                    e.amount,
                    e.type,
                    e.amount,
                    o.itemTotal,
                    t
                  ));
              for (var i = 0; i < r; i++)
                if (
                  "percentage" ===
                  (e = d()(window["gf_coupons" + o.formId])[i]).type
                ) {
                  var a = e.amount,
                    s = gformRoundPrice(
                      ((o.itemTotal + o.shipping - t) * a) / 100
                    );
                  t += gform.applyFilters(
                    "gform_coupons_discount_amount",
                    s,
                    e.type,
                    a,
                    o.itemTotal,
                    t
                  );
                }
            }
            return gformRoundPrice(
              Math.abs(
                gform.applyFilters(
                  "gform_ppcp_discount_total",
                  gformRoundPrice(t),
                  o.formId,
                  gformRoundPrice(window[o.totalName])
                )
              )
            );
          }),
          (o.getOrderData = function () {
            (o.items = []),
              (o.itemTotal = o.shipping = 0),
              n.ajax({
                async: !1,
                url: gforms_ppcp_frontend_strings.ajaxurl,
                dataType: "json",
                method: "POST",
                data: {
                  action: "gfppcp_get_order_data",
                  nonce: gforms_ppcp_frontend_strings.create_order_nonce,
                  form_id: o.formId,
                  feed_id: o.activeFeed.feedId,
                  data: n(o.form).serialize(),
                },
                success: function (t) {
                  t.success &&
                    ((o.items = t.data.items),
                    (o.itemTotal = t.data.itemTotal),
                    "form_total" !== o.activeFeed.paymentAmount &&
                      (window[o.totalName] = o.itemTotal),
                    (o.shipping = t.data.shipping));
                },
              });
          }),
          (o.getMergeTagValue = function (t) {
            return "" === t
              ? ""
              : GFMergeTag.replaceMergeTags(o.formId, "{:" + t + "}");
          }),
          (o.updateOrderDetails = function () {
            var t = o.activeFeed,
              e = {
                name: {
                  given_name: o.getMergeTagValue(t.first_name),
                  surname: o.getMergeTagValue(t.last_name),
                },
              };
            "" !== o.countryCode &&
              (e.address = {
                address_line_1: o.getMergeTagValue(t.address_line1),
                address_line_2: o.getMergeTagValue(t.address_line2),
                admin_area_2: o.getMergeTagValue(t.address_city),
                admin_area_1: o.getMergeTagValue(t.address_state),
                postal_code: o.getMergeTagValue(t.address_zip),
                country_code: o.countryCode,
              }),
              "" !== o.getMergeTagValue(t.email) &&
                (e.email_address = o.getMergeTagValue(t.email));
            var r = "1" === t.no_shipping ? "NO_SHIPPING" : "GET_FROM_FILE",
              n =
                "0" === t.no_shipping
                  ? {
                      name: {
                        full_name:
                          o.getMergeTagValue(t.first_name) +
                          " " +
                          o.getMergeTagValue(t.last_name),
                      },
                    }
                  : {};
            "NO_SHIPPING" !== r &&
              "" !== o.countryCode &&
              (n.address = e.address);
            var i = {
                item_total: {
                  value: gformRoundPrice(o.itemTotal).toString(),
                  currency_code: o.currency,
                },
                shipping: {
                  value: gformRoundPrice(o.shipping).toString(),
                  currency_code: o.currency,
                },
              },
              a = o.getDiscountTotal();
            a > 0 &&
              (i.discount = { value: a.toString(), currency_code: o.currency });
            var s = [
              {
                amount: {
                  value: gformRoundPrice(window[o.totalName]).toString(),
                  currency_code: o.currency,
                  breakdown: i,
                },
                description: t.feedName,
                items: o.items,
              },
            ];
            return (
              "NO_SHIPPING" !== r && (s[0].shipping = n),
              {
                payer: e,
                purchase_units: s,
                application_context: { shipping_preference: r },
              }
            );
          }),
          (o.createOrder = u()(
            i.a.mark(function t() {
              var e;
              return i.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((e = ""), !o.orderIdField.length)) {
                          t.next = 3;
                          break;
                        }
                        return t.abrupt("return", o.orderIdField.val());
                      case 3:
                        if (
                          ((o.countryCode = o.getMergeTagValue(
                            o.activeFeed.address_country
                          )),
                          "" === o.countryCode)
                        ) {
                          t.next = 7;
                          break;
                        }
                        return (t.next = 7), o.getCountryCode(o.countryCode);
                      case 7:
                        return (t.next = 9), o.getOrderData();
                      case 9:
                        return (
                          (t.next = 11),
                          fetch(
                            gforms_ppcp_frontend_strings.ajaxurl +
                              "?action=gfppcp_create_order",
                            {
                              method: "POST",
                              headers: { "content-type": "application/json" },
                              body: s()({
                                nonce:
                                  gforms_ppcp_frontend_strings.create_order_nonce,
                                data: o.updateOrderDetails(),
                                form_id: o.formId,
                                feed_id: o.activeFeed.feedId,
                              }),
                            }
                          )
                            .then(function (t) {
                              return t.json();
                            })
                            .then(function (t) {
                              if (!t.success)
                                return (
                                  o.displayCardError(t.data.message),
                                  o.resetPayPalStatus(),
                                  !1
                                );
                              (e = t.data.orderID),
                                n(o.form).append(
                                  n(
                                    '<input type="hidden" id="gf_ppcp_order_id" name="ppcp_order_id" />'
                                  ).val(e)
                                ),
                                o.resetCardErrors();
                            })
                        );
                      case 11:
                        return t.abrupt("return", e);
                      case 12:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          )),
          (o.onOrderApprove = function (t, e) {
            gformAddSpinner(o.formId), n(o.form).submit();
          }),
          (o.canShowSmartButtons = function () {
            return (
              "show" === gf_check_field_rule(o.formId, 0) &&
              "show" === gf_check_field_rule(o.formId, o.ccFieldId) &&
              o.feedActivated &&
              window[o.totalName] &&
              "PayPal Checkout" === o.paymentMethod &&
              o.isLastPage()
            );
          }),
          (o.canShowCustomCardFields = function () {
            return (
              "Credit Card" === o.paymentMethod &&
              paypal.HostedFields.isEligible() &&
              window[o.totalName] > 0 &&
              "subscription" !== o.activeFeed.intent
            );
          }),
          (o.renderPayPalField = function () {
            "Credit Card" === o.paymentMethod
              ? o.renderCustomCardFields()
              : o.renderPayPalButtons();
          }),
          (o.renderPayPalButtons = function () {
            if (
              (n(".ginput_container_custom_card_fields").hide(),
              !o.canShowSmartButtons())
            )
              return (
                o.togglePaypalButtons("none"),
                void o.toggleSubmitButton("visible")
              );
            o.toggleSubmitButton("hidden"),
              o.togglePaypalButtons("inline-block"),
              o.maybeUpdatePayPalCreditAmount(),
              paypal.Buttons.instances.length ||
                (o.bindSpinnerTargetElem(),
                o.maybeRenderCreditMessages(),
                paypal
                  .Buttons(o.btnArgs)
                  .render("#gform_ppcp_smart_payment_buttons"),
                n("#paypal_credit_messages").prependTo(
                  "#gform_ppcp_smart_payment_buttons"
                ));
          }),
          (o.maybeRenderCreditMessages = function () {
            o.displayCreditMessages &&
              n(
                '<div id="paypal_credit_messages" data-pp-message data-pp-style-layout="text" data-pp-style-logo-type="inline" data-pp-style-color="black" data-pp-amount=""></div>'
              ).insertBefore(n("#gform_ppcp_smart_payment_buttons"));
          }),
          (o.maybeUpdatePayPalCreditAmount = function () {
            var t = n("#paypal_credit_messages");
            t.length && t.attr("data-pp-amount", window[o.totalName]);
          }),
          (o.createSubscription =
            ((r = u()(
              i.a.mark(function t(e, r) {
                var a;
                return i.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            gformAddSpinner(o.formId),
                            o.subscriptionIdField.length && n(o.form).submit(),
                            (a = ""),
                            (t.next = 5),
                            fetch(
                              gforms_ppcp_frontend_strings.ajaxurl +
                                "?action=gfppcp_create_subscription",
                              {
                                method: "POST",
                                headers: { "content-type": "application/json" },
                                body: s()({
                                  nonce:
                                    gforms_ppcp_frontend_strings.create_subscription_nonce,
                                  form_data: n(o.form).serialize(),
                                  form_id: o.formId,
                                  feed_id: o.activeFeed.feedId,
                                }),
                              }
                            )
                              .then(function (t) {
                                return t.json();
                              })
                              .then(function (t) {
                                if (!t.success)
                                  return (
                                    o.displayCardError(t.data.message),
                                    o.resetPayPalStatus(),
                                    !1
                                  );
                                (a = t.data), o.resetCardErrors();
                              })
                          );
                        case 5:
                          return (
                            (a.application_context.user_action = "CONTINUE"),
                            t.abrupt("return", r.subscription.create(a))
                          );
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            )),
            function (t, e) {
              return r.apply(this, arguments);
            })),
          (o.onSubscriptionApprove = function (t, e) {
            0 === o.subscriptionIdField.length &&
              n(o.form).append(
                n(
                  '<input type="hidden" id="gf_' +
                    o.formId +
                    '_ppcp_subscription_id" name="ppcp_subscription_id" />'
                ).val(t.subscriptionID)
              ),
              n(o.form).submit();
          }),
          (o.onSubscriptionError = function () {
            o.displayCardError(gforms_ppcp_frontend_strings.catch_all_error);
          }),
          (o.onSubscriptionCancel = function () {
            o.resetCardErrors(), o.hideFormSpinner();
          }),
          (o.renderCustomCardFields = function () {
            if (o.canShowCustomCardFields()) {
              if (
                !n(o.form).data("gfppcpcustomcardrendered") &&
                !o.requestingCards
              ) {
                var t = n(
                    "#input_" + o.formId + "_" + o.ccFieldId + "_1"
                  ).text(),
                  e = n("#input_" + o.formId + "_" + o.ccFieldId + "_2").text(),
                  r = n("#input_" + o.formId + "_" + o.ccFieldId + "_3").text();
                n(
                  "#input_" +
                    o.formId +
                    "_" +
                    o.ccFieldId +
                    "_1, #input_" +
                    o.formId +
                    "_" +
                    o.ccFieldId +
                    "_2, #input_" +
                    o.formId +
                    "_" +
                    o.ccFieldId +
                    "_3"
                ).text(""),
                  paypal.HostedFields.render({
                    createOrder: o.createOrder,
                    styles: o.cardStyle,
                    fields: {
                      number: {
                        selector:
                          "#input_" + o.formId + "_" + o.ccFieldId + "_1",
                        placeholder: t,
                      },
                      cvv: {
                        selector:
                          "#input_" + o.formId + "_" + o.ccFieldId + "_3",
                        placeholder: r,
                      },
                      expirationDate: {
                        selector:
                          "#input_" + o.formId + "_" + o.ccFieldId + "_2",
                        placeholder: e,
                      },
                    },
                  }).then(function (t) {
                    n(o.form).attr("data-gfppcpcustomcardrendered", !0),
                      (o.requestingCards = !1),
                      t.on("focus", function (t) {
                        "number" === t.emittedBy &&
                          wp.a11y.speak(
                            n(
                              "#field_" +
                                o.formId +
                                "_" +
                                o.ccFieldId +
                                "_supported_creditcards"
                            ).text()
                          );
                      }),
                      t.on("cardTypeChange", function (t) {
                        var e = void 0,
                          r = n("#input_" + o.formId + "_" + o.ccFieldId + "_1")
                            .parents(".gfield")
                            .find(".gform_card_icon_container");
                        1 !== t.cards.length
                          ? (e = null)
                          : "american express" ===
                              (e = t.cards[0].niceType.toLowerCase()) &&
                            (e = "amex"),
                          e
                            ? (n(r)
                                .find(".gform_card_icon")
                                .removeClass("gform_card_icon_selected")
                                .addClass("gform_card_icon_inactive"),
                              n(r)
                                .find(".gform_card_icon_" + e)
                                .removeClass("gform_card_icon_inactive")
                                .addClass("gform_card_icon_selected"),
                              (t.cards[0].type = e),
                              o.isCardSupported(t.cards[0]))
                            : n(r)
                                .find(".gform_card_icon")
                                .removeClass(
                                  "gform_card_icon_selected gform_card_icon_inactive"
                                ),
                          n("#ppcp_credit_card_type").length
                            ? n("#ppcp_credit_card_type").val(
                                t.cards[0].niceType
                              )
                            : n(o.form).append(
                                n(
                                  '<input type="hidden" name="ppcp_credit_card_type" id="ppcp_credit_card_type" />'
                                ).val(t.cards[0].niceType)
                              );
                      }),
                      n(o.form).on("submit", function (e) {
                        if (
                          !o.feedActivated ||
                          "Credit Card" !== o.paymentMethod ||
                          "1" === n("#gform_save_" + o.formId).val() ||
                          n(this).data("gfppcpsubmitting") ||
                          window[o.totalName] <= 0 ||
                          !o.isCreditCardOnPage() ||
                          o.isGoPrevPage() ||
                          ("undefined" != typeof gformIsRecaptchaPending &&
                            gformIsRecaptchaPending(n(o.form)))
                        )
                          return !0;
                        gformAddSpinner(o.formId),
                          e.preventDefault(),
                          n(o.form).data("gfppcpsubmitting") ||
                            n(o.form).data("gfppcpsubmitting", !0);
                        var r = t.getState();
                        if (
                          !l()(r.fields).every(function (t) {
                            return r.fields[t].isValid;
                          })
                        )
                          return (
                            o.displayCardError(
                              gforms_ppcp_frontend_strings.card_info_error
                            ),
                            o.resetPayPalStatus(),
                            !1
                          );
                        o.resetCardErrors();
                        var i = { contingencies: ["3D_SECURE"] };
                        n("#input_" + o.formId + "_" + o.ccFieldId + "_5")
                          .length &&
                          (i.cardholderName = n(
                            "#input_" + o.formId + "_" + o.ccFieldId + "_5"
                          ).val()),
                          t
                            .submit(i)
                            .then(function (t) {
                              void 0 === t.liabilityShifted ||
                              t.liabilityShifted
                                ? n(o.form).submit()
                                : "SKIPPED_BY_BUYER" === t.authenticationReason
                                ? confirm(
                                    gforms_ppcp_frontend_strings.skipped_by_buyer
                                  ) && n(o.form).submit()
                                : (o.displayCardError(
                                    gforms_ppcp_frontend_strings.threed_secure_error
                                  ),
                                  o.resetPayPalStatus());
                            })
                            .catch(function (t) {
                              o.resetPayPalStatus(),
                                t.hasOwnProperty("details") &&
                                  o.displayCardError(t.details[0].description);
                            });
                      });
                  }),
                  (o.requestingCards = !0);
              }
              n(".ginput_container_custom_card_fields").show(),
                o.toggleSubmitButton("visible"),
                o.paypalButtons.hide();
            } else n(".ginput_container_custom_card_fields").hide();
          }),
          (o.getCountryCode = function (t) {
            return n.ajax({
              async: !1,
              url: gforms_ppcp_frontend_strings.ajaxurl,
              dataType: "json",
              method: "POST",
              data: {
                action: "gfppcp_get_country_code",
                nonce: gforms_ppcp_frontend_strings.on_approve_nonce,
                country: t,
                feed_id: o.activeFeed.feedId,
              },
              success: function (t) {
                t.success && (o.countryCode = t.data.code);
              },
            });
          }),
          (o.displayPaymentMethod = function (t) {
            o.feedActivated
              ? (1 === l()(o.paymentMethods).length && "PayPal Checkout" === t
                  ? n(".gform_ppcp_custom_card_fields").hide()
                  : n(".gform_ppcp_custom_card_fields").show(),
                "string" == typeof t
                  ? (o.paymentMethod = t)
                  : (t.hasOwnProperty("target") &&
                      (o.removeIdFields(), (t = n(t.target))),
                    (o.paymentMethod = t.val()),
                    o.resetCardErrors()))
              : (n(".gform_ppcp_custom_card_fields").hide(),
                (o.paymentMethod = "")),
              o.renderPayPalField();
          }),
          (o.renderPaymentMethod = function () {
            var t = n(".gform_ppcp_payment_method select"),
              e =
                l()(o.paymentMethods).length > 1
                  ? t.val()
                  : o.paymentMethods[0];
            o.displayPaymentMethod(e), t.on("change", o.displayPaymentMethod);
          }),
          (o.toggleSubmitButton = function (t) {
            var e = n("#gform_submit_button_" + o.formId);
            e.css("visibility", t),
              "hidden" === t
                ? (e.css("position", "absolute"), e.css("left", "-9999em"))
                : (e.css("position", "static"), e.css("left", "0"));
          }),
          (o.togglePaypalButtons = function (t) {
            n(o.paypalButtons).css("display", t);
          }),
          (o.isCreditCardOnPage = function () {
            var t = o.getCurrentPageNumber();
            return !o.ccPage || !t || o.ccPage === t;
          }),
          (o.getCurrentPageNumber = function () {
            var t = n("#gform_source_page_number_" + o.formId);
            return t.length > 0 && parseInt(t.val(), 10);
          }),
          (o.isLastPage = function () {
            var t = n("#gform_target_page_number_" + o.formId);
            return !(t.length > 0) || "0" === t.val();
          }),
          (o.isCardSupported = function (t) {
            -1 === n.inArray(t.type, l()(window.gf_cc_rules))
              ? o.displayCardError(
                  t.niceType +
                    " " +
                    gforms_ppcp_frontend_strings.card_not_supported
                )
              : o.resetCardErrors();
          }),
          (o.displayCardError = function (t) {
            void 0 === t && (t = "");
            var e = o.getMessageContainerSelector();
            n(e).find(".validation_message").length ||
              n(e).append(
                '<div class="gfield_description validation_message"></div>'
              );
            var r = o.getCardErrors();
            "" !== t &&
              (n(e).addClass("gfield_error"),
              n(r[0]).html(t).show(),
              wp.a11y.speak(t, "assertive"),
              o.hideFormSpinner());
          }),
          (o.resetCardErrors = function () {
            var t = o.getMessageContainerSelector(),
              e = o.getCardErrors();
            n(t).removeClass("gfield_error"), n(e[0]).html("");
          }),
          (o.getMessageContainerSelector = function () {
            var t = o.GFCCField;
            return (
              n(t).is(":hidden") && (t = "#gform_ppcp_smart_payment_buttons"), t
            );
          }),
          (o.getCardErrors = function () {
            var t = o.getMessageContainerSelector();
            return n(t).find(".validation_message");
          }),
          (o.hideFormSpinner = function () {
            n("#gform_ajax_spinner_" + o.formId).length > 0 &&
              n("#gform_ajax_spinner_" + o.formId).remove();
          }),
          (o.resetPayPalStatus = function () {
            n(o.form).data("gfppcpsubmitting", !1),
              n("#gform_ajax_spinner_" + o.formId).remove(),
              o.isLastPage() && (window["gf_submitting_" + o.formId] = !1);
          }),
          (o.isGoPrevPage = function () {
            var t = parseInt(
                n("#gform_source_page_number_" + o.formId).val(),
                10
              ),
              e = parseInt(
                n("#gform_target_page_number_" + o.formId).val(),
                10
              );
            return t > e && 0 !== e;
          }),
          (o.removeIdFields = function () {
            o.orderIdField.remove(), o.subscriptionIdField.remove();
          }),
          o.init();
      });
  },
  function (t, e, r) {
    r(97), (t.exports = r(1).Object.values);
  },
  function (t, e, r) {
    var n = r(10),
      o = r(98)(!1);
    n(n.S, "Object", {
      values: function (t) {
        return o(t);
      },
    });
  },
  function (t, e, r) {
    var n = r(5),
      o = r(27),
      i = r(9),
      a = r(99).f;
    t.exports = function (t) {
      return function (e) {
        for (var r, s = i(e), c = o(s), u = c.length, f = 0, d = []; u > f; )
          (r = c[f++]), (n && !a.call(s, r)) || d.push(t ? [r, s[r]] : s[r]);
        return d;
      };
    };
  },
  function (t, e) {
    e.f = {}.propertyIsEnumerable;
  },
]);
