var SETUP_TEXTAREA = (function (elt, val) {
	var minRows = 3;
	var maxRows = 10;

	elt.val(val);
	var rows = val.split(/\n/).length-1;
	rows = rows < minRows ? minRows : rows;
	rows = rows > maxRows ? maxRows : rows;
	elt.attr('rows', rows);
    });
