<script setup>
</script>

<template>
  <div class="link-box">
    <p class="link-box__description">Превратите длинные ссылки в мгновение ока! Наш сервис сокращения ссылок предоставляет вам удобный и легкий способ создать компактные URL-адреса. Просто вставьте длинную ссылку, и мы предоставим вам короткую, готовую к использованию!</p>
    <Shorter class="link-box__shorter"/>
  </div>
</template>

<style scoped lang="scss">
.link-box {
  &__description {
    margin-top: 18px;
    line-height: 20px;
  }
  &__shorter {
    margin-top: 18px;
  }
}

</style>