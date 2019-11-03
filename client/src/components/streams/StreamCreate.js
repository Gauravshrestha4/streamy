import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  };
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit(formValues) {
    console.log(formValues);
  }
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'
      >
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}
const validate = formProps => {
  let errors = {};
  if (!formProps.title) {
    errors.title = "Please enter the title";
  }
  if (!formProps.description) {
    errors.description = "Please enter the description";
  }
  return errors;
};
export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
