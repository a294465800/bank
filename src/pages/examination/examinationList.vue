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
    <h3 class="test-title">请选择题库 {{title}}</h3>
    <ul class="test-list">
      <template v-if="list.length > 0">
        <li class="test-item" v-for="(item, index) in list" :key="item.id">
          <span class="test-name">{{item.name}}</span>
          <span class="test-btn" @click="startExamination(item)">开始练习</span>
        </li>
      </template>
      <template v-else>
        <p>还没有题库</p>
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
    sessionStorage.type = this.$route.params.type;
    this.$http.getExaminationList(res => {
      this.list = res.data.list;
    });
    console.log(sessionStorage.type)
    this.title = this.getTitle(sessionStorage.type)
  },

  methods: {
    getTitle(type) {
      let str =''
      type = Number(type)
      switch (type) {
        case 2:
          str = "（20道题）";
          break;
        case 3:
          str = "（30道题）";
          break;
        case 5:
          str = "（50道题）";
          break;
        default:
          str = "（10道题）";
      }
      return str;
    },
    //考试跳转
    startExamination(row) {
      this.$router.push({
        name: "Examination",
        params: {
          id: row.id
        }
      });
    }
  }
};
</script>


