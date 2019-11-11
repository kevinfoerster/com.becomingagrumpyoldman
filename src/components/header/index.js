import React from 'react'
import { Link } from 'gatsby'
import grumpyOldMan from '../../assets/images/grumpy_old_man.png'
import './styles.scss'

const Header = ({ siteTitle }) => (
  <div className="header">
    <h1 style={{ margin: 0, textAlign: 'center' }}>
      <Link to="/">
        <img src={grumpyOldMan} alt="becoming a grumpy old man" />
        <br />
        {siteTitle}
      </Link>
    </h1>
    <p>fuck it, I am too old for this shit, get off my lawn and never ever come back</p>
  </div>
)

export default Header
