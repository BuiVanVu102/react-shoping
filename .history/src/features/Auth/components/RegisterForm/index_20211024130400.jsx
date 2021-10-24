import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-control/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
RegisterForm.propTypes = {
  onsubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required('Please enter title')
      .min(5, 'Title is too short!'),
  });
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });
  return (
    <form>
      <InputField name="title" form={form} label="Full Name"></InputField>
    </form>
  );
}

export default RegisterForm;
