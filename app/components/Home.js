var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index');
var SearchCityContainer = require('../containers/SearchCityContainer');

function Home (props) {
  return (
    <div style={styles.homeContainer}>
      <SearchCityContainer style={styles.getCityContainer} />
    </div>
  )
}

module.exports = Home;
