<template>
  <div class="widget">
    <WidgetEmpty
      v-if="isEmpty"
      :appProps="appProps" />
    <WidgetMain
      v-else-if="isNotEmpty"
      :appProps="appProps"
    />
    <WidgetSettings
      v-else
      :appProps="appProps"
    />
    <GlobalLoader v-show="isLoading" />
    <a class="widget__link" href="https://github.com/Nepo92/test-task">Ссылка на репозиторий проекта в github</a>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import WidgetSettings from './components/settings/WidgetSettings.vue';
import WidgetMain from './components/main/WidgetMain.vue';
import WidgetEmpty from './components/empty/WidgetEmpty.vue';
import GlobalLoader from './components/loader/GlobalLoader.vue';
import { City } from '@/models/city';

const isOpenSettings = ref(false);
const citiesList = ref([] as Array<City>);
const isLoading = ref(false);

const isEmpty = computed(() => Boolean(!isOpenSettings.value && !citiesList.value.length));
const isNotEmpty = computed(() => Boolean(!isOpenSettings.value && citiesList.value.length));

const openSettings = () => {
  isOpenSettings.value = !isOpenSettings.value;
};

const appProps = {
  isOpenSettings,
  openSettings,
  citiesList,
  isLoading,
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
