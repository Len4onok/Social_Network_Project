import React from 'react';
import { Formik, Field } from 'formik';


const ProfileStatusForm = (props) => {

    const handleBlur = (e)=>{
        props.deActivateEditMode(e.currentTarget.value)
    }


    return (
    <Formik
        initialValues={{
            status: props.status
        }}
    >
        <Field name='status' onBlur={e=>handleBlur(e)} autoFocus={true}>
        </Field>
    </Formik>
    )
}
export default ProfileStatusForm;