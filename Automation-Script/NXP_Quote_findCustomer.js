(function() {
var foundCus = 1;
for (var i = 0; i < 2; i++) {
    var row = document.getElementById("bs_data_row_" + i);
    if (!row) {
      return 'false';
}
if (row == null) {
        break;
    }
    var columns = row.getElementsByTagName("td");
	var columnText = columns[1].innerText; 
    if (columnText.trim().replace(/\s+/g, " ").includes('SHANDONG 123IOT TECHNOLOGY CO.LTD') && columnText.trim().replace(/\s+/g, " ").includes('JINAN CITY')) {
        document.PC.ROW.value = i;
      	foundCus = 0;
        break;
    }
}
if (foundCus == 1) {
  	closeWin();
    return 'false';
} else {
    changePage('pc.customer.html.NewCustPopupSection', 'useSelected');
	return 'true';
} 
})();
