<style scoped>
.full-wrap {
  background: #eeeeee;
}
.index-list {
  height: 100%;
  width: 70%;
  text-align: center;
  margin: 0 auto;
}

.index-list > li {
  font-size: 16px;
  line-height: 2.5;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #3190ef;
  margin: 10px 0;
  background-color: #fff;
}

.index-list > li:active {
  background-color: #eee;
}

.index-list > li > a {
  text-decoration: none;
  color: #333;
  display: block;
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="full-wrap">
    <ul class="index-list flex-column flex-center">
      <li><router-link to="/login">温故知新</router-link></li>
      <li><router-link :to="{ name: 'ExaminationList', params: { type: 1 }}">10道小测试</router-link></li>
      <li><router-link  :to="{ name: 'ExaminationList', params: { type: 2 }}">20道小测试</router-link></li>
      <li><router-link  :to="{ name: 'ExaminationList', params: { type: 3 }}">30道小测试</router-link></li>
      <li><router-link  :to="{ name: 'ExaminationList', params: { type: 5 }}">50道小测试</router-link></li>
      <li><router-link to="/login">排名查询</router-link></li>
      <li><router-link to="/login">考试入口</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


