!(function (e) {
  var t = {};
  function a(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, a), (i.l = !0), i.exports;
  }
  (a.m = e),
    (a.c = t),
    (a.d = function (e, t, r) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (a.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          a.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = ""),
    a((a.s = 222));
})({
  222: function (e, t, a) {
    "use strict";
    a.r(t);
    a(223), a(224);
    document.addEventListener("DOMContentLoaded", function () {
      var e = function () {
        document.querySelectorAll(".tb-masonry").forEach(function (e) {
          e.querySelector(".tb-brick") && new window.toolsetCommonEs.Masonry(e);
        });
      };
      e();
      window.jQuery &&
        (jQuery(document).on("js_event_wpv_pagination_completed", e),
        jQuery(document).on(
          "js_event_wpv_parametric_search_form_updated",
          function () {
            setTimeout(e, 300);
          }
        ),
        jQuery(document).on(
          "js_event_wpv_parametric_search_form_updated_without_data",
          function () {
            setTimeout(e, 300);
          }
        ),
        jQuery(document).on(
          "js_event_wpv_parametric_search_started",
          function (e, t) {
            jQuery(".js-wpv-custom-search-loading-overlay").show();
          }
        ),
        jQuery(document).on(
          "js_event_wpv_parametric_search_results_updated",
          function (e, t) {
            jQuery(".js-wpv-custom-search-loading-overlay").hide();
          }
        ));
    });
  },
  223: function (e, t, a) {},
  224: function (e, t) {
    function a(e) {
      return (a =
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
    var r = r || {},
      i = {};
    (window.wpvPaginationAjaxLoaded = {}),
      (window.wpvPaginationAnimationFinished = {}),
      (window.wpvPaginationQueue = {}),
      (jQuery.fn.wpv_clone = function () {
        for (
          var e = jQuery.fn.clone.apply(this, arguments),
            t = this.find("textarea").add(this.filter("textarea")),
            a = e.find("textarea").add(e.filter("textarea")),
            r = this.find("select").add(this.filter("select")),
            i = e.find("select").add(e.filter("select")),
            n = 0,
            o = t.length;
          n < o;
          ++n
        )
          jQuery(a[n]).val(jQuery(t[n]).val());
        for (n = 0, o = r.length; n < o; ++n)
          for (var s = 0, d = r[n].options.length; s < d; ++s)
            !0 === r[n].options[s].selected
              ? (i[n].options[s].selected = !0)
              : (i[n].options[s].selected = !1);
        return e;
      }),
      (r.ViewFrontendUtils = function (e) {
        var t = this;
        (t.datepicker_style_id = "js-toolset-datepicker-style"),
          (t.is_datepicker_style_loaded = !1),
          (t.just_return = function () {}),
          (t.extract_url_query_parameters = function (e) {
            var t = {};
            if ("" == e) return t;
            for (var a = e.split("&"), r = a.length, i = 0; i < r; ++i) {
              var n = a[i].split("=");
              if (2 == n.length) {
                var o = n[0],
                  s = decodeURIComponent(n[1].replace(/\+/g, " "));
                (o = (o = (o = (o = (o = (o = o.replace(
                  /(\[)\d?(\])/,
                  ""
                )).replace("[]", "")).replace(/(%5B)\d?(%5D)/, "")).replace(
                  "%5B%5D",
                  ""
                )).replace(/(%255B)\d?(%255D)/, "")).replace("%255B%255D", "")),
                  t.hasOwnProperty(o) && t[o] != s
                    ? (t[o] += "##URLARRAYVALHACK##" + s)
                    : (t[o] = s);
              }
            }
            return t;
          }),
          (t.get_extra_url_query_parameters_by_form = function (e) {
            var a = t.extract_url_query_parameters(
                window.location.search.substr(1)
              ),
              r = {},
              i = !(
                e.hasClass("js-wpv-dps-enabled") ||
                e.hasClass("js-wpv-ajax-results-enabled") ||
                e.hasClass("js-wpv-ajax-results-submit-enabled")
              );
            for (var n in a) {
              var o = e.find('[name="' + n + '"], [name="' + n + '\\[\\]"]');
              a.hasOwnProperty(n) &&
                !r.hasOwnProperty(n) &&
                (i ||
                  0 === o.length ||
                  o.filter(".js-wpv-extra-url-param").length > 0) &&
                (r[n] = a[n]);
            }
            return r;
          }),
          (t.set_extra_url_query_parameters_by_form = function (a) {
            var r = t.get_extra_url_query_parameters_by_form(a);
            e.each(r, function (t, r) {
              if (
                0 ===
                a.find('[name="' + t + '"], [name="' + t + '\\[\\]"]').length
              ) {
                var i = r.split("##URLARRAYVALHACK##"),
                  n = i.length;
                if (n < 2)
                  e("<input>")
                    .attr({
                      type: "hidden",
                      name: t,
                      value: r,
                      class: "js-wpv-extra-url-param",
                    })
                    .appendTo(a);
                else
                  for (var o = 0; o < n; o++)
                    e("<input>")
                      .attr({
                        type: "hidden",
                        name: t + "[]",
                        value: i[o],
                        class: "js-wpv-extra-url-param",
                      })
                      .appendTo(a);
              }
            });
          }),
          (t.maybe_load_datepicker_style = function () {
            if (!t.is_datepicker_style_loaded)
              if (document.getElementById(t.datepicker_style_id))
                t.is_datepicker_style_loaded = !0;
              else {
                var e = document.getElementsByTagName("head")[0],
                  a = document.createElement("link");
                (a.id = t.datepicker_style_id),
                  (a.rel = "stylesheet"),
                  (a.type = "text/css"),
                  (a.href = wpv_pagination_local.datepicker_style_url),
                  (a.media = "all"),
                  e.appendChild(a),
                  (t.is_datepicker_style_loaded = !0);
              }
          }),
          (t.destroy_frontend_datepicker = function () {
            e(".js-wpv-frontend-datepicker.js-wpv-frontend-datepicker-inited")
              .removeClass("js-wpv-frontend-datepicker-inited")
              .datepicker("destroy");
          }),
          (t.render_frontend_datepicker = function () {
            e(
              ".js-wpv-frontend-datepicker:not(.js-wpv-frontend-datepicker-inited)"
            ).each(function () {
              t.maybe_load_datepicker_style();
              var a = e(this);
              a.addClass("js-wpv-frontend-datepicker-inited").datepicker({
                onSelect: function (t, r) {
                  var i = a.data("param"),
                    n = "date=" + t,
                    o = a.closest("form");
                  (n +=
                    "&date-format=" +
                    e(".js-wpv-date-param-" + i + "-format").val()),
                    (n += "&action=wpv_format_date"),
                    e.post(wpv_pagination_local.front_ajaxurl, n, function (e) {
                      (e = JSON.parse(e)),
                        o.find(".js-wpv-date-param-" + i).html(e.display),
                        o.find(".js-wpv-date-front-end-clear-" + i).show(),
                        o
                          .find(".js-wpv-date-param-" + i + "-value")
                          .val(e.timestamp)
                          .trigger("change");
                    });
                },
                dateFormat: "ddmmyy",
                minDate: wpv_pagination_local.datepicker_min_date,
                maxDate: wpv_pagination_local.datepicker_max_date,
                showOn: "button",
                buttonImage: wpv_pagination_local.calendar_image,
                buttonText: wpv_pagination_local.calendar_text,
                buttonImageOnly: !0,
                changeMonth: !0,
                changeYear: !0,
                yearRange:
                  wpv_pagination_local.datepicker_min_year +
                  ":" +
                  wpv_pagination_local.datepicker_max_year,
              });
            });
          }),
          (t.adjustPrice = function (e, t, a) {
            var r = parseInt(Math.abs(e || 0), 10) + "",
              i = r.length > 3 ? r.length % 3 : 0,
              n =
                (i ? r.substr(0, i) + a : "") +
                r.substr(i).replace(/(\d{3})(?=\d)/g, "$1" + a);
            return t.replace("%v", n);
          }),
          (t.adjustPriceFilterAmount = function (e, a, r) {
            var i = e.data("currency"),
              n = e.find(".js-wpv-range-slider-amount");
            n
              .find("span.js-wpv-range-slider-amount-label-from")
              .html(t.adjustPrice(a, i.format, i.thousand_separator)),
              n
                .find("span.js-wpv-range-slider-amount-label-to")
                .html(t.adjustPrice(r, i.format, i.thousand_separator));
          }),
          (t.renderPriceFilter = function () {
            e(
              ".js-wpv-range-slider:not(.js-wpv-frontend-slider-range-inited)"
            ).each(function () {
              var a = e(this),
                r = a.closest(".js-wpv-range-slider-wrapper"),
                i = r.find(".js-wpv-range-slider-amount-min"),
                n = r.find(".js-wpv-range-slider-amount-max"),
                o = r.find(".js-wpv-range-slider-amount"),
                s = i.data("min"),
                d = n.data("max"),
                p = o.data("step") || 1,
                l = i.val(),
                u = n.val();
              a
                .find(
                  "input.js-wpv-range-slider-amount-min, input.js-wpv-range-slider-amount-max"
                )
                .hide(),
                r
                  .find(
                    ".js-wpv-range-slider, .js-wpv-range-slider-amount-label"
                  )
                  .show(),
                (s = parseInt(Math.abs(s || 0), 10)),
                (d = parseInt(Math.abs(d || 0), 10)),
                (l = parseInt(Math.abs(l || 0), 10)),
                (u = parseInt(Math.abs(u || 0), 10)),
                a.addClass("js-wpv-frontend-slider-range-inited").slider({
                  range: !0,
                  animate: !0,
                  min: s,
                  max: d,
                  step: parseInt(Math.abs(p || 10), 10),
                  values: [l, u],
                  create: function () {
                    i.val(l),
                      n.val(u),
                      t.adjustPriceFilterAmount(r, l, u),
                      e(document.body).trigger("wpv_range_slider_create", [
                        l,
                        u,
                      ]);
                  },
                  slide: function (a, i) {
                    t.adjustPriceFilterAmount(r, i.values[0], i.values[1]),
                      e(document.body).trigger("wpv_range_slider_slide", [
                        i.values[0],
                        i.values[1],
                      ]);
                  },
                  change: _.debounce(function (t, a) {
                    i.val(a.values[0]),
                      n.val(a.values[1]),
                      e(document.body).trigger("wpv_range_slider_change", [
                        a.values[0],
                        a.values[1],
                      ]),
                      i.trigger("change");
                  }, 700),
                });
            });
          }),
          (t.clone_form = function (t, a) {
            var r = t.wpv_clone();
            a.each(function () {
              e(this).replaceWith(r);
            });
          }),
          (t.render_frontend_media_shortcodes = function (t) {
            t.find(".wp-audio-shortcode.mejs-container").each(function () {
              var t = e(this),
                a = t.find("audio.wp-audio-shortcode");
              t.replaceWith(a);
            }),
              t.find(".wp-audio-shortcode").each(function () {
                e(this).mediaelementplayer();
              }),
              t.find(".wp-video-shortcode.mejs-container").each(function () {
                var t = e(this),
                  a = t.find("video.wp-video-shortcode[id$=_from_mejs]");
                t.replaceWith(a);
              }),
              t.find(".wp-video-shortcode").each(function () {
                e(this).mediaelementplayer();
              }),
              t.find(".wp-playlist").each(function () {
                e(this);
                return new WPPlaylistView({ el: this });
              });
          }),
          (t.get_form_element_type = function (e) {
            return e.length > 0
              ? "INPUT" == e[0].tagName
                ? e[0].type.toLowerCase()
                : e[0].tagName.toLowerCase()
              : "";
          }),
          (t.get_hidden_item_width = function (e) {
            var t = e
                .clone()
                .css({
                  display: "block",
                  visibility: "visible",
                  position: "absolute",
                  "z-index": "-99999",
                  left: "99999999px",
                  top: "0px",
                  "white-space": "nowrap",
                })
                .appendTo("body"),
              a = t.outerWidth();
            return t.remove(), a;
          }),
          (t.get_updated_query_results = function (a, i, n, o) {
            var s,
              d,
              p = {},
              l = {},
              u = {},
              v = wpv_pagination_local.wpmlLang,
              c = n.data("parametric");
            switch (
              ((s = r.view_sorting.get_sort_data(a, n)),
              c.environment.current_post_id > 0 &&
                (l.wpv_aux_current_post_id = c.environment.current_post_id),
              c.environment.parent_post_id > 0 &&
                (l.wpv_aux_parent_post_id = c.environment.parent_post_id),
              c.environment.parent_term_id > 0 &&
                (l.wpv_aux_parent_term_id = c.environment.parent_term_id),
              c.environment.parent_user_id > 0 &&
                (l.wpv_aux_parent_user_id = c.environment.parent_user_id),
              (l.archive = c.environment.archive),
              n.find(".js-wpv-post-relationship-update").length &&
                (u.dps_pr = n
                  .find(".js-wpv-post-relationship-update")
                  .serializeArray()),
              (n.hasClass("js-wpv-dps-enabled") ||
                n.hasClass("js-wpv-ajax-results-enabled") ||
                n.hasClass("js-wpv-ajax-results-submit-enabled")) &&
                (u.dps_general = n
                  .find(
                    ".js-wpv-filter-trigger, .js-wpv-filter-trigger-delayed"
                  )
                  .serializeArray()),
              (attributes = c.attributes),
              (d = t.get_extra_url_query_parameters_by_form(n, !0)),
              (p = {
                view_number: a,
                page: i,
                sort: s,
                attributes: attributes,
                environment: l,
                search: u,
                extra: d,
                expect: o,
              }),
              v && (p.lang = v),
              c.query)
            ) {
              case "archive":
                (p.action = "wpv_get_archive_query_results"), (p.loop = c.loop);
                break;
              default:
                (p.action = "wpv_get_view_query_results"),
                  (p.id = c.id),
                  n.attr("data-targetid")
                    ? (p.target_id = n.data("targetid"))
                    : e(".js-wpv-form-only.js-wpv-filter-form-" + a).length >
                        0 &&
                      (p.target_id = e(
                        ".js-wpv-form-only.js-wpv-filter-form-" + a
                      ).data("targetid")),
                  (p.wpv_view_widget_id = c.widget_id);
            }
            return e
              .ajax({
                type: "POST",
                dataType: "json",
                url: wpv_pagination_local.front_ajaxurl,
                data: p,
              })
              .done(function (t) {
                t.success &&
                  _.has(t.data, "playlist_templates") &&
                  0 === e("#tmpl-wp-playlist-current-item").length &&
                  e("body").append(t.data.playlist_templates);
              });
          }),
          (t.updateUrlQuery = function (e, t, a) {
            a || (a = window.location.href);
            var r,
              i = new RegExp("([?&])" + e + "=.*?(&|#|$)(.*)", "gi");
            if (i.test(a))
              return null != t
                ? a.replace(i, "$1" + e + "=" + t + "$2$3")
                : ((r = a.split("#")),
                  (a = r[0].replace(i, "$1$3").replace(/(&|\?)$/, "")),
                  void 0 !== r[1] && null !== r[1] && (a += "#" + r[1]),
                  a);
            if (null != t) {
              var n = -1 !== a.indexOf("?") ? "&" : "?";
              return (
                (r = a.split("#")),
                (a = r[0] + n + e + "=" + t),
                void 0 !== r[1] && null !== r[1] && (a += "#" + r[1]),
                a
              );
            }
            return a;
          }),
          e(window).on(
            "resize",
            _.debounce(function () {
              e(".js-wpv-layout-responsive")
                .each(function () {
                  e(this).css("width", "");
                })
                .promise()
                .done(function () {
                  e(document).trigger(
                    "js_event_wpv_layout_responsive_resize_completed"
                  );
                });
            }, wpv_pagination_local.resize_debounce_tolerance)
          ),
          (t.init = function () {
            t.render_frontend_datepicker(), t.renderPriceFilter();
          }),
          t.init();
      }),
      (r.ViewSorting = function (e) {
        var t = this;
        (t.get_sort_data = function (e, t) {
          var a = {},
            i = t.data("parametric");
          if (
            ((a.wpv_orderby = i.sort.orderby),
            (a.wpv_order = i.sort.order),
            (a.wpv_sort_orderby = i.sort.orderby),
            (a.wpv_sort_order = i.sort.order),
            (a.wpv_sort_orderby_as = i.sort.orderby_as),
            (a.wpv_sort_orderby_second = i.sort.orderby_second),
            (a.wpv_sort_order_second = i.sort.order_second),
            t.find(".js-wpv-sort-control-orderby").length > 0)
          )
            switch (
              r.view_frontend_utils.get_form_element_type(
                t.find(".js-wpv-sort-control-orderby")
              )
            ) {
              case "select":
                (a.wpv_sort_orderby = t
                  .find(".js-wpv-sort-control-orderby")
                  .val()),
                  t
                    .find(".js-wpv-sort-control-orderby option:selected")
                    .data("orderbyas")
                    ? (a.wpv_sort_orderby_as = t
                        .find(".js-wpv-sort-control-orderby option:selected")
                        .data("orderbyas"))
                    : a.wpv_sort_orderby != i.sort.orderby &&
                      (a.wpv_sort_orderby_as = "");
                break;
              case "radio":
                (a.wpv_sort_orderby = t
                  .find(".js-wpv-sort-control-orderby:checked")
                  .val()),
                  t
                    .find(".js-wpv-sort-control-orderby:checked")
                    .data("orderbyas")
                    ? (a.wpv_sort_orderby_as = t
                        .find(".js-wpv-sort-control-orderby:checked")
                        .data("orderbyas"))
                    : a.wpv_sort_orderby != i.sort.orderby &&
                      (a.wpv_sort_orderby_as = "");
                break;
              case "text":
              case "hidden":
                (a.wpv_sort_orderby = t
                  .find(".js-wpv-sort-control-orderby")
                  .val()),
                  t.find(".js-wpv-sort-control-orderby").data("orderbyas")
                    ? (a.wpv_sort_orderby_as = t
                        .find(".js-wpv-sort-control-orderby")
                        .data("orderbyas"))
                    : a.wpv_sort_orderby != i.sort.orderby &&
                      (a.wpv_sort_orderby_as = "");
            }
          if (t.find(".js-wpv-sort-control-order").length > 0)
            switch (
              r.view_frontend_utils.get_form_element_type(
                t.find(".js-wpv-sort-control-order")
              )
            ) {
              case "select":
                a.wpv_sort_order = t.find(".js-wpv-sort-control-order").val();
                break;
              case "radio":
                a.wpv_sort_order = t
                  .find(".js-wpv-sort-control-order:checked")
                  .val();
                break;
              case "text":
              case "hidden":
                a.wpv_sort_order = t.find(".js-wpv-sort-control-order").val();
            }
          if (
            "" === a.wpv_sort_order &&
            t.find(".js-wpv-sort-control-orderby").length > 0
          )
            switch (
              r.view_frontend_utils.get_form_element_type(
                t.find(".js-wpv-sort-control-orderby")
              )
            ) {
              case "select":
                a.wpv_sort_order = t
                  .find(".js-wpv-sort-control-orderby option:selected")
                  .data("forceorder");
                break;
              case "radio":
                a.wpv_sort_order = t
                  .find(".js-wpv-sort-control-orderby:checked")
                  .data("forceorder");
                break;
              case "text":
              case "hidden":
                a.wpv_sort_order = t
                  .find(".js-wpv-sort-control-orderby")
                  .data("forceorder");
            }
          return a;
        }),
          (t.set_sort_data = function (e, a) {
            return (
              t
                .set_sort_data_inside_form(e, a)
                .set_sort_data_outside_form(e, a),
              t.set_product_filter_by_price_fields(e, a),
              t
            );
          }),
          (t.set_sort_data_for_pagination = function (e) {
            var a = {},
              i = e.data("parametric");
            if (e.find(".js-wpv-sort-control-orderby").length > 0)
              switch (
                r.view_frontend_utils.get_form_element_type(
                  e.find(".js-wpv-sort-control-orderby")
                )
              ) {
                case "select":
                  (a.orderby = e.find(".js-wpv-sort-control-orderby").val()),
                    e
                      .find(".js-wpv-sort-control-orderby option:selected")
                      .data("orderbyas")
                      ? (a.orderby_as = e
                          .find(".js-wpv-sort-control-orderby option:selected")
                          .data("orderbyas"))
                      : a.orderby != i.sort.orderby && (a.orderby_as = ""),
                    e
                      .find(".js-wpv-sort-control-orderby option:selected")
                      .data("forceorder") &&
                      (a.order = e
                        .find(".js-wpv-sort-control-orderby option:selected")
                        .data("forceorder"));
                  break;
                case "radio":
                  (a.orderby = e
                    .find(".js-wpv-sort-control-orderby:checked")
                    .val()),
                    e
                      .find(".js-wpv-sort-control-orderby:checked")
                      .data("orderbyas")
                      ? (a.orderby_as = e
                          .find(".js-wpv-sort-control-orderby:checked")
                          .data("orderbyas"))
                      : a.orderby != i.sort.orderby && (a.orderby_as = ""),
                    e
                      .find(".js-wpv-sort-control-orderby:checked")
                      .data("forceorder") &&
                      (a.order = e
                        .find(".js-wpv-sort-control-orderby:checked")
                        .data("forceorder"));
                  break;
                case "text":
                case "hidden":
                  (a.orderby = e.find(".js-wpv-sort-control-orderby").val()),
                    e.find(".js-wpv-sort-control-orderby").data("orderbyas")
                      ? (a.orderby_as = e
                          .find(".js-wpv-sort-control-orderby")
                          .data("orderbyas"))
                      : a.orderby != i.sort.orderby && (a.orderby_as = ""),
                    e.find(".js-wpv-sort-control-orderby").data("forceorder") &&
                      (a.order = e
                        .find(".js-wpv-sort-control-orderby")
                        .data("forceorder"));
              }
            t.set_sort_data(e, a);
          }),
          (t.set_sort_data_orderby_select = function (a, r) {
            return (
              0 == a.find('option[value="' + r.orderby + '"]').length &&
                a.append(e("<option>", { value: r.orderby, text: r.orderby })),
              a.val(r.orderby),
              _.has(r, "orderby_as") &&
                a
                  .find("option:selected")
                  .data("orderbyas", r.orderby_as)
                  .attr("data-orderbyas", r.orderby_as),
              t
            );
          }),
          (t.set_sort_data_orderby_text = function (e, a) {
            return (
              e.val(a.orderby),
              _.has(a, "orderby_as") &&
                e
                  .data("orderbyas", a.orderby_as)
                  .attr("data-orderbyas", a.orderby_as),
              t
            );
          }),
          (t.set_sort_data_orderby_radio = function (a, r, i) {
            return (
              0 == a.filter('[value="' + r.orderby + '"]').length &&
                i.append(
                  e("<input>", {
                    type: "radio",
                    class: "js-wpv-sort-control-orderby",
                    name: "wpv_sort_orderby",
                    value: r.orderby,
                  })
                ),
              i
                .find('.js-wpv-sort-control-orderby[value="' + r.orderby + '"]')
                .prop("checked", !0),
              _.has(r, "orderby_as") &&
                i
                  .find(".js-wpv-sort-control-orderby:checked")
                  .data("orderbyas", r.orderby_as)
                  .attr("data-orderbyas", r.orderby_as),
              t
            );
          }),
          (t.maybe_set_sort_data_orderby_radio = function (e, a) {
            return (
              0 == e.filter('[value="' + a.orderby + '"]').length
                ? e.prop("checked", !1)
                : (e.filter('[value="' + a.orderby + '"]').prop("checked", !0),
                  _.has(a, "orderby_as") &&
                    e
                      .filter(":checked")
                      .data("orderbyas", a.orderby_as)
                      .attr("data-orderbyas", a.orderby_as)),
              t
            );
          }),
          (t.set_sort_data_orderby_list = function (e, a) {
            var r = e.find(
              '.js-wpv-sort-list-orderby[data-orderby="' + a.orderby + '"]'
            );
            return (
              0 == r.length ||
                r
                  .closest(".js-wpv-sort-list-item")
                  .hasClass("wpv-sort-list-current") ||
                (e
                  .find("span.wpv-sort-list-current")
                  .removeClass("wpv-sort-list-current"),
                e.find(".js-wpv-sort-list-item").css({ display: "none" }),
                r
                  .closest(".js-wpv-sort-list-item")
                  .addClass("wpv-sort-list-current")
                  .css({ display: "block" }),
                e
                  .find(".js-wpv-sort-list")
                  .prepend(r.closest(".js-wpv-sort-list-item"))),
              t
            );
          }),
          (t.set_sort_data_order_select = function (a, r) {
            if (
              (0 == a.find('option[value="' + r.order + '"]').length &&
                a.append(e("<option>", { value: r.order, text: r.order })),
              a.val(r.order),
              _.has(r, "orderby") && void 0 !== a.data("labels"))
            ) {
              var i = a.data("labels"),
                n = {},
                o = r.orderby.toLowerCase();
              _.has(i, o) ? (n = i[o]) : _.has(i, "default") && (n = i.default),
                _.has(n, "asc") && a.find('option[value="asc"]').html(n.asc),
                _.has(n, "desc") && a.find('option[value="desc"]').html(n.desc);
            }
            return t;
          }),
          (t.set_sort_data_order_text = function (e, a) {
            return e.val(a.order), t;
          }),
          (t.set_sort_data_order_radio = function (a, r, i) {
            if (
              (0 == a.filter('[value="' + r.order + '"]').length &&
                i.append(
                  e("<input>", {
                    type: "radio",
                    class: "js-wpv-sort-control-order",
                    name: "wpv_sort_order",
                    value: r.order,
                  })
                ),
              i
                .find('.js-wpv-sort-control-order[value="' + r.order + '"]')
                .prop("checked", !0),
              _.has(r, "orderby") && void 0 !== a.data("labels"))
            ) {
              var n = a.data("labels"),
                o = {},
                s = r.orderby.toLowerCase(),
                d = null,
                p = null;
              _.has(n, s) ? (o = n[s]) : _.has(n, "default") && (o = n.default),
                _.has(o, "asc") &&
                  ((d = a.filter('[value="asc"]').closest("label")),
                  (p = a.filter('[value="asc"]').detach()),
                  d.html(o.asc).prepend(p)),
                _.has(o, "desc") &&
                  ((d = a.filter('[value="desc"]').closest("label")),
                  (p = a.filter('[value="desc"]').detach()),
                  d.html(o.desc).prepend(p));
            }
            return t;
          }),
          (t.maybe_set_sort_data_order_radio = function (e, a) {
            return (
              0 == e.filter('[value="' + a.order + '"]').length
                ? e.prop("checked", !0)
                : e.filter('[value="' + a.order + '"]').prop("checked", !0),
              t
            );
          }),
          (t.set_sort_data_order_list = function (e, a) {
            var r = e.find(
              '.js-wpv-sort-list-order[data-order="' + a.order + '"]'
            );
            if (
              (0 == r.length ||
                r
                  .closest(".js-wpv-sort-list-item")
                  .hasClass("wpv-sort-list-current") ||
                (e
                  .find("span.wpv-sort-list-current")
                  .removeClass("wpv-sort-list-current"),
                e.find(".js-wpv-sort-list-item").css({ display: "none" }),
                r
                  .closest(".js-wpv-sort-list-item")
                  .addClass("wpv-sort-list-current")
                  .css({ display: "block" }),
                e
                  .find(".js-wpv-sort-list")
                  .prepend(r.closest(".js-wpv-sort-list-item"))),
              _.has(a, "orderby") && void 0 !== e.data("labels"))
            ) {
              var i = e.data("labels"),
                n = {},
                o = a.orderby.toLowerCase(),
                s = !1;
              _.has(i, o) ? (n = i[o]) : _.has(i, "default") && (n = i.default),
                _.has(n, "asc") &&
                  (e
                    .find('.js-wpv-sort-list-order[data-order="asc"] span')
                    .html(n.asc),
                  (s = !0)),
                _.has(n, "desc") &&
                  (e
                    .find('.js-wpv-sort-list-order[data-order="desc"] span')
                    .html(n.desc),
                  (s = !0)),
                s && t.adjust_sort_list_width(e);
            }
            return t;
          }),
          (t.set_product_filter_by_price_fields = function (a, i) {
            if (_.has(i, "orderby"))
              if (a.find(".js-wpv-sort-control-product-orderby").length > 0) {
                var n = a.find(".js-wpv-sort-control-product-orderby");
                switch (r.view_frontend_utils.get_form_element_type(n)) {
                  case "select":
                    t.set_sort_data_orderby_select(n, i);
                    break;
                  case "text":
                  case "hidden":
                    t.set_sort_data_orderby_text(n, i);
                    break;
                  case "radio":
                    t.set_sort_data_orderby_radio(n, i, a);
                }
              } else {
                var o = {
                  type: "hidden",
                  class: "js-wpv-sort-control-product-orderby",
                  name: "wpv_orderby",
                  value: i.orderby,
                };
                e("<input>").attr(o).appendTo(a);
              }
            if (_.has(i, "order"))
              if (a.find(".js-wpv-sort-control-product-order").length > 0) {
                var s = a.find(".js-wpv-sort-control-product-order");
                switch (r.view_frontend_utils.get_form_element_type(s)) {
                  case "select":
                    t.set_sort_data_order_select(s, i);
                    break;
                  case "text":
                  case "hidden":
                    t.set_sort_data_order_text(s, i);
                    break;
                  case "radio":
                    t.set_sort_data_order_radio(s, i, a);
                }
              } else
                e("<input>")
                  .attr({
                    type: "hidden",
                    class: "js-wpv-sort-control-product-order",
                    name: "wpv_order",
                    value: i.order,
                  })
                  .appendTo(a);
          }),
          (t.set_sort_data_inside_form = function (a, i) {
            if (_.has(i, "orderby")) {
              if (a.find(".js-wpv-sort-control-orderby").length > 0) {
                var n = a.find(".js-wpv-sort-control-orderby");
                switch (r.view_frontend_utils.get_form_element_type(n)) {
                  case "select":
                    t.set_sort_data_orderby_select(n, i);
                    break;
                  case "text":
                  case "hidden":
                    t.set_sort_data_orderby_text(n, i);
                    break;
                  case "radio":
                    t.set_sort_data_orderby_radio(n, i, a);
                }
              } else {
                var o = {
                  type: "hidden",
                  class: "js-wpv-sort-control-orderby",
                  name: "wpv_sort_orderby",
                  value: i.orderby,
                };
                _.has(i, "orderby_as") && (o["data-orderbyas"] = i.orderby_as),
                  _.has(i, "forceorder") &&
                    (o["data-forceorder"] = i.forceorder),
                  e("<input>").attr(o).appendTo(a);
              }
              if (
                (_.has(i, "orderby_as") &&
                  (a.find(".js-wpv-sort-control-orderby-as").length > 0 &&
                    a.find(".js-wpv-sort-control-orderby-as").remove(),
                  e("<input>")
                    .attr({
                      type: "hidden",
                      class: "js-wpv-sort-control-orderby-as",
                      name: "wpv_sort_orderby_as",
                      value: i.orderby_as,
                    })
                    .appendTo(a)),
                a.find(".js-wpv-sort-list-orderby-dropdown").length > 0)
              ) {
                var s = a.find(".js-wpv-sort-list-orderby-dropdown");
                t.set_sort_data_orderby_list(s, i);
              }
            }
            if (_.has(i, "order")) {
              if (a.find(".js-wpv-sort-control-order").length > 0) {
                var d = a.find(".js-wpv-sort-control-order");
                switch (r.view_frontend_utils.get_form_element_type(d)) {
                  case "select":
                    t.set_sort_data_order_select(d, i);
                    break;
                  case "text":
                  case "hidden":
                    t.set_sort_data_order_text(d, i);
                    break;
                  case "radio":
                    t.set_sort_data_order_radio(d, i, a);
                }
              } else
                e("<input>")
                  .attr({
                    type: "hidden",
                    class: "js-wpv-sort-control-order",
                    name: "wpv_sort_order",
                    value: i.order,
                  })
                  .appendTo(a);
              if (a.find(".js-wpv-sort-list-order-dropdown").length > 0) {
                var p = a.find(".js-wpv-sort-list-order-dropdown");
                t.set_sort_data_order_list(p, i);
              }
            }
            return t;
          }),
          (t.set_sort_data_outside_form = function (a, i) {
            var n = a.data("viewnumber");
            if (_.has(i, "orderby")) {
              var o = e(
                  '.js-wpv-sort-control-orderby[data-viewnumber="' +
                    n +
                    '"]:not(.js-wpv-filter-form .js-wpv-sort-control-orderby)'
                ),
                s = e(
                  '.js-wpv-sort-list-orderby-dropdown[data-viewnumber="' +
                    n +
                    '"]:not(.js-wpv-filter-form .js-wpv-sort-list-orderby-dropdown)'
                );
              if (o.length > 0)
                switch (r.view_frontend_utils.get_form_element_type(o)) {
                  case "select":
                    t.set_sort_data_orderby_select(o, i);
                    break;
                  case "text":
                  case "hidden":
                    t.set_sort_data_orderby_text(o, i);
                    break;
                  case "radio":
                    t.maybe_set_sort_data_orderby_radio(o, i);
                }
              s.length > 0 && t.set_sort_data_orderby_list(s, i);
            }
            if (_.has(i, "order")) {
              var d = e(
                  '.js-wpv-sort-control-order[data-viewnumber="' +
                    n +
                    '"]:not(.js-wpv-filter-form .js-wpv-sort-control-order)'
                ),
                p = e(
                  '.js-wpv-sort-list-order-dropdown[data-viewnumber="' +
                    n +
                    '"]:not(.js-wpv-filter-form .js-wpv-sort-list-order-dropdown)'
                );
              if (d.length > 0)
                switch (r.view_frontend_utils.get_form_element_type(d)) {
                  case "select":
                    t.set_sort_data_order_select(d, i);
                    break;
                  case "text":
                  case "hidden":
                    t.set_sort_data_order_text(d, i);
                    break;
                  case "radio":
                    t.maybe_set_sort_data_order_radio(d, i);
                }
              p.length > 0 && t.set_sort_data_order_list(p, i);
            }
            return t;
          }),
          e(document).on("click", ".js-wpv-sort-trigger", function (a) {
            a.preventDefault();
            var i,
              n = e(this),
              o = n.data("viewnumber"),
              s = e(".js-wpv-filter-form-" + o),
              d = {
                orderby: void 0 !== n.data("orderby") ? n.data("orderby") : "",
                order: void 0 !== n.data("order") ? n.data("order") : "",
                orderby_as:
                  void 0 !== n.data("orderbyas") ? n.data("orderbyas") : "",
              };
            if (
              (s.each(function () {
                (i = e(this)),
                  t.set_sort_data(i, d),
                  r.view_frontend_utils.set_extra_url_query_parameters_by_form(
                    i
                  );
              }),
              n.hasClass("js-wpv-column-header-click") ||
                (!s.hasClass("js-wpv-ajax-results-enabled") &&
                  !s.hasClass("js-wpv-ajax-results-submit-enabled")))
            )
              s.submit();
            else {
              var _ = {
                view_unique_id: o,
                form: s,
                force_results_update: s.hasClass(
                  "js-wpv-ajax-results-submit-enabled"
                ),
              };
              (_ =
                r.view_parametric_search.extend_wpv_parametric_search_triggered_data(
                  _
                )),
                e(document).trigger(
                  "js_event_wpv_parametric_search_triggered",
                  [_]
                );
            }
          }),
          e(document).on(
            "change",
            "select.js-wpv-sort-control-orderby",
            function () {
              var a = e(this),
                n = a.find(":selected"),
                o = {},
                s = a.data("viewnumber"),
                d = e(".js-wpv-filter-form-" + s),
                _ = { view_unique_id: s, form: d };
              (o.orderby = a.val()),
                void 0 !== n.data("orderbyas") &&
                  (o.orderby_as = n.data("orderbyas")),
                void 0 !== n.data("forceorder") &&
                  "" !== n.data("forceorder") &&
                  (o.order = n.data("forceorder")),
                t.set_sort_data(d, o),
                (i[s] = !0),
                a.hasClass("js-wpv-sort-control-force-apply-reload")
                  ? d.submit()
                  : ((_ =
                      r.view_parametric_search.extend_wpv_parametric_search_triggered_data(
                        _
                      )),
                    a.hasClass("js-wpv-sort-control-force-apply-ajax") &&
                      (_.update_results = !0),
                    e(document).trigger(
                      "js_event_wpv_parametric_search_triggered",
                      [_]
                    ));
            }
          ),
          e(document).on(
            "change",
            "input.js-wpv-sort-control-orderby",
            function () {
              var a = {},
                n = e(this).data("viewnumber"),
                o = e(
                  '.js-wpv-sort-control-orderby[data-viewnumber="' +
                    n +
                    '"]:checked'
                ),
                s = e(".js-wpv-filter-form-" + n),
                d = { view_unique_id: n, form: s };
              (a.orderby = o.val()),
                void 0 !== o.data("orderbyas") &&
                  (a.orderby_as = o.data("orderbyas")),
                void 0 !== o.data("forceorder") &&
                  "" !== o.data("forceorder") &&
                  (a.order = o.data("forceorder")),
                t.set_sort_data(s, a),
                (i[n] = !0),
                (d =
                  r.view_parametric_search.extend_wpv_parametric_search_triggered_data(
                    d
                  )),
                e(document).trigger(
                  "js_event_wpv_parametric_search_triggered",
                  [d]
                );
            }
          ),
          e(document).on("click", ".js-wpv-sort-list-orderby", function (a) {
            a.preventDefault();
            var n = e(this),
              o = n.data("orderby"),
              s = n.data("orderbyas"),
              d = n.data("forceorder"),
              _ = n.closest(".wpv-sort-list"),
              p = n.closest("span.js-wpv-sort-list-item"),
              l = n.data("viewnumber"),
              u = e(".js-wpv-filter-form-" + l),
              v = { orderby: o, orderby_as: s },
              c = { view_unique_id: l, form: u };
            p.hasClass("wpv-sort-list-current") ||
              (_.find("span.wpv-sort-list-current").removeClass(
                "wpv-sort-list-current"
              ),
              _.find(".js-wpv-sort-list-item").css({ display: "none" }),
              p.addClass("wpv-sort-list-current").css({ display: "block" }),
              _.prepend(p),
              "" !== d && (v.order = d),
              t.set_sort_data(u, v),
              (i[l] = !0),
              n.hasClass("js-wpv-sort-control-force-apply-reload")
                ? u.submit()
                : ((c =
                    r.view_parametric_search.extend_wpv_parametric_search_triggered_data(
                      c
                    )),
                  n.hasClass("js-wpv-sort-control-force-apply-ajax") &&
                    (c.update_results = !0),
                  e(document).trigger(
                    "js_event_wpv_parametric_search_triggered",
                    [c]
                  )));
          }),
          e(document).on(
            "change",
            "select.js-wpv-sort-control-order",
            function () {
              var a = e(this),
                n = {},
                o = a.data("viewnumber"),
                s = e(".js-wpv-filter-form-" + o),
                d = { view_unique_id: o, form: s };
              (n.order = a.val()),
                t.set_sort_data(s, n),
                (i[o] = !0),
                a.hasClass("js-wpv-sort-control-force-apply-reload")
                  ? s.submit()
                  : ((d =
                      r.view_parametric_search.extend_wpv_parametric_search_triggered_data(
                        d
                      )),
                    a.hasClass("js-wpv-sort-control-force-apply-ajax") &&
                      (d.update_results = !0),
                    e(document).trigger(
                      "js_event_wpv_parametric_search_triggered",
                      [d]
                    ));
            }
          ),
          e(document).on(
            "change",
            "input.js-wpv-sort-control-order",
            function () {
              var a = {},
                n = e(this).data("viewnumber"),
                o = e(
                  '.js-wpv-sort-control-order[data-viewnumber="' +
                    n +
                    '"]:checked'
                ),
                s = e(".js-wpv-filter-form-" + n),
                d = { view_unique_id: n, form: s };
              (a.order = o.val()),
                t.set_sort_data(s, a),
                (i[n] = !0),
                (d =
                  r.view_parametric_search.extend_wpv_parametric_search_triggered_data(
                    d
                  )),
                e(document).trigger(
                  "js_event_wpv_parametric_search_triggered",
                  [d]
                );
            }
          ),
          e(document).on("click", ".js-wpv-sort-list-order", function (a) {
            a.preventDefault();
            var n = e(this),
              o = n.data("order"),
              s = n.closest(".wpv-sort-list"),
              d = n.closest("span.js-wpv-sort-list-item"),
              _ = n.data("viewnumber"),
              p = e(".js-wpv-filter-form-" + _),
              l = { order: o },
              u = { view_unique_id: _, form: p };
            d.hasClass("wpv-sort-list-current") ||
              (s
                .find("span.wpv-sort-list-current")
                .removeClass("wpv-sort-list-current"),
              s.find(".js-wpv-sort-list-item").css({ display: "none" }),
              d.addClass("wpv-sort-list-current").css({ display: "block" }),
              s.prepend(d),
              t.set_sort_data(p, l),
              (i[_] = !0),
              n.hasClass("js-wpv-sort-control-force-apply-reload")
                ? p.submit()
                : ((u =
                    r.view_parametric_search.extend_wpv_parametric_search_triggered_data(
                      u
                    )),
                  n.hasClass("js-wpv-sort-control-force-apply-ajax") &&
                    (u.update_results = !0),
                  e(document).trigger(
                    "js_event_wpv_parametric_search_triggered",
                    [u]
                  )));
          }),
          e(document).on(
            "mouseenter",
            ".js-wpv-sort-list-dropdown",
            function () {
              e(this).find(".js-wpv-sort-list-item").css({ display: "block" });
            }
          ),
          e(document).on(
            "mouseleave",
            ".js-wpv-sort-list-dropdown",
            function () {
              e(this)
                .find(".js-wpv-sort-list-item:not(.wpv-sort-list-current)")
                .css({ display: "none" });
            }
          ),
          (t.init_sort_list_width = function (e) {}),
          (t.adjust_sort_list_width = function (t) {
            var a = t,
              r = 0,
              i = a.find(".js-wpv-sort-list-item");
            a.find(".wpv-sort-list-anchor span").each(function () {
              var t = e(this).text().length;
              t > r && (r = t);
            }),
              (r = r < 10 ? r + 1 : r),
              a.css({ width: r + "em" }),
              i.css({ width: r + "em" });
          }),
          (t.maybe_init_sort_data = function (a) {
            a.find(".js-wpv-sort-list-dropdown").each(function () {
              var a = e(this);
              switch (
                a.hasClass("wpv-sort-list-orderby-dropdown")
                  ? "orderby"
                  : "order"
              ) {
                case "orderby":
                  var r = (o = a.find(
                      ".wpv-sort-list-current .js-wpv-sort-list-orderby"
                    )).data("viewnumber"),
                    i = e(".js-wpv-filter-form-" + r),
                    n = {
                      orderby: o.data("orderby"),
                      orderby_as: o.data("orderbyas"),
                      forceorder: o.data("forceorder"),
                    };
                  t.set_sort_data(i, n);
                  break;
                case "order":
                  var o;
                  (r = (o = a.find(
                    ".wpv-sort-list-current .js-wpv-sort-list-order"
                  )).data("viewnumber")),
                    (i = e(".js-wpv-filter-form-" + r)),
                    (n = { order: o.data("order") });
                  t.set_sort_data(i, n);
              }
            }),
              a.find("select.js-wpv-sort-control-orderby").each(function () {
                var a = e(this);
                if (0 == a.closest(".js-wpv-filter-form").length) {
                  var r = a.data("viewnumber"),
                    i = e(".js-wpv-filter-form-" + r),
                    n = { orderby: a.val() };
                  void 0 !== a.find(":selected").data("orderbyas") &&
                    (n.orderby_as = a.find(":selected").data("orderbyas")),
                    t.set_sort_data(i, n);
                }
              }),
              a.find("select.js-wpv-sort-control-order").each(function () {
                var a = e(this);
                if (0 == a.closest(".js-wpv-filter-form").length) {
                  var r = a.data("viewnumber"),
                    i = e(".js-wpv-filter-form-" + r),
                    n = { order: a.val() };
                  t.set_sort_data(i, n);
                }
              }),
              a
                .find("input.js-wpv-sort-control-orderby:checked")
                .each(function () {
                  var a = e(this);
                  if (0 == a.closest(".js-wpv-filter-form").length) {
                    var r = a.data("viewnumber"),
                      i = e(".js-wpv-filter-form-" + r),
                      n = { orderby: a.val() };
                    void 0 !== a.data("orderbyas") &&
                      (n.orderby_as = a.data("orderbyas")),
                      t.set_sort_data(i, n);
                  }
                }),
              a
                .find("input.js-wpv-sort-control-order:checked")
                .each(function () {
                  var a = e(this);
                  if (0 == a.closest(".js-wpv-filter-form").length) {
                    var r = a.data("viewnumber"),
                      i = e(".js-wpv-filter-form-" + r),
                      n = { order: a.val() };
                    t.set_sort_data(i, n);
                  }
                });
          }),
          e(document).on("js_event_wpv_pagination_completed", function (e, a) {
            t.maybe_init_sort_data(a.layout),
              a.filter && t.maybe_init_sort_data(a.filter);
          }),
          e(document).on(
            "js_event_wpv_parametric_search_form_updated",
            function (e, a) {
              t.maybe_init_sort_data(a.view_changed_form);
            }
          ),
          e(document).on(
            "js_event_wpv_parametric_search_results_updated",
            function (e, a) {
              t.maybe_init_sort_data(a.layout);
            }
          ),
          (t.init = function () {
            t.maybe_init_sort_data(e("body"));
          }),
          t.init();
      }),
      (r.ViewPagination = function (e) {
        var t = this;
        (t.rollover_running = []),
          (t.rollover_stopped = []),
          (t.rollover_paused = []),
          (t.init_rollover_timing_fired = !1),
          (t.pagination_queue = {}),
          (t.pagination_effects = {}),
          (t.pagination_effects_conditions = {}),
          (t.pagination_effects_spinner = {}),
          (t.paged_views = {}),
          (t.paged_views_initial_page = {}),
          (t.last_paginated_view = []),
          (t.paginated_history_reach = 0),
          (t.add_paginated_history = !0),
          (t.pagination_effect_state_push = ["fade", "slidev", "slideh"]),
          (t.pagination_effect_state_replace = []),
          (t.pagination_effect_state_keep = ["infinite"]),
          (t.init_scrolling_event_fired = !1),
          (t.slide_data_defaults = {
            view_number: "",
            page: 0,
            max_pages: 0,
            speed: 500,
            next: !0,
            effect: "fade",
            response: null,
            wpvPaginatorFilter: null,
            wpvPaginatorLayout: null,
            responseFilter: null,
            responseView: null,
            callback_next_func: r.view_frontend_utils.just_return,
          }),
          (t.pagination_doing_ajax = []),
          (t.add_view_parameters = function (t, a, r) {
            var i = e("form.js-wpv-filter-form-" + r),
              n = i.find(".js-wpv-post-relationship-update"),
              o = i.data("environment");
            return (
              (t.action = "wpv_get_page"),
              (t.page = a),
              (t.view_number = r),
              (t.wpv_sort_orderby =
                void 0 !== i.data("orderby") ? i.data("orderby") : ""),
              (t.wpv_sort_order =
                void 0 !== i.data("order") ? i.data("order") : ""),
              (t.wpv_sort_orderby_as =
                void 0 !== i.data("orderbyas") ? i.data("orderbyas") : ""),
              (t.wpv_sort_orderby_second =
                void 0 !== i.data("orderbysecond")
                  ? i.data("orderbysecond")
                  : ""),
              (t.wpv_sort_order_second =
                void 0 !== i.data("ordersecond") ? i.data("ordersecond") : ""),
              (t.wpv_view_widget_id = i.data("viewwidgetid")),
              (t.view_hash = i.data("viewhash")),
              (t.dps_pr = {}),
              (t.dps_general = {}),
              o.current_post_id > 0 &&
                (t.wpv_aux_current_post_id = o.current_post_id),
              o.parent_post_id > 0 &&
                (t.wpv_aux_parent_post_id = o.parent_post_id),
              o.parent_term_id > 0 &&
                (t.wpv_aux_parent_term_id = o.parent_term_id),
              o.parent_user_id > 0 &&
                (t.wpv_aux_parent_user_id = o.parent_user_id),
              n.length && (t.dps_pr = n.serializeArray()),
              (i.hasClass("js-wpv-dps-enabled") ||
                i.hasClass("js-wpv-ajax-results-enabled")) &&
                (t.dps_general = i
                  .find(
                    ".js-wpv-filter-trigger, .js-wpv-filter-trigger-delayed"
                  )
                  .serializeArray()),
              t
            );
          }),
          (t.pagination_preload_pages = function (e) {
            var a = parseInt(e.page, 10),
              r = parseInt(e.max_pages, 10),
              i = parseInt(e.max_reach, 10);
            if ((i > r && (i = r), "enabled" == e.preload_pages))
              for (var n = 1; n < i; )
                t.pagination_preload_next_page(e.view_number, a, r, n),
                  t.pagination_preload_previous_page(e.view_number, a, r, n),
                  n++;
            "enabled" == e.cache_pages &&
              t.pagination_cache_current_page(e.view_number, a);
          }),
          (t.pagination_cache_current_page = function (t, a) {
            (window.wpvCachedPages[t] = window.wpvCachedPages[t] || []),
              window.wpvCachedPages[t].hasOwnProperty(a) ||
                r.view_frontend_utils
                  .get_updated_query_results(
                    t,
                    a,
                    e("form.js-wpv-filter-form-" + t),
                    "full"
                  )
                  .done(function (r) {
                    r.success &&
                      ((window.wpvCachedPages[t][a] = r.data.full),
                      e(r.data.full)
                        .find("img")
                        .each(function () {
                          window.wpvCachedImages.push(this.src);
                        }));
                  });
          }),
          (t.pagination_preload_next_page = function (t, a, i, n) {
            window.wpvCachedPages[t] = window.wpvCachedPages[t] || [];
            var o = a + n;
            window.wpvCachedPages[t].hasOwnProperty(o) ||
              (o - 1 < i &&
                r.view_frontend_utils
                  .get_updated_query_results(
                    t,
                    o,
                    e("form.js-wpv-filter-form-" + t),
                    "full"
                  )
                  .done(function (a) {
                    a.success &&
                      ((window.wpvCachedPages[t][o] = a.data.full),
                      e(a.data.full)
                        .find("img")
                        .each(function () {
                          window.wpvCachedImages.push(this.src);
                        }));
                  }));
          }),
          (t.pagination_preload_previous_page = function (t, a, i, n) {
            window.wpvCachedPages[t] = window.wpvCachedPages[t] || [];
            var o = a - n;
            window.wpvCachedPages[t].hasOwnProperty(o) ||
              (o + 1 > 1
                ? r.view_frontend_utils
                    .get_updated_query_results(
                      t,
                      o,
                      e("form.js-wpv-filter-form-" + t),
                      "full"
                    )
                    .done(function (a) {
                      a.success &&
                        ((window.wpvCachedPages[t][o] = a.data.full),
                        e(a.data.full)
                          .find("img")
                          .each(function () {
                            window.wpvCachedImages.push(this.src);
                          }));
                    })
                : o + 1 === 1 &&
                  r.view_frontend_utils
                    .get_updated_query_results(
                      t,
                      i,
                      e("form.js-wpv-filter-form-" + t),
                      "full"
                    )
                    .done(function (a) {
                      a.success &&
                        ((window.wpvCachedPages[t][i] = a.data.full),
                        (window.wpvCachedPages[t][0] = a.data.full),
                        e(a.data.full)
                          .find("img")
                          .each(function () {
                            window.wpvCachedImages.push(this.src);
                          }));
                    }));
          }),
          (t.trigger_pagination = function (a, i) {
            if (window.wpvPaginationAnimationFinished.hasOwnProperty(a)) {
              if (!0 !== window.wpvPaginationAnimationFinished[a])
                return (
                  window.wpvPaginationQueue.hasOwnProperty(a) ||
                    (window.wpvPaginationQueue[a] = []),
                  void window.wpvPaginationQueue[a].push(arguments)
                );
            } else window.wpvPaginationAnimationFinished[a] = !1;
            window.wpvPaginationAnimationFinished[a] = !1;
            var n,
              o = e("#wpv-view-layout-" + a),
              s = e('form[name="wpv-filter-' + a + '"]'),
              d = !0,
              _ = t.get_paged_view(a),
              p = parseInt(_.preload_reach) + 1,
              l = r.view_frontend_utils.just_return;
            if ("disabled" != _.type && "paged" != _.type)
              !(_.effect in t.pagination_effects_conditions) ||
              t.pagination_effects_conditions[_.effect](_, i)
                ? ((window.wpvPaginationAjaxLoaded[a] = !1),
                  (window.wpvCachedPages[a] = window.wpvCachedPages[a] || []),
                  this.historyP.hasOwnProperty(a) && (d = this.historyP[a] < i),
                  "" !== _.callback_next &&
                    "function" != typeof (l = window[_.callback_next]) &&
                    (l = r.view_frontend_utils.just_return),
                  (n = {
                    view_number: a,
                    page: i,
                    max_pages: parseInt(_.max_pages, 10),
                    speed: parseFloat(_.duration),
                    next: d,
                    effect: _.effect,
                    wpvPaginatorFilter: s,
                    wpvPaginatorLayout: o,
                    responseView: null,
                    callback_next_func: l,
                  }),
                  window.wpvCachedPages[a].hasOwnProperty(i)
                    ? ((n.response = window.wpvCachedPages[a][i]),
                      t.prepare_slide(n))
                    : ("disabled" !== _.spinner &&
                        (_.effect in t.pagination_effects_spinner
                          ? t.pagination_effects_spinner[_.effect](a, o)
                          : t.pagination_effects_spinner.fade(a, o)),
                      r.view_frontend_utils
                        .get_updated_query_results(
                          a,
                          i,
                          e("form.js-wpv-filter-form-" + a),
                          "full"
                        )
                        .done(function (e) {
                          e.success &&
                            ((n.response = e.data.full), t.prepare_slide(n));
                        })),
                  t.pagination_preload_pages({
                    view_number: a,
                    cache_pages: _.cache_pages,
                    preload_pages: _.preload_pages,
                    page: i,
                    max_reach: p,
                    max_pages: _.max_pages,
                  }),
                  (this.historyP[a] = i))
                : (window.wpvPaginationAnimationFinished[a] = !0);
            else
              switch (_.query) {
                case "archive":
                  (current_page_permalink = _.base_permalink.replace(
                    "WPV_PAGE_NUM",
                    i
                  )),
                    window.location.replace(current_page_permalink);
                  break;
                default:
                  r.view_frontend_utils.set_extra_url_query_parameters_by_form(
                    s
                  ),
                    e('input[name="wpv_paged"]').length > 0
                      ? e('input[name="wpv_paged"]').attr("value", i)
                      : e("<input>")
                          .attr({ type: "hidden", name: "wpv_paged", value: i })
                          .appendTo(s),
                    s[0].submit();
              }
          }),
          (t.prepare_slide = function (a) {
            var r,
              i,
              n = e.extend({}, t.slide_data_defaults, a),
              o = n.wpvPaginatorLayout.width(),
              s = n.wpvPaginatorLayout.outerWidth(),
              d =
                (n.wpvPaginatorLayout.height(),
                n.wpvPaginatorLayout.outerHeight()),
              _ = e("<div></div>").append(n.response);
            (n.responseView = _.find(".js-wpv-view-layout-" + n.view_number)),
              (n.responseFilterSelector = _.find(
                "form.js-wpv-filter-form-" + n.view_number
              )),
              (n.responseFilter = _.find(
                "form.js-wpv-filter-form-" + n.view_number
              ).html()),
              (n.pagination_page_permalink = n.responseView.data("permalink")),
              n.wpvPaginatorLayout
                .attr("id", "wpv-view-layout-" + n.view_number + "-response")
                .wrap(
                  '<div class="wpv_slide_remove" style="width:' +
                    s +
                    "px;height:" +
                    d +
                    'px;overflow:hidden;" />'
                )
                .css("width", o),
              n.responseView
                .attr("id", "wpv-view-layout-" + n.view_number)
                .css({ visibility: "hidden", width: o }),
              n.wpvPaginatorLayout.hasClass("js-wpv-layout-preload-images")
                ? ((r = []),
                  (i = n.responseView.find("img")).length < 1
                    ? t.pagination_slide(n)
                    : i
                        .one("load", function () {
                          r.push(e(this).attr("src")),
                            r.length === i.length && t.pagination_slide(n);
                        })
                        .each(function () {
                          e(this).trigger("load");
                        }),
                  n.responseView
                    .find(".js-wpv-layout-preload-images")
                    .css("visibility", "visible"))
                : t.pagination_slide(n);
          }),
          (t.pagination_slide = function (a) {
            var r = e.extend({}, t.slide_data_defaults, a);
            switch (r.effect) {
              case "slideleft":
                (r.next = !0), (r.effect = "slideh");
                break;
              case "slideright":
              case "sliderightforward":
                (r.next = !1), (r.effect = "slideh");
                break;
              case "slidedown":
              case "slidedownforward":
                (r.next = !1), (r.effect = "slidev");
                break;
              case "slideup":
                (r.next = !0), (r.effect = "slidev");
            }
            !r.effect in t.pagination_effects && (r.effect = "fade"),
              t.pagination_effects[r.effect](r);
          }),
          (t.pagination_queue_trigger = function (e, a, r) {
            var i, n, o;
            window.wpvPaginationQueue.hasOwnProperty(e) &&
              window.wpvPaginationQueue[e].length > 0 &&
              (window.wpvPaginationQueue[e].sort(),
              (i = window.wpvPaginationQueue[e][0]),
              window.wpvPaginationQueue[e].splice(0, 1),
              (n = i[1]) > (o = i[4]) ? (n = 1) : n < 1 && (n = o),
              t.trigger_pagination(e, n));
          }),
          e(document).on(
            "click",
            ".js-wpv-pagination-next-link, .js-wpv-pagination-previous-link, .js-wpv-pagination-first-link, .js-wpv-pagination-last-link",
            function (a) {
              a.preventDefault();
              var n = e(this),
                o = n.data("viewnumber"),
                s = n.data("page"),
                d = e(".js-wpv-filter-form-" + o);
              r.view_sorting.set_sort_data_for_pagination(d),
                (i[o] = !0),
                t.trigger_pagination(o, s);
            }
          ),
          e(document).on("change", ".js-wpv-page-selector", function (a) {
            a.preventDefault();
            var r = e(this),
              n = r.data("viewnumber"),
              o = r.val();
            (i[n] = !0), t.trigger_pagination(n, o);
          }),
          e(document).on("click", ".js-wpv-pagination-link", function (a) {
            a.preventDefault();
            var r,
              n = e(this),
              o = {};
            for (
              o.view_number = n.data("viewnumber"),
                o.page = n.data("page"),
                r = 1;
              r <= o.max_pages;
              r++
            )
              r === o.page
                ? e(".js-wpv-page-link-" + o.view_number + "-" + r).addClass(
                    "wpv_page_current"
                  )
                : e(".js-wpv-page-link-" + o.view_number + "-" + r).removeClass(
                    "wpv_page_current"
                  );
            (i[o.view_number] = !0),
              t.trigger_pagination(o.view_number, o.page);
          }),
          e(document).on(
            "click",
            ".js-wpv-archive-pagination-link, .js-wpv-archive-pagination-next-link, .js-wpv-archive-pagination-prev-link, .js-wpv-archive-pagination-links-next-link, .js-wpv-archive-pagination-links-prev-link, .js-wpv-archive-pagination-links-first-link, .js-wpv-archive-pagination-links-last-link",
            function (a) {
              a.preventDefault();
              var r = e(this),
                n = r.data("viewnumber"),
                o = r.data("page");
              (i[n] = !0), t.trigger_pagination(n, o);
            }
          ),
          e(document).on("js_event_wpv_pagination_completed", function (e, a) {
            r.view_frontend_utils.render_frontend_media_shortcodes(a.layout),
              r.view_frontend_utils.render_frontend_datepicker(),
              r.view_frontend_utils.renderPriceFilter(),
              t.init_paged_views(a.layout),
              t.init_preload_images(a.layout),
              t.init_preload_pages(a.layout),
              t.init_pagination_button_state();
          }),
          e(document).on(
            "js_event_wpv_parametric_search_results_updated",
            function (e, a) {
              t.init_paged_view(a.view_unique_id),
                t.init_paged_views(a.layout),
                t.init_preload_images(a.layout),
                t.init_preload_pages(a.layout);
            }
          ),
          (t.REPLACE_BUFFER_MILISECONDS = 20),
          (t.init_effects = function () {
            t.pagination_effects = {
              infinite: function (a) {
                if (a.page != t.get_paged_view(a.view_number).page + 1)
                  e(".js-wpv_slide_loading_img_" + a.view_number).fadeOut(
                    function () {
                      e(this).remove();
                    }
                  ),
                    a.wpvPaginatorLayout
                      .animate({ opacity: 1 }, 300)
                      .unwrap()
                      .attr("id", "wpv-view-layout-" + a.view_number),
                    (window.wpvPaginationAjaxLoaded[a.view_number] = !0),
                    (window.wpvPaginationAnimationFinished[a.view_number] = !0);
                else {
                  var r = {},
                    i = {};
                  if (
                    ((r.view_unique_id = a.view_number),
                    (r.effect = "infinite"),
                    (r.speed = a.speed),
                    (i.view_number = a.view_number),
                    (i.page = a.page),
                    (i.effect = "infinite"),
                    (i.pagination_page_permalink = a.pagination_page_permalink),
                    a.wpvPaginatorLayout.find(".js-wpv-loop").length > 0 &&
                      a.responseView.find(".js-wpv-loop").length > 0)
                  )
                    a.responseView
                      .find(".js-wpv-loop")
                      .children()
                      .addClass("wpv-loop-item-blink")
                      .css({ opacity: "0.3" }),
                      a.responseView
                        .find(".js-wpv-loop")
                        .prepend(
                          a.wpvPaginatorLayout.find(".js-wpv-loop").html()
                        ),
                      a.wpvPaginatorLayout.html(a.responseView.html()),
                      a.wpvPaginatorLayout
                        .find(".wpv-loop-item-blink")
                        .removeClass("wpv-loop-item-blink")
                        .animate({ opacity: 1 }, a.speed);
                  else {
                    var n = a.wpvPaginatorLayout
                        .html()
                        .split("\x3c!-- WPV_Infinite_Scroll --\x3e", 3),
                      o = n.length > 2 ? n[1] : "";
                    a.wpvPaginatorLayout.html(
                      a.responseView
                        .html()
                        .replace("\x3c!-- WPV_Infinite_Scroll_Insert --\x3e", o)
                    );
                  }
                  (r.layout = a.wpvPaginatorLayout),
                    e(".js-wpv_slide_loading_img_" + a.view_number).fadeOut(
                      function () {
                        e(this).remove();
                      }
                    ),
                    a.wpvPaginatorLayout
                      .unwrap()
                      .attr("id", "wpv-view-layout-" + a.view_number)
                      .animate({ opacity: 1 }, 300, function () {
                        a.wpvPaginatorFilter.html(a.responseFilter),
                          (t.get_paged_view(a.view_number).page = a.page),
                          (window.wpvPaginationAjaxLoaded[a.view_number] = !0),
                          (window.wpvPaginationAnimationFinished[
                            a.view_number
                          ] = !0),
                          a.callback_next_func(),
                          t.manage_browser_history(i),
                          e(document).trigger(
                            "js_event_wpv_pagination_completed",
                            [r]
                          ),
                          t.pagination_queue_trigger(
                            a.view_number,
                            a.next,
                            a.wpvPaginatorFilter
                          );
                      });
                }
              },
              slideh: function (a) {
                var r,
                  i = a.wpvPaginatorLayout.height(),
                  n = a.wpvPaginatorLayout.outerHeight(),
                  o = {},
                  s = {};
                (o.view_unique_id = a.view_number),
                  (o.effect = "slideh"),
                  (o.speed = a.speed),
                  (o.layout = a.responseView),
                  (o.filter = a.responseFilterSelector),
                  (s.view_number = a.view_number),
                  (s.page = a.page),
                  (s.effect = "slideh"),
                  (s.pagination_page_permalink = a.pagination_page_permalink),
                  !0 === a.next
                    ? (a.wpvPaginatorLayout.css("float", "left"),
                      a.responseView.css({
                        float: "left",
                        visibility: "visible",
                      }),
                      a.wpvPaginatorLayout
                        .after(a.responseView)
                        .parent()
                        .children()
                        .wrapAll('<div style="width:5000px;" />'),
                      e(".js-wpv_slide_loading_img_" + a.view_number).fadeOut(
                        function () {
                          e(this).remove();
                        }
                      ),
                      setTimeout(function () {
                        (r = a.responseView.outerHeight()),
                          n === r
                            ? a.wpvPaginatorLayout
                                .parent()
                                .animate(
                                  {
                                    marginLeft:
                                      "-" +
                                      a.wpvPaginatorLayout.outerWidth() +
                                      "px",
                                  },
                                  a.speed + 500,
                                  function () {
                                    a.responseView.css({
                                      position: "static",
                                      float: "none",
                                    }),
                                      a.wpvPaginatorLayout
                                        .unwrap()
                                        .unwrap()
                                        .remove(),
                                      a.wpvPaginatorFilter.html(
                                        a.responseFilter
                                      ),
                                      (window.wpvPaginationAjaxLoaded[
                                        a.view_number
                                      ] = !0),
                                      (window.wpvPaginationAnimationFinished[
                                        a.view_number
                                      ] = !0),
                                      a.callback_next_func(),
                                      t.manage_browser_history(s),
                                      e(document).trigger(
                                        "js_event_wpv_pagination_completed",
                                        [o]
                                      ),
                                      t.pagination_queue_trigger(
                                        a.view_number,
                                        a.next,
                                        a.wpvPaginatorFilter
                                      );
                                  }
                                )
                            : n > r
                            ? a.wpvPaginatorLayout
                                .parent()
                                .animate(
                                  {
                                    marginLeft:
                                      "-" +
                                      a.wpvPaginatorLayout.outerWidth() +
                                      "px",
                                  },
                                  a.speed + 500,
                                  function () {
                                    a.wpvPaginatorLayout
                                      .parent()
                                      .parent()
                                      .animate(
                                        {
                                          height:
                                            a.responseView.outerHeight() + "px",
                                        },
                                        a.speed / 2,
                                        function () {
                                          a.responseView.css({
                                            position: "static",
                                            float: "none",
                                          }),
                                            a.wpvPaginatorLayout
                                              .unwrap()
                                              .unwrap()
                                              .remove(),
                                            a.wpvPaginatorFilter.html(
                                              a.responseFilter
                                            ),
                                            (window.wpvPaginationAjaxLoaded[
                                              a.view_number
                                            ] = !0),
                                            (window.wpvPaginationAnimationFinished[
                                              a.view_number
                                            ] = !0),
                                            a.callback_next_func(),
                                            t.manage_browser_history(s),
                                            e(document).trigger(
                                              "js_event_wpv_pagination_completed",
                                              [o]
                                            ),
                                            t.pagination_queue_trigger(
                                              a.view_number,
                                              a.next,
                                              a.wpvPaginatorFilter
                                            );
                                        }
                                      );
                                  }
                                )
                            : a.wpvPaginatorLayout
                                .parent()
                                .parent()
                                .animate(
                                  {
                                    height: a.responseView.outerHeight() + "px",
                                  },
                                  a.speed / 2,
                                  function () {
                                    a.wpvPaginatorLayout
                                      .parent()
                                      .animate(
                                        {
                                          marginLeft:
                                            "-" +
                                            a.wpvPaginatorLayout.outerWidth() +
                                            "px",
                                        },
                                        a.speed + 500,
                                        function () {
                                          a.responseView.css({
                                            position: "static",
                                            float: "none",
                                          }),
                                            a.wpvPaginatorLayout
                                              .unwrap()
                                              .unwrap()
                                              .remove(),
                                            a.wpvPaginatorFilter.html(
                                              a.responseFilter
                                            ),
                                            (window.wpvPaginationAjaxLoaded[
                                              a.view_number
                                            ] = !0),
                                            (window.wpvPaginationAnimationFinished[
                                              a.view_number
                                            ] = !0),
                                            a.callback_next_func(),
                                            t.manage_browser_history(s),
                                            e(document).trigger(
                                              "js_event_wpv_pagination_completed",
                                              [o]
                                            ),
                                            t.pagination_queue_trigger(
                                              a.view_number,
                                              a.next,
                                              a.wpvPaginatorFilter
                                            );
                                        }
                                      );
                                  }
                                );
                      }, t.REPLACE_BUFFER_MILISECONDS))
                    : (a.wpvPaginatorLayout.css("float", "right"),
                      a.responseView.css({
                        float: "right",
                        visibility: "visible",
                      }),
                      a.wpvPaginatorLayout
                        .after(a.responseView)
                        .parent()
                        .children()
                        .wrapAll(
                          '<div style="height:' +
                            i +
                            ";width:" +
                            (a.responseView.outerWidth() +
                              a.wpvPaginatorLayout.outerWidth()) +
                            "px; margin-left:-" +
                            a.wpvPaginatorLayout.outerWidth() +
                            'px;" />'
                        ),
                      e(".js-wpv_slide_loading_img_" + a.view_number).fadeOut(
                        function () {
                          e(this).remove();
                        }
                      ),
                      setTimeout(function () {
                        (r = a.responseView.outerHeight()),
                          n === r
                            ? a.wpvPaginatorLayout
                                .parent()
                                .animate(
                                  { marginLeft: "0px" },
                                  a.speed + 500,
                                  function () {
                                    a.responseView.css({
                                      position: "static",
                                      margin: "0px",
                                      float: "none",
                                    }),
                                      a.wpvPaginatorLayout
                                        .unwrap()
                                        .unwrap()
                                        .remove(),
                                      a.wpvPaginatorFilter.html(
                                        a.responseFilter
                                      ),
                                      (window.wpvPaginationAjaxLoaded[
                                        a.view_number
                                      ] = !0),
                                      (window.wpvPaginationAnimationFinished[
                                        a.view_number
                                      ] = !0),
                                      a.callback_next_func(),
                                      t.manage_browser_history(s),
                                      e(document).trigger(
                                        "js_event_wpv_pagination_completed",
                                        [o]
                                      ),
                                      t.pagination_queue_trigger(
                                        a.view_number,
                                        a.next,
                                        a.wpvPaginatorFilter
                                      );
                                  }
                                )
                            : n > r
                            ? a.wpvPaginatorLayout
                                .parent()
                                .animate(
                                  { marginLeft: "0px" },
                                  a.speed + 500,
                                  function () {
                                    a.wpvPaginatorLayout
                                      .parent()
                                      .parent()
                                      .animate(
                                        {
                                          height:
                                            a.responseView.outerHeight() + "px",
                                        },
                                        a.speed / 2,
                                        function () {
                                          a.responseView.css({
                                            position: "static",
                                            margin: "0px",
                                            float: "none",
                                          }),
                                            a.wpvPaginatorLayout
                                              .unwrap()
                                              .unwrap()
                                              .remove(),
                                            a.wpvPaginatorFilter.html(
                                              a.responseFilter
                                            ),
                                            (window.wpvPaginationAjaxLoaded[
                                              a.view_number
                                            ] = !0),
                                            (window.wpvPaginationAnimationFinished[
                                              a.view_number
                                            ] = !0),
                                            a.callback_next_func(),
                                            t.manage_browser_history(s),
                                            e(document).trigger(
                                              "js_event_wpv_pagination_completed",
                                              [o]
                                            ),
                                            t.pagination_queue_trigger(
                                              a.view_number,
                                              a.next,
                                              a.wpvPaginatorFilter
                                            );
                                        }
                                      );
                                  }
                                )
                            : a.wpvPaginatorLayout
                                .parent()
                                .parent()
                                .animate(
                                  {
                                    height: a.responseView.outerHeight() + "px",
                                  },
                                  a.speed / 2,
                                  function () {
                                    a.wpvPaginatorLayout
                                      .parent()
                                      .animate(
                                        { marginLeft: "0px" },
                                        a.speed + 500,
                                        function () {
                                          a.responseView.css({
                                            position: "static",
                                            margin: "0px",
                                            float: "none",
                                          }),
                                            a.wpvPaginatorLayout
                                              .unwrap()
                                              .unwrap()
                                              .remove(),
                                            a.wpvPaginatorFilter.html(
                                              a.responseFilter
                                            ),
                                            (window.wpvPaginationAjaxLoaded[
                                              a.view_number
                                            ] = !0),
                                            (window.wpvPaginationAnimationFinished[
                                              a.view_number
                                            ] = !0),
                                            a.callback_next_func(),
                                            t.manage_browser_history(s),
                                            e(document).trigger(
                                              "js_event_wpv_pagination_completed",
                                              [o]
                                            ),
                                            t.pagination_queue_trigger(
                                              a.view_number,
                                              a.next,
                                              a.wpvPaginatorFilter
                                            );
                                        }
                                      );
                                  }
                                );
                      }, t.REPLACE_BUFFER_MILISECONDS));
              },
              slidev: function (a) {
                var r,
                  i = a.wpvPaginatorLayout.outerHeight(),
                  n = {},
                  o = {};
                (n.view_unique_id = a.view_number),
                  (n.effect = "slidev"),
                  (n.speed = a.speed),
                  (n.layout = a.responseView),
                  (n.filter = a.responseFilterSelector),
                  (o.view_number = a.view_number),
                  (o.page = a.page),
                  (o.effect = "slidev"),
                  (o.pagination_page_permalink = a.pagination_page_permalink),
                  !0 === a.next
                    ? (a.responseView.css("visibility", "visible"),
                      a.wpvPaginatorLayout
                        .after(a.responseView)
                        .parent()
                        .children()
                        .wrapAll("<div />"),
                      e(".js-wpv_slide_loading_img_" + a.view_number).fadeOut(
                        function () {
                          e(this).remove();
                        }
                      ),
                      setTimeout(function () {
                        (r = a.responseView.outerHeight()),
                          i === r
                            ? a.wpvPaginatorLayout
                                .parent()
                                .animate(
                                  {
                                    marginTop:
                                      "-" + a.responseView.outerHeight() + "px",
                                  },
                                  a.speed + 500,
                                  function () {
                                    a.responseView.css({
                                      position: "static",
                                      margin: "0px",
                                    }),
                                      a.wpvPaginatorLayout
                                        .unwrap()
                                        .unwrap()
                                        .remove(),
                                      a.wpvPaginatorFilter.html(
                                        a.responseFilter
                                      ),
                                      (window.wpvPaginationAjaxLoaded[
                                        a.view_number
                                      ] = !0),
                                      (window.wpvPaginationAnimationFinished[
                                        a.view_number
                                      ] = !0),
                                      a.callback_next_func(),
                                      t.manage_browser_history(o),
                                      e(document).trigger(
                                        "js_event_wpv_pagination_completed",
                                        [n]
                                      ),
                                      t.pagination_queue_trigger(
                                        a.view_number,
                                        a.next,
                                        a.wpvPaginatorFilter
                                      );
                                  }
                                )
                            : i > r
                            ? a.wpvPaginatorLayout
                                .parent()
                                .animate(
                                  { marginTop: "-" + i + "px" },
                                  a.speed + 500,
                                  function () {
                                    a.wpvPaginatorLayout
                                      .parent()
                                      .parent()
                                      .animate(
                                        {
                                          height:
                                            a.responseView.outerHeight() + "px",
                                        },
                                        a.speed / 2,
                                        function () {
                                          a.responseView.css({
                                            position: "static",
                                            margin: "0px",
                                          }),
                                            a.wpvPaginatorLayout
                                              .unwrap()
                                              .unwrap()
                                              .remove(),
                                            a.wpvPaginatorFilter.html(
                                              a.responseFilter
                                            ),
                                            (window.wpvPaginationAjaxLoaded[
                                              a.view_number
                                            ] = !0),
                                            (window.wpvPaginationAnimationFinished[
                                              a.view_number
                                            ] = !0),
                                            a.callback_next_func(),
                                            t.manage_browser_history(o),
                                            e(document).trigger(
                                              "js_event_wpv_pagination_completed",
                                              [n]
                                            ),
                                            t.pagination_queue_trigger(
                                              a.view_number,
                                              a.next,
                                              a.wpvPaginatorFilter
                                            );
                                        }
                                      );
                                  }
                                )
                            : a.wpvPaginatorLayout
                                .parent()
                                .parent()
                                .animate(
                                  {
                                    height: a.responseView.outerHeight() + "px",
                                  },
                                  a.speed / 2,
                                  function () {
                                    a.wpvPaginatorLayout
                                      .parent()
                                      .animate(
                                        { marginTop: "-" + i + "px" },
                                        a.speed + 500,
                                        function () {
                                          a.responseView.css({
                                            position: "static",
                                            margin: "0px",
                                          }),
                                            a.wpvPaginatorLayout
                                              .unwrap()
                                              .unwrap()
                                              .remove(),
                                            a.wpvPaginatorFilter.html(
                                              a.responseFilter
                                            ),
                                            (window.wpvPaginationAjaxLoaded[
                                              a.view_number
                                            ] = !0),
                                            (window.wpvPaginationAnimationFinished[
                                              a.view_number
                                            ] = !0),
                                            a.callback_next_func(),
                                            t.manage_browser_history(o),
                                            e(document).trigger(
                                              "js_event_wpv_pagination_completed",
                                              [n]
                                            ),
                                            t.pagination_queue_trigger(
                                              a.view_number,
                                              a.next,
                                              a.wpvPaginatorFilter
                                            );
                                        }
                                      );
                                  }
                                );
                      }, t.REPLACE_BUFFER_MILISECONDS))
                    : (a.responseView.css("visibility", "visible"),
                      a.wpvPaginatorLayout
                        .before(a.responseView)
                        .parent()
                        .children()
                        .wrapAll("<div />"),
                      e(".js-wpv_slide_loading_img_" + a.view_number).fadeOut(
                        function () {
                          e(this).remove();
                        }
                      ),
                      setTimeout(function () {
                        (r = a.responseView.outerHeight()),
                          a.wpvPaginatorLayout
                            .parent()
                            .css({
                              position: "relative",
                              "margin-top":
                                "-" + a.responseView.outerHeight() + "px",
                            }),
                          i === r
                            ? a.wpvPaginatorLayout
                                .parent()
                                .animate(
                                  { marginTop: "0px" },
                                  a.speed + 500,
                                  function () {
                                    a.responseView.css({
                                      position: "static",
                                      margin: "0px",
                                    }),
                                      a.wpvPaginatorLayout
                                        .unwrap()
                                        .unwrap()
                                        .remove(),
                                      a.wpvPaginatorFilter.html(
                                        a.responseFilter
                                      ),
                                      (window.wpvPaginationAjaxLoaded[
                                        a.view_number
                                      ] = !0),
                                      (window.wpvPaginationAnimationFinished[
                                        a.view_number
                                      ] = !0),
                                      a.callback_next_func(),
                                      t.manage_browser_history(o),
                                      e(document).trigger(
                                        "js_event_wpv_pagination_completed",
                                        [n]
                                      ),
                                      t.pagination_queue_trigger(
                                        a.view_number,
                                        a.next,
                                        a.wpvPaginatorFilter
                                      );
                                  }
                                )
                            : i > r
                            ? a.wpvPaginatorLayout
                                .parent()
                                .animate(
                                  { marginTop: "0px" },
                                  a.speed + 500,
                                  function () {
                                    a.wpvPaginatorLayout
                                      .parent()
                                      .parent()
                                      .animate(
                                        {
                                          height:
                                            a.responseView.outerHeight() + "px",
                                        },
                                        a.speed / 2,
                                        function () {
                                          a.responseView.css({
                                            position: "static",
                                            margin: "0px",
                                          }),
                                            a.wpvPaginatorLayout
                                              .unwrap()
                                              .unwrap()
                                              .remove(),
                                            a.wpvPaginatorFilter.html(
                                              a.responseFilter
                                            ),
                                            (window.wpvPaginationAjaxLoaded[
                                              a.view_number
                                            ] = !0),
                                            (window.wpvPaginationAnimationFinished[
                                              a.view_number
                                            ] = !0),
                                            a.callback_next_func(),
                                            t.manage_browser_history(o),
                                            e(document).trigger(
                                              "js_event_wpv_pagination_completed",
                                              [n]
                                            ),
                                            t.pagination_queue_trigger(
                                              a.view_number,
                                              a.next,
                                              a.wpvPaginatorFilter
                                            );
                                        }
                                      );
                                  }
                                )
                            : a.wpvPaginatorLayout
                                .parent()
                                .parent()
                                .animate(
                                  {
                                    height: a.responseView.outerHeight() + "px",
                                  },
                                  a.speed / 2,
                                  function () {
                                    a.wpvPaginatorLayout
                                      .parent()
                                      .animate(
                                        { marginTop: "0px" },
                                        a.speed + 500,
                                        function () {
                                          a.responseView.css({
                                            position: "static",
                                            margin: "0px",
                                          }),
                                            a.wpvPaginatorLayout
                                              .unwrap()
                                              .unwrap()
                                              .remove(),
                                            a.wpvPaginatorFilter.html(
                                              a.responseFilter
                                            ),
                                            (window.wpvPaginationAjaxLoaded[
                                              a.view_number
                                            ] = !0),
                                            (window.wpvPaginationAnimationFinished[
                                              a.view_number
                                            ] = !0),
                                            a.callback_next_func(),
                                            t.manage_browser_history(o),
                                            e(document).trigger(
                                              "js_event_wpv_pagination_completed",
                                              [n]
                                            ),
                                            t.pagination_queue_trigger(
                                              a.view_number,
                                              a.next,
                                              a.wpvPaginatorFilter
                                            );
                                        }
                                      );
                                  }
                                );
                      }, t.REPLACE_BUFFER_MILISECONDS));
              },
              fade: function (a) {
                var i,
                  n = a.wpvPaginatorLayout.outerHeight(),
                  o = {},
                  s = {};
                (o.view_unique_id = a.view_number),
                  (o.effect = "fade"),
                  (o.speed = a.speed),
                  (o.layout = a.responseView),
                  (o.filter = a.responseFilterSelector),
                  (s.view_number = a.view_number),
                  (s.page = a.page),
                  (s.effect = "fade"),
                  (s.pagination_page_permalink = a.pagination_page_permalink),
                  e(".js-wpv_slide_loading_img_" + a.view_number).fadeOut(
                    function () {
                      e(this).remove();
                    }
                  ),
                  a.wpvPaginatorLayout
                    .css({ position: "absolute", "z-index": "5" })
                    .after(a.responseView)
                    .next()
                    .css("position", "static"),
                  setTimeout(function () {
                    (i = a.responseView.outerHeight()),
                      n === i
                        ? (a.wpvPaginatorLayout.fadeOut(a.speed, function () {
                            a.wpvPaginatorLayout.unwrap().remove(),
                              a.wpvPaginatorFilter.html(a.responseFilter);
                          }),
                          a.responseView
                            .hide()
                            .css("visibility", "visible")
                            .fadeIn(a.speed, function () {
                              (window.wpvPaginationAjaxLoaded[a.view_number] =
                                !0),
                                (window.wpvPaginationAnimationFinished[
                                  a.view_number
                                ] = !0),
                                a.callback_next_func(),
                                t.manage_browser_history(s),
                                e(document).trigger(
                                  "js_event_wpv_pagination_completed",
                                  [o]
                                ),
                                r.view_pagination.pagination_queue_trigger(
                                  a.view_number,
                                  a.next,
                                  a.wpvPaginatorFilter
                                );
                            }))
                        : a.wpvPaginatorLayout.fadeOut(a.speed, function () {
                            a.wpvPaginatorLayout
                              .parent()
                              .animate(
                                { height: i + "px" },
                                a.speed,
                                function () {
                                  a.wpvPaginatorLayout.unwrap().remove(),
                                    a.wpvPaginatorFilter.html(a.responseFilter),
                                    a.responseView
                                      .hide()
                                      .css("visibility", "visible")
                                      .fadeIn(a.speed, function () {
                                        (window.wpvPaginationAjaxLoaded[
                                          a.view_number
                                        ] = !0),
                                          (window.wpvPaginationAnimationFinished[
                                            a.view_number
                                          ] = !0),
                                          a.callback_next_func(),
                                          t.manage_browser_history(s),
                                          e(document).trigger(
                                            "js_event_wpv_pagination_completed",
                                            [o]
                                          ),
                                          r.view_pagination.pagination_queue_trigger(
                                            a.view_number,
                                            a.next,
                                            a.wpvPaginatorFilter
                                          );
                                      });
                                }
                              );
                          });
                  }, t.REPLACE_BUFFER_MILISECONDS);
              },
            };
          }),
          (t.manage_browser_history = function (e) {
            "rollover" != t.get_paged_view(e.view_number).type &&
              "enabled" == t.get_paged_view(e.view_number).manage_history &&
              (1 == t.add_paginated_history
                ? _.contains(t.pagination_effect_state_keep, e.effect) ||
                  (_.contains(t.pagination_effect_state_replace, e.effect)
                    ? history.replaceState(
                        null,
                        "",
                        e.pagination_page_permalink
                      )
                    : (t.last_paginated_view.push(e.view_number),
                      (state_obj = {
                        view_number: e.view_number,
                        page: e.page,
                      }),
                      history.pushState(
                        state_obj,
                        "",
                        e.pagination_page_permalink
                      ),
                      (t.paginated_history_reach =
                        t.paginated_history_reach + 1)))
                : (t.add_paginated_history = !0));
          }),
          (window.onpopstate = function (e) {
            if (null == e.state) {
              var a = t.last_paginated_view.pop();
              null != a &&
                ((t.add_paginated_history = !1),
                (t.paged_views_initial_page[a] =
                  t.paged_views_initial_page[a] || 1),
                t.trigger_pagination(a, t.paged_views_initial_page[a]));
            } else
              _.has(e.state, "view_number") &&
                _.has(e.state, "page") &&
                ((t.add_paginated_history = !1),
                t.trigger_pagination(e.state.view_number, e.state.page));
          }),
          e(document).on(
            "js_event_wpv_parametric_search_results_updated",
            function (e, a) {
              (window.wpvCachedPages[a.view_unique_id] = []),
                (t.last_paginated_view = []),
                t.paginated_history_reach > 0 &&
                  (window.history.go(-Math.abs(t.paginated_history_reach)),
                  (t.paginated_history_reach = 0)),
                setTimeout(function () {
                  history.replaceState(null, "", a.permalink);
                }, 100),
                t.updateLanguageSwitcherURLs(a.permalink);
            }
          ),
          (t.updateLanguageSwitcherURLs = function (a) {
            e(".wpml-ls-item").each(function (r, i) {
              var n,
                o = t.parseURL(a),
                s = !1;
              if (
                (e(i).is("a")
                  ? (s = e(i).attr("href"))
                  : e(i).find("a").length > 0 &&
                    (s = e(i).find("a").first().attr("href")),
                !1 !== s && "#" !== s)
              ) {
                (n = t.parseURL(s)), delete o.params.lang;
                var d = e.extend({}, n.params, o.params),
                  _ = s.replace(n.query, "");
                e(i)
                  .find("a")
                  .first()
                  .attr("href", _ + "?" + e.param(d));
              }
            });
          }),
          (t.parseURL = function (e) {
            var t = document.createElement("a");
            return (
              (t.href = e),
              {
                source: e,
                protocol: t.protocol.replace(":", ""),
                host: t.hostname,
                port: t.port,
                query: t.search,
                params: (function () {
                  for (
                    var e,
                      r = {},
                      i = t.search.replace(/^\?/, "").split("&"),
                      n = i.length,
                      o = 0;
                    o < n;
                    o++
                  )
                    if (i[o]) {
                      e = i[o].split("=");
                      var s = decodeURI(e[0]),
                        d = e[1];
                      switch (a(r[s])) {
                        case "string":
                          d = [r[s], e[1]];
                          break;
                        case "object":
                          (d = r[s]).push(e[1]);
                      }
                      r[s] = d;
                    }
                  return r;
                })(),
                file: (t.pathname.match(/\/([^/?#]+)$/i) || [, ""])[1],
                hash: t.hash.replace("#", ""),
                path: t.pathname.replace(/^([^/])/, "/$1"),
                relative: (t.href.match(/tps?:\/\/[^/]+(.+)/) || [, ""])[1],
                segments: t.pathname.replace(/^\//, "").split("/"),
              }
            );
          }),
          (t.init_effects_conditions = function () {
            t.pagination_effects_conditions = {
              infinite: function (e, t) {
                return t == e.page + 1;
              },
            };
          }),
          (t.init_effects_spinner = function () {
            (t.pagination_effects_spinner.fade =
              t.pagination_effects_spinner.slideleft =
              t.pagination_effects_spinner.slideright =
              t.pagination_effects_spinner.sliderightforward =
              t.pagination_effects_spinner.slideh =
              t.pagination_effects_spinner.slideup =
              t.pagination_effects_spinner.slidedown =
              t.pagination_effects_spinner.slidedownforward =
              t.pagination_effects_spinner.slidev =
                function (e, a) {
                  var r = new Image();
                  (r.src = t.get_paged_view(e).spinner_image),
                    (r.onload = function () {
                      var i = a.position(),
                        n =
                          '<div style="width:' +
                          r.width +
                          "px;height:" +
                          r.height +
                          "px;border:none;background:transparent 50% 50% no-repeat url(" +
                          t.get_paged_view(e).spinner_image +
                          ");position:absolute;z-index:99;top:" +
                          (Math.round(i.top) +
                            Math.round(a.height() / 2) -
                            Math.round(r.height / 2)) +
                          "px;left:" +
                          (Math.round(i.left) +
                            Math.round(a.width() / 2) -
                            Math.round(r.width / 2)) +
                          'px;" class="wpv_slide_loading_img js-wpv_slide_loading_img_' +
                          e +
                          '"></div>';
                      a.before(n).animate({ opacity: 0.5 }, 300);
                    });
                }),
              (t.pagination_effects_spinner.infinite = function (e, a) {
                var r = new Image();
                (r.src = t.get_paged_view(e).spinner_image),
                  (r.onload = function () {
                    var i = a.position(),
                      n =
                        '<div style="width:' +
                        r.width +
                        "px;height:" +
                        r.height +
                        "px;border:none;background:transparent 50% 50% no-repeat url(" +
                        t.get_paged_view(e).spinner_image +
                        ");position:absolute;z-index:99;top:" +
                        (Math.round(i.top) +
                          a.height() -
                          Math.round(r.height / 2)) +
                        "px;left:" +
                        (Math.round(i.left) +
                          Math.round(a.width() / 2) -
                          Math.round(r.width / 2)) +
                        'px;" class="wpv_slide_loading_img js-wpv_slide_loading_img_' +
                        e +
                        '"></div>';
                    a.before(n).animate({ opacity: 0.5 }, 300);
                  });
              });
          }),
          (t.init_paged_views = function (a) {
            var r = !1,
              n = !1;
            return (
              (this.historyP = this.historyP || []),
              (window.wpvCachedPages = window.wpvCachedPages || []),
              (window.wpvCachedImages = window.wpvCachedImages || []),
              e(".js-wpv-view-layout", a).each(function () {
                var a = e(this).data("viewnumber");
                if (
                  (t.init_paged_view(a),
                  "infinite" == t.paged_views[a].effect &&
                    1 == t.paged_views[a].page &&
                    (r = !0),
                  "rollover" == t.paged_views[a].type && !i.hasOwnProperty(a))
                )
                  if (
                    ((n = !0),
                    (rollover_has_index = _.findIndex(
                      t.rollover_running,
                      function (e) {
                        return e.view_number == a;
                      }
                    )),
                    rollover_has_index < 0)
                  ) {
                    var o = { view_number: a, page: 1, force_reset: !1 };
                    t.rollover_running.push(o),
                      t.init_rollover_timing_fired && t.trigger_rollover(o);
                  } else
                    t.rollover_running[rollover_has_index] = {
                      view_number: a,
                      page: 1,
                      force_reset: !0,
                    };
              }),
              !t.init_scrolling_event_fired &&
                r &&
                t.init_scrolling_event_callback(),
              !t.init_rollover_timing_fired &&
                n &&
                t.init_rollover_timing_callback(),
              t
            );
          }),
          (t.init_paged_view = function (a) {
            (this.historyP = this.historyP || []),
              (t.paged_views[a] = e("#wpv-view-layout-" + a).data(
                "pagination"
              )),
              (t.paged_views_initial_page[a] = t.paged_views[a].page),
              (this.historyP[a] = t.paged_views[a].page),
              (window.wpvCachedPages[a] = []),
              "disabled" != t.paged_views[a].type &&
                "paged" != t.paged_views[a].type &&
                t.paged_views[a].page > 1 &&
                e("#wpv-view-layout-" + a).removeClass(
                  "js-wpv-layout-infinite-scrolling"
                ),
              e("#wpv-view-layout-" + a).parents(".js-wpv-view-layout").length >
                0 && (t.paged_views[a].manage_history = "disabled");
          }),
          (t.get_paged_view = function (e) {
            return (
              _.has(t.paged_views, e) || t.init_paged_view(e), t.paged_views[e]
            );
          }),
          (t.is_infinite_triggable = function (a) {
            var r = a,
              i = a.data("viewnumber");
            return (
              (infinite_tolerance = t.get_paged_view(i).infinite_tolerance),
              (infinite_tolerance = isNaN(infinite_tolerance)
                ? 0
                : +infinite_tolerance),
              a.find(".js-wpv-loop").length > 0 && (r = a.find(".js-wpv-loop")),
              r.offset().top + r.outerHeight() <=
                e(window).scrollTop() +
                  e(window).height() +
                  infinite_tolerance ||
                e(window).scrollTop() + e(window).height() ==
                  e(document).height()
            );
          }),
          (t.init_scrolling_event_callback = function () {
            e(window).on(
              "scroll",
              _.debounce(function () {
                e(".js-wpv-layout-infinite-scrolling").each(function () {
                  var a = e(this),
                    r = a.data("viewnumber"),
                    i = t.get_paged_view(r);
                  i.page < i.max_pages &&
                    t.is_infinite_triggable(a) &&
                    t.trigger_pagination(r, i.page + 1);
                });
              }, 1)
            ),
              (t.init_scrolling_event_fired = !0);
          }),
          (t.trigger_rollover = function (a) {
            var n = e.extend(
                {},
                { view_number: "", page: 1, force_reset: !1 },
                a
              ),
              o = n.view_number,
              s = t.get_paged_view(o);
            if (s.max_pages > 1 && e("#wpv-view-layout-" + o).length > 0) {
              var d = 1e3 * s.speed - t.REPLACE_BUFFER_MILISECONDS;
              d < 0 && (d = 0),
                setTimeout(function () {
                  var d = _.findIndex(t.rollover_paused, function (e) {
                    return e.view_number == o;
                  });
                  if (
                    t.rollover_paused[d] &&
                    t.rollover_paused[d].view_number &&
                    t.rollover_paused[d].view_number == o
                  )
                    setTimeout(function () {
                      t.trigger_rollover(a);
                    }, 100);
                  else if (
                    !i.hasOwnProperty(o) &&
                    e("#wpv-view-layout-" + o).length > 0
                  ) {
                    var p = n.page;
                    d = _.findIndex(t.rollover_running, function (e) {
                      return e.view_number == o;
                    });
                    t.rollover_running[d].force_reset &&
                      ((t.rollover_running[d].force_reset = !1), (p = 1)),
                      "slideright" === s.effect || "slidedown" === s.effect
                        ? p <= 1
                          ? (p = s.max_pages)
                          : (p -= 1)
                        : p === s.max_pages
                        ? (p = 1)
                        : (p += 1),
                      (t.rollover_running[d].page = p),
                      r.view_pagination.trigger_pagination(o, p);
                  } else {
                    d = _.findIndex(t.rollover_running, function (e) {
                      return e.view_number == o;
                    });
                    t.rollover_running.splice(d, 1);
                  }
                }, d);
            } else {
              var p = _.findIndex(t.rollover_running, function (e) {
                return e.view_number == o;
              });
              t.rollover_running.splice(p, 1);
            }
          }),
          (t.init_rollover_timing_callback = function () {
            var e = t.rollover_running.slice(0);
            _.each(e, function (e, a, r) {
              t.trigger_rollover(e);
            }),
              (t.init_rollover_timing_fired = !0);
          }),
          e(document).on("js_event_wpv_pagination_completed", function (e, a) {
            if (
              "rollover" == t.get_paged_view(a.view_unique_id).type &&
              !i.hasOwnProperty(a.view_unique_id)
            ) {
              var r = _.findIndex(t.rollover_running, function (e) {
                return e.view_number == a.view_unique_id;
              });
              t.trigger_rollover(t.rollover_running[r]);
            }
          }),
          e(document).on(
            "js_event_wpv_parametric_search_results_updated",
            function (e, a) {
              if (
                "rollover" == t.get_paged_view(a.view_unique_id).type &&
                !i.hasOwnProperty(a.view_unique_id)
              ) {
                var r = _.findIndex(t.rollover_running, function (e) {
                  return e.view_number == a.view_unique_id;
                });
                t.trigger_rollover(t.rollover_running[r]);
              }
            }
          ),
          e(document).on("mouseenter", ".js-wpv-view-layout", function () {
            var a = e(this).data("viewnumber");
            if ("enabled" == t.get_paged_view(a).pause_on_hover) {
              var r = { view_number: a };
              t.rollover_paused.push(r);
            }
          }),
          e(document).on("mouseleave", ".js-wpv-view-layout", function () {
            var a = e(this).data("viewnumber"),
              r = _.findIndex(t.rollover_paused, function (e) {
                return e.view_number == a;
              });
            t.rollover_paused.splice(r, 1);
          }),
          (t.init_preload_images = function (t) {
            e(".js-wpv-layout-preload-images", t).css("visibility", "hidden"),
              e(".js-wpv-layout-preload-images", t).each(function () {
                var t = [],
                  a = e(this),
                  r = a.find("img");
                r.length < 1
                  ? a.css("visibility", "visible")
                  : (r
                      .one("load", function () {
                        t.push(e(this).attr("src")),
                          t.length === r.length &&
                            a.css("visibility", "visible");
                      })
                      .each(function () {
                        this.complete && e(this).trigger("load");
                      }),
                    setTimeout(function () {
                      a.css("visibility", "visible");
                    }, 3e3));
              });
          }),
          (t.init_preload_pages = function (a) {
            e(".js-wpv-layout-preload-pages", a).each(function () {
              var a = e(this).data("viewnumber"),
                r = t.get_paged_view(a),
                i = parseInt(r.max_pages, 10),
                n = parseInt(r.preload_reach, 10) + 1;
              t.pagination_preload_pages({
                view_number: a,
                cache_pages: "disabled",
                preload_pages: "enabled",
                page: 1,
                max_reach: n,
                max_pages: i,
              });
            });
          }),
          (t.init_pagination_button_state = function () {
            e(".pagination li:not(.disabled,.active)")
              .has("span")
              .addClass("disabled"),
              e(".pagination li.page-item:empty").remove();
          }),
          (t.init = function () {
            t.init_effects(),
              t.init_effects_conditions(),
              t.init_effects_spinner();
            var a = e("html");
            t.init_paged_views(a),
              t.init_preload_images(a),
              t.init_preload_pages(a),
              t.init_pagination_button_state();
          }),
          t.init();
      }),
      (r.ViewParametricSearch = function (e) {
        var t = this;
        (t.manage_update_results = function (t) {
          if ("" !== t.ajax_before) {
            var a = window[t.ajax_before];
            "function" == typeof a && a(t.view_num);
          }
          var r = {};
          (r.view_unique_id = t.view_num),
            (r.permalink = t.permalink),
            t.layout.fadeOut(200, function () {
              t.layout
                .html(t.new_layout.html())
                .attr("data-pagination", t.new_layout.attr("data-pagination"))
                .data("pagination", t.new_layout.data("pagination"))
                .fadeIn("fast", function () {
                  var a = window[t.ajax_after];
                  "function" == typeof a && a(t.view_num),
                    (r.layout = t.layout),
                    e(document).trigger(
                      "js_event_wpv_parametric_search_results_updated",
                      [r]
                    );
                });
            });
        }),
          (t.manage_changed_form = function (a) {
            var n,
              o,
              s,
              d,
              _,
              p,
              l,
              u = a.form,
              v = a.view_unique_id,
              c = e("#wpv-view-layout-" + v),
              w = u.find(".js-wpv-filter-data-for-this-form"),
              f = w.data("ajaxprebefore"),
              g = "full",
              m = e(".js-wpv-filter-form-" + v).not(u),
              h = "both",
              y = u
                .find(".js-wpv-dps-spinner")
                .add(m.find(".js-wpv-dps-spinner")),
              b = y.length;
            if (
              ((data_for_events = {}),
              (data_for_manage_updated_results = {}),
              (data_for_events.view_unique_id = v),
              (data_for_manage_updated_results.view_num = v),
              (data_for_manage_updated_results.ajax_before =
                w.data("ajaxbefore")),
              (data_for_manage_updated_results.ajax_after =
                w.data("ajaxafter")),
              u.hasClass("js-wpv-form-only") && (g = "form"),
              a.update_form)
            )
              if (m.length > 0)
                if (
                  ((n = m.not(".js-wpv-form-full")),
                  (o = m.not(".js-wpv-form-only")),
                  "form" == g)
                ) {
                  if (
                    ((h = o.length > 0 || a.update_results ? "both" : "form"),
                    a.update_results)
                  ) {
                    if ("" !== f) "function" == typeof (j = window[f]) && j(v);
                    e(document).trigger(
                      "js_event_wpv_parametric_search_started",
                      [data_for_events]
                    );
                  }
                  b && e(y).fadeIn("fast"),
                    (i[v] = !0),
                    r.view_frontend_utils
                      .get_updated_query_results(v, 1, u, h)
                      .done(function (i) {
                        i.success &&
                          ((s = e("<div></div>").append(i.data.form)),
                          (_ = e("<div></div>").append(i.data.full)),
                          (d = s.find(".js-wpv-filter-form-" + v)),
                          (p = _.find(".js-wpv-filter-form-" + v)),
                          (l = _.find(".js-wpv-view-layout-" + v)),
                          u.html(d.html()),
                          r.view_frontend_utils.destroy_frontend_datepicker(),
                          r.view_frontend_utils.clone_form(u, n),
                          o.each(function () {
                            e(this).html(p.html());
                          }),
                          (data_for_events.view_changed_form = u),
                          (data_for_events.view_changed_form_additional_forms_only =
                            n),
                          (data_for_events.view_changed_form_additional_forms_full =
                            o),
                          e(document).trigger(
                            "js_event_wpv_parametric_search_form_updated",
                            [data_for_events]
                          ),
                          a.update_results &&
                            ((data_for_manage_updated_results.layout = c),
                            (data_for_manage_updated_results.new_layout = l),
                            (data_for_manage_updated_results.permalink =
                              i.data.parametric_permalink),
                            t.manage_update_results(
                              data_for_manage_updated_results
                            )),
                          y.hide());
                      });
                } else {
                  if (
                    ((h = n.length > 0 ? "both" : "full"), a.update_results)
                  ) {
                    if ("" !== f) "function" == typeof (j = window[f]) && j(v);
                    e(document).trigger(
                      "js_event_wpv_parametric_search_started",
                      [data_for_events]
                    );
                  }
                  b && e(y).fadeIn("fast"),
                    (i[v] = !0),
                    r.view_frontend_utils
                      .get_updated_query_results(v, 1, u, h)
                      .done(function (i) {
                        i.success &&
                          ((s = e("<div></div>").append(i.data.form)),
                          (_ = e("<div></div>").append(i.data.full)),
                          (d = s.find(".js-wpv-filter-form-" + v)),
                          (p = _.find(".js-wpv-filter-form-" + v)),
                          (l = _.find(".js-wpv-view-layout-" + v)),
                          u.html(p.html()),
                          r.view_frontend_utils.destroy_frontend_datepicker(),
                          r.view_frontend_utils.clone_form(u, o),
                          n.each(function () {
                            e(this).html(d.html());
                          }),
                          (data_for_events.view_changed_form = u),
                          (data_for_events.view_changed_form_additional_forms_only =
                            n),
                          (data_for_events.view_changed_form_additional_forms_full =
                            o),
                          e(document).trigger(
                            "js_event_wpv_parametric_search_form_updated",
                            [data_for_events]
                          ),
                          a.update_results &&
                            ((data_for_manage_updated_results.layout = c),
                            (data_for_manage_updated_results.new_layout = l),
                            (data_for_manage_updated_results.permalink =
                              i.data.parametric_permalink),
                            t.manage_update_results(
                              data_for_manage_updated_results
                            )),
                          y.hide());
                      });
                }
              else if ("form" == g) {
                if (
                  ((h = a.update_results ? "both" : "form"), a.update_results)
                ) {
                  if ("" !== f) "function" == typeof (j = window[f]) && j(v);
                  e(document).trigger(
                    "js_event_wpv_parametric_search_started",
                    [data_for_events]
                  );
                }
                b && e(y).fadeIn("fast"),
                  (i[v] = !0),
                  r.view_frontend_utils
                    .get_updated_query_results(v, 1, u, h)
                    .done(function (r) {
                      r.success &&
                        ((s = e("<div></div>").append(r.data.form)),
                        (_ = e("<div></div>").append(r.data.full)),
                        (d = s.find(".js-wpv-filter-form-" + v)),
                        (l = _.find(".js-wpv-view-layout-" + v)),
                        u.html(d.html()),
                        (data_for_events.view_changed_form = u),
                        (data_for_events.view_changed_form_additional_forms_only =
                          n),
                        (data_for_events.view_changed_form_additional_forms_full =
                          o),
                        e(document).trigger(
                          "js_event_wpv_parametric_search_form_updated",
                          [data_for_events]
                        ),
                        a.update_results &&
                          ((data_for_manage_updated_results.layout = c),
                          (data_for_manage_updated_results.new_layout = l),
                          (data_for_manage_updated_results.permalink =
                            r.data.parametric_permalink),
                          t.manage_update_results(
                            data_for_manage_updated_results
                          )),
                        y.hide());
                    });
              } else {
                if (a.update_results) {
                  if ("" !== f) "function" == typeof (j = window[f]) && j(v);
                  e(document).trigger(
                    "js_event_wpv_parametric_search_started",
                    [data_for_events]
                  );
                }
                b && e(y).fadeIn("fast"),
                  (i[v] = !0),
                  r.view_frontend_utils
                    .get_updated_query_results(v, 1, u, "full")
                    .done(function (r) {
                      r.success &&
                        ((_ = e("<div></div>").append(r.data.full)),
                        (p = _.find(".js-wpv-filter-form-" + v)),
                        (l = _.find(".js-wpv-view-layout-" + v)),
                        u.html(p.html()),
                        (data_for_events.view_changed_form = u),
                        (data_for_events.view_changed_form_additional_forms_only =
                          n),
                        (data_for_events.view_changed_form_additional_forms_full =
                          o),
                        e(document).trigger(
                          "js_event_wpv_parametric_search_form_updated",
                          [data_for_events]
                        ),
                        a.update_results &&
                          ((data_for_manage_updated_results.layout = c),
                          (data_for_manage_updated_results.new_layout = l),
                          (data_for_manage_updated_results.permalink =
                            r.data.parametric_permalink),
                          t.manage_update_results(
                            data_for_manage_updated_results
                          )),
                        y.hide());
                    });
              }
            else if (m.length > 0) {
              if (
                ((n = m.not(".js-wpv-form-full")),
                (o = m.not(".js-wpv-form-only")),
                "form" == g)
              )
                if (
                  (r.view_frontend_utils.destroy_frontend_datepicker(),
                  r.view_frontend_utils.clone_form(u, n),
                  o.length > 0 || a.update_results)
                ) {
                  if (a.update_results) {
                    if ("" !== f) "function" == typeof (j = window[f]) && j(v);
                    e(document).trigger(
                      "js_event_wpv_parametric_search_started",
                      [data_for_events]
                    );
                  }
                  b && e(y).fadeIn("fast"),
                    (i[v] = !0),
                    r.view_frontend_utils
                      .get_updated_query_results(v, 1, u, "full")
                      .done(function (r) {
                        r.success &&
                          ((_ = e("<div></div>").append(r.data.full)),
                          (p = _.find(".js-wpv-filter-form-" + v)),
                          (l = _.find(".js-wpv-view-layout-" + v)),
                          o.each(function () {
                            e(this).html(p.html());
                          }),
                          (data_for_events.view_changed_form = u),
                          (data_for_events.view_changed_form_additional_forms_only =
                            n),
                          (data_for_events.view_changed_form_additional_forms_full =
                            o),
                          e(document).trigger(
                            "js_event_wpv_parametric_search_form_updated",
                            [data_for_events]
                          ),
                          a.update_results &&
                            ((data_for_manage_updated_results.layout = c),
                            (data_for_manage_updated_results.new_layout = l),
                            (data_for_manage_updated_results.permalink =
                              r.data.parametric_permalink),
                            t.manage_update_results(
                              data_for_manage_updated_results
                            )),
                          y.hide());
                      });
                } else
                  (data_for_events.view_changed_form = u),
                    (data_for_events.view_changed_form_additional_forms_only =
                      n),
                    (data_for_events.view_changed_form_additional_forms_full =
                      o),
                    e(document).trigger(
                      "js_event_wpv_parametric_search_form_updated",
                      [data_for_events]
                    );
              else if (
                (r.view_frontend_utils.destroy_frontend_datepicker(),
                r.view_frontend_utils.clone_form(u, o),
                r.view_frontend_utils.render_frontend_datepicker(),
                r.view_frontend_utils.renderPriceFilter(),
                n.length > 0 || a.update_results)
              ) {
                if (((h = n.length > 0 ? "both" : "full"), a.update_results)) {
                  if ("" !== f) "function" == typeof (j = window[f]) && j(v);
                  e(document).trigger(
                    "js_event_wpv_parametric_search_started",
                    [data_for_events]
                  );
                }
                b && e(y).fadeIn("fast"),
                  (i[v] = !0),
                  r.view_frontend_utils
                    .get_updated_query_results(v, 1, u, h)
                    .done(function (r) {
                      r.success &&
                        ((s = e("<div></div>").append(r.data.form)),
                        (_ = e("<div></div>").append(r.data.full)),
                        (d = s.find(".js-wpv-filter-form-" + v)),
                        (l = _.find(".js-wpv-view-layout-" + v)),
                        n.each(function () {
                          e(this).html(d.html());
                        }),
                        (data_for_events.view_changed_form = u),
                        (data_for_events.view_changed_form_additional_forms_only =
                          n),
                        (data_for_events.view_changed_form_additional_forms_full =
                          o),
                        e(document).trigger(
                          "js_event_wpv_parametric_search_form_updated",
                          [data_for_events]
                        ),
                        a.update_results &&
                          ((data_for_manage_updated_results.layout = c),
                          (data_for_manage_updated_results.new_layout = l),
                          (data_for_manage_updated_results.permalink =
                            r.data.parametric_permalink),
                          t.manage_update_results(
                            data_for_manage_updated_results
                          )),
                        y.hide());
                    });
              }
            } else if (a.update_results) {
              var j;
              if ("" !== f) "function" == typeof (j = window[f]) && j(v);
              e(document).trigger("js_event_wpv_parametric_search_started", [
                data_for_events,
              ]),
                b && e(y).fadeIn("fast"),
                (i[v] = !0),
                r.view_frontend_utils
                  .get_updated_query_results(v, 1, u, "full")
                  .done(function (a) {
                    a.success &&
                      (e(document).trigger(
                        "js_event_wpv_parametric_search_form_updated_without_data",
                        []
                      ),
                      (_ = e("<div></div>").append(a.data.full)),
                      (l = _.find(".js-wpv-view-layout-" + v)),
                      (data_for_manage_updated_results.layout = c),
                      (data_for_manage_updated_results.new_layout = l),
                      (data_for_manage_updated_results.permalink =
                        a.data.parametric_permalink),
                      t.manage_update_results(data_for_manage_updated_results),
                      y.hide());
                  });
            }
          }),
          (t.extend_wpv_parametric_search_triggered_data = function (t) {
            var a = e.extend(
                {},
                { force_form_update: !1, force_results_update: !1 },
                t
              ),
              i = e("#wpv-view-layout-" + a.view_unique_id);
            return (
              0 == a.force_form_update &&
                (1 == a.force_results_update ||
                  a.form.hasClass("js-wpv-ajax-results-enabled")) &&
                _.has(r.view_pagination.paged_views, a.view_unique_id) &&
                _.has(
                  r.view_pagination.paged_views[a.view_unique_id],
                  "has_controls_in_form"
                ) &&
                "enabled" ==
                  r.view_pagination.paged_views[a.view_unique_id]
                    .has_controls_in_form &&
                (a.force_form_update = !0),
              (a.update_form =
                a.force_form_update || a.form.hasClass("js-wpv-dps-enabled")),
              (a.update_results =
                i.length > 0 &&
                (a.force_results_update ||
                  a.form.hasClass("js-wpv-ajax-results-enabled"))),
              a
            );
          }),
          e(document).on("click", ".js-wpv-date-display", function () {
            var t = e(this).data("param");
            e(this)
              .closest("form")
              .find(".js-wpv-date-front-end-" + t)
              .datepicker("show");
          }),
          e(document).on("click", ".js-wpv-date-front-end-clear", function (t) {
            t.preventDefault();
            var a = e(this),
              r = a.data("param"),
              i = a.closest("form");
            i.find(".js-wpv-date-param-" + r).html(""),
              i.find(".js-wpv-date-front-end-" + r).val(""),
              a.hide(),
              i
                .find(".js-wpv-date-param-" + r + "-value")
                .val("")
                .trigger("change");
          }),
          e(document).on(
            "change",
            ".js-wpv-post-relationship-update",
            function () {
              var a,
                r = e(this),
                i = r.closest("form"),
                n = i.data("viewnumber"),
                o = e(".js-wpv-filter-form-" + n).not(i),
                s = r.data("currentposttype"),
                d = i
                  .find(".js-wpv-" + s + "-watch")
                  .add(o.find(".js-wpv-" + s + "-watch")),
                _ = d.length;
              if (_)
                for (a = 0; a < _; a++)
                  e(d[a])
                    .attr("disabled", !0)
                    .removeAttr("checked")
                    .removeAttr("selected")
                    .not(":button, :submit, :reset, :hidden, :radio, :checkbox")
                    .val("0");
              var p = { view_unique_id: n, form: i, force_form_update: !0 };
              (p = t.extend_wpv_parametric_search_triggered_data(p)),
                e(document).trigger(
                  "js_event_wpv_parametric_search_triggered",
                  [p]
                );
            }
          ),
          e(document).on("change", ".js-wpv-filter-trigger", function () {
            var a = e(this).closest("form"),
              r = { view_unique_id: a.data("viewnumber"), form: a };
            (r = t.extend_wpv_parametric_search_triggered_data(r)),
              e(document).trigger("js_event_wpv_parametric_search_triggered", [
                r,
              ]);
          }),
          e(document).on(
            "click",
            ".js-wpv-ajax-results-enabled .js-wpv-submit-trigger, .js-wpv-ajax-results-submit-enabled .js-wpv-submit-trigger",
            function (a) {
              a.preventDefault();
              var r = e(this).closest("form"),
                i = {
                  view_unique_id: r.data("viewnumber"),
                  form: r,
                  force_form_update: !1,
                  force_results_update: !0,
                };
              (i = t.extend_wpv_parametric_search_triggered_data(i)),
                e(document).trigger(
                  "js_event_wpv_parametric_search_triggered",
                  [i]
                );
            }
          ),
          e(document).on(
            "keypress",
            ".js-wpv-ajax-results-enabled .js-wpv-filter-trigger-delayed, .js-wpv-ajax-results-submit-enabled .js-wpv-filter-trigger-delayed",
            function (a) {
              if (13 == a.which) {
                a.preventDefault();
                var r = e(this).closest("form"),
                  i = {
                    view_unique_id: r.data("viewnumber"),
                    form: r,
                    force_results_update: !0,
                  };
                (i = t.extend_wpv_parametric_search_triggered_data(i)),
                  e(document).trigger(
                    "js_event_wpv_parametric_search_triggered",
                    [i]
                  );
              }
            }
          ),
          e(document).on("click", ".js-wpv-reset-trigger", function (a) {
            a.preventDefault();
            var i,
              n,
              o,
              s = e(this).closest("form"),
              d = s.data("viewnumber"),
              _ = e(".js-wpv-filter-form-" + d).not(s),
              p = s.attr("action"),
              l = !1,
              u = !1;
            if (s.hasClass("js-wpv-form-only")) {
              if (
                ((n = (i = s.find("input, select").add(_.find("input, select")))
                  .length),
                (l =
                  s.hasClass("js-wpv-dps-enabled") ||
                  s.find(".js-wpv-post-relationship-update").length > 0),
                (s.hasClass("js-wpv-ajax-results-enabled") ||
                  s.hasClass("js-wpv-ajax-results-submit-enabled")) &&
                  (u = !0),
                n)
              )
                for (o = 0; o < n; o++)
                  e(i[o]).hasClass("js-wpv-keep-on-clear") ||
                    e(i[o])
                      .attr("disabled", l)
                      .removeAttr("checked")
                      .removeAttr("selected")
                      .not(
                        ":button, :submit, :reset, :hidden, :radio, :checkbox"
                      )
                      .val("");
              var v = {
                view_unique_id: d,
                form: s,
                force_form_update: l,
                force_results_update: u,
              };
              (v = t.extend_wpv_parametric_search_triggered_data(v)),
                !u && e("#wpv-view-layout-" + s.data("viewnumber")).length > 0
                  ? (window.location.href = p)
                  : e(document).trigger(
                      "js_event_wpv_parametric_search_triggered",
                      [v]
                    );
            } else if (
              s.hasClass("js-wpv-ajax-results-enabled") ||
              s.hasClass("js-wpv-ajax-results-submit-enabled")
            ) {
              if (
                (n = (i = s.find("input, select").add(_.find("input, select")))
                  .length)
              )
                for (o = 0; o < n; o++)
                  e(i[o]).hasClass("js-wpv-keep-on-clear") ||
                    e(i[o])
                      .attr("disabled", !0)
                      .removeAttr("checked")
                      .removeAttr("selected")
                      .not(
                        ":button, :submit, :reset, :hidden, :radio, :checkbox"
                      )
                      .val("");
              v = {
                view_unique_id: d,
                form: s,
                force_form_update: !0,
                force_results_update: !0,
              };
              (v = t.extend_wpv_parametric_search_triggered_data(v)),
                e(document).trigger(
                  "js_event_wpv_parametric_search_triggered",
                  [v]
                );
            } else
              window.location.href = r.view_frontend_utils.updateUrlQuery(
                "wpv_view_count",
                null,
                p
              );
          }),
          e(document).on(
            "js_event_wpv_parametric_search_triggered",
            function (e, a) {
              t.manage_changed_form(a);
            }
          ),
          e(document).on(
            "change",
            ".js-wpv-filter-trigger, .js-wpv-filter-trigger-delayed",
            function () {
              var t = e(this).closest("form").data("viewnumber");
              i[t] = !0;
            }
          ),
          e(document).on(
            "js_event_wpv_parametric_search_started",
            function (e, t) {}
          ),
          e(document).on(
            "js_event_wpv_parametric_search_form_updated",
            function (e, t) {
              r.view_frontend_utils.render_frontend_datepicker(),
                r.view_frontend_utils.renderPriceFilter();
            }
          ),
          e(document).on(
            "js_event_wpv_parametric_search_results_updated",
            function (e, t) {
              r.view_frontend_utils.render_frontend_media_shortcodes(t.layout);
            }
          ),
          (t.init = function () {}),
          t.init();
      }),
      jQuery(function (e) {
        (r.view_frontend_utils = new r.ViewFrontendUtils(e)),
          (r.view_sorting = new r.ViewSorting(e)),
          (r.view_pagination = new r.ViewPagination(e)),
          (r.view_parametric_search = new r.ViewParametricSearch(e));
      });
  },
});
