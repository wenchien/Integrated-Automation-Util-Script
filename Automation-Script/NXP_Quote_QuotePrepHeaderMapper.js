(function() {
	try {
                var table = document.getElementsByClassName('bsT');
		return table[0].rows[0].getElementsByTagName('td')[9].innerText;
	} catch (error) {
		return "JAVASCRIPT: CANNOT FIND THE HEADER ROW/INVALID HEADER ROW OR " + error;
	}

})();

