!(function ($) {
  "use strict";
  var escape = /["\\\x00-\x1f\x7f-\x9f]/g,
    meta = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\",
    },
    hasOwn = Object.prototype.hasOwnProperty;
  ($.toJSON =
    "object" == typeof JSON && JSON.stringify
      ? JSON.stringify
      : function (t) {
          if (null === t) return "null";
          var e,
            r,
            n,
            o,
            i = $.type(t);
          if ("undefined" !== i) {
            if ("number" === i || "boolean" === i) return String(t);
            if ("string" === i) return $.quoteString(t);
            if ("function" == typeof t.toJSON) return $.toJSON(t.toJSON());
            if ("date" === i) {
              var f = t.getUTCMonth() + 1,
                u = t.getUTCDate(),
                s = t.getUTCFullYear(),
                a = t.getUTCHours(),
                l = t.getUTCMinutes(),
                c = t.getUTCSeconds(),
                p = t.getUTCMilliseconds();
              return (
                f < 10 && (f = "0" + f),
                u < 10 && (u = "0" + u),
                a < 10 && (a = "0" + a),
                l < 10 && (l = "0" + l),
                c < 10 && (c = "0" + c),
                p < 100 && (p = "0" + p),
                p < 10 && (p = "0" + p),
                '"' +
                  s +
                  "-" +
                  f +
                  "-" +
                  u +
                  "T" +
                  a +
                  ":" +
                  l +
                  ":" +
                  c +
                  "." +
                  p +
                  'Z"'
              );
            }
            if (((e = []), $.isArray(t))) {
              for (r = 0; r < t.length; r++) e.push($.toJSON(t[r]) || "null");
              return "[" + e.join(",") + "]";
            }
            if ("object" == typeof t) {
              for (r in t)
                if (hasOwn.call(t, r)) {
                  if ("number" === (i = typeof r)) n = '"' + r + '"';
                  else {
                    if ("string" !== i) continue;
                    n = $.quoteString(r);
                  }
                  "function" !== (i = typeof t[r]) &&
                    "undefined" !== i &&
                    ((o = $.toJSON(t[r])), e.push(n + ":" + o));
                }
              return "{" + e.join(",") + "}";
            }
          }
        }),
    ($.evalJSON =
      "object" == typeof JSON && JSON.parse
        ? JSON.parse
        : function (str) {
            return eval("(" + str + ")");
          }),
    ($.secureEvalJSON =
      "object" == typeof JSON && JSON.parse
        ? JSON.parse
        : function (str) {
            var filtered = str
              .replace(/\\["\\\/bfnrtu]/g, "@")
              .replace(
                /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]"
              )
              .replace(/(?:^|:|,)(?:\s*\[)+/g, "");
            if (/^[\],:{}\s]*$/.test(filtered)) return eval("(" + str + ")");
            throw new SyntaxError("Error parsing JSON, source is not valid.");
          }),
    ($.quoteString = function (t) {
      return t.match(escape)
        ? '"' +
            t.replace(escape, function (t) {
              var e = meta[t];
              return "string" == typeof e
                ? e
                : ((e = t.charCodeAt()),
                  "\\u00" +
                    Math.floor(e / 16).toString(16) +
                    (e % 16).toString(16));
            }) +
            '"'
        : '"' + t + '"';
    });
})(jQuery);
