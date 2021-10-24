import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

RegisterForm.propTypes = {
  onsubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape(){
    title: yup.string()
    .required('Please enter title')
    .min(5, 'Title is too short!'),
  }
  const form = useForm({
    defaultValues:{
      title: '',    
    },
    resolver:  yupResolver(schema)
  })
  return <div></div>;
}

export default RegisterForm;
