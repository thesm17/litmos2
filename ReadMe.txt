@Function getCompanyTrainingStatus returns and object with the following keys:
{
  totalLearners,
  trainingStatus,
  certifiedUsers,
  completedCoursesThisWeek,
  startedThisWeek,
}

@Function displayTrainingStatus takes in a getCompanyTrainingStatus object and formats it for display and put it on the row

@Trigger cron: at noon and midnight, go through all the companies in the first three sheets and get their updated training information, with a 1 minute gap between each one. so for each row, getCompanyTrainingStatus, and then displayTrainingStatus.

Triggerable: when a button is pressed, go through each row in that sheet and update with a 1-minute delay between rows