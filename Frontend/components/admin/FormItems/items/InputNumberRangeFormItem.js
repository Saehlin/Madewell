import React, { Component } from "react";
import PropTypes from "prop-types";
import FormErrors from "[[id]]/shared/new/formErrors";
import { FastField } from "formik";

class InputNumberRangeFormItemNotFast extends Component {
  handleStartChanged = (value) => {
    const { form, name } = this.props;
    form.setFieldTouched(name);
    form.setFieldValue(name, [value, this.endValue()]);
  };

  handleEndChanged = (value) => {
    const { form, name } = this.props;
    form.setFieldTouched(name);
    form.setFieldValue(name, [this.startValue(), value]);
  };

  value = () => {
    const { form, name } = this.props;
    return form.values[name];
  };

  startValue = () => {
    if (!this.value()) {
      return "";
    }

    if (Array.isArray(!this.value())) {
      return "";
    }

    if (!this.value().length) {
      return "";
    }

    return this.value()[0];
  };

  endValue = () => {
    if (!this.value()) {
      return "";
    }

    if (Array.isArray(!this.value())) {
      return "";
    }

    if (this.value().length < 2) {
      return "";
    }

    return this.value()[1];
  };

  render() {
    const {
      label,
      name,
      form,
      hint,
      size,
      placeholder,
      autoFocus,
      autoComplete,
      inputProps,
      errorMessage,
      required,
    } = this.props;

    const sizeLabelClassName =
      {
        small: "col-new-label-sm",
        large: "col-new-label-lg",
      }[size] || "";

    const sizeInputClassName =
      {
        small: "new-control-sm",
        large: "new-control-lg",
      }[size] || "";

    return (
      <div className="form-group">
        {!!label && (
          <label
            className={`col-form-label ${
              required ? "required" : null
            } ${sizeLabelClassName}`}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "baseline",
          }}
        >
          <input
            style={{ width: "100%" }}
            type="number"
            id={`${name}Start`}
            onChange={(event) => this.handleStartChanged(event.target.value)}
            value={this.startValue()}
            placeholder={placeholder || undefined}
            autoFocus={autoFocus || undefined}
            autoComplete={autoComplete || undefined}
            className={`form-control ${sizeInputClassName} ${FormErrors.validateStatus(
              form,
              name,
              errorMessage
            )}`}
            {...inputProps}
          />

          <div
            style={{
              flexShrink: 1,
              marginLeft: "8px",
              marginRight: "8px",
            }}
          >
            ~
          </div>

          <input
            style={{ width: "100%" }}
            type="number"
            id={`${name}End`}
            onChange={(event) => this.handleEndChanged(event.target.value)}
            value={this.endValue()}
            placeholder={placeholder || undefined}
            autoFocus={autoFocus || undefined}
            autoComplete={autoComplete || undefined}
            className={`form-control ${sizeInputClassName} ${FormErrors.validateStatus(
              form,
              name,
              errorMessage
            )}`}
            {...inputProps}
          />
        </div>
        <div className="invalid-feedback">
          {FormErrors.displayableError(form, name, errorMessage)}
        </div>
        {!!hint && <small className="form-text text-muted">{hint}</small>}
      </div>
    );
  }
}

InputNumberRangeFormItemNotFast.defaultProps = {
  required: false,
};

InputNumberRangeFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.string,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  formItemProps: PropTypes.object,
  inputProps: PropTypes.object,
};

class InputNumberRangeFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <InputNumberRangeFormItemNotFast {...this.props} form={form} />
        )}
      />
    );
  }
}

export default InputNumberRangeFormItem;
