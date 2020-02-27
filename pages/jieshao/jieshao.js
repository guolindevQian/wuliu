// pages/jieshao/jieshao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jianjie1:"佛山老胡物流有限公司，始键于一九九八年，由佛山市运营部门批准，有自己的独立车场，专业运输车队，送货上门，专人收货发货，装货卸货。本公司拥有一批专业的管理人员和专业运输队伍，现代化办公设备，为客户提供最优质的服务，备有专人热线24小时为您提供货物查询业务咨询，信息反馈，监督服务，实现了诚信，准时、安全、便利的服务目标，赢得了广大客户的支持和依赖。",
    jianjie2:"233",
    fenbu:[
      "http://m.qpic.cn/psb?/V14JKMah4DngR8/HRtkaxqI5gF21czQZEBIthwoZbpvuXcAtWjRNPIacoQ!/b/dLgAAAAAAAAA&bo=NAM4BAAAAAARFys!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4DngR8/LjjhHpiUfvREW3F2YRTvGz33BOFTHCG14Ztg1PfH*3U!/b/dDQBAAAAAAAA&bo=oAU4BAAAAAARF7k!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4DngR8/I1GlkjSDUatoeV8A9Zfnm04B2b8T7IRU30mEhFNlzhk!/b/dL8AAAAAAAAA&bo=gALgAQAAAAARF0M!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4DngR8/SW38r07PlD*xYKqehvIgi3eMNDWl7*uwcrn7TRpdX8U!/b/dLgAAAAAAAAA&bo=aALDAAAAAAARF4k!&rf=viewer_4",
      "https://m.qpic.cn/psb?/V14JKMah4DngR8/q9dWPm2af6IdWzQLT.6HhHGATq717Lon*CW*27CjJrY!/b/dL4AAAAAAAAA&bo=aAGAAgAAAAARB9s!&rf=viewer_4",
      "https://m.qpic.cn/psb?/V14JKMah4DngR8/eW1MBpI5YY*xSd00bXQTES.wpXHzhEgWt4P77tQ243g!/b/dL8AAAAAAAAA&bo=OASABwAAAAARB4s!&rf=viewer_4",
      "https://m.qpic.cn/psb?/V14JKMah4DngR8/B3vdDoX7DxDnfqFKldgZmS3N3hT9DMCiTNVdD9.5BW8!/b/dL4AAAAAAAAA&bo=oAU4BAAAAAARB6k!&rf=viewer_4"
      
    ]
  },
  totianxiphone: function () {
    wx.makePhoneCall({
      phoneNumber: '18138911297',
    })
  },
  previewImage: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.fenbu;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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