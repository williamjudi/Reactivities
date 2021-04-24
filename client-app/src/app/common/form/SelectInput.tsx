import { useField } from 'formik';
import React from 'react';
import { Form, Label, Select } from 'semantic-ui-react';

interface Props {
    placeholder: string;
    name: string;
    options: any;
    lable?: string;
}

export default function SelectInput(props: Props){
    const [field, meta, helpers] = useField(props.name);
    return(
        <>
            <Form.Field error={meta.touched && !!meta.error}>
                <label>{props.lable}</label>
                <Select 
                    clearable
                    options={props.options}
                    value={field.value || null}
                    onChange={(e, data) => helpers.setValue(data.value)}
                    onBlur={() => helpers.setTouched(true)}
                    placeholder={props.placeholder}
                />
                { meta.error && meta.touched ? (
                    <Label basic color='red' pointing content={meta.error}/>
                ) : null}
            </Form.Field>
        </>
    )
}