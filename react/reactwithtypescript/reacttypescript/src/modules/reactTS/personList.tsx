import React from 'react'

type PersonNameArrProp = {
    personNameArr: {
        fName: string;
        lName: string;
    }[]
}

const PersonList = (props: PersonNameArrProp) => {
    return (
        <div>
            {
                props.personNameArr.map((nameObj) =>
                    <h2 key={nameObj.fName}>{nameObj.fName} {nameObj.lName}</h2>
                )
            }
        </div>
    )
}

export default PersonList