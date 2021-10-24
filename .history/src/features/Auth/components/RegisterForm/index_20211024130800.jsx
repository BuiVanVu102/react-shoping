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
    <div>
      <form>
        <InputField name="fullname" form={form} label="Full Name"></InputField>
        <InputField name="email" form={form} label="Email"></InputField>
        <InputField name="password" form={form} label="PassWord"></InputField>
        <InputField
          name="retypePassword"
          form={form}
          label="Retype Password"
        ></InputField>
      </form>
    </div>
  );
}

export default RegisterForm;
