// 示例
App({
  onLaunch(options) {
    // 生命周期回调——监听小程序初始化
    // Do something initial when launch.
  },
  onShow(options) {
    // 生命周期回调——监听小程序启动或切前台
    // Do something when show.
  },
  onHide() {
    // 生命周期回调——监听小程序切后台
    // Do something when hide.
  },
  onError(msg) {
    // 错误监听函数
    console.log(msg)
  },
  onPageNotFound(res) {
    // 页面不存在监听函数
    wx.redirectTo({
      url: 'pages/...'
    }) // 如果是 tabbar 页面，请使用 wx.switchTab
  },
  globalData: 'I am global data in App.js'
})

// 获取到小程序全局唯一的 App 实例
var appInstance = getApp()
console.log(appInstance.globalData) // I am global data
