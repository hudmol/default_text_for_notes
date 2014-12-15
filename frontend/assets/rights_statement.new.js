$(function() {
  var initRSForm = function(subform) {
    $("[name$='[rights_type]']", subform).change(function(event) {
      $("textarea[id*='_rights_statements__'][id*='__permissions_']").val($DEFAULT_TEXT_FOR_NOTES__RIGHTS_STATEMENT_PERMISSIONS);
      var rows = $DEFAULT_TEXT_FOR_NOTES__RIGHTS_STATEMENT_PERMISSIONS.split(/\n/).length-1;
      rows = rows < 3 ? 3 : rows;
      $("textarea[id*='_rights_statements__'][id*='__permissions_']").attr('rows', rows);

      $("textarea[id*='_rights_statements__'][id*='__restrictions_']").val($DEFAULT_TEXT_FOR_NOTES__RIGHTS_STATEMENT_RESTRICTIONS);
      var rows = $DEFAULT_TEXT_FOR_NOTES__RIGHTS_STATEMENT_RESTRICTIONS.split(/\n/).length-1;
      rows = rows < 3 ? 3 : rows;
      $("textarea[id*='_rights_statements__'][id*='__restrictions_']").attr('rows', rows);
    });
  };

  $(document).bind("subrecordcreated.aspace", function(event, object_name, subform) {
    if (object_name === "rights_statement") {
      initRSForm($(subform));
    }
  });
});
