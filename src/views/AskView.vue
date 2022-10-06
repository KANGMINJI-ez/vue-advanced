<template>
  <div>
    <!-- <p v-for="item in fetchedAsk">
        <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
      <small>{{ item.time_ago }}
        <router-link :to="`/user/${item.user}`">
        {{ item.user }}
        </router-link>
        </small>
    </p> -->
    <list-item></list-item>
  </div>
</template>

<script>
import listItem from '../components/ListItem.vue';
import { mapState, mapGetters, createLogger } from 'vuex';
// import bus from "../utils/bus.js";
import ListMixin from "../mixins/ListMixins.js";
export default {
  components: {
    listItem,
  },
  mixins: [ListMixin],
  // mixins: [ListMixin],
  computed: {
    // #3
    ...mapGetters([
      'fetchedAsk'
    ])

    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })
    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  // mounted() {
  //   bus.$emit("end:spinner");
  // },
  // created() {
  //   bus.$emit("start:spinner");

  //   setTimeout(() => {
  //     this.$store.dispatch("FETCH_ASK")
  //     .then(() => {
  //       console.log('fetched');
  //       bus.$emit("end:spinner");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   }, 3000);
  // },
}
</script>

<style>

</style>