import React from 'react'

//we have to pass types of what props are passing in component be fore using props
//we can define type by "type" keyword
//which to use type or interfaces for props ?
//use type for applicationas and use interfaces for libraries
//TYPE is recommended
type TypeProp = {
  name: String,
  age:23
}

const SayHello = (props: TypeProp) => {
  return (
    <div>Hello {props.name} my age is {props.age}</div>
  )
}

export default SayHello