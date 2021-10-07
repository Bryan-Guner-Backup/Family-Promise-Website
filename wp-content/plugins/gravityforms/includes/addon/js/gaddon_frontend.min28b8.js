var GFFrontendFeeds = function (e) {
  var r = this,
    f = jQuery;
  (r.init = function () {
    (r.options = e),
      (r.triggerInputIds = r.getTriggerInputIds(r.options.feeds)),
      (r.activeFeeds = []),
      r.evaluateFeeds(),
      r.bindEvents();
  }),
    (r.bindEvents = function () {
      gform.addAction("gform_input_change", function (e, o, t) {
        var d = parseInt(t) + "",
          n =
            -1 !== f.inArray(t, r.triggerInputIds) ||
            -1 !== f.inArray(d, r.triggerInputIds);
        r.options.formId == o && n && r.evaluateFeeds();
      });
    }),
    (r.evaluateFeeds = function () {
      var e, o, t;
      for (i = 0; i < r.options.feeds.length; i++)
        (e = r.options.feeds[i]),
          (o = r.evaluateFeed(e, r.options.formId)),
          (t = r.isFeedActivated(e)),
          o || null === t
            ? o &&
              !t &&
              (!e.isSingleFeed ||
                (e.isSingleFeed && r.hasPriority(e.feedId, e.addonSlug))) &&
              r.activateFeed(e)
            : r.deactivateFeed(e);
      gform.doAction(
        "gform_frontend_feeds_evaluated",
        r.options.feeds,
        r.options.formId,
        r
      ),
        gform.doAction(
          "gform_frontend_feeds_evaluated_{0}".format(r.options.formId),
          r.options.feeds,
          r.options.formId,
          r
        ),
        gform.doAction(
          "gform_{0}_frontend_feeds_evaluated".format(e.addonSlug),
          r.options.feeds,
          r.options.formId,
          r
        ),
        gform.doAction(
          "gform_{0}_frontend_feeds_evaluated_{0}".format(
            e.addonSlug,
            r.options.formId
          ),
          r.options.feeds,
          r.options.formId,
          r
        );
    }),
    (r.evaluateFeed = function (e, o) {
      return (
        !e.conditionalLogic ||
        "show" == gf_get_field_action(o, e.conditionalLogic)
      );
    }),
    (r.getTriggerInputIds = function () {
      for (var e = [], o = 0; o < r.options.feeds.length; o++) {
        var t = r.options.feeds[o];
        if (t.conditionalLogic)
          for (var d = 0; d < t.conditionalLogic.rules.length; d++) {
            var n = r.options.feeds[o].conditionalLogic.rules[d];
            -1 == f.inArray(n.fieldId, e) && e.push(n.fieldId);
          }
      }
      return e;
    }),
    (r.isFeedActivated = function (e) {
      return (
        !("object" != typeof e && !(e = r.getFeed(e))) &&
        (void 0 !== e.isActivated ? e.isActivated : null)
      );
    }),
    (r.getFeed = function (e) {
      for (var o = 0; o < r.options.feeds.length; o++) {
        var t = r.options.feeds[o];
        if (t.feedId == e) return t;
      }
      return !1;
    }),
    (r.getFeedsByAddon = function (e, o, t) {
      for (var d = [], n = 0; n < r.options.feeds.length; n++) {
        var i = r.options.feeds[n];
        i.addonSlug != e ||
          (o && i.feedId == o.feedId) ||
          (t && !r.isFeedActivated(i)) ||
          d.push(i);
      }
      return d;
    }),
    (r.activateFeed = function (e) {
      e.feedId && (e = [e]);
      for (var o = 0; o < e.length; o++) {
        var t = e[o];
        (t.isActivated = !0),
          gform.doAction("gform_frontend_feed_activated", t, r.options.formId),
          gform.doAction(
            "gform_frontend_feed_activated_{0}".format(r.options.formId),
            t,
            r.options.formId
          ),
          gform.doAction(
            "gform_{0}_frontend_feed_activated".format(t.addonSlug),
            t,
            r.options.formId
          ),
          gform.doAction(
            "gform_{0}_frontend_feed_activated_{0}".format(
              t.addonSlug,
              r.options.formId
            ),
            t,
            r.options.formId
          ),
          t.isSingleFeed && r.deactivateFeed(r.getFeedsByAddon(t.addonSlug, t));
      }
    }),
    (r.deactivateFeed = function (e) {
      e.feedId && (e = [e]);
      for (var o = 0; o < e.length; o++) {
        var t = e[o],
          d = r.isFeedActivated(t);
        null !== d &&
          !1 !== d &&
          ((t.isActivated = !1),
          gform.doAction(
            "gform_frontend_feed_deactivated",
            t,
            r.options.formId
          ),
          gform.doAction(
            "gform_frontend_feed_deactivated_{0}".format(r.options.formId),
            t,
            r.options.formId
          ),
          gform.doAction(
            "gform_{0}_frontend_feed_deactivated".format(t.addonSlug),
            t,
            r.options.formId
          ),
          gform.doAction(
            "gform_{0}_frontend_feed_deactivated_{0}".format(
              t.addonSlug,
              r.options.formId
            ),
            t,
            r.options.formId
          ));
      }
    }),
    (r.hasPriority = function (e, o) {
      for (var t = r.getFeedsByAddon(o), d = 0; d <= t.length; d++) {
        var n = t[d];
        if (n.feedId != e && n.isActivated) return !1;
        if (n.feedId == e) return !0;
      }
      return !1;
    }),
    this.init();
};
