<template>
  <v-footer class="footer" padless>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <div class="footer-section">
            <h2>Sobre Nosotros</h2>
            <p>
              Somos una plataforma dedicada a la gestión de inventarios tecnológicos, optimizando procesos y mejorando la eficiencia.
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="footer-section">
            <h2>Enlaces Rápidos</h2>
            <v-list dense>
              <v-list-item v-for="(link, i) in links" :key="i">
                <v-list-item-title>
                  <a :href="link.href">{{ link.text }}</a>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="footer-section">
            <h2>Nuestros Aliados</h2>
            <div class="allies">
              <v-img src="/img/cgti.png" alt="Aliado 1" width="100" contain />
              <v-img src="/img/aliado1.png" alt="Aliado 2" width="100" contain />
              <v-img src="/img/aliado2.png" alt="Aliado 3" width="100" contain />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>


    <div class="text-center footer-bottom pa-4">
      © 2025 Todos los derechos reservados.
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.footer {
  background-color: #1e1e1e;
  color: white;
}

.footer-section h2 {
  margin-bottom: 10px;
  font-size: 18px;
}

.footer-section a {
  color: #ffffff;
  text-decoration: none;
}

.footer-section a:hover {
  text-decoration: underline;
}

.allies {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.footer-bottom {
  font-size: 14px;
  opacity: 0.7;
}
</style>
