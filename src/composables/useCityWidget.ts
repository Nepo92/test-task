import { CityWidgetProps } from '@/models/cityWidget';
import { weatherIcon } from '@/models/weatherIcon';

const addCityInWidget = (cityWidgetProps: CityWidgetProps) => {
  const { cityWidget, city, icons } = cityWidgetProps;

  cityWidget.lat = city.lat;
  cityWidget.lon = city.lon;

  if (cityWidget.weather[0].main === 'Clouds') {
    cityWidget.icon = icons.find((el: weatherIcon) => el.name === 'Clouds').path;
  } else if (cityWidget.weather[0].main === 'Clear') {
    cityWidget.icon = icons.find((el: weatherIcon) => el.name === 'Clear').path;
  } else if (cityWidget.weather[0].main === 'Rain') {
    cityWidget.icon = icons.find((el: weatherIcon) => el.name === 'Rain').path;
  } else if (cityWidget.weather[0].main === 'Snow') {
    cityWidget.icon = icons.find((el: weatherIcon) => el.name === 'Snow').path;
  } else if (cityWidget.weather[0].main === 'Thunderstorm') {
    cityWidget.icon = icons.find((el: weatherIcon) => el.name === 'Thunderstorm').path;
  }

  const temp = Math.round(cityWidget.main.temp - 273);
  const feelsTemp = Math.round(cityWidget.main.feels_like - 273);
  const description = cityWidget.weather[0].description[0].toUpperCase()
    + cityWidget.weather[0].description.slice(1);
  const windSpeed = Math.round(cityWidget.wind.speed);

  cityWidget.main.temp = temp;
  cityWidget.main.feels_like = feelsTemp;
  cityWidget.weather[0].description = description;
  cityWidget.wind.speed = windSpeed;
};

export const useCityWidget = () => ({
  addCityInWidget,
});
