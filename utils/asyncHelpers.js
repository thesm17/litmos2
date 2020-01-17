function getCompanyUsers (companyID) {
  var companyUserData = getAllCompanyUsers(companyID);
  return companyUserData;
}

function getUserData (username) {

  var userAccountData =  getUser(username.UserName);

  var allAchievements =  getAchievements(username);

  var recentAchievements = getRecentAchievements(allAchievements,7);

  var certified = certificationTestPassed(username);

  var recentCourseTitle, mostRecentCourseCompletionDate;

  if (recentAchievements[0]) { 
    recentCourseTitle = recentAchievements[0].Title;
    mostRecentCourseCompletionDate = convertLitmosDate(recentAchievements[0].AchievementDate);}
  else {
    recentCourseTitle = "No recent courses completed";
    mostRecentCourseCompletionDate = "N/A"
  }


  return {
    name: userAccountData.FullName,
    certifiedUser: certified.certificationComplete,
    certificationStatus: certified,
    totalCoursesCompleted: allAchievements.length,
    recentCourseTitle: recentCourseTitle,
    recentCourseCompletionDate: mostRecentCourseCompletionDate,
    daysSinceLastLogin:daysSinceLastLogin(userAccountData.LastLogin),
    daysSinceCreatedDate: daysSinceCreatedDate(userAccountData.CreatedDate)
  }
}


function getAchievements (username) {
  
  //GET user achievement data with username and since seven days ago
  var achievements =  getLitmosAchievement(username);
  return achievements
}

function certificationTestPassed  (username){
  //below are the course IDs that together make up certification
  // PgqK7l17TdE1 is the MA essentials cert exam
  // ax6BzyMrCds1 is the SWS cert exam
  var certExamIds = ["PgqK7l17TdE1"];
  
  if (certExamIds.length==0){
    throw new Error({result:"No courses have been specific for awarding certification."});
  
  }
  //GET courses from litmos with [username]
  //will return JSON found above as `data`
  var userAchievementData =  getLitmosAchievement(username);
  var examsPassed = userAchievementData.filter(function (courseID) { return certExamIds.includes(courseID.CourseId)});
  return {
    certificationPercent: (examsPassed.length*100/certExamIds.length),
    certificationComplete: Math.floor(examsPassed.length/certExamIds.length),
    examData: {
      examsPassed: examsPassed.map(function (exam) {return exam.Title}),
      completionDates: examsPassed.map(function (exam) {return convertLitmosDate(exam.AchievementDate)})}
  }
}

function getAllUserData (users) {
  var userData = users.map(function (user) {
    var results =  getUserData(user)
    console.log(results);
    return results;
  });
  return Promise.all(userData);
}