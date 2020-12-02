import { http } from "./http";

/**
新片榜
https://api.douban.com/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a
*/
function new_movies(params) {
    http('/new_movies','get', params)
}
/**
口碑榜
https://api.douban.com/v2/movie/weekly?apikey=0df993c66c0c636e29ecbb5344252a4a
*/
function weekly(params) {
    http('/weekly','get',params) 
}
/**
北美票房榜
https://api.douban.com/v2/movie/us_box?apikey=0df993c66c0c636e29ecbb5344252a4a
 */
function us_box(params) {
    http('/us_box','get',params) 
}

// 暴露接口
export default {
    new_movies,
    weekly,
    us_box
}
