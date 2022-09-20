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
import { mapState, mapGetters } from 'vuex';
export default {
  components: {
    listItem,
  },
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
  created() {
    this.$store.dispatch("FETCH_ASK");
  }

}
</script>

<style>

</style>