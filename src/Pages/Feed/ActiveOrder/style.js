import styled from 'styled-components'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'

export const All = styled.aside`
    transition: width 1s;
    width: ${props=>props.width ? '100%' : '0'};
    height: 118px;
    background-color: #5cb646;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 56px;
    cursor: pointer;
    overflow: hidden;
`
export const Img = styled.img`
    width: 32px;
    height: 32px;
    position: absolute;
    left: 24px;
`
export const DivText = styled.div`
    margin: 24px 0;
    >p{
        ::nth-child(1){
            color: white;
        }
    }
`
export const AllOpen = styled.div`
    position: fixed;
    bottom: 56px;
    right: 0px;
`

export const MyMenuOpen = styled(MenuOpenIcon)`
    width: 40px;
    height: 40px;
    color: #5cb646;
    cursor: pointer;
`