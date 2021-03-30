// pages/scanCode/scancode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scanedMessage: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  scanButtonClick() {
    var that = this
    wx.scanCode({
      success: (res) => {
        that.setData({
          scanedMessage: res.result
        });
      }
    })
  }

})