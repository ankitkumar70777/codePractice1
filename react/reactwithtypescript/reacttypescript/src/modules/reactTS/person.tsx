import React from 'react'

type nameType = {
  name: {
    fName: string,
    lName: string
  }
};

const Person = (prop: nameType) => {
  return (
    <div>{prop.name.fName} {prop.name.lName}</div>
  )
}

export default Person