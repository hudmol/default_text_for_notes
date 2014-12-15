$(function() {
  var initCMForm = function(subform) {
    $("textarea[id$='_collection_management__cataloged_note_']").val($DEFAULT_TEXT_FOR_NOTES__CM_CATALOGED_NOTE);
    var rows = $DEFAULT_TEXT_FOR_NOTES__CM_CATALOGED_NOTE.split(/\n/).length-1;
    rows = rows < 3 ? 3 : rows;
    $("textarea[id$='_collection_management__cataloged_note_']").attr('rows', rows);
  };

  $(document).bind("subrecordcreated.aspace", function(event, object_name, subform) {
    if (object_name === "collection_management") {
      initCMForm($(subform));
    }
  });
});
