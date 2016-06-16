var React = require('react');
var PropTypes = React.PropTypes;

function InputField (props) {
  return (
    <input
      className='search-city-input-form'
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
      className='btn btn-success'
      onClick={props.onSubmitCityAndState}
      type='submit'>
      {props.children}
    </button>
  )
}

function GetCity (props) {
  return (
    <form onSubmit={props.onSubmitCityAndState} className='get-city-form'>
        <InputField
          onUpdateCityAndState={props.onUpdateCityAndState}
          cityAndState={props.cityAndState} />
        <Button onSubmitCityAndState={props.onSubmitCityAndState} >
          Get weather
        </Button>
    </form>
  );
}

// GetCity.propTypes = {
//   onSubmitCityAndState: PropTypes.func.isRequired,
//   onUpdateCityAndState: PropTypes.func.isRequired,
//   cityAndState: PropTypes.string.isRequired
// }

module.exports = GetCity;
