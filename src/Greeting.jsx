import React from 'react'

export default function Greeting({name = 'Guest'}) {
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  )
}
