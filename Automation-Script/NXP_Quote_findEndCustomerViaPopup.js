(function() {
    try {
        var index = 0;
        var foundCus = 1;
        for (var i = 0; i < 2; i++) {
            var row = document.getElementById("bs_data_row_" + i);
            if (!row) {
return 'false';
}
if (row == null) {
                throw 'JAVASCRIPT: MAXIMUM ROW REACHED while searching for end customer code'
            }
            var columns = row.getElementsByTagName("td");
            var columnText = columns[1].innerText;
            if (columnText.trim().replace(/\s+/g, " ").includes('ZONGMU TECHNOLOGY (SHANGHAI)') && columnText.trim().replace(/\s+/g, " ").includes('SHANGHAI CITY')) {
                foundCus = 0;
                index = i;
                break;
            }
        }
        if (foundCus == 1) {
            closeWin();
            return 'false';
        } else {
            document.PC.ROW.value = index;
            changePage('pc.customer.html.NewECustPopupSection', 'useSelected');
            return 'true';
        }
    } catch (error) {
        return error;
    }
})();
