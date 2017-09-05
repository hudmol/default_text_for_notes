$(function() {
  var initRSForm = function(subform) {
      
      let initNote = function(label, text) { 
        let note_exist = false;
        $('[id*="rights_statement_notes"] input[id*="_label"]', subform).each(function() { 
            if ( $(this).val() == label ) { note_exist = true };
         });
        
        if ( !note_exist ) { 
          setTimeout( function() { $('[id*="rights_statement_notes"] .add-note', subform ).click() }, 1000 ) 
          let note = $('.notes-form', subform); 
          setTimeout( function() { $('ul:first > li:last select.top-level-note-type > option', note ).filter(function(){ 
            return $(this).text() == 'Additional Information'; 
           }).prop('selected', true ); $('ul:first > li:last select.top-level-note-type', note).trigger('change'); }, 1000 ); 
          setTimeout( function() {  $('ul:first > li:last input[id*="_label"]', note ).val(label) }, 1000 ) 
          setTimeout( function() { $("ul:first > li:last textarea[id*='_rights_statements__']:last", note).data('CodeMirror').setValue(text); }, 1000);
        }
      }
      
      let dfd = $.Deferred();
      $("[name$='[rights_type]']", subform).change(function(event) {
        dfd.done( setTimeout( function() { initNote("Permissions", DEFAULT_TEXT_FOR_NOTES__RIGHTS_STATEMENT_PERMISSIONS ) }, 1000 ))
          .then ( initNote("Restrictions", DEFAULT_TEXT_FOR_NOTES__RIGHTS_STATEMENT_RESTRICTIONS ) )
      });
       
  };

  $(document).bind("subrecordcreated.aspace", function(event, object_name, subform) {
    if (object_name === "rights_statement") {
      initRSForm($(subform));
    }
  });
});
