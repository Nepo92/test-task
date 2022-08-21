<template>
  <div class="widget-empty">
    <button
      class="widget-empty__btn"
      type="button"
      @click="() => openSettings()"
    >
    </button>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps, onMounted, onUnmounted, watch, ref,
} from 'vue';
import qs from 'qs';
import { useApi } from '@/api/api';
import { useCityWidget } from '@/composables/useCityWidget';
import { useWidgetStore } from '@/store/widgetStore';

const geo = ref();
const { getWeatherInCity } = useApi();
const { addCityInWidget } = useCityWidget();
const { icons, queryParamsEmpty } = useWidgetStore();

const props = defineProps({
  appProps: {
    type: Object,
    required: true,
  },
});

const { openSettings, isLoading, citiesList } = props.appProps;

const storageList = JSON.parse(localStorage.getItem('citiesList') as string);
const noStorageList = !storageList || !storageList.length;

if (noStorageList) {
  isLoading.value = true;
} else {
  citiesList.value = storageList;
}

onMounted(() => {
  if (noStorageList) {
    geo.value = navigator.geolocation.watchPosition((pos) => {
      queryParamsEmpty.lat = pos.coords.latitude;
      queryParamsEmpty.lon = pos.coords.longitude;
    });
  }
});

onUnmounted(() => {
  if (geo.value) {
    navigator.geolocation.clearWatch(geo.value);
  }
});

watch(queryParamsEmpty, async (coor) => {
  const params = qs.stringify(coor);

  if (noStorageList) {
    try {
      const cityWidget = await getWeatherInCity(params);

      const city = {
        lat: cityWidget.coord.lat,
        lon: cityWidget.coord.lon,
      };

      const cityWidgetProps = {
        cityWidget, city, icons,
      };

      addCityInWidget(cityWidgetProps);

      citiesList.value.push(cityWidget);
      localStorage.setItem('citiesList', JSON.stringify(citiesList.value));
    } catch (e) {
      console.info(e);
    } finally {
      isLoading.value = false;
    }
  }
});
</script>
