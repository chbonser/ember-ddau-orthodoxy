import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.company.bs();
  },
  body() {
    return faker.lorem.paragraph();
  },
});
