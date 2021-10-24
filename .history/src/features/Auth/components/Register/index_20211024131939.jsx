import React from 'react';
import RegisterForm from '../RegisterForm';

function Register() {
  const handleSubmit = (values) => {
    console.log('FormValue', values);
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
