import  React  from 'react';
import { Field, Form, Formik } from 'formik';
import { maxLengthCreator } from '../../helpers/validation/validation';
import s from './DialogsForm.module.css'
import { ErrorMessage } from 'formik';

const DialogsForm = (props) => {

   const maxLength5=maxLengthCreator(5);
    

    const sendMessage = (newText) => {
        props.onSendMessage(newText);
    }

    return (
        <Formik
            initialValues={{
                newText: ''
            }}
            onSubmit={values => { sendMessage(values.newText) }}
            validationSchema={maxLength5}
        >
            <Form>
                <Field component='textarea' name='newText'/>
                <ErrorMessage  className={s.error} name="newText" component="div" />
                <button type='submit'>Send Message</button>
            </Form>
        </Formik>
    )
}

export default DialogsForm;