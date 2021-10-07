/*! This file is auto-generated */
(this.wp = this.wp || {}),
  (this.wp.i18n = (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var i = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var i in t)
            n.d(
              r,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = "Vhyj"))
    );
  })({
    "4Z/T": function (t, e, n) {
      var r;
      !(function () {
        "use strict";
        var i = {
          not_string: /[^s]/,
          not_bool: /[^t]/,
          not_type: /[^T]/,
          not_primitive: /[^v]/,
          number: /[diefg]/,
          numeric_arg: /[bcdiefguxX]/,
          json: /[j]/,
          not_json: /[^j]/,
          text: /^[^\x25]+/,
          modulo: /^\x25{2}/,
          placeholder:
            /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
          key: /^([a-z_][a-z_\d]*)/i,
          key_access: /^\.([a-z_][a-z_\d]*)/i,
          index_access: /^\[(\d+)\]/,
          sign: /^[+-]/,
        };
        function o(t) {
          return s(l(t), arguments);
        }
        function a(t, e) {
          return o.apply(null, [t].concat(e || []));
        }
        function s(t, e) {
          var n,
            r,
            a,
            s,
            u,
            l,
            c,
            p,
            f,
            d = 1,
            h = t.length,
            g = "";
          for (r = 0; r < h; r++)
            if ("string" == typeof t[r]) g += t[r];
            else if ("object" == typeof t[r]) {
              if ((s = t[r]).keys)
                for (n = e[d], a = 0; a < s.keys.length; a++) {
                  if (null == n)
                    throw new Error(
                      o(
                        '[sprintf] Cannot access property "%s" of undefined value "%s"',
                        s.keys[a],
                        s.keys[a - 1]
                      )
                    );
                  n = n[s.keys[a]];
                }
              else n = s.param_no ? e[s.param_no] : e[d++];
              if (
                (i.not_type.test(s.type) &&
                  i.not_primitive.test(s.type) &&
                  n instanceof Function &&
                  (n = n()),
                i.numeric_arg.test(s.type) && "number" != typeof n && isNaN(n))
              )
                throw new TypeError(
                  o("[sprintf] expecting number but found %T", n)
                );
              switch ((i.number.test(s.type) && (p = n >= 0), s.type)) {
                case "b":
                  n = parseInt(n, 10).toString(2);
                  break;
                case "c":
                  n = String.fromCharCode(parseInt(n, 10));
                  break;
                case "d":
                case "i":
                  n = parseInt(n, 10);
                  break;
                case "j":
                  n = JSON.stringify(n, null, s.width ? parseInt(s.width) : 0);
                  break;
                case "e":
                  n = s.precision
                    ? parseFloat(n).toExponential(s.precision)
                    : parseFloat(n).toExponential();
                  break;
                case "f":
                  n = s.precision
                    ? parseFloat(n).toFixed(s.precision)
                    : parseFloat(n);
                  break;
                case "g":
                  n = s.precision
                    ? String(Number(n.toPrecision(s.precision)))
                    : parseFloat(n);
                  break;
                case "o":
                  n = (parseInt(n, 10) >>> 0).toString(8);
                  break;
                case "s":
                  (n = String(n)),
                    (n = s.precision ? n.substring(0, s.precision) : n);
                  break;
                case "t":
                  (n = String(!!n)),
                    (n = s.precision ? n.substring(0, s.precision) : n);
                  break;
                case "T":
                  (n = Object.prototype.toString
                    .call(n)
                    .slice(8, -1)
                    .toLowerCase()),
                    (n = s.precision ? n.substring(0, s.precision) : n);
                  break;
                case "u":
                  n = parseInt(n, 10) >>> 0;
                  break;
                case "v":
                  (n = n.valueOf()),
                    (n = s.precision ? n.substring(0, s.precision) : n);
                  break;
                case "x":
                  n = (parseInt(n, 10) >>> 0).toString(16);
                  break;
                case "X":
                  n = (parseInt(n, 10) >>> 0).toString(16).toUpperCase();
              }
              i.json.test(s.type)
                ? (g += n)
                : (!i.number.test(s.type) || (p && !s.sign)
                    ? (f = "")
                    : ((f = p ? "+" : "-"),
                      (n = n.toString().replace(i.sign, ""))),
                  (l = s.pad_char
                    ? "0" === s.pad_char
                      ? "0"
                      : s.pad_char.charAt(1)
                    : " "),
                  (c = s.width - (f + n).length),
                  (u = s.width && c > 0 ? l.repeat(c) : ""),
                  (g += s.align
                    ? f + n + u
                    : "0" === l
                    ? f + u + n
                    : u + f + n));
            }
          return g;
        }
        var u = Object.create(null);
        function l(t) {
          if (u[t]) return u[t];
          for (var e, n = t, r = [], o = 0; n; ) {
            if (null !== (e = i.text.exec(n))) r.push(e[0]);
            else if (null !== (e = i.modulo.exec(n))) r.push("%");
            else {
              if (null === (e = i.placeholder.exec(n)))
                throw new SyntaxError("[sprintf] unexpected placeholder");
              if (e[2]) {
                o |= 1;
                var a = [],
                  s = e[2],
                  l = [];
                if (null === (l = i.key.exec(s)))
                  throw new SyntaxError(
                    "[sprintf] failed to parse named argument key"
                  );
                for (a.push(l[1]); "" !== (s = s.substring(l[0].length)); )
                  if (null !== (l = i.key_access.exec(s))) a.push(l[1]);
                  else {
                    if (null === (l = i.index_access.exec(s)))
                      throw new SyntaxError(
                        "[sprintf] failed to parse named argument key"
                      );
                    a.push(l[1]);
                  }
                e[2] = a;
              } else o |= 2;
              if (3 === o)
                throw new Error(
                  "[sprintf] mixing positional and named placeholders is not (yet) supported"
                );
              r.push({
                placeholder: e[0],
                param_no: e[1],
                keys: e[2],
                sign: e[3],
                pad_char: e[4],
                align: e[5],
                width: e[6],
                precision: e[7],
                type: e[8],
              });
            }
            n = n.substring(e[0].length);
          }
          return (u[t] = r);
        }
        (e.sprintf = o),
          (e.vsprintf = a),
          "undefined" != typeof window &&
            ((window.sprintf = o),
            (window.vsprintf = a),
            void 0 ===
              (r = function () {
                return { sprintf: o, vsprintf: a };
              }.call(e, n, e, t)) || (t.exports = r));
      })();
    },
    "4eJC": function (t, e, n) {
      t.exports = function (t, e) {
        var n,
          r,
          i = 0;
        function o() {
          var o,
            a,
            s = n,
            u = arguments.length;
          t: for (; s; ) {
            if (s.args.length === arguments.length) {
              for (a = 0; a < u; a++)
                if (s.args[a] !== arguments[a]) {
                  s = s.next;
                  continue t;
                }
              return (
                s !== n &&
                  (s === r && (r = s.prev),
                  (s.prev.next = s.next),
                  s.next && (s.next.prev = s.prev),
                  (s.next = n),
                  (s.prev = null),
                  (n.prev = s),
                  (n = s)),
                s.val
              );
            }
            s = s.next;
          }
          for (o = new Array(u), a = 0; a < u; a++) o[a] = arguments[a];
          return (
            (s = { args: o, val: t.apply(null, o) }),
            n ? ((n.prev = s), (s.next = n)) : (r = s),
            i === e.maxSize ? ((r = r.prev).next = null) : i++,
            (n = s),
            s.val
          );
        }
        return (
          (e = e || {}),
          (o.clear = function () {
            (n = null), (r = null), (i = 0);
          }),
          o
        );
      };
    },
    Vhyj: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "sprintf", function () {
          return u;
        }),
        n.d(e, "createI18n", function () {
          return _;
        }),
        n.d(e, "defaultI18n", function () {
          return w;
        }),
        n.d(e, "setLocaleData", function () {
          return F;
        }),
        n.d(e, "resetLocaleData", function () {
          return S;
        }),
        n.d(e, "getLocaleData", function () {
          return k;
        }),
        n.d(e, "subscribe", function () {
          return j;
        }),
        n.d(e, "__", function () {
          return T;
        }),
        n.d(e, "_x", function () {
          return O;
        }),
        n.d(e, "_n", function () {
          return L;
        }),
        n.d(e, "_nx", function () {
          return D;
        }),
        n.d(e, "isRTL", function () {
          return P;
        }),
        n.d(e, "hasTranslation", function () {
          return I;
        });
      var r = n("4eJC"),
        i = n.n(r),
        o = n("4Z/T"),
        a = n.n(o);
      const s = i()(console.error);
      function u(t, ...e) {
        try {
          return a.a.sprintf(t, ...e);
        } catch (e) {
          return s("sprintf error: \n\n" + e.toString()), t;
        }
      }
      var l, c, p, f;
      (l = {
        "(": 9,
        "!": 8,
        "*": 7,
        "/": 7,
        "%": 7,
        "+": 6,
        "-": 6,
        "<": 5,
        "<=": 5,
        ">": 5,
        ">=": 5,
        "==": 4,
        "!=": 4,
        "&&": 3,
        "||": 2,
        "?": 1,
        "?:": 1,
      }),
        (c = ["(", "?"]),
        (p = { ")": ["("], ":": ["?", "?:"] }),
        (f = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/);
      var d = {
        "!": function (t) {
          return !t;
        },
        "*": function (t, e) {
          return t * e;
        },
        "/": function (t, e) {
          return t / e;
        },
        "%": function (t, e) {
          return t % e;
        },
        "+": function (t, e) {
          return t + e;
        },
        "-": function (t, e) {
          return t - e;
        },
        "<": function (t, e) {
          return t < e;
        },
        "<=": function (t, e) {
          return t <= e;
        },
        ">": function (t, e) {
          return t > e;
        },
        ">=": function (t, e) {
          return t >= e;
        },
        "==": function (t, e) {
          return t === e;
        },
        "!=": function (t, e) {
          return t !== e;
        },
        "&&": function (t, e) {
          return t && e;
        },
        "||": function (t, e) {
          return t || e;
        },
        "?:": function (t, e, n) {
          if (t) throw e;
          return n;
        },
      };
      function h(t) {
        var e = (function (t) {
          for (var e, n, r, i, o = [], a = []; (e = t.match(f)); ) {
            for (
              n = e[0], (r = t.substr(0, e.index).trim()) && o.push(r);
              (i = a.pop());

            ) {
              if (p[n]) {
                if (p[n][0] === i) {
                  n = p[n][1] || n;
                  break;
                }
              } else if (c.indexOf(i) >= 0 || l[i] < l[n]) {
                a.push(i);
                break;
              }
              o.push(i);
            }
            p[n] || a.push(n), (t = t.substr(e.index + n.length));
          }
          return (t = t.trim()) && o.push(t), o.concat(a.reverse());
        })(t);
        return function (t) {
          return (function (t, e) {
            var n,
              r,
              i,
              o,
              a,
              s,
              u = [];
            for (n = 0; n < t.length; n++) {
              if (((a = t[n]), (o = d[a]))) {
                for (r = o.length, i = Array(r); r--; ) i[r] = u.pop();
                try {
                  s = o.apply(null, i);
                } catch (t) {
                  return t;
                }
              } else s = e.hasOwnProperty(a) ? e[a] : +a;
              u.push(s);
            }
            return u[0];
          })(e, t);
        };
      }
      var g = { contextDelimiter: "", onMissingKey: null };
      function x(t, e) {
        var n;
        for (n in ((this.data = t),
        (this.pluralForms = {}),
        (this.options = {}),
        g))
          this.options[n] = void 0 !== e && n in e ? e[n] : g[n];
      }
      (x.prototype.getPluralForm = function (t, e) {
        var n,
          r,
          i,
          o,
          a = this.pluralForms[t];
        return (
          a ||
            ("function" !=
              typeof (i =
                (n = this.data[t][""])["Plural-Forms"] ||
                n["plural-forms"] ||
                n.plural_forms) &&
              ((r = (function (t) {
                var e, n, r;
                for (e = t.split(";"), n = 0; n < e.length; n++)
                  if (0 === (r = e[n].trim()).indexOf("plural="))
                    return r.substr(7);
              })(n["Plural-Forms"] || n["plural-forms"] || n.plural_forms)),
              (o = h(r)),
              (i = function (t) {
                return +o({ n: t });
              })),
            (a = this.pluralForms[t] = i)),
          a(e)
        );
      }),
        (x.prototype.dcnpgettext = function (t, e, n, r, i) {
          var o, a, s;
          return (
            (o = void 0 === i ? 0 : this.getPluralForm(t, i)),
            (a = n),
            e && (a = e + this.options.contextDelimiter + n),
            (s = this.data[t][a]) && s[o]
              ? s[o]
              : (this.options.onMissingKey && this.options.onMissingKey(n, t),
                0 === o ? n : r)
          );
        });
      const y = { "": { plural_forms: (t) => (1 === t ? 0 : 1) } },
        b = /^i18n\.(n?gettext|has_translation)(_|$)/,
        _ = (t, e, n) => {
          const r = new x({}),
            i = new Set(),
            o = () => {
              i.forEach((t) => t());
            },
            a = (t, e = "default") => {
              (r.data[e] = { ...y, ...r.data[e], ...t }),
                (r.data[e][""] = { ...y[""], ...r.data[e][""] });
            },
            s = (t, e) => {
              a(t, e), o();
            },
            u = (t = "default", e, n, i, o) => (
              r.data[t] || a(void 0, t), r.dcnpgettext(t, e, n, i, o)
            ),
            l = (t = "default") => t,
            c = (t, e, r) => {
              let i = u(r, e, t);
              return n
                ? ((i = n.applyFilters(
                    "i18n.gettext_with_context",
                    i,
                    t,
                    e,
                    r
                  )),
                  n.applyFilters(
                    "i18n.gettext_with_context_" + l(r),
                    i,
                    t,
                    e,
                    r
                  ))
                : i;
            };
          if ((t && s(t, e), n)) {
            const t = (t) => {
              b.test(t) && o();
            };
            n.addAction("hookAdded", "core/i18n", t),
              n.addAction("hookRemoved", "core/i18n", t);
          }
          return {
            getLocaleData: (t = "default") => r.data[t],
            setLocaleData: s,
            resetLocaleData: (t, e) => {
              (r.data = {}), (r.pluralForms = {}), s(t, e);
            },
            subscribe: (t) => (i.add(t), () => i.delete(t)),
            __: (t, e) => {
              let r = u(e, void 0, t);
              return n
                ? ((r = n.applyFilters("i18n.gettext", r, t, e)),
                  n.applyFilters("i18n.gettext_" + l(e), r, t, e))
                : r;
            },
            _x: c,
            _n: (t, e, r, i) => {
              let o = u(i, void 0, t, e, r);
              return n
                ? ((o = n.applyFilters("i18n.ngettext", o, t, e, r, i)),
                  n.applyFilters("i18n.ngettext_" + l(i), o, t, e, r, i))
                : o;
            },
            _nx: (t, e, r, i, o) => {
              let a = u(o, i, t, e, r);
              return n
                ? ((a = n.applyFilters(
                    "i18n.ngettext_with_context",
                    a,
                    t,
                    e,
                    r,
                    i,
                    o
                  )),
                  n.applyFilters(
                    "i18n.ngettext_with_context_" + l(o),
                    a,
                    t,
                    e,
                    r,
                    i,
                    o
                  ))
                : a;
            },
            isRTL: () => "rtl" === c("ltr", "text direction"),
            hasTranslation: (t, e, i) => {
              var o, a;
              const s = e ? e + "" + t : t;
              let u = !(
                null === (o = r.data) ||
                void 0 === o ||
                null === (a = o[null != i ? i : "default"]) ||
                void 0 === a ||
                !a[s]
              );
              return (
                n &&
                  ((u = n.applyFilters("i18n.has_translation", u, t, e, i)),
                  (u = n.applyFilters(
                    "i18n.has_translation_" + l(i),
                    u,
                    t,
                    e,
                    i
                  ))),
                u
              );
            },
          };
        };
      var v = n("g56x");
      const m = _(void 0, void 0, v.defaultHooks);
      var w = m;
      const k = m.getLocaleData.bind(m),
        F = m.setLocaleData.bind(m),
        S = m.resetLocaleData.bind(m),
        j = m.subscribe.bind(m),
        T = m.__.bind(m),
        O = m._x.bind(m),
        L = m._n.bind(m),
        D = m._nx.bind(m),
        P = m.isRTL.bind(m),
        I = m.hasTranslation.bind(m);
    },
    g56x: function (t, e) {
      t.exports = window.wp.hooks;
    },
  }));
