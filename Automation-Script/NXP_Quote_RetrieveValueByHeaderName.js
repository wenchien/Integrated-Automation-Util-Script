(function() {
var search_index;
var value;
$('td[class*="ibHdrCell ibHdrCellB"]').each(function(index){console.log($(this)[0].innerText + " " + index);
if ($(this)[0].innerText.replace(/\s+/g, " ").trim().includes("End Customer")) {search_index = index; return false;}
})

$('td[class*="ibDataCell ibDataCellB"]').each(function(index){console.log($(this)[0].innerText + " " + index);
if (index == search_index) {value = $(this)[0].innerText; return false;}
})
console.log(value);
return value.replace(/\s+/g, " ").trim();
})();
