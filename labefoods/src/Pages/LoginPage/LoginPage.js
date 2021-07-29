import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { api } from '../../Services/api'
import { LoginContainer, FormContainer, LogoImage, ButtonSignUp, Button, Title, TitleButtonLogin, IconButton, PasswordContainer } from './style'
import Logo from '../../Assets/logo-future-eats-invert@3x.png'
import Inputs from '../../Components/Inputs/Inputs'
import { goToSignUpPage } from '../../Routes/coordinator'
import { Visibility, VisibilityOff } from '@material-ui/icons'


const LoginPage = () => {
    const history = useHistory()
    const loginForm = { email: '', password: '' }
    const [form, onChange] = useForm(loginForm)
    const [showPassword, setShowPassword] = useState(false)

    const viewPassword = () => {
        setShowPassword(!showPassword)
    }

    const getAddress = (token) => {
        api.defaults.headers.common['auth'] = token
        api
            .get('/profile/address')
            .then((response) => {
                localStorage.setItem('address', JSON.stringify(response.data.address))
            })
            .catch((error) => {
                alert(error.response.message)
            })
    }

    const loggingUser = (event) => {
        api
            .post('/login', form)
            .then((response) => {
                localStorage.setItem('user', JSON.stringify(response.data.user))
                localStorage.setItem('token', response.data.token)
                
                if (response.data.user.hasAddress) {
                    getAddress(response.data.token)
                    history.push('/')
                } else {
                    history.push('/address_form')
                }
            })
            .catch((error) => {
                alert(error.message)
                console.log(error.message)
            })
        event.preventDefault()
    }

    return (
        <LoginContainer>
            <LogoImage src={Logo} />
            <Title>Entrar</Title>
            <FormContainer onSubmit={loggingUser}>
                <Inputs
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={onChange}
                    required
                    label='E-mail'
                    placeholder='email@email.com'
                />
                <PasswordContainer>
                <Inputs
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    value={form.password}
                    onChange={onChange}
                    required
                    label='Senha'
                    placeholder='Mínimo 6 caracteres'                    
                />
                <IconButton onClick={viewPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}                    
                </IconButton>
                </PasswordContainer>
                <Button
                    type={'submit'}
                >
                     <TitleButtonLogin>Entrar</TitleButtonLogin> 
                </Button>
                <ButtonSignUp 
                    onClick={() => goToSignUpPage(history)}
                    type={'submit'}
                >
                    <p>Não possui cadastro? <b>Clique aqui</b></p>
                </ButtonSignUp>
            </FormContainer>
        </LoginContainer>
    )
}
export default LoginPage