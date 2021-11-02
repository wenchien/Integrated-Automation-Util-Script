(function() {
var finalString = '';
if (3 < 2) {
     return 'No comments';   
}
for (var i = 0; i < 3-1; i++) {
    var row = document.getElementById('bs_data_row_' + i);
    var column = row.getElementsByTagName('td');
    finalString += column[0].innerText.replace(/\s+/g, " ").trim() + " | " + column[1].innerText.replace(/\s+/g, " ").trim() + " | " + column[2].innerText.replace(/\s+/g, " ").trim() + "\n";
}
return finalString;
})();

