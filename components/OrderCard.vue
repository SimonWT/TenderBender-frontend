<template>
  <vs-card class="order-card">
    <template #title>
      <h3>Заказ №{{orderNumber}}</h3>
    </template>
    <template #img>
      <img src="/foto2.jpeg" alt="" />
    </template>
    <template #text>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class="bx bx-heart"></i>
      </vs-button>
      <vs-button class="btn-chat" shadow primary>
        <i class="bx bx-chat"></i>
        <span class="span"> 54 </span>
      </vs-button>
    </template>
  </vs-card>
</template>

<script>
export default {
  props: {
    orderNumber: {},
  },
}
</script>

<style lang="scss" scoped>
::v-deep .vs-card {
  // max-width: 300px;
  &__img {
    max-height: 70px;
  }
}
</style>
