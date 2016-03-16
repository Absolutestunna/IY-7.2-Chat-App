var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');


var MessageComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleClick: function(){
    console.log('clicked')
  },
  render: function(){
    return (
      <div>
        <div className="row chat-box">
            <div className="msgs"></div>
            <textarea className="personalmsgs" type="text" name="name" rows="8"></textarea>
            <button onClick={this.handleClick} className="btn btn-default">Submit</button>
        </div>
      </div>
    );
  }
});

module.exports = MessageComponent;
