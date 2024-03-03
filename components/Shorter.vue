<script setup>
</script>

<template>
  <div class="shorter">
    <div class="shorter__input">
      <input type="text" class="input" placeholder="Вставьте ссылку"/>
    </div>
    <button class="shorter__button">Сократить</button>
  </div>
</template>

<style scoped lang="scss">
.shorter {
  display: flex;
  flex-direction: row;
  gap: 10px;
  &__input {
    width: 100%;
    padding: 20px 15px;
    background: #1a1a1a;
    border-radius: 15px;
  }
  &__button {
    background: #1a1a1a;
    border-radius: 15px;
    padding: 20px 15px;
  }
}
.input {
  width: 100%;
}

</style>
