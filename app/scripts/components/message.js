var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var moment = require('moment');
require('backbone-react-component');


var MessageComponent = React.createClass({displayName: "MessageComponent",
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
      return {
      userName: this.props.model.get('username'),
      content: "",
      time: moment(new Date()).fromNow(),
      messageCollection: this.props.collection
    }
  },
  componentDidMount: function(){
    setInterval(this.fetchData, 1000);
  },

  fetchData: function(){
    this.props.collection.fetch();
    // this.state.messageCollection.fetch();
  },
  handlePostData: function(e){
    e.preventDefault();
    this.setState({
      username: "Absolutestunna",
      content: $(".personalmsgs").val(),
      time: moment(new Date()).fromNow()
    })
    this.props.collection.create({username: this.state.username, content:this.state.content, time:this.state.time})
  },
  render: function(){
      var messages = this.props.collection.map(function(model){

        return (React.createElement("div", null, 
            React.createElement("div", {key: model.get('_id')}, 
              React.createElement("span", null, model.get('content')), 
              React.createElement("span", null, model.get('username')), 
              React.createElement("span", null, model.get('time'))
            )
        )
        )
      });
  return (
      React.createElement("div", null, 
        React.createElement("div", {className: "row chat-box"}, 
            React.createElement("div", {className: "incomeMsgs"}, 
              React.createElement("div", {className: "chat-box"}, messages)
            ), 
            React.createElement("form", {id: "chat-form", className: "input-group"}, 
              React.createElement("textarea", {value: this.props.content, className: "personalmsgs form-control", type: "text", name: "name", rows: "8"}), 
              React.createElement("button", {onClick: this.handlePostData, className: "btn btn-default"}, "Submit")
            )
        )
      )
    );
  }
});

module.exports = MessageComponent;