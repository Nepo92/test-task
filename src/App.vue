<template>
  <section class="widget">
    <WidgetMain
      v-if="!isOpenSettings"
      :appProps="appProps"
    />
    <WidgetSettings
      v-else
      :appProps="appProps"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WidgetSettings from './components/settings/WidgetSettings.vue';
import WidgetMain from './components/main/WidgetMain.vue';
import { City } from '@/models/city';

const isOpenSettings = ref(false);

const openSettings = () => {
  isOpenSettings.value = !isOpenSettings.value;
};

const citiesList = ref([] as Array<City>);

const appProps = {
  isOpenSettings,
  openSettings,
  citiesList,
};

</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
