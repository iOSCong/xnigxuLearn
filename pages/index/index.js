//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    listArr: [
      { id: 0, title: '交易平台', path: '../../pages/tradingPlatform/home/home' },
      { id: 1, title: '生成二维码', path: '../../pages/qrcode/qrcode' },
      { id: 2, title: '扫描二维码', path: '../scanCode/scancode' },
      { id: 3, title: '手势密码', path: '../gesturePassword/gesture' },
      { id: 4, title: '自定义Segment选择器', path: '../segment/segment' },
      { id: 5, title: '拨打电话', path: '../callup/callup' },
      { id: 6, title: '轮播图', path: '../swiper/swiper' },
      { id: 7, title: '仿系统Segment选择器', path: '../sysSegment/sysSegment'},
      { id: 8, title: '订阅消息', path: '../templateMessage/template'},
      { id: 9, title: '获取手机号授权', path: '../getPhoneNum/getPhoneNum'},
    ]

  },

  itemClick(e) {
    var that = this;
    var url = that.data.listArr[parseInt(e.currentTarget.id)].path;
    wx.navigateTo({
      url: url,
    })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
