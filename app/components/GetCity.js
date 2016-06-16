var React = require('react');
var styles = require('../styles/index');
var PropTypes = React.PropTypes;

function InputField (props) {
  return (
    <input
      className='form-control'
      placeholder='St.George, Utah'
      onChange={props.onUpdateCityAndState}
      value={props.cityAndState}
      type='text'
    />
  )
}

function Button (props) {
  return (
    <button
      className='btn btn-primary'
      onClick={props.onSubmitCityAndState}
      type='submit'>
      {props.children}
    </button>
  )
}

function GetCity (props) {
  return (
    <div style={styles.homeContainer} >
      <form onSubmit={props.onSubmitCityAndState} >
        <InputField
          onUpdateCityAndState={props.onUpdateCityAndState}
          cityAndState={props.cityAndState} />
        <Button onSubmitCityAndState={props.onSubmitCityAndState} >
          Get weather
        </Button>
      </form>
    </div>
  );
}

module.exports = GetCity;
