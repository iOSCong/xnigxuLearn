// pages/qrcode/qrcode.js
const QR = require('../../utils/qrcode.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.buttonClick();
  },

  inputchange(e) {
    var that = this;
    that.data.message = e.detail.value;
  },

  buttonClick() {
    var that = this;
    var size = that.setCanvasSize();//动态设置画布大小
    that.createQrCode(that.data.message, "canvas", size.w, size.h);
  },

  //适配不同屏幕大小的canvas
  setCanvasSize: function () {
    var size = {};
    try {
      var res = wx.getSystemInfoSync();
      var scale = 750 / 686;//不同屏幕下canvas的适配比例；设计稿是750宽
      var width = res.windowWidth / scale;
      var height = width;//canvas画布为正方形
      size.w = width;
      size.h = height;
    } catch (e) {
      // Do something when catch error
      console.log("获取设备信息失败" + e);
    }
    return size;
  },

  createQrCode: function (url, canvasId, cavW, cavH) {
    //调用插件中的draw方法，绘制二维码图片
    QR.qrApi.draw(url, canvasId, cavW, cavH);
  },

})