$(function() {
  var initCMForm = function(subform) {
    $("textarea[id$='_collection_management__cataloged_note_']").val($DEFAULT_TEXT_FOR_NOTES__CM_CATALOGED_NOTE);
  };

  $(document).bind("subrecordcreated.aspace", function(event, object_name, subform) {
    if (object_name === "collection_management") {
      initCMForm($(subform));
    }
  });
});
