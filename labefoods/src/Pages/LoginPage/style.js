import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0px;
    box-sizing: border-box;
`
export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    height: max-content;
    width: 100%;
`
export const LogoLoginPage = styled.img`
    width: 104px;
    height: 58px;
    margin: 68px 0 16px;
`
export const Button = styled.button`
    height: 42px;
    width: 328px;
    padding: 12px 16px;
    border: none;
    outline: none;
    background-color: #5cb646;
    font-size: 16px;
    letter-spacing: -0.39px;
    cursor: pointer;
    border-radius: 2px;    
`
export const ButtonSignUp = styled.div`
    margin-top: 28px;
    p {
        margin-top: 0;
        cursor: pointer;
    }
`