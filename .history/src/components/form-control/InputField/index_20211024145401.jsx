import React from 'react'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'   
InputField.propTypes = {
	name: PropTypes.string.isRequired,
	form: PropTypes.object.isRequired,

	label: PropTypes.string,
	disable: PropTypes.bool
}
function InputField(props) {
	const {name, form, label, disable} = props;

	return (
		<
	)
}



export default InputField

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