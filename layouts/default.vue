<template>
  <div class="app">
    <Header class="header" @open-login="openLogin"/>
    <Sidebar class="sidebar" />
    <div class="content">
        <Nuxt />
    </div>
    <LoginModal ref="loginModal" @open-registration="openRegistration" />
    <RegistrationModal ref="registrationModal" @open-login="openLogin" />
  </div>
</template>

<script>
import Sidebar from '~/components/app/Sidebar'
import Header from '~/components/app/Header'
import LoginModal from '~/components/modals/LoginModal'
import RegistrationModal from '~/components/modals/RegistrationModal'

export default {
  components: { Sidebar, Header, LoginModal, RegistrationModal },
  methods: {
      openLogin(){
          this.$refs.loginModal.open()
      },
      openRegistration() {
          this.$refs.registrationModal.open()
      }
  }
}
</script>

<style lang="scss" scoped>
.header {
    grid-area: header;
}
.sidebar {
    grid-area: sidebar;
}
.content {
    grid-area: content;
    padding-top: 40px;
}
.app {
    grid-template-columns: 1fr 6fr;
    grid-template-rows: fit-content(100%);
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar content";
    height: 100vh;
}
</style>
