import { useField } from 'formik';
import React from 'react';
import { Form, Label } from 'semantic-ui-react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

export default function DateInput(props: Partial<ReactDatePickerProps>){ //Partial to make all props optional
    const [field, meta, helpers] = useField(props.name!);
    return(
        <>
            <Form.Field error={meta.touched && !!meta.error}>
                <DatePicker 
                    {...field}
                    {...props}
                    selected={(field.value && new Date(field.value)) || null}
                    onChange={(value) => helpers.setValue(value)}
                    showWeekNumbers
                />
                { meta.error && meta.touched ? (
                    <Label basic color='red' pointing content={meta.error}/>
                ) : null}
            </Form.Field>
        </>
    )
}