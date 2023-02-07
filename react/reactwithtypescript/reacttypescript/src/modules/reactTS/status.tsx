import React from 'react'
type propType = {status : "loading" | "success" | "fail"};

const Status = (props : propType) => {
    const message = (status : propType["status"]) => {
        if(status === "loading"){return "messsage is loading"}
        if(status === "success"){return "got success"}
        if(status === "fail"){return "shit ! failed"}
    }
  return (
    <h2>{message(props.status)}</h2>
  )
}

export default Status