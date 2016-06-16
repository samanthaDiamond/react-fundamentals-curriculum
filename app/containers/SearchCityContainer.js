var React = require('react');
var styles = require('../styles/index');
var GetCity = require('../components/GetCity');
var getForcast = require('../helpers/api').getForcast;
var getCurrentWeather = require('../helpers/api').getCurrentWeather;
var ForecastContainer = require('../containers/ForecastContainer');

var SearchCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
    // getForcast(this.state.cityAndState);
    this.context.router.push('/forecast/' + this.state.cityAndState);
    // getCurrentWeather(this.state.cityAndState)
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
