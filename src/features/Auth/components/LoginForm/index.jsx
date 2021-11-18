import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-control/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, Typography, LinearProgress } from '@material-ui/core';
import { LooksOutlined } from '@material-ui/icons';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PasswordField from '../../../../components/form-control/PasswordField';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(3),
  },
  avatar: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0, 3, 0),
  },
  submit: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    margin: theme.spacing(2, 0, 3),
  },
  progress: {
    position: 'absolute',
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a invalid email'),
    password: yup.string().required('Please enter your password.'),
  });
  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(value);
    }
  };
  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar}>
        <LooksOutlined></LooksOutlined>
      </Avatar>
      <Typography className={classes.title}>Login An Account</Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" form={form} label="Email"></InputField>
        <PasswordField
          name="password"
          form={form}
          label="PassWord"
        ></PasswordField>
        <Button
          disabled={isSubmitting}
          type="submit"
          className={classes.submit}
          fullWidth
          color="inherit"
          size="large"
          variant="contained"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
