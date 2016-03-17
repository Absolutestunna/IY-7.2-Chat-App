var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');


var UserInfo = require('./../components/userinfo.jsx');
var MessageInfo = require('./../components/message.jsx');
var message = require('./../models/message');
var UserModel = require('./../models/userinformation');


var user = new UserModel();  //username and password
var messageCollection = new message.MessagesCollection();

var Router = Backbone.Router.extend({
  routes: {
    '': 'welcomeIndex',
    'chat': 'chatspace'
  },
  welcomeIndex: function(){
    ReactDOM.render(
      React.createElement(UserInfo, {model: user})
        , document.getElementById('container')
    );
  },
  chatspace: function(){
    ReactDOM.render(
      React.createElement(MessageInfo, {collection: messageCollection, model: user})
        , document.getElementById('container')
    );
  }
});

module.exports = Router;
