import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <p>Hello world!</p>
    <Link to="/page2">Adding this link will break the build</Link>
  </div>
)
