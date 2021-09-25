<template>
  <div class="center">
    <vs-dialog v-model="active" blur :loading="isLoading">
      <template #header>
        <h4 class="not-margin">Добро пожаловать в <b>TenderBender</b></h4>
      </template>

      <div class="con-form">
        <vs-input v-model="email" placeholder="Email">
          <template #icon> @ </template>
        </vs-input>
        <vs-input type="password" v-model="password" placeholder="Пароль">
          <template #icon>
            <i class="bx bxs-lock"></i>
          </template>
        </vs-input>
        <div class="flex">
          <vs-checkbox v-model="remember">Запомнить меня</vs-checkbox>
          <a href="#">Забыли пароль?</a>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block @click="auth"> Войти </vs-button>
          <div class="new">
            Не зарегестрированы?
            <a href="#login" @click="openRegistration">Создать аккаунт?</a>
          </div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
import { login } from '~/api/auth'

export default {
  data: () => ({
    active: false,
    email: '',
    password: '',
    remember: false,
    isLoading: false,
  }),
  methods: {
    open() {
      this.active = true
    },
    openRegistration() {
      this.active = false
      this.$emit('open-registration')
    },
    async auth() {
      if(this.email.length > 0 && this.password.length > 0) {
        this.isLoading = true
        const { data } = await login(this.email, this.password)
        this.isLoading = false
        this.$store.commit('auth/SET_USER', data)
      }
    },
  },
}
</script>

<style lang="sass">
.not-margin
  margin: 0px
  font-weight: normal
  padding: 10px
.con-form
  width: 100%
  .flex
    display: flex
    align-items: center
    justify-content: space-between
    a
      font-size: .8rem
      opacity: .7
      &:hover
        opacity: 1
  .vs-checkbox-label
    font-size: .8rem
  .vs-input-content
    margin: 10px 0px
    width: calc(100%)
    .vs-input
      width: 100%
.footer-dialog
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  width: calc(100%)
  .new
    margin: 0px
    margin-top: 20px
    padding: 0px
    font-size: .7rem
    a
      margin-left: 6px
      &:hover
        text-decoration: underline
  .vs-button
    margin: 0px
</style>
