import React from 'react';
function Button ({children, color}) {
    return (
      <button style = {{backgroundColor: color, color: 'white'}} >{children}</button>
    )
  }
  export default Button