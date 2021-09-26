<template>
  <div>
    <div class="profile-header">
      <vs-avatar size="100" badge badge-color="success">
        <img src="/avatars/avatar-4.png" alt="" />
      </vs-avatar>
      <h1 class="o-name">ООО "АОМ"</h1>
      <nuxt-link to="/profile/trends" style="margin-left: auto;" class="no-underline">
        <vs-button size="xl" gradient
          >Графики</vs-button
      >
      </nuxt-link>
    </div>
    <hr />
    <div class="profile-content center">
      <div>
        <h2># Прошлые заказы</h2>
        <div class="orders">
          <OrderCard class="order" v-for="i in 10" :key="i" :orderNumber="i" />
        </div>
      </div>
      <div>
        <h2># Будущие заказы</h2>
        <div class="orders">
          <OrderCard class="order" v-for="i in 10" :key="i" :orderNumber="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderCard from '~/components/OrderCard.vue'

export default {
  components: { OrderCard },
}
</script>

<style lang="scss" scoped>
.profile-header {
  display: flex;
  align-items: center;
}
.o-name {
  margin-left: 30px;
}
.profile-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.orders {
  display: flex;
  flex-wrap: wrap;
  .order {
    margin-bottom: 15px;
    &:nth-child(2n + 1) {
      margin-right: 15px;
    }
  }
}

.vertical-hr {
  border-left: 1px solid #000;
  // height: 500px;
}
</style>
