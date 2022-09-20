<template>
  <div>
    <div class="user-container">
      <div class="user-img"><img src="../assets/Sample_User_Icon.png" alt=""></div>
      <div class="user-description">
        <slot name="username"></slot>
        <span class="time">
          <slot name="time"></slot>
          <slot name="karma"></slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  // computed: {
  //   userItems() {
  //     return this.$store.state.user;
  //   }
  // },
}
</script>

<style scoped>
.user-container {display: flex; align-items: center; padding: .5rem .5rem .5rem 0;}
.user-img {width: 40px;}
.user-img img {width: 100%;}
.time {font-size: .7rem;}
</style>