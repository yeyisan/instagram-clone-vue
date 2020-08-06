<template>
  <div class="app">
    <MainHeader />
    <main class="main">
      <Container>
        <router-view />
      </Container>
    </main>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import Container from '@/components/Container'

export default {
  components: { Container, MainHeader }
}
</script>

<style scoped>
.main {
  padding-top: 40px;
  background-color: rgb(var(--b3f));
}
</style>
