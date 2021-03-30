// pages/main/index.js
var Gesture = require("../../utils/wxlocker.js");

Page({
  data: {
    title: '请设置手势密码',
    resetHidden: false,
    titleColor: ""
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    Gesture.lock.init();
    this.initState();
  },
  
  //设置提示语与重置按钮
  initState: function () {
    var resetHidden = Gesture.lock.resetHidden;
    var title = Gesture.lock.title;
    var titleColor = Gesture.lock.titleColor;
    this.setData({
      resetHidden: resetHidden,
      title: title,
      titleColor: titleColor
    });
  },
  touchstart (e) {//touchstart事件绑定
    Gesture.lock.bindtouchstart(e);
  },
  touchmove (e) {//touchmove事件绑定
    Gesture.lock.bindtouchmove(e);
  },
  touchend (e) {//touchend事件绑定
    Gesture.lock.bindtouchend(e, this.lockSucc);
    this.initState();
  },
  lockSucc () {//解锁成功的回调函数
    wx.showToast({
      title: '解锁成功',
    })
  },
  lockreset () {
    Gesture.lock.updatePassword();
    this.initState();
  }
})