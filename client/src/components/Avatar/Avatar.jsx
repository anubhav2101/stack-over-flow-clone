import React from 'react'

const Avatar = ({ children, backgroundColor, px, py, color, borderRadius, fontSize, cursor , margin  }) => {

  const style = {
    backgroundColor,
    color: color || 'black',
    padding:`${py} ${px} `,
    borderRadius,
    margin,
    fontSize,
    cursor: cursor || null,
    textAlign:"centre"
  }


  return (
    <div style={style}>
      { children}
    </div>
  )
}

export default Avatar