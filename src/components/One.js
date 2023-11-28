import React from 'react'

function One({children}) {
  return (
    <p style={{ color:"#1B1B1B",
        fontSize:"16px",
        fontWeight:500,
        textTransform:'capitalize',
        opacity: 0.7,
        lineHeight: "160%"}}>
            {children}
        </p>
  )
}

export default One
