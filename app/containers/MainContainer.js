var React = require('react');
var styles = require('../styles/index');
var GetCity = require('../components/GetCity');

var MainContainer = React.createClass({
  render: function () {
    return (
      <div style={styles.mainContainer}>
        <h1> Clever </h1>
        <GetCity
          onSubmitCityAndState={this.handleSubmitCityAndState}
          onUpdateCityAndState={this.handleUpdateCityAndState}
          cityAndState={this.cityAndState} />
        {this.props.children}
      </div>
    );
  }
});

module.exports = MainContainer;
