<style scoped>
.reword-title {
  font-size: 18px;
  margin: 10px 0 20px;
  text-align: center;
}

.reword-tip {
  text-align: center;
  font-size: 15px;
  font-weight: normal;
}

.reword-img {
  width: 60%;
  display: block;
  margin: 60px auto;
  position: relative;
}

.reword-img > img {
  width: 100%;
}

.reword-img-shake {
  animation: shake 0.5s 0s infinite ease-in-out;
}

@keyframes shake {
  2% {
    transform: translate(0.5px, -1.5px) rotate(-0.5deg);
  }
  4% {
    transform: translate(0.5px, 1.5px) rotate(1.5deg);
  }
  6% {
    transform: translate(1.5px, 1.5px) rotate(1.5deg);
  }
  8% {
    transform: translate(2.5px, 1.5px) rotate(0.5deg);
  }
  10% {
    transform: translate(0.5px, 2.5px) rotate(0.5deg);
  }
  12% {
    transform: translate(1.5px, 1.5px) rotate(0.5deg);
  }
  14% {
    transform: translate(0.5px, 0.5px) rotate(0.5deg);
  }
  16% {
    transform: translate(-1.5px, -0.5px) rotate(1.5deg);
  }
  18% {
    transform: translate(0.5px, 0.5px) rotate(1.5deg);
  }
  20% {
    transform: translate(2.5px, 2.5px) rotate(1.5deg);
  }
  22% {
    transform: translate(0.5px, -1.5px) rotate(1.5deg);
  }
  24% {
    transform: translate(-1.5px, 1.5px) rotate(-0.5deg);
  }
  26% {
    transform: translate(1.5px, 0.5px) rotate(1.5deg);
  }
  28% {
    transform: translate(-0.5px, -0.5px) rotate(-0.5deg);
  }
  30% {
    transform: translate(1.5px, -0.5px) rotate(-0.5deg);
  }
  32% {
    transform: translate(2.5px, -1.5px) rotate(1.5deg);
  }
  34% {
    transform: translate(2.5px, 2.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0.5px, -1.5px) rotate(0.5deg);
  }
  38% {
    transform: translate(2.5px, -0.5px) rotate(-0.5deg);
  }
  40% {
    transform: translate(-0.5px, 2.5px) rotate(0.5deg);
  }
  42% {
    transform: translate(-1.5px, 2.5px) rotate(0.5deg);
  }
  44% {
    transform: translate(-1.5px, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(1.5px, -0.5px) rotate(-0.5deg);
  }
  48% {
    transform: translate(2.5px, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(-1.5px, 1.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(-0.5px, 1.5px) rotate(0.5deg);
  }
  54% {
    transform: translate(-1.5px, 1.5px) rotate(0.5deg);
  }
  56% {
    transform: translate(0.5px, 2.5px) rotate(1.5deg);
  }
  58% {
    transform: translate(2.5px, 2.5px) rotate(0.5deg);
  }
  60% {
    transform: translate(2.5px, -1.5px) rotate(1.5deg);
  }
  62% {
    transform: translate(-1.5px, 0.5px) rotate(1.5deg);
  }
  64% {
    transform: translate(-1.5px, 1.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0.5px, 2.5px) rotate(1.5deg);
  }
  68% {
    transform: translate(2.5px, -1.5px) rotate(1.5deg);
  }
  70% {
    transform: translate(2.5px, 2.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(-0.5px, -1.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(-1.5px, 2.5px) rotate(1.5deg);
  }
  76% {
    transform: translate(-1.5px, 2.5px) rotate(1.5deg);
  }
  78% {
    transform: translate(-1.5px, 2.5px) rotate(0.5deg);
  }
  80% {
    transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
  }
  82% {
    transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
  }
  84% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg);
  }
  86% {
    transform: translate(2.5px, 1.5px) rotate(0.5deg);
  }
  88% {
    transform: translate(-1.5px, 0.5px) rotate(1.5deg);
  }
  90% {
    transform: translate(-1.5px, -0.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(-1.5px, -1.5px) rotate(1.5deg);
  }
  94% {
    transform: translate(0.5px, 0.5px) rotate(-0.5deg);
  }
  96% {
    transform: translate(2.5px, -0.5px) rotate(-0.5deg);
  }
  98% {
    transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0);
  }
}

.reword-tips {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 15px;
  width: 70%;
  text-align: center;
}
</style>

<template>
  <div class="wrap">
    <h1 class="reword-title">感谢您的提交</h1>
    <div class="reword-content">
      <h3 class="reword-tip">您的分数是：{{result.score}} 分，正确率：{{(result.accuracy * 100).toFixed(2)}} %：</h3>
      <template v-if="result.price > 0">
        <img v-if="envelopeShow" class="reword-img" :class="{'reword-img-shake': isShake}" src="../../assets/images/red-w.png" alt="红包" @click="openEnvelope">
        <div v-else class="reword-img">
          <img src="../../assets/images/red-y.png" alt="已拆开">
          <span class="reword-tips">恭喜您！获得了 <br>{{result.price}} 元</span>
        </div>
      </template>
      <template v-else>
        <p style="text-align: center; font-size: 16px;">没有获得红包哦~</p>
      </template>
        <el-button size="small" type="primary" style="margin-top:30px;" @click="goBack">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShake: false,
      envelopeShow: true,
      result: {}
    };
  },

  created() {
    this.result = JSON.parse(sessionStorage.result);
  },

  methods: {
    openEnvelope() {
      this.isShake = true;
      const getData = {
        number: this.result.number
      };
      setTimeout(() => {
        this.$http.getCash(getData, res => {
          this.isShake = false;
          this.envelopeShow = false;
        });
      }, 2000);
    },

    goBack() {
      this.$router.push("/");
    }
  }
};
</script>

