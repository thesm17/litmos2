var baseUrl = "https://api.litmos.com/v1.svc/";
var options = { 
    'method': 'GET',
    'muteHttpExceptions' : true,
    'headers': {
      'apikey': 'ed8c2c0f-8d9f-4e0d-a4ff-76c897e53c54' }
  }

function runner(companyID, reportThreshold) {
  var trainingStatus = getCompanyTrainingStatus(companyID, reportThreshold);
  Logger.log(trainingStatus);
}

function getCompanyTrainingStatus (companyID, trainingThreshold) {
  var trainingThresholdDate = convertThresholdToDate(trainingThreshold);
  var users = getCompanyUsers(companyID);
  var userData = getAllUserData(users);
  
  //array of certified users
  var certifiedUsers = userData.filter(function (user) {return user.certificationStatus.certificationComplete} );
 
  //array of users who completed a course in the report threshold range
  var achievementUsers = userData.filter(function (user) {
    return (user.mostRecentCourseCompletionDate>trainingThresholdDate);
    
  });
 
  //array of people who started training in the report threshold range
  var startedInLastWeekUsers = userData.filter(function (user) {return user.daysSinceCreatedDate<trainingThreshold});

  //return certified if the certified array is nonempty
    if (certifiedUsers.length>0) {
      return {
        totalLearners: users.length,
        trainingStatus: certifiedUsers.length+" certified users",
        certifiedUsers: certifiedUsers,
        completedCoursesThisWeek: achievementUsers,
        startedThisWeek: startedInLastWeekUsers
        }
    }
  //return in progress if there have been certifications this week or new users created
    else if (achievementUsers || startedInLastWeekUsers){
    return {
      totalLearners: users.length,
      trainingStatus: "In Progress",
      completedCoursesThisWeek: achievementUsers,
      startedThisWeek: startedInLastWeekUsers
      }
    }
//return stalled if no progress this week
    else if (users) {
      return {
        totalLearners: users.length,
        trainingStatus: "Stalled",
        completedCoursesThisWeek: "",
        startedThisWeek: "",
        users
      }
    }
  //return no logins if there are no users
    else return {
      totalLearners: "0",
      trainingStatus: "No Users or Logins"
    }
  }