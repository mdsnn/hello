import React from 'react'
import './Greeting.css';

export default function Greeting({name = 'Guest', title = 'Ms', color = 'black'}) {
  return (
    <div>
      <h1 className="greeting" style={{ color: color }}>Hello, {title} {name}</h1>
    </div>
  )
}
