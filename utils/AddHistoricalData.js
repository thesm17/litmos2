var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheetByName("Historical Training Status");

function storeCurrentStatusForWeek() {
  var r = sheet.getRange("A:O");
  var rows = r.getNumRows();

}

function storeRowTrainingStatus (row) {
  var rowString = row+":"+row;
  var row = sheet.getRange(rowString);
  var totalCols = row.getNumColumns();
  var currentCols = row.getLastColumn();
  console.log("Total columns: "+totalCols+"\nCurrent columns: "+currentCols);
  
}