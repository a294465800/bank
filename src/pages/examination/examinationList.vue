<style scoped>
.test-title {
  text-align: center;
  font-size: 16px;
}

.test-list {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.test-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
  border-bottom: 1px solid #ccc;
}

.test-name {
  font-size: 16px;
}

.test-btn {
  line-height: 2.3;
  font-size: 14px;
  width: 6rem;
  background-color: #3190ef;
  color: #fff;
  text-align: center;
  border-radius: 4px;
}

.test-btn:active {
  background-color: #2977c5;
}
</style>

<template>
  <div class="wrap">
    <h3 class="test-title">请选择考试</h3>
    <ul class="test-list">
      <template v-if="list.length > 0">
        <li class="test-item" v-for="(item, index) in list" :key="item.id">
          <span class="test-name">{{item.name}}</span>
          <span class="test-btn" @click="startExamination(item)">开始考试</span>
        </li>
      </template>
      <template v-else>
        <p>还没有考试</p>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      title: ""
    };
  },

  created() {
    this.$http.getExaminations({ token: localStorage.bank_token }, res => {
      this.list = res.data.data;
    });
  },

  methods: {
    //考试跳转
    startExamination(row) {
      sessionStorage.exam_id = row.id;
      this.$router.push({
        name: "Examination"
      });
    }
  }
};
</script>


