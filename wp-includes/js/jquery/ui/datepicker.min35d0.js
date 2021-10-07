/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./core"], e)
    : e(jQuery);
})(function (M) {
  var r;
  function e() {
    (this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = "ui-datepicker-div"),
      (this._inlineClass = "ui-datepicker-inline"),
      (this._appendClass = "ui-datepicker-append"),
      (this._triggerClass = "ui-datepicker-trigger"),
      (this._dialogClass = "ui-datepicker-dialog"),
      (this._disableClass = "ui-datepicker-disabled"),
      (this._unselectableClass = "ui-datepicker-unselectable"),
      (this._currentClass = "ui-datepicker-current-day"),
      (this._dayOverClass = "ui-datepicker-days-cell-over"),
      (this.regional = []),
      (this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthNamesShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        dayNames: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: "",
      }),
      (this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1,
      }),
      M.extend(this._defaults, this.regional[""]),
      (this.regional.en = M.extend(!0, {}, this.regional[""])),
      (this.regional["en-US"] = M.extend(!0, {}, this.regional.en)),
      (this.dpDiv = a(
        M(
          "<div id='" +
            this._mainDivId +
            "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
        )
      ));
  }
  function a(e) {
    var t =
      "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return e
      .on("mouseout", t, function () {
        M(this).removeClass("ui-state-hover"),
          -1 !== this.className.indexOf("ui-datepicker-prev") &&
            M(this).removeClass("ui-datepicker-prev-hover"),
          -1 !== this.className.indexOf("ui-datepicker-next") &&
            M(this).removeClass("ui-datepicker-next-hover");
      })
      .on("mouseover", t, n);
  }
  function n() {
    M.datepicker._isDisabledDatepicker(
      (r.inline ? r.dpDiv.parent() : r.input)[0]
    ) ||
      (M(this)
        .parents(".ui-datepicker-calendar")
        .find("a")
        .removeClass("ui-state-hover"),
      M(this).addClass("ui-state-hover"),
      -1 !== this.className.indexOf("ui-datepicker-prev") &&
        M(this).addClass("ui-datepicker-prev-hover"),
      -1 !== this.className.indexOf("ui-datepicker-next") &&
        M(this).addClass("ui-datepicker-next-hover"));
  }
  function o(e, t) {
    for (var a in (M.extend(e, t), t)) null == t[a] && (e[a] = t[a]);
    return e;
  }
  return (
    M.extend(M.ui, { datepicker: { version: "1.12.1" } }),
    M.extend(e.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function () {
        return this.dpDiv;
      },
      setDefaults: function (e) {
        return o(this._defaults, e || {}), this;
      },
      _attachDatepicker: function (e, t) {
        var a,
          i = e.nodeName.toLowerCase(),
          s = "div" === i || "span" === i;
        e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
          ((a = this._newInst(M(e), s)).settings = M.extend({}, t || {})),
          "input" === i
            ? this._connectDatepicker(e, a)
            : s && this._inlineDatepicker(e, a);
      },
      _newInst: function (e, t) {
        return {
          id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
          input: e,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: t,
          dpDiv: t
            ? a(
                M(
                  "<div class='" +
                    this._inlineClass +
                    " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                )
              )
            : this.dpDiv,
        };
      },
      _connectDatepicker: function (e, t) {
        var a = M(e);
        (t.append = M([])),
          (t.trigger = M([])),
          a.hasClass(this.markerClassName) ||
            (this._attachments(a, t),
            a
              .addClass(this.markerClassName)
              .on("keydown", this._doKeyDown)
              .on("keypress", this._doKeyPress)
              .on("keyup", this._doKeyUp),
            this._autoSize(t),
            M.data(e, "datepicker", t),
            t.settings.disabled && this._disableDatepicker(e));
      },
      _attachments: function (e, t) {
        var a,
          i = this._get(t, "appendText"),
          s = this._get(t, "isRTL");
        t.append && t.append.remove(),
          i &&
            ((t.append = M(
              "<span class='" + this._appendClass + "'>" + i + "</span>"
            )),
            e[s ? "before" : "after"](t.append)),
          e.off("focus", this._showDatepicker),
          t.trigger && t.trigger.remove(),
          ("focus" !== (a = this._get(t, "showOn")) && "both" !== a) ||
            e.on("focus", this._showDatepicker),
          ("button" !== a && "both" !== a) ||
            ((i = this._get(t, "buttonText")),
            (a = this._get(t, "buttonImage")),
            (t.trigger = M(
              this._get(t, "buttonImageOnly")
                ? M("<img/>")
                    .addClass(this._triggerClass)
                    .attr({ src: a, alt: i, title: i })
                : M("<button type='button'></button>")
                    .addClass(this._triggerClass)
                    .html(
                      a ? M("<img/>").attr({ src: a, alt: i, title: i }) : i
                    )
            )),
            e[s ? "before" : "after"](t.trigger),
            t.trigger.on("click", function () {
              return (
                M.datepicker._datepickerShowing &&
                M.datepicker._lastInput === e[0]
                  ? M.datepicker._hideDatepicker()
                  : (M.datepicker._datepickerShowing &&
                      M.datepicker._lastInput !== e[0] &&
                      M.datepicker._hideDatepicker(),
                    M.datepicker._showDatepicker(e[0])),
                !1
              );
            }));
      },
      _autoSize: function (e) {
        var t, a, i, s, r, n;
        this._get(e, "autoSize") &&
          !e.inline &&
          ((r = new Date(2009, 11, 20)),
          (n = this._get(e, "dateFormat")).match(/[DM]/) &&
            ((t = function (e) {
              for (s = i = a = 0; s < e.length; s++)
                e[s].length > a && ((a = e[s].length), (i = s));
              return i;
            }),
            r.setMonth(
              t(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))
            ),
            r.setDate(
              t(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                20 -
                r.getDay()
            )),
          e.input.attr("size", this._formatDate(e, r).length));
      },
      _inlineDatepicker: function (e, t) {
        var a = M(e);
        a.hasClass(this.markerClassName) ||
          (a.addClass(this.markerClassName).append(t.dpDiv),
          M.data(e, "datepicker", t),
          this._setDate(t, this._getDefaultDate(t), !0),
          this._updateDatepicker(t),
          this._updateAlternate(t),
          t.settings.disabled && this._disableDatepicker(e),
          t.dpDiv.css("display", "block"));
      },
      _dialogDatepicker: function (e, t, a, i, s) {
        var r,
          n = this._dialogInst;
        return (
          n ||
            ((this.uuid += 1),
            (r = "dp" + this.uuid),
            (this._dialogInput = M(
              "<input type='text' id='" +
                r +
                "' style='position: absolute; top: -100px; width: 0px;'/>"
            )),
            this._dialogInput.on("keydown", this._doKeyDown),
            M("body").append(this._dialogInput),
            ((n = this._dialogInst =
              this._newInst(this._dialogInput, !1)).settings = {}),
            M.data(this._dialogInput[0], "datepicker", n)),
          o(n.settings, i || {}),
          (t = t && t.constructor === Date ? this._formatDate(n, t) : t),
          this._dialogInput.val(t),
          (this._pos = s ? (s.length ? s : [s.pageX, s.pageY]) : null),
          this._pos ||
            ((r = document.documentElement.clientWidth),
            (i = document.documentElement.clientHeight),
            (t =
              document.documentElement.scrollLeft || document.body.scrollLeft),
            (s = document.documentElement.scrollTop || document.body.scrollTop),
            (this._pos = [r / 2 - 100 + t, i / 2 - 150 + s])),
          this._dialogInput
            .css("left", this._pos[0] + 20 + "px")
            .css("top", this._pos[1] + "px"),
          (n.settings.onSelect = a),
          (this._inDialog = !0),
          this.dpDiv.addClass(this._dialogClass),
          this._showDatepicker(this._dialogInput[0]),
          M.blockUI && M.blockUI(this.dpDiv),
          M.data(this._dialogInput[0], "datepicker", n),
          this
        );
      },
      _destroyDatepicker: function (e) {
        var t,
          a = M(e),
          i = M.data(e, "datepicker");
        a.hasClass(this.markerClassName) &&
          ((t = e.nodeName.toLowerCase()),
          M.removeData(e, "datepicker"),
          "input" === t
            ? (i.append.remove(),
              i.trigger.remove(),
              a
                .removeClass(this.markerClassName)
                .off("focus", this._showDatepicker)
                .off("keydown", this._doKeyDown)
                .off("keypress", this._doKeyPress)
                .off("keyup", this._doKeyUp))
            : ("div" !== t && "span" !== t) ||
              a.removeClass(this.markerClassName).empty(),
          r === i && (r = null));
      },
      _enableDatepicker: function (t) {
        var e,
          a = M(t),
          i = M.data(t, "datepicker");
        a.hasClass(this.markerClassName) &&
          ("input" === (e = t.nodeName.toLowerCase())
            ? ((t.disabled = !1),
              i.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !1;
                })
                .end()
                .filter("img")
                .css({ opacity: "1.0", cursor: "" }))
            : ("div" !== e && "span" !== e) ||
              ((a = a.children("." + this._inlineClass))
                .children()
                .removeClass("ui-state-disabled"),
              a
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !1)),
          (this._disabledInputs = M.map(this._disabledInputs, function (e) {
            return e === t ? null : e;
          })));
      },
      _disableDatepicker: function (t) {
        var e,
          a = M(t),
          i = M.data(t, "datepicker");
        a.hasClass(this.markerClassName) &&
          ("input" === (e = t.nodeName.toLowerCase())
            ? ((t.disabled = !0),
              i.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !0;
                })
                .end()
                .filter("img")
                .css({ opacity: "0.5", cursor: "default" }))
            : ("div" !== e && "span" !== e) ||
              ((a = a.children("." + this._inlineClass))
                .children()
                .addClass("ui-state-disabled"),
              a
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !0)),
          (this._disabledInputs = M.map(this._disabledInputs, function (e) {
            return e === t ? null : e;
          })),
          (this._disabledInputs[this._disabledInputs.length] = t));
      },
      _isDisabledDatepicker: function (e) {
        if (!e) return !1;
        for (var t = 0; t < this._disabledInputs.length; t++)
          if (this._disabledInputs[t] === e) return !0;
        return !1;
      },
      _getInst: function (e) {
        try {
          return M.data(e, "datepicker");
        } catch (e) {
          throw "Missing instance data for this datepicker";
        }
      },
      _optionDatepicker: function (e, t, a) {
        var i,
          s,
          r,
          n,
          d = this._getInst(e);
        if (2 === arguments.length && "string" == typeof t)
          return "defaults" === t
            ? M.extend({}, M.datepicker._defaults)
            : d
            ? "all" === t
              ? M.extend({}, d.settings)
              : this._get(d, t)
            : null;
        (i = t || {}),
          "string" == typeof t && ((i = {})[t] = a),
          d &&
            (this._curInst === d && this._hideDatepicker(),
            (s = this._getDateDatepicker(e, !0)),
            (r = this._getMinMaxDate(d, "min")),
            (n = this._getMinMaxDate(d, "max")),
            o(d.settings, i),
            null !== r &&
              void 0 !== i.dateFormat &&
              void 0 === i.minDate &&
              (d.settings.minDate = this._formatDate(d, r)),
            null !== n &&
              void 0 !== i.dateFormat &&
              void 0 === i.maxDate &&
              (d.settings.maxDate = this._formatDate(d, n)),
            "disabled" in i &&
              (i.disabled
                ? this._disableDatepicker(e)
                : this._enableDatepicker(e)),
            this._attachments(M(e), d),
            this._autoSize(d),
            this._setDate(d, s),
            this._updateAlternate(d),
            this._updateDatepicker(d));
      },
      _changeDatepicker: function (e, t, a) {
        this._optionDatepicker(e, t, a);
      },
      _refreshDatepicker: function (e) {
        e = this._getInst(e);
        e && this._updateDatepicker(e);
      },
      _setDateDatepicker: function (e, t) {
        e = this._getInst(e);
        e &&
          (this._setDate(e, t),
          this._updateDatepicker(e),
          this._updateAlternate(e));
      },
      _getDateDatepicker: function (e, t) {
        e = this._getInst(e);
        return (
          e && !e.inline && this._setDateFromField(e, t),
          e ? this._getDate(e) : null
        );
      },
      _doKeyDown: function (e) {
        var t,
          a,
          i = M.datepicker._getInst(e.target),
          s = !0,
          r = i.dpDiv.is(".ui-datepicker-rtl");
        if (((i._keyEvent = !0), M.datepicker._datepickerShowing))
          switch (e.keyCode) {
            case 9:
              M.datepicker._hideDatepicker(), (s = !1);
              break;
            case 13:
              return (
                (a = M(
                  "td." +
                    M.datepicker._dayOverClass +
                    ":not(." +
                    M.datepicker._currentClass +
                    ")",
                  i.dpDiv
                ))[0] &&
                  M.datepicker._selectDay(
                    e.target,
                    i.selectedMonth,
                    i.selectedYear,
                    a[0]
                  ),
                (t = M.datepicker._get(i, "onSelect"))
                  ? ((a = M.datepicker._formatDate(i)),
                    t.apply(i.input ? i.input[0] : null, [a, i]))
                  : M.datepicker._hideDatepicker(),
                !1
              );
            case 27:
              M.datepicker._hideDatepicker();
              break;
            case 33:
              M.datepicker._adjustDate(
                e.target,
                e.ctrlKey
                  ? -M.datepicker._get(i, "stepBigMonths")
                  : -M.datepicker._get(i, "stepMonths"),
                "M"
              );
              break;
            case 34:
              M.datepicker._adjustDate(
                e.target,
                e.ctrlKey
                  ? +M.datepicker._get(i, "stepBigMonths")
                  : +M.datepicker._get(i, "stepMonths"),
                "M"
              );
              break;
            case 35:
              (e.ctrlKey || e.metaKey) && M.datepicker._clearDate(e.target),
                (s = e.ctrlKey || e.metaKey);
              break;
            case 36:
              (e.ctrlKey || e.metaKey) && M.datepicker._gotoToday(e.target),
                (s = e.ctrlKey || e.metaKey);
              break;
            case 37:
              (e.ctrlKey || e.metaKey) &&
                M.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
                (s = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  M.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey
                      ? -M.datepicker._get(i, "stepBigMonths")
                      : -M.datepicker._get(i, "stepMonths"),
                    "M"
                  );
              break;
            case 38:
              (e.ctrlKey || e.metaKey) &&
                M.datepicker._adjustDate(e.target, -7, "D"),
                (s = e.ctrlKey || e.metaKey);
              break;
            case 39:
              (e.ctrlKey || e.metaKey) &&
                M.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
                (s = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  M.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey
                      ? +M.datepicker._get(i, "stepBigMonths")
                      : +M.datepicker._get(i, "stepMonths"),
                    "M"
                  );
              break;
            case 40:
              (e.ctrlKey || e.metaKey) &&
                M.datepicker._adjustDate(e.target, 7, "D"),
                (s = e.ctrlKey || e.metaKey);
              break;
            default:
              s = !1;
          }
        else
          36 === e.keyCode && e.ctrlKey
            ? M.datepicker._showDatepicker(this)
            : (s = !1);
        s && (e.preventDefault(), e.stopPropagation());
      },
      _doKeyPress: function (e) {
        var t,
          a = M.datepicker._getInst(e.target);
        if (M.datepicker._get(a, "constrainInput"))
          return (
            (t = M.datepicker._possibleChars(
              M.datepicker._get(a, "dateFormat")
            )),
            (a = String.fromCharCode(
              null == e.charCode ? e.keyCode : e.charCode
            )),
            e.ctrlKey || e.metaKey || a < " " || !t || -1 < t.indexOf(a)
          );
      },
      _doKeyUp: function (e) {
        e = M.datepicker._getInst(e.target);
        if (e.input.val() !== e.lastVal)
          try {
            M.datepicker.parseDate(
              M.datepicker._get(e, "dateFormat"),
              e.input ? e.input.val() : null,
              M.datepicker._getFormatConfig(e)
            ) &&
              (M.datepicker._setDateFromField(e),
              M.datepicker._updateAlternate(e),
              M.datepicker._updateDatepicker(e));
          } catch (e) {}
        return !0;
      },
      _showDatepicker: function (e) {
        var t, a, i, s;
        "input" !== (e = e.target || e).nodeName.toLowerCase() &&
          (e = M("input", e.parentNode)[0]),
          M.datepicker._isDisabledDatepicker(e) ||
            M.datepicker._lastInput === e ||
            ((s = M.datepicker._getInst(e)),
            M.datepicker._curInst &&
              M.datepicker._curInst !== s &&
              (M.datepicker._curInst.dpDiv.stop(!0, !0),
              s &&
                M.datepicker._datepickerShowing &&
                M.datepicker._hideDatepicker(M.datepicker._curInst.input[0])),
            !1 !==
              (a = (i = M.datepicker._get(s, "beforeShow"))
                ? i.apply(e, [e, s])
                : {}) &&
              (o(s.settings, a),
              (s.lastVal = null),
              (M.datepicker._lastInput = e),
              M.datepicker._setDateFromField(s),
              M.datepicker._inDialog && (e.value = ""),
              M.datepicker._pos ||
                ((M.datepicker._pos = M.datepicker._findPos(e)),
                (M.datepicker._pos[1] += e.offsetHeight)),
              (t = !1),
              M(e)
                .parents()
                .each(function () {
                  return !(t |= "fixed" === M(this).css("position"));
                }),
              (i = { left: M.datepicker._pos[0], top: M.datepicker._pos[1] }),
              (M.datepicker._pos = null),
              s.dpDiv.empty(),
              s.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px",
              }),
              M.datepicker._updateDatepicker(s),
              (i = M.datepicker._checkOffset(s, i, t)),
              s.dpDiv.css({
                position:
                  M.datepicker._inDialog && M.blockUI
                    ? "static"
                    : t
                    ? "fixed"
                    : "absolute",
                display: "none",
                left: i.left + "px",
                top: i.top + "px",
              }),
              s.inline ||
                ((a = M.datepicker._get(s, "showAnim")),
                (i = M.datepicker._get(s, "duration")),
                s.dpDiv.css(
                  "z-index",
                  (function (e) {
                    for (var t, a; e.length && e[0] !== document; ) {
                      if (
                        ("absolute" === (t = e.css("position")) ||
                          "relative" === t ||
                          "fixed" === t) &&
                        ((a = parseInt(e.css("zIndex"), 10)),
                        !isNaN(a) && 0 !== a)
                      )
                        return a;
                      e = e.parent();
                    }
                    return 0;
                  })(M(e)) + 1
                ),
                (M.datepicker._datepickerShowing = !0),
                M.effects && M.effects.effect[a]
                  ? s.dpDiv.show(a, M.datepicker._get(s, "showOptions"), i)
                  : s.dpDiv[a || "show"](a ? i : null),
                M.datepicker._shouldFocusInput(s) && s.input.trigger("focus"),
                (M.datepicker._curInst = s))));
      },
      _updateDatepicker: function (e) {
        (this.maxRows = 4),
          (r = e).dpDiv.empty().append(this._generateHTML(e)),
          this._attachHandlers(e);
        var t,
          a = this._getNumberOfMonths(e),
          i = a[1],
          s = e.dpDiv.find("." + this._dayOverClass + " a");
        0 < s.length && n.apply(s.get(0)),
          e.dpDiv
            .removeClass(
              "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
            )
            .width(""),
          1 < i &&
            e.dpDiv
              .addClass("ui-datepicker-multi-" + i)
              .css("width", 17 * i + "em"),
          e.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add" : "remove") + "Class"](
            "ui-datepicker-multi"
          ),
          e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"](
            "ui-datepicker-rtl"
          ),
          e === M.datepicker._curInst &&
            M.datepicker._datepickerShowing &&
            M.datepicker._shouldFocusInput(e) &&
            e.input.trigger("focus"),
          e.yearshtml &&
            ((t = e.yearshtml),
            setTimeout(function () {
              t === e.yearshtml &&
                e.yearshtml &&
                e.dpDiv
                  .find("select.ui-datepicker-year:first")
                  .replaceWith(e.yearshtml),
                (t = e.yearshtml = null);
            }, 0));
      },
      _shouldFocusInput: function (e) {
        return (
          e.input &&
          e.input.is(":visible") &&
          !e.input.is(":disabled") &&
          !e.input.is(":focus")
        );
      },
      _checkOffset: function (e, t, a) {
        var i = e.dpDiv.outerWidth(),
          s = e.dpDiv.outerHeight(),
          r = e.input ? e.input.outerWidth() : 0,
          n = e.input ? e.input.outerHeight() : 0,
          d =
            document.documentElement.clientWidth +
            (a ? 0 : M(document).scrollLeft()),
          o =
            document.documentElement.clientHeight +
            (a ? 0 : M(document).scrollTop());
        return (
          (t.left -= this._get(e, "isRTL") ? i - r : 0),
          (t.left -=
            a && t.left === e.input.offset().left
              ? M(document).scrollLeft()
              : 0),
          (t.top -=
            a && t.top === e.input.offset().top + n
              ? M(document).scrollTop()
              : 0),
          (t.left -= Math.min(
            t.left,
            t.left + i > d && i < d ? Math.abs(t.left + i - d) : 0
          )),
          (t.top -= Math.min(
            t.top,
            t.top + s > o && s < o ? Math.abs(s + n) : 0
          )),
          t
        );
      },
      _findPos: function (e) {
        for (
          var t = this._getInst(e), a = this._get(t, "isRTL");
          e &&
          ("hidden" === e.type || 1 !== e.nodeType || M.expr.filters.hidden(e));

        )
          e = e[a ? "previousSibling" : "nextSibling"];
        return [(t = M(e).offset()).left, t.top];
      },
      _hideDatepicker: function (e) {
        var t,
          a,
          i = this._curInst;
        !i ||
          (e && i !== M.data(e, "datepicker")) ||
          (this._datepickerShowing &&
            ((t = this._get(i, "showAnim")),
            (a = this._get(i, "duration")),
            (e = function () {
              M.datepicker._tidyDialog(i);
            }),
            M.effects && (M.effects.effect[t] || M.effects[t])
              ? i.dpDiv.hide(t, M.datepicker._get(i, "showOptions"), a, e)
              : i.dpDiv[
                  "slideDown" === t
                    ? "slideUp"
                    : "fadeIn" === t
                    ? "fadeOut"
                    : "hide"
                ](t ? a : null, e),
            t || e(),
            (this._datepickerShowing = !1),
            (e = this._get(i, "onClose")) &&
              e.apply(i.input ? i.input[0] : null, [
                i.input ? i.input.val() : "",
                i,
              ]),
            (this._lastInput = null),
            this._inDialog &&
              (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px",
              }),
              M.blockUI && (M.unblockUI(), M("body").append(this.dpDiv))),
            (this._inDialog = !1)));
      },
      _tidyDialog: function (e) {
        e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
      },
      _checkExternalClick: function (e) {
        var t;
        M.datepicker._curInst &&
          ((t = M(e.target)),
          (e = M.datepicker._getInst(t[0])),
          ((t[0].id === M.datepicker._mainDivId ||
            0 !== t.parents("#" + M.datepicker._mainDivId).length ||
            t.hasClass(M.datepicker.markerClassName) ||
            t.closest("." + M.datepicker._triggerClass).length ||
            !M.datepicker._datepickerShowing ||
            (M.datepicker._inDialog && M.blockUI)) &&
            (!t.hasClass(M.datepicker.markerClassName) ||
              M.datepicker._curInst === e)) ||
            M.datepicker._hideDatepicker());
      },
      _adjustDate: function (e, t, a) {
        var i = M(e),
          e = this._getInst(i[0]);
        this._isDisabledDatepicker(i[0]) ||
          (this._adjustInstDate(
            e,
            t + ("M" === a ? this._get(e, "showCurrentAtPos") : 0),
            a
          ),
          this._updateDatepicker(e));
      },
      _gotoToday: function (e) {
        var t = M(e),
          a = this._getInst(t[0]);
        this._get(a, "gotoCurrent") && a.currentDay
          ? ((a.selectedDay = a.currentDay),
            (a.drawMonth = a.selectedMonth = a.currentMonth),
            (a.drawYear = a.selectedYear = a.currentYear))
          : ((e = new Date()),
            (a.selectedDay = e.getDate()),
            (a.drawMonth = a.selectedMonth = e.getMonth()),
            (a.drawYear = a.selectedYear = e.getFullYear())),
          this._notifyChange(a),
          this._adjustDate(t);
      },
      _selectMonthYear: function (e, t, a) {
        var i = M(e),
          e = this._getInst(i[0]);
        (e["selected" + ("M" === a ? "Month" : "Year")] = e[
          "draw" + ("M" === a ? "Month" : "Year")
        ] =
          parseInt(t.options[t.selectedIndex].value, 10)),
          this._notifyChange(e),
          this._adjustDate(i);
      },
      _selectDay: function (e, t, a, i) {
        var s = M(e);
        M(i).hasClass(this._unselectableClass) ||
          this._isDisabledDatepicker(s[0]) ||
          (((s = this._getInst(s[0])).selectedDay = s.currentDay =
            M("a", i).html()),
          (s.selectedMonth = s.currentMonth = t),
          (s.selectedYear = s.currentYear = a),
          this._selectDate(
            e,
            this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)
          ));
      },
      _clearDate: function (e) {
        e = M(e);
        this._selectDate(e, "");
      },
      _selectDate: function (e, t) {
        var a = M(e),
          e = this._getInst(a[0]);
        (t = null != t ? t : this._formatDate(e)),
          e.input && e.input.val(t),
          this._updateAlternate(e),
          (a = this._get(e, "onSelect"))
            ? a.apply(e.input ? e.input[0] : null, [t, e])
            : e.input && e.input.trigger("change"),
          e.inline
            ? this._updateDatepicker(e)
            : (this._hideDatepicker(),
              (this._lastInput = e.input[0]),
              "object" != typeof e.input[0] && e.input.trigger("focus"),
              (this._lastInput = null));
      },
      _updateAlternate: function (e) {
        var t,
          a,
          i = this._get(e, "altField");
        i &&
          ((t = this._get(e, "altFormat") || this._get(e, "dateFormat")),
          (a = this._getDate(e)),
          (e = this.formatDate(t, a, this._getFormatConfig(e))),
          M(i).val(e));
      },
      noWeekends: function (e) {
        e = e.getDay();
        return [0 < e && e < 6, ""];
      },
      iso8601Week: function (e) {
        var t = new Date(e.getTime());
        return (
          t.setDate(t.getDate() + 4 - (t.getDay() || 7)),
          (e = t.getTime()),
          t.setMonth(0),
          t.setDate(1),
          Math.floor(Math.round((e - t) / 864e5) / 7) + 1
        );
      },
      parseDate: function (t, s, e) {
        if (null == t || null == s) throw "Invalid arguments";
        if ("" === (s = "object" == typeof s ? s.toString() : s + ""))
          return null;
        function r(e) {
          return (e = v + 1 < t.length && t.charAt(v + 1) === e) && v++, e;
        }
        function a(e) {
          var t = r(e),
            t =
              "@" === e
                ? 14
                : "!" === e
                ? 20
                : "y" === e && t
                ? 4
                : "o" === e
                ? 3
                : 2,
            t = new RegExp("^\\d{" + ("y" === e ? t : 1) + "," + t + "}");
          if (!(t = s.substring(l).match(t)))
            throw "Missing number at position " + l;
          return (l += t[0].length), parseInt(t[0], 10);
        }
        function i(e, t, a) {
          var i = -1,
            t = M.map(r(e) ? a : t, function (e, t) {
              return [[t, e]];
            }).sort(function (e, t) {
              return -(e[1].length - t[1].length);
            });
          if (
            (M.each(t, function (e, t) {
              var a = t[1];
              if (s.substr(l, a.length).toLowerCase() === a.toLowerCase())
                return (i = t[0]), (l += a.length), !1;
            }),
            -1 !== i)
          )
            return i + 1;
          throw "Unknown name at position " + l;
        }
        function n() {
          if (s.charAt(l) !== t.charAt(v))
            throw "Unexpected literal at position " + l;
          l++;
        }
        for (
          var d,
            o,
            c,
            l = 0,
            h =
              (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            h =
              "string" != typeof h
                ? h
                : (new Date().getFullYear() % 100) + parseInt(h, 10),
            u = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
            p = (e ? e.dayNames : null) || this._defaults.dayNames,
            g =
              (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
            _ = (e ? e.monthNames : null) || this._defaults.monthNames,
            f = -1,
            k = -1,
            D = -1,
            m = -1,
            y = !1,
            v = 0;
          v < t.length;
          v++
        )
          if (y) "'" !== t.charAt(v) || r("'") ? n() : (y = !1);
          else
            switch (t.charAt(v)) {
              case "d":
                D = a("d");
                break;
              case "D":
                i("D", u, p);
                break;
              case "o":
                m = a("o");
                break;
              case "m":
                k = a("m");
                break;
              case "M":
                k = i("M", g, _);
                break;
              case "y":
                f = a("y");
                break;
              case "@":
                (f = (c = new Date(a("@"))).getFullYear()),
                  (k = c.getMonth() + 1),
                  (D = c.getDate());
                break;
              case "!":
                (f = (c = new Date(
                  (a("!") - this._ticksTo1970) / 1e4
                )).getFullYear()),
                  (k = c.getMonth() + 1),
                  (D = c.getDate());
                break;
              case "'":
                r("'") ? n() : (y = !0);
                break;
              default:
                n();
            }
        if (l < s.length && ((o = s.substr(l)), !/^\s+/.test(o)))
          throw "Extra/unparsed characters found in date: " + o;
        if (
          (-1 === f
            ? (f = new Date().getFullYear())
            : f < 100 &&
              (f +=
                new Date().getFullYear() -
                (new Date().getFullYear() % 100) +
                (f <= h ? 0 : -100)),
          -1 < m)
        )
          for (k = 1, D = m; ; ) {
            if (D <= (d = this._getDaysInMonth(f, k - 1))) break;
            k++, (D -= d);
          }
        if (
          (c = this._daylightSavingAdjust(
            new Date(f, k - 1, D)
          )).getFullYear() !== f ||
          c.getMonth() + 1 !== k ||
          c.getDate() !== D
        )
          throw "Invalid date";
        return c;
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970:
        24 *
        (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
        60 *
        60 *
        1e7,
      formatDate: function (t, e, a) {
        if (!e) return "";
        function s(e) {
          return (e = n + 1 < t.length && t.charAt(n + 1) === e) && n++, e;
        }
        function i(e, t, a) {
          var i = "" + t;
          if (s(e)) for (; i.length < a; ) i = "0" + i;
          return i;
        }
        function r(e, t, a, i) {
          return (s(e) ? i : a)[t];
        }
        var n,
          d = (a ? a.dayNamesShort : null) || this._defaults.dayNamesShort,
          o = (a ? a.dayNames : null) || this._defaults.dayNames,
          c = (a ? a.monthNamesShort : null) || this._defaults.monthNamesShort,
          l = (a ? a.monthNames : null) || this._defaults.monthNames,
          h = "",
          u = !1;
        if (e)
          for (n = 0; n < t.length; n++)
            if (u)
              "'" !== t.charAt(n) || s("'") ? (h += t.charAt(n)) : (u = !1);
            else
              switch (t.charAt(n)) {
                case "d":
                  h += i("d", e.getDate(), 2);
                  break;
                case "D":
                  h += r("D", e.getDay(), d, o);
                  break;
                case "o":
                  h += i(
                    "o",
                    Math.round(
                      (new Date(
                        e.getFullYear(),
                        e.getMonth(),
                        e.getDate()
                      ).getTime() -
                        new Date(e.getFullYear(), 0, 0).getTime()) /
                        864e5
                    ),
                    3
                  );
                  break;
                case "m":
                  h += i("m", e.getMonth() + 1, 2);
                  break;
                case "M":
                  h += r("M", e.getMonth(), c, l);
                  break;
                case "y":
                  h += s("y")
                    ? e.getFullYear()
                    : (e.getFullYear() % 100 < 10 ? "0" : "") +
                      (e.getFullYear() % 100);
                  break;
                case "@":
                  h += e.getTime();
                  break;
                case "!":
                  h += 1e4 * e.getTime() + this._ticksTo1970;
                  break;
                case "'":
                  s("'") ? (h += "'") : (u = !0);
                  break;
                default:
                  h += t.charAt(n);
              }
        return h;
      },
      _possibleChars: function (t) {
        function e(e) {
          return (e = s + 1 < t.length && t.charAt(s + 1) === e) && s++, e;
        }
        for (var a = "", i = !1, s = 0; s < t.length; s++)
          if (i) "'" !== t.charAt(s) || e("'") ? (a += t.charAt(s)) : (i = !1);
          else
            switch (t.charAt(s)) {
              case "d":
              case "m":
              case "y":
              case "@":
                a += "0123456789";
                break;
              case "D":
              case "M":
                return null;
              case "'":
                e("'") ? (a += "'") : (i = !0);
                break;
              default:
                a += t.charAt(s);
            }
        return a;
      },
      _get: function (e, t) {
        return (void 0 !== e.settings[t] ? e.settings : this._defaults)[t];
      },
      _setDateFromField: function (e, t) {
        if (e.input.val() !== e.lastVal) {
          var a = this._get(e, "dateFormat"),
            i = (e.lastVal = e.input ? e.input.val() : null),
            s = this._getDefaultDate(e),
            r = s,
            n = this._getFormatConfig(e);
          try {
            r = this.parseDate(a, i, n) || s;
          } catch (e) {
            i = t ? "" : i;
          }
          (e.selectedDay = r.getDate()),
            (e.drawMonth = e.selectedMonth = r.getMonth()),
            (e.drawYear = e.selectedYear = r.getFullYear()),
            (e.currentDay = i ? r.getDate() : 0),
            (e.currentMonth = i ? r.getMonth() : 0),
            (e.currentYear = i ? r.getFullYear() : 0),
            this._adjustInstDate(e);
        }
      },
      _getDefaultDate: function (e) {
        return this._restrictMinMax(
          e,
          this._determineDate(e, this._get(e, "defaultDate"), new Date())
        );
      },
      _determineDate: function (d, e, t) {
        var a,
          i,
          e =
            null == e || "" === e
              ? t
              : "string" == typeof e
              ? (function (e) {
                  try {
                    return M.datepicker.parseDate(
                      M.datepicker._get(d, "dateFormat"),
                      e,
                      M.datepicker._getFormatConfig(d)
                    );
                  } catch (e) {}
                  for (
                    var t =
                        (e.toLowerCase().match(/^c/)
                          ? M.datepicker._getDate(d)
                          : null) || new Date(),
                      a = t.getFullYear(),
                      i = t.getMonth(),
                      s = t.getDate(),
                      r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                      n = r.exec(e);
                    n;

                  ) {
                    switch (n[2] || "d") {
                      case "d":
                      case "D":
                        s += parseInt(n[1], 10);
                        break;
                      case "w":
                      case "W":
                        s += 7 * parseInt(n[1], 10);
                        break;
                      case "m":
                      case "M":
                        (i += parseInt(n[1], 10)),
                          (s = Math.min(s, M.datepicker._getDaysInMonth(a, i)));
                        break;
                      case "y":
                      case "Y":
                        (a += parseInt(n[1], 10)),
                          (s = Math.min(s, M.datepicker._getDaysInMonth(a, i)));
                    }
                    n = r.exec(e);
                  }
                  return new Date(a, i, s);
                })(e)
              : "number" == typeof e
              ? isNaN(e)
                ? t
                : ((a = e), (i = new Date()).setDate(i.getDate() + a), i)
              : new Date(e.getTime());
        return (
          (e = e && "Invalid Date" === e.toString() ? t : e) &&
            (e.setHours(0),
            e.setMinutes(0),
            e.setSeconds(0),
            e.setMilliseconds(0)),
          this._daylightSavingAdjust(e)
        );
      },
      _daylightSavingAdjust: function (e) {
        return e
          ? (e.setHours(12 < e.getHours() ? e.getHours() + 2 : 0), e)
          : null;
      },
      _setDate: function (e, t, a) {
        var i = !t,
          s = e.selectedMonth,
          r = e.selectedYear,
          t = this._restrictMinMax(e, this._determineDate(e, t, new Date()));
        (e.selectedDay = e.currentDay = t.getDate()),
          (e.drawMonth = e.selectedMonth = e.currentMonth = t.getMonth()),
          (e.drawYear = e.selectedYear = e.currentYear = t.getFullYear()),
          (s === e.selectedMonth && r === e.selectedYear) ||
            a ||
            this._notifyChange(e),
          this._adjustInstDate(e),
          e.input && e.input.val(i ? "" : this._formatDate(e));
      },
      _getDate: function (e) {
        return !e.currentYear || (e.input && "" === e.input.val())
          ? null
          : this._daylightSavingAdjust(
              new Date(e.currentYear, e.currentMonth, e.currentDay)
            );
      },
      _attachHandlers: function (e) {
        var t = this._get(e, "stepMonths"),
          a = "#" + e.id.replace(/\\\\/g, "\\");
        e.dpDiv.find("[data-handler]").map(function () {
          var e = {
            prev: function () {
              M.datepicker._adjustDate(a, -t, "M");
            },
            next: function () {
              M.datepicker._adjustDate(a, +t, "M");
            },
            hide: function () {
              M.datepicker._hideDatepicker();
            },
            today: function () {
              M.datepicker._gotoToday(a);
            },
            selectDay: function () {
              return (
                M.datepicker._selectDay(
                  a,
                  +this.getAttribute("data-month"),
                  +this.getAttribute("data-year"),
                  this
                ),
                !1
              );
            },
            selectMonth: function () {
              return M.datepicker._selectMonthYear(a, this, "M"), !1;
            },
            selectYear: function () {
              return M.datepicker._selectMonthYear(a, this, "Y"), !1;
            },
          };
          M(this).on(
            this.getAttribute("data-event"),
            e[this.getAttribute("data-handler")]
          );
        });
      },
      _generateHTML: function (e) {
        var t,
          a,
          i,
          s,
          r,
          n,
          d,
          o,
          c,
          l,
          h,
          u,
          p,
          g,
          _,
          f,
          k,
          D,
          m,
          y,
          v,
          M,
          b,
          w,
          C,
          I,
          x,
          Y,
          S,
          F,
          N,
          T,
          A = new Date(),
          K = this._daylightSavingAdjust(
            new Date(A.getFullYear(), A.getMonth(), A.getDate())
          ),
          j = this._get(e, "isRTL"),
          O = this._get(e, "showButtonPanel"),
          R = this._get(e, "hideIfNoPrevNext"),
          L = this._get(e, "navigationAsDateFormat"),
          W = this._getNumberOfMonths(e),
          E = this._get(e, "showCurrentAtPos"),
          A = this._get(e, "stepMonths"),
          H = 1 !== W[0] || 1 !== W[1],
          P = this._daylightSavingAdjust(
            e.currentDay
              ? new Date(e.currentYear, e.currentMonth, e.currentDay)
              : new Date(9999, 9, 9)
          ),
          U = this._getMinMaxDate(e, "min"),
          z = this._getMinMaxDate(e, "max"),
          B = e.drawMonth - E,
          J = e.drawYear;
        if ((B < 0 && ((B += 12), J--), z))
          for (
            t = this._daylightSavingAdjust(
              new Date(
                z.getFullYear(),
                z.getMonth() - W[0] * W[1] + 1,
                z.getDate()
              )
            ),
              t = U && t < U ? U : t;
            this._daylightSavingAdjust(new Date(J, B, 1)) > t;

          )
            --B < 0 && ((B = 11), J--);
        for (
          e.drawMonth = B,
            e.drawYear = J,
            E = this._get(e, "prevText"),
            E = L
              ? this.formatDate(
                  E,
                  this._daylightSavingAdjust(new Date(J, B - A, 1)),
                  this._getFormatConfig(e)
                )
              : E,
            a = this._canAdjustMonth(e, -1, J, B)
              ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                E +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (j ? "e" : "w") +
                "'>" +
                E +
                "</span></a>"
              : R
              ? ""
              : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                E +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (j ? "e" : "w") +
                "'>" +
                E +
                "</span></a>",
            E = this._get(e, "nextText"),
            E = L
              ? this.formatDate(
                  E,
                  this._daylightSavingAdjust(new Date(J, B + A, 1)),
                  this._getFormatConfig(e)
                )
              : E,
            i = this._canAdjustMonth(e, 1, J, B)
              ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                E +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (j ? "w" : "e") +
                "'>" +
                E +
                "</span></a>"
              : R
              ? ""
              : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                E +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (j ? "w" : "e") +
                "'>" +
                E +
                "</span></a>",
            R = this._get(e, "currentText"),
            E = this._get(e, "gotoCurrent") && e.currentDay ? P : K,
            R = L ? this.formatDate(R, E, this._getFormatConfig(e)) : R,
            L = e.inline
              ? ""
              : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                this._get(e, "closeText") +
                "</button>",
            L = O
              ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                (j ? L : "") +
                (this._isInRange(e, E)
                  ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                    R +
                    "</button>"
                  : "") +
                (j ? "" : L) +
                "</div>"
              : "",
            s = parseInt(this._get(e, "firstDay"), 10),
            s = isNaN(s) ? 0 : s,
            r = this._get(e, "showWeek"),
            n = this._get(e, "dayNames"),
            d = this._get(e, "dayNamesMin"),
            o = this._get(e, "monthNames"),
            c = this._get(e, "monthNamesShort"),
            l = this._get(e, "beforeShowDay"),
            h = this._get(e, "showOtherMonths"),
            u = this._get(e, "selectOtherMonths"),
            p = this._getDefaultDate(e),
            g = "",
            f = 0;
          f < W[0];
          f++
        ) {
          for (k = "", this.maxRows = 4, D = 0; D < W[1]; D++) {
            if (
              ((m = this._daylightSavingAdjust(new Date(J, B, e.selectedDay))),
              (y = " ui-corner-all"),
              (v = ""),
              H)
            ) {
              if (((v += "<div class='ui-datepicker-group"), 1 < W[1]))
                switch (D) {
                  case 0:
                    (v += " ui-datepicker-group-first"),
                      (y = " ui-corner-" + (j ? "right" : "left"));
                    break;
                  case W[1] - 1:
                    (v += " ui-datepicker-group-last"),
                      (y = " ui-corner-" + (j ? "left" : "right"));
                    break;
                  default:
                    (v += " ui-datepicker-group-middle"), (y = "");
                }
              v += "'>";
            }
            for (
              v +=
                "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                y +
                "'>" +
                (/all|left/.test(y) && 0 === f ? (j ? i : a) : "") +
                (/all|right/.test(y) && 0 === f ? (j ? a : i) : "") +
                this._generateMonthYearHeader(
                  e,
                  B,
                  J,
                  U,
                  z,
                  0 < f || 0 < D,
                  o,
                  c
                ) +
                "</div><table class='ui-datepicker-calendar'><thead><tr>",
                M = r
                  ? "<th class='ui-datepicker-week-col'>" +
                    this._get(e, "weekHeader") +
                    "</th>"
                  : "",
                _ = 0;
              _ < 7;
              _++
            )
              M +=
                "<th scope='col'" +
                (5 <= (_ + s + 6) % 7
                  ? " class='ui-datepicker-week-end'"
                  : "") +
                "><span title='" +
                n[(b = (_ + s) % 7)] +
                "'>" +
                d[b] +
                "</span></th>";
            for (
              v += M + "</tr></thead><tbody>",
                C = this._getDaysInMonth(J, B),
                J === e.selectedYear &&
                  B === e.selectedMonth &&
                  (e.selectedDay = Math.min(e.selectedDay, C)),
                w = (this._getFirstDayOfMonth(J, B) - s + 7) % 7,
                C = Math.ceil((w + C) / 7),
                I = H && this.maxRows > C ? this.maxRows : C,
                this.maxRows = I,
                x = this._daylightSavingAdjust(new Date(J, B, 1 - w)),
                Y = 0;
              Y < I;
              Y++
            ) {
              for (
                v += "<tr>",
                  S = r
                    ? "<td class='ui-datepicker-week-col'>" +
                      this._get(e, "calculateWeek")(x) +
                      "</td>"
                    : "",
                  _ = 0;
                _ < 7;
                _++
              )
                (F = l ? l.apply(e.input ? e.input[0] : null, [x]) : [!0, ""]),
                  (T =
                    ((N = x.getMonth() !== B) && !u) ||
                    !F[0] ||
                    (U && x < U) ||
                    (z && z < x)),
                  (S +=
                    "<td class='" +
                    (5 <= (_ + s + 6) % 7 ? " ui-datepicker-week-end" : "") +
                    (N ? " ui-datepicker-other-month" : "") +
                    ((x.getTime() === m.getTime() &&
                      B === e.selectedMonth &&
                      e._keyEvent) ||
                    (p.getTime() === x.getTime() && p.getTime() === m.getTime())
                      ? " " + this._dayOverClass
                      : "") +
                    (T
                      ? " " + this._unselectableClass + " ui-state-disabled"
                      : "") +
                    (N && !h
                      ? ""
                      : " " +
                        F[1] +
                        (x.getTime() === P.getTime()
                          ? " " + this._currentClass
                          : "") +
                        (x.getTime() === K.getTime()
                          ? " ui-datepicker-today"
                          : "")) +
                    "'" +
                    ((N && !h) || !F[2]
                      ? ""
                      : " title='" + F[2].replace(/'/g, "&#39;") + "'") +
                    (T
                      ? ""
                      : " data-handler='selectDay' data-event='click' data-month='" +
                        x.getMonth() +
                        "' data-year='" +
                        x.getFullYear() +
                        "'") +
                    ">" +
                    (N && !h
                      ? "&#xa0;"
                      : T
                      ? "<span class='ui-state-default'>" +
                        x.getDate() +
                        "</span>"
                      : "<a class='ui-state-default" +
                        (x.getTime() === K.getTime()
                          ? " ui-state-highlight"
                          : "") +
                        (x.getTime() === P.getTime()
                          ? " ui-state-active"
                          : "") +
                        (N ? " ui-priority-secondary" : "") +
                        "' href='#'>" +
                        x.getDate() +
                        "</a>") +
                    "</td>"),
                  x.setDate(x.getDate() + 1),
                  (x = this._daylightSavingAdjust(x));
              v += S + "</tr>";
            }
            11 < ++B && ((B = 0), J++),
              (k += v +=
                "</tbody></table>" +
                (H
                  ? "</div>" +
                    (0 < W[0] && D === W[1] - 1
                      ? "<div class='ui-datepicker-row-break'></div>"
                      : "")
                  : ""));
          }
          g += k;
        }
        return (g += L), (e._keyEvent = !1), g;
      },
      _generateMonthYearHeader: function (e, t, a, i, s, r, n, d) {
        var o,
          c,
          l,
          h,
          u,
          p,
          g,
          _ = this._get(e, "changeMonth"),
          f = this._get(e, "changeYear"),
          k = this._get(e, "showMonthAfterYear"),
          D = "<div class='ui-datepicker-title'>",
          m = "";
        if (r || !_)
          m += "<span class='ui-datepicker-month'>" + n[t] + "</span>";
        else {
          for (
            o = i && i.getFullYear() === a,
              c = s && s.getFullYear() === a,
              m +=
                "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
              l = 0;
            l < 12;
            l++
          )
            (!o || l >= i.getMonth()) &&
              (!c || l <= s.getMonth()) &&
              (m +=
                "<option value='" +
                l +
                "'" +
                (l === t ? " selected='selected'" : "") +
                ">" +
                d[l] +
                "</option>");
          m += "</select>";
        }
        if ((k || (D += m + (!r && _ && f ? "" : "&#xa0;")), !e.yearshtml))
          if (((e.yearshtml = ""), r || !f))
            D += "<span class='ui-datepicker-year'>" + a + "</span>";
          else {
            for (
              h = this._get(e, "yearRange").split(":"),
                u = new Date().getFullYear(),
                p = (n = function (e) {
                  e = e.match(/c[+\-].*/)
                    ? a + parseInt(e.substring(1), 10)
                    : e.match(/[+\-].*/)
                    ? u + parseInt(e, 10)
                    : parseInt(e, 10);
                  return isNaN(e) ? u : e;
                })(h[0]),
                g = Math.max(p, n(h[1] || "")),
                p = i ? Math.max(p, i.getFullYear()) : p,
                g = s ? Math.min(g, s.getFullYear()) : g,
                e.yearshtml +=
                  "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
              p <= g;
              p++
            )
              e.yearshtml +=
                "<option value='" +
                p +
                "'" +
                (p === a ? " selected='selected'" : "") +
                ">" +
                p +
                "</option>";
            (e.yearshtml += "</select>"),
              (D += e.yearshtml),
              (e.yearshtml = null);
          }
        return (
          (D += this._get(e, "yearSuffix")),
          k && (D += (!r && _ && f ? "" : "&#xa0;") + m),
          (D += "</div>")
        );
      },
      _adjustInstDate: function (e, t, a) {
        var i = e.selectedYear + ("Y" === a ? t : 0),
          s = e.selectedMonth + ("M" === a ? t : 0),
          t =
            Math.min(e.selectedDay, this._getDaysInMonth(i, s)) +
            ("D" === a ? t : 0),
          t = this._restrictMinMax(
            e,
            this._daylightSavingAdjust(new Date(i, s, t))
          );
        (e.selectedDay = t.getDate()),
          (e.drawMonth = e.selectedMonth = t.getMonth()),
          (e.drawYear = e.selectedYear = t.getFullYear()),
          ("M" !== a && "Y" !== a) || this._notifyChange(e);
      },
      _restrictMinMax: function (e, t) {
        var a = this._getMinMaxDate(e, "min"),
          e = this._getMinMaxDate(e, "max"),
          t = a && t < a ? a : t;
        return e && e < t ? e : t;
      },
      _notifyChange: function (e) {
        var t = this._get(e, "onChangeMonthYear");
        t &&
          t.apply(e.input ? e.input[0] : null, [
            e.selectedYear,
            e.selectedMonth + 1,
            e,
          ]);
      },
      _getNumberOfMonths: function (e) {
        e = this._get(e, "numberOfMonths");
        return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
      },
      _getMinMaxDate: function (e, t) {
        return this._determineDate(e, this._get(e, t + "Date"), null);
      },
      _getDaysInMonth: function (e, t) {
        return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
      },
      _getFirstDayOfMonth: function (e, t) {
        return new Date(e, t, 1).getDay();
      },
      _canAdjustMonth: function (e, t, a, i) {
        var s = this._getNumberOfMonths(e),
          s = this._daylightSavingAdjust(
            new Date(a, i + (t < 0 ? t : s[0] * s[1]), 1)
          );
        return (
          t < 0 &&
            s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())),
          this._isInRange(e, s)
        );
      },
      _isInRange: function (e, t) {
        var a = this._getMinMaxDate(e, "min"),
          i = this._getMinMaxDate(e, "max"),
          s = null,
          r = null,
          n = this._get(e, "yearRange");
        return (
          n &&
            ((e = n.split(":")),
            (n = new Date().getFullYear()),
            (s = parseInt(e[0], 10)),
            (r = parseInt(e[1], 10)),
            e[0].match(/[+\-].*/) && (s += n),
            e[1].match(/[+\-].*/) && (r += n)),
          (!a || t.getTime() >= a.getTime()) &&
            (!i || t.getTime() <= i.getTime()) &&
            (!s || t.getFullYear() >= s) &&
            (!r || t.getFullYear() <= r)
        );
      },
      _getFormatConfig: function (e) {
        var t = this._get(e, "shortYearCutoff");
        return {
          shortYearCutoff: (t =
            "string" != typeof t
              ? t
              : (new Date().getFullYear() % 100) + parseInt(t, 10)),
          dayNamesShort: this._get(e, "dayNamesShort"),
          dayNames: this._get(e, "dayNames"),
          monthNamesShort: this._get(e, "monthNamesShort"),
          monthNames: this._get(e, "monthNames"),
        };
      },
      _formatDate: function (e, t, a, i) {
        t ||
          ((e.currentDay = e.selectedDay),
          (e.currentMonth = e.selectedMonth),
          (e.currentYear = e.selectedYear));
        t = t
          ? "object" == typeof t
            ? t
            : this._daylightSavingAdjust(new Date(i, a, t))
          : this._daylightSavingAdjust(
              new Date(e.currentYear, e.currentMonth, e.currentDay)
            );
        return this.formatDate(
          this._get(e, "dateFormat"),
          t,
          this._getFormatConfig(e)
        );
      },
    }),
    (M.fn.datepicker = function (e) {
      if (!this.length) return this;
      M.datepicker.initialized ||
        (M(document).on("mousedown", M.datepicker._checkExternalClick),
        (M.datepicker.initialized = !0)),
        0 === M("#" + M.datepicker._mainDivId).length &&
          M("body").append(M.datepicker.dpDiv);
      var t = Array.prototype.slice.call(arguments, 1);
      return ("string" == typeof e &&
        ("isDisabled" === e || "getDate" === e || "widget" === e)) ||
        ("option" === e &&
          2 === arguments.length &&
          "string" == typeof arguments[1])
        ? M.datepicker["_" + e + "Datepicker"].apply(
            M.datepicker,
            [this[0]].concat(t)
          )
        : this.each(function () {
            "string" == typeof e
              ? M.datepicker["_" + e + "Datepicker"].apply(
                  M.datepicker,
                  [this].concat(t)
                )
              : M.datepicker._attachDatepicker(this, e);
          });
    }),
    (M.datepicker = new e()),
    (M.datepicker.initialized = !1),
    (M.datepicker.uuid = new Date().getTime()),
    (M.datepicker.version = "1.12.1"),
    M.datepicker
  );
});
