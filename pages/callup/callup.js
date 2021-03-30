// pages/callup/callup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '10086'
  },

  inputHandle(e) {
    var that = this;
    that.data.inputValue = e.detail.value;
  },

  callupClick(e) {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.inputValue
    })
  }

})