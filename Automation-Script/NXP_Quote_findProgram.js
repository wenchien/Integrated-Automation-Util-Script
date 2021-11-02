(function() {
var found = 1;
var index = 0;
var optionBoxElement = document.getElementById("SELECT_3");
for (var i = 0; i < optionBoxElement.length; i++) {
    if (optionBoxElement.options[i].text.toUpperCase().trim() == "switch".toUpperCase().trim()) {
console.log('setting i to ' + i);        
optionBoxElement.selectedIndex = i;
         optionBoxElement.onchange();
found = 0;
break;
    }
}
if (optionBoxElement.length <= 1) {
changePageTo('pc.quote.html.QuoteInfoSection', 'goToNewProg', '', 'CUST_SEARCH', '550', '400');

}
if (found == 1) {
    changePageTo('pc.quote.html.QuoteInfoSection', 'goToNewProg', '', 'CUST_SEARCH', '550', '400');

} 
})();

