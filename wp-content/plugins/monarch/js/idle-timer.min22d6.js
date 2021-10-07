/*! Idle Timer v1.1.1 2020-06-25 | https://github.com/thorst/jquery-idletimer | (c) 2020 Paul Irish | Licensed MIT */

!(function (c) {
  (c.idleTimer = function (e, n) {
    var i;
    "object" == typeof e
      ? ((i = e), (e = null))
      : "number" == typeof e && ((i = { timeout: e }), (e = null)),
      (n = n || document),
      (i = c.extend(
        {
          idle: !1,
          timeout: 3e4,
          events:
            "mousemove keydown wheel DOMMouseScroll mousewheel mousedown touchstart touchmove MSPointerDown MSPointerMove",
        },
        i
      ));
    function t(e) {
      var i = c.data(n, "idleTimerObj") || {};
      (i.idle = !i.idle), (i.olddate = +new Date());
      var t = c.Event((i.idle ? "idle" : "active") + ".idleTimer");
      c(n).trigger(t, [n, c.extend({}, i), e]);
    }
    function r(e) {
      var i = c.data(n, "idleTimerObj") || {};
      if (
        ("storage" !== e.type || e.originalEvent.key === i.timerSyncId) &&
        null == i.remaining
      ) {
        if ("mousemove" === e.type) {
          if (e.pageX === i.pageX && e.pageY === i.pageY) return;
          if (void 0 === e.pageX && void 0 === e.pageY) return;
          if (new Date() - i.olddate < 200) return;
        }
        clearTimeout(i.tId),
          i.idle && t(e),
          (i.lastActive = +new Date()),
          (i.pageX = e.pageX),
          (i.pageY = e.pageY),
          "storage" !== e.type &&
            i.timerSyncId &&
            "undefined" != typeof localStorage &&
            localStorage.setItem(i.timerSyncId, i.lastActive),
          (i.tId = setTimeout(t, i.timeout));
      }
    }
    function l() {
      var e = c.data(n, "idleTimerObj") || {};
      (e.idle = e.idleBackup),
        (e.olddate = +new Date()),
        (e.lastActive = e.olddate),
        (e.remaining = null),
        clearTimeout(e.tId),
        e.idle || (e.tId = setTimeout(t, e.timeout));
    }
    var a,
      d,
      o,
      u = c(n),
      m = u.data("idleTimerObj") || {};
    if (null === e && void 0 !== m.idle) return l(), u;
    if (null !== e) {
      if (null !== e && void 0 === m.idle) return !1;
      if ("destroy" === e)
        return (
          (o = c.data(n, "idleTimerObj") || {}),
          clearTimeout(o.tId),
          u.removeData("idleTimerObj"),
          u.off("._idleTimer"),
          u
        );
      if ("pause" === e)
        return (
          null == (d = c.data(n, "idleTimerObj") || {}).remaining &&
            ((d.remaining = d.timeout - (new Date() - d.olddate)),
            clearTimeout(d.tId)),
          u
        );
      if ("resume" === e)
        return (
          null != (a = c.data(n, "idleTimerObj") || {}).remaining &&
            (a.idle || (a.tId = setTimeout(t, a.remaining)),
            (a.remaining = null)),
          u
        );
      if ("reset" === e) return l(), u;
      if ("getRemainingTime" === e)
        return (function () {
          var e = c.data(n, "idleTimerObj") || {};
          if (e.idle) return 0;
          if (null != e.remaining) return e.remaining;
          var i = e.timeout - (new Date() - e.lastActive);
          return i < 0 && (i = 0), i;
        })();
      if ("getElapsedTime" === e) return new Date() - m.olddate;
      if ("getLastActiveTime" === e) return m.lastActive;
      if ("isIdle" === e) return m.idle;
    }
    return (
      u.on(
        (i.events + " ").split(" ").join("._idleTimer ").trim(),
        function (e) {
          r(e);
        }
      ),
      i.timerSyncId && c(window).on("storage", r),
      (m = c.extend(
        {},
        {
          olddate: +new Date(),
          lastActive: +new Date(),
          idle: i.idle,
          idleBackup: i.idle,
          timeout: i.timeout,
          remaining: null,
          timerSyncId: i.timerSyncId,
          tId: null,
          pageX: null,
          pageY: null,
        }
      )).idle || (m.tId = setTimeout(t, m.timeout)),
      c.data(n, "idleTimerObj", m),
      u
    );
  }),
    (c.fn.idleTimer = function (e) {
      return this[0] ? c.idleTimer(e, this[0]) : this;
    });
})(jQuery);
