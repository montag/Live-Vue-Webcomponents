<template>
  <div class="vue-wc-parent">
    <h1>Vue Web Component</h1>
    <flat-pickr v-model="date"
                :config="config"
                placeholder="Select a date"
                @on-change="handleChange"></flat-pickr>
  </div>
</template>

<script>
  export default {
  name: 'VueTimePicker',

  props: {
    value: {},
    config: {
      default: function () {
        return {
          altFormat: "F j, Y",
          altInput: true
        }
      }
    },
  },

  data() {
    return {
      date: null
    }
  },

  async mounted() {
    // This prevents mouse clicks from triggering the phoenix-live listener until we actually want to send data.
    await this.$nextTick()
    const host = this.$el.getRootNode().host
    host.addEventListener('click', e => {
      console.log('stopping click event...')
      e.stopPropagation()
      e.preventDefault()
    }, true)
  },

  methods: {
    async handleChange(val, _, dateRef) {
      const host = this.$el.getRootNode().host
      const date = dateRef.latestSelectedDateObj.toUTCString()
      host.setAttribute('value', date)
      await this.$nextTick()
      const newEvent = new CustomEvent('click', {
        bubbles: true,
        detail: { event }
      })
      host.dispatchEvent(newEvent)
    }
  }
}
</script>
<style>
  .vue-wc-parent {
    border-radius: 5px;
    border: solid 1px black;
    text-align: center;
    flex: 1 auto;
    padding: 1rem;
}
</style>
