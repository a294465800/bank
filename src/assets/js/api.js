import axios from 'axios'
import qs from 'qs'

// const host = 'https://xcx.xiashantown.cn/'
const host = 'http://192.168.3.44:8081/api/v1/'

/*
  配置 axios
*/
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.interceptors.request.use(config => {
  //在发送 post 请求请设置一下数据格式
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  console.log('错误的传参！')
  return Promise.reject(error)
})

export default {
  host: host,

  errFnc(err) {
    window.alert(err.response.data.msg)
  },

  /**
   * 登录
   * @param {Object} data {username, password}
   * @param {Function} cb 回调
   */
  postLogin(data, cb) {
    axios.post(host + 'staff/login', data)
      .then(res => {
        typeof cb === 'function' && cb(res)
      })
      .catch(err => {
        this.errFnc(err)
      })
  },

  /**
   * 获取错题
   * @param {Object} data 
   * @param {Function} cb 回调
   */
  getWrongQuestions(data, cb) {
    axios.get(host + 'mistakes', {
        params: data
      })
      .then(res => {
        typeof cb === 'function' && cb(res)
      })
      .catch(err => {
        this.errFnc(err)
      })
  },

  /**
   * 获取考试列表
   * @param {Object} data {limit, warehouse_id}
   * @param {Function} cb 回调
   */
  getExaminationList(data, cb) {
    axios.get(host + 'questions', {
      params: data
    })
      .then(res => {
        typeof cb === 'function' && cb(res)
      })
      .catch(err => {
        this.errFnc(err)
      })
  },

  /**
   * 获取考试题目
   * @param {Function} cb 
   */
  getExamination(data, cb) {
    axios.get(host + 'trains', {
        params: data
      })
      .then(res => {
        typeof cb === 'function' && cb(res)
      })
      .catch(err => {
        this.errFnc(err)
      })
  },

  /**
   * 提交考试内容
   * @param {Object} data 
   * @param {Function} cb 回调
   */
  postExamination(data, cb) {
    axios.post(host + 'finish/train', data)
      .then(res => {
        typeof cb === 'function' && cb(res)
      })
      .catch(err => {
        this.errFnc(err)
      })
  },

  /**
   * 获取排名
   * @param {Function} cb 回调
   */
  getRank(cb) {
    axios.get(host + 'rank')
      .then(res => {
        typeof cb === 'function' && cb(res)
      })
      .catch(err => {
        this.errFnc(err)
      })
  }
}
