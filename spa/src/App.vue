<template>
  <v-app>
    <div class="wrapper">
        <AppHeader />
        <SearchBar />
        <UserList />
    </div>
    <AppFooter />
  </v-app>
</template>

<script>
import AppFooter from './components/Fet.vue'
import AppHeader from './components/Header.vue'
import UserList from './components/UserList.vue'


export default {
  name: 'App',
  components: {
    AppHeader,
    UserList,
    AppFooter,
  }
}
</script>
