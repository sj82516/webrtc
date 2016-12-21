### WebRTC
參考HTML5 Rocks 教學所製作的網頁   
Signal Server使用Nodejs + Socketio架設而成
ICE Server則用google public STUN 加上到numb.viagenie.ca註冊免費的TURN Server  

操作時記得將Server URL改掉!
下載專案後npm install & npm run start
接著用瀏覽器開啟 server_url:4200，建議使用Chrome最穩定，Opera和Firefox也行  
總共要開兩個視窗，其中一個視窗按下call，這樣就完成視訊通訊了
我有佈建到遠端Server，是可以成功在兩個電腦完成WebRTC通訊的！

更詳細內容請參考[我的網誌](http://sj82516-blog.logdown.com/posts/1207821)  
有任何問題歡迎留言，謝謝  

[TODO]
目前沒有任何的錯誤處理，例如裝置不支援WebRTC等  
網頁記得一次只能開兩個，目前只支援P2P視訊，而且只能其中一邊Call，否則會出現錯誤