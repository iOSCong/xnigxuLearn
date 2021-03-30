// pages/sysSegment/sysSegment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateList: [
      { id: 0, value: '选项一' },
      { id: 1, value: '选项二' },
      { id: 2, value: '选项三' },
      { id: 3, value: '选项四' }
    ],
    dateIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  dateChange(e) {
    this.setData({
      dateIndex: parseInt(e.detail.value)
    })
  }
})