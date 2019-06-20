<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <create />
    </v-flex>
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
  },
  async asyncData() {}
})
export default class Index extends Vue {}
</script>
