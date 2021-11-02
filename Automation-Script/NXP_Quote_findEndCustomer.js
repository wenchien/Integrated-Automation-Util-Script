(function() {
    try {
        var found = 0;
        endCustomerOptionBox = document.getElementById("SELECT_2");
		if (!endCustomerOptionBox) {
			throw 'JAVASCRIPT: endCustomerOptionBox is null, select_2'
		}
        for (var k = 0; k < endCustomerOptionBox.length; k++) {
            var columnText = endCustomerOptionBox.options[k].text;
            if (columnText.trim().replace(/\s+/g, " ").includes('BAOLONG AUTOMOTIVE ANHUI CORPORATION') && columnText.trim().replace(/\s+/g, " ").includes('HEFEI CITY')) {
                endCustomerOptionBox.selectedIndex = k;
                found = 1;
                break
            }
        }
        if (found == 0) {
            return 'false';
        } else {
            chgNext(endCustomerOptionBox);
            setCompFocus('SELECT_2');
            formJustChanged();
            return 'true';
        }
    } catch (error) {
        return 'JAVASCRIPT: ' + error;
    }
})();

