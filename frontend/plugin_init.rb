['accession_access_restrictions_note',
 'accession_general_note',
 'accession_retention_rule',
 'accession_use_restrictions_note',
 'rights_statement_permissions',
 'rights_statement_restrictions'].each do |field|

  file = File.join(File.dirname(__FILE__), '..', 'config', "#{field}.txt")
  if File.exists?(file)
    AppConfig["default_text_for_notes__#{field}".intern] = File.open(file).read.gsub!(/\n/, '\\n')
  else
    AppConfig["default_text_for_notes__#{field}".intern] = ''
  end
end
