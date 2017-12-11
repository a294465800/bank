<style scoped>
.rank-title {
  font-size: 18px;
  margin: 10px 0 20px;
  text-align: center;
}

.rank-list {
  font-size: 15px;
  border: 1px solid #999;
}

.rank-head {
  font-weight: 700;
  background-color: #eee;
  padding-left: 10px;
  padding-right: 10px;
}

.rank-row {
  padding-left: 10px;
  padding-right: 10px;
}

.rank-head,
.rank-row {
  display: flex;
  flex-direction: row;
}

.rank-head > span,
.rank-row > span {
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
}

.stripe {
  background-color: #efefef;
}

.rank-index {
  width: 3rem;
}

.rank-score {
  width: 4rem;
}

.rank-number {
  flex: 1;
}

.rank-name {
  flex: 1;
}
.wrap {
  padding-bottom: 30px;
}
</style>

<template>
  <div class="loading-wrap" v-if="loading">
    <i class="el-icon-loading"></i>
  </div>
  <div class="wrap" v-else>
    <h1 class="rank-title">考试成绩排名</h1>
    <ul class="rank-list">
      <li class="rank-head">
        <span class="rank-index">排名</span>
        <span class="rank-number">员工号</span>
        <span class="rank-name">姓名</span>
        <span class="rank-score">分数</span>
      </li>
      <li class="rank-row" :class="{stripe: index % 2 === 1}" v-for="(rank,index) in rankList" :key="rank.id">
        <span class="rank-index">{{index + 1}}</span>
        <span class="rank-number">{{rank.number}}</span>
        <span class="rank-name">{{rank.name}}</span>
        <span class="rank-score">{{rank.score}}分</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      rankList: []
    };
  },

  created() {
    this.$http.getRank(res => {
      this.rankList = res.data.rank;
      this.loading = false;
    });
  }
};
</script>
