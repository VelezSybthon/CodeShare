// pages/chatgroup/chatgroup.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    userNumber: '0',
    userList: [],
    c: "",
    prohibit: '',
  },
  data:{
    telValue: '',
    getInput: ''
  },
  getInput:function(e){
      this.setData({
        telValue: e.detail.value
      })
  },
  // 点击录音开始播放事件
  my_audio_click: function (e) {
    var src = e.currentTarget.dataset.src;
      console.log('url地址', src);
      innerAudioContext.src = src
      innerAudioContext.seek(0);
      innerAudioContext.play();
  },
  /**
   * 页面的初始数据
   */
  data: {
    arrays: [{
    path:"images/wx_login.png",
     title:'群聊一',
     content:'Lab7'},
       {
     title:'群聊二',
     content:'TESTGROUP'},
       {
          title: '群聊三',
          content: 'AME'
       },
       {
          title: '群聊四',
          content: '123123'
       },
],
 },

 readDetail: function (e) {//点击列表项函数
    var index = e.currentTarget.dataset.id; //打印可以看到，此处已获取到了对应的id
    console.log('位置：'+index);
 },
  // 首页
  goHome:function(param) {
    wx.redirectTo({
      url: '/pages/start/start'
    })
 
  },
  gochat:function(param) {
    wx.redirectTo({
      url: '/pages/contact/contact'
    })
 
  },
})
  
