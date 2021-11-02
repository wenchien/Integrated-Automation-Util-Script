(function() {
    try {

                var current_row = document.getElementById('bs_data_row_' + 0);
  var index = 4 - 1;
if(!current_row.getElementsByTagName('td')[index].innerText) return '';
return current_row.getElementsByTagName('td')[index].innerText;

    } catch (error) {
        return 'JAVASCRIPT: ' + error;
    }
})();
