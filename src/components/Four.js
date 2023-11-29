import React from 'react'
import { FourStyled } from './FourStyles'

export default function Four({children}) {
  return (
    <p style={{ fontSize:" 18px",                           
      fontWeight: 400,
      textTransform:" capitalize",
      opacity: 0.7,
      marginLeft: "40px",
      textAlign: 'center',
      lineHeight: "30px"}}>{children}</p>
      // <FourStyled>{children}</FourStyled>
  )
}
