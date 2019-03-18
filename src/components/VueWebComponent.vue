<template>
    <div class="vue-wc-parent">
      <h1>Vue Web Component</h1>
      <div>
        <div>Phoenix State: {{ msg }}</div>
        <div>Local State: {{ random }}</div>
      </div>
      <slot></slot>
      <button class="action-btn" :value="random" @click.stop.prevent="handleClick($event)">Action</button>
    </div>
</template>
<script>
export default {

  props: {
    msg: {
      default: 'no value',
    },
    value: {}
  },

  data() {
    return {
      random: Math.floor(Math.random() * 10000000)
    }
  },

  methods: {
    async handleClick(event) {
      const host = this.$el.getRootNode().host
      host.setAttribute('value', this.random)
      await this.$nextTick()
      this.$emit('click', event)
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
