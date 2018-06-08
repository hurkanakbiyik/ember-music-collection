import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  authorName(){
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },
  albumName() {
    return `${faker.commerce.productName()}`;
  },
  genres() {
    return [faker.lorem.word(),faker.lorem.word(),faker.lorem.word()];
  },
  year() {
    return Math.floor(Math.random() * (2018 - 1900)) + 1900;
  },
  url(){
    return faker.internet.url();
  },
  image() {
    return faker.internet.avatar()
  }
});
