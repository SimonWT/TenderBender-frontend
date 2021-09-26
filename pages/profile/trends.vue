<template>
  <div class="profile-trends-page">
    <nuxt-link to="/profile"> <- Back to Profile</nuxt-link>
    <div class="profile-trends">
      <div>
        <client-only>
          <LineChart :chartdata="pastData" />
        </client-only>
      </div>
      <div>
        <client-only>
          <LineChart :chartdata="futureData" />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '~/components/charts/LineChart.vue'

export default {
  components: { LineChart },
  data() {
    return {
      pastData: {
        datasets: [
          {
            label: 'Прошлое',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      futureData: {
        datasets: [
          {
            label: 'Будущее',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.profile-trends {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  margin-top: 50px;
}
</style>
