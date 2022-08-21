import { Ref } from 'vue';
import { City } from '@/models/city';

interface queryCity {
  q: string,
  limit: number,
}

const validate = (queryParamsCoordinates: queryCity, citiesList: Ref<Array<City>>) => {
  if (!queryParamsCoordinates.q) {
    throw new Error('Не понятно какой город добавлять');
  }

  if (citiesList.value.length > 2) {
    throw new Error('Больше 3 нельзя');
  }
};

const validateSameCity = (citiesList: Ref<Array<City>>, city: City) => {
  const haveCity = citiesList.value.find((el: City) => el.name === city.name);

  if (haveCity) {
    throw new Error('Такой город уже есть');
  }
};

export const useValidateCity = () => ({
  validate,
  validateSameCity,
});
