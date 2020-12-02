//index.js
//获取应用实例
import http from "../../utils/api";

Page({
  onLoad: function () {
    console.log('bindViewTap--')
    // http.new_movies({
    //   data: {
    //   },
    //   success: res=>{
    //     console.log('请求成功', res)
    //   },
    //   fail: err=>{
    //     console.log(err)
    //   }
    // })
    http.weekly({
      data: {
      },
      succuss: res=> {
        console.log('请求成功', res)
      },
      fail: err=> {
        console.log(err)
      }
    })
  }
})
