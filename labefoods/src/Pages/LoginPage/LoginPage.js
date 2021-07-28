import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { api } from '../../Services/api'
import {LoginContainer, FormContainer, LogoLoginPage} from './style'
import Logo from '../../Assets/logo-future-eats@3x.png'
import Inputs from '../../Components/Inputs/Inputs'

const LoginPage = () => {
    const history = useHistory()
    const loginForm = { email: '', password: '' }
    const [form, onChange] = useForm(loginForm)

    const hasAddress = (token) => {
        api.default.headers.common['auth'] = token
        api
        .get('/profile/address')
        .then((response) => {
            localStorage.setItem('address', JSON.stringify(response.data.address))
            console.log(response)
        })
        .catch((error) => {
            alert(error.response.message)
            console.log(error)
        })
    }
    return (
        <LoginContainer>
            <LogoLoginPage src={Logo} alt='Logo marca com a escrita Future Eats' />
            <h4>Entrar</h4>
            <FormContainer>
                <Inputs>
                type='email'
                name='email'
                value={form.email}
                onChange={onChange}
                required
                label='E-mail'
                placeholder='email@email.com'
                />

            </FormContainer>
        </LoginContainer>
    )
}
export default LoginPage