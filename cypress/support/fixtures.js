import { faker } from '@faker-js/faker';

export const generateUser = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state({ abbreviated: true }),
  zip: faker.location.zipCode(),
  phone: faker.phone.number('###-###-####'),
  ssn: faker.helpers.replaceSymbolWithNumber('###-##-####'),
  username: faker.internet.username(),
  password: faker.internet.password({ length: 12 }),
});

export const generateLoginUser = () => ({
  username: faker.internet.username(),
  password: faker.internet.password({ length: 12 }),
});
