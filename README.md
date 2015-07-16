default_text_for_notes
======================

ArchivesSpace plugin to specify default text for selected fields.

This plugin was developed for the National Library of Australia by Hudson Molonglo Pty Ltd.


# Getting Started

Download the latest release from the Releases tab in Github:

    https://github.com/hudmol/default_text_for_notes/releases

Unzip the release in the plugins directory of your ArchivesSpace:

    $ cd /path/to/archivesspace/plugins
    $ unzip default_text_for_notes-vX.X.zip

Enable the plugin by editing the file in `config/config.rb`:

      AppConfig[:plugins] = ['some_plugin', 'default_text_for_notes']

Make sure you uncomment this line (i.e., remove the leading '#' if present)

Then restart ArchivesSpace, see:

    https://github.com/archivesspace/archivesspace/blob/master/README.md

For more information about plugins see:

    https://github.com/archivesspace/archivesspace/blob/master/plugins/README.md


# How it Works

The plugin uses javascript to insert text into selected textareas when records are first created
through the frontend UI.

Supported fields are:

- Accession
  - Retention Rule
  - General Note
  - Access Restrictions Note
  - Use Restrictions Note

- Rights Statement
  - Permissions
  - Restrictions

The text for each field is specified in a file in the config directory.
The file is named after the fields it applied to, for example:

    config/accession_general_note.txt

The content of these files is loaded when the frontend starts up. This is done in the plugin_init.rb file:

    frontend/plugin_init.rb

The plugin overrides erb templates in oreder to insert the necessary javascript. See:

    frontend/views

The javascript for each of the affected record types is in:

    frontend/assets

The javascript for each record type references a shared javascript file:

    frontend/assets/setup_textarea.js

This file contains the function that sets the selected textarea with the specified text.
It also resizes the textarea to show all of the specified text. It will not set the size to
fewer than 3 lines or more than 10. To change these defaults edit this file.


# Note on Upgrading

This plugin overrides frontend templates. This means that when upgrading ArchivesSpace it may be necessary
to refresh the overridden templates in the plugin. The content added by the plugin is in all cases at
the end of the erb file and surrounded by a comment, for example:

    <%# PLUGIN STARTS HERE %>
    <script>
      var DEFAULT_TEXT_FOR_NOTES__CM_CATALOGED_NOTE = "<%= AppConfig[:default_text_for_notes__collection_management_cataloged_note] %>"
    </script>
    <script src="<%= "#{AppConfig[:frontend_prefix]}assets/setup_textarea.js" %>"></script>
    <script src="<%= "#{AppConfig[:frontend_prefix]}assets/collection_management.new.js" %>"></script>
    <%# PLUGIN ENDS HERE %>

This means you can copy the new template from the core application and re-add this content to the end.


When upgrading the plugin, be sure to save and reapply any modifications you have made.
For example, you may have changed the default text for a field.
Copy this file somewhere safe before upgrading and then move it back in place after the upgrade.

Enjoy!
