import React from 'react'
import './tags.css'

const TagsList = ({tag}) => {
  return (
    <div className=' tags'>
        <h5>{tag.tagName}</h5>
        <p>{tag.tagDesc}</p>
    </div>
  )
}

export default TagsList