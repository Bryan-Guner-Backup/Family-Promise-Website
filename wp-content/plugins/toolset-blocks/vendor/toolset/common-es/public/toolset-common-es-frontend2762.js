var toolsetCommonEs;
toolsetCommonEs = (() => {
  "use strict";
  var e = {
      657: (e, t, o) => {
        function r(e, t) {
          for (var o = 0; o < t.length; o++) {
            var r = t[o];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        o.r(t),
          o.d(t, {
            Masonry: () => n,
            fontToHead: () => i,
            styleToHead: () => a,
          });
        var n = (function () {
          function e(t) {
            var o = this;
            if (
              ((function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              t)
            ) {
              (this.CHROME_MAX_NUMBER_ROWS = 1e3),
                (this.CHROME_MAX_ROW_SPAN = 1e3),
                (this.root = t),
                this.resizeAllGridItems();
              var r = Array.from(this.root.querySelectorAll("img")),
                n = r.length,
                i = 0;
              r.forEach(function (e) {
                e.addEventListener("load", function () {
                  ++i === n && o.resizeAllGridItems();
                });
              }),
                window.addEventListener(
                  "resize",
                  this.resizeAllGridItems.bind(this)
                ),
                window.addEventListener(
                  "load",
                  this.resizeAllGridItems.bind(this)
                );
            }
          }
          var t, o;
          return (
            (t = e),
            (o = [
              {
                key: "resizeGridItem",
                value: function (e, t) {
                  var o = e.querySelector(".tb-brick__content");
                  if (o) {
                    var r = window.getComputedStyle(this.root),
                      n = parseInt(r.getPropertyValue("grid-row-gap")),
                      i = Math.ceil(o.getBoundingClientRect().height + n),
                      l = Math.ceil(i / t);
                    e.style.gridRowEnd = "span ".concat(l);
                  }
                },
              },
              {
                key: "getMaxItemsHeight",
                value: function (e) {
                  return e.children.length
                    ? Array.from(e.children).reduce(function (e, t) {
                        return Math.max(
                          e || 0,
                          (t.querySelector(".tb-brick__content") || {})
                            .offsetHeight
                        );
                      })
                    : 0;
                },
              },
              {
                key: "getMultiplier",
                value: function (e) {
                  var t = window
                      .getComputedStyle(e)
                      .gridTemplateColumns.split(" ").length,
                    o = Math.ceil(e.children.length / t),
                    r = this.getMaxItemsHeight(e);
                  if (
                    r > this.CHROME_MAX_ROW_SPAN ||
                    o * r > this.CHROME_MAX_NUMBER_ROWS
                  ) {
                    var n = Math.floor((r * o) / this.CHROME_MAX_ROW_SPAN) + 1;
                    return (e.style.gridAutoRows = "".concat(n, "px")), n;
                  }
                  return (e.style.gridAutoRows = "1px"), 1;
                },
              },
              {
                key: "resizeAllGridItems",
                value: function () {
                  var e = this;
                  if (this.root) {
                    var t = this.getMultiplier(this.root);
                    Array.from(this.root.children).forEach(function (o) {
                      return e.resizeGridItem(o, t);
                    });
                  }
                },
              },
            ]) && r(t.prototype, o),
            e
          );
        })();
        function i() {
          var e = document.getElementsByClassName("tces-js-font-encoded"),
            t = e.length ? e[e.length - 1] : null;
          if (t) {
            var o =
              "https://fonts.googleapis.com/css?family=" +
              window.atob(t.innerHTML).split("###").join("|");
            if (!document.querySelector("link[href='" + o + "']")) {
              var r = document.createElement("link");
              (r.href = o),
                (r.rel = "stylesheet"),
                document.head.appendChild(r);
            }
          }
          for (; e[0]; ) e[0].parentNode.removeChild(e[0]);
          for (
            var n = document.getElementsByClassName("tces-js-font-to-head");
            n[0];

          )
            n[0].parentNode.removeChild(n[0]);
        }
        function l(e) {
          return (l =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function s(e) {
          if (
            "object" !== l(window.tcesData) ||
            void 0 === window.tcesData.bodyIdToSelectors ||
            !window.tcesData.bodyIdToSelectors
          )
            return e;
          var t = window.tcesData.bodyIdToSelectors;
          if (!document.body.id || document.body.id === t)
            return (document.body.id = t), e;
          var o = "#" + document.body.id;
          return o.split(" ").length > 1
            ? e.replace("#" + t, "")
            : e.replace("#" + t, "#" + o);
        }
        function a() {
          var e = document.getElementById("toolset-blocks-styling");
          e ||
            (document.head.insertAdjacentHTML(
              "beforeend",
              '<style id="toolset-blocks-styling"></style>'
            ),
            (e = document.getElementById("toolset-blocks-styling")));
          var t = document.getElementsByClassName("tces-js-style-encoded"),
            o = t.length ? t[t.length - 1] : null;
          if (e && o) {
            var r = e.innerHTML,
              n = window.atob(o.innerHTML);
            -1 !== r.indexOf(n) ||
              (-1 !== n.indexOf(r)
                ? (e.innerHTML = s(n))
                : e.appendChild(document.createTextNode(s(n))));
          }
          for (; t[0]; ) t[0].parentNode.removeChild(t[0]);
          for (
            var i = document.getElementsByClassName("tces-js-style-to-head");
            i[0];

          )
            i[0].parentNode.removeChild(i[0]);
        }
      },
    },
    t = {};
  function o(r) {
    if (t[r]) return t[r].exports;
    var n = (t[r] = { exports: {} });
    return e[r](n, n.exports, o), n.exports;
  }
  return (
    (o.d = (e, t) => {
      for (var r in t)
        o.o(t, r) &&
          !o.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    o(657)
  );
})();
