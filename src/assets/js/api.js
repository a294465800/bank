import axios from 'axios'
import qs from 'qs'

// const host = 'https://xcx.xiashantown.cn/'
// const host = 'http://192.168.3.44:8081/api/v1/'
const host = 'http://119.23.202.220:8099/api/'

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
    window.alert(err.msg)
  },

  /**
   * 登录
   * @param {Object} data {username, password}
   * @param {Function} cb 回调
   */
  postLogin(data, cb) {
    axios.post(host + 'staff/login', data)
      .then(res => {
        if (res.data.code === '200') {
          typeof cb === 'function' && cb(res)
        } else {
          this.errFnc(res.data)
        }
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
        if (res.data.code === '200') {
          typeof cb === 'function' && cb(res)
        } else {
          this.errFnc(res.data)
        }
      })
      .catch(err => {
        this.errFnc(err)
      })
  },

  /**
   * 获取考试列表
   * @param {Object} data {token}
   * @param {Function} cb 回调
   */
  getTrainsList(data, cb) {
    axios.get(host + 'trains', {
        params: data
      })
      .then(res => {
        if (res.data.code === '200') {
          typeof cb === 'function' && cb(res)
        } else {
          this.errFnc(res.data)
        }
      })
      .catch(err => {
        this.errFnc(err)
      })
  },

  /**
   * 获取考试题目
   * @param {Object} data {limit, warehouse_id}
   * @param {Function} cb 
   */
  getTrains(data, cb) {
    axios.get(host + 'questions', {
        params: data
      })
      .then(res => {
        if (res.data.code === '200') {
          typeof cb === 'function' && cb(res)
        } else {
          this.errFnc(res.data)
        }
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
  postTrains(data, cb) {
    axios.post(host + `finish/train`, data)
      .then(res => {
        if (res.data.code === '200') {
          typeof cb === 'function' && cb(res)
        } else {
          this.errFnc(res.data)
        }
      })
      .catch(err => {
        this.errFnc(err)
      })
  },

  /**
   * 获取考试列表
   * @param {*} data 
   * @param {Function} cb 回调
   */
  getExaminations(data, cb) {
    axios.get(host + 'exams', {
        params: data
      })
      .then(res => {
        if (res.data.code === '200') {
          typeof cb === 'function' && cb(res)
        } else {
          this.errFnc(res.data)
        }
      })
      .catch(err => {
        this.errFnc(err)
      })
  },

  /**
   * 获取考试内容
   * @param {String} id 
   * @param {Function} cb 回调
   */
  getExamination(id, data, cb) {
    axios.get(host + `exam/${id}`, {
        params: data
      })
      .then(res => {
        if (res.data.code === '200') {
          typeof cb === 'function' && cb(res)
        } else {
          this.errFnc(res.data)
        }
      })
      .catch(err => {
        this.errFnc(err)
      })
  },

  /**
   * 提交考试
   * @param {String} id 
   * @param {Object} data {token, answer}
   * @param {Function} cb 回调
   */
  postExamination(id, data, cb) {
    axios.post(host + `finish/exam/${id}`, data)
      .then(res => {
        if (res.data.code === '200') {
          typeof cb === 'function' && cb(res)
        } else {
          this.errFnc(res.data)
        }
      })
      .catch(err => {
        this.errFnc(err)
      })
  },

  /**
   * 获取排名
   * @param {Object} data {token}
   * @param {Function} cb 回调
   */
  getRank(data, cb) {
    axios.get(host + 'staffs', {
        params: data
      })
      .then(res => {
        if (res.data.code === '200') {
          typeof cb === 'function' && cb(res)
        } else {
          this.errFnc(res.data)
        }
      })
      .catch(err => {
        this.errFnc(err)
      })
  },

  /**
   * 提现
   * @param {Object} data {number}
   * @param {Function} cb 回调
   */
  getCash(data, cb) {
    axios.get(host + 'cash', {
        params: data
      })
      .then(res => {
        if (res.data.code === '200') {
          typeof cb === 'function' && cb(res)
        } else {
          this.errFnc(res.data)
        }
      })
      .catch(err => {
        this.errFnc(err)
      })
  },

  /**
   * 回去用户信息
   * @param {Object} data token
   * @param {Function} cb 
   */
  getInfo(data, cb) {
    axios.get(host + 'staff/info', {
        params: data
      })
      .then(res => {
        if (res.data.code === '200') {
          typeof cb === 'function' && cb(res)
        } else {
          this.errFnc(res.data)
        }
      })
      .catch(err => {
        this.errFnc(err)
      })
  },

  /**
   * 提交个人信息
   * @param {Object} data {token, password, alipay}
   * @param {Function} cb 回调
   */
  postInfo(data, cb) {
    axios.post(host + `staff/info`, data)
      .then(res => {
        if (res.data.code === '200') {
          typeof cb === 'function' && cb(res)
        } else {
          this.errFnc(res.data)
        }
      })
      .catch(err => {
        this.errFnc(err)
      })
  },

  /**
   * 登录校验
   */
  checkLogin(data, cb) {
    axios.get(host + 'check', {
        params: data
      })
      .then(res => {
        if (res.data.code === '200') {
          typeof cb === 'function' && cb(true)
        } else {
          typeof cb === 'function' && cb(false)
        }
      })
      .catch(err => {
        this.errFnc(err)
      })
  }
}
