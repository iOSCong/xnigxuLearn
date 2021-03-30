// pages/segment/segment.js
var app = getApp()
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["选项一", "选项二", "选项三"],
    activeIndex: "0",
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad() {
    sliderWidth = (app.public.width / this.data.tabs.length);
    this.setData({
      sliderLeft: (app.public.width / this.data.tabs.length - sliderWidth)
    })
  },
  
  // 选择事件
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
})