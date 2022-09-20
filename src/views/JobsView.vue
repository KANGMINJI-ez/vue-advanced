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
export default {
  components: {
    ListItem,
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
}
</script>

<style>

</style>