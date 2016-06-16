var React = require('react');
var styles = require('../styles/index');

var GetCity = require('../components/GetCity');

var SearchCityContainer = React.createClass({
  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },
  getInitialState: function () {
    return {
      cityAndState: ''
    };
  },
  handleUpdateCityAndState: function (e) {
    this.setState({
      cityAndState: e.target.value
    })
  },
  handleSubmitCityAndState: function (e) {
    e.preventDefault();
    var cityAndState = this.state.cityAndState;
    this.setState({
      cityAndState: ''
    });
    // this.context.router.push('/search/' + this.state.cityAndState);
  },
  render: function () {
    return (
      <GetCity
        onSubmitCityAndState={this.handleSubmitCityAndState}
        onUpdateCityAndState={this.handleUpdateCityAndState}
        cityAndState={this.state.cityAndState} />
    )
  }
});

module.exports = SearchCityContainer;
