var __gf_timeout_handle;
function gf_apply_rules(e, t, i) {
  var a = 0;
  jQuery(document).trigger("gform_pre_conditional_logic", [e, t, i]);
  for (var r = 0; r < t.length; r++)
    gf_apply_field_rule(e, t[r], i, function () {
      ++a == t.length &&
        (jQuery(document).trigger("gform_post_conditional_logic", [e, t, i]),
        window.gformCalculateTotalPrice && window.gformCalculateTotalPrice(e));
    });
}
function gf_check_field_rule(e, t, i, a) {
  var r = gf_get_field_logic(e, t);
  if (!r) return "show";
  var n = gf_get_field_action(e, r.section);
  return "hide" != n && (n = gf_get_field_action(e, r.field)), n;
}
function gf_get_field_logic(e, t) {
  var i = rgars(window, "gf_form_conditional_logic/" + e);
  if (!i) return !1;
  var a = rgars(i, "logic/" + t);
  if (a) return a;
  var r = rgar(i, "dependents");
  if (!r) return !1;
  for (var n in r) if (-1 !== r[n].indexOf(t)) return rgars(i, "logic/" + n);
  return !1;
}
function gf_apply_field_rule(e, t, i, a) {
  var r = gf_check_field_rule(e, t, i, a);
  gf_do_field_action(e, r, t, i, a);
  var n = window.gf_form_conditional_logic[e].logic[t];
  n.nextButton &&
    gf_do_next_button_action(
      e,
      (r = gf_get_field_action(e, n.nextButton)),
      t,
      i
    );
}
function gf_get_field_action(e, t) {
  if (!t) return "show";
  for (var i = 0, a = 0; a < t.rules.length; a++) {
    gf_is_match(
      e,
      gform.applyFilters(
        "gform_rule_pre_evaluation",
        jQuery.extend({}, t.rules[a]),
        e,
        t
      )
    ) && i++;
  }
  return ("all" == t.logicType && i == t.rules.length) ||
    ("any" == t.logicType && 0 < i)
    ? t.actionType
    : "show" == t.actionType
    ? "hide"
    : "show";
}
function gf_is_match(e, t) {
  var i,
    a = jQuery,
    r = t.fieldId,
    n = gformExtractFieldId(r),
    o = gformExtractInputIndex(r);
  i = a(
    !1 !== o
      ? "#input_{0}_{1}_{2}".format(e, n, o)
      : 'input[id="input_{0}_{1}"], input[id^="input_{0}_{1}_"], input[id^="choice_{0}_{1}_"], select#input_{0}_{1}, textarea#input_{0}_{1}'.format(
          e,
          n
        )
  );
  var _ =
    -1 !== a.inArray(i.attr("type"), ["checkbox", "radio"])
      ? gf_is_match_checkable(i, t, e, n)
      : gf_is_match_default(i.eq(0), t, e, n);
  return gform.applyFilters("gform_is_value_match", _, e, t);
}
function gf_is_match_checkable(e, r, n, o) {
  if ("" === r.value)
    return "is" === r.operator
      ? gf_is_checkable_empty(e)
      : !gf_is_checkable_empty(e);
  var _ = !1;
  return (
    e.each(function () {
      var e = jQuery(this),
        t = gf_get_value(e.val()),
        i = -1 !== jQuery.inArray(r.operator, ["<", ">"]),
        a =
          -1 !==
          jQuery.inArray(r.operator, ["contains", "starts_with", "ends_with"]);
      if (t == r.value || i || a)
        return (
          e.is(":checked")
            ? "gf_other_choice" == t &&
              (t = jQuery("#input_{0}_{1}_other".format(n, o)).val())
            : (t = ""),
          gf_matches_operation(t, r.value, r.operator) ? !(_ = !0) : void 0
        );
    }),
    _
  );
}
function gf_is_checkable_empty(e) {
  var t = !0;
  return (
    e.each(function () {
      jQuery(this).is(":checked") && (t = !1);
    }),
    t
  );
}
function gf_is_match_default(e, t, i, a) {
  for (
    var r = e.val(),
      n = r instanceof Array ? r : [r],
      o = 0,
      _ = Math.max(n.length, 1),
      l = 0;
    l < _;
    l++
  ) {
    var d = !n[l] || 0 <= n[l].indexOf("|"),
      s = gf_get_value(n[l]),
      f = gf_get_field_number_format(t.fieldId, i, "value");
    f && !d && (s = gf_format_number(s, f)),
      gf_matches_operation(s, t.value, t.operator) && o++;
  }
  return "isnot" == t.operator ? o == _ : 0 < o;
}
function gf_format_number(e, t) {
  return (
    (decimalSeparator = "."),
    "currency" == t
      ? (decimalSeparator = gformGetDecimalSeparator("currency"))
      : "decimal_comma" == t
      ? (decimalSeparator = ",")
      : "decimal_dot" == t && (decimalSeparator = "."),
    (e = gformCleanNumber(e, "", "", decimalSeparator)),
    (number = (e = e || 0).toString()),
    number
  );
}
function gf_try_convert_float(e) {
  var t = "decimal_dot";
  if (gformIsNumeric(e, t)) {
    return gformCleanNumber(e, "", "", ".");
  }
  return e;
}
function gf_matches_operation(e, t, i) {
  switch (((e = e ? e.toLowerCase() : ""), (t = t ? t.toLowerCase() : ""), i)) {
    case "is":
      return e == t;
    case "isnot":
      return e != t;
    case ">":
      return (
        (e = gf_try_convert_float(e)),
        (t = gf_try_convert_float(t)),
        !(!gformIsNumber(e) || !gformIsNumber(t)) && t < e
      );
    case "<":
      return (
        (e = gf_try_convert_float(e)),
        (t = gf_try_convert_float(t)),
        !(!gformIsNumber(e) || !gformIsNumber(t)) && e < t
      );
    case "contains":
      return 0 <= e.indexOf(t);
    case "starts_with":
      return 0 == e.indexOf(t);
    case "ends_with":
      var a = e.length - t.length;
      return a < 0 ? !1 : t == e.substring(a);
  }
  return !1;
}
function gf_get_value(e) {
  return e ? (e = e.split("|"))[0] : "";
}
function gf_do_field_action(e, t, i, a, r) {
  for (
    var n = window.gf_form_conditional_logic[e], o = n.dependents[i], _ = 0;
    _ < o.length;
    _++
  ) {
    var l = 0 == i ? "#gform_submit_button_" + e : "#field_" + e + "_" + o[_],
      d = n.defaults[o[_]];
    (do_callback = _ + 1 == o.length ? r : null),
      gf_do_action(t, l, n.animation, d, a, do_callback, e),
      gform.doAction(
        "gform_post_conditional_logic_field_action",
        e,
        t,
        l,
        d,
        a
      );
  }
}
function gf_do_next_button_action(e, t, i, a) {
  gf_do_action(
    t,
    "#gform_next_button_" + e + "_" + i,
    window.gf_form_conditional_logic[e].animation,
    null,
    a,
    null,
    e
  );
}
function gf_do_action(e, t, i, a, r, n, o) {
  var _ = jQuery(t);
  if (
    (_.data("gf-disabled-assessed") ||
      (_.find(":input:disabled").addClass("gf-default-disabled"),
      _.data("gf-disabled-assessed", !0)),
    "show" == e)
  )
    if (
      (_.find("select").each(function () {
        var e = jQuery(this);
        e.attr("tabindex", e.data("tabindex"));
      }),
      i && !r)
    )
      0 < _.length
        ? (_.find(":input:hidden:not(.gf-default-disabled)").removeAttr(
            "disabled"
          ),
          (_.is('input[type="submit"]') || _.hasClass("gform_next_button")) &&
            (_.removeAttr("disabled").css("display", ""),
            "1" == gf_legacy.is_legacy && _.removeClass("screen-reader-text")),
          _.slideDown(n))
        : n && n();
    else {
      var l = _.data("gf_display");
      ("" != l && "none" != l) ||
        (l = "1" === gf_legacy.is_legacy ? "list-item" : "block"),
        _.find(":input:hidden:not(.gf-default-disabled)").removeAttr(
          "disabled"
        ),
        _.is('input[type="submit"]') || _.hasClass("gform_next_button")
          ? (_.removeAttr("disabled").css("display", ""),
            "1" == gf_legacy.is_legacy && _.removeClass("screen-reader-text"))
          : _.css("display", l),
        n && n();
    }
  else {
    var d = _.children().first();
    if (0 < d.length)
      gform.applyFilters(
        "gform_reset_pre_conditional_logic_field_action",
        !0,
        o,
        t,
        a,
        r
      ) &&
        !gformIsHidden(d) &&
        gf_reset_to_default(t, a);
    _.find("select").each(function () {
      var e = jQuery(this);
      e.data("tabindex", e.attr("tabindex")).removeAttr("tabindex");
    }),
      _.data("gf_display") || _.data("gf_display", _.css("display")),
      i && !r
        ? _.is('input[type="submit"]') || _.hasClass("gform_next_button")
          ? (_.attr("disabled", "disabled").hide(),
            "1" === gf_legacy.is_legacy && _.addClass("screen-reader-text"))
          : 0 < _.length && _.is(":visible")
          ? _.slideUp(n)
          : n && n()
        : (_.is('input[type="submit"]') || _.hasClass("gform_next_button")
            ? (_.attr("disabled", "disabled").hide(),
              "1" === gf_legacy.is_legacy && _.addClass("screen-reader-text"))
            : _.css("display", "none"),
          _.find(":input:hidden:not(.gf-default-disabled)").attr(
            "disabled",
            "disabled"
          ),
          n && n());
  }
}
function gf_reset_to_default(e, r) {
  var t = jQuery(e).find(
    ".gfield_date_month input, .gfield_date_day input, .gfield_date_year input, .gfield_date_dropdown_month select, .gfield_date_dropdown_day select, .gfield_date_dropdown_year select"
  );
  if (0 < t.length)
    t.each(function () {
      var e = jQuery(this);
      if (r) {
        var t = "d";
        e.parents().hasClass("gfield_date_month") ||
        e.parents().hasClass("gfield_date_dropdown_month")
          ? (t = "m")
          : (e.parents().hasClass("gfield_date_year") ||
              e.parents().hasClass("gfield_date_dropdown_year")) &&
            (t = "y"),
          (val = r[t]);
      } else val = "";
      "SELECT" == e.prop("tagName") && "" != val && (val = parseInt(val, 10)),
        e.val() != val ? e.val(val).trigger("change") : e.val(val);
    });
  else {
    var i = jQuery(e).find(
        'select, input[type="text"]:not([id*="_shim"]), input[type="number"], input[type="hidden"], input[type="email"], input[type="tel"], input[type="url"], textarea'
      ),
      n = 0;
    if (r && 0 < i.parents(".ginput_list").length && i.length < r.length)
      for (; i.length < r.length; )
        gformAddListItem(i.eq(0), 0),
          (i = jQuery(e).find(
            'select, input[type="text"]:not([id*="_shim"]), input[type="number"], textarea'
          ));
    i.each(function () {
      var e = "",
        t = jQuery(this);
      if (!t.is('[type="hidden"]') || gf_is_hidden_pricing_input(t)) {
        if ("gf_other_choice" == t.prev("input").attr("value"))
          e = t.attr("value");
        else if (jQuery.isArray(r) && !t.is("select[multiple]")) e = r[n];
        else if (jQuery.isPlainObject(r)) {
          if (!(e = r[t.attr("name")]) && t.attr("id")) {
            var i = t.attr("id").split("_").slice(2).join(".");
            e = r[i];
          }
          if (!e && t.attr("name")) {
            i = t.attr("name").split("_")[1];
            e = r[i];
          }
        } else r && (e = r);
        if (
          (t.is("select:not([multiple])") &&
            !e &&
            (e = t.find("option").not(":disabled").eq(0).val()),
          t.val() != e)
        ) {
          if (
            (t.val(e).trigger("change"),
            t.is("select") &&
              t.next().hasClass("chosen-container") &&
              t.trigger("chosen:updated"),
            gf_is_hidden_pricing_input(t))
          ) {
            var a = gf_get_ids_by_html_id(t.parents(".gfield").attr("id"));
            jQuery("#input_" + a[0] + "_" + a[1]).text(
              gformFormatMoney(t.val())
            ),
              t.val(gformFormatMoney(t.val()));
          }
        } else t.val(e);
        n++;
      }
    }),
      jQuery(e)
        .find(
          'input[type="radio"], input[type="checkbox"]:not(".copy_values_activated")'
        )
        .each(function () {
          var e = !!jQuery(this).is(":checked"),
            t = !!r && -1 < jQuery.inArray(jQuery(this).attr("id"), r);
          e != t &&
            ("checkbox" == jQuery(this).attr("type")
              ? jQuery(this).trigger("click")
              : jQuery(this).prop("checked", t).change());
        });
  }
}
function gf_is_hidden_pricing_input(e) {
  return (
    !(!e.attr("id") || 0 !== e.attr("id").indexOf("ginput_base_price")) ||
    ("hidden" === e.attr("type") && e.parents(".gfield_shipping").length)
  );
}
gform.addAction(
  "gform_input_change",
  function (e, t, i) {
    if (window.gf_form_conditional_logic) {
      var a = rgars(
        gf_form_conditional_logic,
        [t, "fields", gformExtractFieldId(i)].join("/")
      );
      a && gf_apply_rules(t, a);
    }
  },
  10
);
