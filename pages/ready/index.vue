<template>
  <section class="ready">
    <div class="">
      <i class="ti-timer"></i>
    </div>
    <h1>준비 중입니다.</h1>
  </section>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style lang="scss" scoped>
.ready {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 100vh;
  div {
    text-align: center;
    margin-bottom: 10px;
    i {
      font-size: 56px;
    }
  }
  h1 {
    text-align: center;
  }
}
</style>