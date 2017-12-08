<style scoped>
.test-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.test-btn {
  line-height: 2.3;
  font-size: 14px;
  width: 6rem;
}
</style>

<template>
  <div class="wrap">
    <ul class="test-list">
      <li class="test-item">
        <span>考试名称</span>
        <span class="test-btn">开始考试</span>
      </li>
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


