(function() {
var search_index = 0;
var checkbox = 'SELECTOR_';
var isChecked = false;
try {
    $('tr[class*="bsHR"] > td').each(function(index) {
        console.log($(this)[0].innerText + " " + index);
        if ($(this)[0].innerText.replace(/\s+/g, " ").trim().includes("Book Part")) {
            search_index = index;
            return false;
        }
    });
    $('tr[id*="bs_data_row_"]').each(function(index) {
        console.log(index);
        if ($(this)[0].innerText.replace(/\s+/g, " ").trim().includes("LS1046ASE8T1A")) {
            checkbox = checkbox + index;
            console.log(checkbox);
			if ($("#bsData tr input[name=" + checkbox + "]").prop("type") == "hidden") {
				throw "This PN is disabled. Please manually check this";
			}
            $("input[name=" + checkbox + "]").prop("checked", true);
            return false;
        }
    });
if ($("input[name=" + checkbox + "]").prop("checked")) {
    return 'Item no checked!';
} else {
    return 'item no NOT CHECKED!';
}
	
} catch (error) {
    return "JAVASCRIPT: " + error;
}
})();

