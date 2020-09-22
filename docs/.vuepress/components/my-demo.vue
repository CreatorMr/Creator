<template>
<div>
  <button @click="change">{{buttonName}}</button>
</div>
</template>

<script>
export default {
  created() {
  },
  data() {
    return {
      buttonName: '按钮'
    }
  },
  methods: {
    change() {
      console.log(111);
    }
  }
};
</script>
