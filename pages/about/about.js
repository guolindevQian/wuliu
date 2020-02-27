// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"佛山老胡物流",
    shouji1:"0757-85507562",
    shouji2:"0757-85582153",
    shouji3:"027-83890156",
    phone:"13809701258",
    dizhi:"佛山市南海区狮山镇桃源东路(富众仓储物流)D座1至4号",
    wangzhi:"www.laohuwuliu.com.cn",
    youxiang:"laohuwuliu@163.com",
    url:"https://m.qpic.cn/psb?/V14JKMah4DngR8/bPzfP9vlXU4smYJHOXZ4*iERIJdIKK6pA25LpiZDptg!/b/dL4AAAAAAAAA&bo=4wLiAwAAAAARBzA!&rf=viewer_4"
  },
  totianxiphone: function () {
    wx.makePhoneCall({
      phoneNumber: '18138911297',
    })
  },
  tophone:function(){
    wx.makePhoneCall({
      phoneNumber: '0757-85507562',
    })
  },
  previewImage: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.url;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr.split(','),               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  totousu:function(){
    wx.makePhoneCall({
      phoneNumber: '13809701258',
    })
  },
  click: function (e) {
    wx.openLocation({
      latitude: 23.169009,
      longitude: 113.079585,
      scale: 15,
      name: '佛山市南海区大沥老胡物流',
      address: '佛山市南海区狮山镇桃源东路(富众仓储物流)D座1至4号'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})