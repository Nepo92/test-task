<template>
  <div class="widget-settings">
    <ul class="widget-settings__list">
      <li class="widget-settings__item">
        <span>Widget settings</span>
        <button type="button" @click="() => openSettings()">X</button>
      </li>
      <li class="widget-settings__item" v-for="(item, index) in citiesList" :key="index">
        <p>{{item.name}}</p>
        <button type="button" @click="() => removeCity(item)">x</button>
      </li>
      <li class="widget-settings__item">
        <p>Добавить город</p>
        <input v-model="queryParamsCoordinates.q" type="text" placeholder="Название города">
        <button type="button" @click="() => addWidgetCity()">Add</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import qs from 'qs';
import { useApi } from '@/api/api';
import { City } from '@/models/city';

const { getCityCoordinates, getWeatherInCity } = useApi();

const props = defineProps({
  appProps: {
    type: Object,
    required: true,
  },
});

const { openSettings, citiesList } = props.appProps;

const queryParamsCoordinates = {
  q: '',
  limit: 1,
};

const queryParamsWeather = {
  lat: 0,
  lon: 0,
};

const addWidgetCity = async () => {
  if (citiesList.value.length > 3) {
    throw new Error('Больше 3 нельзя');
  } else {
    const paramsCoordinates = qs.stringify(queryParamsCoordinates);
    const [city] = await getCityCoordinates(paramsCoordinates);

    queryParamsWeather.lat = city.lat;
    queryParamsWeather.lon = city.lon;

    const paramsWeather = qs.stringify(queryParamsWeather);
    const cityWidget = await getWeatherInCity(paramsWeather);

    citiesList.value.push(cityWidget);
  }

  queryParamsCoordinates.q = '';
};

const removeCity = (city: City) => {
  citiesList.value = [...citiesList.value.filter((el: City) => el.id !== city.id)];
};
</script>
