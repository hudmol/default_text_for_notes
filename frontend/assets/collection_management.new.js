$(function() {
  var initCMForm = function(subform) {
      SETUP_TEXTAREA($("textarea[id$='_collection_management__cataloged_note_']"),
		     DEFAULT_TEXT_FOR_NOTES__CM_CATALOGED_NOTE);
  };

  $(document).bind("subrecordcreated.aspace", function(event, object_name, subform) {
    if (object_name === "collection_management") {
      initCMForm($(subform));
    }
  });
});
