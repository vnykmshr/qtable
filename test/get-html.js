'use strict';

var qtable = require('../');


function buildTableHtml(rows) {
  var headers = ['Sno', 'Name', 'Details'];
  var widths = [10, 25, 25];
  var table = new qtable({
    'title': 'Register',
    'head': headers,
    'colWidths': widths
  });

  rows.forEach(function (row, idx) {
    table.push([idx, row.name, row.details]);
  });
  
  return table.getHtml();
}



// -- Test Code ---------------------------------------------------------
if (require.main === module) {
  (function () {
    var rows = [{
      name: 'abc',
      details: '123456'
    }, {
      name: 'xyz',
      details: '54321'
    }];

    console.log(buildTableHtml(rows));
  })();
}
