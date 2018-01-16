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

.answer-p {
  font-size: 14px;
}

.answer {
  color: red;
}
</style>

<template>
  <div v-if="loading" class="loading-wrap">
    <i class="el-icon-loading"></i>
  </div>
  <div class="wrap" v-else>
    <h1 class="test-title">温故知新</h1>
    <template v-if="mistakes.length > 0">
      <ul class="question-list">
        <li class="question-item" v-for="(question, index) in mistakes" :key="question.id">
          <h3>{{(index + 1) + '.' + question.topic}}</h3>
          <el-radio-group class="question-option" v-if="question.type == '1'" v-model="answer[index]">
            <el-radio label="A">{{'A.' + question.option_a}}</el-radio>
            <el-radio label="B">{{'B.' + question.option_b}}</el-radio>
            <el-radio label="C">{{'C.' + question.option_c}}</el-radio>
            <el-radio label="D">{{'D.' + question.option_d}}</el-radio>
          </el-radio-group>
          <el-checkbox-group class="question-option" v-else-if="question.type == '2'" v-model="answer[index]">
            <el-checkbox label="A">{{'A.' + question.option_a}}</el-checkbox>
            <el-checkbox label="B">{{'B.' + question.option_b}}</el-checkbox>
            <el-checkbox label="C">{{'C.' + question.option_c}}</el-checkbox>
            <el-checkbox label="D">{{'D.' + question.option_d}}</el-checkbox>
          </el-checkbox-group>
          <p class="answer-p">参考答案：
            <span class="answer">{{question.answer}}</span>
          </p>
        </li>
      </ul>

      <!-- <el-button type="primary" class="submit-btn" @click="submit">提交</el-button> -->
    </template>
    <template v-else>
      <p style="text-align: center;">暂无内容</p>
    </template>

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

      mistakes: [],

      answer: []
    };
  },

  created() {
    this.$http.getWrongQuestions({ token: sessionStorage._token }, res => {
      const data = res.data.data;
      for (let it in data) {
        if (data[it].type === 1) {
          this.answer[it] = "";
        } else {
          this.answer[it] = [];
        }
      }
      this.mistakes = data;
      this.loading = false;
    });
  },

  methods: {
    // submit() {
    //   const answer = this.answer;
    //   let left = [];
    //   for (let i in answer) {
    //     if (answer[i][0]) {
    //       continue;
    //     } else {
    //       left.push(i);
    //     }
    //   }
    //   if (left.length > 0) {
    //     this.examTipsDialog = true;
    //     const str = `你还有第${left.join(",")}题没有完成，请先完成答卷？`;
    //     this.dialogMessage = str;
    //   } else {
    //     this.$router.push({ name: "Reword" });
    //   }
    // },

    examConfirm() {
      this.examTipsDialog = false;
    }
  }
};
</script>

