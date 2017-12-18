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
      <li>
        <router-link to="/mistake">温故知新</router-link>
      </li>
      <li @click="saveLimit(10)">
        <router-link :to="{ name: 'TrainsList'}">10道小测试</router-link>
      </li>
      <li @click="saveLimit(20)">
        <router-link :to="{ name: 'TrainsList'}" @click="sessionStorage.limit = 20">20道小测试</router-link>
      </li>
      <li @click="saveLimit(30)">
        <router-link :to="{ name: 'TrainsList'}" @click="sessionStorage.limit = 30">30道小测试</router-link>
      </li>
      <li @click="saveLimit(50)">
        <router-link :to="{ name: 'TrainsList'}" @click="sessionStorage.limit = 50">50道小测试</router-link>
      </li>
      <li>
        <router-link to="/rank">排名查询</router-link>
      </li>
      <li>
        <router-link to="/examination/list">考试入口</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //保存 limit
    saveLimit(num) {
      sessionStorage.limit = num;
    }
  }
};
</script>


