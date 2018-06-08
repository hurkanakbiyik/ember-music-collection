import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    save(record) {
      record.save()
        .then(() => this.transitionTo('musics'));
    },

    willTransition() {
      this._super(...arguments);
      const record = this.controller.get('model');
      record.rollbackAttributes();
    }
  }
});
