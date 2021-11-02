(function() {
    try {
        var optionBoxElement = document.getElementById("SELECT_0");
        var customerOptionBox = document.getElementById("SELECT_1");
        var endCustomerOptionBox = document.getElementById("SELECT_2");
        var programOptionBox = document.getElementById("SELECT_3");
        if (!optionBoxElement || !customerOptionBox || !endCustomerOptionBox || !programOptionBox) {
            throw 'JAVASCRIPT: an exception has occured while conducting final checks on Quote Info';
        }
        var startIndex1 = customerOptionBox.options[customerOptionBox.selectedIndex].innerText.length - 'WDDFX'.length;
        var endIndex1 = customerOptionBox.options[customerOptionBox.selectedIndex].innerText.length;

        var startIndex2 = endCustomerOptionBox.options[endCustomerOptionBox.selectedIndex].innerText.length - 'ADVAR'.length;
        var endIndex2 = endCustomerOptionBox.options[endCustomerOptionBox.selectedIndex].innerText.length;

        if (!customerOptionBox.options[customerOptionBox.selectedIndex].innerText.substring(startIndex1, endIndex1).trim().includes('WDDFX')) {
            return 'Walle has failed to select the proper Vendor CTM for this quote: WDDFX';
        }

        if (!endCustomerOptionBox.options[endCustomerOptionBox.selectedIndex].innerText.substring(startIndex2, endIndex2).includes('ADVAR')) {
            return 'Walle has failed to select the proper Vendor End Customer for this quote: ADVAR';
        }
         return 'true';
    } catch (error) {
        return "" + error;
    }

})();
