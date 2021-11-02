(function () {
    var search_index = 0;
    var item_no = "";
    var found = 0;
    try {
        var headerMapper = [];
        $('tr[class*="bsHR"] > td').each(function (index) {
            console.log($(this)[0].innerText + " " + index);
            headerMapper[$(this)[0].innerText.replace(/\s+/g, " ").trim()] = index;
            if ($(this)[0].innerText.replace(/\s+/g, " ").trim().includes("Escalate")) {
                search_index = index;
                return false;
            }
        });

        for (var i = 0; i < 48; i++) {
            console.log(i);
            var row_fix = document.getElementById('bs_data_row_' + i);
            var column = row_fix.getElementsByTagName('td');
            for (var j = 0; j < column.length; j++) {
                if (column[j].innerText.replace(/\s+/g, " ").trim().includes('SPC5746CK1AMKU6')) {
                    item_no = column[headerMapper['Item']].innerText;
                    found = 1;
                    break;
                }
               
            }

 if (found == 1) {
                    break;
                }
        }
        return item_no.replace(/\s+/g, " ").trim();
    } catch (error) {
        return "JAVASCRIPT: " + error;
    }
})();

