import React from 'react'
import { InputContainer, TextField } from './style'

const Inputs = (props) => {
    return (
        <InputContainer>
            <TextField>
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
                    autocomplete: 'new-password',
                    form: {
                        autocomplete: 'off',
                    },
                }}
            </TextField>
        </InputContainer>
    )
}

export default Inputs