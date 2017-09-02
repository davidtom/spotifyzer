import React from 'react'
import { Button } from 'semantic-ui-react'

const LoginButton = () => (
  <Button as="a" href="http://localhost:3000/api/v1/login" size="large"> Log in </Button>
)

export {LoginButton}
