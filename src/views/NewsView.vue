<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem,
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");

    // var vm = this;
    // console.log("호출 전: ", this);

    // fetchNewsList()
    // .then(response => {
    //   console.log("호출 후: ", this);
    //   this.users = response.data;
    // })
    // .catch(function(error) {
    //   console.log(error);
    // })
  }
}
</script>

<style>

</style>