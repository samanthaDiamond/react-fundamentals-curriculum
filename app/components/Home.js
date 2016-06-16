var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index');
var SearchCityContainer = require('../containers/SearchCityContainer');

function Home (props) {
  return (
    <div style={styles.homeContainer}>
      <h1 style={styles.homeHeader}>Enter a City and State</h1>
      <SearchCityContainer />
    </div>
  )
}

module.exports = Home;
