<style scoped>
.radio-label {
  display: block;
}

.radio-fake {
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
  /* border: 1px solid #409eff; */
  /* border: 1px solid #d8dce5; */
  /* background-color: #fff; */
  background-color: #409eff;
  position: relative;
}

.radio-fake::after {
  content: "";
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
</style>

<template>
  <div class="wrap">
    <ul class="question-list">
      <li class="question-item">
        <h3>这是一道题目</h3>
        <el-radio-group v-model="radio">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
      </li>
    </ul>
  </div>
</template>

<script>
import { Radio, RadioGroup } from "element-ui";
export default {
  components: {
    Radio,
    RadioGroup
  },
  data() {
    return {
      radio: ""
    };
  },

  created() {
    console.log(this.$route.params);
  },

  methods: {
    radioClick() {
      console.log(this.$refs);
    }
  }
};
</script>

