import React from 'react';

function Two({children}) {
  return (
    <p style={{color: "#1B1B1B",
        fontSize:"22",
        fontWeight:600,
        textTransform: "capitalize",
        marginTop: "10px"}}>{children}</p>
  )
}

export default Two
