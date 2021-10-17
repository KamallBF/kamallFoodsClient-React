import React from "react";
import {useField} from "formik";

const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <input type="text"/>
        </div>
    )
}

export default TextField;
