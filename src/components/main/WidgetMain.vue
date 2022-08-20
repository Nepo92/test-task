<template>
<div class="widget-main">
  <div v-if="!citiesList.length">
    Select city
    <button type="button" @click="() => openSettings()">Go to settings</button>
    <img src="" alt="start picture">
  </div>
  <ul
      v-else
      v-for="(city, index) in citiesList"
      :key="index"
      class="widget__wrapper">
    <li class="widget__header">
      <span class="widget-header__location">
        {{city.name || 'select city'}}, {{city.country || ''}}
      </span>
      <button
        v-if="index === 0"
        @click="() => openSettings()"
        type="button"
        class="widget-header__settings"
      >
        settings
      </button>
    </li>
    <li class="widget__body">
      <div class="widget-body__weather">
        <img class="widget-weather__img" src="" alt="weather">
        <span class="widget-weather__temperature"></span>
      </div>
    </li>
    <li class="widget__description">
      <ul class="widget-description__list">
        <li class="description-list__item">

        </li>
        <li class="description-list__item">
          <span></span>
          <span></span>
        </li>
        <li class="description-list__item">
          <span></span>
          <span></span>
        </li>
        <li class="description-list__item">
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
