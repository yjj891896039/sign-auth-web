import axios from "axios";
// response 拦截器
// 可以在接口响应后统一处理结果
var baseURL = process.env.NODE_ENV == 'development' ? '/api' : ''
const request=axios.create({
    timeout: 5000,
    baseURL
})

request.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = "application/json;charset=utf-8";
        return config;
    },error => {
 
        return Promise.reject(error)
    }
)
//导出
export default request