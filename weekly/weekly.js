// weekly/weekly.js
import http from "../utils/api";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    weeklys: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http.weekly({
      success: res=>{
        console.log("weekly:", res)
        let subjects = res['subjects']
        var films = []
        for (let index = 0; index < subjects.length; index++) {
          const meta = subjects[index]['subject']
          let filmMeta = {
            imgpath: meta['images']['small'],
            title: meta['title'],
            rating: meta['rating']['average']
          }
          films.push(filmMeta)
        }
        console.log('weeklys:', films)
        this.setData({ weeklys: films })
      },
      fail: err=>{
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: (res) => {
    //     var latitude = res.latitude // 纬度
    //     var longitude = res.longitude // 经度
    //     console.log('latitude:', latitude)
    //     console.log('longitude:', longitude)
    //   }
    // })
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