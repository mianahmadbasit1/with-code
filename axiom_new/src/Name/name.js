import React from 'react'
import PropTypes  from 'prop-types'
const Name = ({name}) => {
  return (
    <div>Name:{name}</div>
    
  )

}
Name.propTypes={
    name:PropTypes.number.isRequired
}
export default Name;