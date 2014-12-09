cm_cat_note_file = File.join(File.dirname(__FILE__), '..', 'config', 'collection_management_cataloged_note.txt')
if File.exists?(cm_cat_note_file)
  AppConfig[:default_text_for_notes__cm_cataloged_note] = File.open(cm_cat_note_file).read.gsub!(/\n/, '\\n')
else
  AppConfig[:default_text_for_notes__cm_cataloged_note] = ''
end
