<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <!-- <div v-if="isLoading">
        Loading...
      </div> -->
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        ></PostListItem>
        <!-- <ul>
        <li v-for="postItem in postItems" :key="postItem._id">
          <div class="post-title"></div>
          {{ postItem.title }}
          <div class="post-contents">
            {{ postItem.contents }}
          </div>
          <div class="post-time">
            {{ postItem.createdAt }}
          </div>
        </li>
      </ul> -->
      </ul>
    </div>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchPosts } from '@/api/index';
export default {
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  components: {
    PostListItem,
    LoadingSpinner,
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
