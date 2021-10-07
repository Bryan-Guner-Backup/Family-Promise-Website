var MonsterInsights = function () {
    var e = [],
      i = "",
      r = !1;
    this.setLastClicked = function (t, n, i) {
      t = typeof t !== "undefined" ? t : [];
      n = typeof n !== "undefined" ? n : [];
      i = typeof i !== "undefined" ? i : !1;
      e.valuesArray = t;
      e.fieldsArray = n;
    };
    this.getLastClicked = function () {
      return e;
    };
    this.setInternalAsOutboundCategory = function (e) {
      i = e;
    };
    this.getInternalAsOutboundCategory = function () {
      return i;
    };
    this.sendEvent = function (e, t, n) {
      x(e, t, n, []);
    };
    function u() {
      if (window.monsterinsights_debug_mode) {
        return !0;
      } else {
        return !1;
      }
    }
    function d(e, t, n) {
      var l = {};
      for (var i in e) {
        if (!e.hasOwnProperty(i)) {
          continue;
        }
        if (t && t.indexOf(i) === -1) {
          continue;
        }
        if (n && n.indexOf(i) > -1) {
          continue;
        }
        l[i] = e[i];
      }
      return l;
    }
    function b(e, t, n) {
      if (!monsterinsights_frontend.v4_id || e !== "event") {
        return;
      }
      var i = n.event_category || "",
        r = ["event_name", "event_category", "event_label", "value"],
        l = d(n, null, r);
      l.action = t;
      var a = { "outbound-link": "click", download: "file_download" };
      __gtagTracker(e, a[i] || i.replace("-", "_"), l);
    }
    function y(e, t, n) {
      if (!monsterinsights_frontend.ua) {
        return;
      }
      var l = ["event_category", "event_label", "value"],
        i = d(n, l);
      i.send_to = monsterinsights_frontend.ua;
      __gtagTracker(e, t, i);
    }
    function l(t, i, l, a) {
      t = typeof t !== "undefined" ? t : "event";
      i = typeof i !== "undefined" ? i : "";
      a = typeof a !== "undefined" ? a : [];
      l = typeof l !== "undefined" ? l : {};
      y(t, i, l);
      b(t, i, l);
      e.valuesArray = a;
      e.fieldsArray = l;
      e.fieldsArray.event_action = i;
      e.tracked = !0;
      n("Tracked: " + a.type);
      n(e);
    }
    function x(t, i, l, a) {
      t = typeof t !== "undefined" ? t : "event";
      i = typeof i !== "undefined" ? i : "";
      a = typeof a !== "undefined" ? a : [];
      l = typeof l !== "undefined" ? l : {};
      __gtagTracker(t, i, l);
      e.valuesArray = a;
      e.fieldsArray = l;
      e.fieldsArray.event_action = i;
      e.tracked = !0;
      n("Tracked: " + a.type);
      n(e);
    }
    function t(t) {
      t = typeof t !== "undefined" ? t : [];
      e.valuesArray = t;
      e.fieldsArray = [];
      e.tracked = !1;
      n("Not Tracked: " + t.exit);
      n(e);
    }
    function n(e) {
      if (u()) {
        console.dir(e);
      }
    }
    function o(e) {
      return e.replace(/^\s+|\s+$/gm, "");
    }
    function c() {
      var n = 0,
        e = document.domain,
        i = e.split("."),
        t = "_gd" + new Date().getTime();
      while (n < i.length - 1 && document.cookie.indexOf(t + "=" + t) == -1) {
        e = i.slice(-1 - ++n).join(".");
        document.cookie = t + "=" + t + ";domain=" + e + ";";
      }
      document.cookie =
        t + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + e + ";";
      return e;
    }
    function h(e) {
      e = e.toString();
      e = e.substring(0, e.indexOf("#") == -1 ? e.length : e.indexOf("#"));
      e = e.substring(0, e.indexOf("?") == -1 ? e.length : e.indexOf("?"));
      e = e.substring(e.lastIndexOf("/") + 1, e.length);
      if (e.length > 0 && e.indexOf(".") !== -1) {
        e = e.substring(e.indexOf(".") + 1);
        return e;
      } else {
        return "";
      }
    }
    function w(e) {
      return (
        e.which == 1 ||
        e.which == 2 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      );
    }
    function g() {
      var e = [];
      if (typeof monsterinsights_frontend.download_extensions == "string") {
        e = monsterinsights_frontend.download_extensions.split(",");
      }
      return e;
    }
    function v() {
      var e = [];
      if (typeof monsterinsights_frontend.inbound_paths == "string") {
        e = JSON.parse(monsterinsights_frontend.inbound_paths);
      }
      return e;
    }
    function A(e) {
      if (e.which == 1) {
        return "event.which=1";
      } else if (e.which == 2) {
        return "event.which=2";
      } else if (e.metaKey) {
        return "metaKey";
      } else if (e.ctrlKey) {
        return "ctrlKey";
      } else if (e.shiftKey) {
        return "shiftKey";
      } else if (e.altKey) {
        return "altKey";
      } else {
        return "";
      }
    }
    function T(e) {
      var f = g(),
        l = v(),
        t = "unknown",
        u = e.href,
        m = h(e.href),
        d = c(),
        r = e.hostname,
        a = e.protocol,
        k = e.pathname;
      u = u.toString();
      var s,
        p,
        b = e.getAttribute("data-vars-ga-category");
      if (b) {
        return b;
      }
      if (u.match(/^javascript\:/i)) {
        t = "internal";
      } else if (a && a.length > 0 && (o(a) == "tel" || o(a) == "tel:")) {
        t = "tel";
      } else if (a && a.length > 0 && (o(a) == "mailto" || o(a) == "mailto:")) {
        t = "mailto";
      } else if (
        r &&
        d &&
        r.length > 0 &&
        d.length > 0 &&
        !r.endsWith("." + d) &&
        r !== d
      ) {
        t = "external";
      } else if (k && JSON.stringify(l) != "{}" && k.length > 0) {
        var y = l.length;
        for (var n = 0; n < y; n++) {
          if (
            l[n].path &&
            l[n].label &&
            l[n].path.length > 0 &&
            l[n].label.length > 0 &&
            k.startsWith(l[n].path)
          ) {
            t = "internal-as-outbound";
            i = "outbound-link-" + l[n].label;
            break;
          }
        }
      } else if (
        r &&
        window.monsterinsights_experimental_mode &&
        r.length > 0 &&
        document.domain.length > 0 &&
        r !== document.domain
      ) {
        t = "cross-hostname";
      }
      if (
        m &&
        (t === "unknown" || "external" === t) &&
        f.length > 0 &&
        m.length > 0
      ) {
        for (s = 0, p = f.length; s < p; ++s) {
          if (f[s].length > 0 && (u.endsWith(f[s]) || f[s] == m)) {
            t = "download";
            break;
          }
        }
      }
      if (t === "unknown") {
        t = "internal";
      }
      return t;
    }
    function O(e, t) {
      var n =
        e.target && !e.target.match(/^_(self|parent|top)$/i) ? e.target : !1;
      if (t.ctrlKey || t.shiftKey || t.metaKey || t.which == 2) {
        n = "_blank";
      }
      return n;
    }
    function m(e) {
      if (
        e.getAttribute("data-vars-ga-label") &&
        e.getAttribute("data-vars-ga-label").replace(/\n/gi, "")
      ) {
        return e.getAttribute("data-vars-ga-label").replace(/\n/gi, "");
      } else if (e.title && e.title.replace(/\n/gi, "")) {
        return e.title.replace(/\n/gi, "");
      } else if (e.innerText && e.innerText.replace(/\n/gi, "")) {
        return e.innerText.replace(/\n/gi, "");
      } else if (
        e.getAttribute("aria-label") &&
        e.getAttribute("aria-label").replace(/\n/gi, "")
      ) {
        return e.getAttribute("aria-label").replace(/\n/gi, "");
      } else if (e.alt && e.alt.replace(/\n/gi, "")) {
        return e.alt.replace(/\n/gi, "");
      } else if (e.textContent && e.textContent.replace(/\n/gi, "")) {
        return e.textContent.replace(/\n/gi, "");
      } else {
        return undefined;
      }
    }
    function K(e) {
      var i = e.children,
        l = 0,
        a,
        n;
      for (var t = 0; t < i.length; t++) {
        a = i[t];
        n = m(a);
        if (n) {
          return n;
        }
        if (l == 99) {
          return undefined;
        }
        l++;
      }
      return undefined;
    }
    function k(n) {
      var o = n.srcElement || n.target,
        e = [],
        k;
      e.el = o;
      e.click_type = A(n);
      if ("undefined" === typeof __gtagTracker || !w(n)) {
        e.exit = "loaded";
        t(e);
        return;
      }
      while (
        o &&
        (typeof o.tagName == "undefined" ||
          o.tagName.toLowerCase() != "a" ||
          !o.href)
      ) {
        o = o.parentNode;
      }
      if (o && o.href && !o.hasAttribute("xlink:href")) {
        var d = o.href,
          I = h(o.href),
          M = g(),
          S = v(),
          L = monsterinsights_frontend.home_url,
          N = c(),
          a = T(o),
          x = O(o, n),
          b = o.getAttribute("data-vars-ga-action"),
          f = o.getAttribute("data-vars-ga-label");
        e.el = o;
        e.el_href = o.href;
        e.el_protocol = o.protocol;
        e.el_hostname = o.hostname;
        e.el_port = o.port;
        e.el_pathname = o.pathname;
        e.el_search = o.search;
        e.el_hash = o.hash;
        e.el_host = o.host;
        e.el_classes = o.getAttribute("class");
        e.el_id = o.id;
        e.debug_mode = u();
        e.download_extensions = M;
        e.inbound_paths = S;
        e.home_url = L;
        e.link = d;
        e.extension = I;
        e.type = a;
        e.target = x;
        e.title = m(o);
        if (!e.label && !e.title) {
          e.title = K(o);
        }
        if (a !== "internal" && a !== "javascript") {
          var y = !1,
            p = function () {
              if (y) {
                return;
              }
              s();
              y = !0;
              window.location.href = d;
            },
            E = function () {
              e.exit = "external";
              t(e);
            },
            D = function () {
              e.exit = "internal-as-outbound";
              t(e);
            },
            C = function () {
              e.exit = "cross-hostname";
              t(e);
            };
          if (x || a == "mailto" || a == "tel") {
            if (a == "download") {
              k = {
                event_category: "download",
                event_label: f || e.title,
                file_extension: e.extension,
                file_name: e.link.replace(/^.*\//g, ""),
                link_text: f || e.title,
                link_url: d,
                link_domain: e.el_hostname,
                link_classes: e.el_classes,
                link_id: e.el_id,
              };
            } else if (a == "tel") {
              k = {
                event_category: "tel",
                event_label: f || e.title.replace("tel:", ""),
                tel_number: d.replace("tel:", ""),
                link_text: f || e.title,
                link_url: d,
                link_classes: e.el_classes,
                link_id: e.el_id,
              };
            } else if (a == "mailto") {
              k = {
                event_category: "mailto",
                event_label: f || e.title.replace("mailto:", ""),
                email_address: d.replace("mailto:", ""),
                link_text: f || e.title.replace("mailto:", ""),
                link_url: d,
                link_classes: e.el_classes,
                link_id: e.el_id,
              };
            } else if (a == "internal-as-outbound") {
              k = {
                event_category: i,
                event_label: f || e.title,
                event_name: "click",
                is_affiliate_link: !0,
                affiliate_label: i.replace("outbound-link-", ""),
                link_text: f || e.title,
                link_url: d,
                link_domain: e.el_hostname,
                link_classes: e.el_classes,
                link_id: e.el_id,
                outbound: !0,
              };
            } else if (a == "external") {
              k = {
                event_category: "outbound-link",
                event_label: f || e.title,
                is_affiliate_link: !1,
                link_text: f || e.title,
                link_url: d,
                link_domain: e.el_hostname,
                link_classes: e.el_classes,
                link_id: e.el_id,
                outbound: !0,
              };
            } else if (a == "cross-hostname") {
              k = {
                event_category: "cross-hostname",
                event_label: f || e.title,
                link_text: f || e.title,
                link_url: d,
                link_domain: e.el_hostname,
                link_classes: e.el_classes,
                link_id: e.el_id,
              };
            }
            if (k) {
              l("event", b || d, k, e);
            } else {
              if (a && a != "internal") {
                k = {
                  event_category: a,
                  event_label: f || e.title,
                  link_text: f || e.title,
                  link_url: d,
                  link_domain: e.el_hostname,
                  link_classes: e.el_classes,
                  link_id: e.el_id,
                };
                l("event", b || d, k, e);
              } else {
                e.exit = "type";
                t(e);
              }
            }
          } else {
            if (
              a != "cross-hostname" &&
              a != "external" &&
              a != "internal-as-outbound"
            ) {
              if (!n.defaultPrevented) {
                if (n.preventDefault) {
                  n.preventDefault();
                } else {
                  n.returnValue = !1;
                }
              }
            }
            if (a == "download") {
              k = {
                event_category: "download",
                event_label: f || e.title,
                event_callback: p,
                file_extension: e.extension,
                file_name: e.link.replace(/^.*\//g, ""),
                link_text: f || e.title,
                link_url: d,
                link_domain: e.el_hostname,
                link_classes: e.el_classes,
                link_id: e.el_id,
              };
              l("event", b || d, k, e);
            } else if (a == "internal-as-outbound") {
              r = !0;
              window.onbeforeunload = function (t) {
                if (!n.defaultPrevented) {
                  if (n.preventDefault) {
                    n.preventDefault();
                  } else {
                    n.returnValue = !1;
                  }
                }
                k = {
                  event_category: i,
                  event_label: f || e.title,
                  event_callback: p,
                  is_affiliate_link: !0,
                  affiliate_label: i.replace("outbound-link-", ""),
                  link_text: f || e.title,
                  link_url: d,
                  link_domain: e.el_hostname,
                  link_classes: e.el_classes,
                  link_id: e.el_id,
                  outbound: !0,
                };
                if (navigator.sendBeacon) {
                  k.transport = "beacon";
                }
                l("event", b || d, k, e);
                setTimeout(p, 1000);
              };
            } else if (a == "external") {
              r = !0;
              window.onbeforeunload = function (t) {
                if (!n.defaultPrevented) {
                  if (n.preventDefault) {
                    n.preventDefault();
                  } else {
                    n.returnValue = !1;
                  }
                }
                k = {
                  event_category: "outbound-link",
                  event_label: f || e.title,
                  event_callback: p,
                  is_affiliate_link: !1,
                  link_text: f || e.title,
                  link_url: d,
                  link_domain: e.el_hostname,
                  link_classes: e.el_classes,
                  link_id: e.el_id,
                  outbound: !0,
                };
                if (navigator.sendBeacon) {
                  k.transport = "beacon";
                }
                l("event", b || d, k, e);
                setTimeout(p, 1000);
              };
            } else if (a == "cross-hostname") {
              r = !0;
              window.onbeforeunload = function (t) {
                if (!n.defaultPrevented) {
                  if (n.preventDefault) {
                    n.preventDefault();
                  } else {
                    n.returnValue = !1;
                  }
                }
                k = {
                  event_category: "cross-hostname",
                  event_label: f || e.title,
                  event_callback: p,
                  link_text: f || e.title,
                  link_url: d,
                  link_domain: e.el_hostname,
                  link_classes: e.el_classes,
                  link_id: e.el_id,
                };
                if (navigator.sendBeacon) {
                  k.transport = "beacon";
                }
                l("event", b || d, k, e);
                setTimeout(p, 1000);
              };
            } else {
              if (a && a !== "internal") {
                k = {
                  event_category: a,
                  event_label: f || e.title,
                  event_callback: p,
                  link_text: f || e.title,
                  link_url: d,
                  link_domain: e.el_hostname,
                  link_classes: e.el_classes,
                  link_id: e.el_id,
                };
                l("event", b || d, k, e);
              } else {
                e.exit = "type";
                t(e);
              }
            }
            if (
              a != "external" &&
              a != "cross-hostname" &&
              a != "internal-as-outbound"
            ) {
              setTimeout(p, 1000);
            } else {
              if (a == "external") {
                setTimeout(E, 1100);
              } else if (a == "cross-hostname") {
                setTimeout(C, 1100);
              } else {
                setTimeout(D, 1100);
              }
            }
            setTimeout(s, 100);
          }
        } else {
          s();
          e.exit = "internal";
          t(e);
        }
      } else {
        e.exit = "notlink";
        t(e);
      }
    }
    var f = window.location.hash;
    function p() {
      if (
        monsterinsights_frontend.hash_tracking === "true" &&
        f != window.location.hash &&
        (monsterinsights_frontend.ua || monsterinsights_frontend.v4_id)
      ) {
        f = window.location.hash;
        if (monsterinsights_frontend.ua) {
          __gtagTracker("config", monsterinsights_frontend.ua, {
            page_path: location.pathname + location.search + location.hash,
          });
        }
        if (monsterinsights_frontend.v4_id) {
          __gtagTracker("config", monsterinsights_frontend.v4_id, {
            page_path: location.pathname + location.search + location.hash,
          });
        }
        n(
          "Hash change to: " +
            location.pathname +
            location.search +
            location.hash
        );
      } else {
        n(
          "Hash change to (untracked): " +
            location.pathname +
            location.search +
            location.hash
        );
      }
    }
    function s() {
      if (r) {
        window.onbeforeunload = null;
      }
    }
    var a = window;
    if (a.addEventListener) {
      a.addEventListener(
        "load",
        function () {
          document.body.addEventListener("click", k, !1);
        },
        !1
      );
      window.addEventListener("hashchange", p, !1);
    } else {
      if (a.attachEvent) {
        a.attachEvent("onload", function () {
          document.body.attachEvent("onclick", k);
        });
        window.attachEvent("onhashchange", p);
      }
    }
    if (typeof String.prototype.endsWith !== "function") {
      String.prototype.endsWith = function (e) {
        return this.indexOf(e, this.length - e.length) !== -1;
      };
    }
    if (typeof String.prototype.startsWith !== "function") {
      String.prototype.startsWith = function (e) {
        return this.indexOf(e) === 0;
      };
    }
    if (typeof Array.prototype.lastIndexOf !== "function") {
      Array.prototype.lastIndexOf = function (e) {
        "use strict";
        if (this === void 0 || this === null) {
          throw new TypeError();
        }
        var t,
          n,
          l = Object(this),
          i = l.length >>> 0;
        if (i === 0) {
          return -1;
        }
        t = i - 1;
        if (arguments.length > 1) {
          t = Number(arguments[1]);
          if (t != t) {
            t = 0;
          } else if (t != 0 && t != 1 / 0 && t != -(1 / 0)) {
            t = (t > 0 || -1) * Math.floor(Math.abs(t));
          }
        }
        for (n = t >= 0 ? Math.min(t, i - 1) : i - Math.abs(t); n >= 0; n--) {
          if (n in l && l[n] === e) {
            return n;
          }
        }
        return -1;
      };
    }
  },
  MonsterInsightsObject = new MonsterInsights();
