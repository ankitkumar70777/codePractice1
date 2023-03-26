import React from 'react'
import Link from 'next/link'

const Welcome = () => {
  return (
    <div>
    <h1>Welcome</h1>
    <p>click <Link href="/welcome/description" as="/welcome/descriptionPage" >here</Link> to go description page</p>
    <div>
      <img src="/public/assets/images/profile.jpg" alt="my profile pic" />
    </div>
    </div>
  )
}

export default Welcome