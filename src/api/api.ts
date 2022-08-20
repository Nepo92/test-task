import axios from 'axios';

const appId = 'bbb8ed948b9970c6454c203515a9c0fe';

const getCityCoordinates = async (params: string) => {
  const response = await axios.get(`/geo/1.0/direct?${params}&appid=${appId}`);

  return response.data;
};

const getWeatherInCity = async (params: string) => {
  const response = await axios.get(`data/2.5/weather?${params}&appid=${appId}`);

  return response.data;
};

export const useApi = () => ({
  getWeatherInCity,
  getCityCoordinates,
});
