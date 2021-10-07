/*! This file is auto-generated */
(this.wp = this.wp || {}),
  (this.wp.hooks = (function (n) {
    var t = {};
    function r(e) {
      if (t[e]) return t[e].exports;
      var o = (t[e] = { i: e, l: !1, exports: {} });
      return n[e].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = n),
      (r.c = t),
      (r.d = function (n, t, e) {
        r.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: e });
      }),
      (r.r = function (n) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(n, "__esModule", { value: !0 });
      }),
      (r.t = function (n, t) {
        if ((1 & t && (n = r(n)), 8 & t)) return n;
        if (4 & t && "object" == typeof n && n && n.__esModule) return n;
        var e = Object.create(null);
        if (
          (r.r(e),
          Object.defineProperty(e, "default", { enumerable: !0, value: n }),
          2 & t && "string" != typeof n)
        )
          for (var o in n)
            r.d(
              e,
              o,
              function (t) {
                return n[t];
              }.bind(null, o)
            );
        return e;
      }),
      (r.n = function (n) {
        var t =
          n && n.__esModule
            ? function () {
                return n.default;
              }
            : function () {
                return n;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t);
      }),
      (r.p = ""),
      r((r.s = "gEOj"))
    );
  })({
    gEOj: function (n, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "defaultHooks", function () {
          return p;
        }),
        r.d(t, "createHooks", function () {
          return h;
        }),
        r.d(t, "addAction", function () {
          return m;
        }),
        r.d(t, "addFilter", function () {
          return v;
        }),
        r.d(t, "removeAction", function () {
          return A;
        }),
        r.d(t, "removeFilter", function () {
          return _;
        }),
        r.d(t, "hasAction", function () {
          return b;
        }),
        r.d(t, "hasFilter", function () {
          return y;
        }),
        r.d(t, "removeAllActions", function () {
          return g;
        }),
        r.d(t, "removeAllFilters", function () {
          return F;
        }),
        r.d(t, "doAction", function () {
          return k;
        }),
        r.d(t, "applyFilters", function () {
          return x;
        }),
        r.d(t, "currentAction", function () {
          return j;
        }),
        r.d(t, "currentFilter", function () {
          return O;
        }),
        r.d(t, "doingAction", function () {
          return I;
        }),
        r.d(t, "doingFilter", function () {
          return T;
        }),
        r.d(t, "didAction", function () {
          return w;
        }),
        r.d(t, "didFilter", function () {
          return P;
        }),
        r.d(t, "actions", function () {
          return S;
        }),
        r.d(t, "filters", function () {
          return z;
        });
      var e = function (n) {
        return "string" != typeof n || "" === n
          ? (console.error("The namespace must be a non-empty string."), !1)
          : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(n) ||
              (console.error(
                "The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."
              ),
              !1);
      };
      var o = function (n) {
        return "string" != typeof n || "" === n
          ? (console.error("The hook name must be a non-empty string."), !1)
          : /^__/.test(n)
          ? (console.error("The hook name cannot begin with `__`."), !1)
          : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(n) ||
            (console.error(
              "The hook name can only contain numbers, letters, dashes, periods and underscores."
            ),
            !1);
      };
      var i = function (n, t) {
        return function (r, i, c, s = 10) {
          const u = n[t];
          if (!o(r)) return;
          if (!e(i)) return;
          if ("function" != typeof c)
            return void console.error("The hook callback must be a function.");
          if ("number" != typeof s)
            return void console.error(
              "If specified, the hook priority must be a number."
            );
          const l = { callback: c, priority: s, namespace: i };
          if (u[r]) {
            const n = u[r].handlers;
            let t;
            for (t = n.length; t > 0 && !(s >= n[t - 1].priority); t--);
            t === n.length ? (n[t] = l) : n.splice(t, 0, l),
              u.__current.forEach((n) => {
                n.name === r && n.currentIndex >= t && n.currentIndex++;
              });
          } else u[r] = { handlers: [l], runs: 0 };
          "hookAdded" !== r && n.doAction("hookAdded", r, i, c, s);
        };
      };
      var c = function (n, t, r = !1) {
        return function (i, c) {
          const s = n[t];
          if (!o(i)) return;
          if (!r && !e(c)) return;
          if (!s[i]) return 0;
          let u = 0;
          if (r)
            (u = s[i].handlers.length),
              (s[i] = { runs: s[i].runs, handlers: [] });
          else {
            const n = s[i].handlers;
            for (let t = n.length - 1; t >= 0; t--)
              n[t].namespace === c &&
                (n.splice(t, 1),
                u++,
                s.__current.forEach((n) => {
                  n.name === i && n.currentIndex >= t && n.currentIndex--;
                }));
          }
          return "hookRemoved" !== i && n.doAction("hookRemoved", i, c), u;
        };
      };
      var s = function (n, t) {
        return function (r, e) {
          const o = n[t];
          return void 0 !== e
            ? r in o && o[r].handlers.some((n) => n.namespace === e)
            : r in o;
        };
      };
      var u = function (n, t, r = !1) {
        return function (e, ...o) {
          const i = n[t];
          i[e] || (i[e] = { handlers: [], runs: 0 }), i[e].runs++;
          const c = i[e].handlers;
          if (!c || !c.length) return r ? o[0] : void 0;
          const s = { name: e, currentIndex: 0 };
          for (i.__current.push(s); s.currentIndex < c.length; ) {
            const n = c[s.currentIndex].callback.apply(null, o);
            r && (o[0] = n), s.currentIndex++;
          }
          return i.__current.pop(), r ? o[0] : void 0;
        };
      };
      var l = function (n, t) {
        return function () {
          var r, e;
          const o = n[t];
          return null !==
            (r =
              null === (e = o.__current[o.__current.length - 1]) || void 0 === e
                ? void 0
                : e.name) && void 0 !== r
            ? r
            : null;
        };
      };
      var a = function (n, t) {
        return function (r) {
          const e = n[t];
          return void 0 === r
            ? void 0 !== e.__current[0]
            : !!e.__current[0] && r === e.__current[0].name;
        };
      };
      var d = function (n, t) {
        return function (r) {
          const e = n[t];
          if (o(r)) return e[r] && e[r].runs ? e[r].runs : 0;
        };
      };
      class f {
        constructor() {
          (this.actions = Object.create(null)),
            (this.actions.__current = []),
            (this.filters = Object.create(null)),
            (this.filters.__current = []),
            (this.addAction = i(this, "actions")),
            (this.addFilter = i(this, "filters")),
            (this.removeAction = c(this, "actions")),
            (this.removeFilter = c(this, "filters")),
            (this.hasAction = s(this, "actions")),
            (this.hasFilter = s(this, "filters")),
            (this.removeAllActions = c(this, "actions", !0)),
            (this.removeAllFilters = c(this, "filters", !0)),
            (this.doAction = u(this, "actions")),
            (this.applyFilters = u(this, "filters", !0)),
            (this.currentAction = l(this, "actions")),
            (this.currentFilter = l(this, "filters")),
            (this.doingAction = a(this, "actions")),
            (this.doingFilter = a(this, "filters")),
            (this.didAction = d(this, "actions")),
            (this.didFilter = d(this, "filters"));
        }
      }
      var h = function () {
        return new f();
      };
      const p = h(),
        {
          addAction: m,
          addFilter: v,
          removeAction: A,
          removeFilter: _,
          hasAction: b,
          hasFilter: y,
          removeAllActions: g,
          removeAllFilters: F,
          doAction: k,
          applyFilters: x,
          currentAction: j,
          currentFilter: O,
          doingAction: I,
          doingFilter: T,
          didAction: w,
          didFilter: P,
          actions: S,
          filters: z,
        } = p;
    },
  }));
