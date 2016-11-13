if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test.xlsx');
var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
var oldZ = 0;
var list_data = new Array();
var buf = new Array();
for (z in worksheet) {
    /* all keys that do not begin with "!" correspond to cell addresses */
    if(z[0] === '!') continue;
    if(oldZ<z[1])
    {
      oldZ = z[1];
      //alert(z[1] + "=" + JSON.stringify(worksheet[z].v));
      if(buf.length===0)
      {
        buf.push(worksheet[z].v);
        continue;
      }
      else {
        list_data.push(buf);
        buf = new Array();
      }

    }
    buf.push(worksheet[z].v);
}
//alert(list_data[0]);
//alert(list_data[1]);
