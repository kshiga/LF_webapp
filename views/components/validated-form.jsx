import React from 'react';

class ValidatedForm extends React.Component {
  constructor(props){
    super(props);
    let fieldsValidity = {};
    let formValid = false;

    if(props.children){
      props.children.map((child) => {
        formValid = formValid && child.props.valid;
        fieldsValidity[`${child.props.name}`] = child.props.valid;
      });
    }

    this.updateFieldValid = this.updateFieldValid.bind(this);
    this._addListenerToChildren = this._addListenerToChildren.bind(this);

    this.state = {
      valid: formValid,
      fieldsValidity: fieldsValidity
    }
  }

  updateFieldValid(field, valid){
    let currentFields = { ...this.fieldsValidity };
    currentFields[field] = valid;

    this.setState({fieldsValidity: currentFields});
  }

  _addListenerToChildren() {
    if(!this.props.children) return null;
    return this.props.children.map(function(child){
        return React.cloneElement(child, { changeHandler: this.updateFieldValid, key: child.props.name })
      }.bind(this)
    )
  }

  render(){
    let disabled = this.state.valid ? false: "disabled";
    return(
      <form>
        { this._addListenerToChildren() }
        <input disabled={disabled} className="button" type="submit" value="Submit"/>
      </form>
    );
  }
}

module.exports = ValidatedForm;
