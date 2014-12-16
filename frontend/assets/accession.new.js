$(function() {
  $.fn.init_accession_form = function() {
      SETUP_TEXTAREA($("textarea[id$='accession_access_restrictions_note_']"),
		     $DEFAULT_TEXT_FOR_NOTES__ACCESSION_ACCESS_RESTRICTIONS_NOTE);

      SETUP_TEXTAREA($("textarea[id$='accession_general_note_']"),
		     $DEFAULT_TEXT_FOR_NOTES__ACCESSION_GENERAL_NOTE);

      SETUP_TEXTAREA($("textarea[id$='accession_retention_rule_']"),
		     $DEFAULT_TEXT_FOR_NOTES__ACCESSION_RETENTION_RULE);

      SETUP_TEXTAREA($("textarea[id$='accession_use_restrictions_note_']"),
		     $DEFAULT_TEXT_FOR_NOTES__ACCESSION_USE_RESTRICTIONS_NOTE);
  };

  $(document).bind("loadedrecordform.aspace", function(event, $container) {
	  $("#accession_form:not(.initialised)", $container).init_accession_form();
      });

  $("#accession_form:not(.initialised)").init_accession_form();

});
