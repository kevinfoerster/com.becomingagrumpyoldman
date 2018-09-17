import React from 'react'
import { Link } from 'gatsby'
import grumpyOldMan from '../assets/images/grumpy_old_man.png'
import { Flex } from 'rebass'
const Header = ({ siteTitle }) => (
  <Flex alignItems="center" justifyContent="center">
    <h1 style={{ margin: 0, textAlign: 'center' }}>
      <Link to="/">
        <img src={grumpyOldMan} alt="becoming a grumpy old man" />
        <br />
        {siteTitle}
      </Link>
    </h1>
  </Flex>
)

export default Header
