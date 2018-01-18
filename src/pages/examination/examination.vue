<style scoped>
.wrap {
  padding-top: 40px;
}
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
.clock {
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 0 5px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.time {
  color: red;
}
</style>

<template>
  <div v-if="loading" class="loading-wrap">
    <i class="el-icon-loading"></i>
  </div>
  <div class="wrap" v-else>
    <div class="clock" v-if="timeStr">剩余时间：
      <span class="time">{{timeStr}}</span>
    </div>
    <h1 class="test-title">{{warehouse.name}}</h1>
    <template v-if="questions.length > 0">
      <ul class="question-list">
        <li class="question-item" v-for="(question, index) in questions" :key="question.id">
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
        </li>
      </ul>

      <el-button type="primary" class="submit-btn" @click="submit">提交</el-button>
    </template>
    <template v-else>
      <p style="text-align: center">暂无内容</p>
    </template>

    <el-dialog title="提示" :visible.sync="examTipsDialog" width="80%" center>
      <span class="tips-message">{{dialogMessage}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="examTipsDialog = false">取 消</el-button>
        <el-button size="small" type="primary" @click="examConfirm">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="提示" :visible.sync="examConfirmDialog" width="80%" center>
      <span class="tips-message">答案提交成功，返回首页吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="examConfirmDialog = false">取 消</el-button>
        <el-button size="small" type="primary" @click="examPostConfirm">确 定</el-button>
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
      examConfirmDialog: false,
      dialogMessage: "",

      questions: [],

      answer: [],

      exam_id: "",
      leftTime: "",
      timeStr: ""
    };
  },

  created() {
    const id = sessionStorage.exam_id;
    this.exam_id = id;
    this.$http.getExamination(id, { token: localStorage.bank_token }, res => {
      const data = res.data.data;
      for (let it in data.question) {
        if (data.question[it].type === 1) {
          this.answer[it] = "";
        } else {
          this.answer[it] = [];
        }
      }
      this.questions = data.question;
      this.warehouse = data.exam;
      this.leftTime = data.exam.time;
      this.leftTimeFn();
      this.loading = false;
    });
  },

  methods: {
    //倒计时
    leftTimeFn() {
      const timer = setInterval(() => {
        if (this.leftTime <= 0) {
          clearInterval(timer);
          this.submit(true);
        }
        const time = this.leftTime;
        let mintues = Math.floor(time / 60);
        let hours = Math.floor((time - mintues * 60) / 3600);
        let seconds = time - mintues * 60 - hours * 3600;

        mintues = timeFormat(mintues);
        hours = timeFormat(hours);
        seconds = timeFormat(seconds);
        this.timeStr = `${hours}:${mintues}:${seconds}`;
        this.leftTime--;
      }, 1000);

      function timeFormat(time) {
        if (time < 10) {
          return "0" + time;
        } else {
          return time;
        }
      }
    },

    //提交
    submit(flag) {
      const answer = this.answer;
      let left = [];
      for (let i in answer) {
        if (answer[i][0]) {
          continue;
        } else {
          left.push(i * 1 + 1);
        }
      }
      if (left.length > 0 && !flag) {
        this.examTipsDialog = true;
        const str = `你还有第${left.join(",")}题没有完成，请先完成答卷？`;
        this.dialogMessage = str;
      } else {
        const postData = {
          token: localStorage.bank_token,
          answer: []
        };
        answer.forEach((value, index) => {
          const tmp = this.questions[index].id;
          postData.answer[tmp] = [...value];
        });
        this.$http.postExamination(this.exam_id, postData, res => {
          this.examConfirmDialog = true;
        });
      }
    },

    examConfirm() {
      this.examTipsDialog = false;
    },

    examPostConfirm() {
      this.examConfirmDialog = false;
      this.$router.push("/");
    }
  }
};
</script>

