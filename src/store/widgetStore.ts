import { defineStore } from 'pinia';
import Sun from '@/assets/img/sun.svg';
import Rain from '@/assets/img/rain.svg';
import Snow from '@/assets/img/snow.svg';
import Cloudy from '@/assets/img/cloudy.svg';
import Thunder from '@/assets/img/thunder.svg';
import { reactive } from 'vue';

export const useWidgetStore = defineStore('widget', () => {
  const icons = [
    { name: 'Clouds', path: Cloudy },
    { name: 'Clear', path: Sun },
    { name: 'Rain', path: Rain },
    { name: 'Snow', path: Snow },
    { name: 'Thunderstorm', path: Thunder },
  ];

  const queryParamsEmpty = reactive({
    lat: 0,
    lon: 0,
  });

  const queryParamsCoordinates = reactive({
    q: '',
    limit: 1,
  });

  const queryParamsWeather = reactive({
    lat: 0,
    lon: 0,
  });

  return {
    icons,
    queryParamsEmpty,
    queryParamsCoordinates,
    queryParamsWeather,
  };
});
