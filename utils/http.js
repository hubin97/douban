module.exports = {
    http(url, method, params) {
        let apikey = '0df993c66c0c636e29ecbb5344252a4a'
        let data = {
            apikey
        }
        if (params.data) {
            for (let key in params.data) {
                if (params.data[key] == null || params.data[key] == 'null') {
                    delete params.data[key]
                }
            }
            data = {...data,...params.data} // 
        }
        wx.request({
            url: 'https://api.douban.com/v2/movie' + url,
            method:method=='post'?'post':'get',
            data,
            header: {'content-type':'json'},
            success(result) {
                params.success&&params.success(result.data)
            },
            fail(error) {
                params.fail&&params.fail(error)
            }
        })
    }
}