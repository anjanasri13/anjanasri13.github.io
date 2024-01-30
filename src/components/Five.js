import React from 'react'

function Three({children}) {
  return (
    <p style={{ color:"#1B1B1B",
        fontSize:"16px",
        fontWeight:500,
        textTransform:'capitalize',
        opacity: 0.7,
        lineHeight: "160%",
        width:"100%"
        }}>
            {children}
        </p>
  )
}

export default Three
