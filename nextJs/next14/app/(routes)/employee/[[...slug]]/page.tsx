import React from 'react'

const page = ({ params }: { params: { slug: string[] } }) => {
    console.log("params",params);
  return (
    <div>Employee page</div>
  )
}

export default page