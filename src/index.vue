

<template lang="html">

<button  v-on:click="clickon" :type="type" name="button" class="btn" :class="[
    btn ? 'btn-' + btn : '',
    size ? 'btn-' + size : '',
    {
      'disabled': disabled,
    }
  ]">
  <i class="icon-spinner icon-spin" v-if="loading"></i>
  <i :class="'icon-' + icon" v-if="icon && !loading"></i>
  <slot></slot>
</button>

</template>

<script>
export default {
    name:"tk-button",
    props: {
        btn: {//btn的样式
            type: String,
            default: 'primary'
        },
        size: String,
        type: {//类型，
          type:String,
          default: 'button'
        },
        loading: {
          type: Boolean,
          default: false
        },
        disabled: {
          type: Boolean,
          default: false
        },
        icon: {
          type: String,
          default: ''
        },
    },
    computed: {},
    mounted() {},
    methods: {
      clickon: function() {
        this.$emit("click","");
      }
    },
    components: {}
}

</script>
<style lang="less">
  @import "button.less";
</style>