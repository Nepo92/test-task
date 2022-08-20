<template>
  <section class="widget">
    <ul class="widget__wrapper">
      <li class="widget__header">
        <span class="widget-header__location">Kemerovo, RU</span>
        <span class="widget-header__settings">settings</span>
      </li>
      <li class="widget__body">
        <div class="widget-body__weather">
          <img class="widget-weather__img" src="" alt="weather">
          <span class="widget-weather__temperature">28 °C</span>
        </div>
      </li>
      <li class="widget__description">
          <ul class="widget-description__list">
            <li class="description-list__item">Feels like -3°C. Broken clouds. Light breeze</li>
            <li class="description-list__item">
              <span>3.0m/s SSE </span>
              <span>1021hPa</span></li>
            <li class="description-list__item">
              <span>Hymidity: 97%</span>
              <span>Dew Point: 0 °C</span>
            </li>
            <li class="description-list__item">Visibility 10.0km</li>
          </ul>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const key = 'bbb8ed948b9970c6454c203515a9c0fe;';

</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
