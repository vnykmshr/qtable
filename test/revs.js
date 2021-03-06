
/**
 * Module requirements.
 */

var Table = require('../');

/**
 * Example.
 */

/* col widths */
var table = new Table({ 
    title: 'Summary Report',
    mail: { to: 'qasim@zaidi.me', 'subject': 'Revision Report', from: 'qasim@zaidi.me' },
    head: ['Rel', 'Change', 'By', 'When'],
    colWidths: [6, 21, 25, 17]
});

table.push(
    ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '7 minutes ago']
  , ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '8 minutes ago']
);

console.log(table.toString());


/* compact */
var table = new Table({ 
    mail: { to: 'qasim@zaidi.me', 'subject': 'Revision Report', from: 'qasim@zaidi.me' },
    head: ['Rel', 'Change', 'By', 'When']
  , colWidths: [6, 21, 25, 17]
  , style : {compact : true, 'padding-left' : 1}
});

table.push(
    ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '7 minutes ago']
  , ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '8 minutes ago']
  , []
  , ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '8 minutes ago']
);

console.log(table.toString());

/* headless */
var headless_table = new Table();
headless_table.push(['v0.1', 'Testing something cool', 'rauchg@gmail.com', '7 minutes ago']);
console.log(headless_table.toString());

/* vertical */
var vertical_table = new Table();
vertical_table.push({ "Some Key": "Some Value"},
                    { "Another much longer key": "And its corresponding longer value"}
);

console.log(vertical_table.toString());

/* cross */
var cross_table = new Table({ head: ["", "Header #1", "Header #2"] ,
      title: 'Cross Table',
      mail: { to: 'qasim@zaidi.me', 'subject': 'Revision Report', from: 'qasim@zaidi.me' } });
cross_table.push({ "Header #3": ["Value 1", "Value 2"] },
                 { "Header #4": ["Value 3", "Value 4"] });
console.log(cross_table.toString());

var ctable = new Table({
  title: 'Stacked Table',
  mail: { to: 'qasim@zaidi.me', 'subject': 'Revision Report', from: 'qasim@zaidi.me' },
  stacked: true,
  head: ['Merchant', 'Unauth', 'Pending ack', 'Pending Ship', 'Delivered', 'Refunded'],
  columns: [ '15' ]
});

ctable.push(
    ['Deals',  '497(20)', '0 (11)', 20, 212, 101 ],
    ['Topups', 3000, 200 , 1800, 900, 20 ]
);

console.log(ctable.toString());

var ctable = new Table({
  title: 'Bar Table',
  bar: true,
  head: ['Month', 'Contribution' ],
  columns: [ '10' ],
  count: 8000
});

ctable.push(
    ['Jan',  '497(20)' ],
    ['Feb', 3000 ],
    ['Mar', 1000 ]
);

console.log(ctable.toString());

// bar table with attachment
var ctable = new Table({
  mail: { to: 'qasim@zaidi.me', 'subject': 'Revision Report', from: 'qasim@zaidi.me' },
  title: 'Bar Table with attachment',
  bar: true,
  attachment: true,
  head: ['Month', 'Contribution' ],
  columns: [ '10' ],
  count: 8000
});

ctable.push(
    ['Jan',  '497(20)' ],
    ['Feb', 3000 ],
    ['Mar', 1000 ]
);

console.log(ctable.toString());
