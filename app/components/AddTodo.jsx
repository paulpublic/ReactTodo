var React = require('react');

var AddTodo = React.createClass({
  addTodo: function(e) {
    e.preventDefault();

    var text = this.refs.text.value;
    var {onAddTodo} = this.props;

    if (text.length > 0) {
      this.refs.text.value = "";
      onAddTodo(text);
    } else {
      this.refs.text.focus();
    }
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.addTodo} >
          <input ref='text' type='text' placeholder='What do you need todo?'/>
          <button className="button expanded"> Add task </button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
