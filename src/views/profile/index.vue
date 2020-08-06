<template>
  <div class="profile">
    <CustomText>Profile</CustomText>
    <div id="nav">
      <router-link to="/profile">Posts</router-link> |
      <router-link to="/profile/igtv">IGTV</router-link> |
      <router-link to="/profile/saved">Saved</router-link> |
      <router-link to="/profile/tags">Tags</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'
export default {
  name: 'Profile',
  components: {
    CustomText
  }
}
</script>

<style scoped></style>
