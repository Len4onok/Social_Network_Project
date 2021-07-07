import React from 'react'
import { Field, Form, Formik, resetForm } from 'formik';
import { ErrorMessage } from 'formik';
import s from './NewPostForm.module.css'
import { maxLengthCreator } from '../../../helpers/validation/validation';

const NewPostForm = (props) => {


  let addPost = (newPostText) => {
    props.addPost(newPostText);
  }

  let maxLength10=maxLengthCreator(10);
  
  return (

    <Formik
      initialValues={{
        newText: '' 
      }}
      onSubmit={(values, {resetForm }) => {addPost(values.newText); resetForm({})}}
      validationSchema={maxLength10}
    >
 
      <Form>
        <Field component='textarea' name='newText' />
        <ErrorMessage  className={s.error} name="newText" component="div" />
        <button type='submit'>Add post</button>
      </Form>
    </Formik>
  );
}

export default NewPostForm;
