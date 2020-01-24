var baseUrl = "https://api.litmos.com/v1.svc/";
var options = { 
    'method': 'GET',
    'muteHttpExceptions' : true,
    'headers': {
      'apikey': 'ed8c2c0f-8d9f-4e0d-a4ff-76c897e53c54' }
  }


function runner(companyID, reportThreshold) {
  
  var cID = "308461967"
  var rTH = 7
  try {
  var trainingStatus = getCompanyTrainingStatus(cID, rTH);
  Logger.log(trainingStatus);



  
  
  } catch (err) {
    Logger.log(err)}
}

