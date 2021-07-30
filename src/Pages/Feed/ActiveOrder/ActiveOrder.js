import React, {useState} from "react"
import useRequestData from "../../../Hooks/useRequestData"
import {All, AllOpen, DivText, Img, MyMenuOpen} from "./style"
import iconClock from '../../../Assets/clock.png'
import { StylesProvider } from '@material-ui/core/styles'

export default function ActiveOrder() {
  const [activeOrder] = useRequestData('/active-order',{}, 'order')
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(false);

  const transition=()=>{
    setShow(!show)
    setTimeout(()=>{
      setWidth(!width)
    },500)

  }

  return(
    activeOrder && activeOrder.totalPrice?(
      show?(
      <All onClick={transition} width={width}>
        <Img src={iconClock} />
        <DivText>
          <p>Pedido em andamento</p>
          <p>{activeOrder.restaurantName}</p>
          <p>SUBTOTAL R${activeOrder.totalPrice.toFixed(2)}</p>
        </DivText>
      </All>
      ):(
        <AllOpen>
          <StylesProvider injectFirst >
            <MyMenuOpen onClick={transition}/>
          </StylesProvider>
        </AllOpen>
      )
    ):(
      <></>
    )
  )
}