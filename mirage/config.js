export default function() {

  this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/';    // make this `/api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/musics');
  this.post('/musics');
  this.get('/musics/:id');
  this.patch('/musics/:id'); // or this.put
  this.del('/musics/:id');

}
