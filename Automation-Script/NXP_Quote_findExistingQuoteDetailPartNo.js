(function() {
try {
var index = 0;
for (var i = 0; i < 3; i++) {
	var current_row = document.getElementById('bs_data_row_'+i);
	var current_col = current_row.getElementsByTagName('td');
var index_search = 6 - 1;	
if (current_col[index_search].innerText.includes('LS1046ASE8T1A')) {
		index = i;
		return index;
	} 

}
return -1;
} catch(error) {
return 'JAVASCRIPT: ' + error;
}
})();





