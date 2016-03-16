var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');


var MessageComponent = React.createClass({displayName: "MessageComponent",
  mixins: [Backbone.React.Component.mixin],
  handleClick: function(){
    console.log('clicked')
  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "row chat-box"}, 
            React.createElement("div", {className: "msgs"}), 
            React.createElement("textarea", {className: "personalmsgs", type: "text", name: "name", rows: "8"}), 
            React.createElement("button", {onClick: this.handleClick, className: "btn btn-default"}, "Submit")
        )
      )
    );
  }
});

module.exports = MessageComponent;