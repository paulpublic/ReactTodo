var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },

  render: function() {
    return (
      <div>
        <div>
          <input onChange={this.handleSearch} type='search' ref='searchText' placeholder="Search todos's"></input>
        </div>
        <div>
          <label>
            <input onChange={this.handleSearch} type='checkbox' ref='showCompleted'></input>
            Show completed todo's
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
