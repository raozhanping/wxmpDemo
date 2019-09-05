//index.js
Page({
  data: {
    // 页面的初始数据
    text: "This is page data."
  },
  onLoad: function (options) {
    // 生命周期回调—监听页面加载
    // Do some initialize when page load.
  },
  onReady: function () {
    // 生命周期回调—监听页面显示
    // Do something when page ready.
  },
  onShow: function () {
    // 生命周期回调—监听页面初次渲染完成
    // Do something when page show.
  },
  onHide: function () {
    // 生命周期回调—监听页面隐藏
    // Do something when page hide.
  },
  onUnload: function () {
    // 生命周期回调—监听页面卸载
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // 监听用户下拉动作
    // Do something when pull down.
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // 用户点击右上角转发
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // 页面滚动触发事件的处理函数
    // Do something when page scroll
  },
  onResize: function () {
    // 页面尺寸改变时触发，详见 响应显示区域变化
    // Do something when page resize
  },
  onTabItemTap(item) {
    // 当前是 tab 页时，点击 tab 时触发
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  }
})