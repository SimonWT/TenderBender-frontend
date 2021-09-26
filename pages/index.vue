<template>
  <div class="center">
    <h2>Привет!</h2>
    <p>
      Здесь будет краткое описание того, как быстро начать пользоваться этим
      сервисом
    </p>
    <vs-button size="xl" @click="openLogin"> Войти </vs-button>
  </div>
</template>

<script>
export default {
  methods: {
    openLogin() {
      this.$nuxt.$emit('open-login')
    },
  },
}
</script>

<style></style>
