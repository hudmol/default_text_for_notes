$(function() {
  $.fn.init_accession_form = function() {
    $("textarea[id$='accession_access_restrictions_note_']").val($DEFAULT_TEXT_FOR_NOTES__ACCESSION_ACCESS_RESTRICTIONS_NOTE);
    var rows = $DEFAULT_TEXT_FOR_NOTES__ACCESSION_ACCESS_RESTRICTIONS_NOTE.split(/\n/).length-1;
    rows = rows < 3 ? 3 : rows;
    $("textarea[id$='accession_access_restrictions_note_']").attr('rows', rows);

    $("textarea[id$='accession_general_note_']").val($DEFAULT_TEXT_FOR_NOTES__ACCESSION_GENERAL_NOTE);
    var rows = $DEFAULT_TEXT_FOR_NOTES__ACCESSION_GENERAL_NOTE.split(/\n/).length-1;
    rows = rows < 3 ? 3 : rows;
    $("textarea[id$='accession_general_note_']").attr('rows', rows);

    $("textarea[id$='accession_retention_rule_']").val($DEFAULT_TEXT_FOR_NOTES__ACCESSION_RETENTION_RULE);
    var rows = $DEFAULT_TEXT_FOR_NOTES__ACCESSION_RETENTION_RULE.split(/\n/).length-1;
    rows = rows < 3 ? 3 : rows;
    $("textarea[id$='accession_retention_rule_']").attr('rows', rows);

    $("textarea[id$='accession_use_restrictions_note_']").val($DEFAULT_TEXT_FOR_NOTES__ACCESSION_USE_RESTRICTIONS_NOTE);
    var rows = $DEFAULT_TEXT_FOR_NOTES__ACCESSION_USE_RESTRICTIONS_NOTE.split(/\n/).length-1;
    rows = rows < 3 ? 3 : rows;
    $("textarea[id$='accession_use_restrictions_note_']").attr('rows', rows);
  };

  $(document).bind("loadedrecordform.aspace", function(event, $container) {
	  $("#accession_form:not(.initialised)", $container).init_accession_form();
      });

  $("#accession_form:not(.initialised)").init_accession_form();

});
