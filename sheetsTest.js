var headers =   

function getUser(username) {
  var request1 = { 
    method: 'GET',
    url: "https://api.litmos.com/v1.svc/users/"+username+"?source=smittysapp&format=json",
    headers:  { 'cache-control': 'no-cache',
                    Connection: 'keep-alive',
                    'Accept-Encoding': 'gzip, deflate',
                    Host: 'api.litmos.com',
                    'Postman-Token': '2916a6b2-a2ad-466a-a718-dc5e7c1321d8,1db260b7-295a-4b14-af62-37422832bf4a',
                    'Cache-Control': 'no-cache',
                    Accept: '*/*',
                    'User-Agent': 'PostmanRuntime/7.20.1',
                    apikey: 'ed8c2c0f-8d9f-4e0d-a4ff-76c897e53c54' }
  }
  
  var userData = UrlFetchApp.fetchAll([request1]);
  Logger.log(userData.getContentText());
}

getUser("c3u313420602e");