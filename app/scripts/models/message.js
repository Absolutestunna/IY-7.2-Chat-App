var Backbone = require('backbone');

var MessageModel = Backbone.Model.extend({
  username: '',
});

var MessagesCollection = Backbone.Collection.extend({
  model: MessageModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/s',
  parse: function(data){
    return data;
  }
});

module.exports = {
  'MessageModel': MessageModel,
  'MessagesCollection': MessagesCollection
};
