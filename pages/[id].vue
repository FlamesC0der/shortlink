<script setup>
const route = useRoute()
</script>

<template>
  <div class="link-box">
    <!-- <p> id: {{ route.params.id }}</p> -->
    <p> Link not found</p>
  </div>
</template>

<style scoped lang="scss">
.link-box {
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #a1a1a1;
  border-radius: 15px;
  padding: 20px;
  max-height: 200px;
  height: 200px;
  text-align: center;
  font-size: 25px;
  font-weight: 500;
}
</style>
