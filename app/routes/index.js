import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
      login(params, context) {
        var ref = new Firebase("https://help-queue-app.firebaseio.com");
        ref.authWithPassword({
          email    : params.email,
          password : params.password
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            window.location.reload();
          }
        });
      }
  }
});
