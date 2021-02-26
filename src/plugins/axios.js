import axios from 'axios'
//创建axios的一个实例 
var instance = axios.create({
    baseURL:'',//接口统一域名
    timeout: 6000  //设置超时
})
 
// 请求拦截器
instance.interceptors.request.use(function (config) {
 
    return config;
}, function (error) {
    // 请求错误
    return Promise.reject(error);
});
 
//响应拦截器
instance.interceptors.response.use(function (response) {
    
    return response;
}, function (error) {
    // 响应错误
    console.log('拦截器报错', error);
    return Promise.reject(error);
});
 

export default instance