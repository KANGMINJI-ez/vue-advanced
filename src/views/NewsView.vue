<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixins.js';
// import ListMixin from "../mixins/ListMixins.js";

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // mixins: [ListMixin],
  created() {
    // bus.$emit("start:spinner");
    // setTimeout(() => {
    // this.$store.dispatch("FETCH_NEWS")
    // .then(() => {
    //   console.log('fetched');
    //   bus.$emit("end:spinner");
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    // }, 3000);
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
  },
}
</script>

<style>

</style>