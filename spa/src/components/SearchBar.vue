<script setup>
import { ref, defineEmits } from "vue";

const searchQuery = ref("");
const emit = defineEmits(["updateSearch"]);

const updateSearch = () => {
  emit("updateSearch", searchQuery.value);
};


</script>

<template>
    <div class="busqueda" id="search">
        <input  v-model="searchQuery"   @input="updateSearch" type="text" placeholder="Buscar por nombre" >
    </div>
</template>



<script>
export default {
    name: 'SearchBar'
}
</script>

<style>
.busqueda {
    margin: 20px auto;
    width: 40%;
    margin-top: 90px;
    
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid rgba(222, 222, 222, 0.929);;
}
.busqueda input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}
input:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
</style>