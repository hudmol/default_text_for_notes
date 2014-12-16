$(function() {
  var initRSForm = function(subform) {
      $("[name$='[rights_type]']", subform).change(function(event) {
	      SETUP_TEXTAREA($("textarea[id*='_rights_statements__'][id*='__permissions_']"),
			     DEFAULT_TEXT_FOR_NOTES__RIGHTS_STATEMENT_PERMISSIONS);
	      
	      SETUP_TEXTAREA($("textarea[id*='_rights_statements__'][id*='__restrictions_']"),
			     DEFAULT_TEXT_FOR_NOTES__RIGHTS_STATEMENT_RESTRICTIONS);
	  });
  };

  $(document).bind("subrecordcreated.aspace", function(event, object_name, subform) {
    if (object_name === "rights_statement") {
      initRSForm($(subform));
    }
  });
});
