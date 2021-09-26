<template>
  <div class="center examplex">
    <vs-navbar center-collapsed text-white color="primary" v-model="active">
      <template #left>
        <img src="/logo2.png" alt="" />
      </template>
      <vs-navbar-item  @click="$router.push('/')" :active="active == 'guide'" id="guide">
        <!-- <nuxt-link to="/" class="no-underline" style="color: white;"> -->
          Guide
        <!-- </nuxt-link> -->
      </vs-navbar-item>
      <vs-navbar-item @click="$router.push('/profile')" :active="active == 'profile'" id="profile">
        <!-- <nuxt-link to="/profile" class="no-underline" style="color: white;"> -->
          Profile
        <!-- </nuxt-link> -->
      </vs-navbar-item>
      <template #right>
        <vs-button color="rgb(59,222,200)" gradient @click="$emit('open-login')"
          >Login</vs-button
        >
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 'profile',
  }),
}
</script>

<style lang="scss" scoped>
::v-deep .vs-navbar-content {
  position: relative;
}
</style>
