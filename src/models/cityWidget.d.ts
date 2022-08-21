import { City } from './city';

export interface CityWeather {
  main: string,
  description: string,
}

export interface CityWidgetMain {
  temp: number,
  'feels_like': number,
}

export interface CityWidgetWind {
  speed: number
}

export interface CityWidget {
  lat: number,
  lon: number,
  weather: Array<CityWeather>,
  icon?: string,
  main: CityWidgetMain,
  wind: CityWidgetWind,
}

export interface CityWidgetProps {
  cityWidget: CityWidget,
  city: City,
  icons: Array<>
}
