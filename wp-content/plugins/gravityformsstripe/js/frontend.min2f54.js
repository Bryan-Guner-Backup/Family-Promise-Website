(window.GFStripe = null),
  (function (c) {
    GFStripe = function (e) {
      for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
      (this.form = null),
        (this.activeFeed = null),
        (this.GFCCField = null),
        (this.stripeResponse = null),
        (this.hasPaymentIntent = !1),
        (this.init = function () {
          if (
            this.isCreditCardOnPage() ||
            ("stripe.js" !== this.stripe_payment &&
              ("elements" !== this.stripe_payment ||
                c("#gf_stripe_response").length))
          ) {
            var n = this,
              d = null,
              o = !1,
              i = !1,
              a = this.apiKey;
            switch (
              ((this.form = c("#gform_" + this.formId)),
              (this.GFCCField = c(
                "#input_" + this.formId + "_" + this.ccFieldId + "_1"
              )),
              gform.addAction(
                "gform_frontend_feeds_evaluated",
                function (e, t) {
                  if (t === n.formId) {
                    (d = null), (i = o = !1);
                    for (var r = 0; r < Object.keys(e).length; r++)
                      if (
                        "gravityformsstripe" === e[r].addonSlug &&
                        e[r].isActivated
                      ) {
                        o = !0;
                        for (var s = 0; s < Object.keys(n.feeds).length; s++)
                          if (n.feeds[s].feedId === e[r].feedId) {
                            d = n.feeds[s];
                            break;
                          }
                        switch (
                          ((a = d.hasOwnProperty("apiKey")
                            ? d.apiKey
                            : n.apiKey),
                          (n.activeFeed = d),
                          n.stripe_payment)
                        ) {
                          case "elements":
                            (_ = Stripe(a)),
                              (p = _.elements()),
                              (i = "" !== d.address_zip),
                              null != g &&
                                g.hasOwnProperty("_destroyed") &&
                                !1 === g._destroyed &&
                                g.destroy(),
                              n.GFCCField.next(".validation_message").length &&
                                n.GFCCField.next(
                                  ".validation_message"
                                ).remove(),
                              (g = p.create("card", {
                                classes: n.cardClasses,
                                style: n.cardStyle,
                                hidePostalCode: i,
                              })),
                              c(".gform_stripe_requires_action").length
                                ? (2 ===
                                  c(".ginput_container_creditcard > div").length
                                    ? (c(
                                        ".ginput_container_creditcard > div:last"
                                      ).hide(),
                                      c(
                                        ".ginput_container_creditcard > div:first"
                                      ).html(
                                        "<p><strong>" +
                                          gforms_stripe_frontend_strings.requires_action +
                                          "</strong></p>"
                                      ))
                                    : c(".ginput_container_creditcard").html(
                                        "<p><strong>" +
                                          gforms_stripe_frontend_strings.requires_action +
                                          "</strong></p>"
                                      ),
                                  n.scaActionHandler(_, t))
                                : (g.mount("#" + n.GFCCField.attr("id")),
                                  g.on("change", function (e) {
                                    n.displayStripeCardError(e);
                                  }));
                            break;
                          case "stripe.js":
                            Stripe.setPublishableKey(a);
                        }
                        break;
                      }
                    o ||
                      ("elements" === n.stripe_payment &&
                        (null != p && g === p.getElement("card") && g.destroy(),
                        n.GFCCField.next(".validation_message").length ||
                          n.GFCCField.after(
                            '<div class="gfield_description validation_message">' +
                              gforms_stripe_frontend_strings.no_active_frontend_feed +
                              "</div>"
                          ),
                        wp.a11y.speak(
                          gforms_stripe_frontend_strings.no_active_frontend_feed
                        )),
                      n.resetStripeStatus(n.form, t, n.isLastPage()),
                      (a = n.apiKey),
                      (n.activeFeed = null));
                  }
                }
              ),
              this.stripe_payment)
            ) {
              case "elements":
                var _ = null,
                  p = null,
                  g = null,
                  l = !1;
                c("#gf_stripe_response").length &&
                  ((this.stripeResponse = JSON.parse(
                    c("#gf_stripe_response").val()
                  )),
                  this.stripeResponse.hasOwnProperty("client_secret") &&
                    (this.hasPaymentIntent = !0));
            }
            c("#gform_" + this.formId).on("submit", function (e) {
              if (
                !(
                  !o ||
                  c(this).data("gfstripesubmitting") ||
                  1 == c("#gform_save_" + n.formId).val() ||
                  (!n.isLastPage() && "elements" !== n.stripe_payment) ||
                  gformIsHidden(n.GFCCField) ||
                  n.maybeHitRateLimits() ||
                  n.invisibleCaptchaPending()
                )
              )
                switch (
                  (e.preventDefault(),
                  c(this).data("gfstripesubmitting", !0),
                  n.maybeAddSpinner(),
                  n.stripe_payment)
                ) {
                  case "elements":
                    (n.form = c(this)),
                      "form_total" === d.paymentAmount &&
                        (gform.addFilter(
                          "gform_product_total",
                          function (e, t) {
                            return (window["gform_stripe_amount_" + t] = e);
                          },
                          51
                        ),
                        gformCalculateTotalPrice(n.formId)),
                      n.updatePaymentAmount();
                    var t = parseInt(
                        c("#gform_source_page_number_" + n.formId).val(),
                        10
                      ),
                      r = parseInt(
                        c("#gform_target_page_number_" + n.formId).val(),
                        10
                      );
                    if (
                      (((r < t && 0 !== r) ||
                        0 === window["gform_stripe_amount_" + n.formId]) &&
                        (l = !0),
                      (n.isLastPage() && !n.isCreditCardOnPage()) ||
                        gformIsHidden(n.GFCCField) ||
                        l)
                    )
                      return void c(this).submit();
                    "product" === d.type
                      ? n.createPaymentMethod(_, g)
                      : n.createToken(_, g);
                    break;
                  case "stripe.js":
                    var s = c(this),
                      i = "input_" + n.formId + "_" + n.ccFieldId + "_",
                      a = {
                        number: s.find("#" + i + "1").val(),
                        exp_month: s.find("#" + i + "2_month").val(),
                        exp_year: s.find("#" + i + "2_year").val(),
                        cvc: s.find("#" + i + "3").val(),
                        name: s.find("#" + i + "5").val(),
                      };
                    (n.form = s),
                      Stripe.card.createToken(a, function (e, t) {
                        n.responseHandler(e, t);
                      });
                }
            });
          }
        }),
        (this.getBillingAddressMergeTag = function (e) {
          return "" === e ? "" : "{:" + e + ":value}";
        }),
        (this.responseHandler = function (e, t) {
          for (
            var r = this.form,
              s = "input_" + this.formId + "_" + this.ccFieldId + "_",
              i = ["1", "2_month", "2_year", "3", "5"],
              a = 0;
            a < i.length;
            a++
          ) {
            var n = r.find("#" + s + i[a]);
            if ("1" == i[a]) {
              var d = c.trim(n.val()),
                o = gformFindCardType(d);
              void 0 !== this.cardLabels[o] && (o = this.cardLabels[o]),
                r.append(
                  c(
                    '<input type="hidden" name="stripe_credit_card_last_four" />'
                  ).val(d.slice(-4))
                ),
                r.append(
                  c(
                    '<input type="hidden" name="stripe_credit_card_type" />'
                  ).val(o)
                );
            }
          }
          r.append(
            c('<input type="hidden" name="stripe_response" />').val(c.toJSON(t))
          ),
            r.submit();
        }),
        (this.elementsResponseHandler = function (e) {
          var t = this.form,
            r = this,
            s = this.activeFeed,
            i = gform.applyFilters(
              "gform_stripe_currency",
              this.currency,
              this.formId
            ),
            a =
              0 === gf_global.gf_currency_config.decimals
                ? window["gform_stripe_amount_" + this.formId]
                : gformRoundPrice(
                    100 * window["gform_stripe_amount_" + this.formId]
                  );
          if (e.error)
            return (
              this.displayStripeCardError(e),
              void this.resetStripeStatus(t, this.formId, this.isLastPage())
            );
          if (this.hasPaymentIntent)
            if ("product" === s.type)
              e.hasOwnProperty("paymentMethod")
                ? (c("#gf_stripe_credit_card_last_four").val(
                    e.paymentMethod.card.last4
                  ),
                  c("#stripe_credit_card_type").val(e.paymentMethod.card.brand),
                  c.ajax({
                    async: !1,
                    url: gforms_stripe_frontend_strings.ajaxurl,
                    dataType: "json",
                    method: "POST",
                    data: {
                      action: "gfstripe_update_payment_intent",
                      nonce:
                        gforms_stripe_frontend_strings.create_payment_intent_nonce,
                      payment_intent: e.id,
                      payment_method: e.paymentMethod,
                      currency: i,
                      amount: a,
                      feed_id: s.feedId,
                    },
                    success: function (e) {
                      e.success
                        ? (c("#gf_stripe_response").val(c.toJSON(e.data)),
                          t.submit())
                        : ((e.error = e.data),
                          delete e.data,
                          r.displayStripeCardError(e),
                          r.resetStripeStatus(t, r.formId, r.isLastPage()));
                    },
                  }))
                : e.hasOwnProperty("amount") && t.submit();
            else {
              var n = JSON.parse(c("#gf_stripe_response").val());
              (n.updatedToken = e.token.id),
                c("#gf_stripe_response").val(c.toJSON(n)),
                t.append(
                  c(
                    '<input type="hidden" name="stripe_credit_card_last_four" id="gf_stripe_credit_card_last_four" />'
                  ).val(e.token.card.last4)
                ),
                t.append(
                  c(
                    '<input type="hidden" name="stripe_credit_card_type" id="stripe_credit_card_type" />'
                  ).val(e.token.card.brand)
                ),
                t.submit();
            }
          else
            c("#gf_stripe_response").length
              ? c("#gf_stripe_response").val(c.toJSON(e))
              : t.append(
                  c(
                    '<input type="hidden" name="stripe_response" id="gf_stripe_response" />'
                  ).val(c.toJSON(e))
                ),
              "product" === s.type
                ? (t.append(
                    c(
                      '<input type="hidden" name="stripe_credit_card_last_four" id="gf_stripe_credit_card_last_four" />'
                    ).val(e.paymentMethod.card.last4)
                  ),
                  t.append(
                    c(
                      '<input type="hidden" name="stripe_credit_card_type" id="stripe_credit_card_type" />'
                    ).val(e.paymentMethod.card.brand)
                  ),
                  c.ajax({
                    async: !1,
                    url: gforms_stripe_frontend_strings.ajaxurl,
                    dataType: "json",
                    method: "POST",
                    data: {
                      action: "gfstripe_create_payment_intent",
                      nonce:
                        gforms_stripe_frontend_strings.create_payment_intent_nonce,
                      payment_method: e.paymentMethod,
                      currency: i,
                      amount: a,
                      feed_id: s.feedId,
                    },
                    success: function (e) {
                      e.success
                        ? (c("#gf_stripe_response").length
                            ? c("#gf_stripe_response").val(c.toJSON(e.data))
                            : t.append(
                                c(
                                  '<input type="hidden" name="stripe_response" id="gf_stripe_response" />'
                                ).val(c.toJSON(e.data))
                              ),
                          t.submit())
                        : ((e.error = e.data),
                          delete e.data,
                          r.displayStripeCardError(e),
                          r.resetStripeStatus(t, r.formId, r.isLastPage()));
                    },
                  }))
                : (t.append(
                    c(
                      '<input type="hidden" name="stripe_credit_card_last_four" id="gf_stripe_credit_card_last_four" />'
                    ).val(e.token.card.last4)
                  ),
                  t.append(
                    c(
                      '<input type="hidden" name="stripe_credit_card_type" id="stripe_credit_card_type" />'
                    ).val(e.token.card.brand)
                  ),
                  t.submit());
        }),
        (this.scaActionHandler = function (t, r) {
          if (!c("#gform_" + r).data("gfstripescaauth")) {
            c("#gform_" + r).data("gfstripescaauth", !0);
            var s = this,
              i = JSON.parse(c("#gf_stripe_response").val());
            "product" === this.activeFeed.type
              ? t.retrievePaymentIntent(i.client_secret).then(function (e) {
                  "requires_action" === e.paymentIntent.status &&
                    t.handleCardAction(i.client_secret).then(function (e) {
                      var t = JSON.parse(c("#gf_stripe_response").val());
                      (t.scaSuccess = !0),
                        c("#gf_stripe_response").val(c.toJSON(t)),
                        s.maybeAddSpinner(),
                        c("#gform_" + r).data("gfstripescaauth", !1),
                        c("#gform_" + r)
                          .data("gfstripesubmitting", !0)
                          .submit();
                    });
                })
              : t.retrievePaymentIntent(i.client_secret).then(function (e) {
                  "requires_action" === e.paymentIntent.status &&
                    t.handleCardPayment(i.client_secret).then(function (e) {
                      s.maybeAddSpinner(),
                        c("#gform_" + r).data("gfstripescaauth", !1),
                        c("#gform_" + r)
                          .data("gfstripesubmitting", !0)
                          .submit();
                    });
                });
          }
        }),
        (this.isLastPage = function () {
          var e = c("#gform_target_page_number_" + this.formId);
          return !(0 < e.length) || 0 == e.val();
        }),
        (this.isCreditCardOnPage = function () {
          var e = this.getCurrentPageNumber();
          return !this.ccPage || !e || this.ccPage == e;
        }),
        (this.getCurrentPageNumber = function () {
          var e = c("#gform_source_page_number_" + this.formId);
          return 0 < e.length && e.val();
        }),
        (this.maybeAddSpinner = function () {
          if (!this.isAjax)
            if ("function" == typeof gformAddSpinner)
              gformAddSpinner(this.formId);
            else {
              var e = this.formId;
              if (0 == jQuery("#gform_ajax_spinner_" + e).length) {
                var t = gform.applyFilters(
                  "gform_spinner_url",
                  gf_global.spinnerUrl,
                  e
                );
                gform
                  .applyFilters(
                    "gform_spinner_target_elem",
                    jQuery(
                      "#gform_submit_button_" +
                        e +
                        ", #gform_wrapper_" +
                        e +
                        " .gform_next_button, #gform_send_resume_link_button_" +
                        e
                    ),
                    e
                  )
                  .after(
                    '<img id="gform_ajax_spinner_' +
                      e +
                      '"  class="gform_ajax_spinner" src="' +
                      t +
                      '" alt="" />'
                  );
              }
            }
        }),
        (this.resetStripeStatus = function (e, t, r) {
          c(
            "#gf_stripe_response, #gf_stripe_credit_card_last_four, #stripe_credit_card_type"
          ).remove(),
            e.data("gfstripesubmitting", !1),
            c("#gform_ajax_spinner_" + t).remove(),
            r && (window["gf_submitting_" + t] = !1);
        }),
        (this.displayStripeCardError = function (e) {
          e.error &&
            !this.GFCCField.next(".validation_message").length &&
            this.GFCCField.after(
              '<div class="gfield_description validation_message"></div>'
            );
          var t = this.GFCCField.next(".validation_message");
          e.error
            ? (t.html(e.error.message),
              wp.a11y.speak(e.error.message, "assertive"),
              0 < c("#gform_ajax_spinner_" + this.formId).length &&
                c("#gform_ajax_spinner_" + this.formId).remove())
            : t.remove();
        }),
        (this.updatePaymentAmount = function () {
          var e = this.formId,
            t = this.activeFeed;
          if ("form_total" !== t.paymentAmount) {
            var r = GFMergeTag.getMergeTagValue(e, t.paymentAmount, ":price"),
              s = GFMergeTag.getMergeTagValue(e, t.paymentAmount, ":qty");
            "string" == typeof r &&
              ((r = GFMergeTag.getMergeTagValue(
                e,
                t.paymentAmount + ".2",
                ":price"
              )),
              (s = GFMergeTag.getMergeTagValue(
                e,
                t.paymentAmount + ".3",
                ":qty"
              ))),
              (window["gform_stripe_amount_" + e] = r * s);
          }
          t.hasOwnProperty("setupFee") &&
            ((r = GFMergeTag.getMergeTagValue(e, t.setupFee, ":price")),
            (s = GFMergeTag.getMergeTagValue(e, t.setupFee, ":qty")),
            "string" == typeof r &&
              ((r = GFMergeTag.getMergeTagValue(
                e,
                t.setupFee + ".2",
                ":price"
              )),
              (s = GFMergeTag.getMergeTagValue(e, t.setupFee + ".3", ":qty"))),
            (window["gform_stripe_amount_" + e] += r * s));
        }),
        (this.createToken = function (e, t) {
          var r = this,
            s = this.activeFeed;
          (cardholderName = c(
            "#input_" + this.formId + "_" + this.ccFieldId + "_5"
          ).val()),
            (tokenData = {
              name: cardholderName,
              address_line1: GFMergeTag.replaceMergeTags(
                this.formId,
                this.getBillingAddressMergeTag(s.address_line1)
              ),
              address_line2: GFMergeTag.replaceMergeTags(
                this.formId,
                this.getBillingAddressMergeTag(s.address_line2)
              ),
              address_city: GFMergeTag.replaceMergeTags(
                this.formId,
                this.getBillingAddressMergeTag(s.address_city)
              ),
              address_state: GFMergeTag.replaceMergeTags(
                this.formId,
                this.getBillingAddressMergeTag(s.address_state)
              ),
              address_zip: GFMergeTag.replaceMergeTags(
                this.formId,
                this.getBillingAddressMergeTag(s.address_zip)
              ),
              address_country: GFMergeTag.replaceMergeTags(
                this.formId,
                this.getBillingAddressMergeTag(s.address_country)
              ),
              currency: gform.applyFilters(
                "gform_stripe_currency",
                this.currency,
                this.formId
              ),
            }),
            e.createToken(t, tokenData).then(function (e) {
              r.elementsResponseHandler(e);
            });
        }),
        (this.createPaymentMethod = function (t, r, e) {
          var s = this,
            i = this.activeFeed,
            a = "";
          if (
            ("" !== i.address_country &&
              (a = GFMergeTag.replaceMergeTags(
                s.formId,
                s.getBillingAddressMergeTag(i.address_country)
              )),
            "" === a || (void 0 !== e && "" !== e))
          ) {
            var n = c(
                "#input_" + this.formId + "_" + this.ccFieldId + "_5"
              ).val(),
              d = GFMergeTag.replaceMergeTags(
                this.formId,
                this.getBillingAddressMergeTag(i.address_line1)
              ),
              o = GFMergeTag.replaceMergeTags(
                this.formId,
                this.getBillingAddressMergeTag(i.address_line2)
              ),
              _ = GFMergeTag.replaceMergeTags(
                this.formId,
                this.getBillingAddressMergeTag(i.address_city)
              ),
              p = GFMergeTag.replaceMergeTags(
                this.formId,
                this.getBillingAddressMergeTag(i.address_state)
              ),
              g = GFMergeTag.replaceMergeTags(
                this.formId,
                this.getBillingAddressMergeTag(i.address_zip)
              ),
              l = { billing_details: { name: null, address: {} } };
            "" !== n && (l.billing_details.name = n),
              "" !== d && (l.billing_details.address.line1 = d),
              "" !== o && (l.billing_details.address.line2 = o),
              "" !== _ && (l.billing_details.address.city = _),
              "" !== p && (l.billing_details.address.state = p),
              "" !== g && (l.billing_details.address.postal_code = g),
              "" !== e && (l.billing_details.address.country = e),
              null === l.billing_details.name && delete l.billing_details.name,
              l.billing_details.address === {} &&
                delete l.billing_details.address,
              t.createPaymentMethod("card", r, l).then(function (e) {
                null !== s.stripeResponse &&
                  ((e.id = s.stripeResponse.id),
                  (e.client_secret = s.stripeResponse.client_secret)),
                  s.elementsResponseHandler(e);
              });
          } else
            c.ajax({
              async: !1,
              url: gforms_stripe_frontend_strings.ajaxurl,
              dataType: "json",
              method: "POST",
              data: {
                action: "gfstripe_get_country_code",
                nonce:
                  gforms_stripe_frontend_strings.create_payment_intent_nonce,
                country: a,
                feed_id: i.feedId,
              },
              success: function (e) {
                e.success && s.createPaymentMethod(t, r, e.data.code);
              },
            });
        }),
        (this.maybeHitRateLimits = function () {
          return !!(
            this.hasOwnProperty("cardErrorCount") && 5 <= this.cardErrorCount
          );
        }),
        (this.invisibleCaptchaPending = function () {
          var e = this.form.find(".ginput_recaptcha");
          if (!e.length || "invisible" !== e.data("size")) return !1;
          var t = e.find(".g-recaptcha-response");
          return !(t.length && t.val());
        }),
        this.init();
    };
  })(jQuery);
