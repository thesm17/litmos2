function convertLitmosDate (litmosDate) {
  var rawDate = litmosDate;
  var convert = rawDate.substr(-7,5);
  var conversionFactor=(convert*60*600);
  var middleDate = rawDate.substr(6);
  var lateDate = middleDate.split("-")[0];
  var usefulDate = new Date(0);  
  usefulDate.setMilliseconds(+lateDate + +conversionFactor);
return usefulDate;
}

function daysSinceCreatedDate (createdDate) {
  var today = new Date();
  var createDateLog = new Date(createdDate);
  var timeSinceAccountCreate = (today-createDateLog);
  var daysSinceAccountCreate = (timeSinceAccountCreate/(1000*60*60*24)).toFixed(2)
  return (daysSinceAccountCreate);
}

function daysSinceLastLogin (lastLogin) {
  var today = new Date();
  var lastLog = new Date(lastLogin);
  var timeSinceLastLogin = (today-lastLog);
  var daysSinceLastLogin = (timeSinceLastLogin/(1000*60*60*24)).toFixed(2)
  return (daysSinceLastLogin);
}

function convertThresholdToDate (numdays)  {
  var d = new Date();
  var datebefore = d-(numdays*1000*60*60*24);
  return datebefore;
}

function getRecentAchievements (achievements, numDays)  {
  var recent = achievements.filter(achievement => {
    var today = new Date();
    var achievementDate = convertLitmosDate(achievement.AchievementDate)
    var daysAgo = ((today-achievementDate)/(1000*60*60*24)).toFixed(2);
    return (daysAgo<numDays);
 })
  return recent;
}

function parseUsername (username)  {
  return username.split("u")[0].substr(1);
}