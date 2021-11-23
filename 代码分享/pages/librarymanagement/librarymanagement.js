// pages/a/a.js
//获取应用实例
const app = getApp()

Page({
  data: {
    selectList: [{
      "id": "10",
      "text": "给予开发者权限"
    }, {
      "id": "21",
      "text": "给予测试人员权限"
    }, {
      "id": "21",
      "text": "给予游客权限"
    },
    {
      "id": "21",
      "text": "踢出讨论组"
    },
    ],
    select: false,
    select_value1: {
      "id": "0",
      "text": "成员1"
    },
    select_value2: {
      "id": "0",
      "text": "成员2"
    },
    select_value3: {
      "id": "0",
      "text": "成员3"
    }
  },
  onLoad: function () {
    
  },
  
  gotocontact: function(param){
    wx.redirectTo({
 
      url: '/pages/contact/contact',
 
    })
  },
})