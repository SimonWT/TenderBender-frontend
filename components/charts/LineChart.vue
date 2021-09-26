<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['chartdata'],
  data() {
    return {
      options: { responsive: true },
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  },
}
</script>
