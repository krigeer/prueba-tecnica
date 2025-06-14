<script setup>
import { defineProps, ref, watch } from "vue";

const props = defineProps({
  user: Object,
  dialog: Boolean,
  closeModal: Function
});

const localDialog = ref(props.dialog); 

watch(() => props.dialog, (newValue) => {
  localDialog.value = newValue; 
});
</script>

<template>
  <v-dialog v-model="localDialog" max-width="500">
    <v-card v-if="user">
      <v-card-title>{{ user.name }}</v-card-title>
      <v-card-subtitle>{{ user.email }}</v-card-subtitle>
      <v-card-text>
        <p><strong>Teléfono:</strong> {{ user.phone }}</p>
        <p><strong>Empresa:</strong> {{ user.company?.name }}</p>
        <p><strong>Sitio Web:</strong> {{ user.website }}</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="props.closeModal">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
