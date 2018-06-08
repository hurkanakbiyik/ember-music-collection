import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  authorName: attr('string'),
  albumName: attr('string'),
  genres: attr(),
  year: attr('number'),
  url: attr('string'),
  image: attr('string')
});
