import React from 'react'

const Mycomp = (props) => {
  console.log(props);
  return (
    <>
    {props.children && props.children}
    </>
  )
}

export default Mycomp