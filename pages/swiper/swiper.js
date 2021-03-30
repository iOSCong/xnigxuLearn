// pages/swiper/swiper.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
'https://onegoods.nosdn.127.net/resupload/2016/9/18/4082e075e9ff72110bb1d73750be065b.jpg','https://onegoods.nosdn.127.net/resupload/2016/9/20/01d732b0c46a38fc07bbc887dfe23af9.jpg','https://onegoods.nosdn.127.net/resupload/2016/9/19/777e4b1711fb1b0283726cb0b197e8ba.jpg','https://onegoods.nosdn.127.net/resupload/2016/9/20/f2f210633ca371ea6dc56a4b8916a15d.jpg','https://onegoods.nosdn.127.net/resupload/2016/9/21/33c38d5283a862b2523fe2e085355cb2.jpg','https://res.126.net/p/dbqb/resupload/onlinepath/2016/7/28/0/69e1275c4460f97f2d4b26d716348892.jpg'],
    indicatorDots: true,
    autoplay: true,
    circular: false,
    interval: 3000,
    duration: 500,
    windowWidth: app.public.width
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
  
})