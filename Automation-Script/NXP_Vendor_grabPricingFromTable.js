(function () {
    var search_index = 0;
    var item_no = "";
    var found = 0;
    try {
        var headerMapper = [];
        $('tr[class*="bsHR"] > td').each(function (index) {
            console.log($(this)[0].innerText + " " + index);
            headerMapper[$(this)[0].innerText.replace(/\s+/g, " ").trim()] = index;
            if ($(this)[0].innerText.replace("/<br>/g", "").replace(/\s+/g, " ").trim().includes("Escalate")) {
                search_index = index;
                return false;
            }
        });
for (var i = 0; i < 60; i++) {
 var row_fix = document.getElementById('bs_data_row_' + 0);
        var column = row_fix.getElementsByTagName('td');      

var resale = column[headerMapper['Suggested Resale'] + 1].innerText.replace('X', '').replace('*', '').trim().replace('$', '');
        var qty = column[headerMapper['Qty'] + 1].innerText.replace(',', '').replace('*', '').trim();
		var cost = column[headerMapper['Cost'] + 1].innerText.replace('X', '').replace('*', '').trim().replace('$', '');
		return resale + ":" + qty + ":" + cost;

}
       
    } catch (error) {
        return "JAVASCRIPT: " + error;
    }
})();

