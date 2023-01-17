(function ($, Drupal) {
  Drupal.behaviors.generalBehaviors = {
    attach: function (context, settings) {
      "use strict";

      if ($(".paragraph--view-mode--preview table", context).length > 0) {
        $(".paragraph--view-mode--preview table", context).each(function (
          _,
          table
        ) {
          $(table).wrap("<div class='table-responsive'></div>");
          $(table).addClass("table-preview-responsive");
        });
      }
    },
  };
})(jQuery, Drupal);
