import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
     /*const { register, handleSubmit, getValues } = useForm();
      const onSubmit = handleSubmit((values) => {
        alert('Form submit: ' + JSON.stringify(values));
      });*/
    const onSubmit = () => {
                alert('Form submit: ');
              };
        
  return (
    <>
      <h1>Create an account</h1>
      <form onSubmit={onSubmit}>
        <input placeholder='First name'/>
        <input placeholder='Second name'/>
        <input placeholder='Email'/>
        <input placeholder='Password' type='password'/>
        <input placeholder='Confirm password' type='password'/>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default Contact;