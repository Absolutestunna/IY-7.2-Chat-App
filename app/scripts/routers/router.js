var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');


var UserInfo = require('./../components/userinfo.jsx');
var MessageComponent = require('./../components/message.jsx');
var message = require('./../models/message');
var UserModel = require('./../models/userinformation');
var user = new UserModel();  //username and password


var MessageInfo = MessageComponent;
var messageCollection = new message.MessagesCollection();
messageCollection.fetch();

var Router = Backbone.Router.extend({
//   initialize: function(){
//
//   },
  routes: {
    '': 'welcomeIndex',
    'chat': 'chatspace'
  },
  welcomeIndex: function(){
    // this.user.set({name: Jake}) //then use a .get to ini
    ReactDOM.render(
      React.createElement(UserInfo, {model:user})
        , document.getElementById('container')
    );
  },
  chatspace: function(){
    ReactDOM.render(
      React.createElement(MessageInfo)
        , document.getElementById('container')
    );
  }
});

module.exports = Router;
