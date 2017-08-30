var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1532456627',
  channelSecret: '95f6e1182e9dfc44326563ccd1a960f0',
  channelAccessToken: 'XMmH173RRphLqCr7JGYqLnw9tKCTb0zB1+S6Bl0KX1GyKwIP5Uk1tEXPHahBt4CrA3SJk3w3ycgy7vB4Xb2+F/cibAAfPAdtWUajGdHQcQ/lfK/0KQ6tim2+toriogZ1hGxdfTbquKGGlj8aiE7vNAdB04t89/1O/w1cDnyilFU='
});
bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
  console.log('1xxx');
});
bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
    var userId = 'Uf84359155aca22c19ecb079fb584e09d';
    var sendMsg = '要發送的文字';
    event.reply(msg).then(function(data) {
      // success 
      console.log(msg);
      console.log('2xxx');
      bot.push(userId,sendMsg);
      console.log('send: '+sendMsg);
    }).catch(function(error) {
      // error 
      console.log('error');
      console.log('3xxx');
    });
  }
});
setTimeout(function(){
    var userId = 'Uf84359155aca22c19ecb079fb584e09d';
    var sendMsg = '要發送的文字';
    bot.push(userId,sendMsg);
    console.log('send: '+sendMsg);
    console.log('4xxx');
},20000);

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
  console.log('5xxx');
});
