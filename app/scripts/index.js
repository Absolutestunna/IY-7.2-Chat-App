var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');


var Router = require('./routers/router');
var realRouter = new Router();
$(function(){
  Backbone.history.start();
});
