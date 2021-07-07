
import * as Yup from 'yup';

export const validationSchemaLogin =
    Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .required('Required'),
    });

    export const maxLengthCreator = (maxLength) => 
    Yup.object().shape({
        newText: Yup.string()
            .max(maxLength, `Максимальная длина ${maxLength} символов `)
            .required('')
    });


