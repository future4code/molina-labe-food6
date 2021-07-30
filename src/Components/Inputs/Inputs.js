import React from 'react'
import { InputContainer, TextFieldPlace } from './style'


const Inputs = (props) => {
    return (
        <InputContainer>
            <TextFieldPlace
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                label={props.label}
                pattern={props.pattern}
                placeholder={props.placeholder}
                variant='outlined'
                required={props.required}
                inputProps={{
                    autoComplete: 'new-password',
                    form: {
                        autoComplete: 'off',
                    },
                }}
            />
        </InputContainer>
    )
}

export default Inputs 