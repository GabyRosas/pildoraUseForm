import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, getValues } = useForm();
      const onSubmit = handleSubmit((values) => {
        alert('Form submit: ' + JSON.stringify(values));
      });
           
  return (
    <>
      <h1>Create an account</h1>
      <form onSubmit={onSubmit}>
        <input {...register('firstName', { required: true })} placeholder='First name'/>
        <input {...register('secondName', { required: true })} placeholder='Second name'/>
        <input {...register('mail', { required: true })} placeholder='Email'/>
        <input {...register('password', { required: true })} placeholder='Password' type='password'/>
        <input {...register('confirmPassword', {
            required: true,
            validate: (value) => value === getValues('password'),
          })} placeholder='Confirm password' type='password'/>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default Contact;