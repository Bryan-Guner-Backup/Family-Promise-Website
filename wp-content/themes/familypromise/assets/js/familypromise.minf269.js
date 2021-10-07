"use strict";
var common = (function (t) {
  return {
    ready: function () {
      t(".et-social-icon a").attr("target", "_blank"),
        t("body").addClass("loaded"),
        t("#mobile_menu li.menu-item-has-children").addClass("collapsed"),
        t("#mobile_menu > li.menu-item-has-children").append(
          '<a class="expand-sub" href="#">2</a>'
        ),
        t("a.expand-sub").on("click", function () {
          return (
            t(this)
              .parent("li.menu-item-has-children")
              .toggleClass("collapsed"),
            !1
          );
        }),
        "#wpv-view-layout-1621".length &&
          (t(".hp-card-other .text-holder p").each(function () {
            var e = t(this).height();
            t(this)
              .parent()
              .css("bottom", -1 * e - 16);
          }),
          t(window).resize(function () {
            t(".hp-card-other .text-holder p").each(function () {
              var e = t(this).height();
              t(this)
                .parent()
                .css("bottom", -1 * e - 16);
            });
          })),
        t("body :not(script)")
          .contents()
          .filter(function () {
            return 3 === this.nodeType;
          })
          .replaceWith(function () {
            return this.nodeValue.replace(/[™®©]/g, "<sup>$&</sup>");
          }),
        t("#top-menu-nav ul#top-menu > li").addClass("venitian"),
        t("#et-secondary-menu").prepend(t("#et_top_search")),
        t(".fp-latest form .form-group ul.categorychecklist input").on(
          "change",
          function () {
            t(this).is(":checked")
              ? t(this).parent().addClass("active")
              : t(this).parent().removeClass("active");
          }
        ),
        t(".fp-latest form .form-group ul.categorychecklist input").trigger(
          "change"
        ),
        t("select#state-jump").on("change", function () {
          return (
            t("html, body").animate(
              { scrollTop: t(t(this).val()).offset().top - 175 },
              600
            ),
            !1
          );
        }),
        t(".map-map a.listing-hider").on("click", function () {
          var e = t(this).closest(".map-holder");
          return (
            e.hasClass("search-closed")
              ? e.removeClass("search-closed")
              : e.addClass("search-closed"),
            !1
          );
        }),
        t(".map-holder").length &&
          document.location.search.length &&
          (t([document.documentElement, document.body]).animate(
            { scrollTop: t(".map-holder").offset().top - 145 },
            1500
          ),
          t(".map-map a.listing-hider").click()),
        0 < t(".et_pb_fp_person").length &&
          t(
            ".et_pb_fp_person:not(.et_clickable) .et_pb_module_inner > a"
          ).magnificPopup({
            removalDelay: 300,
            type: "inline",
            mainClass: "mfp-3d-unfold",
            fixedContentPos: !1,
          });
    },
  };
})(jQuery);
function fp_show_map_results() {
  var e = jQuery(".map-holder");
  e.hasClass("search-closed") && e.removeClass("search-closed");
}
function add_floating_labels() {
  jQuery(".gform_body .gfield").each(function () {
    var e;
    jQuery(this).find(".floating-label").length ||
      ((e =
        '<span class="floating-label">' +
        jQuery(this).find(".gfield_label").html() +
        "</span>"),
      jQuery(this)
        .find(
          ".ginput_container_text, .ginput_container_number, .ginput_container_phone, .ginput_container_email, .ginput_container_select, .ginput_container_textarea, .ginput_container_product_price"
        )
        .not("ginput_container_address")
        .append(e));
  }),
    jQuery(".gform_body .gfield .ginput_container_address > span").each(
      function () {
        var e =
          '<span class="floating-label">' +
          jQuery(this).find("label").html() +
          "</span>";
        jQuery(this).append(e);
      }
    ),
    jQuery(".gform_body .gfield .floating-label").on("click", function () {
      jQuery(this).prev("input").focus();
    });
}
jQuery(common.ready);
