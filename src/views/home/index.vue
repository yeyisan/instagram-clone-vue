<template>
  <div class="home">
    <div class="timeline">
      <h1>Home</h1>
      <br />
      <Post></Post>
      <br />
      <br />
      <br />
    </div>
    <div class="sidebar">
      <h1>Side Bar</h1>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post'
export default {
  name: 'Home',
  components: { Post }
}
</script>

<style scoped>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}

.sidebar {
  display: none;

  @media (--t) {
    display: block;
  }
}
</style>
