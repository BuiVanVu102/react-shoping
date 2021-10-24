import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-control/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Typography } from '@material-ui/core';
import { LooksOutlined } from '@material-ui/icons';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
  },
  avatar: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    margin: '0 auto',
  },
  title: {},
  submit: {},
  progress: {},
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    title: yup
      .string()
      .required('Please enter title')
      .min(5, 'Title is too short!'),
  });
  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(value);
    }
  };
  return (
    <div className={classes.root}>
      <Avatar>
        <LooksOutlined></LooksOutlined>
      </Avatar>
      <Typography>Create An Account</Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
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
