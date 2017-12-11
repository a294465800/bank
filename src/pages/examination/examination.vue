<style scoped>
.test-title {
  font-size: 18px;
  margin: 10px 0 15px;
  text-align: center;
}
.question-list {
  padding: 10px;
}
.question-option {
  padding-left: 15px;
}

.submit-btn {
  display: block;
  margin: 10px auto;
}

.question-item {
  margin-bottom: 25px;
}
.tips-message {
  word-break: break-all;
}
</style>

<template>
  <div v-if="loading" class="loading-wrap">
    <i class="el-icon-loading"></i>
  </div>
  <div class="wrap" v-else>
    <h1 class="test-title">考试标题</h1>
    <ul class="question-list">
      <li class="question-item" v-for="(question, index) in questions" :key="question.id">
        <h3>{{(index + 1) + '.' + question.title}}</h3>
          <el-radio-group class="question-option" v-if="question.type === 'A'" v-model="answer[question.id]">
            <el-radio :label="item.id" v-for="(item) in question.options" :key="item.id">{{item.id + '.' + item.value}}</el-radio>
          </el-radio-group>
          <el-checkbox-group class="question-option" v-else-if="question.type === 'B'"  v-model="answer[question.id]">
            <el-checkbox :label="item.id" v-for="(item) in question.options" :key="item.id">{{item.id + '.' + item.value}}</el-checkbox>
          </el-checkbox-group>
      </li>
    </ul>

    <el-button type="primary" class="submit-btn" @click="submit">提交</el-button>

    <el-dialog title="提示" :visible.sync="examTipsDialog" width="80%" center>
      <span class="tips-message">{{dialogMessage}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="examTipsDialog = false">取 消</el-button>
        <el-button size="small" type="primary" @click="examConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      examTipsDialog: false,
      dialogMessage: "",

      questions: [],

      answer: []
    };
  },

  created() {
    const id = {
      id: this.$route.params.id,
      type: sessionStorage.type
    };
    this.$http.getExamination(id, res => {
      for (let it of res.data.questions) {
        if (it.type === "A") {
          this.answer[it.id] = "";
        } else {
          this.answer[it.id] = [];
        }
      }
      this.questions = res.data.questions;
      this.loading = false;
    });
  },

  methods: {
    submit() {
      const answer = this.answer;
      let left = [];
      for (let i in answer) {
        if (answer[i][0]) {
          continue;
        } else {
          left.push(i);
        }
      }
      if (left.length > 0) {
        this.examTipsDialog = true;
        const str = `你还有第${left.join(",")}题没有完成，请先完成答卷？`;
        this.dialogMessage = str;
      } else {
        this.$router.push({ name: "Reword" });
      }
    },

    examConfirm() {
      this.examTipsDialog = false;
    }
  }
};
</script>

