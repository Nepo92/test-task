<template>
  <div class="widget-settings">
    <ul class="widget-settings__list">
      <li class="widget-settings__item head">
        <span class="settings-item__title">Settings</span>
        <button class="settings-item__close" type="button" @click="() => openSettings()"></button>
      </li>
      <li class="widget-settings__item cities">
        <!-- v-for="(item, index) in citiesList" :key="index" -->
        <draggable v-model="citiesList" item-key="id" @end="endDragging">
          <template #item="{element}">
            <div class="city">
              <div class="city__info">
                <div class="city__burger">
                  <span class="city-burger__row"></span>
                  </div>
                  <p class="settings-item__name city__name">{{element.name}}</p>
                </div>
                <button
                  class="city__remove"
                  type="button"
                  @click="() => removeCity(element)"
                >
                </button>
              </div>
          </template>
        </draggable>
      </li>
      <li class="widget-settings__item add-city">
        <p class="settings-item__name">Type city name</p>
        <div class="add-city__nav">
          <input
          class="add-city__input"
          v-model="queryParamsCoordinates.q" type="text" placeholder="City name">
          <button class="add-city__btn" type="button" @click="(e) => addWidgetCity(e)">Add</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import qs from 'qs';
import { useApi } from '@/api/api';
import { useValidateCity } from '@/composables/useValidateCity';
import { useCityWidget } from '@/composables/useCityWidget';
import { useWidgetStore } from '@/store/widgetStore';
import draggable from 'vuedraggable';
import { City } from '@/models/city';

const { getCityCoordinates, getWeatherInCity } = useApi();
const { icons, queryParamsWeather, queryParamsCoordinates } = useWidgetStore();

const props = defineProps({
  appProps: {
    type: Object,
    required: true,
  },
});

const { openSettings, citiesList, isLoading } = props.appProps;

const { validate, validateSameCity } = useValidateCity();
const { addCityInWidget } = useCityWidget();

const addWidgetCity = async (e: Event) => {
  const t = e.target as HTMLElement;
  validate(queryParamsCoordinates, citiesList);

  t.style.pointerEvents = 'none';

  try {
    isLoading.value = true;
    const paramsCoordinates = qs.stringify(queryParamsCoordinates);
    const [city] = await getCityCoordinates(paramsCoordinates);

    queryParamsWeather.lat = city.lat;
    queryParamsWeather.lon = city.lon;

    validateSameCity(citiesList, city);

    const paramsWeather = qs.stringify(queryParamsWeather);
    const cityWidget = await getWeatherInCity(paramsWeather);

    const cityWidgetProps = {
      cityWidget, city, icons,
    };

    addCityInWidget(cityWidgetProps);

    citiesList.value.push(cityWidget);

    localStorage.setItem('citiesList', JSON.stringify(citiesList.value));

    queryParamsCoordinates.q = '';
  } catch (error) {
    console.info(error);
  } finally {
    isLoading.value = false;
    t.style.pointerEvents = 'all';
  }
};

const removeCity = (city: City) => {
  citiesList.value = [...citiesList.value.filter((el: City) => el.lon !== city.lon)];

  localStorage.setItem('citiesList', JSON.stringify(citiesList.value));
};

const endDragging = () => {
  localStorage.setItem('citiesList', JSON.stringify(citiesList.value));
};

</script>
