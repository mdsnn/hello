import React from 'react'

export default function Greeting({name = 'Guest', title = 'Mrs'}) {
  return (
    <div>
      <h1>Hello, {title} {name}</h1>
    </div>
  )
}
