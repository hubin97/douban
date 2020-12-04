// usbox/usbox.js
import http from "../utils/api";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    date: '',
    usboxs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http.us_box({
      success: res=>{
        console.log('us_box:', res)
        let subjects = res['subjects']
        var films = []
        for (let index = 0; index < subjects.length; index++) {
          const meta = subjects[index]['subject']
          // console.log('meta:', meta)
          let casts = meta['casts']
          var casts_name = ''
          for (let index = 0; index < casts.length; index++) {
            const casts_meta = casts[index];
            //console.log('casts_meta:', casts_meta)
            casts_name += ('/' + casts_meta['name'])
          }
          let directors = meta['directors']
          var directors_name = ''
          var directors_detail = ''
          for (let index = 0; index < directors.length; index++) {
            const directors_meta = directors[index];
            //console.log('directors_meta:', directors_meta)
            directors_name += ('/' + directors_meta['name'])
            directors_detail += ('/' + directors_meta['name'] + directors_meta['name_en'])
          }
          let detail = meta['pubdates'][0] + casts_name + directors_name + '/' + meta['durations'][0] + '/' + meta['genres'] + directors_detail
      
          let filmMeta = {
            imgpath: meta['images']['small'],
            title: meta['title'],
            detail: detail,
            rating: meta['rating']['average']
          }
          films.push(filmMeta)
        }
        console.log('film:', films)
        this.setData({ usboxs: films, date: res['date'], title: res['title']})
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