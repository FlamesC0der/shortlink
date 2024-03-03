<template>
  <div class="container">
    <Header/>
    <slot />
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 50px;
}
</style>