var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');

var name;

var UserInfoComponent = React.createClass({
    mixins: [Backbone.React.Component.mixin],
    handleSubmit: function(e){
      e.preventDefault();
      name =  $('.name').val();
      // this.props.model.set({model: name})
      localStorage.setItem("username", name);
      this.props.model.set({"username": localStorage.username});
      if (name != ''){
        Backbone.history.navigate('chat', {trigger: true});
      }
      else {
        $('.welcome').append('<p>*Please enter a valid username</p>');
      }
      // this.props.model.set('')
    },
    render: function(){
      return (
            <div>
              <div className="row welcome">
                <p>Thank you for visiting my chat app. In order to proceed, please enter your username and password</p>
              </div>
              <div className="row userinfo">
                  <div className="col-md-12">
                    <form onSubmit={this.handleSubmit} role="form">
                        <input onChange={this.handleChange} className="form-control name" type="text" name="name" placeholder="Username" />
                        <button className="btn btn-default" type="submit">Submit</button>
                    </form>
                  </div>
              </div>

          </div>//end of wrapper div
    )
  }
});


  // <input className="form-control password" type="text" name="password"  placeholder="Password" />
module.exports = UserInfoComponent;
