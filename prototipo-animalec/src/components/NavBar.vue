<template>
  <nav class="animalec-navbar">
    <!-- Logo -->
    <router-link to="/" class="animalec-navbar__logo">
      Animalec
    </router-link>

    <!-- Toggle mobile -->
    <button
      type="button"
      class="animalec-navbar__toggle"
      :aria-expanded="menuOpen ? 'true' : 'false'"
      aria-label="Abrir menu"
      @click="menuOpen = !menuOpen"
    >
      <span v-if="!menuOpen">☰</span>
      <span v-else>✕</span>
    </button>

    <!-- Menu -->
    <ul
      class="animalec-navbar__menu"
      :class="{ 'is-open': menuOpen }"
    >
      <li v-for="item in menuItems" :key="item.to">
        <router-link
          :to="item.to"
          class="animalec-navbar__link"
          :class="{ 'is-active': isActive(item.to) }"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menuOpen: false,
      menuItems: [
        { label: "ANIMAIS",   to: "/animais" },
        { label: "QUIZZES",   to: "/quizzes" },
        { label: "CONTACTOS", to: "/contactos" },
        { label: "LOGIN",     to: "/login" },
      ],
    };
  },
  methods: {
    isActive(path) {
      return this.$route && this.$route.path === path;
    },
  },
  watch: {
    // Fecha o menu ao mudar de rota
    $route() {
      this.menuOpen = false;
    },
  },
};
</script>

<style scoped>
/* Ajustes específicos deste componente.
   Todo o resto vem das classes globais do main.css. */

.animalec-navbar__toggle span {
  font-size: 1.25rem;
  line-height: 1;
}

/* Remove o estilo default do router-link quando ativo */
.animalec-navbar__link {
  text-decoration: none;
}

/* Fecha o menu mobile ao clicar fora */
@media (max-width: 767px) {
  .animalec-navbar__menu.is-open {
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
  }
}
</style>