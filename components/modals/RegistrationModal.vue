<template>
  <div class="center">
    <vs-dialog v-model="active" blur :loading="isLoading">
      <template #header>
        <h4 class="not-margin">Регистрация</h4>
      </template>

      <div class="con-form">
        <vs-input v-model="INN" placeholder="ИНН">
          <template #icon> <i class="bx bxs-briefcase-alt-2"></i> </template>
        </vs-input>
        <vs-input v-model="email" placeholder="Email">
          <template #icon> @ </template>
        </vs-input>
        <vs-input type="password" v-model="password" placeholder="Пароль">
          <template #icon>
            <i class="bx bxs-lock"></i>
          </template>
        </vs-input>
        <vs-input v-model="KPP" placeholder="КПП">
          <template #icon> <i class="bx bxs-food-menu"></i> </template>
        </vs-input>
        <vs-input
          v-model="oraganizationName"
          placeholder="Название организации"
        >
          <template #icon><i class="bx bxs-institution"></i> </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block> Зарегестрироваться </vs-button>
          <div class="new">
            Уже есть аккаунт?
            <a @click="backToLogin" href="#">Вернуться к логину</a>
          </div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false,
    email: '',
    password: '',
    oraganizationName: '',
    INN: '',
    KPP: '',
    remember: false,
    isLoading: false,
  }),
  methods: {
    open() {
      this.active = true
    },
    backToLogin() {
      this.active = false
      this.$emit('open-login')
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
