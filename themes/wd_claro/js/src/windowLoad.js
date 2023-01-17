(function ($, Drupal) {
  $(window).on("load", function () {
    if ($(".claro-details").length > 0) {
      $(".claro-details .wd_claro_openall").each(function (_, claroDetails) {
        var parent = $(claroDetails).closest(".claro-details");
        $(claroDetails).click(function (e) {
          e.preventDefault();
          if ($(parent).attr("open")) {
            $(parent).attr("open", false);
            $(claroDetails).text($(this).data("open"));
            $(parent)
              .find(".claro-details")
              .each(function (_, inner) {
                $(inner).attr("open", false);
                $(parent)
                  .find(".wd_claro_openall")
                  .each(function (_, link) {
                    $(link).text($(this).data("open"));
                  });
              });
          } else {
            $(parent).attr("open", true);
            $(claroDetails).text($(this).data("close"));
            $(parent)
              .find(".claro-details")
              .each(function (_, inner) {
                $(inner).attr("open", true);
                $(parent)
                  .find(".wd_claro_openall")
                  .each(function (_, link) {
                    $(link).text($(this).data("close"));
                  });
              });
          }
        });
      });
    }
  });
})(jQuery, Drupal);
