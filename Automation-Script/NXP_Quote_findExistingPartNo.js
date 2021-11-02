(function() {
var index = -1;
for (var i = 0; i < 9-1; i++) {
	var current_row = document.getElementById('bs_data_row_'+i);
	var current_col = current_row.getElementsByTagName('td');
var current_col_text = current_col[1].innerText.replace(/\s+/g, "").replace('(R)', '').replace('(L)', '').replace('*', '').trim();	
if (current_col_text == 'LS1046ASE8T1A') {
		index = i;
		break;
	}
}
if (index == -1) {
return -1;
} else {
return index;
}
})();

