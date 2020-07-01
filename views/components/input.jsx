import React from 'react';

class Input extends React.Component {
  constructor(props){
    super(props);

    this.validate = this.validate.bind(this);
    this.changeHandler = this.changeHandler.bind(this);

    this.state = {
      error: ''
    }
  }

  validate(value){
    let isValid = this.state.valid;
    let validation = this.props.validate(value);
    let valid = validation.length > 0;
    let updatedValidations = {
      valid: valid,
      error: valid ? '' : validation
    }

    this.setState(updatedValidations);
    return valid;
  }

  changeHandler(e){
    console.log('input change *****************************')
    let value = e.target.value;
    let valid = this.valid(value);
    this.props.changeHandler(this.props.name, valid);
  }

  render(){
    let error = this.state.error.length > 0 ? this.state.error : null;
    console.log('render input ****************************')
    return(
      <div>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input name={this.props.name} id={this.props.name} className="u-full-width" type={this.props.type} onChange={this.changeHandler} />
        <small>{this.state.error}</small>
      </div>
    );
  }
}

module.exports = Input;
