import React from 'react'
type propHeading = {
    //adding ? to props makes it optional to ts
    children ?: String
}

const Heading = (props:propHeading) => {
  return (
    <h2>{props.children}</h2>
  )
}

export default Heading