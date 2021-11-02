(function() {
var selects = document.getElementsByTagName('select');
for (var i = 0; i < selects.quote_7.length; i++) {
    if (selects.quote_7[i].innerText.trim().replace(/\s+/g, "").includes('WT MICRO-HONG KONG [435439]'.trim().replace(/\s+/g, ""))) {
        selects.quote_7.selectedIndex = i;
        break;
    }
} 
})();

