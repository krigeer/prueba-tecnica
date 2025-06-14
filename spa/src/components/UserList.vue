<script setup>
import { ref, onMounted } from "vue";
import { userData } from "../services/api"; // Ajusta la ruta según tu estructura

const users = ref([]);
const error = ref(null);

onMounted(async () => {
  try {
    users.value = await userData();
  } catch (err) {
    error.value = err.message;
  }
});
</script>

<template>
  <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto" elevation="3" height="70%"
    width="80%" rounded>

    <p v-if="error">Error: {{ error }}</p>

    <v-infinite-scroll class="infinite-scroll-container" @load="load">
      <template v-for="user in users" :key="user.id">
        <div class="pa-2">
          <v-card class="pa-2" rounded="lg" elevation="2">
            <v-card-title class=" align-center text-h6">
              <v-avatar size="90">
                <v-img :src="user.avatar || 'https://i.pravatar.cc/150?img=' + user.id" alt="Avatar"></v-img>
              </v-avatar> 
             
            </v-card-title>
            <v-card-text> {{ user.name }}</v-card-text>
            <v-card-text>{{ user.email }}</v-card-text>
            
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" variant="text" @click="verMas(user.id)">
                Ver más
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </template>
    </v-infinite-scroll>
  </v-sheet>
</template>

<style scoped>
.v-sheet {
  height: 100%;
  overflow: hidden;
}

.infinite-scroll-container {
  height: 80%;
  width: 90%;
  overflow-y: auto;
  margin-top: 0;
  max-height: 80vh;
}

</style>
