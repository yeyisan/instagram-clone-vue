<template>
  <div class="app">
    <MainHeader />
    <router-view />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'

export default {
  components: { MainHeader }
}
</script>
