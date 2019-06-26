<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <h1>Vue-seesaw</h1>

    <p>
      The
      <a
        href="https://github.com/simjes/playground"
        title="https://github.com/simjes/playground"
        target="_blank"
        rel="noopener noreferrer"
      >playground</a>
      is a repository for creating small and simple
      applications to test out new technologies and frameworks
    </p>

    <create />
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from '~/components/Logo.vue';
import VuetifyLogo from '~/components/VuetifyLogo.vue';
import Create from '~/components/Create/Create';

@Component({
  components: {
    Logo,
    VuetifyLogo,
    Create
  }
})
export default class Index extends Vue {}
</script>
