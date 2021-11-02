(function() {
var search_index = 0;
var expireDate= "";
try {
	var headerMapper = [];
    $('tr[class*="bsHR"] > td').each(function(index) {
        console.log($(this)[0].innerText + " " + index);
        headerMapper[$(this)[0].innerText.replace(/\s+/g, " ").trim()] = index;
		if ($(this)[0].innerText.replace(/\s+/g, " ").trim().includes("Expire")) {
            search_index = index;
            return false;
        }
    });

    for (var i = 0; i < 4; i++) {
        console.log(i);
		var row_fix = document.getElementById('bs_data_row_' + i);
		var column = row_fix.getElementsByTagName('td');
		for (var j = 0; j < column.length; j++) {
			if (column[j].innerText.replace(/\s+/g, " ").trim().includes('MK22FX512VMC12')) {
				expireDate= column[headerMapper['Expire']].innerText;
				return expireDate.replace(/\s+/g, " ").trim();
			}
		}
	}

} catch (error) {
    return "JAVASCRIPT: " + error;
}
})();

