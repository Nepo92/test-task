<template>
<div class="widget-main">
  <ul
      v-for="(city, index) in citiesList"
      :key="index"
      class="widget-main__wrapper">
    <li class="widget-main__header">
      <span class="widget-header__location">
        {{city.name}}, {{city.sys.country}}
      </span>
      <button
        v-if="index === 0"
        @click="() => openSettings()"
        type="button"
        class="widget-header__settings"
      >
      </button>
    </li>
    <li class="widget__body">
      <div class="widget-body__weather">
        <img class="widget-weather__img" :src="city.icon" alt="weather">
        <span class="widget-weather__temperature">{{city.main.temp}}°C</span>
      </div>
    </li>
    <li class="widget__description">
      <ul class="widget-description__list">
        <li class="description-list__item">
          Feels like {{city.main.feels_like}}°C. {{city.weather[0].description}}
        </li>
        <li class="description-list__item">
          <span>
            <span class="description-item__wind-icon"></span>
            {{city.wind.speed}}m/s.
            <span class="description-item__barometer-icon"></span>
            {{city.main.pressure}}hPa
          </span>
        </li>
        <li class="description-list__item">
          Hymidity {{city.main.humidity}}%. Dev Point: 0°C
        </li>
        <li class="description-list__item">
          Visibility: {{city.visibility}}m
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  appProps: {
    type: Object,
    required: true,
  },
});

const { openSettings, citiesList } = props.appProps;
</script>
