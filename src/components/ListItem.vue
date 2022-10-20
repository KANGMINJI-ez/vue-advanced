<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, index) in listItems" class="post" v-bind:key="index">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p>
            <template v-if="item.domain">
              <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
            </template>
            <span v-if="PrintNew(item.time)" class="new">N</span>
          </p>
          <small>
          {{ item.time_ago }},
          <router-link v-if="item.user" :to="`/user/${item.user}`">
          {{ item.user }}
          </router-link>
          <a v-else :href="`https://${item.domain}`" target="_blank">{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { createLogger } from 'vuex';
// import { mapState, mapGetters } from 'vuex';
import bus from '../utils/bus.js'
export default {
  // created() {

  //   const name = this.$route.name;
  //   bus.$emit("start:spinner");
    
  //   // if(name === 'news') {
  //   //   this.$store.dispatch("FETCH_NEWS");
  //   // } else if(name === 'ask') {
  //   //   this.$store.dispatch("FETCH_ASK");
  //   // } else if(name === 'jobs'){
  //   //   this.$store.dispatch("FETCH_JOBS");
  //   //   }
  //   // setTimeout(() => {
  //   //   this.$store.dispatch("")
  //   //   .then(() => {
  //   //     bus.$emit("end:spinner")
  //   //       .catch((error) => {
  //   //     console.log(error);
  //   //     })
  //   //   })
  //   // });
  //   if(name === 'news') {
  //     this.$store.dispatch("FETCH_NEWS");
  //   } else if(name === 'ask') {
  //     this.$store.dispatch("FETCH_ASK");
  //   } else if(name === 'jobs'){
  //     this.$store.dispatch("FETCH_JOBS");
  //     }
  // },
  computed: {
    listItems() {
      return this.$store.state.list;
    //   const name = this.$route.name;
    //   if(name === 'news') {
    //   return this.$store.state.news;
    // } else if(name === 'ask') {
    //   return this.$store.state.ask;
    // } else if(name === 'jobs'){
    //   return this.$store.state.jobs;
    //   }
    }
  },
  methods: {
    PrintNew(time) {
      if((Math.floor(Date.now() / 1000) - time) / (60 * 60) <= 24) {
        return true;
      }
    }
  }

}
</script>

<style scoped>
.news-list {margin: 0; padding: 0;}
.post {display: flex; align-items: center; padding: 10px 0; border-bottom: 1px solid #eee; color: #000; list-style: none;}
.points {display: flex; align-items: center; justify-content: center; width: 80px; height: 60px; color: #42b883;}
.new {display: inline-block; vertical-align: top; margin: -2px 0px 0px 1px; width: 14px; height: 14px; border-radius: 50%; font-size: 10px; text-align: center; line-height: 12px; color: #fff; background: #42b883;}
</style>