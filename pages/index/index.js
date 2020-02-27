//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      "https://m.qpic.cn/psb?/V14JKMah4DngR8/SW38r07PlD*xYKqehvIgi3eMNDWl7*uwcrn7TRpdX8U!/b/dLgAAAAAAAAA&bo=aALDAAAAAAARB5k!&rf=viewer_4",
      'http://m.qpic.cn/psb?/V14JKMah4DngR8/LjjhHpiUfvREW3F2YRTvGz33BOFTHCG14Ztg1PfH*3U!/b/dDQBAAAAAAAA&bo=oAU4BAAAAAARF7k!&rf=viewer_4',
      'https://m.qpic.cn/psb?/V14JKMah4DngR8/jUz9Ci19PXkZdRJ9njCBKAe8XlUma8o5L4Y2*CKCWW4!/b/dLsAAAAAAAAA&bo=gAJoAQAAAAARB9s!&rf=viewer_4',
      'http://m.qpic.cn/psb?/V14JKMah4DngR8/167aIKxdoccgAIVPiq7*xn03tfHeab1oph59uQLR95Y!/b/dLYAAAAAAAAA&bo=8QHTAAAAAAARFwM!&rf=viewer_4'

    ],
    indicatorDots: false,
    autoplay: true,
    interval1: 5000,
    duration: 1000,
    circular: true,
    indicator: true,
    jian:"https://m.qpic.cn/psb?/V14JKMah4DngR8/1BeeRCkPK4GwkxBq1f.wMaMYJ2E2.BGEzYoxGQ7MSfk!/b/dL4AAAAAAAAA&bo=dAWjAAAAAAADB*A!&rf=viewer_4",
    xiangqing:[
      
      {
        name:"佛山老胡物流荆州分部",
        address:"荆州市318国道杨泗物流园内,佛山老胡物流提货点",
        phone:"13886628527（张总）"
      },
      {
        name: "佛山老胡物流武汉分部",
        address: "武汉市东西湖区九支沟汉联物流园B区8-10，佛山老胡物流提货点，星辰通落地配",
        phone: "18672363666"

      },
      {
        name: "佛山老胡物流澧县分部",
        address: "澧县湘西北物流园7栋126－127",
        phone: "0736－3363699，13974246519"
      },
      {
        name: "佛山老胡物流临澧分部",
        address: "临澧县福泰物流内",
        phone: "13974246519，13575228901"
      },
      {
        name: "佛山老胡物流宜昌分部",
        address: "宜昌市西陵区中南路81号果蔬物流园",
        phone: "0717-6568108，18972550760/18062989858"
      },
      {
        name: "佛山老胡物流松滋分部",
        address: "松滋市新江口镇杨家冲安置小区（创业园）2巷50号",
        phone: "0716-6990882，18986720760"
      },
      {
        name: "佛山老胡物流南海狮山分部",
        address: "佛山市南海区狮山镇桃源东路富众仓储1-4号",
        phone: "0757-85507562，85582153"
      },
      {
        name: "佛山老胡物流常德分部",
        address: "常德隆腾物流园10栋A区21-24栋",
        phone: "0736-2581777，13007366319（徐总）"
      }

    ]
  },
  totianxiphone: function () {
    wx.makePhoneCall({
      phoneNumber: '18138911297',
    })
  },
  tophone1:function(){
    wx.makePhoneCall({
      phoneNumber: '13886628527',
    })
  },
  tophone2: function () {
    wx.makePhoneCall({
      phoneNumber: '18672363666',
    })
  },
  tophone3: function () {
    wx.makePhoneCall({
      phoneNumber: '13974246519',
    })
  },
  tophone4: function () {
    wx.makePhoneCall({
      phoneNumber: '13575228901',
    })
  },
  tophone5: function () {
    wx.makePhoneCall({
      phoneNumber: '0717-6568108',
    })
  },
  tophone6: function () {
    wx.makePhoneCall({
      phoneNumber: '0716-6990882',
    })
  },
  tophone7: function () {
    wx.makePhoneCall({
      phoneNumber: '0757-85507562',
    })
  },
  tophone8: function () {
    wx.makePhoneCall({
      phoneNumber: '0736-2581777',
    })
  },

  previewImage: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.jian;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr.split(','),               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
