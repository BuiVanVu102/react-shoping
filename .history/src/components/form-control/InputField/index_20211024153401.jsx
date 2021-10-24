import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};
function InputField(props) {
  const { name, form, label, disable } = props;
  const { control } = form;
  console.log(control);
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { invalid, error },
      }) => {
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          label={label}
          error={invalid}
          helperText={error?.message}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          disabled={disable}
        />;
      }}
    ></Controller>
  );
}

export default InputField;

// 	<Controller
// 	control={control}
// 	name="test"
// 	render={({
// 	  field: { onChange, onBlur, value, name, ref },
// 	  fieldState: { invalid, isTouched, isDirty, error },
// 	  formState,
// 	}) => (
// 	  <Checkbox
// 		onBlur={onBlur}
// 		onChange={onChange}
// 		checked={value}
// 		inputRef={ref}
// 	  />
// 	)}
//   />
//
