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
export const LogoImage = styled.img`
    width: 104px;
    height: 58px;
    margin: 88px 0 16px;        
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
export const TitleButtonLogin = styled.text`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: black;
`
export const Title = styled.text`
    width: 360px;
    height: 42px;
    padding: 12px 32px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: black;
`
export const IconButton = styled.div`    
    width: 24px;
    height: 24px;
    color: #b8b8b8;
    position: absolute;    
    cursor: pointer;
    align-items: center;
    justify-content: center;
    padding: 16px 16px 16px 8px;    
`
export const PasswordContainer = styled.div`
    display: flex;    
    align-items: center;
    justify-content: flex-end;    
    height: min-content;
    width: 328px;
    height: 56px;
    margin-bottom: 16px;
`