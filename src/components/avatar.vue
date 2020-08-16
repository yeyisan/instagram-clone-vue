<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default:
        'https://instagram.fist13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/103440128_3990737890968571_4874619071490944998_n.jpg?_nc_ht=instagram.fist13-1.fna.fbcdn.net&_nc_ohc=vNTv2FYZXUkAX-Od8xB&oh=b1c9e80afa68ef3ae32c7108025b5cde&oe=5F627947'
    },
    alt: {
      type: String
    },
    size: {
      type: Number,
      default: 40
    }
  }
}
</script>

<style scoped>
.avatar {
  padding: 2px;
  border-radius: 999px;
  display: inline-flex;
  background: rgb(202, 29, 126);
  background: linear-gradient(
    90deg,
    rgba(202, 29, 126, 1) 0%,
    rgba(227, 81, 87, 1) 35%,
    rgba(242, 112, 63, 1) 100%
  );
  img {
    border-radius: inherit;
    border: 2px solid white;
  }
}
</style>
