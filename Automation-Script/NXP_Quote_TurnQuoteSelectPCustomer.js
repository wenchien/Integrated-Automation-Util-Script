(function() {
try {

    if (!$('[id="CUST_LIST"]').prop("children")) {
        throw "JAVASCRIPT: CANNOT RETRIEVE PURCHASING CUSTOMER OPTION BOX"
    }

    for (var i = 0; i < $('[id="CUST_LIST"]').prop("children").length; i++) {
		if ($('[id="CUST_LIST"]').prop("children")[i].innerText.replace(/\s+/g, " ").trim().toUpperCase().includes('SBS SCIENCE & TECHNOLOGY')
		&& $('[id="CUST_LIST"]').prop("children")[i].innerText.replace(/\s+/g, " ").trim().toUpperCase().includes('SHENZHEN CITY')) {
			$('[id="CUST_LIST"]').prop("selectedIndex", i);
			return false;
		} else {
			$('[id="CUST_LIST"]').prop("selectedIndex", -1);
		}
    }
	if ($('[id="CUST_LIST"]').prop("selectedIndex") == -1) {
		return "Purchasing Customer not found";
	}
} catch (error) {
	return "JAVASCRIPT: " + error;
}
})();

