(function() {
	try {
                var table = document.getElementsByClassName('bsT');
		return table[0].getElementsByTagName('td')[5].innerText.replace(/\s+/g, "").trim();
	} catch (error) {
		return "JAVASCRIPT: CANNOT FIND THE HEADER ROW/INVALID HEADER ROW OR " + error;
	}

})();


