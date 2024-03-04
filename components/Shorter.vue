<script setup>
import { ref } from 'vue'

const originalUrl = ref('')
const newUrl = ref('')

const shortenLink = async () => {
  try {
    const response = await $fetch('/api/shortlink', {
      method: 'POST',
      body: {
        url: originalUrl.value
      }
    })
    newUrl.value = response
    console.log(response)
  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <div class="shorter">
    <div class="shorter__create">
      <div class="shorter__input">
        <input v-model="originalUrl" type="text" class="input" placeholder="Вставьте ссылку"/>
      </div>
      <button @click="shortenLink" class="shorter__button">Сократить</button>
    </div>
    <div class="shorter__info" v-if="newUrl">
      <a :href="'http://localhost:3000/' + newUrl" class="info-link">{{ 'localhost:3000/' + newUrl }}</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.shorter {
  display: flex;
  flex-direction: column;
  gap: 10px;
  &__create {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  &__info {
    width: 100%;
    background: #1a1a1a;
    border-radius: 15px;
    padding: 40px 28px;
  }
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
.info-link {
  font-size: 20px;
  font-weight: 500;
}
.input {
  width: 100%;
}

</style>
