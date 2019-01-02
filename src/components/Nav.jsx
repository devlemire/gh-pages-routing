import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <section id="Nav-container">
      <Link to="/">Home</Link>
      <br />
      <Link to="/route1">Route1</Link>
      <br />
      <Link to="/route2">Route1</Link>
    </section>
  )
}
