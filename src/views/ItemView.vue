<template>
  <div>
    <!-- <p v-for="(item, index) in userItems">{{ item.comments[index] }}</p> -->
    <div v-for="(items, index) in userItems">
      <div>
        <p>{{ items.content }}</p>
        <p>{{ items.comments[index] }}</p>
      </div>
      <!-- <p>
        {{ items.content.content }}
      </p> -->
    </div>
    <!-- <p v-for="(item, index) in userItems.comments"> -->
    <!-- </p> -->
  </div>
</template>

<script>
export default {
  computed: {
    userItems() {
      return this.$store.state.item.comments;
    }
  },
  created() {
    const userItem = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", userItem);
  }
}
</script>

<style>

</style>