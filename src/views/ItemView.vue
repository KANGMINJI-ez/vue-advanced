<template>
  <div class="wrap">
    <!-- <div class="user-information">
      <p>name: {{ userItems.user }}</p>
      <small>{{ userItems.time_ago }}</small>
    </div> -->
    <user-profile :info="userItems">
      <div slot="username">{{ userItems.user }}</div>
      <template slot="time">{{ userItems.time_ago }}</template>
    </user-profile>
    <!-- <p v-for="(item, index) in userItems">{{ item.comments[index] }}</p> -->
    <div class="question-box">
      <p>{{ userItems.title }}</p>
      <!-- <div>{{ userItems.content }}</div> -->
      <div v-html="userItems.content">{{ userItems.content }}</div>
      <!-- <div v-for="content in contents">
        <div>
          <p>{{ content.content }}</p>
        </div>
      </div> -->
    </div>
    <div>
      <ul class="item-content">
        <li v-html="item.content" 
      v-for="item in userItems.comments">
          {{ item.content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
export default {
  components: {
    UserProfile,
  },
  data() {
    return {
      comm: [],
    }
  },
  computed: {
    userItems() {
      return this.$store.state.item;
    },
  },
  created() {
    const userItem = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", userItem);
  },
  // directives: {
  //   inserted(el) {
  //     const anchors = el.querySelectorAll('a')

  //     anchors.forEach((anchor) => anchor.target = "_blank");
  //   }
  // }
  // target() {
  //   const anchors = document.getElementsByTagName("a");
  //   console.log(anchors);
  //   for (let i = 0; i < anchors.length; i++) {
  //     anchors[i].setAttribute("target", "_blank")
  //   }
  // }
}
  // Vue.directive("links-in-new-window", {
  //   inserted: function(el) {
  //     const anchors = el.querySelectorAll("a");
  //     anchors.forEach((anchor) => anchor.target="_blank");
  //   }
  // });
// const anchors = document.getElementsByTagName("a");
// console.log(anchors);
// for (let i = 0; i < anchors.length; i++) {
//   anchors[i].setAttribute("target", "_blank")
// }
// document.querySelectorAll("a").setAttribute("target_blank");
</script>

<style scoped>
/* .wrap {margin: 0 auto; padding: 0 20px; width: 80%;} */
.item-content {margin: 0; padding: 0px;}
.item-content li {margin-bottom: 20px; padding: 0 5px; border: 1px solid #222;}
</style>