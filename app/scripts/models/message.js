var Backbone = require('backbone');

var MessageModel = Backbone.Model.extend({
  username: '',
});

var MessagesCollection = Backbone.Collection.extend({
  model: MessageModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages',
  parse: function(data){
    console.log(data)
  }
});

module.exports = {
  'MessageModel': MessageModel,
  'MessagesCollection': MessagesCollection
};
