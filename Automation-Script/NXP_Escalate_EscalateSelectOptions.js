(function () {
    var search_index = 0;
    var item_no = "";
    var found = 0;
	var isElevatorPrice = false;
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

        for (var i = 0; i < ; i++) {
            console.log(i);
            var row_fix = document.getElementById('bs_data_row_' + i);
            var column = row_fix.getElementsByTagName('td');
            for (var j = 0; j < column.length; j++) {
                if (column[j].innerText.replace(/\s+/g, " ").trim().includes('MC33879APEKR2')) {
                    item_no = column[headerMapper['Item']].innerText;
                    found = 1;
                    break;
                }

            }

            if (found == 1) {
                break;
            }
        }
        
		$('tr[name*="EXT_COL_RFLT_extColumns_59_"]').each(function (index) {
            if (index == (item_no - 1)) {
				var name = "EXT_COL_RFLT_extColumns_59_" + index;
				if ($("tr[name*=" + name + "]")) {
					$("tr[name*=" + name + "]").prop('selectedIndex', 1);
					isElevatorPrice = true;
					return false;
				} else {
					isElevatorPrice = false;
					return false;
				}
				
			}
        })
		
		if (isElevatorPrice) {
			return 'true';
		} else {
			return 'false';
		}
    } catch (error) {
        return "JAVASCRIPT: " + error;
    }
})();
