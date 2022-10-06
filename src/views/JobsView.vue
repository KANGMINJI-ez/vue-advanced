<template>
  <div>
    <!-- <p v-for="job in this.$store.state.jobs">
      <a v-bind:href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}, 
        <a v-bind:href="job.url">
        {{ job.domain }}
        </a>
        </small>
      </p> -->
      <list-item></list-item>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';
import ListItem from '../components/ListItem.vue';
// import bus from "../utils/bus.js";
import ListMixin from '../mixins/ListMixins.js';
export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // mounted() {
  //   bus.$emit("end:spinner");
  // },
  // created() {
  //   bus.$emit("start:spinner");

  //   setTimeout(() => {
  //     this.$store.dispatch("FETCH_JOBS")
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