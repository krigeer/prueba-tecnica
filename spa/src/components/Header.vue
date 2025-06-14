<script>
export default {
  name: 'AppHeader',
}
</script>

<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-title>
      <v-icon class="mr-2">aa</v-icon>
      BRM
    </v-app-bar-title>

    <v-spacer>Lista de usuarios</v-spacer>

    <v-btn text to="#search">Buscar</v-btn>
  </v-app-bar>
</template>

