var Backbone = require('backbone');

var UserModel = Backbone.Model.extend({
  username: '',
  password: ''
});

module.exports = UserModel;
