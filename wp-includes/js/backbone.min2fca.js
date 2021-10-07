/*! This file is auto-generated */
!(function (n) {
  var s =
    ("object" == typeof self && self.self === self && self) ||
    ("object" == typeof global && global.global === global && global);
  if ("function" == typeof define && define.amd)
    define(["underscore", "jquery", "exports"], function (t, e, i) {
      s.Backbone = n(s, i, t, e);
    });
  else if ("undefined" != typeof exports) {
    var t,
      e = require("underscore");
    try {
      t = require("jquery");
    } catch (t) {}
    n(s, exports, e, t);
  } else s.Backbone = n(s, {}, s._, s.jQuery || s.Zepto || s.ender || s.$);
})(function (t, h, b, e) {
  var i = t.Backbone,
    o = Array.prototype.slice;
  (h.VERSION = "1.4.0"),
    (h.$ = e),
    (h.noConflict = function () {
      return (t.Backbone = i), this;
    }),
    (h.emulateHTTP = !1),
    (h.emulateJSON = !1);
  var a,
    n = (h.Events = {}),
    u = /\s+/,
    c = function (t, e, i, n, s) {
      var r,
        o = 0;
      if (i && "object" == typeof i) {
        void 0 !== n &&
          "context" in s &&
          void 0 === s.context &&
          (s.context = n);
        for (r = b.keys(i); o < r.length; o++) e = c(t, e, r[o], i[r[o]], s);
      } else if (i && u.test(i))
        for (r = i.split(u); o < r.length; o++) e = t(e, r[o], n, s);
      else e = t(e, i, n, s);
      return e;
    };
  (n.on = function (t, e, i) {
    return (
      (this._events = c(s, this._events || {}, t, e, {
        context: i,
        ctx: this,
        listening: a,
      })),
      a &&
        (((this._listeners || (this._listeners = {}))[a.id] = a).interop = !1),
      this
    );
  }),
    (n.listenTo = function (t, e, i) {
      if (!t) return this;
      var n = t._listenId || (t._listenId = b.uniqueId("l")),
        s = this._listeningTo || (this._listeningTo = {}),
        r = (a = s[n]);
      r ||
        (this._listenId || (this._listenId = b.uniqueId("l")),
        (r = a = s[n] = new g(this, t)));
      t = l(t, e, i, this);
      if (((a = void 0), t)) throw t;
      return r.interop && r.on(e, i), this;
    });
  var s = function (t, e, i, n) {
      var s, r;
      return (
        i &&
          ((s = t[e] || (t[e] = [])),
          (r = n.context),
          (e = n.ctx),
          (n = n.listening) && n.count++,
          s.push({ callback: i, context: r, ctx: r || e, listening: n })),
        t
      );
    },
    l = function (t, e, i, n) {
      try {
        t.on(e, i, n);
      } catch (t) {
        return t;
      }
    };
  (n.off = function (t, e, i) {
    return (
      this._events &&
        (this._events = c(r, this._events, t, e, {
          context: i,
          listeners: this._listeners,
        })),
      this
    );
  }),
    (n.stopListening = function (t, e, i) {
      var n = this._listeningTo;
      if (!n) return this;
      for (var s = t ? [t._listenId] : b.keys(n), r = 0; r < s.length; r++) {
        var o = n[s[r]];
        if (!o) break;
        o.obj.off(e, i, this), o.interop && o.off(e, i);
      }
      return b.isEmpty(n) && (this._listeningTo = void 0), this;
    });
  var r = function (t, e, i, n) {
    if (t) {
      var s,
        r = n.context,
        o = n.listeners,
        h = 0;
      if (e || r || i) {
        for (s = e ? [e] : b.keys(t); h < s.length; h++) {
          var a = t[(e = s[h])];
          if (!a) break;
          for (var u = [], c = 0; c < a.length; c++) {
            var l = a[c];
            (i && i !== l.callback && i !== l.callback._callback) ||
            (r && r !== l.context)
              ? u.push(l)
              : (l = l.listening) && l.off(e, i);
          }
          u.length ? (t[e] = u) : delete t[e];
        }
        return t;
      }
      for (s = b.keys(o); h < s.length; h++) o[s[h]].cleanup();
    }
  };
  (n.once = function (t, e, i) {
    var n = c(d, {}, t, e, this.off.bind(this));
    return this.on(n, (e = "string" == typeof t && null == i ? void 0 : e), i);
  }),
    (n.listenToOnce = function (t, e, i) {
      i = c(d, {}, e, i, this.stopListening.bind(this, t));
      return this.listenTo(t, i);
    });
  var d = function (t, e, i, n) {
    var s;
    return (
      i &&
        ((s = t[e] =
          b.once(function () {
            n(e, s), i.apply(this, arguments);
          }))._callback = i),
      t
    );
  };
  n.trigger = function (t) {
    if (!this._events) return this;
    for (
      var e = Math.max(0, arguments.length - 1), i = Array(e), n = 0;
      n < e;
      n++
    )
      i[n] = arguments[n + 1];
    return c(f, this._events, t, void 0, i), this;
  };
  var f = function (t, e, i, n) {
      var s, r;
      return (
        t &&
          ((s = t[e]),
          (r = t.all),
          s && r && (r = r.slice()),
          s && p(s, n),
          r && p(r, [e].concat(n))),
        t
      );
    },
    p = function (t, e) {
      var i,
        n = -1,
        s = t.length,
        r = e[0],
        o = e[1],
        h = e[2];
      switch (e.length) {
        case 0:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx);
          return;
        case 1:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r);
          return;
        case 2:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r, o);
          return;
        case 3:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r, o, h);
          return;
        default:
          for (; ++n < s; ) (i = t[n]).callback.apply(i.ctx, e);
          return;
      }
    },
    g = function (t, e) {
      (this.id = t._listenId),
        (this.listener = t),
        (this.obj = e),
        (this.interop = !0),
        (this.count = 0),
        (this._events = void 0);
    };
  (g.prototype.on = n.on),
    (g.prototype.off = function (t, e) {
      e = this.interop
        ? ((this._events = c(r, this._events, t, e, {
            context: void 0,
            listeners: void 0,
          })),
          !this._events)
        : (this.count--, 0 === this.count);
      e && this.cleanup();
    }),
    (g.prototype.cleanup = function () {
      delete this.listener._listeningTo[this.obj._listenId],
        this.interop || delete this.obj._listeners[this.id];
    }),
    (n.bind = n.on),
    (n.unbind = n.off),
    b.extend(h, n);
  var v = (h.Model = function (t, e) {
    var i = t || {};
    (e = e || {}),
      this.preinitialize.apply(this, arguments),
      (this.cid = b.uniqueId(this.cidPrefix)),
      (this.attributes = {}),
      e.collection && (this.collection = e.collection),
      e.parse && (i = this.parse(i, e) || {});
    var n = b.result(this, "defaults"),
      i = b.defaults(b.extend({}, n, i), n);
    this.set(i, e), (this.changed = {}), this.initialize.apply(this, arguments);
  });
  b.extend(v.prototype, n, {
    changed: null,
    validationError: null,
    idAttribute: "id",
    cidPrefix: "c",
    preinitialize: function () {},
    initialize: function () {},
    toJSON: function (t) {
      return b.clone(this.attributes);
    },
    sync: function () {
      return h.sync.apply(this, arguments);
    },
    get: function (t) {
      return this.attributes[t];
    },
    escape: function (t) {
      return b.escape(this.get(t));
    },
    has: function (t) {
      return null != this.get(t);
    },
    matches: function (t) {
      return !!b.iteratee(t, this)(this.attributes);
    },
    set: function (t, e, i) {
      if (null == t) return this;
      var n;
      if (
        ("object" == typeof t ? ((n = t), (i = e)) : ((n = {})[t] = e),
        !this._validate(n, (i = i || {})))
      )
        return !1;
      var s = i.unset,
        r = i.silent,
        o = [],
        t = this._changing;
      (this._changing = !0),
        t ||
          ((this._previousAttributes = b.clone(this.attributes)),
          (this.changed = {}));
      var h,
        a = this.attributes,
        u = this.changed,
        c = this._previousAttributes;
      for (h in n)
        (e = n[h]),
          b.isEqual(a[h], e) || o.push(h),
          b.isEqual(c[h], e) ? delete u[h] : (u[h] = e),
          s ? delete a[h] : (a[h] = e);
      if (
        (this.idAttribute in n && (this.id = this.get(this.idAttribute)), !r)
      ) {
        o.length && (this._pending = i);
        for (var l = 0; l < o.length; l++)
          this.trigger("change:" + o[l], this, a[o[l]], i);
      }
      if (t) return this;
      if (!r)
        for (; this._pending; )
          (i = this._pending),
            (this._pending = !1),
            this.trigger("change", this, i);
      return (this._pending = !1), (this._changing = !1), this;
    },
    unset: function (t, e) {
      return this.set(t, void 0, b.extend({}, e, { unset: !0 }));
    },
    clear: function (t) {
      var e,
        i = {};
      for (e in this.attributes) i[e] = void 0;
      return this.set(i, b.extend({}, t, { unset: !0 }));
    },
    hasChanged: function (t) {
      return null == t ? !b.isEmpty(this.changed) : b.has(this.changed, t);
    },
    changedAttributes: function (t) {
      if (!t) return !!this.hasChanged() && b.clone(this.changed);
      var e,
        i,
        n = this._changing ? this._previousAttributes : this.attributes,
        s = {};
      for (i in t) {
        var r = t[i];
        b.isEqual(n[i], r) || ((s[i] = r), (e = !0));
      }
      return !!e && s;
    },
    previous: function (t) {
      return null != t && this._previousAttributes
        ? this._previousAttributes[t]
        : null;
    },
    previousAttributes: function () {
      return b.clone(this._previousAttributes);
    },
    fetch: function (i) {
      i = b.extend({ parse: !0 }, i);
      var n = this,
        s = i.success;
      return (
        (i.success = function (t) {
          var e = i.parse ? n.parse(t, i) : t;
          if (!n.set(e, i)) return !1;
          s && s.call(i.context, n, t, i), n.trigger("sync", n, t, i);
        }),
        B(this, i),
        this.sync("read", this, i)
      );
    },
    save: function (t, e, i) {
      var n;
      null == t || "object" == typeof t
        ? ((n = t), (i = e))
        : ((n = {})[t] = e);
      var s = (i = b.extend({ validate: !0, parse: !0 }, i)).wait;
      if (n && !s) {
        if (!this.set(n, i)) return !1;
      } else if (!this._validate(n, i)) return !1;
      var r = this,
        o = i.success,
        h = this.attributes;
      (i.success = function (t) {
        r.attributes = h;
        var e = i.parse ? r.parse(t, i) : t;
        if ((e = s ? b.extend({}, n, e) : e) && !r.set(e, i)) return !1;
        o && o.call(i.context, r, t, i), r.trigger("sync", r, t, i);
      }),
        B(this, i),
        n && s && (this.attributes = b.extend({}, h, n));
      e = this.isNew() ? "create" : i.patch ? "patch" : "update";
      "patch" != e || i.attrs || (i.attrs = n);
      e = this.sync(e, this, i);
      return (this.attributes = h), e;
    },
    destroy: function (e) {
      e = e ? b.clone(e) : {};
      function i() {
        n.stopListening(), n.trigger("destroy", n, n.collection, e);
      }
      var n = this,
        s = e.success,
        r = e.wait,
        t = !(e.success = function (t) {
          r && i(),
            s && s.call(e.context, n, t, e),
            n.isNew() || n.trigger("sync", n, t, e);
        });
      return (
        this.isNew()
          ? b.defer(e.success)
          : (B(this, e), (t = this.sync("delete", this, e))),
        r || i(),
        t
      );
    },
    url: function () {
      var t =
        b.result(this, "urlRoot") || b.result(this.collection, "url") || F();
      if (this.isNew()) return t;
      var e = this.get(this.idAttribute);
      return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e);
    },
    parse: function (t, e) {
      return t;
    },
    clone: function () {
      return new this.constructor(this.attributes);
    },
    isNew: function () {
      return !this.has(this.idAttribute);
    },
    isValid: function (t) {
      return this._validate({}, b.extend({}, t, { validate: !0 }));
    },
    _validate: function (t, e) {
      if (!e.validate || !this.validate) return !0;
      t = b.extend({}, this.attributes, t);
      t = this.validationError = this.validate(t, e) || null;
      return (
        !t ||
        (this.trigger("invalid", this, t, b.extend(e, { validationError: t })),
        !1)
      );
    },
  });
  function x(t, e, i) {
    i = Math.min(Math.max(i, 0), t.length);
    for (var n = Array(t.length - i), s = e.length, r = 0; r < n.length; r++)
      n[r] = t[r + i];
    for (r = 0; r < s; r++) t[r + i] = e[r];
    for (r = 0; r < n.length; r++) t[r + s + i] = n[r];
  }
  var m = (h.Collection = function (t, e) {
      (e = e || {}),
        this.preinitialize.apply(this, arguments),
        e.model && (this.model = e.model),
        void 0 !== e.comparator && (this.comparator = e.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        t && this.reset(t, b.extend({ silent: !0 }, e));
    }),
    w = { add: !0, remove: !0, merge: !0 },
    _ = { add: !0, remove: !1 };
  b.extend(m.prototype, n, {
    model: v,
    preinitialize: function () {},
    initialize: function () {},
    toJSON: function (e) {
      return this.map(function (t) {
        return t.toJSON(e);
      });
    },
    sync: function () {
      return h.sync.apply(this, arguments);
    },
    add: function (t, e) {
      return this.set(t, b.extend({ merge: !1 }, e, _));
    },
    remove: function (t, e) {
      e = b.extend({}, e);
      var i = !b.isArray(t);
      t = i ? [t] : t.slice();
      t = this._removeModels(t, e);
      return (
        !e.silent &&
          t.length &&
          ((e.changes = { added: [], merged: [], removed: t }),
          this.trigger("update", this, e)),
        i ? t[0] : t
      );
    },
    set: function (t, e) {
      if (null != t) {
        (e = b.extend({}, w, e)).parse &&
          !this._isModel(t) &&
          (t = this.parse(t, e) || []);
        var i = !b.isArray(t);
        t = i ? [t] : t.slice();
        var n = e.at;
        (n = (n = null != n ? +n : n) > this.length ? this.length : n) < 0 &&
          (n += this.length + 1);
        for (
          var s = [],
            r = [],
            o = [],
            h = [],
            a = {},
            u = e.add,
            c = e.merge,
            l = e.remove,
            d = !1,
            f = this.comparator && null == n && !1 !== e.sort,
            p = b.isString(this.comparator) ? this.comparator : null,
            g = 0;
          g < t.length;
          g++
        ) {
          var v,
            m = t[g],
            _ = this.get(m);
          _
            ? (c &&
                m !== _ &&
                ((v = this._isModel(m) ? m.attributes : m),
                e.parse && (v = _.parse(v, e)),
                _.set(v, e),
                o.push(_),
                f && !d && (d = _.hasChanged(p))),
              a[_.cid] || ((a[_.cid] = !0), s.push(_)),
              (t[g] = _))
            : u &&
              (m = t[g] = this._prepareModel(m, e)) &&
              (r.push(m), this._addReference(m, e), (a[m.cid] = !0), s.push(m));
        }
        if (l) {
          for (g = 0; g < this.length; g++)
            a[(m = this.models[g]).cid] || h.push(m);
          h.length && this._removeModels(h, e);
        }
        var y = !1;
        if (
          (s.length && !f && u && l
            ? ((y =
                this.length !== s.length ||
                b.some(this.models, function (t, e) {
                  return t !== s[e];
                })),
              (this.models.length = 0),
              x(this.models, s, 0),
              (this.length = this.models.length))
            : r.length &&
              (f && (d = !0),
              x(this.models, r, null == n ? this.length : n),
              (this.length = this.models.length)),
          d && this.sort({ silent: !0 }),
          !e.silent)
        ) {
          for (g = 0; g < r.length; g++)
            null != n && (e.index = n + g),
              (m = r[g]).trigger("add", m, this, e);
          (d || y) && this.trigger("sort", this, e),
            (r.length || h.length || o.length) &&
              ((e.changes = { added: r, removed: h, merged: o }),
              this.trigger("update", this, e));
        }
        return i ? t[0] : t;
      }
    },
    reset: function (t, e) {
      e = e ? b.clone(e) : {};
      for (var i = 0; i < this.models.length; i++)
        this._removeReference(this.models[i], e);
      return (
        (e.previousModels = this.models),
        this._reset(),
        (t = this.add(t, b.extend({ silent: !0 }, e))),
        e.silent || this.trigger("reset", this, e),
        t
      );
    },
    push: function (t, e) {
      return this.add(t, b.extend({ at: this.length }, e));
    },
    pop: function (t) {
      var e = this.at(this.length - 1);
      return this.remove(e, t);
    },
    unshift: function (t, e) {
      return this.add(t, b.extend({ at: 0 }, e));
    },
    shift: function (t) {
      var e = this.at(0);
      return this.remove(e, t);
    },
    slice: function () {
      return o.apply(this.models, arguments);
    },
    get: function (t) {
      if (null != t)
        return (
          this._byId[t] ||
          this._byId[this.modelId(this._isModel(t) ? t.attributes : t)] ||
          (t.cid && this._byId[t.cid])
        );
    },
    has: function (t) {
      return null != this.get(t);
    },
    at: function (t) {
      return t < 0 && (t += this.length), this.models[t];
    },
    where: function (t, e) {
      return this[e ? "find" : "filter"](t);
    },
    findWhere: function (t) {
      return this.where(t, !0);
    },
    sort: function (t) {
      var e = this.comparator;
      if (!e) throw new Error("Cannot sort a set without a comparator");
      t = t || {};
      var i = e.length;
      return (
        b.isFunction(e) && (e = e.bind(this)),
        1 === i || b.isString(e)
          ? (this.models = this.sortBy(e))
          : this.models.sort(e),
        t.silent || this.trigger("sort", this, t),
        this
      );
    },
    pluck: function (t) {
      return this.map(t + "");
    },
    fetch: function (i) {
      var n = (i = b.extend({ parse: !0 }, i)).success,
        s = this;
      return (
        (i.success = function (t) {
          var e = i.reset ? "reset" : "set";
          s[e](t, i),
            n && n.call(i.context, s, t, i),
            s.trigger("sync", s, t, i);
        }),
        B(this, i),
        this.sync("read", this, i)
      );
    },
    create: function (t, e) {
      var n = (e = e ? b.clone(e) : {}).wait;
      if (!(t = this._prepareModel(t, e))) return !1;
      n || this.add(t, e);
      var s = this,
        r = e.success;
      return (
        (e.success = function (t, e, i) {
          n && s.add(t, i), r && r.call(i.context, t, e, i);
        }),
        t.save(null, e),
        t
      );
    },
    parse: function (t, e) {
      return t;
    },
    clone: function () {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator,
      });
    },
    modelId: function (t) {
      return t[this.model.prototype.idAttribute || "id"];
    },
    values: function () {
      return new E(this, k);
    },
    keys: function () {
      return new E(this, I);
    },
    entries: function () {
      return new E(this, S);
    },
    _reset: function () {
      (this.length = 0), (this.models = []), (this._byId = {});
    },
    _prepareModel: function (t, e) {
      if (this._isModel(t)) return t.collection || (t.collection = this), t;
      t = new ((e = e ? b.clone(e) : {}).collection = this).model(t, e);
      return t.validationError
        ? (this.trigger("invalid", this, t.validationError, e), !1)
        : t;
    },
    _removeModels: function (t, e) {
      for (var i = [], n = 0; n < t.length; n++) {
        var s,
          r,
          o = this.get(t[n]);
        o &&
          ((s = this.indexOf(o)),
          this.models.splice(s, 1),
          this.length--,
          delete this._byId[o.cid],
          null != (r = this.modelId(o.attributes)) && delete this._byId[r],
          e.silent || ((e.index = s), o.trigger("remove", o, this, e)),
          i.push(o),
          this._removeReference(o, e));
      }
      return i;
    },
    _isModel: function (t) {
      return t instanceof v;
    },
    _addReference: function (t, e) {
      this._byId[t.cid] = t;
      var i = this.modelId(t.attributes);
      null != i && (this._byId[i] = t), t.on("all", this._onModelEvent, this);
    },
    _removeReference: function (t, e) {
      delete this._byId[t.cid];
      var i = this.modelId(t.attributes);
      null != i && delete this._byId[i],
        this === t.collection && delete t.collection,
        t.off("all", this._onModelEvent, this);
    },
    _onModelEvent: function (t, e, i, n) {
      if (e) {
        if (("add" === t || "remove" === t) && i !== this) return;
        var s, r;
        "destroy" === t && this.remove(e, n),
          "change" !== t ||
            ((s = this.modelId(e.previousAttributes())) !==
              (r = this.modelId(e.attributes)) &&
              (null != s && delete this._byId[s],
              null != r && (this._byId[r] = e)));
      }
      this.trigger.apply(this, arguments);
    },
  });
  var y = "function" == typeof Symbol && Symbol.iterator;
  y && (m.prototype[y] = m.prototype.values);
  var E = function (t, e) {
      (this._collection = t), (this._kind = e), (this._index = 0);
    },
    k = 1,
    I = 2,
    S = 3;
  y &&
    (E.prototype[y] = function () {
      return this;
    }),
    (E.prototype.next = function () {
      if (this._collection) {
        if (this._index < this._collection.length) {
          var t,
            e = this._collection.at(this._index);
          return (
            this._index++,
            {
              value:
                this._kind === k
                  ? e
                  : ((t = this._collection.modelId(e.attributes)),
                    this._kind === I ? t : [t, e]),
              done: !1,
            }
          );
        }
        this._collection = void 0;
      }
      return { value: void 0, done: !0 };
    });
  var e = (h.View = function (t) {
      (this.cid = b.uniqueId("view")),
        this.preinitialize.apply(this, arguments),
        b.extend(this, b.pick(t, P)),
        this._ensureElement(),
        this.initialize.apply(this, arguments);
    }),
    T = /^(\S+)\s*(.*)$/,
    P = [
      "model",
      "collection",
      "el",
      "id",
      "attributes",
      "className",
      "tagName",
      "events",
    ];
  b.extend(e.prototype, n, {
    tagName: "div",
    $: function (t) {
      return this.$el.find(t);
    },
    preinitialize: function () {},
    initialize: function () {},
    render: function () {
      return this;
    },
    remove: function () {
      return this._removeElement(), this.stopListening(), this;
    },
    _removeElement: function () {
      this.$el.remove();
    },
    setElement: function (t) {
      return (
        this.undelegateEvents(),
        this._setElement(t),
        this.delegateEvents(),
        this
      );
    },
    _setElement: function (t) {
      (this.$el = t instanceof h.$ ? t : h.$(t)), (this.el = this.$el[0]);
    },
    delegateEvents: function (t) {
      if (!(t = t || b.result(this, "events"))) return this;
      for (var e in (this.undelegateEvents(), t)) {
        var i = t[e];
        (i = !b.isFunction(i) ? this[i] : i) &&
          ((e = e.match(T)), this.delegate(e[1], e[2], i.bind(this)));
      }
      return this;
    },
    delegate: function (t, e, i) {
      return this.$el.on(t + ".delegateEvents" + this.cid, e, i), this;
    },
    undelegateEvents: function () {
      return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
    },
    undelegate: function (t, e, i) {
      return this.$el.off(t + ".delegateEvents" + this.cid, e, i), this;
    },
    _createElement: function (t) {
      return document.createElement(t);
    },
    _ensureElement: function () {
      var t;
      this.el
        ? this.setElement(b.result(this, "el"))
        : ((t = b.extend({}, b.result(this, "attributes"))),
          this.id && (t.id = b.result(this, "id")),
          this.className && (t.class = b.result(this, "className")),
          this.setElement(this._createElement(b.result(this, "tagName"))),
          this._setAttributes(t));
    },
    _setAttributes: function (t) {
      this.$el.attr(t);
    },
  });
  function H(i, n, t, s) {
    b.each(t, function (t, e) {
      n[e] &&
        (i.prototype[e] = (function (n, t, s, r) {
          switch (t) {
            case 1:
              return function () {
                return n[s](this[r]);
              };
            case 2:
              return function (t) {
                return n[s](this[r], t);
              };
            case 3:
              return function (t, e) {
                return n[s](this[r], $(t, this), e);
              };
            case 4:
              return function (t, e, i) {
                return n[s](this[r], $(t, this), e, i);
              };
            default:
              return function () {
                var t = o.call(arguments);
                return t.unshift(this[r]), n[s].apply(n, t);
              };
          }
        })(n, t, e, s));
    });
  }
  var $ = function (e, t) {
      return b.isFunction(e)
        ? e
        : b.isObject(e) && !t._isModel(e)
        ? A(e)
        : b.isString(e)
        ? function (t) {
            return t.get(e);
          }
        : e;
    },
    A = function (t) {
      var e = b.matches(t);
      return function (t) {
        return e(t.attributes);
      };
    };
  b.each(
    [
      [
        m,
        {
          forEach: 3,
          each: 3,
          map: 3,
          collect: 3,
          reduce: 0,
          foldl: 0,
          inject: 0,
          reduceRight: 0,
          foldr: 0,
          find: 3,
          detect: 3,
          filter: 3,
          select: 3,
          reject: 3,
          every: 3,
          all: 3,
          some: 3,
          any: 3,
          include: 3,
          includes: 3,
          contains: 3,
          invoke: 0,
          max: 3,
          min: 3,
          toArray: 1,
          size: 1,
          first: 3,
          head: 3,
          take: 3,
          initial: 3,
          rest: 3,
          tail: 3,
          drop: 3,
          last: 3,
          without: 0,
          difference: 0,
          indexOf: 3,
          shuffle: 1,
          lastIndexOf: 3,
          isEmpty: 1,
          chain: 1,
          sample: 3,
          partition: 3,
          groupBy: 3,
          countBy: 3,
          sortBy: 3,
          indexBy: 3,
          findIndex: 3,
          findLastIndex: 3,
        },
        "models",
      ],
      [
        v,
        {
          keys: 1,
          values: 1,
          pairs: 1,
          invert: 1,
          pick: 0,
          omit: 0,
          chain: 1,
          isEmpty: 1,
        },
        "attributes",
      ],
    ],
    function (t) {
      var i = t[0],
        e = t[1],
        n = t[2];
      (i.mixin = function (t) {
        var e = b.reduce(
          b.functions(t),
          function (t, e) {
            return (t[e] = 0), t;
          },
          {}
        );
        H(i, t, e, n);
      }),
        H(i, b, e, n);
    }
  ),
    (h.sync = function (t, e, n) {
      var i = C[t];
      b.defaults((n = n || {}), {
        emulateHTTP: h.emulateHTTP,
        emulateJSON: h.emulateJSON,
      });
      var s,
        r = { type: i, dataType: "json" };
      n.url || (r.url = b.result(e, "url") || F()),
        null != n.data ||
          !e ||
          ("create" !== t && "update" !== t && "patch" !== t) ||
          ((r.contentType = "application/json"),
          (r.data = JSON.stringify(n.attrs || e.toJSON(n)))),
        n.emulateJSON &&
          ((r.contentType = "application/x-www-form-urlencoded"),
          (r.data = r.data ? { model: r.data } : {})),
        !n.emulateHTTP ||
          ("PUT" !== i && "DELETE" !== i && "PATCH" !== i) ||
          ((r.type = "POST"),
          n.emulateJSON && (r.data._method = i),
          (s = n.beforeSend),
          (n.beforeSend = function (t) {
            if ((t.setRequestHeader("X-HTTP-Method-Override", i), s))
              return s.apply(this, arguments);
          })),
        "GET" === r.type || n.emulateJSON || (r.processData = !1);
      var o = n.error;
      n.error = function (t, e, i) {
        (n.textStatus = e),
          (n.errorThrown = i),
          o && o.call(n.context, t, e, i);
      };
      r = n.xhr = h.ajax(b.extend(r, n));
      return e.trigger("request", e, r, n), r;
    });
  var C = {
    create: "POST",
    update: "PUT",
    patch: "PATCH",
    delete: "DELETE",
    read: "GET",
  };
  h.ajax = function () {
    return h.$.ajax.apply(h.$, arguments);
  };
  var y = (h.Router = function (t) {
      (t = t || {}),
        this.preinitialize.apply(this, arguments),
        t.routes && (this.routes = t.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments);
    }),
    R = /\((.*?)\)/g,
    M = /(\(\?)?:\w+/g,
    N = /\*\w+/g,
    j = /[\-{}\[\]+?.,\\\^$|#\s]/g;
  b.extend(y.prototype, n, {
    preinitialize: function () {},
    initialize: function () {},
    route: function (e, i, n) {
      b.isRegExp(e) || (e = this._routeToRegExp(e)),
        b.isFunction(i) && ((n = i), (i = "")),
        (n = n || this[i]);
      var s = this;
      return (
        h.history.route(e, function (t) {
          t = s._extractParameters(e, t);
          !1 !== s.execute(n, t, i) &&
            (s.trigger.apply(s, ["route:" + i].concat(t)),
            s.trigger("route", i, t),
            h.history.trigger("route", s, i, t));
        }),
        this
      );
    },
    execute: function (t, e, i) {
      t && t.apply(this, e);
    },
    navigate: function (t, e) {
      return h.history.navigate(t, e), this;
    },
    _bindRoutes: function () {
      if (this.routes) {
        this.routes = b.result(this, "routes");
        for (var t, e = b.keys(this.routes); null != (t = e.pop()); )
          this.route(t, this.routes[t]);
      }
    },
    _routeToRegExp: function (t) {
      return (
        (t = t
          .replace(j, "\\$&")
          .replace(R, "(?:$1)?")
          .replace(M, function (t, e) {
            return e ? t : "([^/?]+)";
          })
          .replace(N, "([^?]*?)")),
        new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
      );
    },
    _extractParameters: function (t, e) {
      var i = t.exec(e).slice(1);
      return b.map(i, function (t, e) {
        return e === i.length - 1
          ? t || null
          : t
          ? decodeURIComponent(t)
          : null;
      });
    },
  });
  var O = (h.History = function () {
      (this.handlers = []),
        (this.checkUrl = this.checkUrl.bind(this)),
        "undefined" != typeof window &&
          ((this.location = window.location), (this.history = window.history));
    }),
    U = /^[#\/]|\s+$/g,
    z = /^\/+|\/+$/g,
    q = /#.*$/;
  (O.started = !1),
    b.extend(O.prototype, n, {
      interval: 50,
      atRoot: function () {
        return (
          this.location.pathname.replace(/[^\/]$/, "$&/") === this.root &&
          !this.getSearch()
        );
      },
      matchRoot: function () {
        return (
          this.decodeFragment(this.location.pathname).slice(
            0,
            this.root.length - 1
          ) +
            "/" ===
          this.root
        );
      },
      decodeFragment: function (t) {
        return decodeURI(t.replace(/%25/g, "%2525"));
      },
      getSearch: function () {
        var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
        return t ? t[0] : "";
      },
      getHash: function (t) {
        t = (t || this).location.href.match(/#(.*)$/);
        return t ? t[1] : "";
      },
      getPath: function () {
        var t = this.decodeFragment(
          this.location.pathname + this.getSearch()
        ).slice(this.root.length - 1);
        return "/" === t.charAt(0) ? t.slice(1) : t;
      },
      getFragment: function (t) {
        return (t =
          null == t
            ? this._usePushState || !this._wantsHashChange
              ? this.getPath()
              : this.getHash()
            : t).replace(U, "");
      },
      start: function (t) {
        if (O.started)
          throw new Error("Backbone.history has already been started");
        if (
          ((O.started = !0),
          (this.options = b.extend({ root: "/" }, this.options, t)),
          (this.root = this.options.root),
          (this._wantsHashChange = !1 !== this.options.hashChange),
          (this._hasHashChange =
            "onhashchange" in window &&
            (void 0 === document.documentMode || 7 < document.documentMode)),
          (this._useHashChange = this._wantsHashChange && this._hasHashChange),
          (this._wantsPushState = !!this.options.pushState),
          (this._hasPushState = !(!this.history || !this.history.pushState)),
          (this._usePushState = this._wantsPushState && this._hasPushState),
          (this.fragment = this.getFragment()),
          (this.root = ("/" + this.root + "/").replace(z, "/")),
          this._wantsHashChange && this._wantsPushState)
        ) {
          if (!this._hasPushState && !this.atRoot()) {
            t = this.root.slice(0, -1) || "/";
            return this.location.replace(t + "#" + this.getPath()), !0;
          }
          this._hasPushState &&
            this.atRoot() &&
            this.navigate(this.getHash(), { replace: !0 });
        }
        this._hasHashChange ||
          !this._wantsHashChange ||
          this._usePushState ||
          ((this.iframe = document.createElement("iframe")),
          (this.iframe.src = "javascript:0"),
          (this.iframe.style.display = "none"),
          (this.iframe.tabIndex = -1),
          (e = (e = document.body).insertBefore(
            this.iframe,
            e.firstChild
          ).contentWindow).document.open(),
          e.document.close(),
          (e.location.hash = "#" + this.fragment));
        var e =
          window.addEventListener ||
          function (t, e) {
            return attachEvent("on" + t, e);
          };
        if (
          (this._usePushState
            ? e("popstate", this.checkUrl, !1)
            : this._useHashChange && !this.iframe
            ? e("hashchange", this.checkUrl, !1)
            : this._wantsHashChange &&
              (this._checkUrlInterval = setInterval(
                this.checkUrl,
                this.interval
              )),
          !this.options.silent)
        )
          return this.loadUrl();
      },
      stop: function () {
        var t =
          window.removeEventListener ||
          function (t, e) {
            return detachEvent("on" + t, e);
          };
        this._usePushState
          ? t("popstate", this.checkUrl, !1)
          : this._useHashChange &&
            !this.iframe &&
            t("hashchange", this.checkUrl, !1),
          this.iframe &&
            (document.body.removeChild(this.iframe), (this.iframe = null)),
          this._checkUrlInterval && clearInterval(this._checkUrlInterval),
          (O.started = !1);
      },
      route: function (t, e) {
        this.handlers.unshift({ route: t, callback: e });
      },
      checkUrl: function (t) {
        var e = this.getFragment();
        if (
          (e =
            e === this.fragment && this.iframe
              ? this.getHash(this.iframe.contentWindow)
              : e) === this.fragment
        )
          return !1;
        this.iframe && this.navigate(e), this.loadUrl();
      },
      loadUrl: function (e) {
        return (
          !!this.matchRoot() &&
          ((e = this.fragment = this.getFragment(e)),
          b.some(this.handlers, function (t) {
            if (t.route.test(e)) return t.callback(e), !0;
          }))
        );
      },
      navigate: function (t, e) {
        if (!O.started) return !1;
        (e && !0 !== e) || (e = { trigger: !!e }),
          (t = this.getFragment(t || ""));
        var i = this.root,
          n =
            (i = "" === t || "?" === t.charAt(0) ? i.slice(0, -1) || "/" : i) +
            t;
        t = t.replace(q, "");
        i = this.decodeFragment(t);
        if (this.fragment !== i) {
          if (((this.fragment = i), this._usePushState))
            this.history[e.replace ? "replaceState" : "pushState"](
              {},
              document.title,
              n
            );
          else {
            if (!this._wantsHashChange) return this.location.assign(n);
            this._updateHash(this.location, t, e.replace),
              this.iframe &&
                t !== this.getHash(this.iframe.contentWindow) &&
                ((n = this.iframe.contentWindow),
                e.replace || (n.document.open(), n.document.close()),
                this._updateHash(n.location, t, e.replace));
          }
          return e.trigger ? this.loadUrl(t) : void 0;
        }
      },
      _updateHash: function (t, e, i) {
        i
          ? ((i = t.href.replace(/(javascript:|#).*$/, "")),
            t.replace(i + "#" + e))
          : (t.hash = "#" + e);
      },
    }),
    (h.history = new O());
  v.extend =
    m.extend =
    y.extend =
    e.extend =
    O.extend =
      function (t, e) {
        var i = this,
          n =
            t && b.has(t, "constructor")
              ? t.constructor
              : function () {
                  return i.apply(this, arguments);
                };
        return (
          b.extend(n, i, e),
          (n.prototype = b.create(i.prototype, t)),
          ((n.prototype.constructor = n).__super__ = i.prototype),
          n
        );
      };
  var F = function () {
      throw new Error('A "url" property or function must be specified');
    },
    B = function (e, i) {
      var n = i.error;
      i.error = function (t) {
        n && n.call(i.context, e, t, i), e.trigger("error", e, t, i);
      };
    };
  return h;
});
