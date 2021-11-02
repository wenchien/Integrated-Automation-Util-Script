(function() {
var search_index = 0;
var item_no = "";
try {
	var headerMapper = [];
    $('tr[class*="bsHR"] > td').each(function(index) {
        console.log($(this)[0].innerText + " " + index);
        headerMapper[$(this)[0].innerText.replace(/\s+/g, " ").trim()] = index;
		if ($(this)[0].innerText.replace(/\s+/g, " ").trim().includes("Escalate")) {
            search_index = index;
            return false;
        }
    });

    for (var i = 0; i < 3; i++) {
        console.log(i);
		var row_fix = document.getElementById('bs_data_row_' + i);
		var column = row_fix.children;
		var vendor_qty = column[headerMapper['Qty']].innerText.replace('$', '').replaceAll(',', '').trim();
		var vendor_resale = column[headerMapper['Suggested Resale']].innerText.replace('$', '').replaceAll(',', '').trim();
		var vendor_cost = column[headerMapper['Cost']].innerText.replace('$', '').replaceAll(',', '').trim();
console.log(row_fix.children[5].innerText + "//"+ vendor_cost)
		var approved_qty = Number.parseFloat(60000).toString();
		var approved_resale = Number.parseFloat(4.5).toFixed(4).toString().replaceAll('X', '').trim();
		var approved_cost = Number.parseFloat(4.365).toFixed(4).toString().replaceAll('X', '').trim();
		if (approved_qty == vendor_qty && approved_resale == vendor_resale && approved_cost == vendor_cost) {
			return 'TRUE';
		} else {
			return 'FALSE';
		}
	}

} catch (error) {
    return "JAVASCRIPT: " + error;
}
})();

