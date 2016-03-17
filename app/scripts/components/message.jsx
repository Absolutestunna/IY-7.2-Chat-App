var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var moment = require('moment');
require('backbone-react-component');


var MessageComponent = React.createClass({
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

        return (<div>
            <div key={model.get('_id')}>
              <span>{model.get('content')}</span>
              <span>{model.get('username')}</span>
              <span>{model.get('time')}</span>
            </div>
        </div>
        )
      });
  return (
      <div>
        <div className="row chat-box">
            <div className="incomeMsgs">
              <div className="chat-box">{messages}</div>
            </div>
            <form id="chat-form" className="input-group">
              <textarea value={this.props.content} className="personalmsgs form-control" type="text" name="name" rows="8"></textarea>
              <button onClick={this.handlePostData} className="btn btn-default">Submit</button>
            </form>
        </div>
      </div>
    );
  }
});

module.exports = MessageComponent;
