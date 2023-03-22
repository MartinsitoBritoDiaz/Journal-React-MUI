import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        }); 
    }

    const onResetForm = () => setFormState( initialForm );

    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm]);

    //Version 1
    // const formValidation = useMemo(() => {
    //     const formCheckedValues = {};

    //     for(const formField of Object.keys( formValidations )) {
    //         const [fn, errorMessage ] = formValidations[formField];

    //         formCheckedValues[`${ formField }Valid`] = fn(formState[formField] ) ? null : errorMessage;
    //     }

    //     return formCheckedValues;
    // }, [formState]);


    //Version 2
    const formValidation = useMemo(() => Object.keys( formValidations ).reduce((acc, formField) => {
        const [fn, errorMessage ] = formValidations[formField];
        return {
            ...acc,
            [`${formField}Valid`]: fn(formState[formField] ) ? null : errorMessage,
        };
    }, {}), [formState]);
    
    const isFormValid = useMemo(() => Object.values( formValidation ).every(v => v === null), [ formValidation ]);

    return {
        ...formState,
        ...formValidation,
        formValidation,
        isFormValid,
        formState,
        onInputChange,
        onResetForm,
    }
}