import { faker } from '@faker-js/faker';
import { Coffee } from "./coffee";

export function createRandomCoffee(): Coffee {
  return new Coffee(
    faker.datatype.number(),
    faker.commerce.productName(),
    faker.helpers.arrayElement(['Café de Origen', 'Blend']),
    faker.address.city() + ", " + faker.address.state(),
    faker.commerce.productAdjective(),
    faker.datatype.number(),
    faker.image.imageUrl(720, 720, 'coffee')
  );
}
