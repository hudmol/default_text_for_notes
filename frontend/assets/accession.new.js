$(function() {
  $.fn.init_accession_form = function() {
    $("textarea[id$='accession_access_restrictions_note_']").val($DEFAULT_TEXT_FOR_NOTES__ACCESSION_ACCESS_RESTRICTIONS_NOTE);
    $("textarea[id$='accession_general_note_']").val($DEFAULT_TEXT_FOR_NOTES__ACCESSION_GENERAL_NOTE);
    $("textarea[id$='accession_retention_rule_']").val($DEFAULT_TEXT_FOR_NOTES__ACCESSION_RETENTION_RULE);
    $("textarea[id$='accession_use_restrictions_note_']").val($DEFAULT_TEXT_FOR_NOTES__ACCESSION_USE_RESTRICTIONS_NOTE);
  };

  $(document).bind("loadedrecordform.aspace", function(event, $container) {
	  $("#accession_form:not(.initialised)", $container).init_accession_form();
      });

  $("#accession_form:not(.initialised)").init_accession_form();

});
